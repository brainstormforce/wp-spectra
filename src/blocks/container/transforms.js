/**
 * WordPress dependencies
 */
import { createBlock, createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';

// A function that converts text-based image position values to the
// new container's object based image position values.
function getImageBackgroundPosition( oldImagePosition ) {
	switch ( oldImagePosition ) {
		case 'left top':
			return { x: 0, y: 0 };
		case 'center top':
			return { x: 0.5, y: 0 };
		case 'right top':
			return { x: 1, y: 0 };

		case 'left center':
			return { x: 0, y: 0.5 };
		case 'center center':
			return { x: 0.5, y: 0.5 };
		case 'right center':
			return { x: 1, y: 0.5 };

		case 'left bottom':
			return { x: 0, y: 1 };
		case 'center bottom':
			return { x: 0.5, y: 1 };
		case 'right bottom':
			return { x: 1, y: 1 };

		default:
			return { x: 0.5, y: 0.5 };
	}
}

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core/group' ],
			priority: 1,
			transform: ( attributes, innerBlocks ) => {
				const { align, backgroundColor, style, gradient } = attributes;

				const contentWidth = align ? `align${ align }` : 'default';
				// eslint-disable-next-line no-nested-ternary
				const bgColor = backgroundColor
					? backgroundColor
					: style?.color?.background
					? style?.color?.background
					: null;

				const backgroundType =
					// eslint-disable-next-line no-nested-ternary
					gradient || style?.color?.gradient
						? 'gradient'
						: bgColor || style?.color?.background
						? 'color'
						: 'none';

				return createBlock(
					'uagb/container',
					{
						contentWidth,
						backgroundType,
						backgroundColor: bgColor,
						gradientValue: gradient || style?.color?.gradient,
						variationSelected: true,
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
				const { align, backgroundColor, style, gradient, isStackedOnMobile } = attributes;

				const contentWidth = align ? `align${ align }` : 'default';
				// eslint-disable-next-line no-nested-ternary
				const bgColor = backgroundColor
					? backgroundColor
					: style?.color?.background
					? style?.color?.background
					: null;

				const backgroundType =
					// eslint-disable-next-line no-nested-ternary
					gradient || style?.color?.gradient
						? 'gradient'
						: bgColor || style?.color?.background
						? 'color'
						: 'none';

				const innerBlocksTemplate = [];
				const containerChildWidth = 100 / innerBlocks.length;

				innerBlocks.map( ( child ) => {
					// eslint-disable-next-line no-nested-ternary
					const bgColorChild = child?.attributes?.backgroundColor
						? child?.attributes?.backgroundColor
						: child?.attributes?.style?.color?.background
						? child?.attributes?.style?.color?.background
						: null;

					const backgroundTypeChild =
						// eslint-disable-next-line no-nested-ternary
						child?.attributes?.gradient || child?.attributes?.style?.color?.gradient
							? 'gradient'
							: bgColorChild || child?.attributes?.style?.color?.background
							? 'color'
							: 'none';

					const width = child?.attributes?.width ? child?.attributes?.width : containerChildWidth;

					innerBlocksTemplate.push( [
						'uagb/container',
						{
							widthDesktop: width,
							backgroundTypeChild,
							backgroundColor: bgColorChild,
							gradientValue: gradient || style?.color?.gradient,
						},
						child?.innerBlocks,
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
						variationSelected: true,
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
					overallBorderStyle,
					overallBorderColor,
					overallBorderHColor,
					overallBorderTopLeftRadius,
					overallBorderTopRightRadius,
					overallBorderBottomLeftRadius,
					overallBorderBottomRightRadius,
					overallBorderTopWidth,
					overallBorderRightWidth,
					overallBorderLeftWidth,
					overallBorderBottomWidth,
					topMargin,
					bottomMargin,
					leftMargin,
					rightMargin,
					leftPadding,
					rightPadding,
					topPadding,
					bottomPadding,
					backgroundImage,
					backgroundSize,
					backgroundRepeat,
					backgroundAttachment,
					backgroundVideoColor,
					backgroundVideo,
					overlayType,
					backgroundImageColor,
					tag,
					backgroundPosition,
				} = attributes;

				const containerWidth = 'full_width' === contentWidth ? 'alignfull' : 'alignwide';
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
						containerBorderStyle: overallBorderStyle,
						containerBorderTopLeftRadius: overallBorderTopLeftRadius,
						containerBorderTopRightRadius: overallBorderTopRightRadius,
						containerBorderBottomLeftRadius: overallBorderBottomLeftRadius,
						containerBorderBottomRightRadius: overallBorderBottomRightRadius,
						containerBorderTopWidth: overallBorderTopWidth,
						containerBorderRightWidth: overallBorderRightWidth,
						containerBorderLeftWidth: overallBorderLeftWidth,
						containerBorderBottomWidth: overallBorderBottomWidth,
						containerBorderColor: overallBorderColor,
						containerBorderHColor: overallBorderHColor,
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
						backgroundImageDesktop: backgroundImage,
						backgroundSizeDesktop: backgroundSize,
						backgroundRepeatDesktop: backgroundRepeat,
						backgroundAttachmentDesktop: backgroundAttachment,
						backgroundVideoColor: backgroundVideoColor || '#00000011',
						backgroundVideo,
						overlayType:
							// eslint-disable-next-line no-nested-ternary
							overlayType === 'color' && backgroundImageColor
								? overlayType
								: overlayType === 'gradient'
								? 'gradient'
								: 'none',
						backgroundImageColor: backgroundImageColor || '#00000000',
						variationSelected: true,
						htmlTag: tag,
						backgroundPositionDesktop: getImageBackgroundPosition( backgroundPosition ),
					},
					innerBlocks
				);
			},
		},
		{
			type: 'block',
			blocks: [ 'uagb/columns' ],
			priority: 1,
			transform: ( attributes, innerBlocks ) => {
				const {
					backgroundType,
					backgroundColor,
					widthType,
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
					topMarginDesktop,
					bottomMarginDesktop,
					leftMarginDesktop,
					rightMarginDesktop,
					leftPadding,
					rightPadding,
					topPadding,
					bottomPadding,
					stack,
					align,
					width,
					columns,
					backgroundImage,
					backgroundPosition,
					backgroundSize,
					backgroundRepeat,
					backgroundAttachment,
					backgroundVideoColor,
					backgroundVideo,
					backgroundImageColor,
					tag,
					columnsBorderTopLeftRadius,
					columnsBorderTopRightRadius,
					columnsBorderBottomLeftRadius,
					columnsBorderBottomRightRadius,
					columnsBorderStyle,
					columnsBorderColor,
					columnsBorderHColor,
					columnsBorderTopWidth,
					columnsBorderBottomWidth,
					columnsBorderLeftWidth,
					columnsBorderRightWidth,
					// Shape Divider Top
					topType,
					topColor,
					topWidth,
					topHeight,
					topHeightTablet,
					topHeightMobile,
					topFlip,
					topContentAboveShape,
					// Shape Divider Bottom
					bottomType,
					bottomColor,
					bottomWidth,
					bottomHeight,
					bottomHeightTablet,
					bottomHeightMobile,
					bottomFlip,
					bottomContentAboveShape,
					// Directions
					reverseMobile,
					reverseTablet,
				} = attributes;

				const containerWidth = 'full' === align ? 'alignfull' : 'alignwide';
				let innerContainerCustomWidth = null;
				let innerContentWidth = null;

				if ( 'full' === align ) {
					innerContainerCustomWidth = 'custom' === contentWidth && 'px' === widthType ? width : 1200;

					innerContentWidth = 'custom' === contentWidth && 'px' === widthType ? 'alignwide' : 'alignfull';
				}

				const innerBlocksTemplate = [];
				const containerChildWidth = 100 / columns;
				/* eslint-disable no-shadow */
				innerBlocks.map( ( child ) => {
					const {
						backgroundType,
						backgroundColor,
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
						gradientValue,
						borderStyle,
						borderWidth,
						borderColor,
						columnBorderHColor,
						borderHoverColor,
						topMargin,
						bottomMargin,
						leftMargin,
						rightMargin,
						leftPadding,
						rightPadding,
						topPadding,
						bottomPadding,
						colWidth,
						columnBorderTopLeftRadius,
						columnBorderTopRightRadius,
						columnBorderBottomLeftRadius,
						columnBorderBottomRightRadius,
						columnBorderStyle,
						columnBorderColor,
						columnBorderTopWidth,
						columnBorderBottomWidth,
						columnBorderLeftWidth,
						columnBorderRightWidth,
						backgroundImage,
						backgroundPosition,
						backgroundAttachment,
						backgroundRepeat,
						backgroundSize,
						backgroundImageColor,
					} = child?.attributes;

					const width = colWidth ? colWidth : containerChildWidth;
					/* eslint-enable no-shadow */
					innerBlocksTemplate.push( [
						'uagb/container',
						{
							widthDesktop: width,
							backgroundType,
							backgroundColor,
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
							gradientValue,
							borderStyle,
							borderWidth,
							borderColor,
							borderHoverColor,
							topMarginDesktop: topMargin,
							bottomMarginDesktop: bottomMargin,
							leftMarginDesktop: leftMargin,
							rightMarginDesktop: rightMargin,
							leftPaddingDesktop: leftPadding,
							rightPaddingDesktop: rightPadding,
							topPaddingDesktop: topPadding,
							bottomPaddingDesktop: bottomPadding,
							containerBorderTopLeftRadius: borderRadius || columnBorderTopLeftRadius,
							containerBorderTopRightRadius: borderRadius || columnBorderTopRightRadius,
							containerBorderBottomLeftRadius: borderRadius || columnBorderBottomLeftRadius,
							containerBorderBottomRightRadius: borderRadius || columnBorderBottomRightRadius,
							containerBorderStyle: borderStyle || columnBorderStyle,
							containerBorderColor: borderColor || columnBorderColor,
							containerBorderHColor: columnBorderHColor,
							containerBorderTopWidth: borderWidth || columnBorderTopWidth,
							containerBorderBottomWidth: borderWidth || columnBorderBottomWidth,
							containerBorderLeftWidth: borderWidth || columnBorderLeftWidth,
							containerBorderRightWidth: borderWidth || columnBorderRightWidth,
							backgroundImageDesktop: backgroundImage,
							backgroundPositionDesktop: getImageBackgroundPosition( backgroundPosition ),
							backgroundAttachmentDesktop: backgroundAttachment,
							backgroundRepeatDesktop: backgroundRepeat,
							backgroundSizeDesktop: backgroundSize,
							backgroundImageColor,
							overlayType: backgroundImageColor ? 'color' : 'none',
							alignItemsDesktop: 'flex-start',
						},
						child?.innerBlocks,
					] );

					return child;
				} );

				const getReverseColMobile = reverseTablet || reverseMobile ? 'column-reverse' : 'column';
				const getReverseRowMobile = reverseTablet || reverseMobile ? 'row-reverse' : 'row';

				const getReverseColTablet = reverseTablet ? 'column-reverse' : 'column';
				const getReverseRowTablet = reverseTablet ? 'row-reverse' : 'row';

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
						backgroundImageDesktop: backgroundImage,
						backgroundPositionDesktop: getImageBackgroundPosition( backgroundPosition ),
						backgroundSizeDesktop: backgroundSize,
						backgroundRepeatDesktop: backgroundRepeat,
						backgroundAttachmentDesktop: backgroundAttachment,
						backgroundVideoColor: backgroundVideoColor || '#00000011',
						backgroundVideo,
						overlayType: backgroundImageColor ? 'color' : 'none',
						backgroundImageColor: backgroundImageColor || '#00000000',
						directionDesktop: 'row',
						directionTablet: 'tablet' === stack ? getReverseColTablet : getReverseRowTablet,
						directionMobile: 'mobile' === stack ? getReverseColMobile : getReverseRowMobile,
						variationSelected: true,
						columnGapDesktop: 0,
						containerBorderTopLeftRadius: borderRadius || columnsBorderTopLeftRadius,
						containerBorderTopRightRadius: borderRadius || columnsBorderTopRightRadius,
						containerBorderBottomLeftRadius: borderRadius || columnsBorderBottomLeftRadius,
						containerBorderBottomRightRadius: borderRadius || columnsBorderBottomRightRadius,
						containerBorderStyle: borderStyle || columnsBorderStyle,
						containerBorderColor: borderColor || columnsBorderColor,
						containerBorderHColor: columnsBorderHColor,
						containerBorderTopWidth: borderWidth || columnsBorderTopWidth,
						containerBorderBottomWidth: borderWidth || columnsBorderBottomWidth,
						containerBorderLeftWidth: borderWidth || columnsBorderLeftWidth,
						containerBorderRightWidth: borderWidth || columnsBorderRightWidth,
						htmlTag: tag,
						// Shape Divider Top
						topType,
						topColor,
						topWidth,
						topHeight,
						topHeightTablet,
						topHeightMobile,
						topFlip,
						topContentAboveShape,
						// Shape Divider Bottom
						bottomType,
						bottomColor,
						bottomWidth,
						bottomHeight,
						bottomHeightTablet,
						bottomHeightMobile,
						bottomFlip,
						bottomContentAboveShape,
					},
					createBlocksFromInnerBlocksTemplate( innerBlocksTemplate )
				);
			},
		},
	],
};

export default transforms;
