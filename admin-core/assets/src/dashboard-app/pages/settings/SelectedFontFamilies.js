
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';
import Select from 'react-select';
import googleFonts from '@Controls/fonts';
import { useState } from 'react';
import { Button } from '@wordpress/components';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const SelectedFontFamilies = () => {

    const dispatch = useDispatch();

    const [show, setshow] = useState( false );

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
            setshow( true );
		} else {
            assetStatus = 'disabled';
            setshow( false );
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
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: true } );
		} );
    };

    const updateSelectedFontFamilies = ( font ) => {
		if( enableSelectedFontFamilies === 'enabled' ) {
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
				dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: true } );
			} );
		}
	};
	const customStyles = {
		control: ( provided ) => ( {
		  ...provided,
		  cursor: 'pointer',
		} ),

	}
    return (
        <section className='flex border-b border-solid border-slate-200 p-8 justify-between'>
            <div className='pr-16 w-[78%]'>
                <Button className='pr-16 w-[78%] inline-flex w-10/12 uag-accordion'
                        onClick={ () => setshow( ! show )}
                    >
                    { ! show && ( <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg> )}
                    { show && ( <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg> )}
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {__( 'Allow Only Selected Fonts', 'ultimate-addons-for-gutenberg' )}
                    </h3>
                </Button>
                <Switch
                    checked={enableSelectedFontFamiliesStatus}
                    onChange={updateEnableSelectedFontFamilies}
                    className={classNames(
                        enableSelectedFontFamiliesStatus ? 'bg-spectra' : 'bg-slate-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    )}
                    >
                    <span
                        aria-hidden="true"
                        className={classNames(
                        enableSelectedFontFamiliesStatus ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                    />
                </Switch>
                { show && ( 
                    <>
                        <p className="mt-[0.6rem] text-sm ">
                            { __( 'Spectra offers 700+ Google font options. If this is overwhelming for your clients, you can use this option to show only limited number of fonts in the block settings.', 'ultimate-addons-for-gutenberg' ) }
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
                            className={`mt-4 cursor-pointer focus:ring-spectra`}
                            theme={( theme ) => ( {
                                ...theme,
                                colors: {
                                ...theme.colors,
                                primary: '#6104ff',
                                },
                            } )}
                            styles={customStyles}
                        />
                    </>
                )}
                
            </div>
        </section>
    );
};

export default SelectedFontFamilies;
