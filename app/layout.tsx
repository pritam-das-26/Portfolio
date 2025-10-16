import type { Metadata } from "next";
import "./globals.css";
import { WindowEventProvider } from "@/contexts/window-event-provider";
import { ThemeProvider } from "@/components/theme";
import { geistMono } from "@/lib/fonts";

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
    url: "https://pritam.vercel.app",
    siteName: "Pritam Das",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Pritam Das",
    description: "Full-stack developer portfolio",
    creator: "@pritam_das",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshag/coloured-icons@1.9.6/app/ci.min.css"
        />
      </head>
      <body
        className={`${geistMono.className} antialiased`}
        suppressHydrationWarning
      >
        <WindowEventProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </WindowEventProvider>
      </body>
    </html>
  );
}
