/**
 * BLOCK: UAGB How-To Schema Attributes
 */

import { __ } from '@wordpress/i18n';

const tools = [];

const materials = [];

tools.push( {
	add_required_tools: __( '- A Computer.', 'ultimate-addons-for-gutenberg' ),
} );

materials.push( {
	add_required_materials: __(
		'- A WordPress Website.',
		'ultimate-addons-for-gutenberg'
	),
} );

const attributes = {
	block_id: {
		type: 'string',
	},
	overallAlignment: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		},
	},
	toolsTitle: {
		type: 'html',
		default: __( 'Required Tools:', 'ultimate-addons-for-gutenberg' ),
	},
	materialTitle: {
		type: 'html',
		default: __( 'Things Needed?', 'ultimate-addons-for-gutenberg' ),
	},
	stepsTitle: {
		type: 'html',
		default: __(
			'Steps to configure the How-to Schema:',
			'ultimate-addons-for-gutenberg'
		),
	},
	tools_count: {
		type: 'number',
		default: 1,
	},
	material_count: {
		type: 'number',
		default: 1,
	},
	tools: {
		type: 'array',
		default: tools,
	},
	materials: {
		type: 'array',
		default: materials,
	},
	showTotaltime: {
		type: 'boolean',
		default: true,
	},
	showEstcost: {
		type: 'boolean',
		default: true,
	},
	showTools: {
		type: 'boolean',
		default: true,
	},
	showMaterials: {
		type: 'boolean',
		default: true,
	},
	mainimage: {
		type: 'object',
		default: {
			url: '',
			title: '',
		},
	},
	estCost: {
		type: 'html',
		default: __( 'Total Cost:', 'ultimate-addons-for-gutenberg' ),
	},
	timeNeeded: {
		type: 'html',
		default: __( 'Total Time Needed :', 'ultimate-addons-for-gutenberg' ),
	},
	timeIn: {
		type: 'html',
		default: __( ' Minutes', 'ultimate-addons-for-gutenberg' ),
	},
	imgSize: {
		type: 'string',
		default: 'thumbnail',
		UAGCopyPaste: {
			styleType: 'image-size'
		},
	},
	timeSpace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin'
		},
	},
	costSpace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin'
		},
	},
	time: {
		type: 'string',
		default: '30',
	},
	cost: {
		type: 'string',
		default: '65',
	},
	headingTitle: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: __(
			'How To Configure How-To Schema In Spectra?',
			'ultimate-addons-for-gutenberg'
		),
	},
	currencyType: {
		type: 'html',
		default: ' USD',
	},
	headingDesc: {
		source: 'html',
		selector: 'p',
		default: __(
			'So to get started, you will just need to drag-n-drop the How-to Schema block in the Gutenberg editor. The How-to Schema block can be used on pages that contain a How-to in their title and describe steps to achieve certain requirements.',
			'ultimate-addons-for-gutenberg'
		),
	},
	headingAlign: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		},
	},
	descriptionAlign: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'desc-align'
		},
	},
	headingColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	showEstcostcolor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-color'
		},
	},
	showTotaltimecolor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-color'
		},
		default: '',
	},
	subHeadingColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
		default: '',
	},
	headingTag: {
		type: 'string',
		default: 'h3',
	},
	headSpace: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		},
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
	},
	headFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	headFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
		default: 'normal',
	},
	headTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	headDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	headFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
		default: 'px',
	},
	headLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
		default: 'em',
	},
	headFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	headFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
	},
	headFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	headLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		},
	},
	headLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		},
	},
	headLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		},
	},
	subHeadFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		},
		default: 'Default',
	},
	subHeadFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		},
	},
	subHeadFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		},
		default: 'normal',
	},
	subHeadTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform'
		},
	},
	subHeadDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		},
	},
	subHeadFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		},
	},
	subHeadFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		},
		default: 'px',
	},
	subHeadFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		},
	},
	subHeadFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		},
	},
	subHeadLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		},
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		},
	},
	subHeadLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		},
	},
	subHeadLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		},
	},
	separatorSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin'
		},
		default: 15,
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		},
		default: false,
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		},
		default: false,
	},
	priceFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type'
		},
		default: 'px',
	},
	priceFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size'
		},
	},
	priceFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet'
		},
	},
	priceFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile'
		},
	},
	priceFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-family'
		},
		default: 'Default',
	},
	priceFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-weight'
		},
	},
	priceFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		},
	},
	priceTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	priceDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-decoration'
		},
	},
	priceLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type'
		},
		default: 'em',
	},
	priceLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height'
		},
	},
	priceLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet'
		},
	},
	priceLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile'
		},
	},
	priceLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'prefix-load-google-fonts'
		},
		default: false,
	},
	row_gap: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'row-gap'
		},
	},
	step_gap: {
		type: 'number',
	},
	schema: {
		type: 'html',
		default: '',
	},
	timeInMins: {
		type: 'number',
	},
	timeInHours: {
		type: 'number',
	},
	timeInDays: {
		type: 'number',
	},
	timeInMonths: {
		type: 'number',
	},
	timeInYears: {
		type: 'number',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
