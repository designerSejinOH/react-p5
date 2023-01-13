module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 5s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate(0%)' },
          '100%': { transform: 'translate(100%)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
