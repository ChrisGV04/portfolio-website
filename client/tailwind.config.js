/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './composables/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Switzer', 'system-ui', 'sans-serif'],
      },

      aspectRatio: {
        'long-img': '3 / 2',
        'long-img-v': '2 / 3',
        portrait: '9 / 16',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
