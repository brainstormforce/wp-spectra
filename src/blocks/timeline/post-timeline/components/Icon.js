import renderSVG from '@Controls/renderIcon';
import { memo } from '@wordpress/element';
const Icon = ( props ) => {
	const { attributes } = props;

	return (
		<div className="uagb-timeline__marker uagb-timeline__out-view-icon uagb-timeline__icon-new">
			{ renderSVG( attributes.icon ) ? renderSVG( attributes.icon ) : <svg xmlns="" viewBox="0 0 256 512"></svg> }
		</div>
	);
};

export default memo( Icon );
