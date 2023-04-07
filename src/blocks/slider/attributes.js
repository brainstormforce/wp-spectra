import { getBorderAttributes } from '@Controls/generateAttributes';

const inputBorderAttributes = getBorderAttributes( 'slider' );
const arrowBorderAttributes = getBorderAttributes( 'slider-arrow' );

const slideCount = 3;
const slideContent = [];

for ( let i = 1; i <= slideCount; i++ ) {
	slideContent.push( {
		isPreview: false,
	} );
}

const attributes = {
	'blockName': {
		type: 'string',
		default: 'slider',
	},
	'block_id': {
		type: 'string',
	},
	'slide_content': {
		type: 'array',
		default: slideContent,
	},
	'slideItem': {
		type: 'number',
		default: slideCount,
	},
	'pauseOn': {
		type: 'string',
		default: 'hover',
	},
	'infiniteLoop': {
		type: 'boolean',
		default: true,
	},
	'transitionSpeed': {
		type: 'number',
		default: 800,
	},
	'transitionEffect': {
		type: 'string',
		default: 'slide',
	},
	'minHeight': {
		type: 'number',
		default: 350,
	},
	'minHeightTablet': {
		type: 'number',
	},
	'minHeightMobile': {
		type: 'number',
	},
	'autoplay': {
		type: 'boolean',
		default: true,
	},
	'autoplaySpeed': {
		type: 'number',
		default: 3000,
	},
	'displayArrows': {
		type: 'boolean',
		default: true,
	},
	'displayDots': {
		type: 'boolean',
		default: true,
	},
	'arrowSize': {
		type: 'number',
		default: 16,
		UAGCopyPaste: {
			styleType: 'arrow-size',
		},
	},
	'arrowSizeTablet': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'arrow-size-tablet',
		},
	},
	'arrowSizeMobile': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'arrow-size-mobile',
		},
	},
	'arrowSizeUnit': {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'arrow-size-unit',
		},
	},
	'arrowPadding': {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'arrow-Padding',
		},
	},
	'arrowPaddingTablet': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'arrow-Padding-tablet',
		},
	},
	'arrowPaddingMobile': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'arrow-Padding-mobile',
		},
	},
	'arrowDistance': {
		type: 'number',
		default: -20,
		UAGCopyPaste: {
			styleType: 'arrow-distance',
		},
	},
	'arrowDistanceTablet': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'arrow-distance-tablet',
		},
	},
	'arrowDistanceMobile': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'arrow-distance-mobile',
		},
	},
	'dotsMarginTop': {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'dots-margin-top',
		},
	},
	'dotsMarginTopTablet': {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'dots-margin-top',
		},
	},
	'dotsMarginTopMobile': {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'dots-margin-top',
		},
	},
	'dotsMarginTopUnit': {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'dots-margin-top-unit',
		},
	},
	'verticalAlign': {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'slider-vertical-align',
		},
	},
	'arrowColor': {
		type: 'string',
		default: '#333333',
		UAGCopyPaste: {
			styleType: 'arrow-color',
		},
	},
	'arrowBgColor': {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'arrow-bg-color',
		},
	},
	'alignItemsDesktop': {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'container-align-items-desktop',
		},
	},
	'alignItemsTablet': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-align-items-tablet',
		},
	},
	'alignItemsMobile': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-align-items-mobile',
		},
	},
	'justifyContentDesktop': {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'container-justify-content-desktop',
		},
	},
	'justifyContentTablet': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-justify-content-tablet',
		},
	},
	'justifyContentMobile': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-justify-content-mobile',
		},
	},
	'alignContentDesktop': {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'container-align-content-desktop',
		},
	},
	'alignContentTablet': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-align-content-tablet',
		},
	},
	'alignContentMobile': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-align-content-mobile',
		},
	},
	'backgroundType': {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'container-bg-type',
		},
	},
	'backgroundImageDesktop': {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-image-desktop',
		},
	},
	'backgroundImageTablet': {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-image-tablet',
		},
	},
	'backgroundImageMobile': {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-image-mobile',
		},
	},
	'backgroundPositionDesktop': {
		type: 'object',
		default: {
			x: 0.5,
			y: 0.5,
		},
		UAGCopyPaste: {
			styleType: 'container-bg-position-desktop',
		},
	},
	'backgroundPositionTablet': {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-position-tablet',
		},
	},
	'backgroundPositionMobile': {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-position-mobile',
		},
	},
	'backgroundSizeDesktop': {
		type: 'string',
		default: 'cover',
		UAGCopyPaste: {
			styleType: 'container-bg-size-desktop',
		},
	},
	'backgroundSizeTablet': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-size-tablet',
		},
	},
	'backgroundSizeMobile': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-size-mobile',
		},
	},
	'backgroundRepeatDesktop': {
		type: 'string',
		default: 'no-repeat',
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-desktop',
		},
	},
	'backgroundRepeatTablet': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-tablet',
		},
	},
	'backgroundRepeatMobile': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-mobile',
		},
	},
	'backgroundAttachmentDesktop': {
		type: 'string',
		default: 'scroll',
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-desktop',
		},
	},
	'backgroundAttachmentTablet': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-tablet',
		},
	},
	'backgroundAttachmentMobile': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-mobile',
		},
	},
	'backgroundColor': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-color',
		},
	},
	'backgroundOpacity': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bg-opacity',
		},
	},
	'backgroundImageColor': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-image-color',
		},
		default: '#FFFFFF75',
	},
	'gradientValue': {
		type: 'string',
		default: 'linear-gradient(90deg, rgba(6, 147, 227, 0.5) 0%, rgba(155, 81, 224, 0.5) 100%)',
		UAGCopyPaste: {
			styleType: 'container-bg-gradient-value',
		},
	},
	'boxShadowColor': {
		type: 'string',
		default: '#00000070',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-color',
		},
	},
	'boxShadowHOffset': {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-hoffset',
		},
	},
	'boxShadowVOffset': {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-voffset',
		},
	},
	'boxShadowBlur': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-blur',
		},
	},
	'boxShadowSpread': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-spread',
		},
	},
	'boxShadowPosition': {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-position',
		},
	},

	'boxShadowColorHover': {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-color-hover',
		},
	},
	'boxShadowHOffsetHover': {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-hoffset-hover',
		},
	},
	'boxShadowVOffsetHover': {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-voffset-hover',
		},
	},
	'boxShadowBlurHover': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-blur-hover',
		},
	},
	'boxShadowSpreadHover': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-spread-hover',
		},
	},
	'boxShadowPositionHover': {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-position-hover',
		},
	},
	'topPaddingDesktop': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-padding-desktop',
		},
		default: 10,
	},
	'bottomPaddingDesktop': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-desktop',
		},
		default: 10,
	},
	'leftPaddingDesktop': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-padding-desktop',
		},
		default: 10,
	},
	'rightPaddingDesktop': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-padding-desktop',
		},
		default: 10,
	},
	'topPaddingTablet': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-padding-tablet',
		},
	},
	'bottomPaddingTablet': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-tablet',
		},
	},
	'leftPaddingTablet': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-padding-tablet',
		},
	},
	'rightPaddingTablet': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-padding-tablet',
		},
	},
	'topPaddingMobile': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-padding-mobile',
		},
	},
	'bottomPaddingMobile': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-mobile',
		},
	},
	'leftPaddingMobile': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-padding-mobile',
		},
	},
	'rightPaddingMobile': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-padding-mobile',
		},
		default: 10,
	},
	'paddingType': {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-padding-type',
		},
	},
	'paddingTypeTablet': {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-padding-type-tablet',
		},
	},
	'paddingTypeMobile': {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-padding-type-mobile',
		},
	},
	'paddingLink': {
		type: 'boolean',
		default: true,
	},

	'topMarginDesktop': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-margin-desktop',
		},
	},
	'bottomMarginDesktop': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-desktop',
		},
	},
	'leftMarginDesktop': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-margin-desktop',
		},
	},
	'rightMarginDesktop': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-margin-desktop',
		},
	},
	'topMarginTablet': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-margin-tablet',
		},
	},
	'bottomMarginTablet': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-tablet',
		},
	},
	'leftMarginTablet': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-margin-tablet',
		},
	},
	'rightMarginTablet': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-margin-tablet',
		},
	},
	'topMarginMobile': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-margin-mobile',
		},
	},
	'bottomMarginMobile': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-mobile',
		},
	},
	'leftMarginMobile': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-margin-mobile',
		},
	},
	'rightMarginMobile': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-margin-mobile',
		},
	},
	'marginType': {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-margin-type',
		},
	},
	'marginTypeTablet': {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-margin-type-tablet',
		},
	},
	'marginTypeMobile': {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-margin-type-mobile',
		},
	},
	'marginLink': {
		type: 'boolean',
		default: true,
	},
	'isPreview': {
		type: 'boolean',
		default: false,
	},
	'backgroundCustomSizeDesktop': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-custom-size-desktop',
		},
		default: 100,
	},
	'backgroundCustomSizeTablet': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-custom-size-tablet',
		},
	},
	'backgroundCustomSizeMobile': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-custom-size-mobile',
		},
	},
	'backgroundCustomSizeType': {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'background-custom-size-type',
		},
	},
	'overlayType': {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'background-overlay-type',
		},
	},
	// Background image position.
	'customPosition': {
		type: 'string',
		default: 'default',
		UAGCopyPaste: {
			styleType: 'background-image-position-type',
		},
	},
	'xPositionDesktop': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-x-position-desktop',
		},
		default: '',
	},
	'xPositionTablet': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-x-position-tablet',
		},
	},
	'xPositionMobile': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-x-position-mobile',
		},
	},
	'xPositionType': {
		type: 'string',
		default: 'px',
	},
	'xPositionTypeTablet': {
		type: 'string',
		default: 'px',
	},
	'xPositionTypeMobile': {
		type: 'string',
		default: 'px',
	},

	'yPositionDesktop': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-y-position-desktop',
		},
		default: '',
	},
	'yPositionTablet': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-y-position-tablet',
		},
	},
	'yPositionMobile': {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-y-position-mobile',
		},
	},
	'yPositionType': {
		type: 'string',
		default: 'px',
	},
	'yPositionTypeTablet': {
		type: 'string',
		default: 'px',
	},
	'yPositionTypeMobile': {
		type: 'string',
		default: 'px',
	},
	...inputBorderAttributes,
	...arrowBorderAttributes,
	'slider-arrowBorderBottomLeftRadius': {
		type: 'number',
		default: 50,
	},
	'slider-arrowBorderBottomRightRadius': {
		type: 'number',
		default: 50,
	},
	'slider-arrowBorderTopLeftRadius': {
		type: 'number',
		default: 50,
	},
	'slider-arrowBorderTopRightRadius': {
		type: 'number',
		default: 50,
	},
	'gradientColor1': {
		type: 'string',
		default: '#06558a',
		UAGCopyPaste: {
			styleType: 'gradient-color-1',
		},
	},
	'gradientColor2': {
		type: 'string',
		default: '#0063A1',
		UAGCopyPaste: {
			styleType: 'gradient-color-2',
		},
	},
	'gradientType': {
		type: 'string',
		default: 'linear',
		UAGCopyPaste: {
			styleType: 'gradient-color-type',
		},
	},
	'selectGradient': {
		type: 'string',
		default: 'basic',
		UAGCopyPaste: {
			styleType: 'gradient-type',
		},
	},
	'gradientLocation1': {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'gradient-location-1',
		},
	},
	'gradientLocation2': {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'gradient-location-2',
		},
	},
	'gradientAngle': {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'gradient-angle',
		},
	},
};

export default attributes;
