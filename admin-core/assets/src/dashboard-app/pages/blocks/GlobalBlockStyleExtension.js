import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import UAGB_Block_Icons from '@Common/block-icons';
import { useEffect } from 'react';

import getApiData from '@Controls/getApiData';

import { uagbClassNames } from '@Utils/Helpers';

const GBSExtension = () => {
    const enableGBSExtension = useSelector( ( state ) => state.enableGBSExtension );
    const dispatch = useDispatch();

    const GBSStatus = ! ( 'disabled' === enableGBSExtension );

    useEffect( () => {

        // Create an object with the security and enableGBSExtension properties
        const data = {
            security: uag_react.enable_gbs_extension_nonce,
            value: enableGBSExtension,
        };

        // Call the getApiData function with the specified parameters
       getApiData( {
            url: uag_react.ajax_url,
            action: 'uag_enable_gbs_extension',
            data,
        } );
    }, [enableGBSExtension] );

    const updateGBSStatus = () => {
        const assetStatus = ( 'disabled' === enableGBSExtension ) ? 'enabled' : 'disabled';

        dispatch( { type: 'UPDATE_GBS_EXTENSION', payload: assetStatus } );
		dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );

    };

    return (
        <div
        key={'gbs'}
        className={ uagbClassNames( [
                ( GBSStatus && uag_react.spectra_pro_status )
                    ? 'border-white bg-white shadow hover:shadow-hover hover:z-50'
                    : 'border-slate-200 spectra-disabled-icon',
                'box-border relative border rounded-md h-20 p-4 flex items-center gap-x-4 snap-start transition spectra-icon-transition'
            ] ) }
        >
            <span className="absolute -right-px -top-px text-[10px] text-spectra bg-violet-50 px-2 py-0.5 rounded-bl-[4px] rounded-tr-[4px]">
                { __( 'Beta', 'ultimate-addons-for-gutenberg' ) }
            </span>
            <div className="flex-shrink-0">
                { UAGB_Block_Icons[ 'global-block-styles' ] }
            </div>
            <div className="uagb-admin-block__extension-title flex-1 min-w-0">
                <p className="text-base font-medium text-slate-800">
                    { __( 'Global Block Style', 'ultimate-addons-for-gutenberg' ) }
                    <div className="inline-block align-text-bottom max-h-4 px-1.5 py-[3px] ml-1.5 text-[10px] leading-[10px] border border-slate-400 text-slate-500 rounded spectra-admin__block-label">
                        { __( 'Extension', 'ultimate-addons-for-gutenberg' ) }
                    </div>
                    { uag_react.spectra_pro_status && (
                        <div className="inline-block align-text-bottom max-h-4 px-1.5 py-[3px] ml-1.5 text-[10px] leading-[10px] border border-slate-800 bg-slate-800 text-white rounded spectra-admin__block-label">
                            { __( 'Pro', 'ultimate-addons-for-gutenberg' ) }
                        </div>
                    ) }
                </p>
                <a className="focus-visible:text-slate-500 active:text-slate-500 hover:text-slate-500 focus:text-slate-400 text-slate-400 text-sm truncate" href='https://wpspectra.com/docs/global-block-style-extension/' target="_blank" rel="noreferrer">{__( 'Documentation', 'ultimate-addons-for-gutenberg' )}</a>
            </div>
            { uag_react.spectra_pro_status ? (
                <Switch
                    checked={GBSStatus}
                    onChange={ updateGBSStatus }
                    className= { uagbClassNames( [ 
                        GBSStatus ? 'bg-spectra' : 'bg-slate-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    ] ) }
                >
                    <span
                        aria-hidden="true"
                        className={ uagbClassNames( [
                            GBSStatus ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        ] ) }
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

export default GBSExtension;