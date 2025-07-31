"use client";

import Image from "next/image";
import Button from "./ui/Button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 backdrop-blur-md bg-[var(--background)]/50 border-b border-white/10">
      {/* Logo + Text */}
      <a href="#hero" className="flex items-center gap-3 font-heading text-xl font-bold text-neonPurple">
        <Image
          src="/logo.png" // Path to your logo
          alt="Dare To Dream Logo"
          width={40}
          height={40}
          priority
          className="rounded-lg"
        />
        <span className="tracking-wide">Dare To Dream</span>
      </a>

      {/* Links */}
      <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
        <li>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-white transition-colors">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </li>
      </ul>

      {/* CTA Button */}
      <Button variant="primary" href="#get-started">
        Get Started
      </Button>
    </nav>
  );
}
