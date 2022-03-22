/**
 * BLOCK: UAGB Tabs Block Attributes
 */
import { __ } from '@wordpress/i18n';
const attributes = {
	block_id: {
		type: 'string',
	},
	tabHeaders: {
		type: 'array',
		default: [
			__( 'Tab 1', 'ultimate-addons-for-gutenberg' ),
			__( 'Tab 2', 'ultimate-addons-for-gutenberg' ),
			__( 'Tab 3', 'ultimate-addons-for-gutenberg' ),
		],
	},
	tabActive: {
		type: 'number',
		default: 0,
	},
	tabActiveFrontend: {
		type: 'number',
		default: 0,
	},
	tabsStyleD: {
		type: 'string',
		default: 'hstyle1',
	},
	tabsStyleT: {
		type: 'string',
		default: 'vstyle6',
	},
	tabsStyleM: {
		type: 'string',
		default: 'vstyle6',
	},
	headerBgColor: {
		type: 'string',
		isUAGStyle: true,
	},
	headerTextColor: {
		type: 'string',
		default: '#3a3a3a',
		isUAGStyle: true,
	},
	bodyBgColor: {
		type: 'string',
		isUAGStyle: true,
	},
	bodyTextColor: {
		type: 'string',
		isUAGStyle: true,
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
		isUAGStyle: true,
	},
	borderWidth: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
	},
	borderRadius: {
		type: 'number',
		isUAGStyle: true,
	},
	borderColor: {
		type: 'string',
		default: '#e0e0e0',
		isUAGStyle: true,
	},
	borderHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	activeTabBgColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	activeTabTextColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	tabTitleLeftMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleRightMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleTopMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleBottomMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleMarginUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	mobiletabTitleMarginUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tablettabTitleMarginUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tabTitleMarginLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyLeftMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyRightMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyTopMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyBottomMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyMarginUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	mobiletabBodyMarginUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tablettabBodyMarginUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tabBodyMarginLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyVertPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyHrPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleLeftPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleRightPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleTopPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleBottomPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	mobiletabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tablettabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tabTitlePaddingLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyLeftPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyRightPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyTopPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyBottomPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	mobiletabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tablettabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tabBodyPaddingLink: {
		type: 'boolean',
		default: false,
	},
	tabTitleVertPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	tabTitleHrPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	titleFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
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
		default: 'Default',
		isUAGStyle: true,
	},
	titleFontWeight: {
		type: 'string',
		isUAGStyle: true,
		default: '500',
	},
	titleLineHeightType: {
		type: 'string',
		default: 'em',
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
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	titleTransform: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	titleDecoration: {
		type: 'string',
		default: 'none',
		isUAGStyle: true,
	},
	tabAlign: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
	},
	titleAlign: {
		type: 'string',
		default: 'center',
		isUAGStyle: true,
	},
	showIcon: {
		type: 'boolean',
		default: false,
	},
	icon: {
		type: 'string',
	},
	iconPosition: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
	},
	iconSpacing: {
		type: 'string',
		default: 10,
		isUAGStyle: true,
	},
	iconColor: {
		type: 'string',
		isUAGStyle: true,
	},
	iconSize: {
		type: 'number',
		default: 16,
		isUAGStyle: true,
	},
	activeiconColor: {
		type: 'string',
		isUAGStyle: true,
	},
	titleFontStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'normal',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
