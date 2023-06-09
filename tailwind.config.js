/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'chef-service': "url('./src/assets/home/chef-service.jpg')",
        'featured-img': "url('./src/assets/home/featured.jpg')",
        'authentication-BgImg': "url('./src/assets/others/authentication.png')",
      },
    },
  },
  plugins: [require("daisyui")],
}

