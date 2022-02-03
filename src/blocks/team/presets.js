import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const presets = [
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'image', value: { url:`${ uagb_blocks_info.uagb_url }/admin/assets/images/placeholder.png`} },
            { label: 'titleSpace', value: 4 },
			{ label: 'prefixSpace', value: 11 },
			{ label: 'descSpace', value: 20 },
			{ label: 'align', value: 'center' },
			{ label: 'imgPosition', value: 'above' },
			{ label: 'imgAlign', value: '' },
			{ label: 'twitterIcon', value: 'fab fa-twitter' },
			{ label: 'fbIcon', value: 'fab fa-facebook' },
			{ label: 'linkedinIcon', value: 'fab fa-linkedin' },
			{ label: 'pinIcon', value: 'fab fa-pinterest' },
        ],
        icon: '<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="30" width="43" height="3" rx="1.5" fill=""/><rect x="7.29297" y="12.8633" width="11.7441" height="11.1848" rx="2" fill=""/><rect x="7.29297" y="53.1289" width="19.5735" height="5.59242" rx="2.79621" fill=""/><rect x="7.29297" y="38.5889" width="58.7204" height="1.11848" rx="0.559242" fill=""/><rect x="7.29297" y="42.5034" width="58.7204" height="1.11848" rx="0.559242" fill=""/><rect x="7.29297" y="46.4185" width="44.1801" height="1.11848" rx="0.559242" fill=""/></svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
			{ label: 'image', value: { url:`${ uagb_blocks_info.uagb_url }/admin/assets/images/placeholder.png`} },
            { label: 'titleSpace', value: 5 },
			{ label: 'prefixSpace', value: 13 },
			{ label: 'descSpace', value: 20 },
			{ label: 'align', value: 'left' },
			{ label: 'imgPosition', value: 'above' },
			{ label: 'imgAlign', value: '' },
			{ label: 'twitterIcon', value: '' },
			{ label: 'fbIcon', value: '' },
			{ label: 'linkedinIcon', value: '' },
			{ label: 'pinIcon', value: '' },
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6.87305" y="35.231" width="43.0616" height="3.35545" rx="1.67772" fill=""/><rect x="6.87305" y="18.4541" width="11.7441" height="11.1848" rx="2" fill=""/><rect x="6.87305" y="44.1787" width="58.7204" height="1.11848" rx="0.559242" fill=""/><rect x="6.87305" y="48.0933" width="58.7204" height="1.11848" rx="0.559242" fill=""/><rect x="6.87305" y="52.0083" width="44.1801" height="1.11848" rx="0.559242" fill=""/></svg>',
    },
	{
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
			{ label: 'image', value: { url:`${ uagb_blocks_info.uagb_url }/admin/assets/images/placeholder.png`} },
            { label: 'titleSpace', value: 5 },
			{ label: 'prefixSpace', value: 13 },
			{ label: 'descSpace', value: 20 },
			{ label: 'align', value: 'left' },
			{ label: 'imgPosition', value: 'left' },
			{ label: 'imgAlign', value: 'top' },
			{ label: 'twitterIcon', value: 'fab fa-twitter' },
			{ label: 'fbIcon', value: 'fab fa-facebook' },
			{ label: 'linkedinIcon', value: 'fab fa-linkedin' },
			{ label: 'pinIcon', value: 'fab fa-pinterest' },
        ],
     	icon: '<svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15.123" y="21.835" width="43.0616" height="3.35545" rx="1.67772" fill=""/><rect x="26.8691" y="45.3237" width="19.5735" height="5.59242" rx="2.79621" fill=""/><rect x="7.29297" y="30.7827" width="58.7204" height="1.11848" rx="0.559242" fill=""/><rect x="7.29297" y="34.6973" width="58.7204" height="1.11848" rx="0.559242" fill=""/><rect x="14.5664" y="38.6123" width="44.1801" height="1.11848" rx="0.559242" fill=""/></svg>',
	}
];

export default applyFilters(
    `uag_team_presets`,
    presets
);
