/**
 * BLOCK: Column - Save Block
 */

// Import block dependencies and components.
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;

	const { block_id } = attributes;

	const blockProps = useBlockProps.save( {
		className: `uagb-block-${ block_id }`,
	} );

	return (
		<div { ...blockProps }>
			<div className="uagb-icon-list__wrap">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
