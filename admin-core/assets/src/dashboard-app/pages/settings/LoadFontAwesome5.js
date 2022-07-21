import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';
import { Button } from '@wordpress/components';
import { useState } from 'react';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const LoadFontAwesome5 = () => {

    const dispatch = useDispatch();

    const enableFontAwesome5 = useSelector( ( state ) => state.enableFontAwesome5 );
    const enableFontAwesome5Status = 'disabled' === enableFontAwesome5 ? false : true;
    
	const [ show, setshow ] = useState( false );

    const updateEnableFontAwesome5Status = () => {

        let assetStatus;
		if ( enableFontAwesome5 === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( { type: 'UPDATE_ENABLE_FONT_AWESOME_5', payload: assetStatus } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_load_font_awesome_5' );
		formData.append( 'security', uag_react.load_font_awesome_5_nonce );
		formData.append( 'value', assetStatus );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: true } );
		} );
    };

    return (
        <section className='block border-b border-solid border-slate-200 p-8 justify-between'>  
            <Button className='pr-16 inline-flex w-10/12 uag-accordion'
                onClick={ () => setshow( ! show )}
            >
                { ! show && ( <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg> )}
                { show && ( <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg> )}
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    { __( 'Load Font Awesome 5 Support', 'ultimate-addons-for-gutenberg' ) }
                </h3>
            </Button>
            <Switch
                checked={ enableFontAwesome5Status }
                onChange={ updateEnableFontAwesome5Status }
                className={ classNames(
                    enableFontAwesome5Status ? 'bg-spectra' : 'bg-slate-200',
                    'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                ) }
                >
                <span
                    aria-hidden="true"
                    className={ classNames(
                        enableFontAwesome5Status ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    ) }
                />
            </Switch>
            { show && (
                <p className="mt-[0.6rem] text-sm ">
                    { __( 'Enable this to make sure all previously used Font Awesome 5 icons are displayed correctly while using the Font Awesome 6 library.', 'ultimate-addons-for-gutenberg' ) }
                </p>
            )}
        </section>
    );
};

export default LoadFontAwesome5;
