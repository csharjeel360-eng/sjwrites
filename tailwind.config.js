/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 40px 120px -50px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(99, 102, 241, 0.12), transparent 50%)',
      },
    },
  },
  plugins: [],
};
