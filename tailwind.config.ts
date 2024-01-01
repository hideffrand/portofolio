import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        super: "50rem",
      },
      fontSize: {
        giant: "10rem",
        mega: "15rem",
        super: "19rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        passion1: ["Passion One", "sans-serif"],
      },
      colors: {
        green: "#39FF19",
        purple: "#D354FF",
        red: "#FF0000",
        "secondary-black": "#151515",
      },
    },
  },
  plugins: [],
};

export default config;
