import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import defaultAttributes from './attributes';
import defaultChildAttributes from '../price-list-child/attributes';

const presets = [
	{
		defaultAttributes,
	},
	{
		defaultChildAttributes,
	},
	{
		value: 'preset-1',
		label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imgAlign', value: 'side' },
			{ label: 'imageAlignment', value: 'middle' },
			{ label: 'imageWidth', value: 150 },
			{ label: 'imageWidthTablet', value: 150 },
			{ label: 'imageWidthMobile', value: 150 },
			{ label: 'imgPaddingRight', value: 10 },
			{ label: 'imgPaddingRightTablet', value: 10 },
			{ label: 'imgPaddingRightMobile', value: 10 },
			{ label: 'columnGap', value: 50 },
			{ label: 'columnGapTablet', value: 50 },
			{ label: 'columnGapMobile', value: 50 },
			{ label: 'contentPaddingTop', value: 25 },
			{ label: 'contentPaddingTopTablet', value: 25 },
			{ label: 'contentPaddingTopMobile', value: 25 },
			{ label: 'contentPaddingBottom', value: 35 },
			{ label: 'contentPaddingBottomTablet', value: 35 },
			{ label: 'contentPaddingBottomTablet', value: 35 },
			{ label: 'headingAlign', value: '' },
			{ label: 'seperatorStyle', value: 'dashed' },
			{ label: 'seperatorWidth', value: 100 },
			{ label: 'seperatorWidthTablet', value: 100 },
			{ label: 'seperatorWidthMobile', value: 100 },
			{ label: 'seperatorThickness', value: 1 },
			{ label: 'imgPaddingBottom', value: '' },
			{ label: 'imgPaddingBottomTablet', value: '' },
			{ label: 'imgPaddingBottomMobile', value: 25 },
			{ label: 'imagePosition', value: 'left' },
			{ label: 'stack', value: 'mobile' },
			{ label: 'showImage', value: true },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M47 97V120H77.5H108V97V74H77.5H47V97ZM63.9775 80.0748C67.1925 80.7431 69.6325 83.72 69.6325 86.9744C69.6325 90.7907 66.3432 94.0472 62.4883 94.0472C59.2011 94.0472 56.1941 91.6316 55.519 88.4487C55.0099 86.0479 55.7038 83.7619 57.4735 82.0098C59.2443 80.2567 61.551 79.5705 63.9775 80.0748ZM99.332 90.247L104.426 95.2887V105.875V116.462H77.5H50.5742V115.193V113.925L58.0203 106.554L65.4664 99.1831L69.1007 102.78L72.735 106.376L83.4275 95.7907C89.3084 89.9686 94.1466 85.2051 94.1791 85.2051C94.2116 85.2051 96.5305 87.474 99.332 90.247Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M247 159C247 157.343 248.088 156 249.431 156H275.569C276.912 156 278 157.343 278 159C278 160.657 276.912 162 275.569 162H249.431C248.088 162 247 160.657 247 159Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M47 176V199H77.5H108V176V153H77.5H47V176ZM63.9775 159.075C67.1925 159.743 69.6325 162.72 69.6325 165.974C69.6325 169.791 66.3432 173.047 62.4883 173.047C59.2011 173.047 56.1941 170.632 55.519 167.449C55.0099 165.048 55.7038 162.762 57.4735 161.01C59.2443 159.257 61.551 158.57 63.9775 159.075ZM99.332 169.247L104.426 174.289V184.875V195.462H77.5H50.5742V194.193V192.925L58.0203 185.554L65.4664 178.183L69.1007 181.78L72.735 185.376L83.4275 174.791C89.3084 168.969 94.1466 164.205 94.1791 164.205C94.2116 164.205 96.5305 166.474 99.332 169.247Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M247 79C247 77.3431 248.088 76 249.431 76H275.569C276.912 76 278 77.3431 278 79C278 80.6569 276.912 82 275.569 82H249.431C248.088 82 247 80.6569 247 79Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M122 96C122 94.3431 123.138 93 124.542 93H207.259C208.663 93 209.801 94.3431 209.801 96C209.801 97.6569 208.663 99 207.259 99H124.542C123.138 99 122 97.6569 122 96Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M122 111C122 109.343 123.138 108 124.542 108H193.259C194.663 108 195.801 109.343 195.801 111C195.801 112.657 194.663 114 193.259 114H124.542C123.138 114 122 112.657 122 111Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M122 78.0025C122 75.792 123.668 74 125.725 74H218.04C220.097 74 221.765 75.792 221.765 78.0025C221.765 80.2131 220.097 82.0051 218.04 82.0051H125.725C123.668 82.0051 122 80.2131 122 78.0025Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M122 175C122 173.343 123.138 172 124.542 172H207.259C208.663 172 209.801 173.343 209.801 175C209.801 176.657 208.663 178 207.259 178H124.542C123.138 178 122 176.657 122 175Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M122 190C122 188.343 123.138 187 124.542 187H193.259C194.663 187 195.801 188.343 195.801 190C195.801 191.657 194.663 193 193.259 193H124.542C123.138 193 122 191.657 122 190Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M122 157.003C122 154.792 123.668 153 125.725 153H218.04C220.097 153 221.765 154.792 221.765 157.003C221.765 159.213 220.097 161.005 218.04 161.005H125.725C123.668 161.005 122 159.213 122 157.003Z" fill="#B6B6B6"/> </svg>',
	},
	{
		value: 'preset-2',
		label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imgAlign', value: 'top' },
			{ label: 'headingAlign', value: 'center' },
			{ label: 'imageWidth', value: 150 },
			{ label: 'imageWidthTablet', value: 140 },
			{ label: 'imageWidthMobile', value: 130 },
			{ label: 'seperatorStyle', value: 'none' },
			{ label: 'imgPaddingBottom', value: 20 },
			{ label: 'imgPaddingBottomTablet', value: 20 },
			{ label: 'imgPaddingBottomMobile', value: 20 },
			{ label: 'columnGap', value: 40 },
			{ label: 'columnGapTablet', value: 40 },
			{ label: 'columnGapMobile', value: 40 },
			{ label: 'contentPaddingTop', value: 5 },
			{ label: 'contentPaddingTopTablet', value: 5 },
			{ label: 'contentPaddingTopMobile', value: 5 },
			{ label: 'contentPaddingBottom', value: 5 },
			{ label: 'contentPaddingBottomTablet', value: 5 },
			{ label: 'contentPaddingBottomMobile', value: 5 },
			{ label: 'imageAlignment', value: '' },
			{ label: 'imgPaddingTop', value: 10 },
			{ label: 'imgPaddingTopTablet', value: '' },
			{ label: 'imgPaddingTopMobile', value: '' },
			{ label: 'imgPaddingRight', value: '' },
			{ label: 'imgPaddingRightTablet', value: '' },
			{ label: 'imgPaddingRightMobile', value: '' },
			{ label: 'showImage', value: true },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M140 198C140 196.343 141.608 195 143.591 195H182.202C184.186 195 185.794 196.343 185.794 198C185.794 199.657 184.186 201 182.202 201H143.591C141.608 201 140 199.657 140 198Z" fill="#CCCCCC"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M133 95V118H163.5H194V95V72H163.5H133V95ZM149.978 78.0748C153.193 78.7431 155.633 81.72 155.633 84.9744C155.633 88.7907 152.343 92.0472 148.488 92.0472C145.201 92.0472 142.194 89.6316 141.519 86.4487C141.01 84.0479 141.704 81.7619 143.474 80.0098C145.244 78.2567 147.551 77.5705 149.978 78.0748ZM185.332 88.247L190.426 93.2887V103.875V114.462H163.5H136.574V113.193V111.925L144.02 104.554L151.466 97.1831L155.101 100.78L158.735 104.376L169.427 93.7907C175.308 87.9686 180.147 83.2051 180.179 83.2051C180.212 83.2051 182.53 85.474 185.332 88.247Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 158C58 156.343 59.138 155 60.5418 155H266.259C267.663 155 268.801 156.343 268.801 158C268.801 159.657 267.663 161 266.259 161H60.5418C59.138 161 58 159.657 58 158Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M84.0166 175C84.0166 173.343 85.1483 172 86.5442 172H240.257C241.653 172 242.784 173.343 242.784 175C242.784 176.657 241.653 178 240.257 178H86.5442C85.1483 178 84.0166 176.657 84.0166 175Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M86 137.003C86 134.792 87.6678 133 89.7252 133H237.04C239.097 133 240.765 134.792 240.765 137.003C240.765 139.213 239.097 141.005 237.04 141.005H89.7252C87.6678 141.005 86 139.213 86 137.003Z" fill="#B6B6B6"/> </svg>',
	},
	{
		value: 'preset-3',
		label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imgAlign', value: 'top' },
			{ label: 'headingAlign', value: 'center' },
			{ label: 'seperatorStyle', value: 'solid' },
			{ label: 'seperatorWidth', value: 33 },
			{ label: 'seperatorWidthTablet', value: 33 },
			{ label: 'seperatorWidthMobile', value: 33 },
			{ label: 'seperatorThickness', value: 1 },
			{ label: 'columnGap', value: 40 },
			{ label: 'columnGapTablet', value: 40 },
			{ label: 'columnGapMobile', value: 40 },
			{ label: 'contentPaddingTop', value: 10 },
			{ label: 'contentPaddingTopTablet', value: 10 },
			{ label: 'contentPaddingTopMobile', value: 10 },
			{ label: 'contentPaddingBottom', value: 10 },
			{ label: 'contentPaddingBottomTablet', value: 10 },
			{ label: 'contentPaddingBottomMobile', value: 10 },
			{ label: 'imageAlignment', value: '' },
			{ label: 'showImage', value: false },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M140 120C140 118.343 141.608 117 143.591 117H182.202C184.186 117 185.794 118.343 185.794 120C185.794 121.657 184.186 123 182.202 123H143.591C141.608 123 140 121.657 140 120Z" fill="#CCCCCC"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M88 82C88 80.3431 89.138 79 90.5418 79H236.259C237.663 79 238.801 80.3431 238.801 82C238.801 83.6569 237.663 85 236.259 85H90.5418C89.138 85 88 83.6569 88 82Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M109 99C109 97.3431 110.132 96 111.528 96H215.24C216.636 96 217.768 97.3431 217.768 99C217.768 100.657 216.636 102 215.24 102H111.528C110.132 102 109 100.657 109 99Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M91 59.0025C91 56.792 92.6678 55 94.7252 55H232.04C234.097 55 235.765 56.792 235.765 59.0025C235.765 61.2131 234.097 63.0051 232.04 63.0051H94.7252C92.6678 63.0051 91 61.2131 91 59.0025Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M140 215C140 213.343 141.608 212 143.591 212H182.202C184.186 212 185.794 213.343 185.794 215C185.794 216.657 184.186 218 182.202 218H143.591C141.608 218 140 216.657 140 215Z" fill="#CCCCCC"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M88 177C88 175.343 89.138 174 90.5418 174H236.259C237.663 174 238.801 175.343 238.801 177C238.801 178.657 237.663 180 236.259 180H90.5418C89.138 180 88 178.657 88 177Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M109 194C109 192.343 110.132 191 111.528 191H215.24C216.636 191 217.768 192.343 217.768 194C217.768 195.657 216.636 197 215.24 197H111.528C110.132 197 109 195.657 109 194Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M91 154.003C91 151.792 92.6678 150 94.7252 150H232.04C234.097 150 235.765 151.792 235.765 154.003C235.765 156.213 234.097 158.005 232.04 158.005H94.7252C92.6678 158.005 91 156.213 91 154.003Z" fill="#B6B6B6"/> </svg>',
	},
	{
		value: 'preset-4',
		label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'imgAlign', value: 'side' },
			{ label: 'headingAlign', value: 'center' },
			{ label: 'seperatorStyle', value: 'solid' },
			{ label: 'seperatorWidth', value: 33 },
			{ label: 'seperatorWidthTablet', value: 33 },
			{ label: 'seperatorWidthMobile', value: 33 },
			{ label: 'seperatorThickness', value: 1 },
			{ label: 'columnGap', value: 50 },
			{ label: 'columnGapTablet', value: 50 },
			{ label: 'columnGapMobile', value: 50 },
			{ label: 'contentPaddingTop', value: 10 },
			{ label: 'contentPaddingTopTablet', value: 10 },
			{ label: 'contentPaddingTopMobile', value: 10 },
			{ label: 'contentPaddingBottom', value: 10 },
			{ label: 'contentPaddingBottomTablet', value: 10 },
			{ label: 'contentPaddingBottomMobile', value: 10 },
			{ label: 'imageAlignment', value: '' },
			{ label: 'imagePosition', value: 'left' },
			{ label: 'showImage', value: false },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M210 81C210 79.3431 211.088 78 212.431 78H238.569C239.912 78 241 79.3431 241 81C241 82.6569 239.912 84 238.569 84H212.431C211.088 84 210 82.6569 210 81Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M85 98C85 96.3431 86.138 95 87.5418 95H170.259C171.663 95 172.801 96.3431 172.801 98C172.801 99.6569 171.663 101 170.259 101H87.5418C86.138 101 85 99.6569 85 98Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M85 113C85 111.343 86.138 110 87.5418 110H156.259C157.663 110 158.801 111.343 158.801 113C158.801 114.657 157.663 116 156.259 116H87.5418C86.138 116 85 114.657 85 113Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M85 80.0025C85 77.792 86.6678 76 88.7252 76H181.04C183.097 76 184.765 77.792 184.765 80.0025C184.765 82.2131 183.097 84.0051 181.04 84.0051H88.7252C86.6678 84.0051 85 82.2131 85 80.0025Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M210 161C210 159.343 211.088 158 212.431 158H238.569C239.912 158 241 159.343 241 161C241 162.657 239.912 164 238.569 164H212.431C211.088 164 210 162.657 210 161Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M85 178C85 176.343 86.138 175 87.5418 175H170.259C171.663 175 172.801 176.343 172.801 178C172.801 179.657 171.663 181 170.259 181H87.5418C86.138 181 85 179.657 85 178Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M85 193C85 191.343 86.138 190 87.5418 190H156.259C157.663 190 158.801 191.343 158.801 193C158.801 194.657 157.663 196 156.259 196H87.5418C86.138 196 85 194.657 85 193Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M85 160.003C85 157.792 86.6678 156 88.7252 156H181.04C183.097 156 184.765 157.792 184.765 160.003C184.765 162.213 183.097 164.005 181.04 164.005H88.7252C86.6678 164.005 85 162.213 85 160.003Z" fill="#B6B6B6"/> </svg>',
	},
];

export default applyFilters( `uag_price_list_presets`, presets );