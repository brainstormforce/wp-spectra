import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';

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
        
        dispatch( {type: 'UPDATE_ENABLE_PRELOAD_LOCAL_FONTS', payload: assetStatus } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_preload_local_fonts' );
		formData.append(
			'security',
			uag_react.preload_local_fonts_nonce
		);
		formData.append( 'value', assetStatus );
		
		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );
    };

    return (
        <section className={`flex uag-font-select-${enableLoadFontsLocally}`}>
            <div className='pr-16 pb-8 w-[78%]'>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {__( 'Preload Local Fonts', 'ultimate-addons-for-gutenberg' )}
                </h3>
                <p className="mt-[0.6rem] text-sm ">
                    { __( 'Enable "Preload Local Fonts" to preload font files. It will load the font files right away on page load.', 'ultimate-addons-for-gutenberg' ) }
                </p>
            </div>
            <div>
                <Switch
                    checked={enablePreloadLocalFontsStatus}
                    onChange={updatePreloadLocalFontsStatus}
                    className={classNames(
                        enablePreloadLocalFontsStatus ? 'bg-wpcolor' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-5 w-10 items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    )}
                    >
                    <span
                        aria-hidden="true"
                        className={classNames(
                        enablePreloadLocalFontsStatus ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                    />
                </Switch>
            </div>
        </section>
    );
};

export default PreloadLocalFonts;