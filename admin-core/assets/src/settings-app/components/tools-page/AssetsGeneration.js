import { useStateValue } from '@Utils/StateProvider';
import { NormalButton } from '@Fields';
import { __ } from '@wordpress/i18n';
import ReactHtmlParser from 'react-html-parser';
import React, { useState } from 'react';
import apiFetch from '@wordpress/api-fetch';

function AssetsGeneration( props ) {
	const [ { globaldata, options }, dispatch ] = useStateValue();

	const [ enableFileGeneration, setEnableFileGeneration ] = useState(
		options[ 'enable_file_generation' ]
	);

	const [ regenerateAssetsState, setRegenerateAssetsState ] = useState( false );
	const [ savingAssetGenState, setAssetGenState ] = useState( false );
	const [ status, setStatus ] = useState( false );
	
	const handleRegenerateAssets = () => {
		setRegenerateAssetsState( true );
		setStatus('Processing....');
		const formData = new window.FormData();
		formData.append( 'action', 'uag_regenerate_assets' );
		formData.append( 'security', uag_react.regenerate_assets_nonce );
		formData.append( 'value', true );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			if ( data.success ) {
				setStatus('Assets Regenerated!');
				setTimeout(function(){ setStatus(false); }, 10000);
				setRegenerateAssetsState( false );
			} 
		} );
	};
	
	const handleAssetGeneration = () => {
		setAssetGenState( true );
		let status;
		if ( enableFileGeneration == 'no' ) {
			status = 'yes';
		} else {
			status = 'no';
		}
		setEnableFileGeneration( status );
		dispatch( {
			type: 'SET_OPTION',
			name: 'enable_file_generation',
			value: status,
		} );
		
		var action = 'uag_enable_file_generation',
		nonce = uag_react.enable_file_generation_nonce;

		let formData = new window.FormData();

		formData.append( 'action', action );
		formData.append( 'security', nonce );
		formData.append( 'value', status );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			setAssetGenState( false );
		} );
		
	};
	const enableFileGenerationlabel =
		globaldata.settings.enable_file_generation.fields.enable_file_generation
			.label;
	const enableFileGenerationdesc =
		globaldata.settings.enable_file_generation.fields.enable_file_generation
			.desc;

	return (
		<>
			<h2>
				{ __( 'Assets Generation', 'ultimate-addons-for-gutenberg' ) }
			</h2>
			<div className="uag-version-control__elements">
				<div className="uag-version-control__element">
					<h3>{ ReactHtmlParser( enableFileGenerationlabel ) }</h3>
					<p>{ ReactHtmlParser( enableFileGenerationdesc ) }</p>
					<div className="uag-version-control-button">
						<NormalButton
							buttonText={
								enableFileGeneration == 'yes'
									? __(
											'Disable',
											'ultimate-addons-for-gutenberg'
									  )
									: __(
											'Enable',
											'ultimate-addons-for-gutenberg'
									  )
							}
							onClick={ handleAssetGeneration }
							saving={ savingAssetGenState }
						/>
						<span
							className={ `uag-control__status-${ enableFileGeneration }` }
						>
							{ enableFileGeneration == 'yes'
								? __(
										'Enabled',
										'ultimate-addons-for-gutenberg'
								  )
								: __(
										'Disabled',
										'ultimate-addons-for-gutenberg'
								  ) }
								<img
									src={
										uag_react.plugin_dir +
										'admin-core/assets/images/check.svg'
									}
								/>
						</span>
					</div>
				</div>
				<div className="uag-version-control__element">
					<h3>
						{ ' ' }
						{ __(
							'Assets Regeneration',
							'ultimate-addons-for-gutenberg'
						) }{ ' ' }
					</h3>
					<p>
						{ ' ' }
						{ __(
							'You can regenerate your CSS & Javascript assets here.',
							'ultimate-addons-for-gutenberg'
						) }{ ' ' }
					</p>
					<div className="uag-version-control-button">
						<NormalButton
							buttonText={ __(
								'Regenerate Assets',
								'ultimate-addons-for-gutenberg'
							) }
							onClick={ handleRegenerateAssets }
							saving={ regenerateAssetsState }
						/>
						<span
							className={ `uag-control__status-yes` }
						>
							{status}
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default AssetsGeneration;
