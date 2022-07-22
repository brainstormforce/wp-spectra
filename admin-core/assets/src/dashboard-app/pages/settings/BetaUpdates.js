import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';
import { useState } from 'react';
import { Button } from '@wordpress/components';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const BetaUpdates = () => {

    const dispatch = useDispatch();

	const [show, setshow] = useState( false );

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
        <section className='block border-b border-solid border-slate-200 p-6 justify-between'>  
            <div className='mr-16 w-full flex items-center'>
                <Button className='p-0 flex-1 justify-right inline-flex uag-accordion'
                    onClick={ () => setshow( ! show ) }
                >
                    { ! show && ( <svg className="w-4 text-sm mr-4 transition" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg> ) }
                    { show && ( <svg className="w-4 text-sm mr-4 transition" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg> ) }
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {__( 'Enable Beta', 'ultimate-addons-for-gutenberg' )}
                    </h3>
                </Button>
                <Switch
                    checked={enableBetaStatus}
                    onChange={updateEnableBetaStatus}
                    className={classNames(
                        enableBetaStatus ? 'bg-spectra' : 'bg-slate-200',
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
            { show && (
                <p className="mt-2 pl-8 w-8/12 text-sm">
                    { __( 'Enable this option to turn on beta updates and be notified when a new beta version of Spectra is available. The beta version will not install automatically, you will have to install it when you get a notification. It is recommended to try beta on a test environment only.', 'ultimate-addons-for-gutenberg' ) }
                </p>
            )}
        </section>
    );
};

export default BetaUpdates;
