import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const CopyPasteStyles = () => {

    const dispatch = useDispatch();

    const enableCopyPasteStyles = useSelector( ( state ) => state.enableCopyPasteStyles );
    const enableCopyPasteStylesStatus = 'disabled' === enableCopyPasteStyles ? false : true;

    const updateEnableCopyPasteStylesStatus = () => {
        
        let assetStatus;
		if ( enableCopyPasteStyles === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}
        
        dispatch( {type: 'UPDATE_ENABLE_COPY_PASTE_STYLES', payload: assetStatus } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_copy_paste' );
		formData.append( 'security', uag_react.copy_paste_nonce );
		formData.append( 'value', assetStatus );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );
    };

    return (
        <section className='flex'>
            <div className='pr-16 pb-8 w-4/5'>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {__( 'Copy Paste Styles', 'ultimate-addons-for-gutenberg' )}
                </h3>
                <p className="mt-[0.6rem] text-sm ">
                    { __( 'Enable the "Copy Paste Styles" option to have the ability to Copy & Paste UAG & Core Gutenberg Blocks Styles.', 'ultimate-addons-for-gutenberg' ) }
                </p>
            </div>
            <div>
                <Switch
                    checked={enableCopyPasteStylesStatus}
                    onChange={updateEnableCopyPasteStylesStatus}
                    className={classNames(
                        enableCopyPasteStylesStatus ? 'bg-wpcolor' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    )}
                    >
                    <span
                        aria-hidden="true"
                        className={classNames(
                        enableCopyPasteStylesStatus ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                    />
                </Switch>
            </div>
        </section>
    );
};

export default CopyPasteStyles;