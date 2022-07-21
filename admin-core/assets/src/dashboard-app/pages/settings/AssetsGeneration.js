import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';
import { useState } from 'react';
import { Button } from '@wordpress/components';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const AssetsGeneration = () => {

    const dispatch = useDispatch();

    const enableFileGeneration = useSelector( ( state ) => state.enableFileGeneration );
    const fileGenerationStatus = 'disabled' === enableFileGeneration ? false : true;

    const [show, setshow] = useState( false );

    const updateFileGenerationStatus = () => {

        let assetStatus;
		if ( enableFileGeneration === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( {type: 'UPDATE_FILE_GENERATION', payload: assetStatus } );

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
		} ).then( () => {
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: true } );
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
                        {__( 'File Generation', 'ultimate-addons-for-gutenberg' )}
                    </h3>
                </Button>
                <Switch
                    checked={fileGenerationStatus}
                    onChange={updateFileGenerationStatus}
                    className={classNames(
                        fileGenerationStatus ? 'bg-spectra' : 'bg-slate-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    )}
                    >
                    <span
                        aria-hidden="true"
                        className={classNames(
                        fileGenerationStatus ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                    />
                </Switch>
                { show && (  
                    <p className="mt-[0.6rem] text-sm ">
                        { __( 'Spectra loads the CSS and JS inline on the page by default. If you want to generate separate CSS and JS files for Spectra blocks, enable this option. Please read ', 'ultimate-addons-for-gutenberg' ) }
                        <a className='text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover' href="https://www.ultimategutenberg.com/clean-html-with-uag/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard"> { __( 'this article', 'ultimate-addons-for-gutenberg' ) } </a>
                        {__( ' to learn the difference between generating CSS and JS inline and in a separate file.', 'ultimate-addons-for-gutenberg' )}
                    </p>
                )}
            <div>
            </div>
        </section>
    );
};

export default AssetsGeneration;
