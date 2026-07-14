import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import attributes from './attributes';
import attributesV2_3_5 from './deprecated/v2_3_5/attributes';
import saveV2_3_5 from './deprecated/v2_3_5/save';

const deprecated = [
	{
		attributes,
		save( props ) {
			const { block_id } = props.attributes;

			const blockProps = useBlockProps.save( {
				className: classnames( 'uagb-slider-child-wrap', 'swiper-slide', `uagb-block-${ block_id }` ),
			} );

			return (
				<>
					<div { ...blockProps } key={ block_id }>
						<div className="swiper-content">
							<InnerBlocks.Content />
						</div>
					</div>
				</>
			);
		},
	},
	{
		attributes: attributesV2_3_5,
		save: saveV2_3_5,
	},
];

export default deprecated;
