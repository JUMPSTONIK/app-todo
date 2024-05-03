import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'neutral-1': '#202427',
      'neutral-2': '#b6b7b9',
      'primary': '#2c8478',
      'secondary': '#363636',
      'alternative': '#F55D90',
      'error': '#f04f4f',
      'white': '#ffffff'
    },
  },
  plugins: [],
};

export default config;
