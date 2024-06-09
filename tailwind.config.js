/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        priamryDark: "#252422",
        primaryLight: "#f4f4f4",
        primaryPink: "#f9cdcd",
      },
      fontFamily: {
        FoBold: "FoBold",
        Reg: "Regular",
        FoMed: "FoMedium",
      },
    },
  },
  plugins: [],
};
