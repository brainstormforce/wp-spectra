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
            { label: 'headingAlign', value: 'center' },
            { label: 'ctaType', value: 'button' },
            { label: 'showIcon', value: true }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 153C58 151.343 59.138 150 60.5418 150H266.259C267.663 150 268.801 151.343 268.801 153C268.801 154.657 267.663 156 266.259 156H60.5418C59.138 156 58 154.657 58 153Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M84.0166 172.009C84.0166 170.352 85.1483 169.009 86.5442 169.009H240.257C241.653 169.009 242.784 170.352 242.784 172.009C242.784 173.666 241.653 175.009 240.257 175.009H86.5442C85.1483 175.009 84.0166 173.666 84.0166 172.009Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M86.0176 129.003C86.0176 126.792 87.6854 125 89.7428 125H237.057C239.115 125 240.783 126.792 240.783 129.003C240.783 131.213 239.115 133.005 237.057 133.005H89.7428C87.6854 133.005 86.0176 131.213 86.0176 129.003Z" fill="#CCCCCC"/> <path d="M127.377 193.749C127.377 192.231 128.588 191 130.083 191H196.717C198.211 191 199.423 192.231 199.423 193.749V210.932C199.423 212.45 198.211 213.681 196.717 213.681H130.083C128.588 213.681 127.377 212.45 127.377 210.932V193.749Z" fill="#CCCCCC"/> <path d="M187 83C187 96.8071 175.807 108 162 108C148.193 108 137 96.8071 137 83C137 69.1929 148.193 58 162 58C175.807 58 187 69.1929 187 83Z" fill="#CCCCCC"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M173.753 72.1759C174.632 73.0646 174.625 74.4979 173.736 75.3773L156.326 92.6048L147.35 82.3526C146.526 81.412 146.621 79.9818 147.562 79.1582C148.503 78.3346 149.933 78.4295 150.756 79.3702L156.563 86.0015L170.552 72.1591C171.44 71.2797 172.874 71.2872 173.753 72.1759Z" fill="white"/> </svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'headingAlign', value: 'left' },
            { label: 'ctaType', value: 'button' },
			{ label: 'iconLeftMargin', value: 0 },
			{ label: 'iconRightMargin', value: 0 },
            { label: 'showIcon', value: true },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 153C58 151.343 59.138 150 60.5418 150H266.259C267.663 150 268.801 151.343 268.801 153C268.801 154.657 267.663 156 266.259 156H60.5418C59.138 156 58 154.657 58 153Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 172.009C58 170.352 59.1317 169.009 60.5276 169.009H214.24C215.636 169.009 216.768 170.352 216.768 172.009C216.768 173.666 215.636 175.009 214.24 175.009H60.5276C59.1317 175.009 58 173.666 58 172.009Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 129.003C58 126.792 59.6678 125 61.7252 125H209.04C211.097 125 212.765 126.792 212.765 129.003C212.765 131.213 211.097 133.005 209.04 133.005H61.7252C59.6678 133.005 58 131.213 58 129.003Z" fill="#CCCCCC"/> <path d="M58 193.749C58 192.231 59.2115 191 60.7059 191H127.34C128.834 191 130.046 192.231 130.046 193.749V210.932C130.046 212.45 128.834 213.681 127.34 213.681H60.7059C59.2115 213.681 58 212.45 58 210.932V193.749Z" fill="#CCCCCC"/> <path d="M108 83C108 96.8071 96.8071 108 83 108C69.1929 108 58 96.8071 58 83C58 69.1929 69.1929 58 83 58C96.8071 58 108 69.1929 108 83Z" fill="#CCCCCC"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M94.7529 72.1759C95.6323 73.0646 95.6248 74.4979 94.7361 75.3773L77.3263 92.6048L68.35 82.3526C67.5265 81.412 67.6214 79.9818 68.562 79.1582C69.5027 78.3346 70.9329 78.4295 71.7565 79.3702L77.5625 86.0015L91.5515 72.1591C92.4402 71.2797 93.8735 71.2872 94.7529 72.1759Z" fill="white"/> </svg>',
    },
    {
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'headingAlign', value: 'left' },
            { label: 'ctaType', value: 'none' },
            { label: 'showIcon', value: true },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 177.631C58 175.975 59.138 174.631 60.5418 174.631H266.259C267.663 174.631 268.801 175.975 268.801 177.631C268.801 179.288 267.663 180.631 266.259 180.631H60.5418C59.138 180.631 58 179.288 58 177.631Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 196.64C58 194.984 59.1317 193.64 60.5276 193.64H214.24C215.636 193.64 216.768 194.984 216.768 196.64C216.768 198.297 215.636 199.64 214.24 199.64H60.5276C59.1317 199.64 58 198.297 58 196.64Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 154.634C58 152.423 59.6678 150.631 61.7252 150.631H209.04C211.097 150.631 212.765 152.423 212.765 154.634C212.765 156.845 211.097 158.637 209.04 158.637H61.7252C59.6678 158.637 58 156.845 58 154.634Z" fill="#CCCCCC"/> <path d="M114 102C114 117.464 101.464 130 86 130C70.536 130 58 117.464 58 102C58 86.536 70.536 74 86 74C101.464 74 114 86.536 114 102Z" fill="#CCCCCC"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M101.644 92.9563C102.629 93.9516 102.62 95.5569 101.625 96.5419L82.126 115.837L72.0726 104.354C71.1502 103.301 71.2565 101.699 72.31 100.776C73.3635 99.854 74.9654 99.9603 75.8878 101.014L82.3906 108.441L98.0582 92.9374C99.0536 91.9525 100.659 91.9609 101.644 92.9563Z" fill="white"/> </svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'headingAlign', value: 'center' },
			{ label: 'showIcon', value: false },
			{ label: 'ctaType', value: 'text' },
        ],
     	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 127C58 125.343 59.138 124 60.5418 124H266.259C267.663 124 268.801 125.343 268.801 127C268.801 128.657 267.663 130 266.259 130H60.5418C59.138 130 58 128.657 58 127Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M84 146.009C84 144.352 85.1317 143.009 86.5276 143.009H240.24C241.636 143.009 242.768 144.352 242.768 146.009C242.768 147.666 241.636 149.009 240.24 149.009H86.5276C85.1317 149.009 84 147.666 84 146.009Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M86 104.003C86 101.792 87.6678 100 89.7252 100H237.04C239.097 100 240.765 101.792 240.765 104.003C240.765 106.213 239.097 108.005 237.04 108.005H89.7252C87.6678 108.005 86 106.213 86 104.003Z" fill="#CCCCCC"/> <rect x="125" y="164" width="77" height="10" rx="4" fill="#CCCCCC"/> </svg>',
	},
	{
        value: 'preset-5',
        label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'headingAlign', value: 'left' },
			{ label: 'showIcon', value: false },
			{ label: 'ctaType', value: 'text' },
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 127C58 125.343 59.138 124 60.5418 124H266.259C267.663 124 268.801 125.343 268.801 127C268.801 128.657 267.663 130 266.259 130H60.5418C59.138 130 58 128.657 58 127Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 146.009C58 144.352 59.1317 143.009 60.5276 143.009H214.24C215.636 143.009 216.768 144.352 216.768 146.009C216.768 147.666 215.636 149.009 214.24 149.009H60.5276C59.1317 149.009 58 147.666 58 146.009Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 104.003C58 101.792 59.6678 100 61.7252 100H209.04C211.097 100 212.765 101.792 212.765 104.003C212.765 106.213 211.097 108.005 209.04 108.005H61.7252C59.6678 108.005 58 106.213 58 104.003Z" fill="#CCCCCC"/> <rect x="58" y="164" width="77" height="10" rx="4" fill="#CCCCCC"/> </svg>',
    },
];

export default applyFilters(
    `uag_info_box_presets`,
    presets
);
