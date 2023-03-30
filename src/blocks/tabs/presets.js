import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import defaultAttributes from './attributes';

const presets = [
	{
		defaultAttributes,
	},
	{
		value: 'preset-1',
		label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'tabsStyleD', value: 'hstyle2' },
			{ label: 'tabBodyTopPadding', value: 15 },
			{ label: 'tabBodyRightPadding', value: 15 },
			{ label: 'tabBodyBottomPadding', value: 15 },
			{ label: 'tabBodyLeftPadding', value: 0 },
			{ label: 'tabBorderTopLeftRadius', value: 0 },
			{ label: 'tabBorderTopRightRadius', value: 0 },
			{ label: 'tabBorderBottomLeftRadius', value: 0 },
			{ label: 'tabBorderBottomRightRadius', value: 0 },
			{ label: 'tabBorderStyle', value: 'none' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 138C58 136.343 59.138 135 60.5418 135H266.259C267.663 135 268.801 136.343 268.801 138C268.801 139.657 267.663 141 266.259 141H60.5418C59.138 141 58 139.657 58 138Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 159C58 157.343 59.1317 156 60.5276 156H214.24C215.636 156 216.768 157.343 216.768 159C216.768 160.657 215.636 162 214.24 162H60.5276C59.1317 162 58 160.657 58 159Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 113C58 111.343 59.0884 110 60.4311 110H86.5689C87.9116 110 89 111.343 89 113C89 114.657 87.9116 116 86.5689 116H60.4311C59.0884 116 58 114.657 58 113Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M99 113C99 111.343 100.088 110 101.431 110H127.569C128.912 110 130 111.343 130 113C130 114.657 128.912 116 127.569 116H101.431C100.088 116 99 114.657 99 113Z" fill="#B6B6B6"/> <path d="M140 112.75H151.5" stroke="#B6B6B6" stroke-width="3" fill="none"/> <path d="M145.75 118.5L145.75 107" stroke="#B6B6B6" stroke-width="3" fill="none"/> </svg>',
	},
	{
		value: 'preset-2',
		label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'tabsStyleD', value: 'hstyle3' },
			{ label: 'titleAlign', value: 'left' },
			{ label: 'tabBodyTopPadding', value: '' },
			{ label: 'tabBodyRightPadding', value: '' },
			{ label: 'tabBodyBottomPadding', value: '' },
			{ label: 'tabBodyLeftPadding', value: '' },
			{ label: 'tabBorderTopLeftRadius', value: 0 },
			{ label: 'tabBorderTopRightRadius', value: 0 },
			{ label: 'tabBorderBottomLeftRadius', value: 0 },
			{ label: 'tabBorderBottomRightRadius', value: 0 },
			{ label: 'tabBorderTopWidth', value: 1 },
			{ label: 'tabBorderRightWidth', value: 1 },
			{ label: 'tabBorderBottomWidth', value: 1 },
			{ label: 'tabBorderLeftWidth', value: 1 },
			{ label: 'tabBorderStyle', value: 'solid' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M60 144C60 142.343 61.138 141 62.5418 141H268.259C269.663 141 270.801 142.343 270.801 144C270.801 145.657 269.663 147 268.259 147H62.5418C61.138 147 60 145.657 60 144Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M60 161C60 159.343 61.1317 158 62.5276 158H216.24C217.636 158 218.768 159.343 218.768 161C218.768 162.657 217.636 164 216.24 164H62.5276C61.1317 164 60 162.657 60 161Z" fill="#D2D2D2"/> <path d="M170 112.75H181.5" stroke="#B6B6B6" stroke-width="3" fill="none"/> <path d="M175.75 118.5L175.75 107" stroke="#B6B6B6" stroke-width="3" fill="none"/> <path d="M49.75 122.75H278C279.795 122.75 281.25 124.205 281.25 126V178C281.25 179.795 279.795 181.25 278 181.25H53C51.2051 181.25 49.75 179.795 49.75 178V122.75Z" stroke="#959595" stroke-width="1.5" fill="none"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M98.05 102.5H52C51.1716 102.5 50.5 103.172 50.5 104V122.18H99.55V104C99.55 103.172 98.8784 102.5 98.05 102.5ZM52 101C50.3431 101 49 102.343 49 104V123.5H101.05V104C101.05 102.343 99.7069 101 98.05 101H52Z" fill="#959595"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M159.05 102.5H113C112.172 102.5 111.5 103.172 111.5 104V122.18H160.55V104C160.55 103.172 159.878 102.5 159.05 102.5ZM113 101C111.343 101 110 102.343 110 104V123.5H162.05V104C162.05 102.343 160.707 101 159.05 101H113Z" fill="#959595"/> </svg>',
	},
	{
		value: 'preset-3',
		label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'tabsStyleD', value: 'vstyle6' },
			{ label: 'titleAlign', value: 'center' },
			{ label: 'tabBodyTopPadding', value: '' },
			{ label: 'tabBodyRightPadding', value: '' },
			{ label: 'tabBodyBottomPadding', value: '' },
			{ label: 'tabBodyLeftPadding', value: '' },
			{ label: 'tabBorderTopLeftRadius', value: 4 },
			{ label: 'tabBorderTopRightRadius', value: 4 },
			{ label: 'tabBorderBottomLeftRadius', value: 4 },
			{ label: 'tabBorderBottomRightRadius', value: 4 },
			{ label: 'tabBorderTopWidth', value: 1 },
			{ label: 'tabBorderRightWidth', value: 1 },
			{ label: 'tabBorderBottomWidth', value: 1 },
			{ label: 'tabBorderLeftWidth', value: 1 },
			{ label: 'tabBorderStyle', value: 'solid' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M134 130C134 128.343 135.138 127 136.542 127H252.259C253.663 127 254.801 128.343 254.801 130C254.801 131.657 253.663 133 252.259 133H136.542C135.138 133 134 131.657 134 130Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M134 144C134 142.343 135.132 141 136.528 141H210.24C211.636 141 212.768 142.343 212.768 144C212.768 145.657 211.636 147 210.24 147H136.528C135.132 147 134 145.657 134 144Z" fill="#D2D2D2"/> <rect x="115.75" y="90.75" width="157.5" height="91.5" rx="3.25" stroke="#959595" stroke-width="1.5" fill="none"/> <path d="M52.75 92.7492C52.75 91.6338 53.6369 90.75 54.7059 90.75H101.34C102.409 90.75 103.296 91.6338 103.296 92.7492V109.932C103.296 111.047 102.409 111.931 101.34 111.931H54.7059C53.6369 111.931 52.75 111.047 52.75 109.932V92.7492Z" stroke="#959595" stroke-width="1.5" fill="none"/> <path d="M52.75 120.749C52.75 119.634 53.6369 118.75 54.7059 118.75H101.34C102.409 118.75 103.296 119.634 103.296 120.749V137.932C103.296 139.047 102.409 139.931 101.34 139.931H54.7059C53.6369 139.931 52.75 139.047 52.75 137.932V120.749Z" stroke="#959595" stroke-width="1.5" fill="none"/> <path d="M52.75 148.749C52.75 147.634 53.6369 146.75 54.7059 146.75H101.34C102.409 146.75 103.296 147.634 103.296 148.749V165.932C103.296 167.047 102.409 167.931 101.34 167.931H54.7059C53.6369 167.931 52.75 167.047 52.75 165.932V148.749Z" stroke="#959595" stroke-width="1.5" fill="none"/> </svg>',
	},
	{
		value: 'preset-4',
		label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'tabsStyleD', value: 'vstyle8' },
			{ label: 'titleAlign', value: 'center' },
			{ label: 'tabBodyTopPadding', value: '' },
			{ label: 'tabBodyRightPadding', value: '' },
			{ label: 'tabBodyBottomPadding', value: '' },
			{ label: 'tabBodyLeftPadding', value: '' },
			{ label: 'tabBorderTopLeftRadius', value: 0 },
			{ label: 'tabBorderTopRightRadius', value: 0 },
			{ label: 'tabBorderBottomLeftRadius', value: 0 },
			{ label: 'tabBorderBottomRightRadius', value: 0 },
			{ label: 'tabBorderTopWidth', value: 1 },
			{ label: 'tabBorderRightWidth', value: 1 },
			{ label: 'tabBorderBottomWidth', value: 1 },
			{ label: 'tabBorderLeftWidth', value: 1 },
			{ label: 'tabBorderStyle', value: 'solid' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M134 130C134 128.343 135.138 127 136.542 127H252.259C253.663 127 254.801 128.343 254.801 130C254.801 131.657 253.663 133 252.259 133H136.542C135.138 133 134 131.657 134 130Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M134 144C134 142.343 135.132 141 136.528 141H210.24C211.636 141 212.768 142.343 212.768 144C212.768 145.657 211.636 147 210.24 147H136.528C135.132 147 134 145.657 134 144Z" fill="#D2D2D2"/> <rect x="115.75" y="90.75" width="157.5" height="91.5" rx="3.25" stroke="#959595" stroke-width="1.5" fill="none"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M115.55 98.5H68C67.1716 98.5 66.5 99.1716 66.5 100V116.68C66.5 117.508 67.1716 118.18 68 118.18H115.55V98.5ZM68 97C66.3431 97 65 98.3431 65 100V116.68C65 118.337 66.3431 119.68 68 119.68H116.05V97H68Z" fill="#959595"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M115.55 126.5H68C67.1716 126.5 66.5 127.172 66.5 128V144.68C66.5 145.508 67.1716 146.18 68 146.18H115.55V126.5ZM68 125C66.3431 125 65 126.343 65 128V144.68C65 146.337 66.3431 147.68 68 147.68H116.05V125H68Z" fill="#959595"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M115.55 154.5H68C67.1716 154.5 66.5 155.172 66.5 156V172.68C66.5 173.508 67.1716 174.18 68 174.18H115.55V154.5ZM68 153C66.3431 153 65 154.343 65 156V172.68C65 174.337 66.3431 175.68 68 175.68H116.05V153H68Z" fill="#959595"/> </svg>',
	},
];

export default applyFilters( `uag_tabs_presets`, presets );
