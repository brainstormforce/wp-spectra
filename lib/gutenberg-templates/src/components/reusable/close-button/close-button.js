import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { memo } from '@wordpress/element';

const CloseButton = ( { onSetTogglePopup } ) => {
	return (
		<div
			className="close"
			onClick={ ( ) => {
				onSetTogglePopup();
				document
					.getElementById( 'ast-block-templates-modal-wrap' )
					.classList.remove( 'open' );
				document.body.classList.remove(
					'ast-block-templates-modal-open'
				);
			} }
			role="button"
			tabIndex={ 0 }
			onKeyDown={ ( ) => {
				onSetTogglePopup();
				document
					.getElementById( 'ast-block-templates-modal-wrap' )
					.classList.remove( 'open' );
				document.body.classList.remove(
					'ast-block-templates-modal-open'
				);
			} }
		>
			<i className="dashicons dashicons-no-alt"></i>
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getSitePreview, getCurrentScreen } = select(
			'ast-block-templates'
		);
		return {
			sitePreview: getSitePreview(),
			currentScreen: getCurrentScreen(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { setSitePreview, setTogglePopup } = dispatch(
			'ast-block-templates'
		);
		return {
			setSitePreview,
			onSetTogglePopup: setTogglePopup,
		};
	} )
)( memo( CloseButton ) );
