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
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="21.418" y="21.417" width="30" height="3" rx="1.5" /><rect x="26.418" y="44.7407" width="19.5735" height="5.59242" rx="2.79621" /><rect x="6.41797" y="30.1997" width="58.7204" height="1.11848" rx="0.559242" /><rect x="6.41797" y="34.1142" width="58.7204" height="1.11848" rx="0.559242" /><rect x="13.6914" y="38.0293" width="44.1801" height="1.11848" rx="0.559242" /></svg>',
    },
    {
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
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
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="21.417" width="30" height="3" rx="1.5" /><rect x="6.70703" y="44.7407" width="19.5735" height="5.59242" rx="2.79621" /><rect x="6.70703" y="30.1997" width="58.7204" height="1.11848" rx="0.559242" /><rect x="6.70703" y="34.1142" width="58.7204" height="1.11848" rx="0.559242" /><rect x="6.70703" y="38.0292" width="44.1801" height="1.11848" rx="0.559242" /></svg>',
    }
];

export default applyFilters(
    `uag_call_to_action_presets`,
    presets
);
