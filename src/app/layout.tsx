"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-[#0b0b0b] text-gray-900 dark:text-gray-100`}
      >
        <div className="relative flex justify-end items-center px-10">
          Switch Theme: 
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
