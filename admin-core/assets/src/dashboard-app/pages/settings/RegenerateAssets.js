import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Button } from '@wordpress/components';

const RegenerateAssets = () => {

    const [show, setshow] = useState( false );

    const [ regenerateAssetsState, setRegenerateAssetsState ] = useState( false );

    const regenerateAssets = () => {
        setRegenerateAssetsState( 'loading' );
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
                setTimeout( function () {
					setRegenerateAssetsState( false );
				}, 2000 );
				setRegenerateAssetsState( true );
			}
		} );
    };

    return (
        <section className='block p-8 justify-between'>
            <div className='inline-flex w-full'>
                <Button className='pr-16 inline-flex w-10/12 uag-accordion'
                    onClick={ () => setshow( ! show )}
                >
                    { ! show && ( <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg> )}
                    { show && ( <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg> )}
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {__( 'Asset Regeneration', 'ultimate-addons-for-gutenberg' )}
                    </h3>
                </Button>
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-[0.2rem] shadow-sm text-white bg-spectra focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none"
                    onClick={regenerateAssets}
                >
                    { 'loading' === regenerateAssetsState &&
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    }
                    {__( 'Regenerate Assets', 'ultimate-addons-for-gutenberg' )}
                </button>
                { true === regenerateAssetsState &&
                    <p className='text-sm text-lime-600 pt-4'>
                        {__( 'Assets Regenerated!', 'ultimate-addons-for-gutenberg' )}
                    </p>
                }
                
            </div>
            { show && (
                <p className="mt-[0.6rem] text-sm ">
                    { __( 'Facing issues with style, layout, color or another page element? Use this option to regenerate CSS and Javascript assets. It can help with all kinds of asset issues.', 'ultimate-addons-for-gutenberg' ) }
                </p>
            )}
        </section>
    );
};

export default RegenerateAssets;
