import { useState } from 'react';
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
	const [pages, setPages] = useState( [] )
	const [isFetchPages, setFetchPages] = useState( false )
    const enableComingSoonMode = useSelector( ( state ) => state.enableComingSoonMode );
    const comingSoonPage = useSelector( ( state ) => state.comingSoonPage );
    const enableComingSoonModeStatus = 'disabled' === enableComingSoonMode ? false : true;
	
	const updateenableComingSoonMode = () => {

		let assetStatus;
		if ( enableComingSoonMode === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( { type: 'UPDATE_ENABLE_COMING_SOON', payload: assetStatus } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_enable_coming_soon_mode' );
		formData.append( 'security', uag_react.enable_coming_soon_mode_nonce );
		formData.append( 'value', assetStatus );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload:  'Successfully saved!'  } );
		} );
    };
 
	const updateSelectedPage = ( page ) => {

		dispatch( { type: 'UPDATE_COMING_SOON_PAGE', payload: page.value } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_coming_soon_page' );
		formData.append( 'security', uag_react.coming_soon_page_nonce );
		formData.append( 'value', page.value );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

	const fetchPageHandler = ( keyword = '' ) => {
		const formData = new window.FormData();
		formData.append( 'action', 'uag_fetch_pages' );
		formData.append( 'security', uag_react.fetch_pages_nonce );
		formData.append( 'keyword', keyword );
		setFetchPages( true )
		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( response ) => {
			setFetchPages( false )
			setPages( response.data )
		} );
	}

	const onChangeHandler = ( value ) => {
		const filterData = pages.filter( ( item ) => item.label.toLowerCase().includes( value ) )
		if( filterData.length === 0 ){
			fetchPageHandler( value )
		}
	}

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
		<section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>  
			<div className='mr-16 w-full flex items-center'>
				<h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
					{ __( 'Enable Coming Soon Mode', 'ultimate-addons-for-gutenberg' ) }
				</h3>
				<Switch
						checked={ enableComingSoonModeStatus }
						onChange={ updateenableComingSoonMode }
						className={ classNames(
							enableComingSoonModeStatus ? 'bg-spectra' : 'bg-slate-200',
							'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
						) }
						>
						<span
							aria-hidden="true"
							className={ classNames(
								enableComingSoonModeStatus ? 'translate-x-5' : 'translate-x-0',
								'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
							) }
						/>
                </Switch>
			</div>
			<p className="mt-2 w-9/12 text-sm text-slate-500">
				{ __( 'Is your website still in the making? Is it not yet ready for other people to see?', 'ultimate-addons-for-gutenberg' ) }
			</p>
			<p className="mt-2 w-9/12 text-sm text-slate-500">
				{ __( 'Enable the coming soon mode. Only the page you select below will be displayed to people who are not logged in.', 'ultimate-addons-for-gutenberg' ) }
			</p>
			<Select
				isMulti={ false }
				placeholder={ __( 'Select the page you want', 'ultimate-addons-for-gutenberg' ) }
				defaultValue = { comingSoonPage }
				onChange={ ( value ) => updateSelectedPage( value ) }
				onInputChange={ onChangeHandler }
				options={ pages }
				maxMenuHeight={ 140 }
				minMenuHeight = { 70 }
				isSearchable={ true }
				className={ `mt-4 w-9/12 h-10 transition` }
				isLoading={ isFetchPages }
				onMenuOpen={ fetchPageHandler }
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

export default ComingSoon;
