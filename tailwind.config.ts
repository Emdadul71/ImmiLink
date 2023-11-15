import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "490px",
        smd: "620px",
      },
      colors: {
        primary: "#be1622",
        white: "#fff",
        secondary: "#1D1D1B",
        tertiary: "#EA0519",
        grey: "#f8f9fd",
        black: "#000",
        hover: "#be1622",
        heading: "#170103",
        body: "#575757",
      },
      fontSize: {
        h2: "48px",
      },
    },
  },
  plugins: [],
};
export default config;
