import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import { uagbClassNames } from '@Helpers/Helpers';
import getApiData from '@Controls/getApiData';

const HeaderTitlebar = () => {

    const enableHeaderTitlebar = useSelector( ( state ) => state.enableHeaderTitlebar );
    const dispatch = useDispatch();

    const headerTitlebarStatus = ( 'enabled' === enableHeaderTitlebar );

    useEffect( () => {
		const data = {
			security: uag_react.enable_header_titlebar_nonce,
			value: enableHeaderTitlebar,
		};
		
		const getApiDataFetch = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_enable_header_titlebar',
			data,
		} );

		getApiDataFetch.then( () => {} );
    }, [ enableHeaderTitlebar ] );

    const updateHeaderTitlebarStatus = () => {
        const assetStatus = ( enableHeaderTitlebar === 'disabled' ) ? 'enabled' : 'disabled' ;
        dispatch( { type: 'UPDATE_ENABLE_HEADER_TITLEBAR', payload: assetStatus } );
        dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
    };

    return (
        <section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>
            <div className='mr-16 w-full flex items-center'>
                <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
                    { __( 'Move Title to Top', 'ultimate-addons-for-gutenberg' ) }
                </h3>
                <Switch
                    checked={ headerTitlebarStatus }
                    onChange={ updateHeaderTitlebarStatus }
                    className={ uagbClassNames( [
                        headerTitlebarStatus ? 'bg-spectra' : 'bg-slate-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none',
					] ) }
                >
                    <span
                        aria-hidden="true"
                        className={ uagbClassNames( [
                            headerTitlebarStatus ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
						] ) }
                    />
                </Switch>
            </div>
            <p className="mt-2 w-9/12 text-sm text-slate-500">
                { __( 'Move the page title to the top, allowing you to have a much more cleaner editor.', 'ultimate-addons-for-gutenberg' ) }
            </p>
        </section>
    );
};

export default HeaderTitlebar;
