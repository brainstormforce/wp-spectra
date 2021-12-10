import renderSVG from '@Controls/renderIcon';

const Icon = ( props ) => {
	const { attributes } = props;

	return  renderSVG( attributes.icon );
};
export default Icon;
