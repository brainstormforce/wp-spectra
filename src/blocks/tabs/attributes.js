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
	},
	headerTextColor: {
		type: 'string',
		default: '#007cba',
	},
	bodyBgColor: {
		type: 'string',
	},
	bodyTextColor: {
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
	},
	borderColor: {
		type: 'string',
		default: '#e0e0e0',
	},
	borderHoverColor: {
		type: 'string',
	},
	activeTabBgColor: {
		type: 'string',
		default: '#007cba',
	},
	activeTabTextColor: {
		type: 'string',
		default: '#fff',
	},
	tabTitleLeftMargin: {
		type: 'number',
	},
	tabTitleRightMargin: {
		type: 'number',
	},
	tabTitleTopMargin: {
		type: 'number',
	},
	tabTitleBottomMargin: {
		type: 'number',
	},
	tabTitleLeftMarginTablet: {
		type: 'number',
	},
	tabTitleRightMarginTablet: {
		type: 'number',
	},
	tabTitleTopMarginTablet: {
		type: 'number',
	},
	tabTitleBottomMarginTablet: {
		type: 'number',
	},
	tabTitleLeftMarginMobile: {
		type: 'number',
	},
	tabTitleRightMarginMobile: {
		type: 'number',
	},
	tabTitleTopMarginMobile: {
		type: 'number',
	},
	tabTitleBottomMarginMobile: {
		type: 'number',
	},
	tabTitleMarginUnit: {
		type: 'string',
		default: 'px',
	},
	mobiletabTitleMarginUnit: {
		type: 'string',
		default: 'px',
	},
	tablettabTitleMarginUnit: {
		type: 'string',
		default: 'px',
	},
	tabTitleMarginLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyLeftMargin: {
		type: 'number',
	},
	tabBodyRightMargin: {
		type: 'number',
	},
	tabBodyTopMargin: {
		type: 'number',
	},
	tabBodyBottomMargin: {
		type: 'number',
	},
	tabBodyLeftMarginTablet: {
		type: 'number',
	},
	tabBodyRightMarginTablet: {
		type: 'number',
	},
	tabBodyTopMarginTablet: {
		type: 'number',
	},
	tabBodyBottomMarginTablet: {
		type: 'number',
	},
	tabBodyLeftMarginMobile: {
		type: 'number',
	},
	tabBodyRightMarginMobile: {
		type: 'number',
	},
	tabBodyTopMarginMobile: {
		type: 'number',
	},
	tabBodyBottomMarginMobile: {
		type: 'number',
	},
	tabBodyMarginUnit: {
		type: 'string',
		default: 'px',
	},
	mobiletabBodyMarginUnit: {
		type: 'string',
		default: 'px',
	},
	tablettabBodyMarginUnit: {
		type: 'string',
		default: 'px',
	},
	tabBodyMarginLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyVertPadding: {
		type: 'number',
	},
	tabBodyHrPadding: {
		type: 'number',
	},
	tabTitleLeftPadding: {
		type: 'number',
	},
	tabTitleRightPadding: {
		type: 'number',
	},
	tabTitleTopPadding: {
		type: 'number',
	},
	tabTitleBottomPadding: {
		type: 'number',
	},
	tabTitleLeftPaddingTablet: {
		type: 'number',
	},
	tabTitleRightPaddingTablet: {
		type: 'number',
	},
	tabTitleTopPaddingTablet: {
		type: 'number',
	},
	tabTitleBottomPaddingTablet: {
		type: 'number',
	},
	tabTitleLeftPaddingMobile: {
		type: 'number',
	},
	tabTitleRightPaddingMobile: {
		type: 'number',
	},
	tabTitleTopPaddingMobile: {
		type: 'number',
	},
	tabTitleBottomPaddingMobile: {
		type: 'number',
	},
	tabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
	},
	mobiletabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
	},
	tablettabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
	},
	tabTitlePaddingLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyLeftPadding: {
		type: 'number',
	},
	tabBodyRightPadding: {
		type: 'number',
	},
	tabBodyTopPadding: {
		type: 'number',
	},
	tabBodyBottomPadding: {
		type: 'number',
	},
	tabBodyLeftPaddingTablet: {
		type: 'number',
	},
	tabBodyRightPaddingTablet: {
		type: 'number',
	},
	tabBodyTopPaddingTablet: {
		type: 'number',
	},
	tabBodyBottomPaddingTablet: {
		type: 'number',
	},
	tabBodyLeftPaddingMobile: {
		type: 'number',
	},
	tabBodyRightPaddingMobile: {
		type: 'number',
	},
	tabBodyTopPaddingMobile: {
		type: 'number',
	},
	tabBodyBottomPaddingMobile: {
		type: 'number',
	},
	tabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	mobiletabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	tablettabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	tabBodyPaddingLink: {
		type: 'boolean',
		default: false,
	},

	tabTitleVertPadding: {
		type: 'number',
	},
	tabTitleHrPadding: {
		type: 'number',
	},
	titleFontSize: {
		type: 'number',
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
	},
	titleFontSizeTablet: {
		type: 'number',
	},
	titleFontSizeMobile: {
		type: 'number',
	},
	titleFontFamily: {
		type: 'string',
		default: 'Default',
	},
	titleFontWeight: {
		type: 'string',
	},
	titleLineHeightType: {
		type: 'string',
		default: 'em',
	},
	titleLineHeight: {
		type: 'number',
	},
	titleLineHeightTablet: {
		type: 'number',
	},
	titleLineHeightMobile: {
		type: 'number',
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	titleTransform: {
		type: 'string',
		default: 'normal',
	},
	titleDecoration: {
		type: 'string',
		default: 'none',
	},
	tabAlign: {
		type: 'string',
		default: 'left',
	},
	titleAlign: {
		type: 'string',
		default: 'center',
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
	},
	iconSpacing: {
		type: 'string',
		default: 10,
	},
	iconColor: {
		type: 'string',
	},
	iconSize: {
		type: 'number',
		default: 12,
	},
	activeiconColor: {
		type: 'string',
	},
	titleFontStyle: {
		type: 'string',
		default: 'normal',
	},
};

export default attributes;
