module.exports = {
  content: [
      './assets/src/dashboard-app/**/*.{html,js}'
  ],
  plugins: [
    require( '@tailwindcss/forms' ),
  ],
  theme: {
    extend: {
      colors: {
        wpcolor : '#6104ff',
        wphovercolor : '#3a009f',
        wphoverbgcolor : '#6104ff14'
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
}
