/**
 * BLOCK: UAGB separator Attributes
 */

import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: 'string',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	separatorAlign: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	separatorAlignTablet: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet',
		},
	},
	separatorAlignMobile: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile',
		},
	},
	separatorStyle: {
		type: 'string',
		default: 'solid',
		UAGCopyPaste: {
			styleType: 'separator-style',
		},
	},
	separatorWidth: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'separator-width',
		},
	},
	separatorWidthTablet: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'separator-width-tablet',
		},
	},
	separatorWidthMobile: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'separator-width-mobile',
		},
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'separator-width-type',
		},
	},
	separatorBorderHeight: {
		type: 'number',
		default: 3,
		UAGCopyPaste: {
			styleType: 'separator-height',
		},
	},
	separatorBorderHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-height-mobile',
		},
	},
	separatorBorderHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-height-tablet',
		},
	},
	separatorBorderHeightUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-thickness-unit',
		},
	},
	separatorSize: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'separator-size',
		},
	},
	separatorSizeMobile: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'separator-size-Mobile',
		},
	},
	separatorSizeTablet: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'separator-size-Tablet',
		},
	},
	separatorSizeType: {
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-size-type',
		},
	},
	separatorColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'separator-color',
		},
	},
	separatorHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-gap',
		},
	},
	separatorHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-gap-mobile',
		},
	},
	separatorHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-gap-tablet',
		},
	},
	separatorHeightType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-gap-unit',
		},
	},
	separatorBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-padding',
		},
	},
	separatorPaddingTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-padding-tablet',
		},
	},
	separatorPaddingRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-padding-tablet',
		},
	},
	separatorPaddingBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-padding-tablet',
		},
	},
	separatorPaddingLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-padding-tablet',
		},
	},
	separatorPaddingTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-padding-mobile',
		},
	},
	separatorPaddingRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-padding-mobile',
		},
	},
	separatorPaddingBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-padding-mobile',
		},
	},
	separatorPaddingLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-padding-mobile',
		},
	},
	separatorPaddingUnit: {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-padding-unit',
		},
	},
	separatorMobilePaddingUnit: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-padding-unit-mobile',
		},
		default: 'px',
	},
	separatorTabletPaddingUnit: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-padding-unit-tablet',
		},
		default: 'px',
	},
	separatorPaddingLink: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'separator-padding-link',
		},
	},
	elementType: {
		type: 'string',
		default: 'none',
	},
	separatorText: {
		type: 'string',
		default: __( 'Divider', 'ultimate-addons-for-gutenberg' ),
	},
	separatorTextTag: {
		type: 'string',
		default: 'h4',
		UAGCopyPaste: {
			styleType: 'separator-text-tag',
		},
	},
	separatorIcon: {
		type: 'string',
		default: 'circle-check',
	},
	elementPosition: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'element-position',
		},
	},
	elementSpacing: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'element-spacing',
		},
	},
	elementSpacingTablet: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'element-spacing-tablet',
		},
	},
	elementSpacingMobile: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'element-spacing-mobile',
		},
	},
	elementSpacingUnit: {
		type: 'string',
		default: 'px',
	},

	elementTextLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
	},
	elementTextFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
	},
	elementTextFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	elementTextFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	elementTextFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
	},
	elementTextFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	elementTextFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	elementTextLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
	},
	elementTextLineHeight: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	elementTextLineHeightTablet: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	elementTextLineHeightMobile: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	elementTextFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
	},
	elementTextLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing',
		},
	},
	elementTextLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-tablet',
		},
	},
	elementTextLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-mobile',
		},
	},
	elementTextLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-type',
		},
	},
	elementTextDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	elementTextTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	elementColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	elementIconWidth: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'main-icon-width',
		},
	},
	elementIconWidthTablet: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'main-icon-width-tablet',
		},
	},
	elementIconWidthMobile: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'main-icon-width-mobile',
		},
	},
	elementIconWidthType: {
		type: 'string',
		default: 'px',
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
			UAGCopyPaste: {
				styleType: 'block-padding-unit',
			},
		},
		blockPaddingUnitTablet: {
			type: 'string',
			UAGCopyPaste: {
				styleType: 'block-padding-unit-tablet',
			},
		},
		blockPaddingUnitMobile: {
			type: 'string',
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
};

export default attributes;
