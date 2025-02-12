import type { Metadata } from "next";
import { Geist, Azeret_Mono } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import type React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Azeret_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oneiros 2025",
  description: "Official website for Oneiros 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-screen-2xl flex flex-col min-h-screen bg-black text-white`}
      >
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
