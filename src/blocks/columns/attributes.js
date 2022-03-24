/**
 * BLOCK: Columns - Attributes
 */

const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	columns: {
		type: 'number',
		default: 2,
	},
	align: {
		type: 'string',
		default: 'wide',
		UAGCopyPaste: {
			styleType: 'column-align'
		},
	},
	vAlign: {
		type: 'string',
		default: 'top',
		UAGCopyPaste: {
			styleType: 'column-v-align'
		},
	},
	stack: {
		type: 'string',
		default: 'mobile',
	},
	columnGap: {
		type: 'string',
		default: '10',
		UAGCopyPaste: {
			styleType: 'column-gap'
		},
	},
	topPadding: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'column-top-padding'
		},
	},
	bottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-padding'
		},
		default: 20,
	},
	leftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-left-padding'
		},
		default: 20,
	},
	rightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-right-padding'
		},
		default: 20,
	},
	topPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-padding-tablet'
		},
	},
	bottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-padding-tablet'
		},
	},
	leftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-left-padding-tablet'
		},
	},
	rightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-right-padding-tablet'
		},
	},
	topPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-padding-mobile'
		},
	},
	bottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-padding-mobile'
		},
	},
	leftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-left-padding-mobile'
		},
	},
	rightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-right-padding-mobile'
		},
	},
	topMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-margin'
		},
		default: 0,
	},
	bottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-margin'
		},
		default: 0,
	},
	topMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-margin-desktop'
		},
		default: 0,
	},
	rightMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-right-margin-desktop'
		},
		default: 0,
	},
	leftMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-left-margin-desktop'
		},
		default: 0,
	},
	bottomMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-margin-desktop'
		},
		default: 0,
	},
	topMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-margin-mobile'
		},
	},
	rightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-right-margin-mobile'
		},
	},
	leftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-left-margin-mobile'
		},
	},
	bottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-margin-mobile'
		},
	},
	topMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-margin-tablet'
		},
	},
	rightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-right-margin-tablet'
		},
	},
	leftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-left-margin-tablet'
		},
	},
	bottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-margin-tablet'
		},
	},
	contentWidth: {
		type: 'string',
		default: 'theme',
		UAGCopyPaste: {
			styleType: 'column-content-width'
		},
	},
	width: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-width'
		},
		default: 900,
	},
	widthType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-width-type'
		},
	},
	tag: {
		type: 'string',
		default: 'section',
	},
	backgroundType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'background-type'
		},
	},
	backgroundImage: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'background-image'
		},
	},
	backgroundPosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'background-position'
		},
		default: 'center-center',
	},
	backgroundSize: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'background-size'
		},
		default: 'cover',
	},
	backgroundRepeat: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'background-repeat'
		},
		default: 'no-repeat',
	},
	backgroundAttachment: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'background-attachment'
		},
		default: 'scroll',
	},
	backgroundVideo: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'background-video'
		},
	},
	backgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'background-color'
		},
	},
	overlayType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'column-overlay-type'
		},
	},
	gradientColor1: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-color-1'
		},
	},
	gradientColor2: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-color-2'
		},
	},
	gradientType: {
		type: 'string',
		default: 'linear',
		UAGCopyPaste: {
			styleType: 'column-gradient-type'
		},
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'column-gradient-location-1'
		},
	},
	gradientLocation2: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'column-gradient-location-2'
		},
	},
	gradientAngle: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'column-gradient-angle'
		},
	},
	gradientPosition: {
		type: 'string',
		default: 'center center',
		UAGCopyPaste: {
			styleType: 'column-gradient-position'
		},
	},
	backgroundOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-opacity'
		},
	},
	backgroundVideoOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-video-opacity'
		},
		default: 50,
	},
	backgroundVideoColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'background-video-color'
		},
	},
	backgroundImageColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'background-image-color'
		},
	},
	borderStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'border-style'
		},
	},
	borderWidth: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'border-width'
		},
	},
	borderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'border-radius'
		},
	},
	borderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'border-color'
		},
	},
	borderHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'border-hover-color'
		},
	},
	bottomType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'column-bottom-type'
		},
	},
	bottomColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-bottom-color'
		},
		default: '#333',
	},
	bottomHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-height'
		},
	},
	bottomHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-height-tablet'
		},
	},
	bottomHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-height-mobile'
		},
	},
	bottomWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-width'
		},
	},
	topType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'column-top-type'
		},
	},
	topColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'column-top-color'
		},
	},
	topHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-height'
		},
	},
	topHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-height-tablet'
		},
	},
	topHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-height-mobile'
		},
	},
	topWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-width'
		},
	},
	topFlip: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'column-top-flip'
		},
	},
	bottomFlip: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'column-bottom-flip'
		},
	},
	reverseTablet: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'column-reverse-tablet'
		},
	},
	reverseMobile: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'column-reverse-mobile'
		},
	},
	topDividerOpacity: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'column-top-divider-opacity'
		},
	},
	bottomDividerOpacity: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'column-bottom-divider-opacity'
		},
	},
	topContentAboveShape: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'column-top-content-above-shape'
		},
	},
	bottomContentAboveShape: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'column-bottom-content-above-shape'
		},
	},
	mobileMarginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-margin-type-mobile'
		},
	},
	tabletMarginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-margin-type-tablet'
		},
	},
	desktopMarginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-margin-type-desktop'
		},
	},
	mobilePaddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-padding-type-mobile'
		},
	},
	tabletPaddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-padding-type-tablet'
		},
	},
	desktopPaddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-padding-type-desktop'
		},
	},
	paddingLink: {
		type: 'boolean',
		default: false,
	},
	marginLink: {
		type: 'boolean',
		default: false,
	},
	boxShadowColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'box-shadow-color'
		},
	},
	boxShadowHOffset: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'box-shadow-hoffset'
		},
		default: 0,
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'box-shadow-voffset'
		},
	},
	boxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'box-shadow-blur'
		},
	},
	boxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'box-shadow-spread'
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'box-shadow-position'
		},
	},
	gradientValue: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-value'
		},
		default: '',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
