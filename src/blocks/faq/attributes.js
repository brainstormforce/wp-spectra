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
			styleType: 'overall-alignment'
		},
	},
	enableSeparator: {
		type: 'boolean',
		default: false,
	},
	rowsGap: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'row-gap'
		},
	},
	rowsGapTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'row-gap-tablet'
		},
	},
	rowsGapMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'row-gap-mobile'
		},
	},
	columnsGap: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'column-gap'
		},
	},
	columnsGapTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'column-gap-tablet'
		},
	},
	columnsGapMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'column-gap-mobile'
		},
	},
	boxBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'faq-bg-color'
		},
		default: ''
	},
	boxPaddingTypeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'faq-padding-type-mobile'
		},
		default: 'px',
	},
	boxPaddingTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'faq-padding-type-tablet'
		},
	},
	boxPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'faq-padding-type-desktop'
		},
	},
	vBoxPaddingMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'faq-vertical-padding-mobile'
		},
	},
	hBoxPaddingMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'faq-horizontal-padding-mobile'
		},
	},
	vBoxPaddingTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'faq-vertical-padding-tablet'
		},
	},
	hBoxPaddingTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'faq-horizontal-padding-tablet'
		},
	},
	vBoxPaddingDesktop: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'faq-vertical-padding-desktop'
		},
	},
	hBoxPaddingDesktop: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'faq-horizontal-padding-desktop'
		},
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
		UAGCopyPaste: {
			styleType: 'faq-border-style'
		},
	},
	borderWidth: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'faq-border-width'
		},
	},
	borderRadius: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'faq-border-radius'
		},
	},
	borderColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'faq-border-color'
		},
	},
	borderHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'faq-border-hover-color'
		},
	},
	questionTextColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	questionTextActiveColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-hover-color'
		},
	},
	questionPaddingTypeDesktop: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-padding-type-desktop'
		},
		default: 'px',
	},
	questionPaddingTypeTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-padding-type-tablet'
		},
		default: 'px',
	},
	questionPaddingTypeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-padding-type-mobile'
		},
		default: 'px',
	},
	vquestionPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-vertical-padding-mobile'
		},
		default: 10,
	},
	vquestionPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-vertical-padding-tablet'
		},
		default: 10,
	},
	vquestionPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-vertical-padding-desktop'
		},
		default: 10,
	},
	hquestionPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-horizontal-padding-mobile'
		},
		default: 10,
	},
	hquestionPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-horizontal-padding-tablet'
		},
		default: 10,
	},
	hquestionPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-horizontal-padding-desktop'
		},
		default: 10,
	},
	answerTextColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
	},
	answerPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-type-desktop'
		},
	},
	answerPaddingTypeTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-type-tablet'
		},
		default: 'px',
	},
	answerPaddingTypeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-type-mobile'
		},
		default: 'px',
	},
	vanswerPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding-mobile'
		},
		default: 10,
	},
	vanswerPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding-tablet'
		},
		default: 10,
	},
	vanswerPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding-desktop'
		},
		default: 10,
	},
	hanswerPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding-mobile'
		},
		default: 10,
	},
	hanswerPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding-tablet'
		},
		default: 10,
	},
	hanswerPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding-desktop'
		},
		default: 10,
	},
	iconColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-color'
		},
	},
	iconActiveColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-hover-color'
		},
	},
	gapBtwIconQUestion: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'icon-spacing'
		},
	},
	gapBtwIconQUestionTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'icon-spacing-tablet'
		},
	},
	gapBtwIconQUestionMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'icon-spacing-mobile'
		},
	},
	questionloadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		},
		default: false,
	},
	answerloadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		},
		default: false,
	},
	questionFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
		default: 'Default',
	},
	questionFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	questionFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
		default: 'normal',
	},
	questionTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	questionDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	questionFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	questionFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
		default: 'px',
	},
	questionFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
	},
	questionFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	questionLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		},
	},
	questionLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
	},
	questionLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		},
	},
	questionLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		},
	},
	answerFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		},
		default: 'Default',
	},
	answerFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		},
	},
	answerFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		},
		default: 'normal',
	},
	answerTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform'
		},
	},
	answerDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		},
	},
	answerFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		},
	},
	answerFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		},
		default: 'px',
	},
	answerFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		},
	},
	answerFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		},
	},
	answerLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		},
	},
	answerLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		},
		default: 'em',
	},
	answerLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		},
	},
	answerLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		},
	},
	icon: {
		type: 'string',
		default: 'fas fa-plus',
	},
	iconActive: {
		type: 'string',
		default: 'fas fa-minus',
	},
	iconAlign: {
		type: 'string',
		default: 'row',
		UAGCopyPaste: {
			styleType: 'icon-align'
		},
	},
	iconSize: {
		type: 'number',
		default: 12,
		UAGCopyPaste: {
			styleType: 'icon-size'
		},
	},
	iconSizeTablet: {
		type: 'number',
		default: 12,
		UAGCopyPaste: {
			styleType: 'icon-size-tablet'
		},
	},
	iconSizeMobile: {
		type: 'number',
		default: 12,
		UAGCopyPaste: {
			styleType: 'icon-size-mobile'
		},
	},
	iconSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type'
		},
	},
	columns: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'column-count'
		},
	},
	tcolumns: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'column-count-tablet'
		},
	},
	mcolumns: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'column-count-mobile'
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
			styleType: 'equal-height'
		},
	},
	questionLeftPaddingTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-left-padding-tablet'
		},
	},
	questionBottomPaddingTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding-tablet'
		},
	},
	questionLeftPaddingDesktop: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-left-padding-desktop'
		},
	},
	questionBottomPaddingDesktop: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding-desktop'
		},
	},
	questionLeftPaddingMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-left-padding-mobile'
		},
	},
	questionBottomPaddingMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding-mobile'
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
		UAGCopyPaste: {
			styleType: 'desc-top-padding'
		},
	},
	answerRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding'
		},
	},
	answerBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding'
		},
	},
	answerLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding'
		},
	},
	answerTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding-tablet'
		},
	},
	answerRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding-tablet'
		},
	},
	answerBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-tablet'
		},
	},
	answerLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet'
		},
	},
	answerTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding-mobile'
		},
	},
	answerRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding-mobile'
		},
	},
	answerBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-mobile'
		},
	},
	answerLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-mobile'
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};
export default attributes;
