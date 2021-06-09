import React from 'react';

import './ToastContainer.scss';

function ToastContainer( props ) {
	const { hasToasts } = props;

	return (
		<div
			className={ `uag-toast-container` }
			style={
				{
					// padding: 0, //gutter ? gutter : 0,
					// pointerEvents: hasToasts ? null : 'none',
					// ...placementsCss[ placement ],
				}
			}
		>
			{ props.children }
		</div>
	);
}

export default ToastContainer;
