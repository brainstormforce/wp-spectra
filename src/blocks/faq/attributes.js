import { getBorderAttributes } from '@Controls/generateAttributes';

const borderAttributes = getBorderAttributes( 'overall' );
const iconBorderAttributes = getBorderAttributes( 'icon' );

const attributes = {
	block_id: {
		type: 'string',
	},
	layout: {
		type: 'string',
		default: 'accordion',
	},
	inactiveOtherItems: {
		type: 'boolean',
		default: true,
	},
	expandFirstItem: {
		type: 'boolean',
		default: true,
	},
	enableSchemaSupport: {
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
		default: true,
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
		default: true,
	},
	enableSeparator: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'enable-separator',
		},
	},
	rowsGap: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'row-gap',
		},
	},
	rowsGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap-tablet',
		},
	},
	rowsGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap-mobile',
		},
	},
	rowsGapUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'row-gap-type',
		},
	},
	columnsGap: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'column-gap',
		},
	},
	columnsGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gap-tablet',
		},
	},
	columnsGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gap-mobile',
		},
	},
	columnsGapUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-gap-type',
		},
	},
	boxBgType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'faq-bg-type',
		},
	},
	boxBgHoverType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'faq-bg-hover-type',
		},
	},
	boxBgColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'faq-bg-color',
		},
	},
	boxBgHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'faq-bg-hover-color',
		},
	},
	boxPaddingTypeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'faq-padding-type-mobile',
		},
		default: 'px',
	},
	boxPaddingTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'faq-padding-type-tablet',
		},
	},
	boxPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'faq-padding-type-desktop',
		},
	},
	vBoxPaddingMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'faq-vertical-padding-mobile',
		},
	},
	hBoxPaddingMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'faq-horizontal-padding-mobile',
		},
	},
	vBoxPaddingTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'faq-vertical-padding-tablet',
		},
	},
	hBoxPaddingTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'faq-horizontal-padding-tablet',
		},
	},
	vBoxPaddingDesktop: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'faq-vertical-padding-desktop',
		},
	},
	hBoxPaddingDesktop: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'faq-horizontal-padding-desktop',
		},
	},
	borderHoverColor: {
		type: 'string',
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
	},
	borderWidth: {
		type: 'number',
		default: 1,
	},
	borderRadius: {
		type: 'number',
		default: 2,
	},
	borderColor: {
		type: 'string',
		default: '#D2D2D2',
	},
	questionTextColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	questionTextActiveColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-hover-color',
		},
	},
	questionTextBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-bg-color',
		},
	},
	questionTextActiveBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-hover-bg-color',
		},
	},
	questionPaddingTypeDesktop: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-padding-type-desktop',
		},
		default: 'px',
	},
	questionPaddingTypeTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-padding-type-tablet',
		},
		default: 'px',
	},
	questionPaddingTypeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-padding-type-mobile',
		},
		default: 'px',
	},
	vquestionPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-vertical-padding-mobile',
		},
		default: 10,
	},
	vquestionPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-vertical-padding-tablet',
		},
		default: 10,
	},
	vquestionPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-vertical-padding-desktop',
		},
		default: 10,
	},
	hquestionPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-horizontal-padding-mobile',
		},
		default: 10,
	},
	hquestionPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-horizontal-padding-tablet',
		},
		default: 10,
	},
	hquestionPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-horizontal-padding-desktop',
		},
		default: 10,
	},
	answerTextColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	answerPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-type-desktop',
		},
	},
	answerPaddingTypeTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-type-tablet',
		},
		default: 'px',
	},
	answerPaddingTypeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-type-mobile',
		},
		default: 'px',
	},
	vanswerPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding-mobile',
		},
		default: 10,
	},
	vanswerPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding-tablet',
		},
		default: 10,
	},
	vanswerPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding-desktop',
		},
		default: 10,
	},
	hanswerPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding-mobile',
		},
		default: 10,
	},
	hanswerPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding-tablet',
		},
		default: 10,
	},
	hanswerPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding-desktop',
		},
		default: 10,
	},
	iconColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	iconActiveColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-hover-color',
		},
	},
	gapBtwIconQUestion: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'icon-spacing',
		},
	},
	gapBtwIconQUestionTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-spacing-tablet',
		},
	},
	gapBtwIconQUestionMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-spacing-mobile',
		},
	},
	questionloadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
		default: false,
	},
	answerloadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts',
		},
		default: false,
	},
	questionFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
		default: 'Default',
	},
	questionFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	questionFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
		default: 'normal',
	},
	questionTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	questionDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	questionFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	questionFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
		default: 'px',
	},
	questionFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	questionFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	questionLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	questionLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
	},
	questionLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	questionLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	answerFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
		default: 'Default',
	},
	answerFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	answerFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
		default: 'normal',
	},
	answerTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	answerDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	answerFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	answerFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
		default: 'px',
	},
	answerFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	answerFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	answerLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	answerLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
		default: 'em',
	},
	answerLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	answerLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
	icon: {
		type: 'string',
		default: 'plus',
	},
	iconActive: {
		type: 'string',
		default: 'minus',
	},
	iconAlign: {
		type: 'string',
		default: 'row',
		UAGCopyPaste: {
			styleType: 'icon-align',
		},
	},
	iconSize: {
		type: 'number',
		default: 12,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	iconSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-tablet',
		},
	},
	iconSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-mobile',
		},
	},
	iconSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type',
		},
	},
	iconBgSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bg-size',
		},
	},
	iconBgSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bg-size-tablet',
		},
	},
	iconBgSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bg-size-mobile',
		},
	},
	iconBgSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-bg-size-type',
		},
	},
	columns: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'column-count',
		},
	},
	tcolumns: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'column-count-tablet',
		},
	},
	mcolumns: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'column-count-mobile',
		},
	},
	schema: {
		type: 'string',
		default: '',
	},
	enableToggle: {
		type: 'boolean',
		default: true,
	},
	equalHeight: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'equal-height',
		},
	},
	questionLeftPaddingTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-left-padding-tablet',
		},
	},
	questionBottomPaddingTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding-tablet',
		},
	},
	questionLeftPaddingDesktop: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-left-padding-desktop',
		},
	},
	questionBottomPaddingDesktop: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding-desktop',
		},
	},
	questionLeftPaddingMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-left-padding-mobile',
		},
	},
	questionBottomPaddingMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding-mobile',
		},
	},
	headingTag: {
		type: 'html',
		selector: 'span,p,h1,h2,h3,h4,h5,h6',
		default: 'span',
	},
	questionSpacingLink: {
		type: 'boolean',
		default: false,
	},
	answerSpacingLink: {
		type: 'boolean',
		default: false,
	},
	answerTopPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-top-padding',
		},
	},
	answerRightPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-right-padding',
		},
	},
	answerBottomPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding',
		},
	},
	answerLeftPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-left-padding',
		},
	},
	answerTopPaddingTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-top-padding-tablet',
		},
	},
	answerRightPaddingTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-right-padding-tablet',
		},
	},
	answerBottomPaddingTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-tablet',
		},
	},
	answerLeftPaddingTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	answerTopPaddingMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-top-padding-mobile',
		},
	},
	answerRightPaddingMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-right-padding-mobile',
		},
	},
	answerBottomPaddingMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-mobile',
		},
	},
	answerLeftPaddingMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-mobile',
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	...borderAttributes,
	// letter spacing
	questionLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	questionLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	questionLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	questionLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
		},
	},
	answerLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	answerLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	answerLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	answerLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type',
		},
	},
	iconBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-color',
		},
	},
	...iconBorderAttributes,
};
export default attributes;
