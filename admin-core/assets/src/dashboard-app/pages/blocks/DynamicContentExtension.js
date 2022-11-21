import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';
import UAGB_Block_Icons from '@Common/block-icons';
import { useEffect } from 'react';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const DynamicContentExtension = () => {

    const enableDynamicContentExtension = useSelector( ( state ) => state.enableDynamicContentExtension );
    const dispatch = useDispatch();

    const dynamicContentStatus = 'disabled' === enableDynamicContentExtension ? false : true;

    useEffect( () => {

        const formData = new window.FormData();

		formData.append( 'action', 'uag_enable_dynamic_content' );
		formData.append( 'security', uag_react.enable_dynamic_content_nonce );
		formData.append( 'value', enableDynamicContentExtension );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );

    }, [enableDynamicContentExtension] );

    const updatedynamicContentStatus = () => {

        let assetStatus;
		if ( enableDynamicContentExtension === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( {type: 'UPDATE_ENABLE_DYNAMIC_CONTENT_EXTENSION', payload: assetStatus } );
		dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );

    };

    return (
        <div
        key={'dynamic-content'}
        className={ classNames(
            ( dynamicContentStatus && uag_react.spectra_pro_status )
                ? 'border-white bg-white shadow hover:shadow-hover hover:z-50'
                : 'border-slate-200 spectra-disabled-icon',
            'box-border relative border rounded-md h-20 p-4 flex items-center gap-x-4 snap-start transition spectra-icon-transition'
        ) }
        >
            <div className="flex-shrink-0">
                { UAGB_Block_Icons['dynamic-content'] }
            </div>
            <div className="uagb-admin-block__extension-title flex-1 min-w-0">
                <p className="text-base font-medium text-slate-800">
                    { __( 'Dynamic Content', 'ultimate-addons-for-gutenberg' ) }
                    <div className="inline-block align-text-bottom max-h-4 px-1.5 py-[3px] ml-1.5 text-[10px] leading-[10px] border border-slate-400 text-slate-500 rounded spectra-admin__block-label">
                        { __( 'Extension', 'ultimate-addons-for-gutenberg' ) }
                    </div>
                    { uag_react.spectra_pro_status && (
                        <div className="inline-block align-text-bottom max-h-4 px-1.5 py-[3px] ml-1.5 text-[10px] leading-[10px] border border-slate-800 bg-slate-800 text-white rounded spectra-admin__block-label">
                            { __( 'Pro', 'ultimate-addons-for-gutenberg' ) }
                        </div>
                    ) }
                </p>
                <a className="focus-visible:text-slate-500 active:text-slate-500 hover:text-slate-500 focus:text-slate-400 text-slate-400 text-sm truncate" href='https://wpspectra.com/docs/dynamic-content/' target="_blank"rel="noreferrer">{__( 'Documentation', 'ultimate-addons-for-gutenberg' )}</a>
            </div>
            { uag_react.spectra_pro_status ? (
                <Switch
                    checked={dynamicContentStatus}
                    onChange={updatedynamicContentStatus}
                    className={classNames(
                        dynamicContentStatus ? 'bg-spectra' : 'bg-slate-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    )}
                    >
                    <span
                        aria-hidden="true"
                        className={classNames(
                        dynamicContentStatus ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                    />
                </Switch>
            ) : (
                <div className="inline-block align-text-bottom max-h-4 px-1.5 py-[3px] ml-1.5 text-[10px] leading-[10px] border border-slate-800 bg-slate-800 text-white rounded spectra-admin__block-label">
                    { __( 'Pro', 'ultimate-addons-for-gutenberg' ) }
                </div>
            ) }
        </div>
    );
};

export default DynamicContentExtension;
