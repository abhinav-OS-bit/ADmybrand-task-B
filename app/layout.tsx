import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import MagicCursor from "@/components/MagicCursor";

// Load fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite",
  description: "Futuristic AI-powered marketing suite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-darkBg text-white font-body antialiased">
        {/* Magic Cursor Global Effect */}
        <MagicCursor />

        {/* Fixed Navbar */}
        <Navbar />

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
