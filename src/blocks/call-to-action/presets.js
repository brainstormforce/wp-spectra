import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const presets = [
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'titleSpace', value: 20 },
			{ label: 'ctaPosition', value: 'below-title' },
			{ label: 'descSpace', value: 39 },
			{ label: 'ctaTopPadding', value: 10 },
			{ label: 'ctaRightPadding', value: 14 },
			{ label: 'ctaBottomPadding' , value: 10 },
			{ label: 'ctaLeftPadding' , value: 14 },
			{ label: 'buttonAlign' , value: ''},
			{ label: 'contentWidth' , value: ''},
			{ label: 'textAlign' , value: 'center'}
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="21" width="30" height="2" rx="1" /><rect x="7" y="44" width="20" height="6" rx="2" /><rect x="7" y="29" width="58" height="1" rx="0.5" /><rect x="7" y="33" width="58" height="1" rx="0.5" /><rect x="7" y="37" width="44" height="1" rx="0.5" /></svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'titleSpace', value: 20 },
			{ label: 'ctaPosition', value: 'below-title' },
			{ label: 'descSpace', value: 39 },
			{ label: 'ctaTopPadding', value: 10 },
			{ label: 'ctaRightPadding', value: 14 },
			{ label: 'ctaBottomPadding' , value: 10 },
			{ label: 'ctaLeftPadding' , value: 14 },
			{ label: 'buttonAlign' , value: ''},
			{ label: 'contentWidth' , value: ''},
			{ label: 'textAlign' , value: 'left'}
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="21" y="21" width="30" height="2" rx="1" /><rect x="26" y="44" width="20" height="6" rx="2" /><rect x="7" y="29" width="58" height="1" rx="0.5" /><rect x="7" y="33" width="58" height="1" rx="0.5" /><rect x="14" y="37" width="44" height="1" rx="0.5" /></svg>',
    }
];

export default applyFilters(
    `uag_call_to_action_presets`,
    presets
);
