import type { Config } from "tailwindcss";

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
      colors: {
        primary: "#FCFCFC",
        accent: "#006094",
        // primary: "#1c1c22",
        // accent: "#00e187",
      }
    },
  },
  plugins: [],
};
export default config;
