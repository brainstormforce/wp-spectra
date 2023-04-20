
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';
import Select from 'react-select';
import googleFonts from '@Controls/fonts';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const SelectedFontFamilies = () => {

    const dispatch = useDispatch();

    const enableSelectedFontFamilies = useSelector( ( state ) => state.enableSelectedFontFamilies );
    const selectedFontFamilies = useSelector( ( state ) => state.selectedFontFamilies );
    const enableSelectedFontFamiliesStatus = 'disabled' === enableSelectedFontFamilies ? false : true;

    const fonts = [];

    const customFonts = uag_admin_react.spectra_custom_fonts;

	Object.keys( googleFonts ).map( ( name ) => {  // eslint-disable-line array-callback-return

		if ( 'Default' !== name  ) {
			fonts.push( { value: name, label: name } );
		}
	} );

    // Push custom Fonts into stytem fonts object.
	Object.keys( customFonts ).map( ( name ) => {  // eslint-disable-line array-callback-return
        
		if ( 'Default' !== name  ) {
			fonts.push( { value: name, label: name } );
		}
	} );

    const updateEnableSelectedFontFamilies = () => {

        let assetStatus;
		if ( enableSelectedFontFamilies === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( { type: 'UPDATE_ENABLE_SELECTED_FONT_FAMILIES', payload: assetStatus } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_load_select_font_globally' );
		formData.append( 'security', uag_react.load_select_font_globally_nonce );
		formData.append( 'value', assetStatus );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
    };

    const updateSelectedFontFamilies = ( font ) => {
		if ( enableSelectedFontFamilies === 'enabled' ) {
			dispatch( { type: 'UPDATE_SELECTED_FONT_FAMILIES', payload: font } );

			const action = 'uag_select_font_globally',
				nonce = uag_react.select_font_globally_nonce;

			const formData = new window.FormData();

			formData.append( 'action', action );
			formData.append( 'security', nonce );
			formData.append( 'value', JSON.stringify( font ) );

			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( () => {
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
			} );
		}
	};
	const customStyles = {
		control: ( provided ) => ( {
			...provided,
			cursor: 'pointer',
			fontSize: '0.875rem', // Tailwind Text-sm.
			lineHeight: '1.25rem', // Tailwind Text-sm.
			borderRadius: '0.375rem', // Tailwind Rounded-md.
            color: '#64748b', // Tailwind Slate-500.
			borderColor: '#e2e8f0', // Tailwind Slate-200.
			boxShadow: 'none',
		} ),
		placeholder: ( provided ) => ( {
			...provided,
			color: '#94a3b8', // Tailwind Slate-400.
		} ),
        multiValue: ( provided ) => ( {
			...provided,
            marging: '0',
			borderRadius: '0.25rem', // Tailwind Rounded.            
			backgroundColor: '#e2e8f0', // Tailwind Slate-200.
		} ),
        multiValueLabel: ( provided ) => ( {
			...provided,
            color: '#64748b', // Tailwind Slate-500.
		} ),
        multiValueRemove: ( provided ) => ( {
			...provided,
            'color': '#64748b', // Tailwind Slate-500.
            '&:hover': {
                color: '#ef4444', // Tailwind Red-500.
                backgroundColor: '#e2e8f0', // Tailwind Slate-200.
            },
		} ),


	}
    return (
        <section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>  
            <div className='mr-16 w-full flex items-center'>
                <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
                    { __( 'Allow Only Selected Fonts', 'ultimate-addons-for-gutenberg' ) }
                </h3>
                <Switch
                    checked={ enableSelectedFontFamiliesStatus }
                    onChange={ updateEnableSelectedFontFamilies }
                    className={ classNames(
                        enableSelectedFontFamiliesStatus ? 'bg-spectra' : 'bg-slate-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    ) }
                    >
                    <span
                        aria-hidden="true"
                        className={ classNames(
                            enableSelectedFontFamiliesStatus ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        ) }
                    />
                </Switch>
            </div>
            <p className="mt-2 w-9/12 text-sm text-slate-500">
                { __( 'Spectra offers 700+ Google font options. If this is overwhelming for your clients, you can use this option to show only limited number of fonts in the block settings.', 'ultimate-addons-for-gutenberg' ) }
            </p>
            <Select
                isMulti
                placeholder={ __( 'Select the font families you want', 'ultimate-addons-for-gutenberg' ) }
                defaultValue = { selectedFontFamilies }
                onChange={ ( value ) => updateSelectedFontFamilies( value ) }
                options={ fonts }
                maxMenuHeight={ 140 }
                minMenuHeight = { 70 }
                isSearchable={true}
                className={ `mt-4 w-9/12 h-10 transition` }
                theme={ ( theme ) => ( {
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary: '#94a3b8', // Tailwind Slate-400.
                    },
                } ) }
                styles={ customStyles }
                components={ {
                    IndicatorSeparator: () => null
                } }
            />
        </section>
    );
};

export default SelectedFontFamilies;
