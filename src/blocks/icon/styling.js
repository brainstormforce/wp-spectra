/**
 * Block Icon : Returns dynamic css for Editor.
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import generateBorderCSS from '@Controls/generateBorderCSS';
import generateShadowCSS from '@Controls/generateShadowCSS';

function styling( attributes, clientId, name, deviceType, gbsSelector = false ) {
	const blockName = name.replace( 'uagb/', '' );
	const previewType = deviceType.toLowerCase();
	const {
		block_id,
		// Size
		iconSize,
		iconSizeTablet,
		iconSizeMobile,
		iconSizeUnit,
		// Alignment
		align,
		alignTablet,
		alignMobile,
		// Rotation
		rotation,
		rotationUnit,
		// Color
		iconColor,
		iconBackgroundColorType,
		iconBackgroundColor,
		iconBackgroundGradientColor,
		iconHoverColor,
		iconHoverBackgroundColorType,
		iconHoverBackgroundColor,
		iconHoverBackgroundGradientColor,
		// Padding
		iconTopPadding,
		iconRightPadding,
		iconBottomPadding,
		iconLeftPadding,
		iconTopTabletPadding,
		iconRightTabletPadding,
		iconBottomTabletPadding,
		iconLeftTabletPadding,
		iconTopMobilePadding,
		iconRightMobilePadding,
		iconBottomMobilePadding,
		iconLeftMobilePadding,
		iconPaddingUnit,
		iconMobilePaddingUnit,
		iconTabletPaddingUnit,
		// Margin
		iconTopMargin,
		iconRightMargin,
		iconBottomMargin,
		iconLeftMargin,
		iconTopTabletMargin,
		iconRightTabletMargin,
		iconBottomTabletMargin,
		iconLeftTabletMargin,
		iconTopMobileMargin,
		iconRightMobileMargin,
		iconBottomMobileMargin,
		iconLeftMobileMargin,
		iconMarginUnit,
		iconMobileMarginUnit,
		iconTabletMarginUnit,
		// Border
		iconBorderStyle,
		iconBorderColor,
		iconBorderHColor,
		// Shadow
		iconShadowColor,
		iconShadowHOffset,
		iconShadowVOffset,
		iconShadowBlur,
		// Block Shadow
		useSeparateBoxShadows,
		iconBoxShadowColor,
		iconBoxShadowHOffset,
		iconBoxShadowVOffset,
		iconBoxShadowBlur,
		iconBoxShadowSpread,
		iconBoxShadowPosition,
		iconBoxShadowColorHover,
		iconBoxShadowHOffsetHover,
		iconBoxShadowVOffsetHover,
		iconBoxShadowBlurHover,
		iconBoxShadowSpreadHover,
		iconBoxShadowPositionHover,
	} = attributes;

	const iconWidth = getFallbackNumber( iconSize, 'iconSize', blockName );
	const transformation = generateCSSUnit( getFallbackNumber( rotation, 'rotation', blockName ), rotationUnit );
	const background = 'classic' === iconBackgroundColorType ? iconBackgroundColor : iconBackgroundGradientColor;
	const hoverBackground =
		'classic' === iconHoverBackgroundColorType ? iconHoverBackgroundColor : iconHoverBackgroundGradientColor;

	const dropShadow = generateShadowCSS( {
		'horizontal': iconShadowHOffset,
		'vertical': iconShadowVOffset,
		'blur': iconShadowBlur,
		'color': iconShadowColor,
	} );

	const boxShadow = generateShadowCSS( {
		'horizontal': iconBoxShadowHOffset,
		'vertical': iconBoxShadowVOffset,
		'blur': iconBoxShadowBlur,
		'spread': iconBoxShadowSpread,
		'color': iconBoxShadowColor,
		'position': iconBoxShadowPosition,
	} );

	const boxShadowHoverCSS = generateShadowCSS( {
		'horizontal': iconBoxShadowHOffsetHover,
		'vertical': iconBoxShadowVOffsetHover,
		'blur': iconBoxShadowBlurHover,
		'spread': iconBoxShadowSpreadHover,
		'color': iconBoxShadowColorHover,
		'position': iconBoxShadowPositionHover,
		'altColor': iconBoxShadowColor,
	} );

	const selectors = {
		'.uagb-icon-wrapper': {
			'text-align': align,
		},
		'.uagb-icon-wrapper svg': {
			'width': generateCSSUnit( iconWidth, iconSizeUnit ),
			'height': generateCSSUnit( iconWidth, iconSizeUnit ),
			'box-sizing': 'content-box',
			'transform': `rotate(${ transformation })`,
			'fill': iconColor,
			'filter': dropShadow ? `drop-shadow( ${ dropShadow } )` : '',
		},
		'.uagb-icon-wrapper .uagb-svg-wrapper': {
			'display': 'inline-flex',
			'background': background,
			//padding
			'padding-top': generateCSSUnit( iconTopPadding, iconPaddingUnit ),
			'padding-right': generateCSSUnit( iconRightPadding, iconPaddingUnit ),
			'padding-bottom': generateCSSUnit( iconBottomPadding, iconPaddingUnit ),
			'padding-left': generateCSSUnit( iconLeftPadding, iconPaddingUnit ),
			// margin
			'margin-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'margin-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'margin-bottom': generateCSSUnit( iconBottomMargin, iconMarginUnit ),
			'margin-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			// border
			'border-style': iconBorderStyle,
			'border-color': iconBorderColor,
			...generateBorderCSS( attributes, 'icon' ),
			'box-shadow': boxShadow,
		},
		'.uagb-icon-wrapper .uagb-svg-wrapper:hover': {
			'border-color': iconBorderHColor,
			'background': hoverBackground,
		},
		'.uagb-icon-wrapper .uagb-svg-wrapper:hover svg': {
			'fill': iconHoverColor,
		},
	};

	// Box Shadow.
	if ( useSeparateBoxShadows ) {
		selectors['.uagb-icon-wrapper .uagb-svg-wrapper:hover'] = {
			'box-shadow' : boxShadowHoverCSS,
			'background': hoverBackground,
			'border-color': iconBorderHColor,
		}
	}

	const tabletSelectors = {
		'.uagb-icon-wrapper': {
			'text-align': alignTablet,
		},
		'.uagb-icon-wrapper .uagb-svg-wrapper': {
			// padding
			'padding-top': generateCSSUnit( iconTopTabletPadding, iconTabletPaddingUnit ),
			'padding-right': generateCSSUnit( iconRightTabletPadding, iconTabletPaddingUnit ),
			'padding-bottom': generateCSSUnit( iconBottomTabletPadding, iconTabletPaddingUnit ),
			'padding-left': generateCSSUnit( iconLeftTabletPadding, iconTabletPaddingUnit ),
			// margin
			'margin-top': generateCSSUnit( iconTopTabletMargin, iconTabletMarginUnit ),
			'margin-right': generateCSSUnit( iconRightTabletMargin, iconTabletMarginUnit ),
			'margin-bottom': generateCSSUnit( iconBottomTabletMargin, iconTabletMarginUnit ),
			'margin-left': generateCSSUnit( iconLeftTabletMargin, iconTabletMarginUnit ),
			...generateBorderCSS( attributes, 'icon', 'tablet' ),
		},
		'.uagb-icon-wrapper .uagb-svg-wrapper svg': {
			'width': generateCSSUnit( iconSizeTablet, iconSizeUnit ),
			'height': generateCSSUnit( iconSizeTablet, iconSizeUnit ),
		},
	};

	const mobileSelectors = {
		'.uagb-icon-wrapper': {
			'text-align': alignMobile,
		},
		'.uagb-icon-wrapper .uagb-svg-wrapper': {
			'padding-top': generateCSSUnit( iconTopMobilePadding, iconMobilePaddingUnit ),
			'padding-right': generateCSSUnit( iconRightMobilePadding, iconMobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( iconBottomMobilePadding, iconMobilePaddingUnit ),
			'padding-left': generateCSSUnit( iconLeftMobilePadding, iconMobilePaddingUnit ),
			'margin-top': generateCSSUnit( iconTopMobileMargin, iconMobileMarginUnit ),
			'margin-right': generateCSSUnit( iconRightMobileMargin, iconMobileMarginUnit ),
			'margin-bottom': generateCSSUnit( iconBottomMobileMargin, iconMobileMarginUnit ),
			'margin-left': generateCSSUnit( iconLeftMobileMargin, iconMobileMarginUnit ),
			...generateBorderCSS( attributes, 'icon', 'mobile' ),
		},
		'.uagb-icon-wrapper .uagb-svg-wrapper svg': {
			'width': generateCSSUnit( iconSizeMobile, iconSizeUnit ),
			'height': generateCSSUnit( iconSizeMobile, iconSizeUnit ),
		},
	};

	let stylingCss = '';
	const base_selector = gbsSelector ? gbsSelector : `.uagb-block-${ block_id }`;
	
	stylingCss = generateCSS( selectors, base_selector );

	if( 'tablet' === previewType || 'mobile' === previewType || gbsSelector ) {
		stylingCss += generateCSS(
			tabletSelectors,
			`${ base_selector }`,
			true,
			'tablet'
		);

		if( 'mobile' === previewType || gbsSelector ){
			stylingCss += generateCSS(
				mobileSelectors,
				`${ base_selector }`,
				true,
				'mobile'
			);
		}
	}
	return stylingCss;
}

export default styling;
