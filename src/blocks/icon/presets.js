/**
 * Block Icon : Presets.
 */
import { __ } from '@wordpress/i18n';
import defaultAttributes from './attributes';

const dropShadowPresets = [
	{
		defaultAttributes
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconShadowHOffset', value: 2 },
            { label: 'iconShadowVOffset', value: 4 },
            { label: 'iconShadowBlur', value: 3 },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_451)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_451" x="55" y="75" width="218" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="2"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_451"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_451" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconShadowHOffset', value: 0 },
            { label: 'iconShadowVOffset', value: 5 },
            { label: 'iconShadowBlur', value: 5 },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_459)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_459" x="48" y="71" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_459"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_459" result="shape"/> </filter> </defs> </svg>',
    },
    {
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconShadowHOffset', value: 0 },
            { label: 'iconShadowVOffset', value: 2 },
            { label: 'iconShadowBlur', value: 3 },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_463)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_463" x="48" y="67" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_463"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_463" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconShadowHOffset', value: 0 },
            { label: 'iconShadowVOffset', value: 1 },
            { label: 'iconShadowBlur', value: 3 },
        ],
     	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_467)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_467" x="53" y="71" width="222" height="131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="3"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_467"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_467" result="shape"/> </filter> </defs> </svg>',
	},
	{
        value: 'preset-5',
        label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconShadowHOffset', value: 0 },
            { label: 'iconShadowVOffset', value: 5 },
            { label: 'iconShadowBlur', value: 5 },
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_471)"> <ellipse cx="169" cy="174.5" rx="100" ry="16.5" fill="#FAFAFA"/> </g> <path d="M275 189.388C275 192.493 272.493 195 269.4 195H70.5995C67.5034 195 65 192.486 65 189.388V81.615C65 78.5136 67.5067 76 70.5995 76H269.4C272.497 76 274.997 78.5136 274.997 81.615L275 189.388Z" fill="#FBFBFB"/> <defs> <filter id="filter0_d_103_471" x="60" y="154" width="220" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="6"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_471"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_471" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-6',
        label: __( 'Preset 6', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconShadowHOffset', value: 0 },
            { label: 'iconShadowVOffset', value: 5 },
            { label: 'iconShadowBlur', value: 8 },
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_476)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_476" x="52" y="74" width="224" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="3.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_476"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_476" result="shape"/> </filter> </defs> </svg>',
    },
];
export {dropShadowPresets};

const boxShadowPresets = [
	{
		defaultAttributes
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconBoxShadowHOffset', value: 3 },
            { label: 'iconBoxShadowVOffset', value: 8 },
            { label: 'iconBoxShadowBlur', value: 12 },
			{ label: 'iconBoxShadowSpread', value: 0 },
			{ label: 'iconBoxShadowPosition', value: 'outset' },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_451)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_451" x="55" y="75" width="218" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="2"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_451"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_451" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconBoxShadowHOffset', value: 0 },
            { label: 'iconBoxShadowVOffset', value: 18 },
            { label: 'iconBoxShadowBlur', value: 40 },
			{ label: 'iconBoxShadowSpread', value: -10 },
			{ label: 'iconBoxShadowPosition', value: 'outset' },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_459)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_459" x="48" y="71" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_459"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_459" result="shape"/> </filter> </defs> </svg>',
    },
    {
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconBoxShadowHOffset', value: 0 },
            { label: 'iconBoxShadowVOffset', value: 4 },
            { label: 'iconBoxShadowBlur', value: 12 },
			{ label: 'iconBoxShadowSpread', value: 0 },
			{ label: 'iconBoxShadowPosition', value: 'outset' },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_463)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_463" x="48" y="67" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_463"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_463" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconBoxShadowHOffset', value: 0 },
            { label: 'iconBoxShadowVOffset', value: 2 },
            { label: 'iconBoxShadowBlur', value: 5 },
			{ label: 'iconBoxShadowSpread', value: -1 },
			{ label: 'iconBoxShadowPosition', value: 'outset' },
        ],
     	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_467)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_467" x="53" y="71" width="222" height="131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="3"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_467"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_467" result="shape"/> </filter> </defs> </svg>',
	},
	{
        value: 'preset-5',
        label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconBoxShadowHOffset', value: 0 },
            { label: 'iconBoxShadowVOffset', value: 50 },
            { label: 'iconBoxShadowBlur', value: 50 },
			{ label: 'iconBoxShadowSpread', value: -30 },
			{ label: 'iconBoxShadowPosition', value: 'outset' },
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_471)"> <ellipse cx="169" cy="174.5" rx="100" ry="16.5" fill="#FAFAFA"/> </g> <path d="M275 189.388C275 192.493 272.493 195 269.4 195H70.5995C67.5034 195 65 192.486 65 189.388V81.615C65 78.5136 67.5067 76 70.5995 76H269.4C272.497 76 274.997 78.5136 274.997 81.615L275 189.388Z" fill="#FBFBFB"/> <defs> <filter id="filter0_d_103_471" x="60" y="154" width="220" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="6"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_471"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_471" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-6',
        label: __( 'Preset 6', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconBoxShadowHOffset', value: 0 },
            { label: 'iconBoxShadowVOffset', value: 20 },
            { label: 'iconBoxShadowBlur', value: 30 },
			{ label: 'iconBoxShadowSpread', value: 0 },
			{ label: 'iconBoxShadowPosition', value: 'outset' },
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_476)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_476" x="52" y="74" width="224" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="3.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_476"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_476" result="shape"/> </filter> </defs> </svg>',
    },
];
export {boxShadowPresets};


