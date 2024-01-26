/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "sm" : {"min":"239px" },
      "md" : {"min": "240px","max": "768px"},
      "lg" : {"min": "769px","max": "1024px"},
      "xl" : {"min": "1025px","max": "1200px"},
      "2xl" : {"min": "1201px"}
    }
  },
  plugins: [
    require("daisyui")
  ],
}
