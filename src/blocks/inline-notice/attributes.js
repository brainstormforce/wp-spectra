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
		isUAGStyle: true,
	},
	titleColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	noticeColor: {
		type: 'string',
		default: '#FFD54F',
		isUAGStyle: true,
	},
	contentBgColor: {
		type: 'string',
		isUAGStyle: true,
	},
	noticeDismissColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	icon: {
		type: 'string',
		default: 'fa fa-window-close',
	},
	noticeAlignment: {
		type: 'string',
		default: 'left',
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
		default: 'normal',
	},
	titleTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	titleDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	titleLineHeightType: {
		type: 'string',
		default: 'em',
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
	descFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	descFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	descFontStyle: {
		type: 'string',
		default: 'normal',
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
	descFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	descFontSizeType: {
		type: 'string',
		default: 'px',
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
	descLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	descLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	descLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	descLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	titleLeftPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	titleRightPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	titleTopPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	titleBottomPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	titleLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	titleRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	titleTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	titleBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	titleLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	titleRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	titleTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	titleBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	titlePaddingUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	mobileTitlePaddingUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	tabletTitlePaddingUnit: {
		type: 'string',
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	contentLeftPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	contentRightPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	contentTopPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	contentBottomPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	contentLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	contentRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	contentTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	contentBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	contentPaddingUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	mobileContentPaddingUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	tabletContentPaddingUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	contentPaddingLink: {
		type: 'boolean',
		default: false,
	},
	contentVrPadding: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	contentHrPadding: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	titleVrPadding: {
		type: 'number',
		isUAGStyle: true,
		default: 15,
	},
	titleHrPadding: {
		type: 'number',
		isUAGStyle: true,
		default: 15,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
