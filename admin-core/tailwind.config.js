const withTW = require( '@bsf/force-ui/withTW' );

module.exports = withTW( {
	content: [
		'./assets/src/dashboard-app/**/*.{html,js}',
		'./assets/src/common/components/**/*.{html,js}',
		'./assets/src/**/*.{js, jsx}'
	],
	theme: {
		extend: {
			colors: {
				// brand
				'brand-background-50': '#EFF6FF',
				'brand-background-hover-100': '#DBEAFE',
				'brand-200': '#BFDBFE',
				'brand-border-300': '#93C5FD',
				'brand-400': '#60A5FA',
				'brand-500': '#3B82F6',
				'brand-primary-600': '#6005FF',
				'brand-hover-700': '#1D4ED8',
				'brand-800': '#1E40AF',
				'brand-900': '#1E3A8A',
				'brand-text-950': '#172554',
				// background
				'background-primary': '#FFFFFF',
				'background-secondary': '#F9FAFB',
				'background-inverse': '#111827',
				'background-brand': '#6005FF',
				'background-brand-light': '#F3F0FF',
				'background-important': '#DC2626',
				// field
				'field-primary-background': '#F9FAFB',
				'field-secondary-background': '#FFFFFF',
				'field-primary-hover': '#F3F4F6',
				'field-secondary-hover': '#F3F4F6',
				'field-dropzone-background': '#FFFFFF',
				'field-border': '#E5E7EB',
				'field-dropzone-background-hover': '#F9FAFB',
				'field-dropzone-color': '#6005FF',
				'field-label': '#111827',
				'field-input': '#111827',
				'field-helper': '#9CA3AF',
				'field-background-disabled': '#F9FAFB',
				'field-color-disabled': '#D1D5DB',
				'field-placeholder': '#6B7280',
				'field-border-disabled': '#F3F4F6',
				'field-color-error': '#DC2626',
				'field-border-error': '#FECACA',
				'field-background-error': '#FEF2F2',
				'field-required': '#DC2626',
				// border
				'border-interactive': '#6005FF',
				'border-subtle': '#E5E7EB',
				'border-strong': '#6B7280',
				'border-inverse': '#374151',
				'border-disabled': '#E5E7EB',
				'border-muted': '#E5E7EB',
				'border-error': '#DC2626',
				'border-transparent-subtle': '#37415114',
				'border-white': '#FFFFFF',
				// text
				'text-primary': '#111827',
				'text-secondary': '#4B5563',
				'text-tertiary': '#9CA3AF',
				'text-on-color': '#FFFFFF',
				'text-error': '#DC2626',
				'text-error-inverse': '#F87171',
				'text-inverse': '#FFFFFF',
				'text-disabled': '#D1D5DB',
				'text-on-button-disabled': '#9CA3AF',
				// link
				'link-primary': '#6005FF',
				'link-primary-hover': '#1D4ED8',
				'link-inverse': '#38BDF8',
				'link-visited': '#7C3AED',
				'link-visited-inverse': '#A78BFA',
				'link-inverse-hover': '#7DD3FC',
				// icon
				'icon-primary': '#111827',
				'icon-secondary': '#4B5563',
				'icon-on-color': '#FFFFFF',
				'icon-inverse': '#FFFFFF',
				'icon-interactive': '#6005FF',
				'icon-on-color-disabled': '#9CA3AF',
				'icon-disabled': '#D1D5DB',
				// support
				'support-error': '#DC2626',
				'support-success': '#16A34A',
				'support-warning': '#EAB308',
				'support-info': '#0284C7',
				'support-error-inverse': '#F87171',
				'support-success-inverse': '#4ADE80',
				'support-warning-inverse': '#FDE047',
				'support-info-inverse': '#38BDF8',
				// button
				'button-primary': '#6005FF',
				'button-primary-hover': '#5104D6',
				'button-secondary': '#1F2937',
				'button-secondary-hover': '#374151',
				'button-tertiary': '#FFFFFF',
				'button-tertiary-hover': '#F9FAFB',
				'button-danger': '#DC2626',
				'button-danger-secondary': '#DC2626',
				'button-danger-hover': '#B91C1C',
				'button-disabled': '#F3F4F6',
				'button-tertiary-border': '#E5E7EB',
				'button-tertiary-color': '#111827',
				// focus
				'focus': '#6005FF',
				'focus-inset': '#FFFFFF',
				'focus-inverse': '#38BDF8',
				'focus-inverse-inset': '#111827',
				'focus-error': '#DC2626',
				'focus-border': '#BFDBFE',
				'focus-error-border': '#FECACA',
				// misc
				'misc-highlight': '#BFDBFE',
				'misc-overlay': '#11182780',
				'misc-skeleton-background': '#F3F4F6',
				'misc-skeleton-element': '#D1D5DB',
				'misc-popup-button-hover': '#1118270D',
				'misc-tab-item-hover': '#E5E7EB',
				'misc-dropdown-hover': '#F3F4F6',
				'misc-loader-base': '#1118270D',
				'misc-loader-color': '#6005FF',
				'misc-progress-background': '#E5E7EB',
				// badge
				'badge-background-gray': '#F9FAFB',
				'badge-color-gray': '#1F2937',
				'badge-hover-gray': '#F3F4F6',
				'badge-border-gray': '#E5E7EB',
				'badge-background-red': '#FEF2F2',
				'badge-color-red': '#B91C1C',
				'badge-hover-red': '#FEE2E2',
				'badge-border-red': '#FECACA',
				'badge-background-yellow': '#FEFCE8',
				'badge-color-yellow': '#A16207',
				'badge-hover-yellow': '#FEF9C3',
				'badge-border-yellow': '#FEF08A',
				'badge-hover-green': '#DCFCE7',
				'badge-border-green': '#BBF7D0',
				'badge-background-green': '#F0FDF4',
				'badge-color-green': '#15803D',
				'badge-background-sky': '#F0F9FF',
				'badge-color-sky': '#0369A1',
				'badge-hover-sky': '#E0F2FE',
				'badge-border-sky': '#BAE6FD',
				'badge-background-disabled': '#F3F4F6',
				'badge-color-disabled': '#D1D5DB',
				'badge-hover-disabled': '#F3F4F6',
				'badge-border-disabled': '#E5E7EB',
				'badge-background-important': '#DC2626',
				// alert
				'alert-background-neutral': '#FFFFFF',
				'alert-border-neutral': '#E5E7EB',
				'alert-background-danger': '#FEF2F2',
				'alert-border-danger': '#FECACA',
				'alert-background-warning': '#FEFCE8',
				'alert-border-warning': '#FEF08A',
				'alert-background-green': '#F0FDF4',
				'alert-border-green': '#BBF7D0',
				'alert-background-info': '#F0F9FF',
				'alert-border-info': '#BAE6FD',
				// tab
				'tab-background': '#F3F4F6',
				'tab-border': '#E5E7EB',
				// tooltip
				'tooltip-background-light': '#FFFFFF',
				'tooltip-background-dark': '#111827',
				// toggle
				'toggle-off': '#E5E7EB',
				'toggle-on': '#6005FF',
				'toggle-dial-background': '#FFFFFF',
				'toggle-off-hover': '#D1D5DB',
				'toggle-off-border': '#D1D5DB',
				'toggle-on-hover': '#3B82F6',
				'toggle-on-border': '#60A5FA',
				'toggle-off-disabled': '#F3F4F6',
				'spectra': {
					DEFAULT: '#6104ff',
					hover: '#5300e0',
					light: '#ece1fe',
					verylight: '#f5f0ff'
				},
			},
			width: {
				'1/7': '14.2857143%',
				'1/8': '12.5%',
				'1/9': '11.1111111%',
				'1/10': '10%',
				'1/11': '9.0909091%',
				'1/12': '8.3333333%',
			},
			fontFamily: {
				inter: ['"Inter"', 'sans-serif'],
			},
			fontSize: {
				xxs: '0.6875rem', // 11px
			},
			lineHeight: {
				2.6: '0.6875rem', // 11px
			},
			boxShadow: {
				'soft-shadow-sm':
					'0px 6px 32px -12px rgba(149, 160, 178, 0.12)',
				'soft-shadow': '0px 8px 32px -12px rgba(149, 160, 178, 0.16)',
				'soft-shadow-md':
					'0px 10px 32px -12px rgba(149, 160, 178, 0.2)',
				'soft-shadow-lg':
					'0px 12px 32px -12px rgba(149, 160, 178, 0.24)',
				'soft-shadow-xl':
					'0px 16px 32px -12px rgba(149, 160, 178, 0.32)',
				'soft-shadow-2xl':
					'0px 24px 64px -12px rgba(149, 160, 178, 0.32)',
				'soft-shadow-inner': '0px 1px 1px 0px rgba(0, 0, 0, 0.05)',
				'content-wrapper': '0px 1px 1px 0px #0000000F, 0px 1px 2px 0px #0000001A',
				'overlay-left': '-16px 0px 80px -24px rgba(0, 0, 0, 0.16)',
				'overlay-right': '16px 0px 80px -24px rgba(0, 0, 0, 0.16)',
				'hover': '0px 12px 24px -12px rgba(0, 0, 0, 0.12)',
			},
			spacing: {
				120: '30rem', // 480px
				95: '23.75rem', // 380px
				141.5: '35.375rem', // 566px
				188: '47rem', // 752px
			},
			zIndex: {
				999999: '999999',
			},
			screens: {
                custom: { min: '1024px', max: '1400px' },
            },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require( '@tailwindcss/forms' ),
	],
	corePlugins: {
		preflight: false,
	},
	important: ':is(.uag-dashboard-app,.toplevel_page_spectra)',
} );