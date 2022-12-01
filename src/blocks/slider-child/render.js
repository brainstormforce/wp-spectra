import { useInnerBlocksProps } from '@wordpress/block-editor';
import React from 'react';


const Render = () => {

	// Only parent blocks.
	const parentBlocks = wp.blocks.getBlockTypes().filter( function( item ) { 
		return ! item.parent
	} );

	const TEMPLATE = [
		[ 'uagb/container', { variationSelected: true }] 
	];

	// Hide slider block.
	const ALLOWED_BLOCKS = parentBlocks.map( block => block.name ).filter( blockName => [ 'uagb/slider', 'uagb/post-carousel', 'uagb/testimonial' ].indexOf( blockName ) === -1 );

	const innerBlocksProps = useInnerBlocksProps(
        {
			className: `swiper-content`,
			slot: 'container-start'
		},
        {
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE 
		}
    );

	return (
		<div
			{ ...innerBlocksProps }
		/>
	);
};

export default React.memo( Render );
