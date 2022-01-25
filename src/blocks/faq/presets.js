import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const presets = [
    {
        value: 'default',
        label: __( 'Default', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconAlign', value: 'row-reverse' },
			{ label: 'questionLeftPaddingDesktop', value: 15 },
			{ label: 'hquestionPaddingDesktop', value: 15 },
			{ label: 'vquestionPaddingDesktop', value: 15 },
			{ label: 'questionBottomPaddingDesktop', value: 15 },
			{ label: 'answerTopPadding' , value: 0},
			{ label: 'answerRightPadding' , value: 15 },
			{ label: 'answerBottomPadding' , value: 15 },
			{ label: 'answerLeftPadding' , value: 15 },
			{ label: 'borderStyle' , value: 'solid' },
			{ label: 'borderWidth' , value: 1 },
			{ label: 'borderRadius' , value: 4 },
			{ label: 'borderColor' , value: '#dedede' },
			{ label: 'boxBgColor' , value: 'transparent'},
			{ label: 'layout' , value: 'accordion'},
			{ label: 'enableSeparator' , value: false}
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">		<path fill-rule="evenodd" clip-rule="evenodd" d="M56 18.5H16C15.1716 18.5 14.5 19.1716 14.5 20V25C14.5 25.8284 15.1716 26.5 16 26.5H56C56.8284 26.5 57.5 25.8284 57.5 25V20C57.5 19.1716 56.8284 18.5 56 18.5ZM16 17C14.3431 17 13 18.3431 13 20V25C13 26.6569 14.3431 28 16 28H56C57.6569 28 59 26.6569 59 25V20C59 18.3431 57.6569 17 56 17H16Z" fill=""/><path fill-rule="evenodd" clip-rule="evenodd" d="M56 31.5H16C15.1716 31.5 14.5 32.1716 14.5 33V39C14.5 39.8284 15.1716 40.5 16 40.5H56C56.8284 40.5 57.5 39.8284 57.5 39V33C57.5 32.1716 56.8284 31.5 56 31.5ZM16 30C14.3431 30 13 31.3431 13 33V39C13 40.6569 14.3431 42 16 42H56C57.6569 42 59 40.6569 59 39V33C59 31.3431 57.6569 30 56 30H16Z" fill=""/><path fill-rule="evenodd" clip-rule="evenodd" d="M56 45.5H16C15.1716 45.5 14.5 46.1716 14.5 47V52C14.5 52.8284 15.1716 53.5 16 53.5H56C56.8284 53.5 57.5 52.8284 57.5 52V47C57.5 46.1716 56.8284 45.5 56 45.5ZM16 44C14.3431 44 13 45.3431 13 47V52C13 53.6569 14.3431 55 16 55H56C57.6569 55 59 53.6569 59 52V47C59 45.3431 57.6569 44 56 44H16Z" fill=""/></svg>',
    },
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconAlign', value: 'row-reverse' },
			{ label: 'questionLeftPaddingDesktop', value: 15 },
			{ label: 'hquestionPaddingDesktop', value: 15 },
			{ label: 'vquestionPaddingDesktop', value: 15 },
			{ label: 'questionBottomPaddingDesktop', value: 15 },
			{ label: 'answerTopPadding' , value: 0},
			{ label: 'answerRightPadding' , value: 15 },
			{ label: 'answerBottomPadding' , value: 15 },
			{ label: 'answerLeftPadding' , value: 15 },
			{ label: 'borderStyle' , value: 'none' },
			{ label: 'borderWidth' , value: 1 },
			{ label: 'borderRadius' , value: 4 },
			{ label: 'borderColor' , value: '#f0f0f0' },
			{ label: 'boxBgColor' , value: '#F2F5F7'},
			{ label: 'layout' , value: 'accordion'},
			{ label: 'enableSeparator' , value: false}
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="13" y="17" width="46" height="11" rx="3" fill=""/><rect x="13" y="30" width="46" height="12" rx="3" fill=""/><rect x="13" y="44" width="46" height="11" rx="3" fill=""/></svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'iconAlign', value: 'row-reverse' },
			{ label: 'questionLeftPaddingDesktop', value: 20 },
			{ label: 'hquestionPaddingDesktop', value: 20 },
			{ label: 'vquestionPaddingDesktop', value: 20 },
			{ label: 'questionBottomPaddingDesktop', value: 20 },
			{ label: 'answerTopPadding' , value: 20},
			{ label: 'answerRightPadding' , value: 20},
			{ label: 'answerBottomPadding' , value: 20},
			{ label: 'answerLeftPadding' , value: 20},
			{ label: 'borderStyle' , value: 'solid' },
			{ label: 'borderWidth' , value: 1 },
			{ label: 'borderRadius' , value: 5 },
			{ label: 'borderColor' , value: '#dedede' },
			{ label: 'boxBgColor' , value: 'transparent'},
			{ label: 'layout' , value: 'grid'},
			{ label: 'enableSeparator' , value: true}
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M32 18.5H13C12.7239 18.5 12.5 18.7239 12.5 19V26C12.5 26.2761 12.7239 26.5 13 26.5H32C32.2761 26.5 32.5 26.2761 32.5 26V19C32.5 18.7239 32.2761 18.5 32 18.5ZM13 17C11.8954 17 11 17.8954 11 19V26C11 27.1046 11.8954 28 13 28H32C33.1046 28 34 27.1046 34 26V19C34 17.8954 33.1046 17 32 17H13Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M32 31.5H13C12.7239 31.5 12.5 31.7239 12.5 32V40C12.5 40.2761 12.7239 40.5 13 40.5H32C32.2761 40.5 32.5 40.2761 32.5 40V32C32.5 31.7239 32.2761 31.5 32 31.5ZM13 30C11.8954 30 11 30.8954 11 32V40C11 41.1046 11.8954 42 13 42H32C33.1046 42 34 41.1046 34 40V32C34 30.8954 33.1046 30 32 30H13Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M32 45.5H13C12.7239 45.5 12.5 45.7239 12.5 46V53C12.5 53.2761 12.7239 53.5 13 53.5H32C32.2761 53.5 32.5 53.2761 32.5 53V46C32.5 45.7239 32.2761 45.5 32 45.5ZM13 44C11.8954 44 11 44.8954 11 46V53C11 54.1046 11.8954 55 13 55H32C33.1046 55 34 54.1046 34 53V46C34 44.8954 33.1046 44 32 44H13Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M58 18.5H39C38.7239 18.5 38.5 18.7239 38.5 19V26C38.5 26.2761 38.7239 26.5 39 26.5H58C58.2761 26.5 58.5 26.2761 58.5 26V19C58.5 18.7239 58.2761 18.5 58 18.5ZM39 17C37.8954 17 37 17.8954 37 19V26C37 27.1046 37.8954 28 39 28H58C59.1046 28 60 27.1046 60 26V19C60 17.8954 59.1046 17 58 17H39Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M58 31.5H39C38.7239 31.5 38.5 31.7239 38.5 32V40C38.5 40.2761 38.7239 40.5 39 40.5H58C58.2761 40.5 58.5 40.2761 58.5 40V32C58.5 31.7239 58.2761 31.5 58 31.5ZM39 30C37.8954 30 37 30.8954 37 32V40C37 41.1046 37.8954 42 39 42H58C59.1046 42 60 41.1046 60 40V32C60 30.8954 59.1046 30 58 30H39Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M58 45.5H39C38.7239 45.5 38.5 45.7239 38.5 46V53C38.5 53.2761 38.7239 53.5 39 53.5H58C58.2761 53.5 58.5 53.2761 58.5 53V46C58.5 45.7239 58.2761 45.5 58 45.5ZM39 44C37.8954 44 37 44.8954 37 46V53C37 54.1046 37.8954 55 39 55H58C59.1046 55 60 54.1046 60 53V46C60 44.8954 59.1046 44 58 44H39Z" /></svg>',
    },
	{
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addon b s-for-gutenberg' ),
        attributes: [
            { label: 'iconAlign', value: 'row-reverse' },
			{ label: 'questionLeftPaddingDesktop', value: 25  },
			{ label: 'hquestionPaddingDesktop', value: 25  },
			{ label: 'vquestionPaddingDesktop', value: 25  },
			{ label: 'questionBottomPaddingDesktop', value: 15  },
			{ label: 'answerTopPadding' , value: 0 },
			{ label: 'answerRightPadding' , value: 25 },
			{ label: 'answerBottomPadding' , value: 25 },
			{ label: 'answerLeftPadding' , value: 25 },
			{ label: 'borderStyle' , value: 'solid' },
			{ label: 'borderWidth' , value: 1 },
			{ label: 'borderRadius' , value: 5 },
			{ label: 'borderColor' , value: '#e9e9e9' },
			{ label: 'boxBgColor' , value: '#F5F5F5'},
			{ label: 'layout' , value: 'grid'},
			{ label: 'enableSeparator' , value: true}
        ],
     	icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="13" y="17" width="22" height="11" rx="2" fill=""/><rect x="13" y="30" width="22" height="12" rx="2" fill=""/><rect x="13" y="44" width="22" height="11" rx="2" fill=""/><rect x="37" y="17" width="22" height="11" rx="2" fill=""/><rect x="37" y="30" width="22" height="12" rx="2" fill=""/><rect x="37" y="44" width="22" height="11" rx="2" fill=""/></svg>',
	},
];

export default applyFilters(
    `uag_faq_presets`,
    presets
);
