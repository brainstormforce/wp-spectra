import renderSVG from '@Controls/renderIcon';

const Icon = ( props ) => {
	const { attributes } = props;

	return (
		<div className="uagb-timeline__marker uagb-timeline__out-view-icon">
			<span className="uagb-timeline__icon-new uagb-timeline__out-view-icon">
				{ renderSVG( attributes.icon ) }
			</span>
		</div>
	);
};

export default Icon;
