import renderSVG from '@Controls/renderIcon';

const Icon = ( props ) => {
	const { attributes } = props;

	return (
		<>
		{ ( attributes.showIcon ) && (
		<div className="uagb-ifb-icon-wrap">
		{ renderSVG( attributes.icon ) }
		</div>
		)}
		</>
	);
};
export default Icon;
