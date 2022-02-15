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
            { label: 'noticeDismiss', value: 'uagb-dismissable' },
			{ label: 'titleTopPadding', value: 15 },
			{ label: 'titleRightPadding', value: 28 },
			{ label: 'titleBottomPadding', value: 15 },
			{ label: 'titleLeftPadding', value: 55 },
			{ label: 'contentBgColor' , value: '#F2F5F7' },
			{ label: 'contentTopPadding' , value: 15 },
			{ label: 'contentRightPadding' , value: 15 },
			{ label: 'contentBottomPadding' , value: 15 },
			{ label: 'contentLeftPadding' , value: 55 },
			{ label: 'layout' , value: 'simple'},
			{ label: 'noticeContent' , value: 'Add notice content here…'}
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="30" width="43" height="3" rx="1.5" fill=""/><rect x="30.1973" y="12.8633" width="11.7441" height="11.1848" rx="2" fill=""/><rect x="26.2812" y="53.1289" width="19.5735" height="5.59242" rx="2.79621" fill=""/><rect x="6.70703" y="38.5879" width="58.7204" height="1.11848" rx="0.559242" fill=""/><rect x="6.70703" y="42.5024" width="58.7204" height="1.11848" rx="0.559242" fill=""/><rect x="13.9805" y="46.4175" width="44.1801" height="1.11848" rx="0.559242" fill=""/></svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'noticeDismiss', value: '' },
			{ label: 'titleTopPadding', value: 15 },
			{ label: 'titleRightPadding', value: 15 },
			{ label: 'titleBottomPadding', value: 15 },
			{ label: 'titleLeftPadding', value: 15 },
			{ label: 'contentBgColor' , value: '#F2F5F7' },
			{ label: 'contentTopPadding' , value: 15 },
			{ label: 'contentRightPadding' , value: 15 },
			{ label: 'contentBottomPadding' , value: 15 },
			{ label: 'contentLeftPadding' , value: 15 }
        ],
        icon: '<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="30" width="43" height="3" rx="1.5" fill=""/><rect x="7.29297" y="12.8633" width="11.7441" height="11.1848" rx="2" fill=""/><rect x="7.29297" y="53.1289" width="19.5735" height="5.59242" rx="2.79621" fill=""/><rect x="7.29297" y="38.5889" width="58.7204" height="1.11848" rx="0.559242" fill=""/><rect x="7.29297" y="42.5034" width="58.7204" height="1.11848" rx="0.559242" fill=""/><rect x="7.29297" y="46.4185" width="44.1801" height="1.11848" rx="0.559242" fill=""/></svg>',
    }
];

export default applyFilters(
    `uag_inline_notice_presets`,
    presets
);
