/**
 * BLOCK: Price List - Attributes
 */
import { __ } from '@wordpress/i18n';
const itemCount = 4;

const restMenuBlock = [];

for ( let i = 1; i <= itemCount; i++ ) {
	const descText = __(
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	);
	const titleText = ( 'Menu Item ' + i );
	const priceText = __( '$9' );
	restMenuBlock.push( {
		description: descText,
		title: titleText,
		price: priceText,
		image: '',
	} );
}

const attributes = {
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	childMigrate: {
		type: 'boolean',
		default: false,
	},
	menu_item_count: {
		type: 'number',
		default: itemCount,
	},
	rest_menu_item_arr: {
		type: 'array',
		default: restMenuBlock,
	},
	headingAlign: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
	},
	priceSpace: {
		type: 'number',
		default: 5,
		isUAGStyle: true,
	},
	descSpace: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	titleSpace: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	imgVrPadding: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	imgHrPadding: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	imgPaddingTop: {
		type: 'number',
		isUAGStyle: true,
	},
	imgPaddingRight: {
		type: 'number',
		isUAGStyle: true,
	},
	imgPaddingBottom: {
		type: 'number',
		isUAGStyle: true,
	},
	imgPaddingLeft: {
		type: 'number',
		isUAGStyle: true,
	},
	contentPaddingTop:{
		type:'number',
		isUAGStyle: true,
	},
	contentPaddingRight:{
		type:'number',
		isUAGStyle: true,
	},
	contentPaddingBottom:{
		type:'number',
		isUAGStyle: true,
	},
	contentPaddingLeft:{
		type:'number',
		isUAGStyle: true,
	},
	columns: {
		type: 'number',
		isUAGStyle: true,
		default: 2,
	},
	tcolumns: {
		type: 'number',
		isUAGStyle: true,
		default: 2,
	},
	mcolumns: {
		type: 'number',
		isUAGStyle: true,
		default: 1,
	},
	rowGap: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	columnGap: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	contentVrPadding: {
		type: 'number',
		isUAGStyle: true,
		default: 5,
	},
	contentHrPadding: {
		type: 'number',
		isUAGStyle: true,
		default: 5,
	},

	stack: {
		type: 'string',
		default: 'tablet',
	},
	seperatorStyle: {
		type: 'string',
		default: 'dashed',
		isUAGStyle: true,
	},
	seperatorWidth: {
		type: 'number',
		default: '100',
		isUAGStyle: true,
	},
	seperatorThickness: {
		type: 'number',
		default: '1',
		isUAGStyle: true,
	},
	seperatorColor: {
		type: 'string',
		default: '#dddddd',
		isUAGStyle: true,
	},
	descColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	priceColor: {
		type: 'string',
		default: '#888888',
		isUAGStyle: true,
	},
	titleColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	titleFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	titleFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	titleFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	titleFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	titleFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	titleFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	titleLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	titleLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	titleLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	titleLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},

	priceFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
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

	descFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	descFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	descFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	descFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	descFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	descFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	descFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	descLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	descLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	descLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	descLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	headingTag: {
		type: 'string',
		default: 'h4',
	},
	imagePosition: {
		type: 'string',
		default: 'top',
		isUAGStyle: true,
	},
	imageAlignment: {
		type: 'string',
		default: 'top',
		isUAGStyle: true,
	},
	imageSize: {
		type: 'string',
		default: 'medium',
		isUAGStyle: true,
	},
	imageWidth: {
		type: 'number',
		default: 100,
		isUAGStyle: true,
	},
	imageWidthType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	seperatorWidthType: {
		type: 'string',
		isUAGStyle: true,
		default: '%',
	},
	rowGapType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	columnGapType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	titleSpaceType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	contentPaddingTopTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentPaddingRightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentPaddingBottomTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentPaddingLeftTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentPaddingTopMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	contentPaddingRightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	contentPaddingBottomMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	contentPaddingLeftMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	contentPaddingUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	contentMobilePaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	contentTabletPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	contentSpacingLink: {
		type: 'boolean',
		default: false,
	},
	imgPaddingTopTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imgPaddingRightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imgPaddingBottomTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imgPaddingLeftTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imgPaddingTopMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imgPaddingRightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imgPaddingBottomMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imgPaddingLeftMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imgPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	imgMobilePaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	imgTabletPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	imgSpacingLink: {
		type: 'boolean',
		default: false,
	},
	titleTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	titleDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	descTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	descDecoration: {
		type: 'string',
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
	imgAlign: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
