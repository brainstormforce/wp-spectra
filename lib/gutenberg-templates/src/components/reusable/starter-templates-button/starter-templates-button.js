import { __ } from '@wordpress/i18n';
const { createPortal, memo } = wp.element;
const { compose } = wp.compose;
const { withDispatch } = wp.data;

const StarterTemplatesButton = ({ onSetTogglePopup }) => {
	return createPortal(
		<button
			onClick={onSetTogglePopup}
			id="gutenberg-templates-button"
			className="button button-primary"
		>
			<img
				src={`${GutenbergTemplatesVars.uri}dist/starter-template-logo.svg`}
				className="logo"
			/>
			{__('Starter Templates')}{' '}
		</button>,
		document.querySelector('.edit-post-header-toolbar')
	);
};

export default compose(
	withDispatch((dispatch) => {
		const { setTogglePopup } = dispatch('gutenberg-templates');
		return {
			onSetTogglePopup: setTogglePopup,
		};
	})
)(memo(StarterTemplatesButton));
