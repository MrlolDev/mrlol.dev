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
  openGraph: {
    title: "Leonardo Ollero | Software Developer",
    description:
      "Personal portfolio and blog of Leonardo Ollero (MrlolDev) - Software Developer",
    url: "https://mrlol.dev",
    siteName: "Leonardo Ollero",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Ollero | Software Developer",
    description:
      "Personal portfolio and blog of Leonardo Ollero (MrlolDev) - Software Developer",
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
