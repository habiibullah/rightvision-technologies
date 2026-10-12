
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Right Vision Technologies",
  description:
    "Professional software development, websites, mobile applications, and digital business solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
