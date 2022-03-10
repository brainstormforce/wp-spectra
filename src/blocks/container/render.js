import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import React from 'react';

const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		className,
		deviceType,
	} = props;

	const {
		block_id,
	} = attributes;

	const direction = attributes[ 'direction' + deviceType ];

	const moverDirection = 'row' === direction ? 'horizontal' : 'vertical';

	return (
		<div
			className={ classnames(
				className,
				`uagb-block-${ block_id }`
			) }
			key = { block_id }
		>
			<InnerBlocks
				__experimentalMoverDirection={ moverDirection }
			/>
		</div>
	);
};
export default React.memo( Render );
