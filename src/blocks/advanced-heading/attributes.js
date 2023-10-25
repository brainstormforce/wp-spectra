import { getBorderAttributes } from '@Controls/generateAttributes';
import { __ } from '@wordpress/i18n';

const highLightBorderAttributes = getBorderAttributes( 'highLight' );

const headingAlignmentDefault = 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 ? 'center' : 'left';
const headingDescToggleDefault = 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 ? true : false;

const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	blockBackgroundType: {
		type: 'string',
		default: 'classic',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-blackground-type',
		},
	},
	blockGradientBackground: {
		type: 'string',
		default: 'linear-gradient(90deg, rgb(6, 147, 227) 0%, rgb(155, 81, 224) 100%)',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-gradient-blackground',
		},
	},
	blockBackground: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-blackground',
		},
	},
	headingTitleToggle: {
		type: 'boolean',
		default: true,
	},
	headingTitle: {
		source: 'html',
		selector: '.uagb-heading-text',
		default: __( 'Your Attractive Heading', 'ultimate-addons-for-gutenberg' ),
	},
	headingId: {
		type: 'string',
	},
	headingDescToggle: {
		type: 'boolean',
		default: headingDescToggleDefault,
	},
	headingDescPosition: {
		type: 'string',
		default: 'below-heading',
		UAGCopyPaste: {
			styleType: 'prefix-position',
		},
	},
	headingDesc: {
		source: 'html',
		selector: '.uagb-desc-text',
	},
	headingAlign: {
		type: 'string',
		default: headingAlignmentDefault,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	headingAlignTablet: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet',
		},
	},
	headingAlignMobile: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile',
		},
	},
	headingColorType: {
		type: 'string',
		default: 'classic',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-color-type',
		},
	},
	headingColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	headingGradientColor: {
		type: 'string',
		default: 'linear-gradient(90deg, rgb(155, 81, 224) 0%, rgb(6, 147, 227) 100%)',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-gradient-color',
		},
	},
	subHeadingColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	separatorColor: {
		type: 'string',
		default: '#0170b9',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-color',
		},
	},
	headingTag: {
		type: 'string',
		default: 'h2',
	},
	level: {
		type: 'number',
		default: 2,
	},
	seperatorStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'separator-style',
		},
	},
	seperatorPosition: {
		type: 'string',
		default: 'below-heading',
		UAGCopyPaste: {
			styleType: 'separator-position',
		},
	},
	separatorHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-thickness',
		},
		default: 2,
	},
	separatorHeightType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-height-type',
		},
	},
	separatorWidth: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-width',
		},
		default: 12,
	},
	separatorWidthTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-width',
		},
	},
	separatorWidthMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-width',
		},
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'separator-width-type',
		},
	},
	headSpace: {
		type: 'number',
		default: 15,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	headSpaceMobile: {
		type: 'number',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet',
		},
	},
	headSpaceTablet: {
		type: 'number',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile',
		},
	},
	headSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-unit-type',
		},
	},
	subHeadSpace: {
		type: 'number',
		default: 15,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'sub-title-bottom-margin',
		},
	},
	subHeadSpaceMobile: {
		type: 'number',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'sub-title-bottom-margin-tablet',
		},
	},
	subHeadSpaceTablet: {
		type: 'number',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'sub-title-bottom-margin-mobile',
		},
	},
	subHeadSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'sub-title-unit-type',
		},
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
	},
	headFontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	headFontStyle: {
		type: 'string',
		default: 'normal',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
	},
	headTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	headDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
	},
	headFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type-mobile',
		},
	},
	headFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type-tablet',
		},
	},
	headLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
	},
	headFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	headFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	headFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	headLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	headLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	headLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	headLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	headLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	headLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	headLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
		},
	},
	headShadowColor: {
		type: 'string',
		default: '',
	},
	headShadowHOffset: {
		type: 'number',
		default: 0,
	},
	headShadowVOffset: {
		type: 'number',
		default: 0,
	},
	headShadowBlur: {
		type: 'number',
		default: 10,
	},
	// sub headline.
	subHeadFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
	},
	subHeadFontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	subHeadFontStyle: {
		type: 'string',
		default: 'normal',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
	},
	subHeadTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	subHeadDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	subHeadFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	subHeadFontSizeType: {
		type: 'string',
		default: 'px',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
	},
	subHeadFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type-mobile',
		},
	},
	subHeadFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type-tablet',
		},
	},
	subHeadFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	subHeadFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	subHeadLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
	},
	subHeadLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	subHeadLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
	subHeadLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	subHeadLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	subHeadLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	subHeadLetterSpacingType: {
		type: 'string',
		default: 'px',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type',
		},
	},
	// separator
	separatorSpace: {
		type: 'number',
		default: 15,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin',
		},
	},
	separatorSpaceTablet: {
		type: 'number',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin',
		},
	},
	separatorSpaceMobile: {
		type: 'number',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin',
		},
	},
	separatorSpaceType: {
		type: 'string',
		default: 'px',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-width-type',
		},
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts',
		},
	},
	separatorHoverColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-hover-color',
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	// padding
	blockTopPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-top-padding',
		},
	},
	blockRightPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-right-padding',
		},
	},
	blockLeftPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-left-padding',
		},
	},
	blockBottomPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding',
		},
	},
	blockTopPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-top-padding-tablet',
		},
	},
	blockRightPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-right-padding-tablet',
		},
	},
	blockLeftPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-left-padding-tablet',
		},
	},
	blockBottomPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-tablet',
		},
	},
	blockTopPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-top-padding-mobile',
		},
	},
	blockRightPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-right-padding-mobile',
		},
	},
	blockLeftPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-left-padding-mobile',
		},
	},
	blockBottomPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-mobile',
		},
	},
	blockPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit',
		},
	},
	blockPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit-tablet',
		},
	},
	blockPaddingUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit-mobile',
		},
	},
	blockPaddingLink: {
		type: 'boolean',
		default: false,
	},
	// margin
	blockTopMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-top-margin',
		},
	},
	blockRightMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-right-margin',
		},
	},
	blockLeftMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-left-margin',
		},
	},
	blockBottomMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-bottom-margin',
		},
	},
	blockTopMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-top-margin-tablet',
		},
	},
	blockRightMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-right-margin-tablet',
		},
	},
	blockLeftMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-left-margin-tablet',
		},
	},
	blockBottomMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-bottom-margin-tablet',
		},
	},
	blockTopMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-top-margin-mobile',
		},
	},
	blockRightMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-right-margin-mobile',
		},
	},
	blockLeftMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-left-margin-mobile',
		},
	},
	blockBottomMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'block-bottom-margin-mobile',
		},
	},
	blockMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-margin-unit',
		},
	},
	blockMarginUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-margin-unit-tablet',
		},
	},
	blockMarginUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-margin-unit-mobile',
		},
	},
	blockMarginLink: {
		type: 'boolean',
		default: false,
	},
	// link
	linkColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'link-color',
		},
	},
	linkHColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'link-hover-color',
		},
	},
	// Highlight
	highLightColor: {
		type: 'string',
		default: '#fff',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-color',
		},
	},
	highLightBackground: {
		type: 'string',
		default: '#007cba',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-background',
		},
	},
	highLightLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-load-google-fonts',
		},
	},
	highLightFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-font-family',
		},
	},
	highLightFontWeight: {
		type: 'string',
		default: 'Default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-font-weight',
		},
	},
	highLightFontStyle: {
		type: 'string',
		default: 'normal',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-font-style',
		},
	},
	highLightTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-font-transform',
		},
	},
	highLightDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-font-decoration',
		},
	},
	highLightFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'highlight-font-size-type',
		},
	},
	highLightFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'highlight-font-size-type-mobile',
		},
	},
	highLightFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'highlight-font-size-type-tablet',
		},
	},
	highLightLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'highlight-line-height-type',
		},
	},
	highLightFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-font-size',
		},
	},
	highLightFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-font-size-tablet',
		},
	},
	highLightFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-font-size-mobile',
		},
	},
	highLightLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-line-height',
		},
	},
	highLightLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-line-height-tablet',
		},
	},
	highLightLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-line-height-mobile',
		},
	},
	highLightLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-letter-spacing',
		},
	},
	highLightLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-letter-spacing-tablet',
		},
	},
	highLightLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-letter-spacing-mobile',
		},
	},
	highLightLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'highlight-letter-spacing-type',
		},
	},
	highLightTopPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-top-padding',
		},
	},
	highLightRightPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-right-padding',
		},
	},
	highLightLeftPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-left-padding',
		},
	},
	highLightBottomPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-bottom-padding',
		},
	},
	highLightTopPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-top-padding-tablet',
		},
	},
	highLightRightPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-right-padding-tablet',
		},
	},
	highLightLeftPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-left-padding-tablet',
		},
	},
	highLightBottomPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-bottom-padding-tablet',
		},
	},
	highLightTopPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-top-padding-mobile',
		},
	},
	highLightRightPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-right-padding-mobile',
		},
	},
	highLightLeftPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-left-padding-mobile',
		},
	},
	highLightBottomPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-bottom-padding-mobile',
		},
	},
	highLightPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'highlight-padding-unit',
		},
	},
	highLightPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'highlight-padding-unit-tablet',
		},
	},
	highLightPaddingUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'highlight-padding-unit-mobile',
		},
	},
	highLightPaddingLink: {
		type: 'boolean',
		default: false,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'highlight-padding-link',
		},
	},
	...highLightBorderAttributes,
};

export default attributes;
