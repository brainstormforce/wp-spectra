import { __ } from '@wordpress/i18n';
import { useCallback } from '@wordpress/element';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import { uagbClassNames, debounce } from '@Helpers/Helpers';
import getApiData from '@Controls/getApiData';

const QuickActionBar = () => {

    const enableQuickActionSidebarExtension = useSelector( ( state ) => state.enableQuickActionSidebarExtension );
    const dispatch = useDispatch();

	const QuickActionSidebarStatus = ( 'enabled' === enableQuickActionSidebarExtension );

	// Debounce function to limit the rate of execution of a function.
	const debouncedApiCall = useCallback(
		debounce( ( status ) => {
			const data = {
				security: uag_react.enable_quick_action_sidebar_nonce,
				value: status,
			};

			const getApiFetchData = getApiData( {
				url: uag_react.ajax_url,
				action: 'uag_enable_quick_action_sidebar',
				data,
			} );

			getApiFetchData.then( () => { } );
		}, 300 ), // Adjust the delay as needed.
		[ enableQuickActionSidebarExtension ]
	);

    const updateQuickActionSidebarStatus = () => {

        let assetStatus;
		if ( enableQuickActionSidebarExtension === 'enabled' ) {
			assetStatus = 'disabled';
		} else {
			assetStatus = 'enabled';
		}

        dispatch( {type: 'UPDATE_ENABLE_QUICK_ACTION_SIDEBAR_EXTENSION', payload: assetStatus } );
        dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		debouncedApiCall( assetStatus ); // Call the debounced function.
	};

    return (
        <section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>
            <div className='mr-16 w-full flex items-center'>
                <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
                    { __( 'Enable Quick Action Bar', 'ultimate-addons-for-gutenberg' ) }
                </h3>
                <Switch
                    checked={ QuickActionSidebarStatus }
					onChange={ updateQuickActionSidebarStatus }
                    className={ uagbClassNames( [
                        QuickActionSidebarStatus ? 'bg-spectra' : 'bg-slate-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none',
					] ) }
                >
                    <span
                        aria-hidden="true"
                        className={ uagbClassNames( [
                            QuickActionSidebarStatus ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
						] ) }
                    />
                </Switch>
            </div>
            <p className="mt-2 w-9/12 text-sm text-slate-500">
                { __( 'The Spectra Quick Action Bar lets you have all your frequently used Spectra blocks right at your fingertips!', 'ultimate-addons-for-gutenberg' ) }
            </p>
        </section>
    );
};

export default QuickActionBar;
