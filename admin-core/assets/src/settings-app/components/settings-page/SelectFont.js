import React, { useEffect , useState} from 'react';
import { useStateValue } from '@Utils/StateProvider';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import Select from 'react-select';
import googleFonts from '@Controls/fonts';
import { NormalButton } from '@Fields';
import ReactHtmlParser from 'react-html-parser';

let loadAllFontCachedValue;

function SelectFont() {
	const [ { globaldata, options }, dispatch ] = useStateValue();
	const selectFontFamilieslabel = globaldata.settings.load_select_font_globally.fields.load_select_font_globally.label;
	const [ savingState, setssavingState ] = useState( false );

	const [ selectFontOption, setselectFontOption ] = useState( options.load_select_font_globally );

	const setFonts = ( font ) => {
		dispatch( {
			type: 'SET_OPTION',
			name: 'select_font_globally',
			value: JSON.stringify( font ),
		} );
		const action = 'uag_select_font_globally',
			nonce = uag_react.select_font_globally_nonce;

		const formData = new window.FormData();

		formData.append( 'action', action );
		formData.append( 'security', nonce );
		formData.append( 'value', JSON.stringify( font ) );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );
	};

	useEffect( () => {
		window.onbeforeunload = null;
		loadAllFontCachedValue = options.load_select_font_globally;
	}, [] );

	useEffect( () => {
		if (
			loadAllFontCachedValue !== options.load_select_font_globally
		) {

			const formData = new window.FormData();

			formData.append( 'action', 'uag_load_select_font_globally' );
			formData.append(
				'security',
				uag_react.load_select_font_globally_nonce
			);
			formData.append( 'value', options.load_select_font_globally );
			dispatch( {
				type: 'SET_OPTION',
				name: 'load_select_font_globally',
				value: options.load_select_font_globally,
			} );
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( () => {
			} );

			loadAllFontCachedValue = options.load_select_font_globally;
		}
	}, [ options.load_select_font_globally ] );

	const fonts = [];

	Object.keys( googleFonts ).map( ( name ) => {  // eslint-disable-line array-callback-return

		if ( 'Default' !== name  ) {
			fonts.push( { value: name, label: name } );
		}
	} );

	const selectFontOptionClick = () => {
		setssavingState( true );
		let value;
		if ( selectFontOption === 'disabled' ) {
			value = 'enabled';
		} else {
			value = 'disabled';
		}

		const formData = new window.FormData();

			formData.append( 'action', 'uag_load_select_font_globally' );
			formData.append(
				'security',
				uag_react.load_select_font_globally_nonce
			);
			formData.append( 'value', value );
			dispatch( {
				type: 'SET_OPTION',
				name: 'load_select_font_globally',
				value,
			} );
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( () => {
				setssavingState( false );
				setselectFontOption( value );
			} );
	};
	return (
		<>
			<div className="uag-font-setting__element">
				<div className="uag-local-font-settings">
					<h3>{ ReactHtmlParser( selectFontFamilieslabel ) }</h3>
					<NormalButton
						buttonText={
							selectFontOption === 'enabled'
								? __(
										'Disable',
										'ultimate-addons-for-gutenberg'
									)
								: __(
										'Enable',
										'ultimate-addons-for-gutenberg'
									)
						}
						onClick={ selectFontOptionClick }
						saving={ savingState }
					/>
				</div>
				<p>{ __( 'Now you can set multiple global font families for all UAG blocks by Enabling "Display Selected Font Families" option. Also, It will not list the unsed fonts in your blocks controls', 'ultimate-addons-for-gutenberg' ) }</p>
				<p>{ __( 'You can get all the selected families in typography component of each block.', 'ultimate-addons-for-gutenberg' ) }</p>
				<div className={`uag-font-setting-button ${'disabled' === options.load_select_font_globally ? 'disable' : ''}`}>
						<Select
							isMulti
							placeholder={ __( 'Select the font families you want' ) }
							defaultValue = { options.select_font_globally }
							onChange={ ( value ) => setFonts( value ) }
							options={ fonts }
							maxMenuHeight={ 140 }
							minMenuHeight = { 70 }
							isSearchable={true}
						/>
				</div>
			</div>
		</>
	);
}

export default SelectFont;
