/**
 * BLOCK: Call To Action - Attributes
 */

const attributes = {
	inheritFromTheme: {
		type: 'boolean',
		default: false,
	},
	ctaTitle: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: 'Call To Action',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	description: {
		source: 'html',
		selector: 'p',
		default:
			'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	},
	textAlign: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
	},
	titleColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	descColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
	},
	ctaPosition: {
		type: 'string',
		default: 'right',
		UAGCopyPaste: {
			styleType: 'btn-position'
		},
	},
	titleTag: {
		type: 'string',
		default: 'h3',
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
			styleType: 'main-title-font-size-type'
		},
	},
	titleFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	titleFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
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
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
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
	descFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		},
	},
	descFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
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
	descLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		},
	},
	descLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		},
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
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		},
	},
	titleSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		},
	},
	descSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin'
		},
	},
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	buttonAlign: {
		type: 'string',
		default: 'middle',
		UAGCopyPaste: {
			styleType: 'btn-align'
		},
	},
	ctaTarget: {
		type: 'boolean',
		default: false,
	},
	ctaIcon: {
		type: 'string',
		default: '',
	},
	ctaIconPosition: {
		type: 'string',
		default: 'after',
	},
	ctaIconSpace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		},
	},
	ctaIconSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	ctaIconSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	ctaType: {
		type: 'string',
		default: 'button',
	},
	ctaText: {
		type: 'html',
		default: 'Read More',
	},
	ctaLink: {
		type: 'string',
		default: '#',
	},
	ctaFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size'
		},
		default: 14
	},
	ctaFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type'
		},
	},
	ctaFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile'
		},
	},
	ctaFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet'
		},
	},
	ctaFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-family'
		},
		default: 'Default',
	},
	ctaFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight'
		},
	},
	ctaFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		},
		default: 'normal',
	},
	ctaTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform'
		},
	},
	ctaDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration'
		},
	},
	ctaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts'
		},
	},
	contentWidth: {
		type: 'number',
		default: '70',
		UAGCopyPaste: {
			styleType: 'desc-width'
		},
	},
	contentWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-width'
		},
	},
	contentWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-width'
		},
	},
	ctaBtnLinkColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-color'
		},
	},
	ctaLinkHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	ctaBgColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-bg-color'
		},
	},
	ctaBgHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color'
		},
	},
	ctaBorderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-border-color'
		},
	},
	ctaBorderhoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-border-hover-color'
		},
		default: '',
	},
	ctaBorderStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-border-style'
		},
		default: 'none',
	},
	ctaBtnVertPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding'
		},
		default: '',
	},
	ctaBtnHrPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-horizontal-padding'
		},
		default: '',
	},
	ctaBorderWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-border-width'
		},
		default: '',
	},
	ctaBorderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-border-radius'
		},
		default: '',
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	ctaLeftSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-margin'
		},
		default: 5,
	},
	ctaRightSpace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'btn-right-margin'
		},
	},
	ctaTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding'
		},
	},
	ctaBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding'
		},
	},
	ctaLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding'
		},
	},
	ctaRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding'
		},
	},
	ctaLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet'
		},
	},
	ctaRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet'
		},
	},
	ctaTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet'
		},
	},
	ctaBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet'
		},
	},
	ctaLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile'
		},
	},
	ctaRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile'
		},
	},
	ctaTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile'
		},
	},
	ctaBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile'
		},
	},
	ctaPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit'
		},
	},
	mobileCTAPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile'
		},
	},
	tabletCTAPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet'
		},
	},
	ctaPaddingLink: {
		type: 'boolean',
		default: false,
	},
	enabledSecondCtaButton: {
		type: 'boolean',
		default: false,
	},
	secondCtaLabel: {
		type: 'html',
		default: 'Click Here',
	},
	secondCtaLink: {
		type: 'string',
		default: '#',
	},
	secondCtaTarget: {
		type: 'boolean',
		default: false,
	},
	secondCtaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts'
		}
	},
	secondCtaFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'btn-font-family'
		}
	},
	secondCtaFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight'
		}
	},
	secondCtaFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		}
	},
	secondCtaFontTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-transform'
		}
	},
	secondCtaFontDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-decoration'
		}
	},
	secondCtaTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding'
		}
	},
	secondCtaRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding'
		}
	},
	secondCtaBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding'
		}
	},
	secondCtaLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding'
		}
	},
	secondCtaTopMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile'
		}
	},
	secondCtaRightMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile'
		}
	},
	secondCtaBottomMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile'
		}
	},
	secondCtaLeftMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile'
		}
	},
	secondCtaTopTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet'
		}
	},
	secondCtaRightTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet'
		}
	},
	secondCtaBottomTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet'
		}
	},
	secondCtaLeftTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet'
		}
	},
	secondCtaPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit'
		}
	},
	secondCtaMobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile'
		}
	},
	secondCtaTabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet'
		}
	},
	secondCtaPaddingLink: {
		type: 'boolean',
		default: false,
	},
	secondCtaBorderWidth: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-border-width'
		}
	},
	secondCtaBorderRadius: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-border-radius'
		}
	},
	secondCtaBorderStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'btn-border-style'
		}
	},
	secondCtaBorderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-border-color'
		},
		default: '',
	},
	secondCtaBorderHColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-border-hover-color'
		}
	},
	secondCtaColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-color'
		}
	},
	secondCtaBackground: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-bg-color'
		}
	},
	secondCtaHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		}
	},
	secondCtaHoverBackground: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-h-background'
		}
	},
	secondCtaFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-size'
		},
		default: 14,
	},
	secondCtaFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-size-unit'
		}
	},
	secondCtaFontSizeMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-size-mobile'
		}
	},
	secondCtaFontSizeTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-size-tablet'
		}
	},
	secondCtaIcon: {
		type: 'string',
		default: '',
	},
	secondCtaIconPosition: {
		type: 'string',
		default: 'after',
	},
	secondCtaIconSpace: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	stackBtn: {
		type: 'string',
		default: 'none'
	},
	gapBtn: {
		type: 'number',
		default: 15
	},
	gapBtnTablet: {
		type: 'number',
		default: 15
	},
	gapBtnMobile: {
		type: 'number',
		default: 15
	},
};

export default attributes;
