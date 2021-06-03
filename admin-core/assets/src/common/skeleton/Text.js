import React from 'react';

import './Text.scss';

function TextSkeleton( props ) {
	const { animation = 'wave', fontSize, width, style } = props;

	return (
		<div
			className="wcf-skeleton wcf-skeleton--text wcf-skeleton--wave"
			style={ {
				fontSize,
				width,
				...style,
			} }
		></div>
	);
}

export default TextSkeleton;
