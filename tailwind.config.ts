import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-spaceMono)",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      colors: {
        backgroundPrimary: colors.slate[950],
        backgroundSecondary: colors.slate[800],
        accent: "#00e187",
      },
    },
  },
  plugins: [],
};
export default config;
