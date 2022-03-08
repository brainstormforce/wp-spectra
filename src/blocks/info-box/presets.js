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
            { label: 'icon', value: 'fa fa-check-circle' },
            { label: 'headingAlign', value: 'center' },
            { label: 'ctaType', value: 'button' },
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="26" y="52" width="20" height="6" rx="2" /><path d="M6 38.5C6 38.2239 6.22386 38 6.5 38H65.5C65.7761 38 66 38.2239 66 38.5C66 38.7761 65.7761 39 65.5 39H6.5C6.22386 39 6 38.7761 6 38.5Z" /><path d="M6 42.5C6 42.2239 6.22386 42 6.5 42H65.5C65.7761 42 66 42.2239 66 42.5C66 42.7761 65.7761 43 65.5 43H6.5C6.22386 43 6 42.7761 6 42.5Z" /><path d="M14 46.5C14 46.2239 14.2239 46 14.5 46H57.5C57.7761 46 58 46.2239 58 46.5C58 46.7761 57.7761 47 57.5 47H14.5C14.2239 47 14 46.7761 14 46.5Z" /><path d="M14 31C14 30.4477 14.4477 30 15 30H57C57.5523 30 58 30.4477 58 31C58 31.5523 57.5523 32 57 32H15C14.4477 32 14 31.5523 14 31Z" /><rect x="31" y="14" width="10" height="10" rx="2" /></svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'icon', value: 'fa fa-check-circle' },
            { label: 'headingAlign', value: 'left' },
            { label: 'ctaType', value: 'button' },
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="52" width="20" height="6" rx="2"/><path d="M6 31C6 30.4477 6.44772 30 7 30H49C49.5523 30 50 30.4477 50 31C50 31.5523 49.5523 32 49 32H7C6.44771 32 6 31.5523 6 31Z" /><path d="M6 16C6 14.8954 6.89543 14 8 14H14C15.1046 14 16 14.8954 16 16V22C16 23.1046 15.1046 24 14 24H8C6.89543 24 6 23.1046 6 22V16Z" /><path d="M6 38.5C6 38.2239 6.22386 38 6.5 38H65.5C65.7761 38 66 38.2239 66 38.5C66 38.7761 65.7761 39 65.5 39H6.5C6.22386 39 6 38.7761 6 38.5Z" /><path d="M6 42.5C6 42.2239 6.22386 42 6.5 42H65.5C65.7761 42 66 42.2239 66 42.5V42.5C66 42.7761 65.7761 43 65.5 43H6.5C6.22386 43 6 42.7761 6 42.5V42.5Z" /><path d="M6 46.5C6 46.2239 6.22386 46 6.5 46H49.5C49.7761 46 50 46.2239 50 46.5V46.5C50 46.7761 49.7761 47 49.5 47H6.5C6.22386 47 6 46.7761 6 46.5V46.5Z" /></svg>',
    },
    {
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'icon', value: 'fa fa-check-circle' },
            { label: 'headingAlign', value: 'left' },
            { label: 'ctaType', value: 'none' },
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 37C6 36.4477 6.44772 36 7 36H49C49.5523 36 50 36.4477 50 37C50 37.5523 49.5523 38 49 38H7C6.44771 38 6 37.5523 6 37Z" /><path d="M6 22C6 20.8954 6.89543 20 8 20H14C15.1046 20 16 20.8954 16 22V28C16 29.1046 15.1046 30 14 30H8C6.89543 30 6 29.1046 6 28V22Z" /><path d="M6 44.5C6 44.2239 6.22386 44 6.5 44H65.5C65.7761 44 66 44.2239 66 44.5C66 44.7761 65.7761 45 65.5 45H6.5C6.22386 45 6 44.7761 6 44.5Z" /><path d="M6 48.5C6 48.2239 6.22386 48 6.5 48H65.5C65.7761 48 66 48.2239 66 48.5V48.5C66 48.7761 65.7761 49 65.5 49H6.5C6.22386 49 6 48.7761 6 48.5V48.5Z" /><path d="M6 52.5C6 52.2239 6.22386 52 6.5 52H49.5C49.7761 52 50 52.2239 50 52.5C50 52.7761 49.7761 53 49.5 53H6.5C6.22386 53 6 52.7761 6 52.5Z" /></svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'icon', value: '' },
            { label: 'headingAlign', value: 'center' },
			{ label: 'ctaType', value: 'text' },
        ],
     	icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="26" y="44" width="20" height="6" rx="2" /><path d="M6 30.5C6 30.2239 6.22386 30 6.5 30H65.5C65.7761 30 66 30.2239 66 30.5C66 30.7761 65.7761 31 65.5 31H6.5C6.22386 31 6 30.7761 6 30.5Z" /><path d="M6 34.5C6 34.2239 6.22386 34 6.5 34H65.5C65.7761 34 66 34.2239 66 34.5C66 34.7761 65.7761 35 65.5 35H6.5C6.22386 35 6 34.7761 6 34.5Z" /><path d="M14 38.5C14 38.2239 14.2239 38 14.5 38H57.5C57.7761 38 58 38.2239 58 38.5C58 38.7761 57.7761 39 57.5 39H14.5C14.2239 39 14 38.7761 14 38.5Z" /><path d="M14 23C14 22.4477 14.4477 22 15 22H57C57.5523 22 58 22.4477 58 23C58 23.5523 57.5523 24 57 24H15C14.4477 24 14 23.5523 14 23Z" /></svg>',
	},
	{
        value: 'preset-5',
        label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'icon', value: '' },
            { label: 'headingAlign', value: 'left' },
			{ label: 'ctaType', value: 'text' },
        ],
		icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="44" width="20" height="6" rx="2" /><path d="M6 30.5C6 30.2239 6.22386 30 6.5 30H65.5C65.7761 30 66 30.2239 66 30.5C66 30.7761 65.7761 31 65.5 31H6.5C6.22386 31 6 30.7761 6 30.5Z" /><path d="M6 34.5C6 34.2239 6.22386 34 6.5 34H65.5C65.7761 34 66 34.2239 66 34.5C66 34.7761 65.7761 35 65.5 35H6.5C6.22386 35 6 34.7761 6 34.5Z" /><path d="M6 38.5C6 38.2239 6.22386 38 6.5 38H49.5C49.7761 38 50 38.2239 50 38.5C50 38.7761 49.7761 39 49.5 39H6.5C6.22386 39 6 38.7761 6 38.5Z" /><path d="M6 23C6 22.4477 6.44772 22 7 22H49C49.5523 22 50 22.4477 50 23C50 23.5523 49.5523 24 49 24H7C6.44771 24 6 23.5523 6 23Z" /></svg>',
    },
];

export default applyFilters(
    `uag_info_box_presets`,
    presets
);
