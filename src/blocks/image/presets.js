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
            { label: 'imageBoxShadowHOffset', value: 3 },
            { label: 'imageBoxShadowVOffset', value: 8 },
            { label: 'imageBoxShadowBlur', value: 12 },
			{ label: 'imageBoxShadowSpread', value: 15 },
			{ label: 'imageBoxShadowColor', value: 'rgb(0 0 0 / 15%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <rect width="120" height="120" fill="white"/> <g filter="url(#filter0_d_3_2)"> <path d="M108.327 82.4064C108.327 83.8413 107.165 85 105.731 85H13.5952C12.1602 85 11 83.8383 11 82.4064V32.5952C11 31.1618 12.1618 30 13.5952 30H105.731C107.166 30 108.325 31.1618 108.325 32.5952L108.327 82.4064Z" fill="white"/> </g> <defs> <filter id="filter0_d_3_2" x="8" y="28" width="105.327" height="63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="2"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_2"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_2" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'imageBoxShadowHOffset', value: 0 },
            { label: 'imageBoxShadowVOffset', value: 18 },
            { label: 'imageBoxShadowBlur', value: 40 },
			{ label: 'imageBoxShadowSpread', value: -10 },
			{ label: 'imageBoxShadowColor', value: 'rgb(0 0 0 / 20%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <rect width="120" height="120" fill="white"/> <g filter="url(#filter0_d_3_8)"> <path d="M108.327 82.4064C108.327 83.8413 107.165 85 105.731 85H13.5952C12.1602 85 11 83.8383 11 82.4064V32.5952C11 31.1618 12.1618 30 13.5952 30H105.731C107.166 30 108.325 31.1618 108.325 32.5952L108.327 82.4064Z" fill="white"/> </g> <defs> <filter id="filter0_d_3_8" x="1" y="24" width="117.327" height="75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_8"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_8" result="shape"/> </filter> </defs> </svg>',
    },
    {
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'imageBoxShadowHOffset', value: 0 },
            { label: 'imageBoxShadowVOffset', value: 4 },
            { label: 'imageBoxShadowBlur', value: 12 },
			{ label: 'imageBoxShadowSpread', value: 0 },
			{ label: 'imageBoxShadowColor', value: 'rgb(0 0 0 / 10%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <rect width="120" height="120" fill="white"/> <g filter="url(#filter0_d_3_11)"> <path d="M108.327 82.4064C108.327 83.8413 107.165 85 105.731 85H13.5952C12.1602 85 11 83.8383 11 82.4064V32.5952C11 31.1618 12.1618 30 13.5952 30H105.731C107.166 30 108.325 31.1618 108.325 32.5952L108.327 82.4064Z" fill="white"/> </g> <defs> <filter id="filter0_d_3_11" x="5" y="24" width="109.327" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="3"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_11"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_11" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'imageBoxShadowHOffset', value: 0 },
            { label: 'imageBoxShadowVOffset', value: 2 },
            { label: 'imageBoxShadowBlur', value: 5 },
			{ label: 'imageBoxShadowSpread', value: -1 },
			{ label: 'imageBoxShadowColor', value: 'rgb(0 0 0 / 15%)' }
        ],
     	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <rect width="120" height="120" fill="white"/> <g filter="url(#filter0_d_3_14)"> <path d="M108.327 82.4064C108.327 83.8413 107.165 85 105.731 85H13.5952C12.1602 85 11 83.8383 11 82.4064V32.5952C11 31.1618 12.1618 30 13.5952 30H105.731C107.166 30 108.325 31.1618 108.325 32.5952L108.327 82.4064Z" fill="white"/> </g> <defs> <filter id="filter0_d_3_14" x="8" y="27" width="103.327" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="1.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_14"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_14" result="shape"/> </filter> </defs> </svg>',
	},
	{
        value: 'preset-5',
        label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'imageBoxShadowHOffset', value: 0 },
            { label: 'imageBoxShadowVOffset', value: 50 },
            { label: 'imageBoxShadowBlur', value: 50 },
			{ label: 'imageBoxShadowSpread', value: -30 },
			{ label: 'imageBoxShadowColor', value: 'rgb(0 0 0 / 15%)' }
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <rect width="120" height="120" fill="white"/> <g filter="url(#filter0_d_3_17)"> <ellipse cx="59.5" cy="75.5" rx="48.5" ry="7.5" fill="white"/> </g> <g filter="url(#filter1_d_3_17)"> <path d="M108.327 82.4064C108.327 83.8413 107.165 85 105.731 85H13.5952C12.1602 85 11 83.8383 11 82.4064V32.5952C11 31.1618 12.1618 30 13.5952 30H105.731C107.166 30 108.325 31.1618 108.325 32.5952L108.327 82.4064Z" fill="white"/> </g> <defs> <filter id="filter0_d_3_17" x="2" y="64" width="117" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="6"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_17"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_17" result="shape"/> </filter> <filter id="filter1_d_3_17" x="9" y="28" width="101.327" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="1"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_17"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_17" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-6',
        label: __( 'Preset 6', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'imageBoxShadowHOffset', value: 0 },
            { label: 'imageBoxShadowVOffset', value: 20 },
            { label: 'imageBoxShadowBlur', value: 30 },
			{ label: 'imageBoxShadowSpread', value: 0 },
			{ label: 'imageBoxShadowColor', value: 'rgb(0 0 0 / 15%)' }
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <rect width="120" height="120" fill="white"/> <g filter="url(#filter0_d_3_25)"> <path d="M108.327 82.4064C108.327 83.8413 107.165 85 105.731 85H13.5952C12.1602 85 11 83.8383 11 82.4064V32.5952C11 31.1618 12.1618 30 13.5952 30H105.731C107.166 30 108.325 31.1618 108.325 32.5952L108.327 82.4064Z" fill="white"/> </g> <defs> <filter id="filter0_d_3_25" x="4" y="27" width="111.327" height="69" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="3.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_25"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_25" result="shape"/> </filter> </defs> </svg>',
    },
];


export default applyFilters(
    `uag_image_presets`,
    boxShadowPresets
);
