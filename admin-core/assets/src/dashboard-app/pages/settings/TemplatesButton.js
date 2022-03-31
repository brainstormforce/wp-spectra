import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const TemplatesButton = () => {

    const dispatch = useDispatch();

    const enableTemplates = useSelector( ( state ) => state.enableTemplates );
    const enableTemplatesStatus = 'no' === enableTemplates ? false : true;

    const updateEnableTemplatesStatus = () => {

        let assetStatus;
		if ( enableTemplates === 'no' ) {
            assetStatus = 'yes';
		} else {
            assetStatus = 'no';
		}

        dispatch( {type: 'UPDATE_TEMPLATES_BUTTON', payload: assetStatus } );

		const action = 'uag_enable_templates_button',
			nonce = uag_react.enable_templates_button_nonce;

		const formData = new window.FormData();

		formData.append( 'action', action );
		formData.append( 'security', nonce );
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
                    {__( 'Enable Templates Button', 'ultimate-addons-for-gutenberg' )}
                </h3>
                <p className="mt-[0.6rem] text-sm ">
                    { __( 'Spectra comes with a stunning library of page templates and block patterns. This library is accessible with the Templates button while editing the page or post. Manage the visibility of that button with this option.', 'ultimate-addons-for-gutenberg' ) }
                </p>
            </div>
            <div>
                <Switch
                    checked={enableTemplatesStatus}
                    onChange={updateEnableTemplatesStatus}
                    className={classNames(
                        enableTemplatesStatus ? 'bg-wpcolor' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    )}
                    >
                    <span
                        aria-hidden="true"
                        className={classNames(
                        enableTemplatesStatus ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                    />
                </Switch>
            </div>
        </section>
    );
};

export default TemplatesButton;
