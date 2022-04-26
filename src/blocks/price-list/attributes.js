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
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
	},
	priceSpace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin'
		},
	},
	descSpace: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin'
		},
	},
	titleSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		},
	},
	titleSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		},
	},
	titleSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		},
	},
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	imgVrPadding: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'image-vertical-padding'
		},
	},
	imgHrPadding: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'image-horizontal-padding'
		},
	},
	imgPaddingTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding'
		},
	},
	imgPaddingRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding'
		},
	},
	imgPaddingBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding'
		},
	},
	imgPaddingLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-padding'
		},
	},
	contentPaddingTop:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding'
		},
	},
	contentPaddingRight:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding'
		},
	},
	contentPaddingBottom:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding'
		},
	},
	contentPaddingLeft:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding'
		},
	},
	columns: {
		type: 'number',
		default: 2,
	},
	tcolumns: {
		type: 'number',
		default: 2,
	},
	mcolumns: {
		type: 'number',
		default: 1,
	},
	rowGap: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap'
		},
		default: 10,
	},
	rowGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap'
		},
	},
	rowGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap'
		},
	},
	columnGap: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gap'
		},
		default: 10,
	},
	columnGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gap'
		},
	},
	columnGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gap'
		},
	},
	contentVrPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding'
		},
		default: 5,
	},
	contentHrPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding'
		},
		default: 5,
	},

	stack: {
		type: 'string',
		default: 'tablet',
	},
	seperatorStyle: {
		type: 'string',
		default: 'dashed',
		UAGCopyPaste: {
			styleType: 'separator-style'
		},
	},
	seperatorWidth: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'separator-width'
		},
	},
	seperatorWidthTablet: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'separator-width'
		},
	},
	seperatorWidthMobile: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'separator-width'
		},
	},
	seperatorThickness: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'separator-thickness'
		},
	},
	seperatorColor: {
		type: 'string',
		default: '#b2b4b5',
		UAGCopyPaste: {
			styleType: 'separator-color'
		},
	},
	descColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
	},
	priceColor: {
		type: 'string',
		default: '#888888',
		UAGCopyPaste: {
			styleType: 'prefix-color'
		},
	},
	titleColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
	},
	titleFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	titleFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
	},
	titleFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	titleFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
		default: 'Default',
	},
	titleFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	titleFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
	},
	titleLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
		default: 'em',
	},
	titleLineHeight: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		},
	},
	titleLineHeightTablet: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		},
	},
	titleLineHeightMobile: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		},
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		},
	},

	priceFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type'
		},
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
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
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
		default: 1,
		UAGCopyPaste: {
			styleType: 'prefix-line-height'
		},
	},
	priceLineHeightTablet: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet'
		},
	},
	priceLineHeightMobile: {
		type: 'number',
		default: 1,
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

	descFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		},
	},
	descFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		},
	},
	descFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		},
	},
	descFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		},
	},
	descFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		},
		default: 'Default',
	},
	descFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		},
	},
	descFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		},
	},
	descLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		},
	},
	descLineHeight: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		},
	},
	descLineHeightTablet: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		},
	},
	descLineHeightMobile: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		},
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		},
		default: false,
	},
	headingTag: {
		type: 'string',
		default: 'h4',
	},
	imagePosition: {
		type: 'string',
		default: 'top',
		UAGCopyPaste: {
			styleType: 'image-position'
		},
	},
	imageAlignment: {
		type: 'string',
		default: 'top',
		UAGCopyPaste: {
			styleType: 'image-align'
		},
	},
	imageSize: {
		type: 'string',
		default: 'medium',
		UAGCopyPaste: {
			styleType: 'image-size'
		},
	},
	imageWidth: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'image-width'
		},
	},
	imageWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width'
		},
	},
	imageWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width'
		},
	},
	imageWidthType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-type'
		},
	},
	seperatorWidthType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'separator-width-type'
		},
		default: '%',
	},
	rowGapType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'row-gap-unit'
		},
	},
	columnGapType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-gap-unit'
		},
	},
	titleSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-type'
		},
	},
	contentPaddingTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding-tablet'
		},
	},
	contentPaddingRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding-tablet'
		},
	},
	contentPaddingBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-tablet'
		},
	},
	contentPaddingLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet'
		},
	},
	contentPaddingTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding-mobile'
		},
	},
	contentPaddingRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding-mobile'
		},
	},
	contentPaddingBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-mobile'
		},
	},
	contentPaddingLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-mobile'
		},
	},
	contentPaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit'
		},
		default: 'px',
	},
	contentMobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-mobile'
		},
	},
	contentTabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-tablet'
		},
	},
	contentSpacingLink: {
		type: 'boolean',
		default: false,
	},
	imgPaddingTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding-tablet'
		},
	},
	imgPaddingRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding-tablet'
		},
	},
	imgPaddingBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding-tablet'
		},
	},
	imgPaddingLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-padding-tablet'
		},
	},
	imgPaddingTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding-mobile'
		},
	},
	imgPaddingRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding-mobile'
		},
	},
	imgPaddingBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding-mobile'
		},
	},
	imgPaddingLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-padding-mobile'
		},
	},
	imgPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit'
		},
	},
	imgMobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit-mobile'
		},
	},
	imgTabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit-tablet'
		},
	},
	imgSpacingLink: {
		type: 'boolean',
		default: false,
	},
	titleTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	titleDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	descTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform'
		},
	},
	descDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
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
	imgAlign: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-align'
		},
		default: '',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
