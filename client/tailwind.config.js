/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{vue,js,ts,jsx,tsx}',
    './src/layouts/**/*.{vue,js,ts,jsx,tsx}',
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
    './src/composables/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Switzer', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        h1: ['min(9.5vw, 8rem)', '1'],
        h2: ['min(8vw, 4.5rem)', '1'],
        h3: ['min(7vw, 3.75rem)', '1'],
        h4: ['min(4.2vw, 2.25rem)', '1'],
        body: ['clamp(1rem, 2.5vw, 1.25rem)', '1.4'],
      },

      aspectRatio: {
        '2-1': '2 / 1',
        '4-5': '4 / 5',
        '5-4': '5 / 4',
        'long-img': '3 / 2',
        'long-img-v': '2 / 3',
        portrait: '9 / 16',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
