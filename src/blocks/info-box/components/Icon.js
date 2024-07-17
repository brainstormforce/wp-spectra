import renderSVG from '@Controls/deprecatedRenderIcon';

const Icon = ( props ) => {
	const { attributes } = props;

	return (
		<div className="uagb-ifb-image-icon-content uagb-ifb-imgicon-wrap">
			<div className="uagb-ifb-icon-wrap">
				<span className="uagb-ifb-icon">{ renderSVG( attributes.icon ) }</span>
			</div>
		</div>
	);
};
export default Icon;
