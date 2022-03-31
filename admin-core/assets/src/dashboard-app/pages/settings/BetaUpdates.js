import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const BetaUpdates = () => {

    const dispatch = useDispatch();

    const enableBeta = useSelector( ( state ) => state.enableBeta );
    const enableBetaStatus = 'no' === enableBeta ? false : true;

    const updateEnableBetaStatus = () => {

        let assetStatus;
		if ( enableBeta === 'no' ) {
            assetStatus = 'yes';
		} else {
            assetStatus = 'no';
		}

        dispatch( {type: 'UPDATE_BETA', payload: assetStatus } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_enable_beta_updates' );
		formData.append( 'security', uag_react.enable_beta_updates_nonce );
		formData.append( 'value', assetStatus );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: true } );
		} );
    };

    return (
        <section className='flex'>
            <div className='pr-16 pb-8 w-[78%]'>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {__( 'Enable Beta', 'ultimate-addons-for-gutenberg' )}
                </h3>
                <p className="mt-[0.6rem] text-sm ">
                    { __( 'Enable this option to turn on beta updates and be notified when a new beta version of Spectra is available. The beta version will not install automatically, you will have to install it when you get a notification. It is recommended to try beta on a test environment only.', 'ultimate-addons-for-gutenberg' ) }
                </p>
            </div>
            <div>
                <Switch
                    checked={enableBetaStatus}
                    onChange={updateEnableBetaStatus}
                    className={classNames(
                        enableBetaStatus ? 'bg-wpcolor' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                    >
                    <span
                        aria-hidden="true"
                        className={classNames(
                        enableBetaStatus ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                    />
                </Switch>
            </div>
        </section>
    );
};

export default BetaUpdates;
