import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Starfield } from "@/components/Starfield";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brandon McCarthy | AI-Focused Software Engineer",
  description:
    "AI-focused software engineer building LLM-powered workflow automation, internal tools, and full-stack web apps. TypeScript, Python, React, Next.js, Flask.",
  openGraph: {
    title: "Brandon McCarthy | AI-Focused Software Engineer",
    description:
      "LLM-powered workflow automation, internal tools, and full-stack web apps.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Starfield />
        {children}
      </body>
    </html>
  );
}
