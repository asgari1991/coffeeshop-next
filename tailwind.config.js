/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shabnam: ["Shabnam", "sans-serif"],
        shabnamBold:["shabnam-Bold"]
      },
      colors: {
        brandGreen: "#114639",
        buttonGreen: "rgb(0, 137, 121)",
        buttonHover: "rgb(113, 29, 28)",
        mainBrown: "rgb(52, 24, 14)",
        panelBrown:" #711d1c"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
