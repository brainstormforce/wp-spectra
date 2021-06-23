import React from 'react';

import './Text.scss';

function TextSkeleton( props ) {
	const { animation = 'wave', fontSize, width, style } = props;

	return (
		<div
			className="uag-skeleton uag-skeleton--text uag-skeleton--wave"
			style={ {
				fontSize,
				width,
				...style,
			} }
		></div>
	);
}

export default TextSkeleton;
