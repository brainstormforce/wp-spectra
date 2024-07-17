import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { Switch } from '@headlessui/react';
import { uagbClassNames } from '@Helpers/Helpers';

import getApiData from '@Controls/getApiData';

const Visibility = () => {
	const dispatch = useDispatch();
	const [ pages, setPages ] = useState( [] );
	const [ isFetchPages, setFetchPages ] = useState( false );
	const visibilityMode = useSelector( ( state ) => state.visibilityMode );
	const visibilityPage = useSelector( ( state ) => state.visibilityPage );
	// visibilityMode can have three value
	// comingSoon Mode = 'comingsoon', maintenance Mode = 'maintenance', none = 'disabled'.
	const enableComingSoonModeStatus = 'comingsoon' === visibilityMode || 'enabled' === visibilityMode;
	const enableMaintenanceModeStatus = 'maintenance' === visibilityMode;

	const updateVisibilityMode = ( mode ) => {
		let assetStatus;
		if ( visibilityMode === mode ) {
			assetStatus = 'disabled';
		} else {
			assetStatus = mode;
		}

		dispatch( { type: 'UPDATE_VISIBILITY_MODE', payload: assetStatus } );

		const data = {
			security: uag_react.visibility_mode_nonce,
			value: assetStatus,
		};

		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_visibility_mode',
			data,
		} );

		getApiFetchData.then( () => {
			dispatch( {
				type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
				payload: __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ),
			} );
		} );
	};
	const updateSelectedPage = ( page ) => {
		dispatch( { type: 'UPDATE_VISIBILITY_PAGE', payload: page.value } );

		// Create an object with the security and value properties
		const data = {
			security: uag_react.visibility_page_nonce,
			value: page.value,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_visibility_page',
			data,
		} );

		getApiFetchData.then( () => {
			dispatch( {
				type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
				payload: __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ),
			} );
		} );
	};

	const fetchPageHandler = ( keyword = '' ) => {
		// Create an object with the security and value properties
		const data = {
			security: uag_react.fetch_pages_nonce,
			keyword,
		};
		setFetchPages( true );
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_fetch_pages',
			data,
		} );
		// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
		getApiFetchData.then( ( response ) => {
			setFetchPages( false );
			setPages( response.data );
		} );
	};

	const onChangeHandler = ( value ) => {
		const filterData = pages.filter( ( item ) => item.label.toLowerCase().includes( value ) );
		if ( filterData.length === 0 ) {
			fetchPageHandler( value );
		}
	};

	const renderSelectComponent = () => (
		<Select
			isMulti={ false }
			placeholder={ __( 'Select the page you want', 'ultimate-addons-for-gutenberg' ) }
			defaultValue={ visibilityPage }
			onChange={ ( value ) => updateSelectedPage( value ) }
			onInputChange={ onChangeHandler }
			options={ pages }
			maxMenuHeight={ 140 }
			minMenuHeight={ 70 }
			isSearchable={ true }
			className={ `mt-4 w-9/12 h-10 transition` }
			isLoading={ isFetchPages }
			onMenuOpen={ fetchPageHandler }
			theme={ ( theme ) => ( {
				...theme,
				colors: {
					...theme.colors,
					primary: '#94a3b8',
				},
			} ) }
			styles={ customStyles }
			components={ {
				IndicatorSeparator: () => null,
			} }
		/>
	);

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
		singleValue: ( provided ) => ( {
			...provided,
			color: '#64748b', // Tailwind Slate-500.
		} ),
	};

	return (
		<>
			<section className="block border-b border-solid border-slate-200 px-12 py-8 justify-between">
				<div className="mr-16 w-full flex items-center">
					<h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
						{ __( 'Enable Coming Soon Mode', 'ultimate-addons-for-gutenberg' ) }
					</h3>
					<Switch
						checked={ visibilityMode === 'comingsoon' }
						onChange={ () => updateVisibilityMode( 'comingsoon' ) }
						className={ uagbClassNames( [
							enableComingSoonModeStatus ? 'bg-spectra' : 'bg-slate-200',
							'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none',
						] ) }
					>
						<span
							aria-hidden="true"
							className={ uagbClassNames( [
								enableComingSoonModeStatus ? 'translate-x-5' : 'translate-x-0',
								'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
							] ) }
						/>
					</Switch>
				</div>
				<p className="mt-2 w-9/12 text-sm text-slate-500">
					{ __(
						"Is your website still in the making and not yet ready for other people to see? When the site is ready to be indexed, the 'Coming Soon' page returns an HTTP 200 status code.",
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				{ enableComingSoonModeStatus && renderSelectComponent() }
			</section>
			<section className="block border-b border-solid border-slate-200 px-12 py-8 justify-between">
				<div className="mr-16 w-full flex items-center">
					<h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
						{ __( 'Enable Maintenance Mode', 'ultimate-addons-for-gutenberg' ) }
					</h3>
					<Switch
						checked={ visibilityMode === 'maintenance' }
						onChange={ () => updateVisibilityMode( 'maintenance' ) }
						className={ uagbClassNames( [
							enableMaintenanceModeStatus ? 'bg-spectra' : 'bg-slate-200',
							'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none',
						] ) }
					>
						<span
							aria-hidden="true"
							className={ uagbClassNames( [
								enableMaintenanceModeStatus ? 'translate-x-5' : 'translate-x-0',
								'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
							] ) }
						/>
					</Switch>
				</div>
				<p className="mt-2 w-9/12 text-sm text-slate-500">
					{ __(
						"Maintenance Mode returns an HTTP 503 status code, signaling to search engines to revisit the website shortly. However, it's advisable not to utilize this mode for extended periods, ideally limiting its use to a few days.",
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				{ enableMaintenanceModeStatus && renderSelectComponent() }
			</section>
		</>
	);
};

export default Visibility;
