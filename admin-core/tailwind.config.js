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
        wpcolor : '#2271b1',
        wphovercolor : '#135e96',
        wphoverbgcolor : '#2271b117'
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
