/**
 * BLOCK: Icon List Child - Attributes
 */
import { __ } from '@wordpress/i18n';

const attributes = {
	isPreview: {
		type: 'boolean',
		default: false,
	},
	block_id: {
		type: 'string',
	},
	label: {
		type: 'html',
		selector: '.uagb-icon-list__label',
		// Need to Dynamically Number List Items.
		default: __( 'List item', 'ultimate-addons-for-gutenberg' ),
	},
	image_icon: {
		type: 'string',
		default: 'icon',
	},
	hideLabel: {
		type: 'boolean',
		default: false,
	},
	disableIcon: {
		type: 'boolean',
		default: false,
	},
	icon: {
		type: 'string',
		default: '',
	},
	image: {
		type: 'object',
	},
	icon_color: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	label_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	icon_hover_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-hover-color',
		},
	},
	label_hover_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-hover-color',
		},
	},
	icon_bg_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-color',
		},
		default: '',
	},
	icon_bg_hover_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-hover-color',
		},
	},
	icon_border_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-border-color',
		},
		default: '',
	},
	icon_border_hover_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-border-hover-color',
		},
	},
	link: {
		type: 'string',
		default: '#',
	},
	target: {
		type: 'boolean',
		default: false,
	},
	disableLink: {
		type: 'boolean',
		default: false,
	},
	fromParentIcon: {
		type: 'string',
		default: 'circle-arrow-right',
	},
	// margin
	childTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-top-margin',
		},
	},
	childRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-right-margin',
		},
	},
	childLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-left-margin',
		},
	},
	childBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-bottom-margin',
		},
	},
	childTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-top-margin-tablet',
		},
	},
	childRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-right-margin-tablet',
		},
	},
	childLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-left-margin-tablet',
		},
	},
	childBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-bottom-margin-tablet',
		},
	},
	childTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-top-margin-mobile',
		},
	},
	childRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-right-margin-mobile',
		},
	},
	childLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-left-margin-mobile',
		},
	},
	childBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-bottom-margin-mobile',
		},
	},
	childMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'child-margin-unit',
		},
	},
	childMarginUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'child-margin-unit-tablet',
		},
	},
	childMarginUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'child-margin-unit-mobile',
		},
	},
	childMarginLink: {
		type: 'boolean',
		default: false,
	},
	// padding
	childTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-top-padding',
		},
	},
	childRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-right-padding',
		},
	},
	childLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-left-padding',
		},
	},
	childBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-bottom-padding',
		},
	},
	childTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-top-padding-tablet',
		},
	},
	childRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-right-padding-tablet',
		},
	},
	childLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-left-padding-tablet',
		},
	},
	childBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-bottom-padding-tablet',
		},
	},
	childTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-top-padding-mobile',
		},
	},
	childRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-right-padding-mobile',
		},
	},
	childLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-left-padding-mobile',
		},
	},
	childBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'child-bottom-padding-mobile',
		},
	},
	childPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'child-padding-unit',
		},
	},
	childPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'child-padding-unit-tablet',
		},
	},
	childPaddingUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'child-padding-unit-mobile',
		},
	},
	childPaddingLink: {
		type: 'boolean',
		default: true,
	},
	imageSizeChild: {
		type: 'number',
		default: 16,
	},
	imgTagHeight: {
		type: 'number',
		default: 0,
	},
	imgTagWidth: {
		type: 'number',
		default: 0,
	},
};

export default attributes;
