
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactRateLimit } from "@/lib/contact-rate-limit";
import { getContext } from "@netlify/functions";


const allowedServices = [
  "Website Development",
  "Mobile App Development",
  "Backend & API Development",
  "Business Automation",
  "School Technology Solutions",
  "Other",
];

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { error: "Content type must be application/json." },
        { status: 415 }
      );
    }

    const rawBody = await request.text();

    if (rawBody.length > 12000) {
      return NextResponse.json(
        { error: "Request is too large." },
        { status: 413 }
      );
    }

    let payload: ContactPayload;

    try {
      payload = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request." },
        { status: 400 }
      );
    }

    if (
      !payload ||
      typeof payload !== "object" ||
      Array.isArray(payload)
    ) {
      return NextResponse.json(
        { error: "Invalid request data." },
        { status: 400 }
      );
    }

    // Honeypot field: automated submissions may fill this.
    if (payload.website) {
      return NextResponse.json({
        message: "Your enquiry has been received.",
      });
    }

    const { name, email, service, message } = payload;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof service !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "All required fields must be valid text." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanService = service.trim();
    const cleanMessage = message.trim();

    if (cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json(
        { error: "Name must contain 2 to 100 characters." },
        { status: 400 }
      );
    }

    if (
      cleanEmail.length > 254 ||
      !isValidEmail(cleanEmail)
    ) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!allowedServices.includes(cleanService)) {
      return NextResponse.json(
        { error: "Please select a valid service." },
        { status: 400 }
      );
    }

    if (
      cleanMessage.length < 20 ||
      cleanMessage.length > 5000
    ) {
      return NextResponse.json(
        {
          error:
            "Project details must contain 20 to 5000 characters.",
        },
        { status: 400 }
      );
    }

        // Obtain the client IP from Netlify's request context.
    // Never trust a client-supplied X-Forwarded-For header.
    let clientIp: string | undefined;

    try {
      clientIp = getContext().ip;
    } catch {
      console.error("Netlify request context is unavailable.");
    }

    if (!clientIp) {
      return NextResponse.json(
        {
          error:
            "Enquiry service temporarily unavailable. Please try again later.",
        },
        { status: 503 }
      );
    }

    try {
      const result = await contactRateLimit.limit(clientIp);

      if (!result.success) {
        return NextResponse.json(
          {
            error:
              "Too many enquiries. Please try again later.",
          },
          {
            status: 429,
            headers: {
              "Retry-After": String(
                Math.max(
                  1,
                  Math.ceil((result.reset - Date.now()) / 1000)
                )
              ),
            },
          }
        );
      }
    } catch (error) {
      console.error("Contact rate limiter unavailable:", error);

      return NextResponse.json(
        {
          error:
            "Enquiry service temporarily unavailable. Please try again later.",
        },
        { status: 503 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const senderEmail = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !contactEmail || !senderEmail) {
      console.error("Contact email configuration is incomplete.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: senderEmail,
      to: [contactEmail],
      replyTo: cleanEmail,
      subject: `New Project Enquiry: ${cleanService}`,
      text: [
        "New Right Vision Technologies Enquiry",
        "",
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        `Service: ${cleanService}`,
        "",
        "Project Details:",
        cleanMessage,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend failed to accept the enquiry:", error.name);

      return NextResponse.json(
        {
          error:
            "Unable to send your enquiry. Please try again later.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "Your enquiry has been sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
