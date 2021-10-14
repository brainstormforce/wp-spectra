import React, { useState ,useEffect } from 'react';
import { NormalButton } from '@Fields';
import { useStateValue } from '@Utils/StateProvider';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import ReactHtmlParser from 'react-html-parser';
import './LoadFont.scss'
import SettingTable from '../common/SettingTable';
let enablePreloadCachedValue;

function LoadFonts() {
	const [ { globaldata, options }, dispatch ] = useStateValue();
	const [ savingState, setssavingState ] = useState( false );
    const enablePreloadLocalFonts = globaldata.settings.preload_local_fonts;
	const [ loadGFontsLocally, setloadGFontsLocally ] = useState( options.load_gfonts_locally );

	const loadGFontsLocallylabel = globaldata.settings.load_gfonts_locally.fields.load_gfonts_locally.label;

    useEffect( () => {
		window.onbeforeunload = null;
		enablePreloadCachedValue = options.preload_local_fonts;
	}, [] );

	useEffect( () => {
        if (
			enablePreloadCachedValue !== options.preload_local_fonts
		) {
			const formData = new window.FormData();

			formData.append( 'action', 'uag_preload_local_fonts' );
			formData.append(
				'security',
				uag_react.preload_local_fonts_nonce
			);
			formData.append( 'value', options.preload_local_fonts );
			dispatch( {
				type: 'SET_OPTION',
				name: 'uag_preload_local_fonts',
				value: options.preload_local_fonts,
			} );
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( () => {
			} );

			enablePreloadCachedValue = options.preload_local_fonts;
		}
	}, [ options.preload_local_fonts ] );

	const loadGFontsLocallyClick = () => {
		setssavingState( true );
		let value;
		if ( loadGFontsLocally === 'disabled' ) {
			value = 'enabled';
		} else {
			value = 'disabled';
		}
		const formData = new window.FormData();

		formData.append( 'action', 'uag_load_gfonts_locally' );
		formData.append(
			'security',
			uag_react.load_gfonts_locally_nonce
		);
		formData.append( 'value', value );
		dispatch( {
			type: 'SET_OPTION',
			name: 'load_gfonts_locally',
			value,
		} );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			if ( data.success ) {
				setssavingState( false );
				setloadGFontsLocally( value );
			}
		} );
	};

	return (
		<>
			<h2>
				{ __( 'Performance', 'ultimate-addons-for-gutenberg' ) }
			</h2>
			<div className="uag-font-setting__elements">
				<div className="uag-font-setting__element">
					<div className="uag-local-font-settings">
						<h3>{ ReactHtmlParser( loadGFontsLocallylabel ) }</h3>
						<NormalButton
							buttonText={
								loadGFontsLocally === 'enabled'
									? __(
											'Disable',
											'ultimate-addons-for-gutenberg'
										)
									: __(
											'Enable',
											'ultimate-addons-for-gutenberg'
										)
							}
							onClick={ loadGFontsLocallyClick }
							saving={ savingState }
						/>
					</div>
					<p>{ __( 'Enable the "Load Google Fonts Locally" option to serve Google fonts from your server (locally). It will simply download the selected Google fonts and host those Google fonts locally on your WordPress site.', 'ultimate-addons-for-gutenberg' ) }</p>
					<p>{ __( 'Also, enable "Preload Local Fonts" to preload font files. It will load the font files right away on page load.', 'ultimate-addons-for-gutenberg' ) }</p>
					<div className={`uag-font-setting-button ${'disabled' === options.load_gfonts_locally ? 'disable' : ''}`}>
						<SettingTable settings={ enablePreloadLocalFonts } />
					</div>
				</div>
			</div>
		</>
	);
}

export default LoadFonts;
