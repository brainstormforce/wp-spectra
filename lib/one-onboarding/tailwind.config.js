const withTW = require( '@bsf/force-ui/withTW' );

module.exports = withTW( {
	content: [ './src/**/*.{js, jsx}' ],
	theme: {
		extend: {
			colors: {
				// Override @bsf/force-ui library colors.
				// background
				'background-primary':
					'var(--oo-primary-background, var(--oo-default-primary-background))',
				'background-secondary':
					'var(--oo-secondary-background, var(--oo-default-secondary-background))',

				// brand colors
				'brand-primary-600':
					'var(--oo-primary-brand, var(--oo-default-primary-brand))',
				'button-primary':
					'var(--oo-primary-brand, var(--oo-default-primary-brand))',
				'button-primary-hover':
					'var(--oo-secondary-brand, var(--oo-default-secondary-brand))',
				'toggle-on':
					'var(--oo-secondary-brand, var(--oo-default-secondary-brand))',
				'toggle-on-hover':
					'var(--oo-secondary-brand, var(--oo-default-secondary-brand))',
				focus: 'var(--oo-secondary-brand, var(--oo-default-secondary-brand))',
				'border-interactive':
					'var(--oo-secondary-brand, var(--oo-default-secondary-brand))',

				// text colors
				'text-primary':
					'var(--oo-primary-text, var(--oo-default-primary-text))',
				'text-secondary':
					'var(--oo-secondary-text, var(--oo-default-secondary-text))',
				'text-tertiary':
					'var(--oo-tertiary-text, var(--oo-default-tertiary-text))',
				'field-label':
					'var(--oo-primary-text, var(--oo-default-primary-text))',
				'field-helper':
					'var(--oo-tertiary-text, var(--oo-default-tertiary-text))',

				// border colors.
				'border-strong':
					'var(--oo-tertiary-text, var(--oo-default-tertiary-text))',
			},
			fontFamily: {
				figtree: [ '"Figtree"', 'Inter', 'sans-serif' ],
			},
			fontSize: {
				xxs: '0.6875rem', // 11px
			},
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
	important: ':is(.one-onboarding,[data-floating-ui-portal])',
} );
