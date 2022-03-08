/**
 * WordPress dependencies
 */
 import {
	createBlock,
	createBlocksFromInnerBlocksTemplate,
} from '@wordpress/blocks';

import { select } from '@wordpress/data';

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

				let contentWidth = align ? `align${align}` : 'default';
				let bgColor = backgroundColor ? backgroundColor : style?.color?.background ? style?.color?.background : null;

				let backgroundType = ( gradient || style?.color?.gradient ) ? 'gradient' : ( bgColor || style?.color?.background ) ? 'color' : 'none';

				return createBlock(
					'uagb/container',
					{
						contentWidth: contentWidth,
						backgroundType: backgroundType,
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

				let contentWidth = align ? `align${align}` : 'default';
				let bgColor = backgroundColor ? backgroundColor : style?.color?.background ? style?.color?.background : null;

				let backgroundType = ( gradient || style?.color?.gradient ) ? 'gradient' : ( bgColor || style?.color?.background ) ? 'color' : 'none';

				let innerBlocksTemplate = [];
				let containerChildWidth = ( 100 / innerBlocks.length );

				innerBlocks.map((child) => {

					let bgColor = child?.attributes?.backgroundColor ? child?.attributes?.backgroundColor : child?.attributes?.style?.color?.background ? child?.attributes?.style?.color?.background : null;

					let backgroundType = ( child?.attributes?.gradient || child?.attributes?.style?.color?.gradient ) ? 'gradient' : ( bgColor || child?.attributes?.style?.color?.background ) ? 'color' : 'none';

					let width = child?.attributes?.width ? child?.attributes?.width : containerChildWidth;

					innerBlocksTemplate.push([
						'uagb/container',
						{
							widthDesktop: width,
							backgroundType: backgroundType,
							backgroundColor: bgColor,
							gradientValue: gradient || style?.color?.gradient
						},
						child?.innerBlocks
					]);

					return child;
				});

				return createBlock(
					'uagb/container',
					{
						contentWidth: contentWidth,
						backgroundType: backgroundType,
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
