/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: { sans: ["ui-sans-serif","system-ui","Inter","Arial","sans-serif"] },
      colors: {
        ink: { DEFAULT:"#0b0b0e",50:"#f6f6fb",100:"#ececf7",200:"#cfd0e6",300:"#aeb3d1",400:"#8a90b5",
               500:"#6d7396",600:"#555a77",700:"#3f4357",800:"#272a37",900:"#141622",950:"#0b0b0e" }
      }
    }
  },
  plugins: []
};
