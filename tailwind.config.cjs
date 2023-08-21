/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        serif: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('/hero.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
