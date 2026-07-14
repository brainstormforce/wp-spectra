/**
 * BLOCK: Tabs Child - Save Block
 */

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;
	const { id } = attributes;

	const blockProps = useBlockProps.save( {
		className: `uagb-tabs__body-container uagb-inner-tab-${ id }`,
	} );

	return (
		<div
			{ ...blockProps }
			aria-labelledby={ `uagb-tabs__tab${ id }` }
		>
			<InnerBlocks.Content />
		</div>
	);
}
