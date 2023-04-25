import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useDispatch } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

export default function MyAccount() {
	const dispatch = useDispatch();
	const [ regenerateAssetsState, setRegenerateAssetsState ] = useState( false );
	const [ licenseKey, setlicenseKey ] = useState( '' );

	const licenseStatus = uag_react.license_status;
	const licenseTitle = licenseStatus ? __( 'Deactivate', 'ultimate-addons-for-gutenberg' ) : __( 'Activate', 'ultimate-addons-for-gutenberg' );
	const licensePlaceholder = licenseStatus ? __( 'Your license is active.', 'ultimate-addons-for-gutenberg' ) : __( 'Paste your license key here', 'ultimate-addons-for-gutenberg' );
	const licenseMessage = licenseStatus ? __( 'License successfully validated!', 'ultimate-addons-for-gutenberg' ) : __( `Please enter your valid license key below to activate Spectra Pro!`, 'ultimate-addons-for-gutenberg' );

	const activateHandler = () => {

		if ( ! licenseKey ) {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: {
				message : __( 'Please enter a valid license key!', 'ultimate-addons-for-gutenberg' ),
				messageType: 'error'
			} } );
			return;
		}
		setRegenerateAssetsState( 'loading' );
		const formData = new window.FormData();
		formData.append( 'action', 'uag_license_activation' );
		formData.append( 'security', uag_react.license_activation_nonce );
		formData.append( 'key', licenseKey );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
            if ( data.success ) {
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: __( 'License successfully validated!', 'ultimate-addons-for-gutenberg' ) } );
				location.reload(); // eslint-disable-line no-undef
			} else {
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: {
					message : data?.data?.message,
					messageType: 'error'
				} } );
				setlicenseKey( '' );
			}
			setRegenerateAssetsState( false );
		} );
	};

	const deactivateHandler = () => {
		setRegenerateAssetsState( 'loading' );
		const formData = new window.FormData();
		formData.append( 'action', 'uag_license_deactivation' );
		formData.append( 'security', uag_react.license_deactivation_nonce );
		
		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
            if ( data.success ) {
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: __( 'License successfully deactivated!', 'ultimate-addons-for-gutenberg' ) } );
				location.reload(); // eslint-disable-line no-undef
			} else {
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: {
					message : data?.data?.message,
					messageType: 'error'
				} } );
			}
			setRegenerateAssetsState( false );
		} );
	};

	return (
		<>
			<section className="block border-b border-solid border-slate-200 px-12 py-8 justify-between">
				<div className="mr-16 w-full">
					<h3 className="p-0 mb-2 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
					{__( 'License Key', 'ultimate-addons-for-gutenberg' )}
					</h3>
					<div className="w-9/12">
						{ ! licenseStatus && (
							<p
								style={ {
									margin: '0.5rem 0 0', /* Replicating Tailwind: mt-2 */
									color: '#64748b', /* Replicating Tailwind: text-slate-500 */
								} }
							>
								{ ReactHtmlParser(
									sprintf(
										// translators: %1$s: first anchor tag start, %2$s: first anchor tag end, %3$s second anchor tag start, %4$s second anchor tag end.
										__(
											'Activate %1$sSpectra Pro%2$s to get professional support and automatic updates from your WordPress dashboard. If you don\'t have a license, you can %3$sget it here »%4$s',
											'ultimate-addons-for-gutenberg'
										),
										'<a href="https://wpspectra.com/pro" class="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover" target="_blank" rel="noreferrer">',
										'</a>',
										'<a class="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover" target="_blank" href="https://wpspectra.com/pricing" rel="noreferrer">',
										'</a>'
									)
								) }
							</p>
						) }
						<p
							style={ {
								margin: '0.5rem 0 0', /* Replicating Tailwind: mt-2 */
								color: '#64748b', /* Replicating Tailwind: text-slate-500 */
							} }
						>
							{ licenseMessage }
						</p>
						<div className="mt-4 flex w-full">
							<div className="mr-5 h-10 relative flex-1">
								<input
									className={`w-full h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field ${ licenseStatus ? 'spectra-admin__input-field--read-only' : '' }`}
									type="text"
									value={licenseKey}
									onChange={( e ) => setlicenseKey( e?.target?.value )}
									placeholder={licensePlaceholder}
									readOnly={ licenseStatus ? true : false }
									style={{paddingLeft: '35px'}}
								/>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="absolute top-1/2 -translate-y-1/2 left-3"
								>
									<path
										d="M10 4.66667C10.7364 4.66667 11.3333 5.26362 11.3333 6M14 6C14 8.20914 12.2091 10 10 10C9.59589 10 9.20577 9.94007 8.83805 9.82862L7.33333 11.3333H6V12.6667H4.66667V14H2.66667C2.29848 14 2 13.7015 2 13.3333V11.6095C2 11.4327 2.07024 11.2631 2.19526 11.1381L6.17138 7.16195C6.05993 6.79423 6 6.40412 6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6Z"
										stroke="#94A3B8"
										strokeWidth="1.4"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							{ ! licenseStatus && (
								<button
									type="button"
									className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-spectra transition focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none"
									onClick={ activateHandler }
								>
									{ licenseTitle }
									{ 'loading' === regenerateAssetsState && (
										<svg className="animate-spin -mr-1 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
											<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
									) }
								</button>
							) }
							{ licenseStatus && (
								<button
									type="button"
									className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-spectra transition focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none"
									onClick={ deactivateHandler }
								>
									{ licenseTitle }
									{ 'loading' === regenerateAssetsState && (
										<svg className="animate-spin -mr-1 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
											<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
									) }
								</button>
							) }
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
