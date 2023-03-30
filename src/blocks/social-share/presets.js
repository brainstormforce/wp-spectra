import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import defaultAttributes from './attributes';
import defaultChildAttributes from '../social-share-child/attributes';

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
			{ label: 'gap', value: 15 },
			{ label: 'gapTablet', value: 15 },
			{ label: 'gapMobile', value: 15 },
			{ label: 'bgSize', value: 12 },
			{ label: 'bgSizeTablet', value: 12 },
			{ label: 'bgSizeMobile', value: 12 },
			{ label: 'size', value: 20 },
			{ label: 'sizeTablet', value: 20 },
			{ label: 'sizeMobile', value: 20 },
			{ label: 'borderRadius', value: 0 },
			{ label: 'borderRadiusTablet', value: 0 },
			{ label: 'borderRadiusMobile', value: 0 },
			{ label: 'border', value: 0 },
			{ label: 'iconColor', value: '#ffffff' },
			{ label: 'iconBgColor', value: '#0170B9' },
		],
		childAttributes: [
			{ label: 'icon_color', value: '' },
			{ label: 'icon_bg_color', value: '' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="47" y="101" width="70.0293" height="70" fill="#B6B6B6"/> <ellipse cx="81.4675" cy="136.547" rx="9.30076" ry="9.29688" fill="#E6E7E9"/> <rect x="127.485" y="101" width="70.0293" height="70" fill="#B6B6B6"/> <ellipse cx="161.953" cy="136.547" rx="9.30076" ry="9.29688" fill="#E6E7E9"/> <rect x="207.971" y="101" width="70.0293" height="70" fill="#B6B6B6"/> <ellipse cx="242.438" cy="136.547" rx="9.30076" ry="9.29688" fill="#E6E7E9"/> </svg>',
	},
	{
		value: 'preset-2',
		label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'gap', value: 15 },
			{ label: 'gapTablet', value: 15 },
			{ label: 'gapMobile', value: 15 },
			{ label: 'bgSize', value: 12 },
			{ label: 'bgSizeTablet', value: 12 },
			{ label: 'bgSizeMobile', value: 12 },
			{ label: 'size', value: 20 },
			{ label: 'sizeTablet', value: 20 },
			{ label: 'sizeMobile', value: 20 },
			{ label: 'borderRadius', value: 5 },
			{ label: 'borderRadiusTablet', value: 5 },
			{ label: 'borderRadiusMobile', value: 5 },
			{ label: 'border', value: 0 },
			{ label: 'iconColor', value: '#ffffff' },
			{ label: 'iconBgColor', value: '#0170B9' },
		],
		childAttributes: [
			{ label: 'icon_color', value: '' },
			{ label: 'icon_bg_color', value: '' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="48" y="101" width="69.5243" height="70" rx="8" fill="#B6B6B6"/> <ellipse cx="82.219" cy="136.547" rx="9.23369" ry="9.29688" fill="#E6E7E9"/> <rect x="128.682" y="101" width="69.5243" height="70" rx="8" fill="#B6B6B6"/> <ellipse cx="162.901" cy="136.547" rx="9.23369" ry="9.29688" fill="#E6E7E9"/> <rect x="209.476" y="101" width="69.5243" height="70" rx="8" fill="#B6B6B6"/> <ellipse cx="243.695" cy="136.547" rx="9.23369" ry="9.29688" fill="#E6E7E9"/> </svg>',
	},
	{
		value: 'preset-3',
		label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'gap', value: 15 },
			{ label: 'gapTablet', value: 15 },
			{ label: 'gapMobile', value: 15 },
			{ label: 'bgSize', value: 12 },
			{ label: 'bgSizeTablet', value: 12 },
			{ label: 'bgSizeMobile', value: 12 },
			{ label: 'size', value: 20 },
			{ label: 'sizeTablet', value: 20 },
			{ label: 'sizeMobile', value: 20 },
			{ label: 'borderRadius', value: 100 },
			{ label: 'borderRadiusTablet', value: 100 },
			{ label: 'borderRadiusMobile', value: 100 },
			{ label: 'border', value: 0 },
			{ label: 'iconColor', value: '#ffffff' },
			{ label: 'iconBgColor', value: '#0170B9' },
		],
		childAttributes: [
			{ label: 'icon_color', value: '' },
			{ label: 'icon_bg_color', value: '' },
		],
		icon:
			'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <ellipse cx="82.7621" cy="136" rx="34.7621" ry="35" fill="#B6B6B6"/> <ellipse cx="82.6512" cy="135.888" rx="9.23369" ry="9.29688" fill="#E6E7E9"/> <ellipse cx="163.5" cy="136" rx="34.7621" ry="35" fill="#B6B6B6"/> <ellipse cx="163.389" cy="135.888" rx="9.23369" ry="9.29688" fill="#E6E7E9"/> <ellipse cx="244.238" cy="136" rx="34.7621" ry="35" fill="#B6B6B6"/> <ellipse cx="244.127" cy="135.888" rx="9.23369" ry="9.29688" fill="#E6E7E9"/> </svg>',
	},
];

export default applyFilters( `uag_social_share_presets`, presets );
