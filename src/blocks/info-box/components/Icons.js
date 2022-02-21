import renderSVG from '@Controls/renderIcon';

const Icon = ( props ) => {
	const { attributes } = props;

	return (
		<div className="uagb-ifb-icon-wrap">
		{ renderSVG( attributes.icon ) }
		</div>
	);
};
export default Icon;
