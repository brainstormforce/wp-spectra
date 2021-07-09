import React from 'react';

import './Rectangle.scss';

function RectSkeleton( props ) {
	const { width, height, style } = props;

	return (
		<div
			className="uag-skeleton uag-skeleton--rect uag-skeleton--wave"
			style={ {
				width,
				height,
				...style,
			} }
		></div>
	);
}

export default RectSkeleton;
