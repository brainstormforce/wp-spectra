import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import React from 'react';
import shapes from './shapes';

const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		className,
		deviceType,
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
console.log(topType);
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
				className,
				`uagb-block-${ block_id }`
			) }
			key = { block_id }
		>
			{ topDividerHtml }
			<InnerBlocks
				__experimentalMoverDirection={ moverDirection }
			/>
			{ bottomDividerHtml }
		</div>
	);
};
export default React.memo( Render );
