import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WindowEventProvider } from "@/contexts/window-event-provider";
import { ThemeProvider } from "@/components/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pritam Das",
    template: "%s | Pritam Das",
  },
  description:
    "Full-stack developer specializing in React, Next.js, TypeScript, and Spring Boot.",
  keywords: [
    "Pritam Das",
    "React",
    "Next.js",
    "Spring Boot",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Pritam Das" }],
  openGraph: {
    title: "Pritam Das",
    description:
      "Full-stack developer specializing in modern web applications.",
    url: "https://hareesh.is-a.dev",
    siteName: "Pritam Das",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Pritam Das",
    description: "Full-stack developer portfolio",
    creator: "@hareesh_bhittam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <WindowEventProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </WindowEventProvider>
      </body>
    </html>
  );
}