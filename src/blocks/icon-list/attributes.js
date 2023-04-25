/**
 * BLOCK: Icon List - Attributes
 */

const itemCount = 3;

const icons = [];

for ( let i = 1; i <= itemCount; i++ ) {
	icons.push( {
		label: '#Label',
		image_icon: 'icon',
		icon: '',
		image: '',
		icon_color: '',
		label_color: '',
		icon_hover_color: '',
		label_hover_color: '',
		icon_bg_color: '',
		icon_bg_hover_color: '',
		icon_border_color: '',
		icon_border_hover_color: '',
		link: '#',
		target: false,
		disableLink: true,
		hideLabel: false,
	} );
}

const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	childMigrate: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	alignTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet',
		},
	},
	alignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile',
		},
	},
	icon_count: {
		type: 'number',
		default: itemCount,
	},
	parentIcon: {
		type: 'string',
		default: 'circle-arrow-right',
	},
	icons: {
		type: 'array',
		default: icons,
	},
	gap: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-gap',
		},
		default: 10,
	},
	gapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-gap',
		},
	},
	gapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-gap',
		},
	},
	gapType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-size-type',
		},
		default: 'px',
	},
	inner_gap: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'icon-inner-gap',
		},
	},
	innerGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-inner-gap',
		},
	},
	innerGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-inner-gap',
		},
	},
	innerGapType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-size-type',
		},
		default: 'px',
	},
	iconPosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-position',
		},
		default: 'middle',
	},
	iconPositionTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-position-tablet',
		},
		default: '',
	},
	iconPositionMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-position-mobile',
		},
		default: '',
	},
	iconPlacement: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-placement',
		},
		default: 'before',
	},
	size: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
		default: 16,
	},
	sizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-size-type',
		},
		default: 'px',
	},
	sizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-mobile',
		},
	},
	sizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-tablet',
		},
	},
	bgSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bg-size',
		},
		default: 0,
	},
	bgSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-size-type',
		},
		default: 'px',
	},
	bgSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bg-size-tablet',
		},
	},
	bgSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bg-size-mobile',
		},
	},
	border: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-border-style',
		},
	},
	borderTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-border-style',
		},
	},
	borderMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-border-style',
		},
	},
	borderType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-border-unit',
		},
	},
	borderRadius: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-border-radius',
		},
	},
	borderRadiusTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-border-radius',
		},
	},
	borderRadiusMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-border-radius',
		},
	},
	borderRadiusType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-border-radius-unit',
		},
	},
	hideLabel: {
		type: 'boolean',
		default: false,
	},
	fontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	fontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
	},
	fontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	fontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	fontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
		default: 'Default',
	},
	fontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	fontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
		default: 'normal',
	},
	fontTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	fontDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	lineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
		default: 'em',
	},
	lineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	lineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	lineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	loadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
		default: false,
	},
	icon_layout: {
		type: 'string',
		default: 'vertical',
		UAGCopyPaste: {
			styleType: 'icon-layout',
		},
	},
	iconLayoutTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-layout-tablet',
		},
	},
	iconLayoutMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-layout-mobile',
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	labelLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing',
		},
	},
	labelLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-tablet',
		},
	},
	labelLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-mobile',
		},
	},
	labelLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-type',
		},
	},
	iconColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	labelColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	iconHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-hover-color',
		},
	},
	labelHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-hover-color',
		},
	},
	iconBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-color',
		},
		default: '',
	},
	iconBgHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-hover-color',
		},
	},
	iconBorderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-border-color',
		},
		default: '',
	},
	iconBorderHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-border-hover-color',
		},
	},
	// margin
	blockTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-margin',
		},
	},
	blockRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-margin',
		},
	},
	blockLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-margin',
		},
	},
	blockBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-margin',
		},
	},
	blockTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-margin-tablet',
		},
	},
	blockRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-margin-tablet',
		},
	},
	blockLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-margin-tablet',
		},
	},
	blockBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-margin-tablet',
		},
	},
	blockTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-margin-mobile',
		},
	},
	blockRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-margin-mobile',
		},
	},
	blockLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-margin-mobile',
		},
	},
	blockBottomMarginMobile: {
		type: 'number',
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
	// padding
	blockTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-padding',
		},
	},
	blockRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-padding',
		},
	},
	blockLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-padding',
		},
	},
	blockBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-padding',
		},
	},
	blockTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-padding-tablet',
		},
	},
	blockRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-padding-tablet',
		},
	},
	blockLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-padding-tablet',
		},
	},
	blockBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-tablet',
		},
	},
	blockTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-padding-mobile',
		},
	},
	blockRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-padding-mobile',
		},
	},
	blockLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-padding-mobile',
		},
	},
	blockBottomPaddingMobile: {
		type: 'number',
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
		default: true,
	},
};

export default attributes;
