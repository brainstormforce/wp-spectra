/**
 * BLOCK: Buttons - Save Block
 */

import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const { className } = props;
	const { block_id, buttonSize, buttonSizeTablet, buttonSizeMobile } = props.attributes;

	return (
		<div
			className={ classnames(
				className,
				'uagb-buttons__outer-wrap',
				`uagb-btn__${ buttonSize }-btn`,
				`uagb-btn-tablet__${ buttonSizeTablet }-btn`,
				`uagb-btn-mobile__${ buttonSizeMobile }-btn`,
				`uagb-block-${ block_id }`
			) }
		>
			<div className="uagb-buttons__wrap uagb-buttons-layout-wrap">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