const iconPresets = [
	{
		defaultAttributes
	},
	{
		defaultPresetAttributes: [
            { label: 'iconBackgroundColor' },
			{ label: 'iconBorderTopLeftRadius' },
			{ label: 'iconBorderTopRightRadius' },
			{ label: 'iconBorderBottomRightRadius' },
			{ label: 'iconBorderBottomLeftRadius' },
			{ label: 'iconBorderTopWidth' },
			{ label: 'iconBorderRightWidth' },
			{ label: 'iconBorderBottomWidth' },
			{ label: 'iconBorderLeftWidth' },
			{ label: 'iconBorderStyle' },
		]
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
			{ label: 'iconBackgroundColor',  value: '#DCF1FF' },
			{ label: 'iconBorderStyle', value: '' },
			{ label: 'iconBorderTopLeftRadius', value: 50 },
			{ label: 'iconBorderTopRightRadius', value: 50 },
			{ label: 'iconBorderBottomRightRadius', value: 50 },
			{ label: 'iconBorderBottomLeftRadius', value: 50 },
			{ label: 'iconTopPadding', value: 12},
			{ label: 'iconRightPadding', value: 12 },
			{ label: 'iconBottomPadding', value: 12 },
			{ label: 'iconLeftPadding', value: 12 },
        ],
        icon: '<svg width="325" height="245" viewBox="0 0 325 245" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/><circle cx="162.619" cy="136.119" r="30" fill="#B6B6B6"/><path d="M161.512 118.9C161.922 117.917 163.316 117.917 163.726 118.9L167.605 128.193C167.778 128.608 168.168 128.891 168.615 128.927L178.652 129.744C179.715 129.831 180.145 131.156 179.336 131.851L171.697 138.412C171.356 138.704 171.207 139.162 171.311 139.599L173.635 149.397C173.881 150.434 172.754 151.254 171.844 150.699L163.243 145.461C162.86 145.227 162.378 145.227 161.995 145.461L153.394 150.699C152.484 151.254 151.356 150.434 151.602 149.397L153.927 139.599C154.031 139.162 153.882 138.704 153.541 138.412L145.901 131.851C145.093 131.156 145.523 129.831 146.586 129.744L156.623 128.927C157.07 128.891 157.46 128.608 157.633 128.193L161.512 118.9Z" fill="white"/></svg>',
    },
	{
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
			{ label: 'iconBackgroundColor',  value: '' },
			{ label: 'iconBorderStyle', value: 'solid' },
			{ label: 'iconBorderTopLeftRadius', value: 50 },
			{ label: 'iconBorderTopRightRadius', value: 50 },
			{ label: 'iconBorderBottomRightRadius', value: 50 },
			{ label: 'iconBorderBottomLeftRadius', value: 50 },
			{ label: 'iconBorderTopWidth', value: 2},
			{ label: 'iconBorderRightWidth', value: 2 },
			{ label: 'iconBorderBottomWidth', value: 2 },
			{ label: 'iconBorderLeftWidth', value: 2 },
			{ label: 'iconTopPadding', value: 12},
			{ label: 'iconRightPadding', value: 12 },
			{ label: 'iconBottomPadding', value: 12 },
			{ label: 'iconLeftPadding', value: 12 },
        ],
        icon: '<svg width="325" height="245" viewBox="0 0 325 245" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/><path d="M192.119 136C192.119 152.225 178.913 165.381 162.619 165.381C146.325 165.381 133.119 152.225 133.119 136C133.119 119.775 146.325 106.619 162.619 106.619C178.913 106.619 192.119 119.775 192.119 136Z" stroke="#959595" fill="none"/><path d="M161.512 118.848C161.924 117.867 163.314 117.867 163.726 118.848L167.604 128.105C167.778 128.518 168.167 128.801 168.614 128.837L178.643 129.65C179.707 129.736 180.137 131.064 179.326 131.758L171.699 138.281C171.357 138.574 171.208 139.033 171.312 139.471L173.634 149.219C173.881 150.255 172.755 151.075 171.844 150.523L163.241 145.304C162.859 145.072 162.379 145.072 161.996 145.304L153.394 150.523C152.483 151.075 151.357 150.255 151.604 149.219L153.926 139.471C154.03 139.033 153.88 138.574 153.538 138.281L145.912 131.758C145.101 131.064 145.531 129.736 146.595 129.65L156.624 128.837C157.071 128.801 157.46 128.518 157.633 128.105L161.512 118.848Z" fill="#B6B6B6"/></svg>',
    },
	{
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
			{ label: 'iconBackgroundColor',  value: '#DCF1FF' },
			{ label: 'iconBorderStyle', value: '' },
			{ label: 'iconBorderTopLeftRadius', value: 6 },
			{ label: 'iconBorderTopRightRadius', value: 6 },
			{ label: 'iconBorderBottomRightRadius', value: 6 },
			{ label: 'iconBorderBottomLeftRadius', value: 6 },
			{ label: 'iconTopPadding', value: 12},
			{ label: 'iconRightPadding', value: 12 },
			{ label: 'iconBottomPadding', value: 12 },
			{ label: 'iconLeftPadding', value: 12 },
        ],
        icon: '<svg width="325" height="245" viewBox="0 0 325 245" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/><rect x="132.902" y="106" width="60.1963" height="60" rx="5" fill="#B6B6B6"/><path d="M161.893 118.849C162.305 117.867 163.695 117.867 164.107 118.849L167.986 128.105C168.159 128.519 168.548 128.801 168.995 128.837L179.024 129.651C180.088 129.737 180.518 131.065 179.707 131.759L172.081 138.282C171.738 138.574 171.589 139.034 171.693 139.472L174.015 149.219C174.262 150.256 173.136 151.076 172.225 150.523L163.622 145.304C163.24 145.072 162.76 145.072 162.378 145.304L153.775 150.523C152.864 151.076 151.738 150.256 151.985 149.219L154.307 139.472C154.411 139.034 154.261 138.574 153.919 138.282L146.293 131.759C145.482 131.065 145.912 129.737 146.976 129.651L157.005 128.837C157.452 128.801 157.841 128.519 158.014 128.105L161.893 118.849Z" fill="white"/></svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
        attributes: [
			{ label: 'iconBackgroundColor',  value: '' },
			{ label: 'iconBorderStyle', value: 'solid' },
			{ label: 'iconBorderTopWidth', value: 2},
			{ label: 'iconBorderRightWidth', value: 2 },
			{ label: 'iconBorderBottomWidth', value: 2 },
			{ label: 'iconBorderLeftWidth', value: 2 },
			{ label: 'iconTopPadding', value: 12},
			{ label: 'iconRightPadding', value: 12 },
			{ label: 'iconBottomPadding', value: 12 },
			{ label: 'iconLeftPadding', value: 12 },
        ],
        icon: '<svg width="325" height="245" viewBox="0 0 325 245" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/><rect x="133.402" y="106.5" width="59.1963" height="59" rx="4.5" stroke="#959595" fill="none"/><path d="M161.893 118.849C162.305 117.867 163.695 117.867 164.107 118.849L167.986 128.105C168.159 128.519 168.548 128.801 168.995 128.837L179.024 129.651C180.088 129.737 180.518 131.065 179.707 131.759L172.081 138.282C171.738 138.574 171.589 139.034 171.693 139.472L174.015 149.219C174.262 150.256 173.136 151.076 172.225 150.523L163.622 145.304C163.24 145.072 162.76 145.072 162.378 145.304L153.775 150.523C152.864 151.076 151.738 150.256 151.985 149.219L154.307 139.472C154.411 139.034 154.261 138.574 153.919 138.282L146.293 131.759C145.482 131.065 145.912 129.737 146.976 129.651L157.005 128.837C157.452 128.801 157.841 128.519 158.014 128.105L161.893 118.849Z" fill="#B6B6B6"/></svg>',
    },
];

export {iconPresets};
