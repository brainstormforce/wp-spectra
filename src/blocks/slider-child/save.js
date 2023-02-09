/**
 * BLOCK: Slider child - Save Block
 */

import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		block_id,
	} = props.attributes;

	const blockProps = useBlockProps.save( {
		className: classnames(
			'uagb-slider-child-wrap',
			'swiper-slide',
			`uagb-block-${ block_id }`
		)
	} );

	return (
		<>
			<div
				{...blockProps}
				key = { block_id }
			>
				<div className='swiper-content' >
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}
