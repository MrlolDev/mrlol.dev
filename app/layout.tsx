import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leonardo Ollero | Software Developer",
  description:
    "Personal portfolio and blog of Leonardo Ollero (MrlolDev) - Software Developer",
  metadataBase: new URL("https://mrlol.dev"),
  icons: {
    icon: "/pfp/4.png",
    shortcut: "/pfp/4.png",
    apple: "/pfp/4.png",
  },
  keywords: [
    "Leonardo Ollero",
    "MrlolDev",
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
  ],
  authors: [
    {
      name: "Leonardo Ollero",
      url: "https://mrlol.dev",
    },
  ],
  openGraph: {
    title: "Leonardo Ollero | Software Developer",
    description:
      "Personal portfolio and blog of Leonardo Ollero (MrlolDev) - Software Developer",
    url: "https://mrlol.dev",
    siteName: "Leonardo Ollero",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/pfp/4.png",
        width: 800,
        height: 800,
        alt: "Leonardo Ollero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Ollero | Software Developer",
    description:
      "Personal portfolio and blog of Leonardo Ollero (MrlolDev) - Software Developer",
    creator: "@mrloldev",
    images: ["/pfp/4.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
