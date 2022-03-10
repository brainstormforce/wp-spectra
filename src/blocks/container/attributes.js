const attributes = {
	block_id: {
		type: 'string',
	},
	contentWidth: {
		type: 'string',
		default: 'alignwide',
	},
	innerContentWidth: {
		type: 'string',
		default: 'alignwide',
	},
	widthDesktop: {
		type: 'number',
		default: 100,
	},
	widthTablet: {
		type: 'number',
		default: 100,
	},
	widthMobile: {
		type: 'number',
		default: 100,
	},
	widthType: {
		type: 'string',
		default: '%',
	},
	innerContentCustomWidthDesktop: {
		type: 'number',
		default: 1200,
	},
	innerContentCustomWidthTablet: {
		type: 'number',
		default: 1200,
	},
	innerContentCustomWidthMobile: {
		type: 'number',
		default: 1200,
	},
	innerContentCustomWidthType: {
		type: 'string',
		default: 'px',
	},
	minHeightDesktop: {
		type: 'number',
		default: 120,
	},
	minHeightTablet: {
		type: 'number',
	},
	minHeightMobile: {
		type: 'number',
	},
	minHeightType: {
		type: 'string',
		default: 'px',
	},
	directionDesktop: {
		type: 'string',
		default: 'column',
	},
	directionTablet: {
		type: 'string',
		default: 'column',
	},
	directionMobile: {
		type: 'string',
		default: 'column',
	},
	alignItemsDesktop: {
		type: 'string',
		default: 'stretch',
	},
	alignItemsTablet: {
		type: 'string',
		default: 'stretch',
	},
	alignItemsMobile: {
		type: 'string',
		default: 'stretch',
	},
	justifyContentDesktop: {
		type: 'string',
		default: 'flex-start',
	},
	justifyContentTablet: {
		type: 'string',
		default: 'flex-start',
	},
	justifyContentMobile: {
		type: 'string',
		default: 'flex-start',
	},
	wrapDesktop: {
		type: 'string',
		default: 'nowrap',
	},
	wrapTablet: {
		type: 'string',
		default: 'nowrap',
	},
	wrapMobile: {
		type: 'string',
		default: 'nowrap',
	},
	alignContentDesktop: {
		type: 'string',
		default: '',
	},
	alignContentTablet: {
		type: 'string',
		default: '',
	},
	alignContentMobile: {
		type: 'string',
		default: '',
	},

	backgroundType: {
		type: 'string',
	},
	backgroundImage: {
		type: 'object',
	},
	backgroundPosition: {
		type: 'string',
		default: 'center-center',
	},
	backgroundSize: {
		type: 'string',
		default: 'cover',
	},
	backgroundRepeat: {
		type: 'string',
		default: 'no-repeat',
	},
	backgroundAttachment: {
		type: 'string',
		default: 'scroll',
	},
	backgroundColor: {
		type: 'string',
	},
	backgroundOpacity: {
		type: 'number',
	},
	backgroundImageColor: {
		type: 'string',
	},
	gradientValue: {
		type: 'string',
		default: '',
	},

	borderStyle: {
		type: 'string',
		default: 'none',
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
	},
	borderHoverColor: {
		type: 'string',
	},
	boxShadowColor: {
		type: 'string',
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
	},
	boxShadowBlur: {
		type: 'number',
	},
	boxShadowSpread: {
		type: 'number',
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
	},

	topPaddingDesktop: {
		type: 'number'
	},
	bottomPaddingDesktop: {
		type: 'number'
	},
	leftPaddingDesktop: {
		type: 'number'
	},
	rightPaddingDesktop: {
		type: 'number'
	},
	topPaddingTablet: {
		type: 'number',
	},
	bottomPaddingTablet: {
		type: 'number',
	},
	leftPaddingTablet: {
		type: 'number',
	},
	rightPaddingTablet: {
		type: 'number',
	},
	topPaddingMobile: {
		type: 'number',
	},
	bottomPaddingMobile: {
		type: 'number',
	},
	leftPaddingMobile: {
		type: 'number',
	},
	rightPaddingMobile: {
		type: 'number',
	},
	paddingType: {
		type: 'string',
		default: 'px',
	},
	paddingLink: {
		type: 'boolean',
		default: true,
	},

	topMarginDesktop: {
		type: 'number',
	},
	bottomMarginDesktop: {
		type: 'number',
	},
	leftMarginDesktop: {
		type: 'number',
	},
	rightMarginDesktop: {
		type: 'number',
	},
	topMarginTablet: {
		type: 'number',
	},
	bottomMarginTablet: {
		type: 'number',
	},
	leftMarginTablet: {
		type: 'number',
	},
	rightMarginTablet: {
		type: 'number',
	},
	topMarginMobile: {
		type: 'number',
	},
	bottomMarginMobile: {
		type: 'number',
	},
	leftMarginMobile: {
		type: 'number',
	},
	rightMarginMobile: {
		type: 'number',
	},
	marginType: {
		type: 'string',
		default: 'px',
	},
	marginLink: {
		type: 'boolean',
		default: true,
	},
	variationSelected: {
		type: 'boolean',
		default: false,
	},
	rowGapDesktop: {
		type: 'number',
		default: 20
	},
	rowGapTablet: {
		type: 'number',
	},
	rowGapMobile: {
		type: 'number',
	},
	rowGapType: {
		type: 'string',
		default: 'px',
	},
	columnGapDesktop: {
		type: 'number',
		default: 20
	},
	columnGapTablet: {
		type: 'number',
	},
	columnGapMobile: {
		type: 'number',
	},
	columnGapType: {
		type: 'string',
		default: 'px',
	},
	isBlockRootParent: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
