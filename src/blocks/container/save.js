/**
 * BLOCK: Container - Save Block
 */

import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import shapes from './shapes';

export default function save( props ) {
	const {
		block_id,
		contentWidth,
		isBlockRootParent,
		topType,
		topFlip,
		topContentAboveShape,
		bottomType,
		bottomFlip,
		bottomContentAboveShape
	} = props.attributes;

	const topDividerHtml = 'none' !== topType && (
		<div
			className={ classnames(
				'uagb-container__shape',
				'uagb-container__shape-top',
				{ 'uagb-container__shape-flip': topFlip === true },
				{
					'uagb-container__shape-above-content':
						topContentAboveShape === true,
				}
			) }
		>
			{ shapes[ topType ] }
		</div>
	);

	const bottomDividerHtml = 'none' !== bottomType && (
		<div
			className={ classnames(
				'uagb-container__shape',
				'uagb-container__shape-bottom',
				{ 'uagb-container__shape-flip': bottomFlip === true },
				{
					'uagb-container__shape-above-content':
						bottomContentAboveShape === true,
				}
			) }
			data-negative="false"
		>
			{ shapes[ bottomType ] }
		</div>
	);

	return (
		<div
			className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
				isBlockRootParent ? contentWidth : '',
				isBlockRootParent ? 'uagb-is-root-container' : ''
			) }
		>
			{ topDividerHtml }
			<InnerBlocks.Content />
			{ bottomDividerHtml }
		</div>
	);
}
