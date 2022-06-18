import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import defaultAttributes from './attributes';

const boxShadowPresets = [
	{
		defaultAttributes
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffset', value: 3 },
            { label: 'boxShadowVOffset', value: 8 },
            { label: 'boxShadowBlur', value: 12 },
			{ label: 'boxShadowSpread', value: 15 },
			{ label: 'boxShadowColor', value: 'rgb(0 0 0 / 15%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="#F7F7F7"/> <g filter="url(#filter0_d_13_288)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="white"/> </g> <defs> <filter id="filter0_d_13_288" x="55" y="75" width="218" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="2"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_288"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_288" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffset', value: 0 },
            { label: 'boxShadowVOffset', value: 18 },
            { label: 'boxShadowBlur', value: 40 },
			{ label: 'boxShadowSpread', value: -10 },
			{ label: 'boxShadowColor', value: 'rgb(0 0 0 / 20%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="#F7F7F7"/> <g filter="url(#filter0_d_13_293)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="white"/> </g> <defs> <filter id="filter0_d_13_293" x="48" y="71" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_293"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_293" result="shape"/> </filter> </defs> </svg>',
    },
    {
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffset', value: 0 },
            { label: 'boxShadowVOffset', value: 4 },
            { label: 'boxShadowBlur', value: 12 },
			{ label: 'boxShadowSpread', value: 0 },
			{ label: 'boxShadowColor', value: 'rgb(0 0 0 / 10%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="#F7F7F7"/> <g filter="url(#filter0_d_13_297)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="white"/> </g> <defs> <filter id="filter0_d_13_297" x="52" y="71" width="222" height="131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="3"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_297"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_297" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffset', value: 0 },
            { label: 'boxShadowVOffset', value: 2 },
            { label: 'boxShadowBlur', value: 5 },
			{ label: 'boxShadowSpread', value: -1 },
			{ label: 'boxShadowColor', value: 'rgb(0 0 0 / 15%)' }
        ],
     	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="#F7F7F7"/> <g filter="url(#filter0_d_13_303)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="white"/> </g> <defs> <filter id="filter0_d_13_303" x="56" y="74" width="216" height="125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="1.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_303"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_303" result="shape"/> </filter> </defs> </svg>',
	},
	{
        value: 'preset-5',
        label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffset', value: 0 },
            { label: 'boxShadowVOffset', value: 50 },
            { label: 'boxShadowBlur', value: 50 },
			{ label: 'boxShadowSpread', value: -30 },
			{ label: 'boxShadowColor', value: 'rgb(0 0 0 / 15%)' }
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="#F7F7F7"/> <g filter="url(#filter0_d_13_309)"> <ellipse cx="169.648" cy="174.445" rx="104.648" ry="16.2273" fill="white"/> </g> <g filter="url(#filter1_d_13_309)"> <path d="M275 189.388C275 192.493 272.493 195 269.4 195H70.5995C67.5034 195 65 192.486 65 189.388V81.615C65 78.5136 67.5067 76 70.5995 76H269.4C272.497 76 274.997 78.5136 274.997 81.615L275 189.388Z" fill="white"/> </g> <defs> <filter id="filter0_d_13_309" x="56" y="154.218" width="229.295" height="52.4545" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="6"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_309"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_309" result="shape"/> </filter> <filter id="filter1_d_13_309" x="63" y="74" width="214" height="123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="1"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_309"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_309" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-6',
        label: __( 'Preset 6', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffset', value: 0 },
            { label: 'boxShadowVOffset', value: 20 },
            { label: 'boxShadowBlur', value: 30 },
			{ label: 'boxShadowSpread', value: 0 },
			{ label: 'boxShadowColor', value: 'rgb(0 0 0 / 15%)' }
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="#F7F7F7"/> <g filter="url(#filter0_d_13_317)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="white"/> </g> <defs> <filter id="filter0_d_13_317" x="52" y="74" width="224" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="3.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_317"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_317" result="shape"/> </filter> </defs> </svg>',
    },
];
export {boxShadowPresets};



const boxShadowHoverPresets = [
	{
		defaultAttributes
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffsetHover', value: 3 },
            { label: 'boxShadowVOffsetHover', value: 8 },
            { label: 'boxShadowBlurHover', value: 12 },
			{ label: 'boxShadowSpreadHover', value: 15 },
			{ label: 'boxShadowColorHover', value: 'rgb(0 0 0 / 15%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <rect width="120" height="120" fill="white"/> <g filter="url(#filter0_d_3_2)"> <path d="M108.327 82.4064C108.327 83.8413 107.165 85 105.731 85H13.5952C12.1602 85 11 83.8383 11 82.4064V32.5952C11 31.1618 12.1618 30 13.5952 30H105.731C107.166 30 108.325 31.1618 108.325 32.5952L108.327 82.4064Z" fill="white"/> </g> <defs> <filter id="filter0_d_3_2" x="8" y="28" width="105.327" height="63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="2"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_2"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_2" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffsetHover', value: 0 },
            { label: 'boxShadowVOffsetHover', value: 18 },
            { label: 'boxShadowBlurHover', value: 40 },
			{ label: 'boxShadowSpreadHover', value: -10 },
			{ label: 'boxShadowColorHover', value: 'rgb(0 0 0 / 20%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <rect width="120" height="120" fill="white"/> <g filter="url(#filter0_d_3_8)"> <path d="M108.327 82.4064C108.327 83.8413 107.165 85 105.731 85H13.5952C12.1602 85 11 83.8383 11 82.4064V32.5952C11 31.1618 12.1618 30 13.5952 30H105.731C107.166 30 108.325 31.1618 108.325 32.5952L108.327 82.4064Z" fill="white"/> </g> <defs> <filter id="filter0_d_3_8" x="1" y="24" width="117.327" height="75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_8"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_8" result="shape"/> </filter> </defs> </svg>',
    },
    {
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffsetHover', value: 0 },
            { label: 'boxShadowVOffsetHover', value: 4 },
            { label: 'boxShadowBlurHover', value: 12 },
			{ label: 'boxShadowSpreadHover', value: 0 },
			{ label: 'boxShadowColorHover', value: 'rgb(0 0 0 / 10%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <rect width="120" height="120" fill="white"/> <g filter="url(#filter0_d_3_11)"> <path d="M108.327 82.4064C108.327 83.8413 107.165 85 105.731 85H13.5952C12.1602 85 11 83.8383 11 82.4064V32.5952C11 31.1618 12.1618 30 13.5952 30H105.731C107.166 30 108.325 31.1618 108.325 32.5952L108.327 82.4064Z" fill="white"/> </g> <defs> <filter id="filter0_d_3_11" x="5" y="24" width="109.327" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="3"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_11"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_11" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffsetHover', value: 0 },
            { label: 'boxShadowVOffsetHover', value: 2 },
            { label: 'boxShadowBlurHover', value: 5 },
			{ label: 'boxShadowSpreadHover', value: -1 },
			{ label: 'boxShadowColorHover', value: 'rgb(0 0 0 / 15%)' }
        ],
     	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <rect width="120" height="120" fill="white"/> <g filter="url(#filter0_d_3_14)"> <path d="M108.327 82.4064C108.327 83.8413 107.165 85 105.731 85H13.5952C12.1602 85 11 83.8383 11 82.4064V32.5952C11 31.1618 12.1618 30 13.5952 30H105.731C107.166 30 108.325 31.1618 108.325 32.5952L108.327 82.4064Z" fill="white"/> </g> <defs> <filter id="filter0_d_3_14" x="8" y="27" width="103.327" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="1.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_14"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_14" result="shape"/> </filter> </defs> </svg>',
	},
	{
        value: 'preset-5',
        label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffsetHover', value: 0 },
            { label: 'boxShadowVOffsetHover', value: 50 },
            { label: 'boxShadowBlurHover', value: 50 },
			{ label: 'boxShadowSpreadHover', value: -30 },
			{ label: 'boxShadowColorHover', value: 'rgb(0 0 0 / 15%)' }
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <rect width="120" height="120" fill="white"/> <g filter="url(#filter0_d_3_17)"> <ellipse cx="59.5" cy="75.5" rx="48.5" ry="7.5" fill="white"/> </g> <g filter="url(#filter1_d_3_17)"> <path d="M108.327 82.4064C108.327 83.8413 107.165 85 105.731 85H13.5952C12.1602 85 11 83.8383 11 82.4064V32.5952C11 31.1618 12.1618 30 13.5952 30H105.731C107.166 30 108.325 31.1618 108.325 32.5952L108.327 82.4064Z" fill="white"/> </g> <defs> <filter id="filter0_d_3_17" x="2" y="64" width="117" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="6"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_17"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_17" result="shape"/> </filter> <filter id="filter1_d_3_17" x="9" y="28" width="101.327" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="1"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_17"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_17" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-6',
        label: __( 'Preset 6', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffsetHover', value: 0 },
            { label: 'boxShadowVOffsetHover', value: 20 },
            { label: 'boxShadowBlurHover', value: 30 },
			{ label: 'boxShadowSpreadHover', value: 0 },
			{ label: 'boxShadowColorHover', value: 'rgb(0 0 0 / 15%)' }
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <rect width="120" height="120" fill="white"/> <g filter="url(#filter0_d_3_25)"> <path d="M108.327 82.4064C108.327 83.8413 107.165 85 105.731 85H13.5952C12.1602 85 11 83.8383 11 82.4064V32.5952C11 31.1618 12.1618 30 13.5952 30H105.731C107.166 30 108.325 31.1618 108.325 32.5952L108.327 82.4064Z" fill="white"/> </g> <defs> <filter id="filter0_d_3_25" x="4" y="27" width="111.327" height="69" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="3.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_25"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_25" result="shape"/> </filter> </defs> </svg>',
    },
];
export {boxShadowHoverPresets};


const innerContainerPresets = [
	{
		defaultAttributes,
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'directionDesktop', value: 'row' },
            { label: 'innerContentCustomWidthDesktop', value: 1200 },
			{ label: 'topPaddingDesktop', value: 20 },
			{ label: 'bottomPaddingDesktop', value: 40 },
			{ label: 'leftPaddingDesktop', value: 20 },
			{ label: 'rightPaddingDesktop', value: 20 },
			{ label: 'paddingLink', value: false },

        ],
		childAttributes: [
			{ label: 'backgroundType', value: 'color' },
			{ label: 'backgroundColor', value: '#ffffff' },
			{ label: 'borderStyle', value: 'none' },
			{ label: 'borderRadius', value: 5 },
			{ label: 'topPaddingDesktop', value: 20 },
			{ label: 'bottomPaddingDesktop', value: 20 },
			{ label: 'leftPaddingDesktop', value: 20 },
			{ label: 'rightPaddingDesktop', value: 20 },
			{ label: 'paddingLink', value: false },
			{ label: 'topMarginDesktop', value: 10 },
			{ label: 'bottomMarginDesktop', value: 10 },
			{ label: 'leftMarginDesktop', value: 10 },
			{ label: 'rightMarginDesktop', value: 10 },
			{ label: 'marginLink', value: false }
		],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="#F6F6F6"/> <rect x="63.75" y="108.75" width="198.5" height="55.5" stroke="#959595" stroke-width="1.5" fill="none" stroke-dasharray="4 4"/> <path d="M163 131L163 143" stroke="#959595" stroke-width="1.5" fill="none"/> <path d="M169 137L157 137" stroke="#959595" stroke-width="1.5" fill="none"/> </svg>',
    },
	{
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'directionDesktop', value: 'row' },
            { label: 'innerContentCustomWidthDesktop', value: 1200 },
			{ label: 'topPaddingDesktop', value: 20 },
			{ label: 'bottomPaddingDesktop', value: 40 },
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
			{ label: 'borderColor', value: '#dddddd' },
			{ label: 'topPaddingDesktop', value: 25 },
			{ label: 'bottomPaddingDesktop', value: 25 },
			{ label: 'leftPaddingDesktop', value: 25 },
			{ label: 'rightPaddingDesktop', value: 25 },
			{ label: 'paddingLink', value: false },
			{ label: 'topMarginDesktop', value: 10 },
			{ label: 'bottomMarginDesktop', value: 10 },
			{ label: 'leftMarginDesktop', value: 10 },
			{ label: 'rightMarginDesktop', value: 10 },
			{ label: 'marginLink', value: false }
		],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="#F6F6F6"/> <rect x="63.5" y="99.5" width="199" height="74" rx="3.5" fill="white" stroke="#959595"/> <rect x="77.75" y="114.75" width="171.5" height="44.5" stroke="#959595" stroke-width="1.5" fill="none" stroke-dasharray="4 4"/> <path d="M163.88 132.646L163.88 142.375" stroke="#959595" stroke-width="1.5" fill="none"/> <path d="M168.448 137.51L159.312 137.51" stroke="#959595" stroke-width="1.5" fill="none"/> </svg>',
    },
	{
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'directionDesktop', value: 'row' },
            { label: 'innerContentCustomWidthDesktop', value: 1200 },
			{ label: 'topPaddingDesktop', value: 20 },
			{ label: 'bottomPaddingDesktop', value: 40 },
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
			{ label: 'boxShadowColor', value: '#00000033' },
			{ label: 'topPaddingDesktop', value: 25 },
			{ label: 'bottomPaddingDesktop', value: 25 },
			{ label: 'leftPaddingDesktop', value: 25 },
			{ label: 'rightPaddingDesktop', value: 25 },
			{ label: 'paddingLink', value: false },
			{ label: 'topMarginDesktop', value: 10 },
			{ label: 'bottomMarginDesktop', value: 10 },
			{ label: 'leftMarginDesktop', value: 10 },
			{ label: 'rightMarginDesktop', value: 10 },
			{ label: 'marginLink', value: false }
		],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="#F6F6F6"/> <g filter="url(#filter0_d_16_451)"> <rect x="63" y="99" width="200" height="75" rx="4" fill="white"/> </g> <rect x="77.75" y="113.75" width="171.5" height="44.5" rx="3.25" stroke="#959595" stroke-width="1.5" fill="none" stroke-dasharray="4 4"/> <path d="M163.88 131.646L163.88 141.375" stroke="#959595" stroke-width="1.5" fill="none"/> <path d="M168.448 136.51L159.312 136.51" stroke="#959595" stroke-width="1.5" fill="none"/> <defs> <filter id="filter0_d_16_451" x="53" y="89" width="220" height="95" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_451"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_451" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'directionDesktop', value: 'row' },
            { label: 'innerContentCustomWidthDesktop', value: 1200 },
			{ label: 'topPaddingDesktop', value: 20 },
			{ label: 'bottomPaddingDesktop', value: 40 },
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
			{ label: 'boxShadowColor', value: '#0000001a' },
			{ label: 'topPaddingDesktop', value: 30 },
			{ label: 'bottomPaddingDesktop', value: 30 },
			{ label: 'leftPaddingDesktop', value: 30 },
			{ label: 'rightPaddingDesktop', value: 30 },
			{ label: 'paddingLink', value: false },
			{ label: 'topMarginDesktop', value: 10 },
			{ label: 'bottomMarginDesktop', value: 10 },
			{ label: 'leftMarginDesktop', value: 10 },
			{ label: 'rightMarginDesktop', value: 10 },
			{ label: 'marginLink', value: false }
		],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="#F6F6F6"/> <g filter="url(#filter0_d_16_460)"> <rect x="63" y="99" width="200" height="75" rx="4" fill="white"/> </g> <rect x="77.75" y="113.75" width="171.5" height="44.5" rx="3.25" stroke="#959595" stroke-width="1.5" fill="none" stroke-dasharray="4 4"/> <path d="M163.88 131.646L163.88 141.375" stroke="#959595" stroke-width="1.5" fill="none"/> <path d="M168.448 136.51L159.312 136.51" stroke="#959595" stroke-width="1.5" fill="none"/> <defs> <filter id="filter0_d_16_460" x="59" y="95" width="208" height="83" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_460"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_460" result="shape"/> </filter> </defs> </svg>',
    },
];

export default applyFilters(
    `uag_container_presets`,
    innerContainerPresets
);
