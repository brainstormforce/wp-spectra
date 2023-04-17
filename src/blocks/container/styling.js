/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBackgroundCSS from '@Controls/generateBackgroundCSS';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import generateBorderCSS from '@Controls/generateBorderCSS';

function styling( attributes, clientId, name ) {
	const blockName = name.replace( 'uagb/', '' );

	let {
		block_id,
		widthDesktop,
		widthTablet,
		widthMobile,
		widthType,
		minHeightDesktop,
		minHeightTablet,
		minHeightMobile,
		minHeightType,
		minHeightTypeTablet,
		minHeightTypeMobile,
		directionDesktop,
		directionTablet,
		directionMobile,
		alignItemsDesktop,
		alignItemsTablet,
		alignItemsMobile,
		justifyContentDesktop,
		justifyContentTablet,
		justifyContentMobile,
		wrapDesktop,
		wrapTablet,
		wrapMobile,
		alignContentDesktop,
		alignContentTablet,
		alignContentMobile,
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
		containerBorderHColor,
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
		rowGapDesktop,
		rowGapTablet,
		rowGapMobile,
		rowGapType,
		rowGapTypeTablet,
		rowGapTypeMobile,
		columnGapDesktop,
		columnGapTablet,
		columnGapMobile,
		columnGapType,
		columnGapTypeTablet,
		columnGapTypeMobile,
		contentWidth,
		innerContentWidth,
		bottomColor,
		bottomHeight,
		bottomHeightTablet,
		bottomHeightMobile,
		bottomWidth,
		topColor,
		topHeight,
		topHeightTablet,
		topHeightMobile,
		topWidth,
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
		backgroundVideoOpacity,
		backgroundVideoColor,
		innerContentCustomWidthType,
		backgroundVideo,

		textColor,
		linkColor,
		linkHoverColor,

		innerContentCustomWidthDesktop,
		innerContentCustomWidthTablet,
		innerContentCustomWidthMobile,
		innerContentCustomWidthTypeMobile,
		innerContentCustomWidthTypeTablet,

		overflow,
		isBlockRootParent,

		widthTypeTablet,
		widthTypeMobile,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
	} = attributes;

	const innerContentCustomWidthDesktopFallback = getFallbackNumber(
		innerContentCustomWidthDesktop,
		'innerContentCustomWidthDesktop',
		blockName
	);
	const widthDesktopFallback = getFallbackNumber( widthDesktop, 'widthDesktop', blockName );
	const rowGapDesktopFallback = getFallbackNumber( rowGapDesktop, 'rowGapDesktop', blockName );
	const columnGapDesktopFallback = getFallbackNumber( columnGapDesktop, 'columnGapDesktop', blockName );

	const borderCSS = generateBorderCSS( attributes, 'container' );
	const borderCSSTablet = generateBorderCSS( attributes, 'container', 'tablet' );
	const borderCSSMobile = generateBorderCSS( attributes, 'container', 'mobile' );

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

	const containerFullWidth = '100vw';

	const backgroundVideoOpacityValue =
		backgroundVideoOpacity &&
		'none' !== overlayType &&
		( ( 'color' === overlayType && backgroundVideoColor ) || ( 'gradient' === overlayType && gradientValue ) )
			? 1 - backgroundVideoOpacity
			: 1;

	const videoBackgroundAttributes = {
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
		'backgroundVideo': backgroundVideo,
		'backgroundVideoColor': backgroundVideoColor,
	};

	const videoBackgroundCSS = generateBackgroundCSS( videoBackgroundAttributes );

	const selectors = {
		'.wp-block-uagb-container .block-editor-block-list__block': {
			'color': textColor,
		},
		'.wp-block-uagb-container h1': {
			'color': textColor,
		},
		'.wp-block-uagb-container h2': {
			'color': textColor,
		},
		'.wp-block-uagb-container h3': {
			'color': textColor,
		},
		'.wp-block-uagb-container h4': {
			'color': textColor,
		},
		'.wp-block-uagb-container h5': {
			'color': textColor,
		},
		'.wp-block-uagb-container h6': {
			'color': textColor,
		},
		'.wp-block-uagb-container .block-editor-block-list__block a': {
			'color': linkColor,
		},
		'.wp-block-uagb-container .block-editor-block-list__block a:hover': {
			'color': linkHoverColor,
		},
		' > .uagb-container__shape-top svg': {
			'width': 'calc( ' + topWidth + '% + 1.3px )',
			'height': generateCSSUnit( topHeight, 'px' ),
		},
		' > .uagb-container__shape-top .uagb-container__shape-fill': {
			'fill': topColor,
		},
		' > .uagb-container__shape-bottom svg': {
			'width': 'calc( ' + bottomWidth + '% + 1.3px )',
			'height': generateCSSUnit( bottomHeight, 'px' ),
		},
		' > .uagb-container__shape-bottom .uagb-container__shape-fill': {
			'fill': bottomColor,
		},
		' .uagb-container__video-wrap video': {
			'opacity': backgroundVideoOpacityValue,
		},
	};

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
		'backgroundVideo': backgroundVideo,
		'backgroundVideoColor': backgroundVideoColor,
		'customPosition': customPosition,
		'xPosition': xPositionDesktop,
		'xPositionType': xPositionType,
		'yPosition': yPositionDesktop,
		'yPositionType': yPositionType,
	};

	const containerBackgroundCSSDesktop = generateBackgroundCSS( backgroundAttributesDesktop );

	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	let boxShadowPositionCSSHover = boxShadowPositionHover;

	if ( 'outset' === boxShadowPositionHover ) {
		boxShadowPositionCSSHover = '';
	}

	const containerCSS = {
		'padding-top': generateCSSUnit( topPaddingDesktop, paddingType ),
		'padding-bottom': generateCSSUnit( bottomPaddingDesktop, paddingType ),
		'padding-left': generateCSSUnit( leftPaddingDesktop, paddingType ),
		'padding-right': generateCSSUnit( rightPaddingDesktop, paddingType ),
		'margin-top': generateCSSUnit( topMarginDesktop, marginType ) + ' !important',
		'margin-bottom': generateCSSUnit( bottomMarginDesktop, marginType ) + ' !important',
		'margin-left': generateCSSUnit( leftMarginDesktop, marginType ),
		'margin-right': generateCSSUnit( rightMarginDesktop, marginType ),
		...containerBackgroundCSSDesktop,
		'box-shadow':
			generateCSSUnit( boxShadowHOffset, 'px' ) +
			' ' +
			generateCSSUnit( boxShadowVOffset, 'px' ) +
			' ' +
			generateCSSUnit( boxShadowBlur, 'px' ) +
			' ' +
			generateCSSUnit( boxShadowSpread, 'px' ) +
			' ' +
			boxShadowColor +
			' ' +
			boxShadowPositionCSS,
		'min-height': generateCSSUnit( minHeightDesktop, minHeightType ),
		...borderCSS,
		'overflow': overflow,
	};

	boxShadowBlurHover = isNaN( boxShadowBlurHover ) ? '' : boxShadowBlurHover;
	boxShadowColorHover = boxShadowColorHover ? boxShadowColorHover : '';

	let containerFlexSelector =
		'.wp-block-uagb-container > .uagb-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout';
	if ( ! isBlockRootParent || 'alignfull' !== contentWidth || 'alignwide' !== innerContentWidth ) {
		containerFlexSelector =
			'.wp-block-uagb-container > .block-editor-inner-blocks > .block-editor-block-list__layout';
	}

	selectors[ containerFlexSelector ] = {
		'min-height': generateCSSUnit( minHeightDesktop, minHeightType ),
		'flex-direction': directionDesktop,
		'align-items': alignItemsDesktop,
		'justify-content': justifyContentDesktop,
		'flex-wrap': wrapDesktop,
		'align-content': alignContentDesktop,
		'row-gap': generateCSSUnit( rowGapDesktopFallback, rowGapType ),
		'column-gap': generateCSSUnit( columnGapDesktopFallback, columnGapType ),
	};
	selectors[ '.block-editor-block-list__block' ] = {
		'min-height': generateCSSUnit( minHeightDesktop, minHeightType ),
		'flex-direction': directionDesktop,
		'align-items': alignItemsDesktop,
		'justify-content': justifyContentDesktop,
		'flex-wrap': wrapDesktop,
		'align-content': alignContentDesktop,
	};

	const widthSelectorsDesktop = {
		[ `.is-root-container > .block-editor-block-list__block .block-editor-block-list__block#block-${ clientId } ` ]: {
			'max-width': generateCSSUnit( widthDesktopFallback, widthType ),
			'width': '100%',
		},
	};

	const widthSelectorsTablet = {
		[ `.is-root-container > .block-editor-block-list__block .uagb-editor-preview-mode-tablet.block-editor-block-list__block#block-${ clientId } ` ]: {
			'max-width': generateCSSUnit( widthTablet, widthTypeTablet ),
			'width': '100%',
		},
	};

	const widthSelectorsMobile = {
		[ `.is-root-container > .block-editor-block-list__block .uagb-editor-preview-mode-mobile.block-editor-block-list__block#block-${ clientId } ` ]: {
			'max-width': generateCSSUnit( widthMobile, widthTypeMobile ),
			'width': '100%',
		},
	};

	if ( 'alignfull' === contentWidth && 'alignwide' === innerContentWidth ) {
		widthSelectorsDesktop[
			`.is-root-container > .block-editor-block-list__block.wp-block-uagb-container.uagb-block-${ block_id } > .uagb-container-inner-blocks-wrap`
		] = {
			'--inner-content-custom-width': `min(${ containerFullWidth },${ innerContentCustomWidthDesktopFallback }${ innerContentCustomWidthType })`,
			'max-width': 'var(--inner-content-custom-width)',
			'width': '100%',
			'margin-left': 'auto',
			'margin-right': 'auto',
		};

		widthSelectorsTablet[
			`.is-root-container > .block-editor-block-list__block.uagb-editor-preview-mode-table.wp-block-uagb-container.uagb-block-${ block_id } > .uagb-container-inner-blocks-wrap`
		] = {
			'--inner-content-custom-width': `min(${ containerFullWidth },${
				innerContentCustomWidthTablet || innerContentCustomWidthDesktopFallback
			}${ innerContentCustomWidthTypeTablet })`,
			'max-width': 'var(--inner-content-custom-width)',
			'width': '100%',
			'margin-left': 'auto',
			'margin-right': 'auto',
		};

		widthSelectorsMobile[
			`.is-root-container > .block-editor-block-list__block.uagb-editor-preview-mode-mobile.wp-block-uagb-container.uagb-block-${ block_id } > .uagb-container-inner-blocks-wrap`
		] = {
			'--inner-content-custom-width': `min(${ containerFullWidth },${
				innerContentCustomWidthMobile || innerContentCustomWidthTablet || innerContentCustomWidthDesktopFallback
			}${ innerContentCustomWidthTypeMobile })`,
			'max-width': 'var(--inner-content-custom-width)',
			'width': '100%',
			'margin-left': 'auto',
			'margin-right': 'auto',
		};
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
		'backgroundVideo': backgroundVideo,
		'backgroundVideoColor': backgroundVideoColor,
		'customPosition': customPosition,
		'xPosition': xPositionTablet,
		'xPositionType': xPositionTypeTablet,
		'yPosition': yPositionTablet,
		'yPositionType': yPositionTypeTablet,
	};

	const containerBackgroundCSSTablet = generateBackgroundCSS( backgroundAttributesTablet );

	const tablet_selectors = {
		[ containerFlexSelector ]: {
			'flex-direction': directionTablet,
			'align-items': alignItemsTablet,
			'justify-content': justifyContentTablet,
			'flex-wrap': wrapTablet,
			'align-content': alignContentTablet,
			'row-gap': generateCSSUnit( rowGapTablet, rowGapTypeTablet ),
			'column-gap': generateCSSUnit( columnGapTablet, columnGapTypeTablet ),
			'min-height': generateCSSUnit( minHeightTablet, minHeightTypeTablet ),
		},
		'.block-editor-block-list__block': {
			'min-height': generateCSSUnit( minHeightTablet, minHeightTypeTablet ),
			'flex-direction': directionTablet,
			'align-items': alignItemsTablet,
			'justify-content': justifyContentTablet,
			'flex-wrap': wrapTablet,
			'align-content': alignContentTablet,
		},
		' > .uagb-container__shape-top svg': {
			'height': generateCSSUnit( topHeightTablet, 'px' ),
		},
		' > .uagb-container__shape-bottom svg': {
			'height': generateCSSUnit( bottomHeightTablet, 'px' ),
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
		'backgroundVideo': backgroundVideo,
		'backgroundVideoColor': backgroundVideoColor,
		'customPosition': customPosition,
		'xPosition': xPositionMobile,
		'xPositionType': xPositionTypeMobile,
		'yPosition': yPositionMobile,
		'yPositionType': yPositionTypeMobile,
	};

	const containerBackgroundCSSMobile = generateBackgroundCSS( backgroundAttributesMobile );

	const mobile_selectors = {
		[ containerFlexSelector ]: {
			'flex-direction': directionMobile,
			'align-items': alignItemsMobile,
			'justify-content': justifyContentMobile,
			'flex-wrap': wrapMobile,
			'align-content': alignContentMobile,
			'row-gap': generateCSSUnit( rowGapMobile, rowGapTypeMobile ),
			'column-gap': generateCSSUnit( columnGapMobile, columnGapTypeMobile ),
			'min-height': generateCSSUnit( minHeightMobile, minHeightTypeMobile ),
		},
		'.block-editor-block-list__block': {
			'min-height': generateCSSUnit( minHeightMobile, minHeightTypeMobile ),
			'flex-direction': directionMobile,
			'align-items': alignItemsMobile,
			'justify-content': justifyContentMobile,
			'flex-wrap': wrapMobile,
			'align-content': alignContentMobile,
		},
		' > .uagb-container__shape-top svg': {
			'height': generateCSSUnit( topHeightMobile, 'px' ),
		},
		' > .uagb-container__shape-bottom svg': {
			'height': generateCSSUnit( bottomHeightMobile, 'px' ),
		},
	};

	if ( 'video' === backgroundType ) {
		selectors[ ' .uagb-container__video-wrap' ] = {
			...videoBackgroundCSS,
			...borderCSS,
		};
		tablet_selectors[ ' .uagb-container__video-wrap' ] = {
			...borderCSSTablet,
		};
		mobile_selectors[ ' .uagb-container__video-wrap' ] = {
			...borderCSSMobile,
		};
		selectors[ '.wp-block' ] = {
			'padding-top': generateCSSUnit( topPaddingDesktop, paddingType ),
			'padding-bottom': generateCSSUnit( bottomPaddingDesktop, paddingType ),
			'padding-left': generateCSSUnit( leftPaddingDesktop, paddingType ),
			'padding-right': generateCSSUnit( rightPaddingDesktop, paddingType ),
			'margin-top': generateCSSUnit( topMarginDesktop, marginType ) + ' !important',
			'margin-bottom': generateCSSUnit( bottomMarginDesktop, marginType ) + ' !important',
			'margin-left': generateCSSUnit( leftMarginDesktop, marginType ),
			'margin-right': generateCSSUnit( rightMarginDesktop, marginType ),
			'box-shadow':
				generateCSSUnit( boxShadowHOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowVOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowBlur, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowSpread, 'px' ) +
				' ' +
				boxShadowColor +
				' ' +
				boxShadowPositionCSS,
			'min-height': generateCSSUnit( minHeightDesktop, minHeightType ),
			'overflow': overflow,
		};
		tablet_selectors[ '.wp-block' ] = {
			'padding-top': generateCSSUnit( topPaddingTablet, paddingTypeTablet ),
			'padding-bottom': generateCSSUnit( bottomPaddingTablet, paddingTypeTablet ),
			'padding-left': generateCSSUnit( leftPaddingTablet, paddingTypeTablet ),
			'padding-right': generateCSSUnit( rightPaddingTablet, paddingTypeTablet ),
			'margin-top': generateCSSUnit( topMarginTablet, marginTypeTablet ) + ' !important',
			'margin-bottom': generateCSSUnit( bottomMarginTablet, marginTypeTablet ) + ' !important',
			'margin-left': generateCSSUnit( leftMarginTablet, marginTypeTablet ),
			'margin-right': generateCSSUnit( rightMarginTablet, marginTypeTablet ),
			'min-height': generateCSSUnit( minHeightTablet, minHeightTypeTablet ),
		};
		mobile_selectors[ '.wp-block' ] = {
			'padding-top': generateCSSUnit( topPaddingMobile, paddingTypeMobile ),
			'padding-bottom': generateCSSUnit( bottomPaddingMobile, paddingTypeMobile ),
			'padding-left': generateCSSUnit( leftPaddingMobile, paddingTypeMobile ),
			'padding-right': generateCSSUnit( rightPaddingMobile, paddingTypeMobile ),
			'margin-top': generateCSSUnit( topMarginMobile, marginTypeMobile ) + ' !important',
			'margin-bottom': generateCSSUnit( bottomMarginMobile, marginTypeMobile ) + ' !important',
			'margin-left': generateCSSUnit( leftMarginMobile, marginTypeMobile ),
			'margin-right': generateCSSUnit( rightMarginMobile, marginTypeMobile ),
			'min-height': generateCSSUnit( minHeightMobile, minHeightTypeMobile ),
		};
		selectors[ '.wp-block:hover .uagb-container__video-wrap' ] = {
			'border-color': containerBorderHColor,
			'box-shadow': '',
		};
		if ( '' !== boxShadowColorHover || '' !== boxShadowBlurHover ) {
			const boxShadowBlurHoverCSSUnit =
				'' === boxShadowBlurHover ? '' : generateCSSUnit( boxShadowBlurHover, 'px' );

			selectors[ '.wp-block:hover .uagb-container__video-wrap' ][ 'box-shadow' ] =
				generateCSSUnit( boxShadowHOffsetHover, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowVOffsetHover, 'px' ) +
				' ' +
				boxShadowBlurHoverCSSUnit +
				' ' +
				generateCSSUnit( boxShadowSpreadHover, 'px' ) +
				' ' +
				boxShadowColorHover +
				' ' +
				boxShadowPositionCSSHover;
		}
	} else {
		selectors[ '.wp-block' ] = containerCSS;
		tablet_selectors[ '.wp-block' ] = {
			'padding-top': generateCSSUnit( topPaddingTablet, paddingTypeTablet ),
			'padding-bottom': generateCSSUnit( bottomPaddingTablet, paddingTypeTablet ),
			'padding-left': generateCSSUnit( leftPaddingTablet, paddingTypeTablet ),
			'padding-right': generateCSSUnit( rightPaddingTablet, paddingTypeTablet ),
			'margin-top': generateCSSUnit( topMarginTablet, marginTypeTablet ) + ' !important',
			'margin-bottom': generateCSSUnit( bottomMarginTablet, marginTypeTablet ) + ' !important',
			'margin-left': generateCSSUnit( leftMarginTablet, marginTypeTablet ),
			'margin-right': generateCSSUnit( rightMarginTablet, marginTypeTablet ),
			'min-height': generateCSSUnit( minHeightTablet, minHeightTypeTablet ),
			...containerBackgroundCSSTablet,
			...borderCSSTablet,
		};
		mobile_selectors[ '.wp-block' ] = {
			'padding-top': generateCSSUnit( topPaddingMobile, paddingTypeMobile ),
			'padding-bottom': generateCSSUnit( bottomPaddingMobile, paddingTypeMobile ),
			'padding-left': generateCSSUnit( leftPaddingMobile, paddingTypeMobile ),
			'padding-right': generateCSSUnit( rightPaddingMobile, paddingTypeMobile ),
			'margin-top': generateCSSUnit( topMarginMobile, marginTypeMobile ) + ' !important',
			'margin-bottom': generateCSSUnit( bottomMarginMobile, marginTypeMobile ) + ' !important',
			'margin-left': generateCSSUnit( leftMarginMobile, marginTypeMobile ),
			'margin-right': generateCSSUnit( rightMarginMobile, marginTypeMobile ),
			'min-height': generateCSSUnit( minHeightMobile, minHeightTypeMobile ),
			...containerBackgroundCSSMobile,
			...borderCSSMobile,
		};
		selectors[ '.wp-block:hover' ] = {
			'border-color': containerBorderHColor,
			'box-shadow': '',
		};
		if ( '' !== boxShadowColorHover || '' !== boxShadowBlurHover ) {
			const boxShadowBlurHoverCSSUnit =
				'' === boxShadowBlurHover ? '' : generateCSSUnit( boxShadowBlurHover, 'px' );

			selectors[ '.wp-block:hover' ][ 'box-shadow' ] =
				generateCSSUnit( boxShadowHOffsetHover, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowVOffsetHover, 'px' ) +
				' ' +
				boxShadowBlurHoverCSSUnit +
				' ' +
				generateCSSUnit( boxShadowSpreadHover, 'px' ) +
				' ' +
				boxShadowColorHover +
				' ' +
				boxShadowPositionCSSHover;
		}
	}

	if ( 'default' === contentWidth ) {
		selectors[ '.block-editor-block-list__block' ][ 'max-width' ] = generateCSSUnit(
			widthDesktopFallback,
			widthType
		);

		tablet_selectors[ '.block-editor-block-list__block' ][ 'max-width' ] = generateCSSUnit(
			widthTablet,
			widthTypeTablet
		);

		mobile_selectors[ '.block-editor-block-list__block' ][ 'max-width' ] = generateCSSUnit(
			widthMobile,
			widthTypeMobile
		);
	}

	const base_selector = `.editor-styles-wrapper #block-${ clientId }`;

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS( widthSelectorsDesktop, '.editor-styles-wrapper ' );

	styling_css += generateCSS(
		tablet_selectors,
		`${ base_selector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	styling_css += generateCSS( widthSelectorsTablet, '.editor-styles-wrapper ', true, 'tablet' );

	styling_css += generateCSS(
		mobile_selectors,
		`${ base_selector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	styling_css += generateCSS( widthSelectorsMobile, '.editor-styles-wrapper ', true, 'mobile' );

	return styling_css;
}

export default styling;
