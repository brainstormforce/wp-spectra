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

        dispatch( { type: 'UPDATE_TEMPLATES_BUTTON', payload: assetStatus } );

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
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
    };

    return (
        <section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>
            <div className='mr-16 w-full flex items-center'>
                <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
                    { __( 'Enable Templates Button', 'ultimate-addons-for-gutenberg' ) }
                </h3>
                <Switch
                    checked={ enableTemplatesStatus }
                    onChange={ updateEnableTemplatesStatus }
                    className={ classNames(
                        enableTemplatesStatus ? 'bg-spectra' : 'bg-slate-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    ) }
                >
                    <span
                        aria-hidden="true"
                        className={ classNames(
                            enableTemplatesStatus ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        ) }
                    />
                </Switch>
            </div>
            <p className="mt-2 w-9/12 text-sm text-slate-500">
                { __( 'Spectra comes with a stunning library of page templates and block patterns. This library is accessible with the Templates button while editing the page or post. Manage the visibility of that button with this option.', 'ultimate-addons-for-gutenberg' ) }
            </p>
        </section>
    );
};

export default TemplatesButton;
