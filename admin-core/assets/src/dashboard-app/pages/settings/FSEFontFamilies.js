
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';
import Select from 'react-select';
import googleFonts from '@Controls/fonts';
import { useState, useRef } from '@wordpress/element';
import FSEDisplayFontFamilies from './FSEDisplayFontFamilies';
import FSEFontFamiliesSkeleton from '@DashboardApp/pages/settings/FSEFontFamiliesSkeleton';
import { uagbClassNames } from '@Helpers/Helpers';

const FSEFontFamilies = () => {

    const dispatch = useDispatch();
    const familyRef = useRef();
    const weightRef = useRef();
    const styleRef = useRef();

    const spectraFSEFonts = useSelector( ( state ) => state.spectraFSEFonts );
    const themeFonts = useSelector( ( state ) => state.themeFonts );
    const enableFSEFontFamilies = useSelector( ( state ) => state.enableFSEFontFamilies );
    const [ fseFontFamilies, setFSEFontFamilies ] = useState( [] );

    const enableFSEFontFamiliesStatus = 'disabled' === enableFSEFontFamilies ? false : true;
    const [ saveToDB, setSaveToDB ] = useState( false );
    const [ showLoader, setShowLoader ] = useState( false );

    const fonts = [];

    const customFonts = uag_admin_react.spectra_custom_fonts;
    const savedFonts = [];
    themeFonts.map( ( font ) => {
        savedFonts.push( font?.slug );
        return font;
    } );
   
	Object.entries( googleFonts ).map( ( font ) => {

        const name = font?.[0];
        const slug = name.replace( /\s+/, '' ).toLowerCase();
        const weight = font?.[1]?.weight;
        const style = font?.[1]?.i;
        const weights = [];
        const styles = [];

        if ( savedFonts?.includes( slug ) ) {
            return font;
        }

        weight?.map( ( value ) => {
            weights?.push( { value, label: value } );
            return value;
        } );
        style?.map( ( value ) => {
            styles?.push( { value, label: value } );
            return value;
        } );
		if ( 'Default' !== name  ) {
			fonts?.push( { value: name, label: name, weights, styles } );
		}
        return font;
	} );

    // Push custom Fonts into stytem fonts object.
	Object.keys( customFonts )?.map( ( name ) => {  // eslint-disable-line array-callback-return
        
		if ( 'Default' !== name  ) {
			fonts?.push( { value: name, label: name } );
		}
	} );

    let weights = [];
    for ( const key in fonts ) {
        if ( fseFontFamilies?.value === fonts[key]?.value ) {
            weights = fonts[key]?.weights
        }
    }

    let styles = [];
    for ( const key in fonts ) {
        if ( fseFontFamilies?.value === fonts[key]?.value ) {
            styles = fonts[key]?.styles
        }
    }
    const updateEnableSelectedFontFamilies = () => {

        let assetStatus;
		if ( enableFSEFontFamilies === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( { type: 'UPDATE_ENABLE_FSE_FONT_FAMILIES', payload: assetStatus } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_load_fse_font_globally' );
		formData.append( 'security', uag_react.load_fse_font_globally_nonce );
		formData.append( 'value', assetStatus );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ) } );
            location.reload();
		} );
    };
   
    const updateSelectedFontFamilies = ( font, type ) => {
		if ( enableFSEFontFamilies === 'enabled' ) {
            if ( 'family' === type ) {
                setFSEFontFamilies( font );
            } else if ( 'weight' === type ) {
                const updateObj = {...fseFontFamilies}
                updateObj.weight = font;
                font = updateObj;
                setFSEFontFamilies( font );
            } else if ( 'styles' === type ) {
                const updateObj = {...fseFontFamilies}
                updateObj.style = font;
                font = updateObj;
                setFSEFontFamilies( font );
            }
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

    const saveGoogleFontsHandler = () => {
        familyRef.current.select.clearValue();
        setShowLoader( true );
        setSaveToDB( true );
        const action = 'uag_fse_font_globally',
                nonce = uag_react.fse_font_globally_nonce;

        const formData = new window.FormData();

        formData.append( 'action', action );
        formData.append( 'security', nonce );
        formData.append( 'value', JSON.stringify( fseFontFamilies ) );

        apiFetch( {
            url: uag_react.ajax_url,
            method: 'POST',
            body: formData,
        } ).then( () => {
            setSaveToDB( false );
            setFSEFontFamilies( [{value: null, label: ''}] );
            dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload:  __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ) } );
            location.reload();

        } );
    };

    if ( showLoader ) {
        return <FSEFontFamiliesSkeleton/>;
    }

    
    return (
        <>
        <div className='mr-16 w-full flex items-center px-12 pt-8'>
            <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
                { __( 'Font Families', 'ultimate-addons-for-gutenberg' ) }
            </h3>
            <Switch
                checked={ enableFSEFontFamiliesStatus }
                onChange={ updateEnableSelectedFontFamilies }
                className={ uagbClassNames( [
                    enableFSEFontFamiliesStatus ? 'bg-spectra' : 'bg-slate-200',
                    'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                ] ) }
                >
                <span
                    aria-hidden="true"
                    className={ uagbClassNames( [
                        enableFSEFontFamiliesStatus ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    ] ) }
                />
            </Switch>
        </div>
        <section className={`block border-b border-solid border-slate-200 px-12 pb-8 justify-between ${ ! enableFSEFontFamiliesStatus ? 'uag-font-select-disabled' : ''}`}>  
            <p className="mt-2 w-9/12 text-sm text-slate-500">
                { __( 'Spectra offers 700+ Google font options. You can select which you want to use in your FSE Typography', 'ultimate-addons-for-gutenberg' ) }
            </p>
            <Select
                placeholder={ __( 'Select the font families you want', 'ultimate-addons-for-gutenberg' ) }
                defaultValue = { fseFontFamilies }
                ref={familyRef}
                onChange={ ( value ) => updateSelectedFontFamilies( value, 'family' ) }
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
            {
                fseFontFamilies?.value && fseFontFamilies?.weights &&
                <Select
                    isMulti
                    placeholder={ __( 'Select one or more font weights', 'ultimate-addons-for-gutenberg' ) }
                    defaultValue = { fseFontFamilies?.weight }
                    ref={weightRef}
                    onChange={ ( value ) => updateSelectedFontFamilies( value, 'weight' ) }
                    options={ weights }
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
            }
            {
                fseFontFamilies?.value && fseFontFamilies?.styles &&
                <Select
                    isMulti
                    placeholder={ __( 'Select one or more font styles', 'ultimate-addons-for-gutenberg' ) }
                    defaultValue = { fseFontFamilies?.style }
                    ref={styleRef}
                    onChange={ ( value ) => updateSelectedFontFamilies( value, 'styles' ) }
                    options={ styles }
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
            }
            {
                fseFontFamilies?.value && fseFontFamilies?.weight && fseFontFamilies?.style &&
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-spectra transition focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none h-9 mt-3"
                    onClick={ saveGoogleFontsHandler }
                >
                    { saveToDB && (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) }
                    { __( 'Add Google Font', 'ultimate-addons-for-gutenberg' ) }
                </button>
            }
        </section>
        {

            enableFSEFontFamiliesStatus &&
            <div className="relative overflow-x-auto py-8 px-12 max-h-[23rem]">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                            { __( 'Font Family', 'ultimate-addons-for-gutenberg' ) }
                            </th>
                            <th scope="col" className="px-6 py-3">
                            { __( 'Variant', 'ultimate-addons-for-gutenberg' ) }
                            </th>
                            <th scope="col" className="px-6 py-3">
                            { __( 'Style', 'ultimate-addons-for-gutenberg' ) }
                            </th>
                            <th scope="col" className="px-6 py-3">
                        
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            0 === spectraFSEFonts?.length &&
                            (
                                <div className="px-6 py-3">
                                {__( 'Currently no Font Families added.', 'ultimate-addons-for-gutenberg' )}
                                </div>
                            )
                        }
                        {
                            spectraFSEFonts && 0 !== spectraFSEFonts?.length &&
                            spectraFSEFonts.map( ( font ) => {
                                return (
                                    <FSEDisplayFontFamilies key={font?.value} fontFamily={font?.value} fontWeight={font?.weight} fontStyle={font?.style} setShowLoader={setShowLoader} />
                                );
                            } )
                        }
                    </tbody>
                </table>
            </div>
        }
        </>
    );
};

export default FSEFontFamilies;
