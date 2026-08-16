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
  metadataBase: new URL("https://portfolio-coral-pi-56.vercel.app"),
  title: "Brandon McCarthy | AI Solutions & Implementation Engineer",
  description:
    "Brandon McCarthy builds AI and full stack software with TypeScript, Python, PostgreSQL, and AWS. See Workbench, Pulse, IntakeFlow, and StockYard.",
  keywords: [
    "AI solutions engineer",
    "AI implementation engineer",
    "enterprise AI workflows",
    "healthcare integrations",
    "TypeScript",
    "Python",
    "AWS Bedrock",
    "LLM evaluation",
    "human-in-the-loop systems",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Brandon McCarthy | AI Solutions & Implementation Engineer",
    description:
      "AI and full stack projects built with TypeScript, Python, PostgreSQL, and AWS.",
    url: "/",
    siteName: "Brandon McCarthy Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Brandon McCarthy | AI Solutions & Implementation Engineer",
    description:
      "AI and full stack projects built with TypeScript, Python, PostgreSQL, and AWS.",
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
