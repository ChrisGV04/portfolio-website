/** @type {import('prettier').Config} */
export default {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './app/assets/css/tailwind.css',
  tabWidth: 2,
  useTabs: false,
  bracketSameLine: false,
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,
  endOfLine: 'auto',
  printWidth: 110,
};
