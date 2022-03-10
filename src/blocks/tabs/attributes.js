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
		UAGCopyPaste: {
			styleType: 'tab-title-bg-color'
		},
	},
	headerTextColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	bodyBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'tab-body-bg-color'
		},
	},
	bodyTextColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'tab-body-text-color'
		},
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
		UAGCopyPaste: {
			styleType: 'tab-border-style'
		},
	},
	borderWidth: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'tab-border-width'
		},
	},
	borderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-border-radius'
		},
	},
	borderColor: {
		type: 'string',
		default: '#e0e0e0',
		UAGCopyPaste: {
			styleType: 'tab-border-color'
		},
	},
	borderHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'tab-border-hover-color'
		},
	},
	activeTabBgColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'tab-active-bg-color'
		},
	},
	activeTabTextColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'tab-active-bg-color'
		},
	},
	tabTitleLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-margin'
		},
	},
	tabTitleRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin'
		},
	},
	tabTitleTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin'
		},
	},
	tabTitleBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		},
	},
	tabTitleLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-tablet'
		},
	},
	tabTitleRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-tablet'
		},
	},
	tabTitleTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-tablet'
		},
	},
	tabTitleBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet'
		},
	},
	tabTitleLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-mobile'
		},
	},
	tabTitleRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-mobile'
		},
	},
	tabTitleTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-mobile'
		},
	},
	tabTitleBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile'
		},
	},
	tabTitleMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit'
		},
	},
	mobiletabTitleMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-mobile-unit'
		},
	},
	tablettabTitleMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-tablet-unit'
		},
	},
	tabTitleMarginLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-left-margin'
		},
	},
	tabBodyRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-right-margin'
		},
	},
	tabBodyTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-top-margin'
		},
	},
	tabBodyBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-bottom-margin'
		},
	},
	tabBodyLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-left-margin-tablet'
		},
	},
	tabBodyRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-right-margin-tablet'
		},
	},
	tabBodyTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-top-margin-tablet'
		},
	},
	tabBodyBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-bottom-margin-tablet'
		},
	},
	tabBodyLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'tab-body-left-margin-mobile'
		},
	},
	tabBodyRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'tab-body-right-margin-mobile'
		},
	},
	tabBodyTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'tab-body-top-margin-mobile'
		},
	},
	tabBodyBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'tab-body-bottom-margin-mobile'
		},
	},
	tabBodyMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'tab-body-margin-unit'
		},
	},
	mobiletabBodyMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'tab-body-margin-unit-mobile'
		},
	},
	tablettabBodyMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'tab-body-margin-unit-tablet'
		},
	},
	tabBodyMarginLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyVertPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-v-padding'
		},
	},
	tabBodyHrPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-h-padding'
		},
	},
	tabTitleLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-padding'
		},
	},
	tabTitleRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-padding'
		},
	},
	tabTitleTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-padding'
		},
	},
	tabTitleBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding'
		},
	},
	tabTitleLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'main-title-left-padding-tablet'
		},
	},
	tabTitleRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'main-title-right-padding-tablet'
		},
	},
	tabTitleTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'main-title-top-padding-tablet'
		},
	},
	tabTitleBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'main-title-bottom-padding-tablet'
		},
	},
	tabTitleLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'main-title-left-padding-mobile'
		},
	},
	tabTitleRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'main-title-right-padding-mobile'
		},
	},
	tabTitleTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'main-title-top-padding-mobile'
		},
	},
	tabTitleBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'main-title-bottom-padding-mobile'
		},
	},
	tabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-padding-unit'
		},
	},
	mobiletabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-padding-unit-mobile'
		},
	},
	tablettabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-padding-unit-tablet'
		},
	},
	tabTitlePaddingLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-left-padding'
		},
	},
	tabBodyRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-right-padding'
		},
	},
	tabBodyTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-top-padding'
		},
	},
	tabBodyBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-bottom-padding'
		},
	},
	tabBodyLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-left-padding-tablet'
		},
	},
	tabBodyRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-right-padding-tablet'
		},
	},
	tabBodyTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-top-padding-tablet'
		},
	},
	tabBodyBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-bottom-padding-tablet'
		},
	},
	tabBodyLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-left-padding-mobile'
		},
	},
	tabBodyRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-right-padding-mobile'
		},
	},
	tabBodyTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-top-padding-mobile'
		},
	},
	tabBodyBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'tab-body-bottom-padding-mobile'
		},
	},
	tabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'tab-body-padding-unit'
		},
	},
	mobiletabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'tab-body-padding-unit-mobile'
		},
	},
	tablettabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'tab-body-padding-unit-tablet'
		},
	},
	tabBodyPaddingLink: {
		type: 'boolean',
		default: false,
	},
	tabTitleVertPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-v-padding'
		},
	},
	tabTitleHrPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-h-padding'
		},
	},
	titleFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-unit'
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
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
	},
	titleFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	titleLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
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
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		},
	},
	titleTransform: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	titleDecoration: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	tabAlign: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'tab-align'
		},
	},
	titleAlign: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
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
		UAGCopyPaste: {
			styleType: 'tab-icon-position'
		},
	},
	iconSpacing: {
		type: 'string',
		default: 10,
		UAGCopyPaste: {
			styleType: 'tab-icon-spacing'
		},
	},
	iconColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-color'
		},
	},
	iconSize: {
		type: 'number',
		default: 12,
		UAGCopyPaste: {
			styleType: 'icon-size'
		},
	},
	activeiconColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-active-color'
		},
	},
	titleFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
		default: 'normal',
	},
};

export default attributes;
