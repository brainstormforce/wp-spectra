import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const presets = [
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
			{ label: 'borderStyle' , value: 'solid' },
			{ label: 'borderWidth' , value: 1 },
			{ label: 'borderRadius' , value: 4 },
			{ label: 'borderColor' , value: '#dedede' },
			{ label: 'boxBgColor' , value: 'transparent'},
			{ label: 'layout' , value: 'accordion'},
			{ label: 'enableSeparator' , value: false}
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M57 46H15L15 53H57V46ZM15 44C13.8954 44 13 44.8954 13 46V53C13 54.1046 13.8954 55 15 55H57C58.1046 55 59 54.1046 59 53V46C59 44.8954 58.1046 44 57 44H15Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M57 18H15L15 25H57V18ZM15 16C13.8954 16 13 16.8954 13 18V25C13 26.1046 13.8954 27 15 27H57C58.1046 27 59 26.1046 59 25V18C59 16.8954 58.1046 16 57 16H15Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M57 32H15L15 39H57V32ZM15 30C13.8954 30 13 30.8954 13 32V39C13 40.1046 13.8954 41 15 41H57C58.1046 41 59 40.1046 59 39V32C59 30.8954 58.1046 30 57 30H15Z" /></svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
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
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="13" y="44" width="46" height="11" rx="2" /><rect x="13" y="16" width="46" height="11" rx="2" /><rect x="13" y="30" width="46" height="11" rx="2" /></svg>',
    },
    {
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
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
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M32 46H15L15 53H32V46ZM15 44C13.8954 44 13 44.8954 13 46V53C13 54.1046 13.8954 55 15 55H32C33.1046 55 34 54.1046 34 53V46C34 44.8954 33.1046 44 32 44H15Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M57 46H40L40 53H57V46ZM40 44C38.8954 44 38 44.8954 38 46V53C38 54.1046 38.8954 55 40 55H57C58.1046 55 59 54.1046 59 53V46C59 44.8954 58.1046 44 57 44H40Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M32 18H15L15 25H32V18ZM15 16C13.8954 16 13 16.8954 13 18V25C13 26.1046 13.8954 27 15 27H32C33.1046 27 34 26.1046 34 25V18C34 16.8954 33.1046 16 32 16H15Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M57 18H40L40 25H57V18ZM40 16C38.8954 16 38 16.8954 38 18V25C38 26.1046 38.8954 27 40 27H57C58.1046 27 59 26.1046 59 25V18C59 16.8954 58.1046 16 57 16H40Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M32 32H15L15 39H32V32ZM15 30C13.8954 30 13 30.8954 13 32V39C13 40.1046 13.8954 41 15 41H32C33.1046 41 34 40.1046 34 39V32C34 30.8954 33.1046 30 32 30H15Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M57 32H40L40 39H57V32ZM40 30C38.8954 30 38 30.8954 38 32V39C38 40.1046 38.8954 41 40 41H57C58.1046 41 59 40.1046 59 39V32C59 30.8954 58.1046 30 57 30H40Z" /></svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addon b s-for-gutenberg' ),
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
     	icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="13" y="44" width="21" height="11" rx="2" /><rect x="38" y="44" width="21" height="11" rx="2" /><rect x="13" y="16" width="21" height="11" rx="2" /><rect x="38" y="16" width="21" height="11" rx="2" /><rect x="13" y="30" width="21" height="11" rx="2" /><rect x="38" y="30" width="21" height="11" rx="2" /></svg>',
	},
];

export default applyFilters(
    `uag_faq_presets`,
    presets
);
