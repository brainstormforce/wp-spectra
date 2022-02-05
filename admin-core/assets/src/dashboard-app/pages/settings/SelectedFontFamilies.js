
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';
import Select from 'react-select';
import googleFonts from '@Controls/fonts';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const SelectedFontFamilies = () => {

    const dispatch = useDispatch();

    const enableSelectedFontFamilies = useSelector( ( state ) => state.enableSelectedFontFamilies );
    const selectedFontFamilies = useSelector( ( state ) => state.selectedFontFamilies );
    const enableSelectedFontFamiliesStatus = 'disabled' === enableSelectedFontFamilies ? false : true;

    const fonts = [];

	Object.keys( googleFonts ).map( ( name ) => {  // eslint-disable-line array-callback-return

		if ( 'Default' !== name  ) {
			fonts.push( { value: name, label: name } );
		}
	} );

    const updateEnableSelectedFontFamilies = () => {
        
        let assetStatus;
		if ( enableSelectedFontFamilies === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}
        
        dispatch( {type: 'UPDATE_ENABLE_SELECTED_FONT_FAMILIES', payload: assetStatus } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_load_select_font_globally' );
		formData.append( 'security', uag_react.load_select_font_globally_nonce );
		formData.append( 'value', assetStatus );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );
    };

    const updateSelectedFontFamilies = ( font ) => {
		
        dispatch( {type: 'UPDATE_SELECTED_FONT_FAMILIES', payload: font } );

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

    return (
        <section className='flex border-b border-solid border-slate-200'>
            <div className='pr-16 pb-8 w-4/5'>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {__( 'Display Selected Font Families', 'ultimate-addons-for-gutenberg' )}
                </h3>
                <p className="mt-[0.6rem] text-sm ">
                    { __( 'Now you can set multiple global font families for all UAG blocks by Enabling "Display Selected Font Families" option. Also, It will not list the unsed fonts in your blocks controls.', 'ultimate-addons-for-gutenberg' ) }
                </p>
                <p className="mt-3 text-sm ">
                    { __( 'You can get all the selected families in typography component of each block.', 'ultimate-addons-for-gutenberg' ) }
                </p>
                <Select
                    isMulti
                    placeholder={ __( 'Select the font families you want' ) }
                    defaultValue = { selectedFontFamilies }
                    onChange={ ( value ) => updateSelectedFontFamilies( value ) }
                    options={ fonts }
                    maxMenuHeight={ 140 }
                    minMenuHeight = { 70 }
                    isSearchable={true}
                    className={`mt-4 uag-font-select-${enableSelectedFontFamilies}`}
                />
            </div>
            <div>
                <Switch
                    checked={enableSelectedFontFamiliesStatus}
                    onChange={updateEnableSelectedFontFamilies}
                    className={classNames(
                        enableSelectedFontFamiliesStatus ? 'bg-wpcolor' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    )}
                    >
                    <span
                        aria-hidden="true"
                        className={classNames(
                        enableSelectedFontFamiliesStatus ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                    />
                </Switch>
            </div>
        </section>
    );
};

export default SelectedFontFamilies;