import { useStateValue } from '@Utils/StateProvider';
import { NormalButton } from '@Fields';
import { __ } from '@wordpress/i18n';
import './AssetsGeneration.scss';
import SettingTable from '../common/SettingTable';
import React, { useEffect, useState } from 'react';
import apiFetch from '@wordpress/api-fetch';

let enableFileGenerationCachedValue;

function AssetsGeneration( props ) {

	const [
		{ globaldata, options },
	] = useStateValue();
	
    useEffect( () => {
		window.onbeforeunload = null;
		enableFileGenerationCachedValue = options['_uag_common[enable_file_generation]']
	}, [] );

    useEffect( () => {

		if ( enableFileGenerationCachedValue !== options['_uag_common[enable_file_generation]'] ) {
		
			let formData = new window.FormData();
	
			formData.append( 'action', 'uag_enable_file_generation' );
			formData.append(
				'security',
				uag_react.enable_file_generation_nonce
			);
			formData.append( 'value', options['_uag_common[enable_file_generation]'] );
	
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( ( data ) => {
				
				if ( data.success ) {
					
				} else {
					console.log( 'Error' );
				}
			} );

			enableFileGenerationCachedValue = options['_uag_common[enable_file_generation]'];
		}
	}, [ options['_uag_common[enable_file_generation]'] ] );

    const [ savingState, setssavingState ] = useState( false );

    var enableFileGenerationSettings = globaldata.settings[ 'enable_file_generation' ];

    const handleRegenerateAssets = () => {

        let formData = new window.FormData();

        setssavingState( true );

        formData.append( 'action', 'uag_regenerate_assets' );
        formData.append(
            'security',
            uag_react.regenerate_assets_nonce
        );
        formData.append( 'value', true );

        apiFetch( {
            url: uag_react.ajax_url,
            method: 'POST',
            body: formData,
        } ).then( ( data ) => {
            
            if ( data.success ) {
                setssavingState( false );
            } else {
                console.log( 'Error' );
            }
        } );

    }

	return (
		<>
            <h3 className="uag-version-settings__title">
				{ __( 'Assets Generation', 'ultimate-addons-for-gutenberg' ) }
			</h3>
			<div className="uag-row">
				<div className="uag-col-md-6">
					<SettingTable
						settings={ enableFileGenerationSettings }
						meta_key="_uag_common"
					/>
				</div>
				<div className="uag-col-md-6">
					<label className="uag-label bottom-space"> { __( 'Assets Regeneration', 'ultimate-addons-for-gutenberg' ) } </label>
					<NormalButton
						buttonText = { __( 'Regenerate Assets', 'ultimate-addons-for-gutenberg' ) }
						onClick = { handleRegenerateAssets }
						saving = { savingState }
						desc = { __( 'You can regenerate your CSS & Javascript assets here.', 'ultimate-addons-for-gutenberg' ) }
					/>
				</div>
			</div>
		</>
	);
}

export default AssetsGeneration;
