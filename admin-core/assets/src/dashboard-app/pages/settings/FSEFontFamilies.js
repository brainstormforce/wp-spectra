import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import googleFonts from '@Controls/fonts';
import { useState, useRef } from '@wordpress/element';
import FSEDisplayFontFamilies from './FSEDisplayFontFamilies';
import FSEFontFamiliesSkeleton from '@DashboardApp/pages/settings/FSEFontFamiliesSkeleton';
import getApiData from '@Controls/getApiData';
import SettingsItem from './SettingsItem';
import { Switch } from '@bsf/force-ui';

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
		const name = font?.[ 0 ];
		const slug = name.replace( /\s+/, '' ).toLowerCase();
		const weight = font?.[ 1 ]?.weight;
		const style = font?.[ 1 ]?.i;
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
		if ( 'Default' !== name ) {
			fonts?.push( { value: name, label: name, weights, styles } );
		}
		return font;
	} );

	// Push custom Fonts into stytem fonts object.
	Object.keys( customFonts )?.forEach( ( name ) => {
		if ( 'Default' !== name ) {
			fonts?.push( { value: name, label: name } );
		}
	} );

	let weights = [];
	for ( const key in fonts ) {
		if ( fseFontFamilies?.value === fonts[ key ]?.value ) {
			weights = fonts[ key ]?.weights;
		}
	}

	let styles = [];
	for ( const key in fonts ) {
		if ( fseFontFamilies?.value === fonts[ key ]?.value ) {
			styles = fonts[ key ]?.styles;
		}
	}
	const updateEnableSelectedFontFamilies = () => {
		const assetStatus = enableFSEFontFamilies === 'disabled' ? 'enabled' : 'disabled';

		dispatch( { type: 'UPDATE_ENABLE_FSE_FONT_FAMILIES', payload: assetStatus } );

		const data = {
			security: uag_react.load_fse_font_globally_nonce,
			value: assetStatus,
		};

		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_load_fse_font_globally',
			data,
		} );

		getApiFetchData.then( () => {
			dispatch( {
				type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
				payload: __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ),
			} );
			location.reload();
		} );
	};

	const updateSelectedFontFamilies = ( font, type ) => {
		if ( enableFSEFontFamilies === 'enabled' ) {
			const updateObj = { ...fseFontFamilies };
			switch ( type ) {
				case 'family':
					setFSEFontFamilies( font );
					break;
				case 'weight':
					updateObj.weight = font;
					font = updateObj;
					setFSEFontFamilies( font );
					break;
				case 'styles':
					updateObj.style = font;
					font = updateObj;
					setFSEFontFamilies( font );
					break;
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
	};

	const saveGoogleFontsHandler = () => {
		familyRef.current.select.clearValue();
		setShowLoader( true );
		setSaveToDB( true );

		const data = {
			security: uag_react.fse_font_globally_nonce,
			value: JSON.stringify( fseFontFamilies ),
		};

		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_fse_font_globally',
			data,
		} );

		getApiFetchData.then( () => {
			setSaveToDB( false );
			setFSEFontFamilies( [ { value: null, label: '' } ] );
			dispatch( {
				type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
				payload: __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ),
			} );
			location.reload();
		} );
	};

	if ( showLoader ) {
		return <FSEFontFamiliesSkeleton />;
	}

	return (
		<>
			<SettingsItem
				title={ __( 'Font Families', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					'Spectra offers 1500+ Google font options. If this is overwhelming for your clients, you can use this option to show only limited number of fonts in the block settings.',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<Switch
					aria-label="Switch Element"
					id="switch-element"
					value={ enableFSEFontFamiliesStatus }
					onChange={ updateEnableSelectedFontFamilies }
					size="md"
					className="uagb-remove-ring border-none"
				/>
			</SettingsItem>

			<div className="w-full flex flex-col items-center">
				<Select
					placeholder={ __( 'Select the font families you want', 'ultimate-addons-for-gutenberg' ) }
					defaultValue={ fseFontFamilies }
					ref={ familyRef }
					onChange={ ( value ) => updateSelectedFontFamilies( value, 'family' ) }
					options={ fonts }
					maxMenuHeight={ 140 }
					minMenuHeight={ 70 }
					isSearchable={ true }
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
						IndicatorSeparator: () => null,
					} }
				/>

				{ fseFontFamilies?.value && fseFontFamilies?.weights && (
					<Select
						isMulti
						placeholder={ __( 'Select one or more font weights', 'ultimate-addons-for-gutenberg' ) }
						defaultValue={ fseFontFamilies?.weight }
						ref={ weightRef }
						onChange={ ( value ) => updateSelectedFontFamilies( value, 'weight' ) }
						options={ weights }
						maxMenuHeight={ 140 }
						minMenuHeight={ 70 }
						isSearchable={ true }
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
							IndicatorSeparator: () => null,
						} }
					/>
				) }
				{ fseFontFamilies?.value && fseFontFamilies?.styles && (
					<Select
						isMulti
						placeholder={ __( 'Select one or more font styles', 'ultimate-addons-for-gutenberg' ) }
						defaultValue={ fseFontFamilies?.style }
						ref={ styleRef }
						onChange={ ( value ) => updateSelectedFontFamilies( value, 'styles' ) }
						options={ styles }
						maxMenuHeight={ 140 }
						minMenuHeight={ 70 }
						isSearchable={ true }
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
							IndicatorSeparator: () => null,
						} }
					/>
				) }
				{ fseFontFamilies?.value && fseFontFamilies?.weight && fseFontFamilies?.style && (
					<button
						type="button"
						className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-spectra transition focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none h-9 mt-3 cursor-pointer"
						onClick={ saveGoogleFontsHandler }
					>
						{ saveToDB && (
							<svg
								className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						) }
						{ __( 'Add Google Font', 'ultimate-addons-for-gutenberg' ) }
					</button>
				) }
			</div>

			{ enableFSEFontFamiliesStatus && (
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
								<th scope="col" className="px-6 py-3"></th>
							</tr>
						</thead>
						<tbody>
							{ 0 === spectraFSEFonts?.length && (
								<div className="px-6 py-3">
									{ __( 'Currently, no Font Families added.', 'ultimate-addons-for-gutenberg' ) }
								</div>
							) }
							{ spectraFSEFonts &&
								0 !== spectraFSEFonts?.length &&
								spectraFSEFonts.map( ( font ) => {
									return (
										<FSEDisplayFontFamilies
											key={ font?.value }
											fontFamily={ font?.value }
											fontWeight={ font?.weight }
											fontStyle={ font?.style }
											setShowLoader={ setShowLoader }
										/>
									);
								} ) }
						</tbody>
					</table>
				</div>
			) }
		</>
	);
};

export default FSEFontFamilies;
