/**
 * BLOCK: Container - Save Block
 */

import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		block_id,
		contentWidth,
		isBlockRootParent
	} = props.attributes;

	return (
		<div
			className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
				isBlockRootParent ? contentWidth : '',
				isBlockRootParent ? 'uagb-is-root-container' : ''
			) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
