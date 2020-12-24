const { compose } = wp.compose;
const { withDispatch } = wp.data;
const { memo } = wp.element;

import './logo.scss';

const Logo = ({ setCurrentScreen }) => {
	return (
		<div
			className="logo-wrap"
			onClick={() => setCurrentScreen('all-sites-grid')}
		>
			<img
				src={`${GutenbergTemplatesVars.uri}dist/logo.svg`}
				className="logo"
			/>
		</div>
	);
};

export default compose(
	withDispatch((dispatch) => {
		const { setCurrentScreen } = dispatch('gutenberg-templates');
		return {
			setCurrentScreen: setCurrentScreen,
		};
	})
)(memo(Logo));
