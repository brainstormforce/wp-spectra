
import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { Switch } from '@headlessui/react';
import apiFetch from '@wordpress/api-fetch';
import { Button } from '@wordpress/components';

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
	
	const [show, setshow] = useState( false );
	const updateenableComingSoonMode = () => {

		let assetStatus;
		if ( enableComingSoonMode === 'disabled' ) {
            assetStatus = 'enabled';
			setshow(true);
		} else {
            assetStatus = 'disabled';
			setshow(false);
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
		} ),
	};

	return (
        <section className='flex p-8 justify-between'>
            <div className='pr-16 w-full'>
				<Button className='pr-16 inline-flex w-10/12 uag-accordion'
						onClick={ () => setshow( ! show )}
					>
                    { ! show && ( <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg> )}
                    { show && ( <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg> )}
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						{__( 'Enable Coming Soon Mode', 'ultimate-addons-for-gutenberg' )}
					</h3>
                </Button>
				<Switch
						checked={enableComingSoonModeStatus}
						onChange={updateenableComingSoonMode}
						className={classNames(
							enableComingSoonModeStatus ? 'bg-spectra' : 'bg-slate-200',
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
				{ show && (
					<>
						<p className="mt-[0.6rem] text-sm ">
							{ __( 'Is your website still in the making? Is it not yet ready for other people to see?', 'ultimate-addons-for-gutenberg' ) }
						</p>
						<p className="mt-[0.6rem] text-sm ">
							{ __( 'Enable the coming soon mode. Only the page you select below will be displayed to people who are not logged in.', 'ultimate-addons-for-gutenberg' ) }
						</p>
						<Select
							isMulti={false}
							placeholder={ __( 'Select the page you want' ) }
							defaultValue = { comingSoonPage }
							onChange={ ( value ) => updateSelectedPage( value ) }
							onInputChange={onChangeHandler}
							options={ pages }
							maxMenuHeight={ 140 }
							minMenuHeight = { 70 }
							isSearchable={true}
							className={`mt-4 cursor-pointer focus:ring-spectra`}
							isLoading={isFetchPages}
							onMenuOpen={fetchPageHandler}
							theme={( theme ) => ( {
								...theme,
								colors: {
								...theme.colors,
								primary: '#6104ff',
								},
							} )}
							styles={customStyles}
						/>
					</>
				)}
            </div>
            <div>
                
            </div>
        </section>
    );
};

export default ComingSoon;
