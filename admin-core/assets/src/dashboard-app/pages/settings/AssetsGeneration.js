import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const AssetsGeneration = () => {

    const dispatch = useDispatch();

    const enableFileGeneration = useSelector( ( state ) => state.enableFileGeneration );
    const fileGenerationStatus = 'disabled' === enableFileGeneration ? false : true;

    const updateFileGenerationStatus = () => {

        let assetStatus;
		if ( enableFileGeneration === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( { type: 'UPDATE_FILE_GENERATION', payload: assetStatus } );

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
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
    };

    return (
        <section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>  
            <div className='mr-16 w-full flex items-center'>
                <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
                    { __( 'File Generation', 'ultimate-addons-for-gutenberg' ) }
                </h3>
                <Switch
                    checked={ fileGenerationStatus }
                    onChange={updateFileGenerationStatus }
                    className={ classNames(
                        fileGenerationStatus ? 'bg-spectra' : 'bg-slate-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    ) }
                >
                    <span
                        aria-hidden="true"
                        className={ classNames(
                            fileGenerationStatus ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        ) }
                    />
                </Switch>
            </div>
            <p className="mt-2 w-9/12 text-sm text-slate-500">
                { __( 'Spectra loads the CSS and JS inline on the page by default. If you want to generate separate CSS and JS files for Spectra blocks, enable this option. Please read ', 'ultimate-addons-for-gutenberg' ) }
                <a className='text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover' href="https://wpspectra.com/clean-html-with-uag/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard" target='_blank' rel="noreferrer"> { __( 'this article', 'ultimate-addons-for-gutenberg' ) } </a>
                { __( ' to learn the difference between generating CSS and JS inline and in a separate file.', 'ultimate-addons-for-gutenberg' ) }
            </p>
        </section>
    );
};

export default AssetsGeneration;
