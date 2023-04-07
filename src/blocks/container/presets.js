import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import defaultAttributes from './attributes';

const boxShadowPresets = [
	{
		defaultAttributes,
	},
	{
		value: 'preset-1',
		label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'boxShadowHOffset', value: 3 },
			{ label: 'boxShadowVOffset', value: 8 },
			{ label: 'boxShadowBlur', value: 12 },
			{ label: 'boxShadowSpread', value: 0 },
			{ label: 'boxShadowPosition', value: 'outset' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_451)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_451" x="55" y="75" width="218" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="2"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_451"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_451" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-2',
		label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'boxShadowHOffset', value: 0 },
			{ label: 'boxShadowVOffset', value: 18 },
			{ label: 'boxShadowBlur', value: 40 },
			{ label: 'boxShadowSpread', value: -10 },
			{ label: 'boxShadowPosition', value: 'outset' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_459)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_459" x="48" y="71" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_459"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_459" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-3',
		label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'boxShadowHOffset', value: 0 },
			{ label: 'boxShadowVOffset', value: 4 },
			{ label: 'boxShadowBlur', value: 12 },
			{ label: 'boxShadowSpread', value: 0 },
			{ label: 'boxShadowPosition', value: 'outset' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_463)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_463" x="48" y="67" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_463"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_463" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-4',
		label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'boxShadowHOffset', value: 0 },
			{ label: 'boxShadowVOffset', value: 2 },
			{ label: 'boxShadowBlur', value: 5 },
			{ label: 'boxShadowSpread', value: -1 },
			{ label: 'boxShadowPosition', value: 'outset' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_467)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_467" x="53" y="71" width="222" height="131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="3"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_467"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_467" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-5',
		label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'boxShadowHOffset', value: 0 },
			{ label: 'boxShadowVOffset', value: 50 },
			{ label: 'boxShadowBlur', value: 50 },
			{ label: 'boxShadowSpread', value: -30 },
			{ label: 'boxShadowPosition', value: 'outset' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_471)"> <ellipse cx="169" cy="174.5" rx="100" ry="16.5" fill="#FAFAFA"/> </g> <path d="M275 189.388C275 192.493 272.493 195 269.4 195H70.5995C67.5034 195 65 192.486 65 189.388V81.615C65 78.5136 67.5067 76 70.5995 76H269.4C272.497 76 274.997 78.5136 274.997 81.615L275 189.388Z" fill="#FBFBFB"/> <defs> <filter id="filter0_d_103_471" x="60" y="154" width="220" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="6"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_471"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_471" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-6',
		label: __( 'Preset 6', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'boxShadowHOffset', value: 0 },
			{ label: 'boxShadowVOffset', value: 20 },
			{ label: 'boxShadowBlur', value: 30 },
			{ label: 'boxShadowSpread', value: 0 },
			{ label: 'boxShadowPosition', value: 'outset' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_476)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_476" x="52" y="74" width="224" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="3.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_476"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_476" result="shape"/> </filter> </defs> </svg>',
	},
];
export { boxShadowPresets };

const boxShadowHoverPresets = [
	{
		defaultAttributes,
	},
	{
		value: 'preset-1',
		label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'boxShadowHOffsetHover', value: 3 },
			{ label: 'boxShadowVOffsetHover', value: 8 },
			{ label: 'boxShadowBlurHover', value: 12 },
			{ label: 'boxShadowSpreadHover', value: 15 },
			{ label: 'boxShadowPositionHover', value: 'outset' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_451)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_451" x="55" y="75" width="218" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="2"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_451"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_451" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-2',
		label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'boxShadowHOffsetHover', value: 0 },
			{ label: 'boxShadowVOffsetHover', value: 18 },
			{ label: 'boxShadowBlurHover', value: 40 },
			{ label: 'boxShadowSpreadHover', value: -10 },
			{ label: 'boxShadowPositionHover', value: 'outset' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_459)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_459" x="48" y="71" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_459"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_459" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-3',
		label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'boxShadowHOffsetHover', value: 0 },
			{ label: 'boxShadowVOffsetHover', value: 4 },
			{ label: 'boxShadowBlurHover', value: 12 },
			{ label: 'boxShadowSpreadHover', value: 0 },
			{ label: 'boxShadowPositionHover', value: 'outset' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_463)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_463" x="48" y="67" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_463"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_463" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-4',
		label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'boxShadowHOffsetHover', value: 0 },
			{ label: 'boxShadowVOffsetHover', value: 2 },
			{ label: 'boxShadowBlurHover', value: 5 },
			{ label: 'boxShadowSpreadHover', value: -1 },
			{ label: 'boxShadowPositionHover', value: 'outset' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_467)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_467" x="53" y="71" width="222" height="131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="3"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_467"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_467" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-5',
		label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'boxShadowHOffsetHover', value: 0 },
			{ label: 'boxShadowVOffsetHover', value: 50 },
			{ label: 'boxShadowBlurHover', value: 50 },
			{ label: 'boxShadowSpreadHover', value: -30 },
			{ label: 'boxShadowPositionHover', value: 'outset' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_471)"> <ellipse cx="169" cy="174.5" rx="100" ry="16.5" fill="#FAFAFA"/> </g> <path d="M275 189.388C275 192.493 272.493 195 269.4 195H70.5995C67.5034 195 65 192.486 65 189.388V81.615C65 78.5136 67.5067 76 70.5995 76H269.4C272.497 76 274.997 78.5136 274.997 81.615L275 189.388Z" fill="#FBFBFB"/> <defs> <filter id="filter0_d_103_471" x="60" y="154" width="220" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="6"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_471"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_471" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-6',
		label: __( 'Preset 6', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'boxShadowHOffsetHover', value: 0 },
			{ label: 'boxShadowVOffsetHover', value: 20 },
			{ label: 'boxShadowBlurHover', value: 30 },
			{ label: 'boxShadowSpreadHover', value: 0 },
			{ label: 'boxShadowPositionHover', value: 'outset' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_476)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_476" x="52" y="74" width="224" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="3.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_476"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_476" result="shape"/> </filter> </defs> </svg>',
	},
];
export { boxShadowHoverPresets };

