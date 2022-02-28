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
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	timeSpace: {
		type: 'number',
		default: 5,
		isUAGStyle: true,
	},
	costSpace: {
		type: 'number',
		default: 5,
		isUAGStyle: true,
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
			'How To Configure How-To Schema In Ultimate Addons For Gutenberg?',
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
		isUAGStyle: true,
	},
	descriptionAlign: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
	},
	headingColor: {
		type: 'string',
		isUAGStyle: true,
	},
	showEstcostcolor: {
		type: 'string',
		isUAGStyle: true,
	},
	showTotaltimecolor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	subHeadingColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	headingTag: {
		type: 'string',
		default: 'h3',
	},
	headSpace: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	headFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	headFontStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'normal',
	},
	headTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	headDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	headFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	headLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	headFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	headFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	headLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	subHeadFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadFontStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'normal',
	},
	subHeadTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	subHeadFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	subHeadLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	separatorSpace: {
		type: 'number',
		isUAGStyle: true,
		default: 15,
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	priceFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	priceFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	priceFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	priceFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	priceFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	priceFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	priceFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	priceTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	priceDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	priceLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	priceLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	priceLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	priceLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	priceLoadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	row_gap: {
		type: 'number',
		default: 20,
		isUAGStyle: true,
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
