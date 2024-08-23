import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red-start': '#EB3352',
        'custom-red-end': '#E35B40',
        'primary': '#275c86',
        'secondary': '#067fc1',
        'light': '#42cff0',
        red:{
          100:'#EB3352',
          200:'#E35B40',
        }
      },
       rotate: {
        '24': '24deg',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        playFair: ['Playfair Display', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
