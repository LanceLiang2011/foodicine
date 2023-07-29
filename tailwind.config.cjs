/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#034e7b",
        "primary-2": "#255c8c",
        "secondary-blue-light": "#4be4ff",
        "secondary-cyan": "#3edad8",
        "secondary-blue-md": "#38b6ff",
        "secondary-blue-pale": "#5097d7",
        "secondary-blue-dark": "#041f60",
        "secondary-gray": "#c8dbe0",
      },
      fontFamily: {
        serif: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('/hero.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
