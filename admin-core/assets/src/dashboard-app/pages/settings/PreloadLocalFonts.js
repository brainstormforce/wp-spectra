import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'

import getApiData from '@Controls/getApiData';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const PreloadLocalFonts = () => {

    const dispatch = useDispatch();

    const enableLoadFontsLocally = useSelector( ( state ) => state.enableLoadFontsLocally );
    const enablePreloadLocalFonts = useSelector( ( state ) => state.enablePreloadLocalFonts );

    const enablePreloadLocalFontsStatus = 'disabled' === enablePreloadLocalFonts ? false : true;

    const updatePreloadLocalFontsStatus = () => {

        let assetStatus;
		if ( enablePreloadLocalFonts === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( { type: 'UPDATE_ENABLE_PRELOAD_LOCAL_FONTS', payload: assetStatus } );

		// Create an object with the security and value properties
        const data = {
            security: uag_react.preload_local_fonts_nonce,
            value: assetStatus,
        };
        // Call the getApiData function with the specified parameters
        const getApiFetchData = getApiData( {
            url: uag_react.ajax_url,
            action: 'uag_preload_local_fonts',
            data,
        } );
        // Wait for the API call to complete, then update the state to show a notification that the settings have been saved
        getApiFetchData.then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
        } );
    };

    return (
        <section className={ `uag-font-select-${ enableLoadFontsLocally } block border-b border-solid border-slate-200 px-12 py-8 justify-between` }>  
            <div className='mr-16 w-full flex items-center'>
                <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
                    { __( 'Preload Local Fonts', 'ultimate-addons-for-gutenberg' ) }
                </h3>
                <Switch
                    checked={ enablePreloadLocalFontsStatus }
                    onChange={ updatePreloadLocalFontsStatus }
                    className={ classNames(
                        enablePreloadLocalFontsStatus ? 'bg-spectra' : 'bg-slate-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    ) }
                    >
                    <span
                        aria-hidden="true"
                        className={ classNames(
                            enablePreloadLocalFontsStatus ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        ) }
                    />
                </Switch>
            </div>
            <p className="mt-2 w-9/12 text-sm text-slate-500">
                { __( 'This option will load the font files right away on page load. Preloading Local Fonts can speeds up your website even further.', 'ultimate-addons-for-gutenberg' ) }
            </p>
        </section>
    );
};

export default PreloadLocalFonts;
