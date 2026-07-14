/**
 * BLOCK: Buttons - Save Block
 */

import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { block_id, buttonSize, buttonSizeTablet, buttonSizeMobile, inheritGap, } = props.attributes;

	const inheritGapClass = inheritGap ? 'is-layout-flex' : '';

	const blockProps = useBlockProps.save( {
		className: classnames(
			'uagb-buttons__outer-wrap',
			`uagb-btn__${ buttonSize }-btn`,
			`uagb-btn-tablet__${ buttonSizeTablet }-btn`,
			`uagb-btn-mobile__${ buttonSizeMobile }-btn`,
			`uagb-block-${ block_id }`,
		),
	} );

	return (
		<div
			{ ...blockProps }
		>
			<div className={`uagb-buttons__wrap uagb-buttons-layout-wrap ${inheritGapClass}`}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
