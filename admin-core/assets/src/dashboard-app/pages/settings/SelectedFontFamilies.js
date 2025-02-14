import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import googleFonts from '@Controls/fonts';

import getApiData from '@Controls/getApiData';

import SettingsItem from './SettingsItem';
import { Switch } from '@bsf/force-ui';

const SelectedFontFamilies = () => {
	const dispatch = useDispatch();

	const enableSelectedFontFamilies = useSelector( ( state ) => state.enableSelectedFontFamilies );
	const selectedFontFamilies = useSelector( ( state ) => state.selectedFontFamilies );
	const enableSelectedFontFamiliesStatus = 'disabled' === enableSelectedFontFamilies ? false : true;

	const fonts = [];

	const customFonts = uag_admin_react.spectra_custom_fonts;

	Object.keys( googleFonts ).map( ( name ) => {
		// eslint-disable-line array-callback-return

		if ( 'Default' !== name ) {
			fonts.push( { value: name, label: name } );
		}
		return [];
	} );

	// Push custom Fonts into stytem fonts object.
	Object.keys( customFonts ).map( ( name ) => {
		// eslint-disable-line array-callback-return

		if ( 'Default' !== name ) {
			fonts.push( { value: name, label: name } );
		}
		return [];
	} );

	const updateEnableSelectedFontFamilies = () => {
		let assetStatus;
		if ( enableSelectedFontFamilies === 'disabled' ) {
			assetStatus = 'enabled';
		} else {
			assetStatus = 'disabled';
		}

		dispatch( { type: 'UPDATE_ENABLE_SELECTED_FONT_FAMILIES', payload: assetStatus } );

		// Create an object with the security and value properties
		const data = {
			security: uag_react.load_select_font_globally_nonce,
			value: assetStatus,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_load_select_font_globally',
			data,
		} );
		// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
		getApiFetchData.then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

	const updateSelectedFontFamilies = ( font ) => {
		if ( enableSelectedFontFamilies === 'enabled' ) {
			dispatch( { type: 'UPDATE_SELECTED_FONT_FAMILIES', payload: font } );

			const action = 'uag_select_font_globally',
				nonce = uag_react.select_font_globally_nonce;

			// Create an object with the security and value properties
			const data = {
				security: nonce,
				value: JSON.stringify( font ),
			};
			// Call the getApiData function with the specified parameters
			const getApiFetchData = getApiData( {
				url: uag_react.ajax_url,
				action,
				data,
			} );
			// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
			getApiFetchData.then( () => {
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
	};

	return (
		<>
			<SettingsItem
				title={ __( 'Allow Only Selected Fonts', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					'Spectra offers 1500+ Google font options. If this is overwhelming for your clients, you can use this option to show only limited number of fonts in the block settings.',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<Switch
					value={ enableSelectedFontFamiliesStatus }
					onChange={ updateEnableSelectedFontFamilies }
					size="md"
					className="uagb-remove-ring border-none"
				/>
			</SettingsItem>

			<Select
                isMulti
                placeholder={ __( 'Select the font families you want', 'ultimate-addons-for-gutenberg' ) }
                defaultValue = { selectedFontFamilies }
                onChange={ ( value ) => updateSelectedFontFamilies( value ) }
                options={ fonts }
                maxMenuHeight={ 140 }
                minMenuHeight = { 70 }
                isSearchable={true}
                className={ `w-9/12 h-10 transition` }
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
		</>
	);
};

export default SelectedFontFamilies;
