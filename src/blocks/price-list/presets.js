import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const presets = [
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'imgAlign', value: 'side' },
            { label: 'imageAlignment', value: 'middle' },
            { label: 'imageWidth', value: 150 },
			{ label: 'imgPaddingRight', value: 10 },
			{ label: 'columnGap', value: 50 },
			{ label: 'contentPaddingTop', value: 25 },
			{ label: 'contentPaddingBottom', value: 35 },
			{ label: 'columns', value: 2 },
			{ label: 'headingAlign', value: ''},
			{ label: 'seperatorStyle', value: 'dashed' },
			{ label: 'seperatorWidth', value: 100 },
			{ label: 'seperatorThickness', value: 1 },
			{ label: 'seperatorColor', value: '#dddddd' },
			{ label: 'imgPaddingBottom', value: '' },
			{ label: 'imagePosition', value: 'left' }
        ],
		childAttributes: [
			{ label: 'image', value: { url:`${ uagb_blocks_info.uagb_url }/admin/assets/images/uag-placeholder.svg`}}
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M56 27.5C56 27.7761 55.7761 28 55.5 28H28.5C28.2239 28 28 27.7761 28 27.5C28 27.2239 28.2239 27 28.5 27H55.5C55.7761 27 56 27.2239 56 27.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M66 23.5C66 23.7761 65.7761 24 65.5 24H28.5C28.2239 24 28 23.7761 28 23.5C28 23.2239 28.2239 23 28.5 23H65.5C65.7761 23 66 23.2239 66 23.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M66 16C66 16.5523 65.5523 17 65 17H61C60.4477 17 60 16.5523 60 16C60 15.4477 60.4477 15 61 15H65C65.5523 15 66 15.4477 66 16Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M54 16C54 16.5523 53.5523 17 53 17H29C28.4477 17 28 16.5523 28 16C28 15.4477 28.4477 15 29 15H53C53.5523 15 54 15.4477 54 16Z" /><path d="M7 17C7 15.8954 7.89543 15 9 15H18C19.1046 15 20 15.8954 20 17V26C20 27.1046 19.1046 28 18 28H9C7.89543 28 7 27.1046 7 26V17Z" stroke="" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M56 55.5C56 55.7761 55.7761 56 55.5 56H28.5C28.2239 56 28 55.7761 28 55.5C28 55.2239 28.2239 55 28.5 55H55.5C55.7761 55 56 55.2239 56 55.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M66 51.5C66 51.7761 65.7761 52 65.5 52H28.5C28.2239 52 28 51.7761 28 51.5C28 51.2239 28.2239 51 28.5 51H65.5C65.7761 51 66 51.2239 66 51.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M66 44C66 44.5523 65.5523 45 65 45H61C60.4477 45 60 44.5523 60 44C60 43.4477 60.4477 43 61 43H65C65.5523 43 66 43.4477 66 44Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M54 44C54 44.5523 53.5523 45 53 45H29C28.4477 45 28 44.5523 28 44C28 43.4477 28.4477 43 29 43H53C53.5523 43 54 43.4477 54 44Z" /><path d="M7 45C7 43.8954 7.89543 43 9 43H18C19.1046 43 20 43.8954 20 45V54C20 55.1046 19.1046 56 18 56H9C7.89543 56 7 55.1046 7 54V45Z" stroke="" stroke-width="2"/></svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'columns', value: 2 },
            { label: 'imgAlign', value: 'top' },
			{ label: 'headingAlign', value: 'center'},
            { label: 'imageWidth', value: 150 },
			{ label: 'seperatorStyle', value: 'none' },
			{ label: 'imgPaddingBottom', value: 20 },
			{ label: 'columnGap', value: 40 },
			{ label: 'contentPaddingTop', value: 5 },
			{ label: 'contentPaddingBottom', value: 5 },
            { label: 'imageAlignment', value: '' },
			{ label: 'imgPaddingRight', value: '' },
        ],
		childAttributes: [
			{ label: 'image', value: { url:`${ uagb_blocks_info.uagb_url }/admin/assets/images/uag-placeholder.svg`}}
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M50 46.5C50 46.7761 49.7761 47 49.5 47H22.5C22.2239 47 22 46.7761 22 46.5C22 46.2239 22.2239 46 22.5 46H49.5C49.7761 46 50 46.2239 50 46.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M55 42.5C55 42.7761 54.7761 43 54.5 43H17.5C17.2239 43 17 42.7761 17 42.5C17 42.2239 17.2239 42 17.5 42H54.5C54.7761 42 55 42.2239 55 42.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39 51C39 51.5523 38.5523 52 38 52H34C33.4477 52 33 51.5523 33 51C33 50.4477 33.4477 50 34 50H38C38.5523 50 39 50.4477 39 51Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49 38C49 38.5523 48.5523 39 48 39H24C23.4477 39 23 38.5523 23 38C23 37.4477 23.4477 37 24 37H48C48.5523 37 49 37.4477 49 38Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.8 22C31.3582 22 31 22.3582 31 22.8V31.2C31 31.6418 31.3582 32 31.8 32H40.2C40.6418 32 41 31.6418 41 31.2V22.8C41 22.3582 40.6418 22 40.2 22H31.8ZM31.8 20C30.2536 20 29 21.2536 29 22.8V31.2C29 32.7464 30.2536 34 31.8 34H40.2C41.7464 34 43 32.7464 43 31.2V22.8C43 21.2536 41.7464 20 40.2 20H31.8Z"/></svg>',
    },
	{
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'columns', value: 1 },
            { label: 'imgAlign', value: 'top' },
			{ label: 'headingAlign', value: 'center'},
            { label: 'imageWidth', value: 150 },
			{ label: 'seperatorStyle', value: 'solid' },
			{ label: 'seperatorWidth', value: 33 },
			{ label: 'seperatorThickness', value: 1 },
			{ label: 'seperatorColor', value: '#dddddd' },
			{ label: 'imgPaddingBottom', value: 20 },
			{ label: 'columnGap', value: 40 },
			{ label: 'contentPaddingTop', value: 10 },
			{ label: 'contentPaddingBottom', value: 10 },
            { label: 'imageAlignment', value: '' },
			{ label: 'imgPaddingRight', value: '' },
        ],
		childAttributes: [
			{ label: 'image.url', value: '' }
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M47 53.5C47 53.7761 46.8241 54 46.6071 54H25.3929C25.1759 54 25 53.7761 25 53.5C25 53.2239 25.1759 53 25.3929 53H46.6071C46.8241 53 47 53.2239 47 53.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M55 49.5C55 49.7761 54.7761 50 54.5 50H17.5C17.2239 50 17 49.7761 17 49.5C17 49.2239 17.2239 49 17.5 49H54.5C54.7761 49 55 49.2239 55 49.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M39 58C39 58.5523 38.5523 59 38 59H34C33.4477 59 33 58.5523 33 58C33 57.4477 33.4477 57 34 57H38C38.5523 57 39 57.4477 39 58Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M47 45C47 45.5523 46.6212 46 46.1538 46H25.8462C25.3788 46 25 45.5523 25 45C25 44.4477 25.3788 44 25.8462 44H46.1538C46.6212 44 47 44.4477 47 45Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M47 28.5C47 28.7761 46.8241 29 46.6071 29H25.3929C25.1759 29 25 28.7761 25 28.5C25 28.2239 25.1759 28 25.3929 28H46.6071C46.8241 28 47 28.2239 47 28.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M55 24.5C55 24.7761 54.7761 25 54.5 25H17.5C17.2239 25 17 24.7761 17 24.5C17 24.2239 17.2239 24 17.5 24H54.5C54.7761 24 55 24.2239 55 24.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M39 33C39 33.5523 38.5523 34 38 34H34C33.4477 34 33 33.5523 33 33C33 32.4477 33.4477 32 34 32H38C38.5523 32 39 32.4477 39 33Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M47 20C47 20.5523 46.6212 21 46.1538 21H25.8462C25.3788 21 25 20.5523 25 20C25 19.4477 25.3788 19 25.8462 19H46.1538C46.6212 19 47 19.4477 47 20Z" /></svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'columns', value: 2 },
            { label: 'imgAlign', value: 'side' },
			{ label: 'headingAlign', value: 'center'},
            { label: 'imageWidth', value: 100 },
			{ label: 'seperatorStyle', value: 'solid' },
			{ label: 'seperatorWidth', value: 33 },
			{ label: 'seperatorThickness', value: 1 },
			{ label: 'seperatorColor', value: '#dddddd' },
			{ label: 'imgPaddingBottom', value: '' },
			{ label: 'columnGap', value: 50 },
			{ label: 'contentPaddingTop', value: 10 },
			{ label: 'contentPaddingBottom', value: 10 },
            { label: 'imageAlignment', value: '' },
			{ label: 'imgPaddingRight', value: '' },
			{ label: 'imagePosition', value: 'left' }
        ],
		childAttributes: [
			{ label: 'image', value: { url:''}}
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M33 31C33 31.5523 32.7015 32 32.3333 32H29.6667C29.2985 32 29 31.5523 29 31C29 30.4477 29.2985 30 29.6667 30H32.3333C32.7015 30 33 30.4477 33 31Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M33 36C33 36.5523 32.7015 37 32.3333 37H29.6667C29.2985 37 29 36.5523 29 36C29 35.4477 29.2985 35 29.6667 35H32.3333C32.7015 35 33 35.4477 33 36Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M33 41C33 41.5523 32.7015 42 32.3333 42H29.6667C29.2985 42 29 41.5523 29 41C29 40.4477 29.2985 40 29.6667 40H32.3333C32.7015 40 33 40.4477 33 41Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M27 31C27 31.5523 26.6556 32 26.2308 32H7.76923C7.3444 32 7 31.5523 7 31C7 30.4477 7.3444 30 7.76923 30H26.2308C26.6556 30 27 30.4477 27 31Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M27 36C27 36.5523 26.6556 37 26.2308 37H7.76923C7.3444 37 7 36.5523 7 36C7 35.4477 7.3444 35 7.76923 35H26.2308C26.6556 35 27 35.4477 27 36Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M27 41C27 41.5523 26.6556 42 26.2308 42H7.76923C7.3444 42 7 41.5523 7 41C7 40.4477 7.3444 40 7.76923 40H26.2308C26.6556 40 27 40.4477 27 41Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M65 31C65 31.5523 64.7015 32 64.3333 32H61.6667C61.2985 32 61 31.5523 61 31C61 30.4477 61.2985 30 61.6667 30H64.3333C64.7015 30 65 30.4477 65 31Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M65 36C65 36.5523 64.7015 37 64.3333 37H61.6667C61.2985 37 61 36.5523 61 36C61 35.4477 61.2985 35 61.6667 35H64.3333C64.7015 35 65 35.4477 65 36Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M65 41C65 41.5523 64.7015 42 64.3333 42H61.6667C61.2985 42 61 41.5523 61 41C61 40.4477 61.2985 40 61.6667 40H64.3333C64.7015 40 65 40.4477 65 41Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M59 31C59 31.5523 58.6556 32 58.2308 32H39.7692C39.3444 32 39 31.5523 39 31C39 30.4477 39.3444 30 39.7692 30H58.2308C58.6556 30 59 30.4477 59 31Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M59 36C59 36.5523 58.6556 37 58.2308 37H39.7692C39.3444 37 39 36.5523 39 36C39 35.4477 39.3444 35 39.7692 35H58.2308C58.6556 35 59 35.4477 59 36Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M59 41C59 41.5523 58.6556 42 58.2308 42H39.7692C39.3444 42 39 41.5523 39 41C39 40.4477 39.3444 40 39.7692 40H58.2308C58.6556 40 59 40.4477 59 41Z" /></svg>',
    },
];

export default applyFilters(
    `uag_price_list_presets`,
    presets
);
