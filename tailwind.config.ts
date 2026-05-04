import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        sand: "#f7f4ef",
        mist: "#edf2f7",
        coral: "#f97360",
        teal: "#0f766e",
        gold: "#d4a44d"
      },
      boxShadow: {
        panel: "0 18px 45px rgba(15, 23, 42, 0.08)"
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top right, rgba(249,115,96,0.14), transparent 30%), radial-gradient(circle at left 20%, rgba(15,118,110,0.14), transparent 25%)"
      }
    }
  },
  plugins: []
};

export default config;
