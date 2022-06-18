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
            { label: 'iconAlign', value: 'row-reverse' },
			{ label: 'questionLeftPaddingDesktop', value: 15 },
			{ label: 'hquestionPaddingDesktop', value: 15 },
			{ label: 'vquestionPaddingDesktop', value: 15 },
			{ label: 'questionBottomPaddingDesktop', value: 15 },
			{ label: 'answerTopPadding' , value: 0},
			{ label: 'answerRightPadding' , value: 15 },
			{ label: 'answerBottomPadding' , value: 15 },
			{ label: 'answerLeftPadding' , value: 15 },
			{ label: 'borderStyle' , value: 'solid' },
			{ label: 'borderWidth' , value: 1 },
			{ label: 'borderRadius' , value: 4 },
			{ label: 'borderColor' , value: '#dedede' },
			{ label: 'boxBgColor' , value: 'transparent'},
			{ label: 'layout' , value: 'accordion'},
			{ label: 'enableSeparator' , value: false}
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="55.75" y="75.75" width="214.5" height="77.5" rx="5.25" stroke="#959595" stroke-width="1.5" fill="none"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M73 117.466C73 116.104 73.935 115.001 75.0884 115.001H244.111C245.264 115.001 246.199 116.104 246.199 117.466C246.199 118.827 245.264 119.93 244.111 119.93H75.0884C73.935 119.93 73 118.827 73 117.466Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M73 133.084C73 131.722 73.9298 130.619 75.0768 130.619H201.371C202.518 130.619 203.448 131.722 203.448 133.084C203.448 134.445 202.518 135.549 201.371 135.549H75.0768C73.9298 135.549 73 134.445 73 133.084Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M73 97.2886C73 95.4724 74.3703 94 76.0607 94H197.098C198.789 94 200.159 95.4724 200.159 97.2886C200.159 99.1048 198.789 100.577 197.098 100.577H76.0607C74.3703 100.577 73 99.1048 73 97.2886Z" fill="#CCCCCC"/> <path d="M241.5 98H253" stroke="#959595" stroke-width="2" fill="none"/> <rect x="55.75" y="166.75" width="214.5" height="29.5" rx="5.25" stroke="#959595" stroke-width="1.5" fill="none"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M73 182.289C73 180.472 74.3703 179 76.0607 179H197.098C198.789 179 200.159 180.472 200.159 182.289C200.159 184.105 198.789 185.577 197.098 185.577H76.0607C74.3703 185.577 73 184.105 73 182.289Z" fill="#CCCCCC"/> <path d="M241.5 181.75H253" stroke="#959595" stroke-width="2" fill="none"/> <path d="M247.25 187.5L247.25 176" stroke="#959595" stroke-width="2" fill="none"/> </svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconAlign', value: 'row-reverse' },
			{ label: 'questionLeftPaddingDesktop', value: 15 },
			{ label: 'hquestionPaddingDesktop', value: 15 },
			{ label: 'vquestionPaddingDesktop', value: 15 },
			{ label: 'questionBottomPaddingDesktop', value: 15 },
			{ label: 'answerTopPadding' , value: 0},
			{ label: 'answerRightPadding' , value: 15 },
			{ label: 'answerBottomPadding' , value: 15 },
			{ label: 'answerLeftPadding' , value: 15 },
			{ label: 'borderStyle' , value: 'none' },
			{ label: 'borderWidth' , value: 1 },
			{ label: 'borderRadius' , value: 4 },
			{ label: 'borderColor' , value: '#f0f0f0' },
			{ label: 'boxBgColor' , value: '#F2F5F7'},
			{ label: 'layout' , value: 'accordion'},
			{ label: 'enableSeparator' , value: false}
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="55" y="75" width="216" height="79" rx="6" fill="#FAFAFA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M73 117.466C73 116.104 73.935 115.001 75.0884 115.001H244.111C245.264 115.001 246.199 116.104 246.199 117.466C246.199 118.827 245.264 119.93 244.111 119.93H75.0884C73.935 119.93 73 118.827 73 117.466Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M73 133.084C73 131.722 73.9298 130.619 75.0768 130.619H201.371C202.518 130.619 203.448 131.722 203.448 133.084C203.448 134.445 202.518 135.549 201.371 135.549H75.0768C73.9298 135.549 73 134.445 73 133.084Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M73 97.2886C73 95.4724 74.3703 94 76.0607 94H197.098C198.789 94 200.159 95.4724 200.159 97.2886C200.159 99.1048 198.789 100.577 197.098 100.577H76.0607C74.3703 100.577 73 99.1048 73 97.2886Z" fill="#CCCCCC"/> <path d="M241.5 98H253" stroke="#959595" stroke-width="2" fill="none"/> <rect x="55" y="166" width="216" height="31" rx="6" fill="#FAFAFA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M73 182.289C73 180.472 74.3703 179 76.0607 179H197.098C198.789 179 200.159 180.472 200.159 182.289C200.159 184.105 198.789 185.577 197.098 185.577H76.0607C74.3703 185.577 73 184.105 73 182.289Z" fill="#CCCCCC"/> <path d="M241.5 181.75H253" stroke="#959595" stroke-width="2" fill="none"/> <path d="M247.25 187.5L247.25 176" stroke="#959595" stroke-width="2" fill="none"/> </svg>',
    },
    {
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconAlign', value: 'row-reverse' },
			{ label: 'questionLeftPaddingDesktop', value: 20 },
			{ label: 'hquestionPaddingDesktop', value: 20 },
			{ label: 'vquestionPaddingDesktop', value: 20 },
			{ label: 'questionBottomPaddingDesktop', value: 20 },
			{ label: 'answerTopPadding' , value: 20},
			{ label: 'answerRightPadding' , value: 20},
			{ label: 'answerBottomPadding' , value: 20},
			{ label: 'answerLeftPadding' , value: 20},
			{ label: 'borderStyle' , value: 'solid' },
			{ label: 'borderWidth' , value: 1 },
			{ label: 'borderRadius' , value: 5 },
			{ label: 'borderColor' , value: '#dedede' },
			{ label: 'boxBgColor' , value: 'transparent'},
			{ label: 'layout' , value: 'grid'},
			{ label: 'enableSeparator' , value: true}
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="44.75" y="84.75" width="113.5" height="103.5" rx="5.25" stroke="#959595" stroke-width="1.5" fill="none"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 160.5C58 159.672 58.4697 159 59.049 159H143.951C144.53 159 145 159.672 145 160.5C145 161.328 144.53 162 143.951 162H59.049C58.4697 162 58 161.328 58 160.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 142.5C58 141.672 58.4697 141 59.049 141H143.951C144.53 141 145 141.672 145 142.5C145 143.328 144.53 144 143.951 144H59.049C58.4697 144 58 143.328 58 142.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 151.5C58 150.672 58.4697 150 59.049 150H143.951C144.53 150 145 150.672 145 151.5C145 152.328 144.53 153 143.951 153H59.049C58.4697 153 58 152.328 58 151.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 133.5C58 132.672 58.4697 132 59.049 132H143.951C144.53 132 145 132.672 145 133.5C145 134.328 144.53 135 143.951 135H59.049C58.4697 135 58 134.328 58 133.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 169.5C58 168.672 58.4704 168 59.0507 168H122.949C123.53 168 124 168.672 124 169.5C124 170.328 123.53 171 122.949 171H59.0507C58.4704 171 58 170.328 58 169.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 103.5C58 102.119 58.6574 101 59.4683 101H117.532C118.343 101 119 102.119 119 103.5C119 104.881 118.343 106 117.532 106H59.4683C58.6574 106 58 104.881 58 103.5Z" fill="#CCCCCC"/> <path d="M45 119H157.5" stroke="#959595" fill="none"/> <rect x="167.75" y="84.75" width="113.5" height="103.5" rx="5.25" stroke="#959595" stroke-width="1.5" fill="none"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M181 160.5C181 159.672 181.47 159 182.049 159H266.951C267.53 159 268 159.672 268 160.5C268 161.328 267.53 162 266.951 162H182.049C181.47 162 181 161.328 181 160.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M181 142.5C181 141.672 181.47 141 182.049 141H266.951C267.53 141 268 141.672 268 142.5C268 143.328 267.53 144 266.951 144H182.049C181.47 144 181 143.328 181 142.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M181 151.5C181 150.672 181.47 150 182.049 150H266.951C267.53 150 268 150.672 268 151.5C268 152.328 267.53 153 266.951 153H182.049C181.47 153 181 152.328 181 151.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M181 133.5C181 132.672 181.47 132 182.049 132H266.951C267.53 132 268 132.672 268 133.5C268 134.328 267.53 135 266.951 135H182.049C181.47 135 181 134.328 181 133.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M181 169.5C181 168.672 181.47 168 182.051 168H245.949C246.53 168 247 168.672 247 169.5C247 170.328 246.53 171 245.949 171H182.051C181.47 171 181 170.328 181 169.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M181 103.5C181 102.119 181.657 101 182.468 101H240.532C241.343 101 242 102.119 242 103.5C242 104.881 241.343 106 240.532 106H182.468C181.657 106 181 104.881 181 103.5Z" fill="#CCCCCC"/> <path d="M168 119H280.5" stroke="#959595" fill="none"/> </svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addon b s-for-gutenberg' ),
        attributes: [
            { label: 'iconAlign', value: 'row-reverse' },
			{ label: 'questionLeftPaddingDesktop', value: 25  },
			{ label: 'hquestionPaddingDesktop', value: 25  },
			{ label: 'vquestionPaddingDesktop', value: 25  },
			{ label: 'questionBottomPaddingDesktop', value: 15  },
			{ label: 'answerTopPadding' , value: 0 },
			{ label: 'answerRightPadding' , value: 25 },
			{ label: 'answerBottomPadding' , value: 25 },
			{ label: 'answerLeftPadding' , value: 25 },
			{ label: 'borderStyle' , value: 'solid' },
			{ label: 'borderWidth' , value: 1 },
			{ label: 'borderRadius' , value: 5 },
			{ label: 'borderColor' , value: '#e9e9e9' },
			{ label: 'boxBgColor' , value: '#F5F5F5'},
			{ label: 'layout' , value: 'grid'},
			{ label: 'enableSeparator' , value: true}
        ],
     	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="44" y="84" width="115" height="105" rx="6" fill="#FAFAFA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 160.5C58 159.672 58.4697 159 59.049 159H143.951C144.53 159 145 159.672 145 160.5C145 161.328 144.53 162 143.951 162H59.049C58.4697 162 58 161.328 58 160.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 142.5C58 141.672 58.4697 141 59.049 141H143.951C144.53 141 145 141.672 145 142.5C145 143.328 144.53 144 143.951 144H59.049C58.4697 144 58 143.328 58 142.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 151.5C58 150.672 58.4697 150 59.049 150H143.951C144.53 150 145 150.672 145 151.5C145 152.328 144.53 153 143.951 153H59.049C58.4697 153 58 152.328 58 151.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 133.5C58 132.672 58.4697 132 59.049 132H143.951C144.53 132 145 132.672 145 133.5C145 134.328 144.53 135 143.951 135H59.049C58.4697 135 58 134.328 58 133.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 169.5C58 168.672 58.4704 168 59.0507 168H122.949C123.53 168 124 168.672 124 169.5C124 170.328 123.53 171 122.949 171H59.0507C58.4704 171 58 170.328 58 169.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 103.5C58 102.119 58.6574 101 59.4683 101H117.532C118.343 101 119 102.119 119 103.5C119 104.881 118.343 106 117.532 106H59.4683C58.6574 106 58 104.881 58 103.5Z" fill="#CCCCCC"/> <path d="M45 119H157.5" stroke="#D8D3D3" stroke-width="0.5"/> <rect x="167" y="84" width="115" height="105" rx="6" fill="#FAFAFA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M181 160.5C181 159.672 181.47 159 182.049 159H266.951C267.53 159 268 159.672 268 160.5C268 161.328 267.53 162 266.951 162H182.049C181.47 162 181 161.328 181 160.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M181 142.5C181 141.672 181.47 141 182.049 141H266.951C267.53 141 268 141.672 268 142.5C268 143.328 267.53 144 266.951 144H182.049C181.47 144 181 143.328 181 142.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M181 151.5C181 150.672 181.47 150 182.049 150H266.951C267.53 150 268 150.672 268 151.5C268 152.328 267.53 153 266.951 153H182.049C181.47 153 181 152.328 181 151.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M181 133.5C181 132.672 181.47 132 182.049 132H266.951C267.53 132 268 132.672 268 133.5C268 134.328 267.53 135 266.951 135H182.049C181.47 135 181 134.328 181 133.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M181 169.5C181 168.672 181.47 168 182.051 168H245.949C246.53 168 247 168.672 247 169.5C247 170.328 246.53 171 245.949 171H182.051C181.47 171 181 170.328 181 169.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M181 103.5C181 102.119 181.657 101 182.468 101H240.532C241.343 101 242 102.119 242 103.5C242 104.881 241.343 106 240.532 106H182.468C181.657 106 181 104.881 181 103.5Z" fill="#CCCCCC"/> <path d="M168 119H280.5" stroke="#D8D3D3" stroke-width="0.5"/> </svg>',
	},
];

export default applyFilters(
    `uag_faq_presets`,
    presets
);
