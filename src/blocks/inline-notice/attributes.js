/**
 * BLOCK: UAGB Inline Notice Block Attributes
 */

const attributes = {
	block_id: {
		type: 'string',
	},
	c_id: {
		type: 'string',
		default: null,
	},
	noticeTitle: {
		type: 'string',
		source: 'html',
		selector: '.uagb-notice-title',
		default: 'Notice Title',
	},
	headingTag: {
		type: 'string',
		default: 'h4',
	},
	noticeContent: {
		type: 'string',
		default: '',
	},
	noticeDismiss: {
		type: 'string',
		default: '',
	},
	cookies: {
		type: 'boolean',
		default: false,
	},
	close_cookie_days: {
		type: 'number',
		default: 1,
	},
	textColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
	},
	titleColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	noticeColor: {
		type: 'string',
		default: '#FFD54F',
		UAGCopyPaste: {
			styleType: 'notice-color'
		},
	},
	contentBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'notice-content-bg-color'
		},
	},
	noticeDismissColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'notice-dismiss-color'
		},
	},
	icon: {
		type: 'string',
		default: 'fa fa-window-close',
	},
	noticeAlignment: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'notice-align'
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
		default: 'normal',
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
	titleFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-unit'
		},
	},
	titleLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
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
	titleLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		},
	},
	titleLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		},
	},
	titleLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		},
	},
	descFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		},
	},
	descFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		},
	},
	descFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
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
	descFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		},
	},
	descFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
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
	descLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		},
	},
	descLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		},
		default: 'em',
	},
	descLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		},
	},
	descLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		},
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		},
		default: false,
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		},
	},
	titleLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-padding'
		},
	},
	titleRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-padding'
		},
	},
	titleTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-padding'
		},
	},
	titleBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding'
		},
	},
	titleLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-padding-tablet'
		},
	},
	titleRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-padding-tablet'
		},
	},
	titleTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-padding-tablet'
		},
	},
	titleBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding-tablet'
		},
	},
	titleLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'main-title-left-padding-mobile'
		},
	},
	titleRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'main-title-right-padding-mobile'
		},
	},
	titleTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'main-title-top-padding-mobile'
		},
	},
	titleBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'main-title-bottom-padding-mobile'
		},
	},
	titlePaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-padding-unit'
		},
		default: 'px',
	},
	mobileTitlePaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-padding-unit-mobile'
		},
		default: 'px',
	},
	tabletTitlePaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-padding-unit-tablet'
		},
		default: 'px',
	},
	titlePaddingLink: {
		type: 'boolean',
		default: false,
	},
	layout: {
		type: 'string',
		default: 'modern',
	},
	highlightWidth: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'notice-highlight-width'
		},
	},
	contentLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'notice-content-left-padding'
		},
	},
	contentRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'notice-content-right-padding'
		},
	},
	contentTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'notice-content-Top-padding'
		},
	},
	contentBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'notice-content-bottom-padding'
		},
	},
	contentLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'notice-content-left-padding-tablet'
		},
	},
	contentRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'notice-content-right-padding-tablet'
		},
	},
	contentTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'notice-content-Top-padding-tablet'
		},
	},
	contentBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'notice-content-bottom-padding-tablet'
		},
	},
	contentLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'notice-content-left-padding-mobile'
		},
	},
	contentRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'notice-content-right-padding-mobile'
		},
	},
	contentTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'notice-content-Top-padding-mobile'
		},
	},
	contentBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'notice-content-bottom-padding-mobile'
		},
	},
	contentPaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'notice-content-padding-unit'
		},
		default: 'px',
	},
	mobileContentPaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'notice-content-padding-unit-mobile'
		},
		default: 'px',
	},
	tabletContentPaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'notice-content-padding-unit-tablet'
		},
		default: 'px',
	},
	contentPaddingLink: {
		type: 'boolean',
		default: false,
	},
	contentVrPadding: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'notice-content-v-padding'
		},
	},
	contentHrPadding: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'notice-content-h-padding'
		},
	},
	titleVrPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-v-padding'
		},
		default: 15,
	},
	titleHrPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-h-padding'
		},
		default: 15,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
