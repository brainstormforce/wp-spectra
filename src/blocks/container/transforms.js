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
					backgroundImage,
					backgroundSize,
					backgroundRepeat,
					backgroundAttachment,
					backgroundVideoColor,
					backgroundVideo,
					overlayType,
					backgroundImageColor,
					tag,
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
						backgroundImageDesktop : backgroundImage,
						backgroundSizeDesktop : backgroundSize,
						backgroundRepeatDesktop : backgroundRepeat,
						backgroundAttachmentDesktop : backgroundAttachment,
						backgroundVideoColor: backgroundVideoColor || '#00000011',
						backgroundVideo,
						overlayType,
						backgroundImageColor: backgroundImageColor || '#00000000',
						variationSelected: true,
						htmlTag: tag,
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
					backgroundSize,
					backgroundRepeat,
					backgroundAttachment,
					backgroundVideoColor,
					backgroundVideo,
					overlayType,
					backgroundImageColor,
					tag,
					columnsBorderTopLeftRadius,
					columnsBorderTopRightRadius,
					columnsBorderBottomLeftRadius,
					columnsBorderBottomRightRadius,
					columnsBorderStyle,
					columnsBorderColor,
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
				} = attributes;

				const containerWidth = 'full' === align ? 'alignfull' : 'alignwide';
				let innerContainerCustomWidth = null;
				let innerContentWidth = null;

				if ( 'full' === align ) {

					innerContainerCustomWidth = ( 'custom' === contentWidth && 'px' === widthType ) ? width : 1200;

					innerContentWidth = ( 'custom' === contentWidth && 'px' === widthType ) ? 'alignwide' : 'alignfull';
				}

				const innerBlocksTemplate = [];
				const containerChildWidth = ( 100 / columns );
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
							containerBorderTopWidth: borderWidth || columnBorderTopWidth,
							containerBorderBottomWidth: borderWidth || columnBorderBottomWidth,
							containerBorderLeftWidth: borderWidth || columnBorderLeftWidth,
							containerBorderRightWidth: borderWidth || columnBorderRightWidth,
						},
						child?.innerBlocks
					] );

					return child;
				} );

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
						leftPaddingDesktop : leftPadding,
						rightPaddingDesktop : rightPadding,
						topPaddingDesktop : topPadding,
						bottomPaddingDesktop : bottomPadding,
						backgroundImageDesktop : backgroundImage,
						backgroundSizeDesktop : backgroundSize,
						backgroundRepeatDesktop : backgroundRepeat,
						backgroundAttachmentDesktop : backgroundAttachment,
						backgroundVideoColor: backgroundVideoColor || '#00000011',
						backgroundVideo,
						overlayType,
						backgroundImageColor: backgroundImageColor || '#00000000',
						directionDesktop: 'row',
						directionTablet: 'tablet' === stack ? 'column' : 'row',
						directionMobile: 'mobile' === stack ? 'column' : 'row',
						variationSelected: true,
						columnGapDesktop: 0,
						containerBorderTopLeftRadius: borderRadius || columnsBorderTopLeftRadius,
						containerBorderTopRightRadius: borderRadius || columnsBorderTopRightRadius,
						containerBorderBottomLeftRadius: borderRadius || columnsBorderBottomLeftRadius,
						containerBorderBottomRightRadius: borderRadius || columnsBorderBottomRightRadius,
						containerBorderStyle: borderStyle || columnsBorderStyle,
						containerBorderColor: borderColor || columnsBorderColor,
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
	]
};

export default transforms;
