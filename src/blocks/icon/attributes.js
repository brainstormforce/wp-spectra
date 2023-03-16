/**
 * BLOCK: Icon - Attributes
 */

import { getBorderAttributes } from '@Controls/generateAttributes';
const borderAttributes = getBorderAttributes( 'icon' );

const attributes = {
   icon: {
	   type: 'string',
	   default: 'circle-check',
   },
   // Size
   iconSize: {
	   type: 'number',
	   default: 40,
	   UAGCopyPaste: {
		   styleType: 'icon-size'
	   }
   },
   iconSizeTablet: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-size-tablet'
	   }
   },
   iconSizeMobile: {
	   type: 'number',
	   UAGCopyPaste: {
		   styleType: 'icon-size-mobile'
	   }
   },
   iconSizeUnit: {
	   type: 'string',
	   default: 'px',
	   UAGCopyPaste: {
		   styleType: 'icon-size-type'
	   }
   },
   // Alignment
   align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		},
	},
	alignTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet'
		}
	},
	alignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile'
		}
	},
	// Color
	iconColor: {
	   type: 'string',
	   default: '#333',
	   UAGCopyPaste: {
		   styleType: 'icon-color'
	   }
	},
	iconBorderColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-border-color'
		}
	},
	iconBackgroundColorType: {
		type: 'string',
		default: 'classic',
		UAGCopyPaste: {
			styleType: 'icon-background-color-type'
		}
	},
	iconBackgroundColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-background-color'
		}
	},
	iconBackgroundGradientColor: {
		type: 'string',
		default: 'linear-gradient(90deg, rgb(155, 81, 224) 0%, rgb(6, 147, 227) 100%)',
		UAGCopyPaste: {
			styleType: 'icon-background-gradient-color'
		}
	},
	iconHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-hover-color'
		}
	},
	iconHoverBackgroundColorType: {
		type: 'string',
		default: 'classic',
		UAGCopyPaste: {
			styleType: 'icon-hover-background-color-type'
		}
	},
	iconHoverBackgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-hover-background-color'
		}
	},
	iconHoverBackgroundGradientColor: {
		type: 'string',
		default: 'linear-gradient(90deg, rgb(155, 81, 224) 0%, rgb(6, 147, 227) 100%)',
		UAGCopyPaste: {
			styleType: 'icon-hover-background-gradient-color'
		}
	},
	// Rotation
	rotation: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-rotation'
		},
	},
	rotationUnit: {
		type: 'string',
		default: 'deg',
		UAGCopyPaste: {
			styleType: 'icon-rotation-type'
		},
	},
	block_id: {
		type: 'string',
	},
	// Link related attributes.
	link: {
		type: 'string',
		default: '',
	},
	target: {
		type: 'boolean',
		default: false,
	},
	disableLink: {
		type: 'boolean',
		default: false,
	},
	// Padding.
	iconTopPadding : {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'icon-top-padding'
		},
	},
	iconRightPadding : {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'icon-right-padding'
		},
	},
	iconLeftPadding : {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'icon-left-padding'
		},
	},
	iconBottomPadding : {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'icon-bottom-padding'
		},
	},
	iconTopTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-tablet-padding'
		},
	},
	iconRightTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-tablet-padding'
		},
	},
	iconLeftTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-tablet-padding'
		},
	},
	iconBottomTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-tablet-padding'
		},
	},
	iconTopMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-mobile-padding'
		},
	},
	iconRightMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-mobile-padding'
		},
	},
	iconLeftMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-mobile-padding'
		},
	},
	iconBottomMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-mobile-padding'
		},
	},
	iconPaddingUnit : {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-padding-unit'
		},
	},
	iconTabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-tablet-padding-unit'
		},
	},
	iconMobilePaddingUnit : {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-mobile-padding-unit'
		},
	},
	iconPaddingLink: {
		type: 'boolean',
		default: false,
	},
	// Margin
	iconTopMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-margin'
		},
	},
	iconRightMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-margin'
		},
	},
	iconLeftMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-margin'
		},
	},
	iconBottomMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin'
		},
	},
	iconTopTabletMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-tablet-margin'
		},
	},
	iconRightTabletMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-tablet-margin'
		},
	},
	iconLeftTabletMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-tablet-margin'
		},
	},
	iconBottomTabletMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-tablet-margin'
		},
	},
	iconTopMobileMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-mobile-margin'
		},
	},
	iconRightMobileMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-mobile-margin'
		},
	},
	iconLeftMobileMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-mobile-margin'
		},
	},
	iconBottomMobileMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-mobile-margin'
		},
	},
	iconMarginUnit : {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-margin-unit'
		}
	},
	iconTabletMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-tablet-margin-unit'
		}
	},
	iconMobileMarginUnit : {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-mobile-margin-unit'
		}
	},
	iconMarginLink: {
		type: 'boolean',
		default: false,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	...borderAttributes,
	iconBorderStyle: {
		type: 'string',
		default: 'default',
		UAGCopyPaste: {
			styleType: 'icon-border-style'
		},
	},
	iconShadowColor: {
		type: 'string',
		default: '#00000070',
		UAGCopyPaste: {
			styleType: 'icon-shadow-color'
		},
	},
	iconShadowHOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-shadow-hoffset'
		},
	},
	iconShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-shadow-voffset'
		},
	},
	iconShadowBlur:{
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-shadow-blur'
		},
	},
	iconBoxShadowColor: {
		type: 'string',
		default: '#00000070',
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-color'
		},
	},
	iconBoxShadowHOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-hoffset'
		},
	},
	iconBoxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-voffset'
		},
	},
	iconBoxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-blur'
		},
	},
	iconBoxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-spread'
		},
	},
	iconBoxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-position'
		},
	},
};

export default attributes;
