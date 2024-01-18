import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import UAGB_Block_Icons from '@Common/block-icons';
import { useEffect } from 'react';
import { uagbClassNames } from '@Utils/Helpers';
import getApiData from '@Controls/getApiData';

const QuickActionSidebarExtension = () => {

    const enableQuickActionSidebarExtension = useSelector( ( state ) => state.enableQuickActionSidebarExtension );
    const dispatch = useDispatch();

	const QuickActionSidebarStatus = ( 'enabled' === enableQuickActionSidebarExtension );

    useEffect( () => {

        // Create an object with the security and value properties
        const data = {
            security: uag_react.enable_quick_action_sidebar_nonce,
            value: enableQuickActionSidebarExtension,
        };
        // Call the getApiData function with the specified parameters
        const getApiFetchData = getApiData( {
            url: uag_react.ajax_url,
            action: 'uag_enable_quick_action_sidebar',
            data,
        } );
        // Wait for the API call to complete, but perform no actions after it finishes
        getApiFetchData.then( () => {} );

    }, [enableQuickActionSidebarExtension] );

    const updateQuickActionSidebarStatus = () => {

        let assetStatus;
		if ( enableQuickActionSidebarExtension === 'enabled' ) {
			assetStatus = 'disabled';
		} else {
			assetStatus = 'enabled';
		}

        dispatch( {type: 'UPDATE_ENABLE_QUICK_ACTION_SIDEBAR_EXTENSION', payload: assetStatus } );
        dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
    };

    return (
        <div
        key={'quick-action-sidebar'}
        className={ uagbClassNames( [
				QuickActionSidebarStatus
				? 'border-white bg-white shadow hover:shadow-hover hover:z-50'
				: 'border-slate-200 spectra-disabled-icon',
				'box-border relative border rounded-md h-20 p-4 flex items-center gap-x-4 snap-start transition spectra-icon-transition'
			]
        ) }
        >
            <div className="flex-shrink-0">
                { UAGB_Block_Icons['quick-action-bar'] }
            </div>
            <div className="uagb-admin-block__extension-title flex-1 min-w-0">
                <p className="text-base font-medium text-slate-800">
                    { __( 'Quick Action Bar', 'ultimate-addons-for-gutenberg' ) }
                    <div className="inline-block align-text-bottom max-h-4 px-1.5 py-[3px] ml-1.5 text-[10px] leading-[10px] border border-slate-400 text-slate-500 rounded spectra-admin__block-label">
                        { __( 'Extension', 'ultimate-addons-for-gutenberg' ) }
                    </div>
                </p>
				<span className="focus-visible:text-slate-500 active:text-slate-500 hover:text-slate-500 focus:text-slate-400 text-slate-400 text-sm truncate">{__( 'Coming soon', 'ultimate-addons-for-gutenberg' )}</span>
            </div>
            <Switch
                checked={QuickActionSidebarStatus}
                onChange={updateQuickActionSidebarStatus}
                className={ uagbClassNames( [
					QuickActionSidebarStatus ? 'bg-spectra' : 'bg-slate-200',
                    'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
				]

                )}
                >
                <span
                    aria-hidden="true"
                    className={ uagbClassNames( [
						QuickActionSidebarStatus ? 'translate-x-5' : 'translate-x-0',
						'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
					]
                    )}
                />
            </Switch>
        </div>
    );
};

export default QuickActionSidebarExtension;
