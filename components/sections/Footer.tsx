import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] py-10 px-6 md:px-16 border-t border-neonPurple/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <div className="text-neonPurple text-xl font-bold">Dare to Dream</div>

        {/* Links */}
        <div className="flex gap-6 text-gray-400">
          <a href="#features" className="hover:text-neonPurple transition">Features</a>
          <a href="#pricing" className="hover:text-neonPurple transition">Pricing</a>
          <a href="#faq" className="hover:text-neonPurple transition">FAQ</a>
        </div>

        {/* Social */}
        <div className="flex gap-4 text-neonPurple text-xl">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-6">© 2025 Dare to Dream. All rights reserved.</p>
    </footer>
  );
}
