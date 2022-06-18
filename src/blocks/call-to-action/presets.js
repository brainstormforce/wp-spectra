import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import defaultAttributes from './attributes';

const presets = [
	{
		defaultAttributes
	},
	{
		value: 'preset-1',
		label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'titleSpace', value: 10 },
			{ label: 'stack', value: 'desktop' },
			{ label: 'descSpace', value: 20 },
			{ label: 'ctaTopPadding', value: 10 },
			{ label: 'ctaRightPadding', value: 14 },
			{ label: 'ctaBottomPadding' , value: 10 },
			{ label: 'ctaLeftPadding' , value: 14 },
			{ label: 'buttonAlign' , value: ''},
			{ label: 'contentWidth' , value: ''},
			{ label: 'textAlign' , value: 'center'},
			{ label: 'secondCtaTopPadding', value: 10 },
			{ label: 'secondCtaRightPadding', value: 14 },
			{ label: 'secondCtaBottomPadding' , value: 10 },
			{ label: 'secondCtaLeftPadding' , value: 14 },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 120C58 118.343 59.138 117 60.5418 117H266.259C267.663 117 268.801 118.343 268.801 120C268.801 121.657 267.663 123 266.259 123H60.5418C59.138 123 58 121.657 58 120Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M84.0166 139.009C84.0166 137.352 85.1483 136.009 86.5442 136.009H240.257C241.653 136.009 242.784 137.352 242.784 139.009C242.784 140.666 241.653 142.009 240.257 142.009H86.5442C85.1483 142.009 84.0166 140.666 84.0166 139.009Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M86.0176 96.0025C86.0176 93.792 87.6854 92 89.7428 92H237.057C239.115 92 240.783 93.792 240.783 96.0025C240.783 98.2131 239.115 100.005 237.057 100.005H89.7428C87.6854 100.005 86.0176 98.2131 86.0176 96.0025Z" fill="#CCCCCC"/> <path d="M127.377 160.749C127.377 159.231 128.588 158 130.083 158H196.717C198.211 158 199.423 159.231 199.423 160.749V177.932C199.423 179.45 198.211 180.681 196.717 180.681H130.083C128.588 180.681 127.377 179.45 127.377 177.932V160.749Z" fill="#CCCCCC"/> </svg>',
	},
	{
		value: 'preset-2',
		label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'titleSpace', value: 10 },
			{ label: 'stack', value: 'desktop' },
			{ label: 'descSpace', value: 20 },
			{ label: 'ctaTopPadding', value: 10 },
			{ label: 'ctaRightPadding', value: 14 },
			{ label: 'ctaBottomPadding' , value: 10 },
			{ label: 'ctaLeftPadding' , value: 14 },
			{ label: 'buttonAlign' , value: ''},
			{ label: 'contentWidth' , value: ''},
			{ label: 'textAlign' , value: 'left'},
			{ label: 'secondCtaTopPadding', value: 10 },
			{ label: 'secondCtaRightPadding', value: 14 },
			{ label: 'secondCtaBottomPadding' , value: 10 },
			{ label: 'secondCtaLeftPadding' , value: 14 },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 120C58 118.343 59.138 117 60.5418 117H266.259C267.663 117 268.801 118.343 268.801 120C268.801 121.657 267.663 123 266.259 123H60.5418C59.138 123 58 121.657 58 120Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 139.009C58 137.352 59.1317 136.009 60.5276 136.009H214.24C215.636 136.009 216.768 137.352 216.768 139.009C216.768 140.666 215.636 142.009 214.24 142.009H60.5276C59.1317 142.009 58 140.666 58 139.009Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 96.0025C58 93.792 59.6678 92 61.7252 92H209.04C211.097 92 212.765 93.792 212.765 96.0025C212.765 98.2131 211.097 100.005 209.04 100.005H61.7252C59.6678 100.005 58 98.2131 58 96.0025Z" fill="#CCCCCC"/> <path d="M58 160.749C58 159.231 59.2115 158 60.7059 158H127.34C128.834 158 130.046 159.231 130.046 160.749V177.932C130.046 179.45 128.834 180.681 127.34 180.681H60.7059C59.2115 180.681 58 179.45 58 177.932V160.749Z" fill="#CCCCCC"/> </svg>',
	}
];

export default applyFilters(
	`uag_call_to_action_presets`,
	presets
);
