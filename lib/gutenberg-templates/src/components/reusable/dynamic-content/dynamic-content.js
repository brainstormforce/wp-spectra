import { sprintf, __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { Fragment, memo, useEffect } from '@wordpress/element';
import ImportPageButton from '../../../components/reusable/import-page-button/import-page-button';
import './dynamic-content.scss';
import { STORE_KEY } from '../../../store';

const DynamicContent = ( {
	pagePreview,
	displayDynamicPopup,
	setDisplayDynamicPopup,
} ) => {
	const displayClass = false === displayDynamicPopup ? 'hide' : '';

	const closePoup = () => {
		setDisplayDynamicPopup( false );
	};

	const closePopupOverlay = ( event ) => {
		if (
			event.target ===
			document.querySelector( '.ast-block-templates-popup-wrap' )
		) {
			closePoup();
		}
	};

	useEffect( () => {
		document.addEventListener( 'click', closePopupOverlay );
		return () => {
			document.removeEventListener( 'click', closePopupOverlay );
		};
	} );

	return (
		<Fragment>
			<div className={ `ast-block-templates-popup-wrap ${ displayClass }` }>
				<div className="ast-block-templates-popup">
					<div className="ast-block-templates-popup-header">
						<h3 className="ast-block-templates-popup-heading">
							{ __( 'Heads Up!', 'ast-block-templates' ) }
						</h3>
						<span
							className="ast-block-templates-popup-close-icon"
							onClick={ closePoup }
							role="button"
							tabIndex={ 0 }
							onKeyDown={ closePoup }
						>
							<span className="dashicons close dashicons-no-alt"></span>
						</span>
					</div>
					<div className="ast-block-templates-popup-content">
						<p>
							{ __(
								'The page template you are about to import contains a dynamic widget/module. Please note this dynamic data will not be available with the imported page.',
								'ast-block-templates'
							) }
						</p>
						<p>
							{ __(
								'You will need to add it manually on the page.',
								'ast-block-templates'
							) }
						</p>
					</div>
					<div className="ast-block-templates-popup-footer">
						<ImportPageButton
							title={ sprintf(
								/* translators: %s: Page Title */
								__(
									'Skip & Import "%s" Page',
									'ast-block-templates'
								),
								pagePreview.title
							) }
							item={ pagePreview }
						/>
						<div className="button" onClick={ closePoup } role="button" tabIndex={ 0 } onKeyDown={ closePoup } >
							{ __( 'Cancel', 'ast-block-templates' ) }
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getDisplayDynamicPopup, getPagePreview } = select( STORE_KEY );
		return {
			pagePreview: getPagePreview(),
			displayDynamicPopup: getDisplayDynamicPopup(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { setDisplayDynamicPopup } = dispatch( 'ast-block-templates' );
		return {
			setDisplayDynamicPopup,
		};
	} )
)( memo( DynamicContent ) );
