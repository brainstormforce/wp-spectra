module.exports = {
	content: [
		'./assets/src/dashboard-app/**/*.{html,js}',
	],
	plugins: [
		require( '@tailwindcss/forms' ),
	],
	theme: {
		extend: {
			colors: {
				wpcolor : '#6104ff',
				wphovercolor : '#3a009f',
				wphoverbgcolor : '#9d62ff14',
				'spectra': {
					DEFAULT: '#6104FF',
					'hover': '#5300E0',
				},
			},
			fontFamily: {
				inter: ['"Inter"', 'sans-serif'],
			}
		},
	},
	variants: {
		extend: {},
	},
}
