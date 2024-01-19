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

	const docsTrigger = () => {
		window.open( 'https://wpspectra.com/docs/', '_blank' );
	};

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
						className='mr-8 ml-2 text-sm text-red-500 active:text-red-500 hover:text-red-500 focus:text-red-500 cursor-pointer'
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
					className='mr-8 ml-2 text-sm text-slate-500 cursor-pointer'
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
				className='mr-8 ml-2 text-sm text-spectra active:text-spectra hover:text-spectra focus:text-spectra cursor-pointer'
				href={ uag_react.spectra_pro_url }
				rel='noreferrer noopener'
				target='_blank'
			>
				{ __( 'Upgrade to Pro', 'ultimate-addons-for-gutenberg' ) }
			</a>
		)
	);

	return (
		<>
						<button
							onClick={ docsTrigger }
							className='mx-2 text-sm font-medium text-slate-600'
						>
							{ __( 'Knowledge Base', 'ultimate-addons-for-gutenberg' ) }
						</button>
						{renderDivider()}
			<div className='mx-2 text-sm text-slate-400'>
				{ uag_react.plugin_ver }
			</div>
			{ ( uag_react.spectra_pro_installed && uag_react.spectra_pro_ver ) && (
				<>
					<div className='mr-2 px-1.5 py-[3px] text-[10px] leading-[10px] text-slate-500 border border-slate-400 rounded'>
						{ __( 'Core', 'ultimate-addons-for-gutenberg' ) }
					</div>
					{ renderDivider() }
					<div className='mx-2 text-sm text-slate-500'>
						{ uag_react.spectra_pro_ver }
					</div>
					<div className='mr-2 px-1.5 py-[3px] text-[10px] leading-[10px] text-white bg-slate-800 border border-slate-800 rounded'>
						{ __( 'Pro', 'ultimate-addons-for-gutenberg' ) }
					</div>
				</>
			) }
			{ ( ! uag_react.spectra_pro_installed || ( uag_react.spectra_pro_installed && uag_react.spectra_pro_licensing ) ) && (
				<>
					{ renderDivider() }
					{ renderLicenseStatus() }
				</>
			)}

		</>
	);

};

export default PluginStats;
