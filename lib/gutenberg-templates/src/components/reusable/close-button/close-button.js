import { __ } from '@wordpress/i18n';
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo } = wp.element;

const CloseButton = ({ onSetTogglePopup }) => {
	return (
		<div
			className="close"
			onClick={(event) => {
				onSetTogglePopup();
				document
					.getElementById('gutenberg-templates-modal-wrap')
					.classList.remove('open');
				document.body.classList.remove(
					'gutenberg-templates-modal-open'
				);
			}}
		>
			<i className="dashicons dashicons-no-alt"></i>
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const { getSitePreview, getCurrentScreen } = select(
			'gutenberg-templates'
		);
		return {
			sitePreview: getSitePreview(),
			currentScreen: getCurrentScreen(),
		};
	}),
	withDispatch((dispatch) => {
		const { setSitePreview, setTogglePopup, setCurrentScreen } = dispatch(
			'gutenberg-templates'
		);
		return {
			setSitePreview: setSitePreview,
			onSetTogglePopup: setTogglePopup,
		};
	})
)(memo(CloseButton));
