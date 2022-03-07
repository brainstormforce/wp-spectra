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
					gradient
				} = attributes;
// console.log(attributes);
// console.log(innerBlocks);

				let contentWidth = align ? `align${align}` : 'default';
				let bgColor = backgroundColor ? backgroundColor : style?.color?.background ? style?.color?.background : null;

				let backgroundType = ( gradient || style?.color?.gradient ) ? 'gradient' : ( bgColor || style?.color?.background ) ? 'color' : 'none';

				const innerBlocksTemplate = [];
				innerBlocks.map((child) => {
					console.log(child);
				});
				return createBlock(
					'uagb/container',
					{
						contentWidth: contentWidth,
						backgroundType: backgroundType,
						backgroundColor: bgColor,
						gradientValue: gradient || style?.color?.gradient,
						variationSelected: true
					},
					createBlocksFromInnerBlocksTemplate( innerBlocksTemplate )
				);


			},
		},
	],
};

export default transforms;
