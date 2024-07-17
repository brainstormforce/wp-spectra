import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import { uagbClassNames } from '@Utils/Helpers';
import getApiData from '@Controls/getApiData';

const InheritFromThemeRender = () => {

    const dispatch = useDispatch();
    const inheritFromTheme = useSelector( ( state ) => state.btnInheritFromTheme );
    const enableInheritTheme = 'enabled' === inheritFromTheme; 

    const updateEnableInheritFromTheme = () => {

        const status = inheritFromTheme === 'disabled' ? 'enabled' : 'disabled';

        dispatch( { type: 'UPDATE_BTN_INHERIT_FROM_THEME', payload: status } );
        
        const data = {
            security: uag_react.btn_inherit_from_theme_nonce,
            value: status,
        };

        const getApiDataFetch = getApiData( {
            url: uag_react.ajax_url,
            action: 'uag_btn_inherit_from_theme',
            data,
        } );

        getApiDataFetch.then( () => {
            dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: __( 'Successfully saved!' , 'ultimate-addons-for-gutenberg' ) } );
        } );

    };

    return (
        <section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>
            <div className='mr-16 w-full flex items-center'>
                <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
                    { __( 'Button - Inherit From Theme', 'ultimate-addons-for-gutenberg' ) }
                </h3>
                <Switch
                    checked={ enableInheritTheme }
                    onChange={ updateEnableInheritFromTheme }
                    className={ uagbClassNames( [
                        enableInheritTheme ? 'bg-spectra' : 'bg-slate-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    ] ) }
                >
                    <span
                        aria-hidden="true"
                        className={ uagbClassNames( [
                            enableInheritTheme ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        ] ) }
                    />
                </Switch>
            </div>
            <p className="mt-2 w-9/12 text-sm text-slate-500">
            { __( 'Enable the "Inherit From Theme" option to make all buttons in Spectra blocks across your website inherit their styles from the theme.', 'ultimate-addons-for-gutenberg' ) }
            </p>
        </section>
    );
};

export default InheritFromThemeRender;