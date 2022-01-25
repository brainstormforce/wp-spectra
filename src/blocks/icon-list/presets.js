import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const presets = [
    {
        value: 'default',
        label: __( 'Default', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'size', value: 20 },
            { label: 'bgSize', value: '' },
			{ label: 'borderRadius', value: 100 },
			{label: 'border', value: 0 },
        ],
		childAttributes: [
			{ label: 'icon_color', value: '#0170B9' },
			{ label: 'icon_bg_color', value: '' },
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.049 19.9271C35.3483 19.0057 36.6518 19.0057 36.9511 19.9271L40.0413 29.4377C40.1752 29.8497 40.5591 30.1287 40.9924 30.1287H50.9924C51.9612 30.1287 52.3639 31.3683 51.5802 31.9377L43.49 37.8156C43.1395 38.0702 42.9928 38.5216 43.1267 38.9336L46.2169 48.4443C46.5163 49.3656 45.4618 50.1317 44.6781 49.5623L36.5878 43.6844C36.2373 43.4298 35.7627 43.4298 35.4123 43.6844L27.322 49.5623C26.5383 50.1317 25.4838 49.3656 25.7832 48.4443L28.8734 38.9336C29.0073 38.5216 28.8606 38.0702 28.5101 37.8156L20.4199 31.9377C19.6362 31.3683 20.0389 30.1287 21.0077 30.1287H31.0077C31.441 30.1287 31.8249 29.8497 31.9588 29.4377L35.049 19.9271Z"/></svg>',
    },
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'bgSize', value: 10 },
            { label: 'size', value: 20 },
			{ label: 'borderRadius', value: 100 },
			{label: 'border', value: 0 },
        ],
        childAttributes: [
            { label: 'icon_color', value: '#fff' },
			{ label: 'icon_bg_color', value: '#0170B9' },
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36 56C47.0457 56 56 47.0457 56 36C56 24.9543 47.0457 16 36 16C24.9543 16 16 24.9543 16 36C16 47.0457 24.9543 56 36 56ZM38.6942 31.2918L36.9511 25.9271C36.6517 25.0057 35.3483 25.0057 35.0489 25.9271L33.3058 31.2918C33.172 31.7038 32.788 31.9828 32.3548 31.9828H26.7139C25.7452 31.9828 25.3425 33.2224 26.1262 33.7918L30.6897 37.1074C31.0402 37.362 31.1868 37.8134 31.053 38.2254L29.3098 43.5902C29.0105 44.5115 30.065 45.2776 30.8487 44.7082L35.4122 41.3926C35.7627 41.138 36.2373 41.138 36.5878 41.3926L41.1513 44.7082C41.935 45.2776 42.9895 44.5115 42.6902 43.5902L40.947 38.2254C40.8132 37.8134 40.9598 37.362 41.3103 37.1074L45.8738 33.7918C46.6576 33.2224 46.2548 31.9828 45.2861 31.9828H39.6452C39.212 31.9828 38.828 31.7038 38.6942 31.2918Z"/></svg>',
    },
	{
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'bgSize', value: 10 },
            { label: 'size', value: 20 },
			{ label: 'borderRadius', value: 100 },
			{ label: 'border', value: 2 },
        ],
        childAttributes: [
            { label: 'icon_color', value: '#0170B9' },
			{ label: 'icon_border_color' , value: '#0170B9' },
			{ label: 'icon_bg_color', value: '' },
        ],
        icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38ZM20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"/></svg>',
    }

];

export default applyFilters(
    `uag_icon_list_presets`,
    presets
);
