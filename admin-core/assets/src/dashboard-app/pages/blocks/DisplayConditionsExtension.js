import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import UAGB_Block_Icons from '@Common/block-icons';
import { useEffect } from 'react';

import getApiData from '@Controls/getApiData';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const DisplayConditionsExtension = () => {

    const enableDisplayConditions = useSelector( ( state ) => state.enableDisplayConditions );
    const dispatch = useDispatch();

    const displayConditionsStatus = 'disabled' === enableDisplayConditions ? false : true;

    useEffect( () => {

        // Create an object with the security and value properties
        const data = {
            security: uag_react.enable_block_condition_nonce,
            value: enableDisplayConditions,
        };

        // Call the getApiData function with the specified parameters
        const getApiFetchData = getApiData( {
            url: uag_react.ajax_url,
            action: 'uag_enable_block_condition',
            data,
        } );

        // Wait for the API call to complete, but perform no actions after it finishes
        getApiFetchData.then( () => {} );

    }, [enableDisplayConditions] );

    const updateDisplayConditionsStatus = () => {

        let assetStatus;
		if ( enableDisplayConditions === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( {type: 'UPDATE_ENABLE_DISPLAY_CONDITIONS', payload: assetStatus } );
        dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
    };

    return (
        <div
        key={'display-conditons'}
        className={ classNames(
            displayConditionsStatus
                ? 'border-white bg-white shadow hover:shadow-hover hover:z-50'
                : 'border-slate-200 spectra-disabled-icon',
            'box-border relative border rounded-md h-20 p-4 flex items-center gap-x-4 snap-start transition spectra-icon-transition'
        ) }
        >
            <div className="flex-shrink-0 ml-0">
                { UAGB_Block_Icons['display-conditions'] }
            </div>
            <div className="uagb-admin-block__extension-title flex-1 min-w-0">
                <p className="text-base font-medium text-slate-800">
                    { __( 'Display Conditions', 'ultimate-addons-for-gutenberg' ) }
                    <div className="inline-block align-text-bottom max-h-4 px-1.5 py-[3px] ml-1.5 text-[10px] leading-[10px] border border-slate-400 text-slate-500 rounded spectra-admin__block-label">
                        { __( 'Extension', 'ultimate-addons-for-gutenberg' ) }
                    </div>
                </p>
                <a className="focus-visible:text-slate-500 active:text-slate-500 hover:text-slate-500 focus:text-slate-400 text-slate-400 text-sm truncate" href='https://wpspectra.com/docs/display-conditions-blocks/' target="_blank"rel="noreferrer">{__( 'Documentation', 'ultimate-addons-for-gutenberg' )}</a>
            </div>
            <Switch
                checked={displayConditionsStatus}
                onChange={updateDisplayConditionsStatus}
                className={classNames(
                    displayConditionsStatus ? 'bg-spectra' : 'bg-slate-200',
                    'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                )}
                >
                <span
                    aria-hidden="true"
                    className={classNames(
                    displayConditionsStatus ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                />
            </Switch>
        </div>
    );
};

export default DisplayConditionsExtension;
