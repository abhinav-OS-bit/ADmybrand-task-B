import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0B0F19",       // deep navy
        neonPurple: "#8B5CF6",   // main accent
        neonBlue: "#3B82F6",     // secondary accent
        glass: "rgba(255,255,255,0.1)" // frosted glass
      },
      backdropBlur: {
        glass: "12px"
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
