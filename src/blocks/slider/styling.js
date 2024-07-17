/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBackgroundCSS from '@Controls/generateBackgroundCSS';
import generateBorderCSS from '@Controls/generateBorderCSS';
import { applyFilters } from '@wordpress/hooks';
import generateShadowCSS from '@Controls/generateShadowCSS';

function styling( attributes, clientId, deviceType ) {
	let {
		backgroundType,
		backgroundImageDesktop,
		backgroundImageTablet,
		backgroundImageMobile,
		backgroundColor,
		backgroundPositionDesktop,
		backgroundPositionTablet,
		backgroundPositionMobile,
		backgroundAttachmentDesktop,
		backgroundAttachmentTablet,
		backgroundAttachmentMobile,
		backgroundRepeatDesktop,
		backgroundRepeatTablet,
		backgroundRepeatMobile,
		backgroundSizeDesktop,
		backgroundSizeTablet,
		backgroundSizeMobile,
		gradientValue,
		sliderBorderHColor,

		useSeparateBoxShadows,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		boxShadowColorHover,
		boxShadowHOffsetHover,
		boxShadowVOffsetHover,
		boxShadowBlurHover,
		boxShadowSpreadHover,
		boxShadowPositionHover,

		topPaddingDesktop,
		bottomPaddingDesktop,
		leftPaddingDesktop,
		rightPaddingDesktop,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		paddingType,
		paddingTypeTablet,
		paddingTypeMobile,
		topMarginDesktop,
		bottomMarginDesktop,
		leftMarginDesktop,
		rightMarginDesktop,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		marginType,
		marginTypeTablet,
		marginTypeMobile,
		backgroundCustomSizeDesktop,
		backgroundCustomSizeTablet,
		backgroundCustomSizeMobile,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		customPosition,
		xPositionDesktop,
		xPositionTablet,
		xPositionMobile,
		xPositionType,
		xPositionTypeTablet,
		xPositionTypeMobile,
		yPositionDesktop,
		yPositionTablet,
		yPositionMobile,
		yPositionType,
		yPositionTypeTablet,
		yPositionTypeMobile,

		arrowColor,
		arrowSize,
		arrowSizeTablet,
		arrowSizeMobile,
		arrowDistance,
		arrowDistanceTablet,
		arrowDistanceMobile,
		arrowPadding,
		arrowPaddingTablet,
		arrowPaddingMobile,
		arrowBgColor,
		verticalAlign,
		dotsMarginTop,
		dotsMarginTopTablet,
		dotsMarginTopMobile,
		minHeight,
		minHeightTablet,
		minHeightMobile,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
	} = attributes;
	const previewType = deviceType.toLowerCase();
	const borderCSS = generateBorderCSS( attributes, 'slider' );
	const borderCSSTablet = generateBorderCSS( attributes, 'slider', 'tablet' );
	const borderCSSMobile = generateBorderCSS( attributes, 'slider', 'mobile' );

	const arrowBorderCSS = generateBorderCSS( attributes, 'slider-arrow' );
	const arrowBorderCSSTablet = generateBorderCSS( attributes, 'slider-arrow', 'tablet' );
	const arrowBorderCSSMobile = generateBorderCSS( attributes, 'slider-arrow', 'mobile' );

	arrowSizeTablet = 'undefined' !== typeof arrowSizeTablet ? arrowSizeTablet : arrowSize;
	arrowSizeMobile = 'undefined' !== typeof arrowSizeMobile ? arrowSizeMobile : arrowSizeTablet;

	topPaddingTablet = 'undefined' !== typeof topPaddingTablet ? topPaddingTablet : topPaddingDesktop;
	topPaddingMobile = 'undefined' !== typeof topPaddingMobile ? topPaddingMobile : topPaddingTablet;

	bottomPaddingTablet = 'undefined' !== typeof bottomPaddingTablet ? bottomPaddingTablet : bottomPaddingDesktop;
	bottomPaddingMobile = 'undefined' !== typeof bottomPaddingMobile ? bottomPaddingMobile : bottomPaddingTablet;

	leftPaddingTablet = 'undefined' !== typeof leftPaddingTablet ? leftPaddingTablet : leftPaddingDesktop;
	leftPaddingMobile = 'undefined' !== typeof leftPaddingMobile ? leftPaddingMobile : leftPaddingTablet;

	rightPaddingTablet = 'undefined' !== typeof rightPaddingTablet ? rightPaddingTablet : rightPaddingDesktop;
	rightPaddingMobile = 'undefined' !== typeof rightPaddingMobile ? rightPaddingMobile : rightPaddingTablet;

	topMarginTablet = 'undefined' !== typeof topMarginTablet ? topMarginTablet : topMarginDesktop;
	topMarginMobile = 'undefined' !== typeof topMarginMobile ? topMarginMobile : topMarginTablet;

	bottomMarginTablet = 'undefined' !== typeof bottomMarginTablet ? bottomMarginTablet : bottomMarginDesktop;
	bottomMarginMobile = 'undefined' !== typeof bottomMarginMobile ? bottomMarginMobile : bottomMarginTablet;

	leftMarginTablet = 'undefined' !== typeof leftMarginTablet ? leftMarginTablet : leftMarginDesktop;
	leftMarginMobile = 'undefined' !== typeof leftMarginMobile ? leftMarginMobile : leftMarginTablet;

	rightMarginTablet = 'undefined' !== typeof rightMarginTablet ? rightMarginTablet : rightMarginDesktop;
	rightMarginMobile = 'undefined' !== typeof rightMarginMobile ? rightMarginMobile : rightMarginTablet;

	arrowPaddingTablet = 'undefined' !== typeof arrowPaddingTablet ? arrowPaddingTablet : arrowPadding;
	arrowPaddingMobile = 'undefined' !== typeof arrowPaddingMobile ? arrowPaddingMobile : arrowPaddingTablet;

	const backgroundAttributesDesktop = {
		'backgroundType': backgroundType,
		'backgroundImage': backgroundImageDesktop,
		'backgroundColor': backgroundColor,
		'gradientValue': gradientValue,
		'gradientColor1': gradientColor1,
		'gradientColor2': gradientColor2,
		'gradientLocation1': gradientLocation1,
		'gradientLocation2': gradientLocation2,
		'gradientType': gradientType,
		'gradientAngle': gradientAngle,
		'selectGradient': selectGradient,
		'backgroundRepeat': backgroundRepeatDesktop,
		'backgroundPosition': backgroundPositionDesktop,
		'backgroundSize': backgroundSizeDesktop,
		'backgroundAttachment': backgroundAttachmentDesktop,
		'backgroundCustomSize': backgroundCustomSizeDesktop,
		'backgroundCustomSizeType': backgroundCustomSizeType,
		'backgroundImageColor': backgroundImageColor,
		'overlayType': overlayType,
		'customPosition': customPosition,
		'xPosition': xPositionDesktop,
		'xPositionType': xPositionType,
		'yPosition': yPositionDesktop,
		'yPositionType': yPositionType,
	};

	const containerBackgroundCSSDesktop = generateBackgroundCSS( backgroundAttributesDesktop );

	// Box Shadow
	const boxShadowCSS = generateShadowCSS( {
		'horizontal': boxShadowHOffset,
		'vertical': boxShadowVOffset,
		'blur': boxShadowBlur,
		'spread': boxShadowSpread,
		'color': boxShadowColor,
		'position': boxShadowPosition,
	} );
	const boxShadowHoverCSS = generateShadowCSS( {
		'horizontal': boxShadowHOffsetHover,
		'vertical': boxShadowVOffsetHover,
		'blur': boxShadowBlurHover,
		'spread': boxShadowSpreadHover,
		'color': boxShadowColorHover,
		'position': boxShadowPositionHover,
		'altColor': boxShadowColor,
	} );

	const sliderCSS = {
		'padding-top': generateCSSUnit( topPaddingDesktop, paddingType ),
		'padding-bottom': generateCSSUnit( bottomPaddingDesktop, paddingType ),
		'padding-left': generateCSSUnit( leftPaddingDesktop, paddingType ),
		'padding-right': generateCSSUnit( rightPaddingDesktop, paddingType ),
		'margin-top': generateCSSUnit( topMarginDesktop, marginType ) + ' !important',
		'margin-bottom': generateCSSUnit( bottomMarginDesktop, marginType ) + ' !important',
		'margin-left': generateCSSUnit( leftMarginDesktop, marginType ),
		'margin-right': generateCSSUnit( rightMarginDesktop, marginType ),
		...containerBackgroundCSSDesktop,
		'box-shadow': boxShadowCSS,
		...borderCSS
	}

	let selectors = {
		'.wp-block': {
			...sliderCSS,
		},
		'.wp-block:hover': {
			'border-color': sliderBorderHColor,
			'box-shadow': '',
		},
		' .swiper-button-next:after': {
			'font-size': generateCSSUnit( arrowSize, 'px' ),
		},
		' .swiper-button-next': {
			'color': arrowColor,
			'right': generateCSSUnit( arrowDistance, 'px' ),
			'width': generateCSSUnit( arrowPadding * 2 + arrowSize, 'px' ),
			'height': generateCSSUnit( arrowPadding * 2 + arrowSize, 'px' ),
			'line-height': generateCSSUnit( arrowPadding * 2 + arrowSize, 'px' ),
			'background-color': arrowBgColor,
			...arrowBorderCSS,
		},
		' .swiper-button-prev': {
			'color': arrowColor,
			'left': generateCSSUnit( arrowDistance, 'px' ),
			'width': generateCSSUnit( arrowPadding * 2 + arrowSize, 'px' ),
			'height': generateCSSUnit( arrowPadding * 2 + arrowSize, 'px' ),
			'line-height': generateCSSUnit( arrowPadding * 2 + arrowSize, 'px' ),
			'background-color': arrowBgColor,
			...arrowBorderCSS,
		},
		' .swiper-button-next:hover': {
			'border-color': attributes[ 'slider-arrowBorderHColor' ],
		},
		' .swiper-button-prev:hover': {
			'border-color': attributes[ 'slider-arrowBorderHColor' ],
		},
		' .swiper-button-prev:after': {
			'font-size': generateCSSUnit( arrowSize, 'px' ),
		},
		' .swiper-pagination': {
			'bottom': generateCSSUnit( dotsMarginTop, 'px' ),
		},
		' .swiper-pagination-bullet': {
			'background-color': arrowColor,
		},
		' .swiper-wrapper': {
			'align-items': verticalAlign,
			'min-height': generateCSSUnit( minHeight, 'px' ),
		},
	};

	// Box Shadow.
	if ( useSeparateBoxShadows ) {
		selectors['.wp-block:hover']['box-shadow'] = boxShadowHoverCSS;
	}

	const backgroundAttributesTablet = {
		'backgroundType': backgroundType,
		'backgroundImage': backgroundImageTablet,
		'backgroundColor': backgroundColor,
		'gradientValue': gradientValue,
		'gradientColor1': gradientColor1,
		'gradientColor2': gradientColor2,
		'gradientLocation1': gradientLocation1,
		'gradientLocation2': gradientLocation2,
		'gradientType': gradientType,
		'gradientAngle': gradientAngle,
		'selectGradient': selectGradient,
		'backgroundRepeat': backgroundRepeatTablet,
		'backgroundPosition': backgroundPositionTablet,
		'backgroundSize': backgroundSizeTablet,
		'backgroundAttachment': backgroundAttachmentTablet,
		'backgroundCustomSize': backgroundCustomSizeTablet,
		'backgroundCustomSizeType': backgroundCustomSizeType,
		'backgroundImageColor': backgroundImageColor,
		'overlayType': overlayType,
		'customPosition': customPosition,
		'xPosition': xPositionTablet,
		'xPositionType': xPositionTypeTablet,
		'yPosition': yPositionTablet,
		'yPositionType': yPositionTypeTablet,
	};

	const sliderBackgroundCSSTablet = generateBackgroundCSS( backgroundAttributesTablet );

	let tablet_selectors = {
		'.wp-block': {
			'padding-top': generateCSSUnit( topPaddingTablet, paddingTypeTablet ),
			'padding-bottom': generateCSSUnit( bottomPaddingTablet, paddingTypeTablet ),
			'padding-left': generateCSSUnit( leftPaddingTablet, paddingTypeTablet ),
			'padding-right': generateCSSUnit( rightPaddingTablet, paddingTypeTablet ),
			'margin-top': generateCSSUnit( topMarginTablet, marginTypeTablet ) + ' !important',
			'margin-bottom': generateCSSUnit( bottomMarginTablet, marginTypeTablet ) + ' !important',
			'margin-left': generateCSSUnit( leftMarginTablet, marginTypeTablet ),
			'margin-right': generateCSSUnit( rightMarginTablet, marginTypeTablet ),
			...sliderBackgroundCSSTablet,
			...borderCSSTablet,
		},
		' .swiper-button-next:after': {
			'font-size': generateCSSUnit( arrowSizeTablet, 'px' ),
		},
		' .swiper-button-prev:after': {
			'font-size': generateCSSUnit( arrowSizeTablet, 'px' ),
		},
		' .swiper-button-prev': {
			'left': generateCSSUnit( arrowDistanceTablet, 'px' ),
			'width': generateCSSUnit( arrowPaddingTablet * 2 + arrowSizeTablet, 'px' ),
			'height': generateCSSUnit( arrowPaddingTablet * 2 + arrowSizeTablet, 'px' ),
			'line-height': generateCSSUnit( arrowPaddingTablet * 2 + arrowSizeTablet, 'px' ),
			...arrowBorderCSSTablet,
		},
		' .swiper-button-next': {
			'right': generateCSSUnit( arrowDistanceTablet, 'px' ),
			'width': generateCSSUnit( arrowPaddingTablet * 2 + arrowSizeTablet, 'px' ),
			'height': generateCSSUnit( arrowPaddingTablet * 2 + arrowSizeTablet, 'px' ),
			'line-height': generateCSSUnit( arrowPaddingTablet * 2 + arrowSizeTablet, 'px' ),
			...arrowBorderCSSTablet,
		},
		' .swiper-pagination': {
			'bottom': generateCSSUnit( dotsMarginTopTablet, 'px' ),
		},
		' .swiper-wrapper': {
			'min-height': generateCSSUnit( minHeightTablet, 'px' ),
		},
	};

	const backgroundAttributesMobile = {
		'backgroundType': backgroundType,
		'backgroundImage': backgroundImageMobile,
		'backgroundColor': backgroundColor,
		'gradientValue': gradientValue,
		'gradientColor1': gradientColor1,
		'gradientColor2': gradientColor2,
		'gradientLocation1': gradientLocation1,
		'gradientLocation2': gradientLocation2,
		'gradientType': gradientType,
		'gradientAngle': gradientAngle,
		'selectGradient': selectGradient,
		'backgroundRepeat': backgroundRepeatMobile,
		'backgroundPosition': backgroundPositionMobile,
		'backgroundSize': backgroundSizeMobile,
		'backgroundAttachment': backgroundAttachmentMobile,
		'backgroundCustomSize': backgroundCustomSizeMobile,
		'backgroundCustomSizeType': backgroundCustomSizeType,
		'backgroundImageColor': backgroundImageColor,
		'overlayType': overlayType,
		'customPosition': customPosition,
		'xPosition': xPositionMobile,
		'xPositionType': xPositionTypeMobile,
		'yPosition': yPositionMobile,
		'yPositionType': yPositionTypeMobile,
	};

	const containerBackgroundCSSMobile = generateBackgroundCSS( backgroundAttributesMobile );

	let mobile_selectors = {
		'.wp-block': {
			'padding-top': generateCSSUnit( topPaddingMobile, paddingTypeMobile ),
			'padding-bottom': generateCSSUnit( bottomPaddingMobile, paddingTypeMobile ),
			'padding-left': generateCSSUnit( leftPaddingMobile, paddingTypeMobile ),
			'padding-right': generateCSSUnit( rightPaddingMobile, paddingTypeMobile ),
			'margin-top': generateCSSUnit( topMarginMobile, marginTypeMobile ) + ' !important',
			'margin-bottom': generateCSSUnit( bottomMarginMobile, marginTypeMobile ) + ' !important',
			'margin-left': generateCSSUnit( leftMarginMobile, marginTypeMobile ),
			'margin-right': generateCSSUnit( rightMarginMobile, marginTypeMobile ),
			...containerBackgroundCSSMobile,
			...borderCSSMobile,
		},
		' .swiper-button-next:after': {
			'font-size': generateCSSUnit( arrowSizeMobile, 'px' ),
		},
		' .swiper-button-prev:after': {
			'font-size': generateCSSUnit( arrowSizeMobile, 'px' ),
		},
		' .swiper-button-prev': {
			'left': generateCSSUnit( arrowDistanceMobile, 'px' ),
			'width': generateCSSUnit( arrowPaddingMobile * 2 + arrowSizeMobile, 'px' ),
			'height': generateCSSUnit( arrowPaddingMobile * 2 + arrowSizeMobile, 'px' ),
			'line-height': generateCSSUnit( arrowPaddingMobile * 2 + arrowSizeMobile, 'px' ),
			...arrowBorderCSSMobile,
		},
		' .swiper-button-next': {
			'right': generateCSSUnit( arrowDistanceMobile, 'px' ),
			'width': generateCSSUnit( arrowPaddingMobile * 2 + arrowSizeMobile, 'px' ),
			'height': generateCSSUnit( arrowPaddingMobile * 2 + arrowSizeMobile, 'px' ),
			'line-height': generateCSSUnit( arrowPaddingMobile * 2 + arrowSizeMobile, 'px' ),
			...arrowBorderCSSMobile,
		},
		' .swiper-pagination': {
			'bottom': generateCSSUnit( dotsMarginTopMobile, 'px' ),
		},
		' .swiper-wrapper': {
			'min-height': generateCSSUnit( minHeightMobile, 'px' ),
		},
	};

	const base_selector = `.editor-styles-wrapper #block-${ clientId }`;

	selectors = applyFilters( `spectra.slider.styling`, selectors, attributes );
	tablet_selectors = applyFilters( `spectra.slider.tabletStyling`, tablet_selectors, attributes );
	mobile_selectors = applyFilters( `spectra.slider.mobileStyling`, mobile_selectors, attributes );

	let styling_css = generateCSS( selectors, base_selector );

	if( 'tablet' === previewType || 'mobile' === previewType ) {
		styling_css += generateCSS(
			tablet_selectors,
			`${ base_selector }`,
			true,
			'tablet'
		);

		if( 'mobile' === previewType ){
			styling_css += generateCSS(
				mobile_selectors,
				`${ base_selector }`,
				true,
				'mobile'
			);
		}
	}
	return styling_css;
}

export default styling;
