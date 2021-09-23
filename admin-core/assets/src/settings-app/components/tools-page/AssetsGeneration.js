import { useStateValue } from '@Utils/StateProvider';
import { NormalButton } from '@Fields';
import { __ } from '@wordpress/i18n';
import ReactHtmlParser from 'react-html-parser';
import React, { useState } from 'react';
import apiFetch from '@wordpress/api-fetch';
function AssetsGeneration() {
	const [ { globaldata, options }, dispatch ] = useStateValue();

	const [ enableFileGeneration, setEnableFileGeneration ] = useState(
		options.enable_file_generation
	);

	const [ regenerateAssetsState, setRegenerateAssetsState ] = useState(
		false
	);
	const [ savingAssetGenState, setAssetGenState ] = useState( false );
	const [ status, setStatus ] = useState( false );

	const handleRegenerateAssets = () => {
		setRegenerateAssetsState( true );
		setStatus( 'Processing....' );
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
				setStatus( 'Assets Regenerated!' );
				setTimeout( function () {
					setStatus( false );
				}, 10000 );
				setRegenerateAssetsState( false );
			}
		} );
	};

	const handleAssetGeneration = () => {
		setAssetGenState( true );
		let assetStatus;
		if ( enableFileGeneration === 'disabled' ) {
			assetStatus = 'enabled';
		} else {
			assetStatus = 'disabled';
		}

		dispatch( {
			type: 'SET_OPTION',
			name: 'enable_file_generation',
			value: assetStatus,
		} );

		const action = 'uag_enable_file_generation',
			nonce = uag_react.enable_file_generation_nonce;

		const formData = new window.FormData();

		formData.append( 'action', action );
		formData.append( 'security', nonce );
		formData.append( 'value', assetStatus );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			if ( data.success ) {
				setAssetGenState( false );
				setEnableFileGeneration( assetStatus );
			}
		} );
	};
	const enableFileGenerationlabel =
		globaldata.settings.enable_file_generation.fields.enable_file_generation
			.label;
	const enableFileRegenerationlabel =
		globaldata.settings.enable_file_regeneration.fields.enable_file_regeneration
			.label;
	const enableFileRegenerationdesc =
		globaldata.settings.enable_file_regeneration.fields.enable_file_regeneration
			.desc;
			
	return (
		<>
			<h2>
				{ __( 'Asset Generation', 'ultimate-addons-for-gutenberg' ) }
			</h2>
			<div className="uag-version-control__elements">
				<div className="uag-version-control__element">
					<h3>{ ReactHtmlParser( enableFileGenerationlabel ) }</h3>
					<p>
						{ __( 'Ultimate Addons for Gutenberg loads the CSS and JS inline on the page by default. If you want to generate separate CSS and JS files for UAG blocks, enable this option. Please read ', 'ultimate-addons-for-gutenberg' ) }
						<a href="https://www.ultimategutenberg.com/clean-html-with-uag/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard"> { __( 'this article', 'ultimate-addons-for-gutenberg' ) } </a>
						{__( ' to learn the difference between generating CSS and JS inline and in a separate file.', 'ultimate-addons-for-gutenberg' )}
					</p>
					<div className="uag-version-control-button">
						<NormalButton
							buttonText={
								enableFileGeneration === 'enabled'
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
							className={ `uag-control__status-${
								enableFileGeneration === 'enabled'
									? 'yes'
									: 'no'
							}` }
						>
							{ enableFileGeneration === 'enabled'
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
								} alt = ''
							/>
						</span>
					</div>
				</div>
				<div className="uag-version-control__element">
					<h3>{ ReactHtmlParser( enableFileRegenerationlabel ) }</h3>
					<p>{ ReactHtmlParser( enableFileRegenerationdesc ) }</p>
					<div className="uag-version-control-button">
						<NormalButton
							buttonText={ __(
								'Regenerate Assets',
								'ultimate-addons-for-gutenberg'
							) }
							onClick={ handleRegenerateAssets }
							saving={ regenerateAssetsState }
						/>
						<span className={ `uag-control__status-yes` }>
							{ status }
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default AssetsGeneration;
