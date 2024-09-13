/* eslint-disable no-nested-ternary */

import React from 'react';
import { __ } from '@wordpress/i18n';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import getApiData from '@Controls/getApiData';

const PluginStats = () => {

	const dispatch = useDispatch();

	const activatePro = () => {
		const isThisNull = uag_react.spectra_pro_status;

		if ( '' === isThisNull ){

			// Create an object with the required data to activate the 'spectra' Pro feature
			const data = {
				security: uag_react.pro_activate_nonce,
				value: 'spectra',
			};

			// Call the getApiData function with the specified parameters
			const getApiFetchData = getApiData( {
				url: uag_react.ajax_url,
				action: 'uag_pro_activate',
				data,
			} );

			// Wait for the API call to complete, update the state to show a notification, and reload the page
			getApiFetchData.then( () => {
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Spectra Pro Activated!' } );
				setTimeout( ()=>{
					window.location.reload();
				}, 500 );
			} );
		}
	};

	const renderDivider = () => (
		<svg
			width='1'
			height='16'
			viewBox='0 0 1 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='mx-2'
		>
			<line x1='0.5' y1='2.18557e-08' x2='0.499999' y2='16' stroke='#E2E8F0'/>
		</svg>
	);

	const renderLicenseStatus = () => (
		uag_react.spectra_pro_installed ? (
			uag_react.spectra_pro_status ? (
				uag_react.license_status ? (
                    <Link
						className='mr-8 ml-2 text-sm text-emerald-500 active:text-emerald-500 hover:text-emerald-500 focus:text-emerald-500 cursor-pointer'
						to={ {
							pathname: 'admin.php',
							search: '?page=spectra&path=settings&settings=license',
						} }
						onClick={ () => {
							dispatch( { type:'UPDATE_SETTINGS_ACTIVE_NAVIGATION_TAB', payload: 'license' } )
						} }
                    >
						{ __( 'Licensed', 'ultimate-addons-for-gutenberg' ) }
					</Link>
				) : (
                    <Link
						className='mr-2 ml-2 text-sm text-red-500 active:text-red-500 hover:text-red-500 focus:text-red-500 cursor-pointer'
						to={ {
							pathname: 'admin.php',
							search: '?page=spectra&path=settings&settings=license',
						} }
						onClick={ () => {
							dispatch( { type:'UPDATE_SETTINGS_ACTIVE_NAVIGATION_TAB', payload: 'license' } )
						} }
                    >
                        { __( 'Unlicensed', 'ultimate-addons-for-gutenberg' ) }
					</Link>
				)
			) : (
				<div
					className='mr-2 ml-2 text-sm text-slate-500 cursor-pointer'
					role='button'
					tabIndex={ 0 }
					onClick={ activatePro }
					onKeyDown={ activatePro }
				>
					{ __( 'Activate Spectra Pro', 'ultimate-addons-for-gutenberg' ) }
				</div>
			)
		) : (
			<a
					className='mr-2 ml-2 text-sm flex items-center text-spectra active:text-spectra hover:text-spectra focus:text-spectra cursor-pointer font-medium'
					href={ 'https://wpspectra.com/pricing/?utm_source=dashboard&utm_medium=free-plugin&utm_campaign=top-bar' }
				rel='noreferrer noopener'
				target='_blank'
			>
				{ 
					<svg className='flex-shrink-0 mr-2 stroke-inherit' width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.3335 11.3332H12.6668M1.3335 0.666504L3.3335 8.6665H12.6668L14.6668 0.666504L10.6668 5.33317L8.00016 0.666504L5.3335 5.33317L1.3335 0.666504Z" stroke="#5A03EF" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				}
				{ __( 'Upgrade To Pro', 'ultimate-addons-for-gutenberg' ) }
			</a>
		)
	);

	return (
		<>
			{'not-installed' === uag_react.pro_plugin_status && (
				<>
					<a
						className='mr-2 ml-2 text-sm flex items-center text-spectra active:text-spectra hover:text-spectra focus:text-spectra cursor-pointer font-medium'
						href={'https://wpspectra.com/pricing/?utm_source=dashboard&utm_medium=free-plugin&utm_campaign=top-bar'}
						rel='noreferrer noopener'
						target='_blank'
					>
						{
							<svg className='flex-shrink-0 mr-2 stroke-inherit' width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3.3335 11.3332H12.6668M1.3335 0.666504L3.3335 8.6665H12.6668L14.6668 0.666504L10.6668 5.33317L8.00016 0.666504L5.3335 5.33317L1.3335 0.666504Z" stroke="#5A03EF" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						}
						{__( 'Upgrade To Pro', 'ultimate-addons-for-gutenberg' )}
					</a>
					{renderDivider()}
				</>
			)}
			<div className='mx-2 text-sm text-slate-400'>
				{ uag_react.plugin_ver }
			</div>
					<div className='mr-2 px-1.5 py-[3px] text-[10px] leading-[10px] text-slate-500 border border-slate-400 rounded'>
						{ __( 'Core', 'ultimate-addons-for-gutenberg' ) }
					</div>
				{( uag_react.spectra_pro_installed && uag_react.spectra_pro_ver ) && (
				<>
					{ renderDivider() }
					<div className='mx-2 text-sm text-slate-500'>
						{ uag_react.spectra_pro_ver }
					</div>
					<div className='mr-2 px-1.5 py-[3px] text-[10px] leading-[10px] text-white bg-slate-800 border border-slate-800 rounded'>
						{ __( 'Pro', 'ultimate-addons-for-gutenberg' ) }
					</div>
				</>
				) }
			{'not-installed' !== uag_react.pro_plugin_status && (
				<>
					{renderDivider()}
					{renderLicenseStatus()}
				</>
			)}
			{renderDivider()}
			<a
				href='https://wpspectra.com/docs/'
				target='_blank'
				rel="noreferrer"
				className='mx-2 text-sm font-medium text-slate-600 w-8 sm:w-10 h-8 sm:h-10 flex items-center whitespace-nowrap justify-center cursor-pointer rounded-full border border-slate-200'
			>
				{
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
						<path d="M9 3.03473C7.67311 1.84713 5.92089 1.125 4 1.125C3.12341 1.125 2.28195 1.27539 1.5 1.55176V13.4268C2.28195 13.1504 3.12341 13 4 13C5.92089 13 7.67311 13.7221 9 14.9097M9 3.03473C10.3269 1.84713 12.0791 1.125 14 1.125C14.8766 1.125 15.7181 1.27539 16.5 1.55176V13.4268C15.7181 13.1504 14.8766 13 14 13C12.0791 13 10.3269 13.7221 9 14.9097M9 3.03473V14.9097" stroke="#64748B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				}
			</a>
		</>
	);

};

export default PluginStats;
