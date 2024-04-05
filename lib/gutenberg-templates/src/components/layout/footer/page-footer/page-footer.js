import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { memo, Fragment } from '@wordpress/element';
import ImportPageButton from '../../../reusable/import-page-button/import-page-button';
import { __ } from '@wordpress/i18n';

const PageFooter = ( { pagePreview, setDisplayDynamicPopup } ) => {
	const pageURL = pagePreview[ 'astra-page-url' ]
		? pagePreview[ 'astra-page-url' ]
		: '';
	const isDynamicPage =
		pagePreview[ 'dynamic-page' ] && 'yes' === pagePreview[ 'dynamic-page' ]
			? true
			: false;

	const isPremium = pagePreview[ 'site-pages-type' ] !== 'free' ? true : false;
	let accessURL = '',
		haveAccess = false,
		getProtext = '';

	if ( isPremium && ast_block_template_vars.isPro ) {
		if ( ast_block_template_vars.license_status ) {
			haveAccess = true;
		} else {
			accessURL = ast_block_template_vars.getProURL;
			getProtext = __( 'Unlock Access', 'ast-block-templates' );
		}
	} else if ( isPremium ) {
		accessURL = ast_block_template_vars.getProURL;
		getProtext = __( 'Get Access', 'ast-block-templates' );
	} else {
		haveAccess = true;
	}

	const renderButton = function () {
		if ( haveAccess ) {
			if ( isDynamicPage ) {
				return (
					<button
						className="button button-primary"
						onClick={ () => {
							setDisplayDynamicPopup( true );
						} }
					>
						{ `Import "${ pagePreview.title }" Template` }
					</button>
				);
			}
			return (
				<ImportPageButton
					title={ `Import "${ pagePreview.title }" Template` }
					item={ pagePreview }
				/>
			);
		}
		return (
			<a
				className="button button-primary"
				href={ accessURL }
				target="_blank"
				rel="noreferrer"
			>
				{ getProtext }
				<i className="dashicons dashicons-admin-network"></i>
			</a>
		);
	};

	return (
		<Fragment>
			<a
				className="button"
				href={ pageURL }
				target="_blank"
				rel="noreferrer"
			>
				{ __( 'Preview Site', 'ast-block-templates' ) }
				<i className="dashicons dashicons-external"></i>
			</a>
			{ renderButton() }
		</Fragment>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getImportItemInfo, getCurrentScreen, getPagePreview } = select(
			'ast-block-templates'
		);

		return {
			importItemInfo: getImportItemInfo(),
			pagePreview: getPagePreview(),
			currentScreen: getCurrentScreen(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			setPagePreview,
			setFullWidthPagePreview,
			setCurrentScreen,
			setDisplayDynamicPopup,
		} = dispatch( 'ast-block-templates' );
		return {
			setDisplayDynamicPopup,
			setPagePreview,
			updateFullWidthPagePreview( fullWidthPagePreview ) {
				setFullWidthPagePreview( fullWidthPagePreview );
				setCurrentScreen( 'full-width-page-preview' );
			},
		};
	} )
)( memo( PageFooter ) );
