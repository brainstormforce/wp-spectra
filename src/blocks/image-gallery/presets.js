import { __ } from '@wordpress/i18n';
import defaultAttributes from './attributes';

export const boxShadowPresets = [
	{
		defaultAttributes,
	},
	{
		value: 'preset-1',
		label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imageBoxShadowHOffset', value: 3 },
			{ label: 'imageBoxShadowVOffset', value: 8 },
			{ label: 'imageBoxShadowBlur', value: 12 },
			{ label: 'imageBoxShadowSpread', value: 0 },
			{ label: 'imageBoxShadowColor', value: 'rgb(0 0 0 / 15%)' },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_451)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_451" x="55" y="75" width="218" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="2"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_451"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_451" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-2',
		label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imageBoxShadowHOffset', value: 0 },
			{ label: 'imageBoxShadowVOffset', value: 18 },
			{ label: 'imageBoxShadowBlur', value: 40 },
			{ label: 'imageBoxShadowSpread', value: -10 },
			{ label: 'imageBoxShadowColor', value: 'rgb(0 0 0 / 20%)' },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_459)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_459" x="48" y="71" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_459"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_459" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-3',
		label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imageBoxShadowHOffset', value: 0 },
			{ label: 'imageBoxShadowVOffset', value: 4 },
			{ label: 'imageBoxShadowBlur', value: 12 },
			{ label: 'imageBoxShadowSpread', value: 0 },
			{ label: 'imageBoxShadowColor', value: 'rgb(0 0 0 / 10%)' },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_463)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_463" x="48" y="67" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_463"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_463" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-4',
		label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imageBoxShadowHOffset', value: 0 },
			{ label: 'imageBoxShadowVOffset', value: 2 },
			{ label: 'imageBoxShadowBlur', value: 5 },
			{ label: 'imageBoxShadowSpread', value: -1 },
			{ label: 'imageBoxShadowColor', value: 'rgb(0 0 0 / 15%)' },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_467)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_467" x="53" y="71" width="222" height="131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="3"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_467"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_467" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-5',
		label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imageBoxShadowHOffset', value: 0 },
			{ label: 'imageBoxShadowVOffset', value: 50 },
			{ label: 'imageBoxShadowBlur', value: 50 },
			{ label: 'imageBoxShadowSpread', value: -30 },
			{ label: 'imageBoxShadowColor', value: 'rgb(0 0 0 / 15%)' },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_471)"> <ellipse cx="169" cy="174.5" rx="100" ry="16.5" fill="#FAFAFA"/> </g> <path d="M275 189.388C275 192.493 272.493 195 269.4 195H70.5995C67.5034 195 65 192.486 65 189.388V81.615C65 78.5136 67.5067 76 70.5995 76H269.4C272.497 76 274.997 78.5136 274.997 81.615L275 189.388Z" fill="#FBFBFB"/> <defs> <filter id="filter0_d_103_471" x="60" y="154" width="220" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="6"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_471"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_471" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-6',
		label: __( 'Preset 6', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imageBoxShadowHOffset', value: 0 },
			{ label: 'imageBoxShadowVOffset', value: 20 },
			{ label: 'imageBoxShadowBlur', value: 30 },
			{ label: 'imageBoxShadowSpread', value: 0 },
			{ label: 'imageBoxShadowColor', value: 'rgb(0 0 0 / 15%)' },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_476)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_476" x="52" y="74" width="224" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="3.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_476"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_476" result="shape"/> </filter> </defs> </svg>',
	},
];

export const boxShadowHoverPresets = [
	{
		defaultAttributes,
	},
	{
		value: 'preset-1',
		label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imageBoxShadowHOffsetHover', value: 3 },
			{ label: 'imageBoxShadowVOffsetHover', value: 8 },
			{ label: 'imageBoxShadowBlurHover', value: 12 },
			{ label: 'imageBoxShadowSpreadHover', value: 15 },
			{ label: 'imageBoxShadowColorHover', value: 'rgb(0 0 0 / 15%)' },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_451)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_451" x="55" y="75" width="218" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="2"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_451"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_451" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-2',
		label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imageBoxShadowHOffsetHover', value: 0 },
			{ label: 'imageBoxShadowVOffsetHover', value: 18 },
			{ label: 'imageBoxShadowBlurHover', value: 40 },
			{ label: 'imageBoxShadowSpreadHover', value: -10 },
			{ label: 'imageBoxShadowColorHover', value: 'rgb(0 0 0 / 20%)' },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_459)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_459" x="48" y="71" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_459"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_459" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-3',
		label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imageBoxShadowHOffsetHover', value: 0 },
			{ label: 'imageBoxShadowVOffsetHover', value: 4 },
			{ label: 'imageBoxShadowBlurHover', value: 12 },
			{ label: 'imageBoxShadowSpreadHover', value: 0 },
			{ label: 'imageBoxShadowColorHover', value: 'rgb(0 0 0 / 10%)' },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_463)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_463" x="48" y="67" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_463"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_463" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-4',
		label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imageBoxShadowHOffsetHover', value: 0 },
			{ label: 'imageBoxShadowVOffsetHover', value: 2 },
			{ label: 'imageBoxShadowBlurHover', value: 5 },
			{ label: 'imageBoxShadowSpreadHover', value: -1 },
			{ label: 'imageBoxShadowColorHover', value: 'rgb(0 0 0 / 15%)' },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_467)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_467" x="53" y="71" width="222" height="131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="3"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_467"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_467" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-5',
		label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imageBoxShadowHOffsetHover', value: 0 },
			{ label: 'imageBoxShadowVOffsetHover', value: 50 },
			{ label: 'imageBoxShadowBlurHover', value: 50 },
			{ label: 'imageBoxShadowSpreadHover', value: -30 },
			{ label: 'imageBoxShadowColorHover', value: 'rgb(0 0 0 / 15%)' },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_471)"> <ellipse cx="169" cy="174.5" rx="100" ry="16.5" fill="#FAFAFA"/> </g> <path d="M275 189.388C275 192.493 272.493 195 269.4 195H70.5995C67.5034 195 65 192.486 65 189.388V81.615C65 78.5136 67.5067 76 70.5995 76H269.4C272.497 76 274.997 78.5136 274.997 81.615L275 189.388Z" fill="#FBFBFB"/> <defs> <filter id="filter0_d_103_471" x="60" y="154" width="220" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="6"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_471"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_471" result="shape"/> </filter> </defs> </svg>',
	},
	{
		value: 'preset-6',
		label: __( 'Preset 6', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imageBoxShadowHOffsetHover', value: 0 },
			{ label: 'imageBoxShadowVOffsetHover', value: 20 },
			{ label: 'imageBoxShadowBlurHover', value: 30 },
			{ label: 'imageBoxShadowSpreadHover', value: 0 },
			{ label: 'imageBoxShadowColorHover', value: 'rgb(0 0 0 / 15%)' },
		],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_476)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_476" x="52" y="74" width="224" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="3.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_476"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_476" result="shape"/> </filter> </defs> </svg>',
	},
];
