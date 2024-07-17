import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import classnames from 'classnames';

export default function save( props ) {
	const { attributes } = props;

	const { block_id, displayArrows, displayDots } = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div
			key={ block_id }
			className={ classnames( blockProps.className, `uagb-block-${ block_id }`, 'uagb-slider-container' ) }
		>
			<div className="uagb-slides uagb-swiper">
				<div className="swiper-wrapper">
					<InnerBlocks.Content />
				</div>
			</div>
			{ displayDots && <div className="swiper-pagination"></div> }

			{ displayArrows && (
				<>
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</>
			) }
		</div>
	);
}
