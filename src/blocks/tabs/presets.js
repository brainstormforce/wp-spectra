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
            { label: 'tabsStyleD', value: 'hstyle2' },
			{ label: 'tabBodyTopPadding', value: 15 },
			{ label: 'tabBodyRightPadding', value: 15 },
			{ label: 'tabBodyBottomPadding', value: 15 },
			{ label: 'tabBodyLeftPadding', value: 0 },
			{ label: 'borderColor', value: 'transparent' },
			{ label: 'borderRadius', value: 0 }
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M56 27H16V51H56V27ZM16 25C14.8954 25 14 25.8954 14 27V51C14 52.1046 14.8954 53 16 53H56C57.1046 53 58 52.1046 58 51V27C58 25.8954 57.1046 25 56 25H16Z" /><path d="M14 21C14 20.4477 14.4477 20 15 20H26C26.5523 20 27 20.4477 27 21C27 21.5523 26.5523 22 26 22H15C14.4477 22 14 21.5523 14 21Z" /><path d="M29 21C29 20.4477 29.4477 20 30 20H41C41.5523 20 42 20.4477 42 21C42 21.5523 41.5523 22 41 22H30C29.4477 22 29 21.5523 29 21Z" /></svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'tabsStyleD', value: 'hstyle3' },
			{ label: 'titleAlign', value: 'left'},
			{ label: 'tabBodyTopPadding', value: '' },
			{ label: 'tabBodyRightPadding', value: '' },
			{ label: 'tabBodyBottomPadding', value: '' },
			{ label: 'tabBodyLeftPadding', value: '' },
			{ label: 'borderColor', value: '#E0E0E0' },
			{ label: 'borderRadius', value: 0 }
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M56 27H16V51H56V27ZM14 25V51C14 52.1046 14.8954 53 16 53H56C57.1046 53 58 52.1046 58 51V27C58 25.8954 57.1046 25 56 25H14Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M25 22H16V25H25V22ZM16 20C14.8954 20 14 20.8954 14 22V27H27V22C27 20.8954 26.1046 20 25 20H16Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M40 22H31V25H40V22ZM31 20C29.8954 20 29 20.8954 29 22V27H42V22C42 20.8954 41.1046 20 40 20H31Z" /></svg>',
    },
	{
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'tabsStyleD', value: 'vstyle6' },
			{ label: 'titleAlign', value: 'center'},
			{ label: 'tabBodyTopPadding', value: '' },
			{ label: 'tabBodyRightPadding', value: '' },
			{ label: 'tabBodyBottomPadding', value: '' },
			{ label: 'tabBodyLeftPadding', value: '' },
			{ label: 'borderColor', value: '#E0E0E0' },
			{ label: 'borderRadius', value: 4}
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M63 22H27V51H63V22ZM27 20C25.8954 20 25 20.8954 25 22V51C25 52.1046 25.8954 53 27 53H63C64.1046 53 65 52.1046 65 51V22C65 20.8954 64.1046 20 63 20H27Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M21 22H10L10 25H21V22ZM10 20C8.89543 20 8 20.8954 8 22V25C8 26.1046 8.89543 27 10 27H21C22.1046 27 23 26.1046 23 25V22C23 20.8954 22.1046 20 21 20H10Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M21 31H10L10 34H21V31ZM10 29C8.89543 29 8 29.8954 8 31V34C8 35.1046 8.89543 36 10 36H21C22.1046 36 23 35.1046 23 34V31C23 29.8954 22.1046 29 21 29H10Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M21 40H10L10 43H21V40ZM10 38C8.89543 38 8 38.8954 8 40V43C8 44.1046 8.89543 45 10 45H21C22.1046 45 23 44.1046 23 43V40C23 38.8954 22.1046 38 21 38H10Z" /></svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'tabsStyleD', value: 'vstyle8' },
			{ label: 'titleAlign', value: 'center'},
			{ label: 'tabBodyTopPadding', value: '' },
			{ label: 'tabBodyRightPadding', value: '' },
			{ label: 'tabBodyBottomPadding', value: '' },
			{ label: 'tabBodyLeftPadding', value: '' },
			{ label: 'borderColor', value: '#E0E0E0' },
			{ label: 'borderRadius', value: 0 }
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M63 22H24V51H63V22ZM22 20V51C22 52.1046 22.8954 53 24 53H63C64.1046 53 65 52.1046 65 51V22C65 20.8954 64.1046 20 63 20H22Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M22 22H10V26H22V22ZM10 20C8.89543 20 8 20.8954 8 22V26C8 27.1046 8.89543 28 10 28H24V20H10Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M22 28H10V32H22V28ZM8 26V34H24V26H8Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M22 34H10V38H22V34ZM10 32C8.89543 32 8 32.8954 8 34V38C8 39.1046 8.89543 40 10 40H24V32H10Z" /></svg>',
    },
];

export default applyFilters(
    `uag_tabs_presets`,
    presets
);
