"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useTheme } from "./hooks/useTheme";

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
  const { theme, toggleTheme } = useTheme();

  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-[#0b0b0b] text-gray-900 dark:text-gray-100`}
      >
        <button onClick={toggleTheme}>
          Toggle to {theme === "light" ? "dark" : "light"} mode
        </button>
        {children}
      </body>
    </html>
  );
}
