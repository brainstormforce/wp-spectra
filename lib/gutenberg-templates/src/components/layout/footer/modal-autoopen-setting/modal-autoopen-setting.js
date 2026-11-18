import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { useRef } from '@wordpress/element';

import './modal-autoopen-setting.scss';

import { CheckboxControl } from '@wordpress/components';

const ModalAutoOpenSetting = ( { autoOpenDesignLibrary, setAutoOpenDesignLibrary } ) => {
	const saveTimeoutRef = useRef( null );

	const handleToggleChange = ( newValue ) => {
		// Update Redux state immediately for UI responsiveness (optimistic update)
		setAutoOpenDesignLibrary( newValue );

		// Clear any existing timeout for reducing multiple API calls.
		if ( saveTimeoutRef.current ) {
			clearTimeout( saveTimeoutRef.current );
		}

		// Debounce API call - only fires after 500ms of no further changes
		saveTimeoutRef.current = setTimeout( () => {
			const formData = new FormData();
			formData.append( 'action', 'ast_block_templates_save_auto_open_setting' );

			formData.append( 'auto_open', newValue );
			formData.append( 'nonce', ast_block_template_vars._ajax_nonce );

			fetch( ast_block_template_vars.ajax_url, {
				method: 'POST',
				body: formData,
			} )
			.then( ( response ) => response.json() )
			.then( ( data ) => {
				if ( ! data.success ) {
					console.error( 'Failed to save auto-open setting:', data.data );
				}
			} )
			.catch( ( error ) => {
				console.error( 'Error saving auto-open setting:', error );
			} );
		}, 1000 );
	};

	return (
		<div className="modal-autoopen-setting">
			<div className="auto-open-toggle-wrapper">
				<CheckboxControl
					label={ __( 'Always open Design Library when creating new pages', 'ast-block-templates' ) }
					checked={ autoOpenDesignLibrary }
					onChange={ handleToggleChange }
					id="auto-open-design-library"
				/>
			</div>
		</div>
    );
};

export default compose( [
	withSelect( ( select ) => {
		return {
			autoOpenDesignLibrary: select( 'ast-block-templates' ).getAutoOpenDesignLibrary(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		return {
			setAutoOpenDesignLibrary: ( value ) => dispatch( 'ast-block-templates' ).setAutoOpenDesignLibrary( value ),
		};
	} ),
] )( ModalAutoOpenSetting );