const innerContainerPresets = [
	{
		defaultAttributes,
	},
	{
		value: 'preset-1',
		label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'topPaddingDesktop', value: 20 },
			{ label: 'bottomPaddingDesktop', value: 20 },
			{ label: 'leftPaddingDesktop', value: 20 },
			{ label: 'rightPaddingDesktop', value: 20 },
			{ label: 'paddingLink', value: false },
		],
		childAttributes: [
			{ label: 'backgroundType', value: 'color' },
			{ label: 'backgroundColor', value: '#ffffff' },
			{ label: 'borderStyle', value: 'none' },
			{ label: 'borderRadius', value: 5 },
			{ label: 'boxShadowHOffset', value: 0 },
			{ label: 'boxShadowVOffset', value: 0 },
			{ label: 'boxShadowBlur', value: '' },
			{ label: 'boxShadowSpread', value: '' },
			{ label: 'topPaddingDesktop', value: 20 },
			{ label: 'bottomPaddingDesktop', value: 20 },
			{ label: 'leftPaddingDesktop', value: 20 },
			{ label: 'rightPaddingDesktop', value: 20 },
			{ label: 'paddingLink', value: false },
			{ label: 'topMarginDesktop', value: 10 },
			{ label: 'bottomMarginDesktop', value: 10 },
			{ label: 'leftMarginDesktop', value: 10 },
			{ label: 'rightMarginDesktop', value: 10 },
			{ label: 'marginLink', value: false },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="64.25" y="102.25" width="197.5" height="67.5" stroke="#959595" stroke-width="2.5" fill="none" stroke-dasharray="4 4"/> <path d="M163 130L163 142" stroke="#959595" stroke-width="2" fill="none"/> <path d="M169 136L157 136" stroke="#959595" stroke-width="2" fill="none"/> </svg>',
	},
	{
		value: 'preset-2',
		label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'topPaddingDesktop', value: 20 },
			{ label: 'bottomPaddingDesktop', value: 20 },
			{ label: 'leftPaddingDesktop', value: 20 },
			{ label: 'rightPaddingDesktop', value: 20 },
			{ label: 'paddingLink', value: false },
		],
		childAttributes: [
			{ label: 'backgroundType', value: 'color' },
			{ label: 'backgroundColor', value: '#ffffff' },
			{ label: 'borderStyle', value: 'solid' },
			{ label: 'borderWidth', value: 1 },
			{ label: 'borderRadius', value: 5 },
			{ label: 'boxShadowHOffset', value: 0 },
			{ label: 'boxShadowVOffset', value: 0 },
			{ label: 'boxShadowBlur', value: '' },
			{ label: 'boxShadowSpread', value: '' },
			{ label: 'topPaddingDesktop', value: 25 },
			{ label: 'bottomPaddingDesktop', value: 25 },
			{ label: 'leftPaddingDesktop', value: 25 },
			{ label: 'rightPaddingDesktop', value: 25 },
			{ label: 'paddingLink', value: false },
			{ label: 'topMarginDesktop', value: 10 },
			{ label: 'bottomMarginDesktop', value: 10 },
			{ label: 'leftMarginDesktop', value: 10 },
			{ label: 'rightMarginDesktop', value: 10 },
			{ label: 'marginLink', value: false },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="63.5" y="89.5" width="199" height="94" rx="3.5" fill="white" stroke="#959595" /> <rect x="89.25" y="111.25" width="148.5" height="51.5" stroke="#959595" stroke-width="2.5" stroke-dasharray="4 4"  fill="none"/> <path d="M163.568 132L163.568 141.728" stroke="#959595" stroke-width="2" fill="none"/> <path d="M168.136 136.864L159 136.864" stroke="#959595" stroke-width="2" fill="none"/> </svg>',
	},
	{
		value: 'preset-3',
		label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'topPaddingDesktop', value: 20 },
			{ label: 'bottomPaddingDesktop', value: 20 },
			{ label: 'leftPaddingDesktop', value: 20 },
			{ label: 'rightPaddingDesktop', value: 20 },
			{ label: 'paddingLink', value: false },
		],
		childAttributes: [
			{ label: 'backgroundType', value: 'color' },
			{ label: 'backgroundColor', value: '#ffffff' },
			{ label: 'borderStyle', value: 'none' },
			{ label: 'borderRadius', value: 10 },
			{ label: 'boxShadowHOffset', value: 0 },
			{ label: 'boxShadowVOffset', value: 10 },
			{ label: 'boxShadowBlur', value: 40 },
			{ label: 'boxShadowSpread', value: -10 },
			{ label: 'topPaddingDesktop', value: 25 },
			{ label: 'bottomPaddingDesktop', value: 25 },
			{ label: 'leftPaddingDesktop', value: 25 },
			{ label: 'rightPaddingDesktop', value: 25 },
			{ label: 'paddingLink', value: false },
			{ label: 'topMarginDesktop', value: 10 },
			{ label: 'bottomMarginDesktop', value: 10 },
			{ label: 'leftMarginDesktop', value: 10 },
			{ label: 'rightMarginDesktop', value: 10 },
			{ label: 'marginLink', value: false },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_399)"> <rect x="63" y="89" width="200" height="95" rx="4" fill="white"/> <rect x="63.5" y="89.5" width="199" height="94" rx="3.5" stroke="#959595" fill="none"/> </g> <rect x="89.25" y="111.25" width="148.5" height="51.5" stroke="#959595" stroke-width="2.5" fill="none" stroke-dasharray="4 4"/> <path d="M163.568 132L163.568 141.728" stroke="#959595" stroke-width="2" fill="none"/> <path d="M168.136 136.864L159 136.864" stroke="#959595" stroke-width="2" fill="none"/> <defs> <filter id="filter0_d_103_399" x="49" y="75" width="228" height="123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="7"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_399"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_399" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-4',
		label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'topPaddingDesktop', value: 20 },
			{ label: 'bottomPaddingDesktop', value: 20 },
			{ label: 'leftPaddingDesktop', value: 20 },
			{ label: 'rightPaddingDesktop', value: 20 },
			{ label: 'paddingLink', value: false },
		],
		childAttributes: [
			{ label: 'backgroundType', value: 'color' },
			{ label: 'backgroundColor', value: '#ffffff' },
			{ label: 'borderStyle', value: 'none' },
			{ label: 'borderRadius', value: 15 },
			{ label: 'boxShadowHOffset', value: 0 },
			{ label: 'boxShadowVOffset', value: 2 },
			{ label: 'boxShadowBlur', value: 5 },
			{ label: 'boxShadowSpread', value: -1 },
			{ label: 'topPaddingDesktop', value: 30 },
			{ label: 'bottomPaddingDesktop', value: 30 },
			{ label: 'leftPaddingDesktop', value: 30 },
			{ label: 'rightPaddingDesktop', value: 30 },
			{ label: 'paddingLink', value: false },
			{ label: 'topMarginDesktop', value: 10 },
			{ label: 'bottomMarginDesktop', value: 10 },
			{ label: 'leftMarginDesktop', value: 10 },
			{ label: 'rightMarginDesktop', value: 10 },
			{ label: 'marginLink', value: false },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_408)"> <rect x="63" y="89" width="200" height="95" rx="4" fill="white"/> <rect x="63.5" y="89.5" width="199" height="94" rx="3.5" stroke="#959595" fill="none"/> </g> <rect x="89.25" y="111.25" width="148.5" height="51.5" stroke="#959595" stroke-width="2.5" stroke-dasharray="4 4" fill="none"/> <path d="M163.568 132L163.568 141.728" stroke="#959595" stroke-width="2" fill="none"/> <path d="M168.136 136.864L159 136.864" stroke="#959595" stroke-width="2" fill="none"/> <defs> <filter id="filter0_d_103_408" x="57" y="83" width="212" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="3"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_408"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_408" result="shape"/> </filter> </defs> </svg>',
	},
];

export default applyFilters( `uag_container_presets`, innerContainerPresets );
