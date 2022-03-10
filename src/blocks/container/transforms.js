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
	],
};

export default transforms;
