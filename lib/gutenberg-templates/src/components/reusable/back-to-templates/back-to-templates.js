import { __ } from '@wordpress/i18n';

import './back-to-templates.scss';

const BackToTemplates = ( { afterClick } ) => {
	return (
		<span>
			<span
				className="back-to-templates"
				onClick={ ( event ) => {
					if ( afterClick ) {
						afterClick( event );
					}
				} }
				role="button"
				tabIndex={ 0 }
				onKeyDown={ ( event ) => {
					if ( afterClick ) {
						afterClick( event );
					}
				} }
			>
				{ __( 'Back to Templates', 'ast-block-templates' ) }
			</span>
		</span>
	);
};

export default BackToTemplates;
