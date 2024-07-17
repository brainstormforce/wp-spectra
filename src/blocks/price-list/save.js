/**
 * BLOCK: Column - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';

import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const { block_id, className, columns, tcolumns, mcolumns } = props.attributes;

	return (
		<div
			className={ classnames(
				className,
				`uagb-block-${ block_id }`,
				`uagb-rm__desk-column-${ columns }`,
				`uagb-rm__tablet-column-${ tcolumns }`,
				`uagb-rm__mobile-column-${ mcolumns }`
			) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
