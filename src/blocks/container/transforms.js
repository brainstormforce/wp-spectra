/**
 * WordPress dependencies
 */
 import {
	createBlock,
	createBlocksFromInnerBlocksTemplate,
} from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core/group' ],
			priority: 1,
			transform: ( attributes, innerBlocks ) => {
				const {
					align,
					backgroundColor,
					style,
					gradient
				} = attributes;

				const contentWidth = align ? `align${align}` : 'default';
				const bgColor = backgroundColor ? backgroundColor : style?.color?.background ? style?.color?.background : null; // eslint-disable-line no-nested-ternary

				const backgroundType = ( gradient || style?.color?.gradient ) ? 'gradient' : ( bgColor || style?.color?.background ) ? 'color' : 'none'; // eslint-disable-line no-nested-ternary

				return createBlock(
					'uagb/container',
					{
						contentWidth,
						backgroundType,
						backgroundColor: bgColor,
						gradientValue: gradient || style?.color?.gradient,
						variationSelected: true
					},
					innerBlocks
				);


			},
		},
		{
			type: 'block',
			blocks: [ 'core/columns' ],
			priority: 1,
			transform: ( attributes, innerBlocks ) => {
				const {
					align,
					backgroundColor,
					style,
					gradient,
					isStackedOnMobile
				} = attributes;

				const contentWidth = align ? `align${align}` : 'default';
				const bgColor = backgroundColor ? backgroundColor : style?.color?.background ? style?.color?.background : null; // eslint-disable-line no-nested-ternary

				const backgroundType = ( gradient || style?.color?.gradient ) ? 'gradient' : ( bgColor || style?.color?.background ) ? 'color' : 'none'; // eslint-disable-line no-nested-ternary

				const innerBlocksTemplate = [];
				const containerChildWidth = ( 100 / innerBlocks.length );

				innerBlocks.map( ( child ) => {

					const bgColorChild = child?.attributes?.backgroundColor ? child?.attributes?.backgroundColor : child?.attributes?.style?.color?.background ? child?.attributes?.style?.color?.background : null; // eslint-disable-line no-nested-ternary

					const backgroundTypeChild = ( child?.attributes?.gradient || child?.attributes?.style?.color?.gradient ) ? 'gradient' : ( bgColorChild || child?.attributes?.style?.color?.background ) ? 'color' : 'none'; // eslint-disable-line no-nested-ternary

					const width = child?.attributes?.width ? child?.attributes?.width : containerChildWidth;

					innerBlocksTemplate.push( [
						'uagb/container',
						{
							widthDesktop: width,
							backgroundTypeChild,
							backgroundColor: bgColorChild,
							gradientValue: gradient || style?.color?.gradient
						},
						child?.innerBlocks
					] );

					return child;
				} );

				return createBlock(
					'uagb/container',
					{
						contentWidth,
						backgroundType,
						backgroundColor: bgColor,
						gradientValue: gradient || style?.color?.gradient,
						directionDesktop: 'row',
						directionTablet: 'row',
						directionMobile: isStackedOnMobile ? 'column' : 'row',
						variationSelected: true
					},
					createBlocksFromInnerBlocksTemplate( innerBlocksTemplate )
				);


			},
		},
		{
			type: 'block',
			blocks: [ 'uagb/section' ],
			priority: 1,
			transform: ( attributes, innerBlocks ) => {

				const {
					backgroundType,
					backgroundColor,
					innerWidth,
					innerWidthType,
					contentWidth,
					borderRadius,
					topPaddingTablet,
					bottomPaddingTablet,
					leftPaddingTablet,
					rightPaddingTablet,
					topMarginTablet,
					bottomMarginTablet,
					leftMarginTablet,
					rightMarginTablet,
					topPaddingMobile,
					bottomPaddingMobile,
					leftPaddingMobile,
					rightPaddingMobile,
					topMarginMobile,
					bottomMarginMobile,
					leftMarginMobile,
					rightMarginMobile,
					boxShadowColor,
					boxShadowHOffset,
					boxShadowVOffset,
					boxShadowBlur,
					boxShadowSpread,
					boxShadowPosition,
					gradientValue,
					borderStyle,
					borderWidth,
					borderColor,
					borderHoverColor,
					topMargin,
					bottomMargin,
					leftMargin,
					rightMargin,
					leftPadding,
					rightPadding,
					topPadding,
					bottomPadding,
				} = attributes;

				let containerWidth = 'full_width' === contentWidth ? 'alignfull' : 'alignwide';
				let innerContainerCustomWidth = null;
				let innerContentWidth = null;

				if ( 'full_width' === contentWidth ) {

					innerContainerCustomWidth = 'px' === innerWidthType ? innerWidth : 1200;

					innerContentWidth = 'px' === innerWidthType ? 'alignwide' : 'alignfull';
				}

				return createBlock(
					'uagb/container',
					{
						contentWidth: containerWidth,
						backgroundType,
						backgroundColor,
						gradientValue,
						innerContentCustomWidthDesktop: innerContainerCustomWidth || 1200,
						innerContentWidth: innerContentWidth || 'alignfull',
						borderStyle,
						borderWidth,
						borderColor,
						borderHoverColor,
						borderRadius,
						boxShadowColor,
						boxShadowHOffset,
						boxShadowVOffset,
						boxShadowBlur,
						boxShadowSpread,
						boxShadowPosition,
						topMarginDesktop: topMargin,
						bottomMarginDesktop: bottomMargin,
						leftMarginDesktop: leftMargin,
						rightMarginDesktop: rightMargin,
						topMarginTablet,
						bottomMarginTablet,
						leftMarginTablet,
						rightMarginTablet,
						topMarginMobile,
						bottomMarginMobile,
						leftMarginMobile,
						rightMarginMobile,
						topPaddingMobile,
						bottomPaddingMobile,
						leftPaddingMobile,
						rightPaddingMobile,
						topPaddingTablet,
						bottomPaddingTablet,
						leftPaddingTablet,
						rightPaddingTablet,
						leftPaddingDesktop: leftPadding,
						rightPaddingDesktop: rightPadding,
						topPaddingDesktop: topPadding,
						bottomPaddingDesktop: bottomPadding,
						variationSelected: true
					},
					innerBlocks
				);
			},
		},
	],
};

export default transforms;
