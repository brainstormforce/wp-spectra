import renderSVG from '@Controls/renderIcon';
import React from 'react';
const Icon = ( props ) => {
	const { attributes } = props;

	return (
		<div className="uagb-timeline__marker uagb-timeline__out-view-icon uagb-timeline__icon-new">
			{ renderSVG( attributes.icon ) }
		</div>
	);
};

export default React.memo( Icon );
