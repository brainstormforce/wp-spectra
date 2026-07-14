/**
 * BLOCK: Column - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { block_id, social_layout } = props.attributes;

	const blockProps = useBlockProps.save( {
		className: classnames(
			'uagb-social-share__outer-wrap',
			`uagb-social-share__layout-${ social_layout }`,
			`uagb-block-${ block_id }`
		),
	} );

	return (
		<div
			{ ...blockProps }
		>
			<InnerBlocks.Content />
		</div>
	);
}
