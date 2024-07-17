/**
 * BLOCK: Tabs Child - Save Block
 */

import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;
	const { id } = attributes;

	return (
		<div
			className={ `uagb-tabs__body-container uagb-inner-tab-${ id }` }
			aria-labelledby={ `uagb-tabs__tab${ id }` }
		>
			<InnerBlocks.Content />
		</div>
	);
}
