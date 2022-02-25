/**
 * BLOCK: Container - Save Block
 */

import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		block_id
	} = props.attributes;

	return (
		<div
			className={ classnames(
				props.className,
				`uagb-block-${ block_id }`
			) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
