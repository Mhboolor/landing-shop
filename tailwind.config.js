/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/home/home.html",
    "./src/pages/contact/contact.html",
    "./src/pages/blog/blog.html",
  ],
  theme: {
    fontFamily: {
      Montserrat : "Montserrat",
      Cookie : "Cookie",
    },
    extend: {
      
      height: {
        '120': '30rem',
      },
      rotate: {
        '360': '360deg',
      },
      textColor: {
        'gold': '#FFD700',
      },
    },
  },
  plugins: [],
};
