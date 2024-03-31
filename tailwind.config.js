/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#2A85FF',
        'primary-active': '#0069f6',
        text: '#1A1D1F',
        'text-muted': '#6F767E',
        subtle: '#9A9FA5',
        secondary: '#EFEFEF',
        separator: '#F4F4F4',
      },
      container: {
        screens: {
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
};
