import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import React from 'react';
import shapes from './shapes';
import { select } from '@wordpress/data';

const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		className,
		deviceType,
		clientId
	} = props;

	const {
		block_id,
		topType,
		topFlip,
		topContentAboveShape,
		bottomType,
		bottomFlip,
		bottomContentAboveShape
	} = attributes;

	const direction = attributes[ 'direction' + deviceType ];

	const moverDirection = 'row' === direction ? 'horizontal' : 'vertical';

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

	const { getBlockOrder } = select( 'core/block-editor' );

	const hasChildBlocks = getBlockOrder( clientId ).length > 0;

	return (
		<div
			className={ classnames(
				className,
				`uagb-block-${ block_id }`
			) }
			key = { block_id }
		>
			{ topDividerHtml }
			<InnerBlocks
				__experimentalMoverDirection={ moverDirection }
				renderAppender = { hasChildBlocks
				? undefined
				: InnerBlocks.ButtonBlockAppender }
			/>
			{ bottomDividerHtml }
		</div>
	);
};
export default React.memo( Render );
