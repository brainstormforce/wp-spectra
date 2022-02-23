import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import defaultAttributes from './attributes';
import defaultChildAttributes from '../icon-list-child/attributes';

const presets = [
	{
		defaultAttributes
	},
	{
		defaultChildAttributes
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
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
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.049 19.9271C35.3483 19.0057 36.6518 19.0057 36.9511 19.9271L40.0413 29.4377C40.1752 29.8497 40.5591 30.1287 40.9924 30.1287H50.9924C51.9612 30.1287 52.3639 31.3683 51.5802 31.9377L43.49 37.8156C43.1395 38.0702 42.9928 38.5216 43.1267 38.9336L46.2169 48.4443C46.5163 49.3656 45.4618 50.1317 44.6781 49.5623L36.5878 43.6844C36.2373 43.4298 35.7627 43.4298 35.4123 43.6844L27.322 49.5623C26.5383 50.1317 25.4838 49.3656 25.7832 48.4443L28.8734 38.9336C29.0073 38.5216 28.8606 38.0702 28.5101 37.8156L20.4199 31.9377C19.6362 31.3683 20.0389 30.1287 21.0077 30.1287H31.0077C31.441 30.1287 31.8249 29.8497 31.9588 29.4377L35.049 19.9271Z" /></svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
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
        icon: '<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.5829 56C47.6286 56 56.5829 47.0457 56.5829 36C56.5829 24.9543 47.6286 16 36.5829 16C25.5372 16 16.5829 24.9543 16.5829 36C16.5829 47.0457 25.5372 56 36.5829 56ZM39.2771 31.2918L37.5339 25.9271C37.2346 25.0057 35.9312 25.0057 35.6318 25.9271L33.8887 31.2918C33.7548 31.7038 33.3709 31.9828 32.9377 31.9828H27.2968C26.3281 31.9828 25.9253 33.2224 26.7091 33.7918L31.2726 37.1074C31.6231 37.362 31.7697 37.8134 31.6358 38.2254L29.8927 43.5902C29.5934 44.5115 30.6479 45.2776 31.4316 44.7082L35.9951 41.3926C36.3456 41.138 36.8202 41.138 37.1707 41.3926L41.7342 44.7082C42.5179 45.2776 43.5724 44.5115 43.273 43.5902L41.5299 38.2254C41.3961 37.8134 41.5427 37.362 41.8932 37.1074L46.4567 33.7918C47.2404 33.2224 46.8377 31.9828 45.8689 31.9828H40.2281C39.7949 31.9828 39.4109 31.7038 39.2771 31.2918Z" /></svg>',
    },
	{
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
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
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.2146 25.9271C35.5139 25.0057 36.8174 25.0057 37.1167 25.9271L38.8598 31.2918C38.9937 31.7038 39.3777 31.9828 39.8109 31.9828H45.4517C46.4204 31.9828 46.8232 33.2224 46.0395 33.7918L41.476 37.1074C41.1255 37.362 40.9788 37.8134 41.1127 38.2254L42.8558 43.5902C43.1552 44.5115 42.1007 45.2776 41.317 44.7082L36.7534 41.3926C36.403 41.138 35.9284 41.138 35.5779 41.3926L31.0143 44.7082C30.2306 45.2776 29.1761 44.5115 29.4755 43.5902L31.2186 38.2254C31.3525 37.8134 31.2058 37.362 30.8553 37.1074L26.2918 33.7918C25.5081 33.2224 25.9109 31.9828 26.8796 31.9828H32.5204C32.9537 31.9828 33.3376 31.7038 33.4715 31.2918L35.2146 25.9271Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M36.1658 54C46.1069 54 54.1658 45.9411 54.1658 36C54.1658 26.0589 46.1069 18 36.1658 18C26.2246 18 18.1658 26.0589 18.1658 36C18.1658 45.9411 26.2246 54 36.1658 54ZM36.1658 56C47.2115 56 56.1658 47.0457 56.1658 36C56.1658 24.9543 47.2115 16 36.1658 16C25.1201 16 16.1658 24.9543 16.1658 36C16.1658 47.0457 25.1201 56 36.1658 56Z" /></svg>',
    }

];

export default applyFilters(
    `uag_icon_list_presets`,
    presets
);
