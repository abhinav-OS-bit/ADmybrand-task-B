import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
};

export default function Button({ children, variant = "primary", href = "#" }: ButtonProps) {
  const baseClasses =
    "px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105";
  const variants = {
    primary: "bg-neonPurple text-white shadow-lg hover:shadow-neonPurple/50",
    secondary: "border border-neonPurple text-neonPurple hover:bg-neonPurple/10",
  };

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${variants[variant]}`}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}
