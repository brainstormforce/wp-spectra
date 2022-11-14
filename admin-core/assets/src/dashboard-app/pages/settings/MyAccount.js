import React from 'react';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default function MyAccount(props) {
	const licenseStatus = uag_react.license_status;
	const licenseTriggerName = licenseStatus ? 'bsf_deactivate_license' : 'bsf_activate_license';
	const licenseTitle = licenseStatus ? __( 'Deactivate', 'ultimate-addons-for-gutenberg' ) : __( 'Activate', 'ultimate-addons-for-gutenberg' );
	const licensePlaceholder = licenseStatus ? __( 'Your license is active.', 'ultimate-addons-for-gutenberg' ) : __( 'Paste your license key here', 'ultimate-addons-for-gutenberg' );
	const licenseMessage = licenseStatus ? __( 'License successfully validated!', 'ultimate-addons-for-gutenberg' ) : __( `Please enter your valid license key below to activate Spectra Pro!`, "ultimate-addons-for-gutenberg" );

	return (
		<React.Fragment>
			<section className="block border-b border-solid border-slate-200 px-12 py-8 justify-between">
				<div className="mr-16 w-full">
					<form method="post" className="form-wrap bsf-license-register-astra-addon form-submited-astra-addon">
						<h3 className="mb-4 p-0 text-xl leading-6 font-semibold text-slate-800">
							{__("License Key", "astra")}
						</h3>

						{
							! licenseStatus && <p className="text-sm text-slate-600">
								{ __( 'Activate ', 'astra-addon' ) }
								<a href="#" className="text-astra font-medium underline" target='_blank'>
									Spectra PRO
								</a>{" "}
								{ __( ' addon to get professional support and automatic updates from your WordPress dashboard.', 'astra-addon' ) }
							</p>
						}

						<div className="mt-2">
							<label
								htmlFor="bsf_license_manager[license_key]"
								className="block mb-4 text-sm text-slate-500"
							>
								{ licenseMessage }
							</label>
							<div className="flex">
								<div className="relative">
									<input type="hidden" id="bsf_graupi_nonce" name="bsf_graupi_nonce" value={uag_react.bsf_graupi_nonce}/>
									<input type="hidden" name="_wp_http_referer" value={window.location.href.replace( window.location.origin, '' )}/>

									{
										// Added this because to avoid value={} attr to license input field as this won't make input typable.
										licenseStatus && <input type="hidden" id="bsf_license_manager[license_key]" name="bsf_license_manager[license_key]" value={ licensePlaceholder }/>
									}

									<input
										className="h-10 block w-[28rem] shadow-sm sm:text-sm placeholder-slate-400 transition spectra-admin__input-field"
										id={ licenseStatus ? 'astra_addon_license_key' : "bsf_license_manager[license_key]" }
										name={ licenseStatus ? 'astra_addon_license_key' : "bsf_license_manager[license_key]" }
										type="text"
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

									<input type="hidden" id="bsf_license_manager[product_id]" name="bsf_license_manager[product_id]" value={'spectra-pro'}/>
								</div>

								<button
									type="submit"
									name={licenseTriggerName}
									className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-spectra transition focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none"
								>
									{ licenseTitle }
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</React.Fragment>
	);
}

MyAccount.propTypes = propTypes;
MyAccount.defaultProps = defaultProps;
