import React from 'react';
import { InnerBlocks } from '@wordpress/block-editor';

const Render = ( props ) => {
	props = props.parentProps;
	const { attributes } = props;
	const { tabActive, id } = attributes;
	return (
		<div
			className={ `uagb-tabs__body-container uagb-inner-tab-${ id }` }
			style={ { display: id === tabActive ? 'block' : 'none' } }
			aria-labelledby={ `uagb-tabs__tab${ id }` }
		>
			<InnerBlocks
				template={[ [ 'core/paragraph', { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' } ] ]}
				templateLock={false}
			/>
		</div>
	);
};
export default React.memo( Render );
