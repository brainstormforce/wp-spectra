import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import defaultAttributes from './attributes';
import defaultChildAttributes from '../social-share-child/attributes';

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
            { label: 'gap', value: 15 },
            { label: 'bgSize', value: 15 },
            { label: 'size', value: 15 },
			{ label: 'borderRadius', value: 0 },
			{ label: 'border', value: 0 },
        ],
        childAttributes: [
            { label: 'icon_color', value: '#fff' },
			{ label: 'icon_bg_color', value: '#0170B9' },
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 28H22V44H6V28Z" /><path d="M28 28H44V44H28V28Z" /><path d="M50 28H66V44H50V28Z" /></svg>',
    },
	{
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'gap', value: 15 },
            { label: 'bgSize', value: 15 },
            { label: 'size', value: 15 },
			{ label: 'borderRadius', value: 5 },
        ],
        childAttributes: [
			{ label: 'icon_color', value: '#fff' },
			{ label: 'icon_bg_color', value: '#0170B9' },
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 32C6 29.7909 7.79086 28 10 28H18C20.2091 28 22 29.7909 22 32V40C22 42.2091 20.2091 44 18 44H10C7.79086 44 6 42.2091 6 40V32Z" /><path d="M28 32C28 29.7909 29.7909 28 32 28H40C42.2091 28 44 29.7909 44 32V40C44 42.2091 42.2091 44 40 44H32C29.7909 44 28 42.2091 28 40V32Z" /><path d="M50 32C50 29.7909 51.7909 28 54 28H62C64.2091 28 66 29.7909 66 32V40C66 42.2091 64.2091 44 62 44H54C51.7909 44 50 42.2091 50 40V32Z" /></svg>',
    },
	{
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'gap', value: 15 },
            { label: 'bgSize', value: 15 },
            { label: 'size', value: 15 },
			{ label: 'borderRadius', value: 100 },
        ],
        childAttributes: [
			{ label: 'icon_color', value: '#fff' },
			{ label: 'icon_bg_color', value: '#0170B9' },
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 36C6 31.5817 9.58172 28 14 28C18.4183 28 22 31.5817 22 36C22 40.4183 18.4183 44 14 44C9.58172 44 6 40.4183 6 36Z" /><path d="M28 36C28 31.5817 31.5817 28 36 28C40.4183 28 44 31.5817 44 36C44 40.4183 40.4183 44 36 44C31.5817 44 28 40.4183 28 36Z" /><path d="M50 36C50 31.5817 53.5817 28 58 28C62.4183 28 66 31.5817 66 36C66 40.4183 62.4183 44 58 44C53.5817 44 50 40.4183 50 36Z" /></svg>',
    }

];

export default applyFilters(
    `uag_social_share_presets`,
    presets
);
