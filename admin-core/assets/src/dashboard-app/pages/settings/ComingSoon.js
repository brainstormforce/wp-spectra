
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { Switch } from '@headlessui/react';
import apiFetch from '@wordpress/api-fetch';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const ComingSoon = () => {

	const dispatch = useDispatch();

    const enableComingSoonMode = useSelector( ( state ) => state.enableComingSoonMode );
    const comingSoonPage = useSelector( ( state ) => state.comingSoonPage );
    const enableComingSoonModeStatus = 'disabled' === enableComingSoonMode ? false : true;


	const pages = [];
	let defaultPage = {};

	const updateenableComingSoonMode = () => {

		let assetStatus;
		if ( enableComingSoonMode === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( {type: 'UPDATE_ENABLE_COMING_SOON', payload: assetStatus } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_enable_coming_soon_mode' );
		formData.append( 'security', uag_react.enable_coming_soon_mode_nonce );
		formData.append( 'value', assetStatus );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: true } );
		} );
    };

	const updateSelectedPage = ( page ) => {

		dispatch( {type: 'UPDATE_COMING_SOON_PAGE', payload: page.value } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_coming_soon_page' );
		formData.append( 'security', uag_react.coming_soon_page_nonce );
		formData.append( 'value', page.value );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: true } );
		} );
	};

	const customStyles = {
		control: ( provided ) => ( {
		  ...provided,
		  cursor: 'pointer',
		} ),
	};

	return (
        <section className='flex border-b border-solid border-slate-200'>
            <div className='pr-16 pb-8 w-[78%]'>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {__( 'Enable Coming Soon Mode', 'ultimate-addons-for-gutenberg' )}
                </h3>
                <p className="mt-[0.6rem] text-sm ">
                    { __( 'Set your entire website as COMING SOON mode, meaning the site is offline until it is ready to be launched.', 'ultimate-addons-for-gutenberg' ) }
                </p>
                <Select
                    isMulti={false}
                    placeholder={ __( 'Select the page you want' ) }
                    defaultValue = { defaultPage }
                    onChange={ ( value ) => updateSelectedPage( value ) }
                    options={ [] }
                    maxMenuHeight={ 140 }
                    minMenuHeight = { 70 }
                    isSearchable={true}
                    className={`mt-4 cursor-pointer focus:ring-wpcolor`}
					theme={( theme ) => ( {
						...theme,
						colors: {
						  ...theme.colors,
						  primary: '#6104ff',
						},
					} )}
					styles={customStyles}
                />
            </div>
            <div>
                <Switch
                    checked={enableComingSoonModeStatus}
                    onChange={updateenableComingSoonMode}
                    className={classNames(
                        enableComingSoonModeStatus ? 'bg-wpcolor' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    )}
                    >
                    <span
                        aria-hidden="true"
                        className={classNames(
                        enableComingSoonModeStatus ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                    />
                </Switch>
            </div>
        </section>
    );
};

export default ComingSoon;
