import React from 'react';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default function MyAccount(props) {
	return (
		<React.Fragment>
			<section className="block border-b border-solid border-slate-200 px-12 py-8 justify-between">
				<div className="mr-16 w-full">
					<form method="post" className="form-wrap bsf-license-register-astra-addon form-submited-astra-addon">
						<h3 className="mb-4 p-0 text-xl leading-6 font-semibold text-slate-800">{__('License Key', 'ultimate-addons-for-gutenberg')}</h3>
						<p className="text-sm text-slate-600">
							{__('Activate', 'ultimate-addons-for-gutenberg')} <a href="https://wpspectra.com/pricing/" className="font-medium underline" target="_blank">{__('Spectra Pro', 'ultimate-addons-for-gutenberg')}</a> {__('addon to get professional support and automatic updates from your WordPress dashboard.', 'ultimate-addons-for-gutenberg')}
						</p>
						<div className="mt-2">
							<label for="bsf_license_manager[license_key]" className="block mb-4 text-sm text-slate-500">{__('Please enter your valid license key below to activate Spectra Pro!', 'ultimate-addons-for-gutenberg')}</label>
							<div className="flex">
								<div className="relative">
									<input
										className="h-10 block w-[28rem] shadow-sm sm:text-sm placeholder-slate-400 transition spectra-admin__input-field"
										id="bsf_license_manager[license_key]"
										name="bsf_license_manager[license_key]"
										type="text"
										placeholder="Paste your license key here"
										style={{paddingLeft: '35px'}}
									/>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 -translate-y-1/2 left-3">
										<path
											d="M10 4.66667C10.7364 4.66667 11.3333 5.26362 11.3333 6M14 6C14 8.20914 12.2091 10 10 10C9.59589 10 9.20577 9.94007 8.83805 9.82862L7.33333 11.3333H6V12.6667H4.66667V14H2.66667C2.29848 14 2 13.7015 2 13.3333V11.6095C2 11.4327 2.07024 11.2631 2.19526 11.1381L6.17138 7.16195C6.05993 6.79423 6 6.40412 6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6Z"
											stroke="#94A3B8"
											stroke-width="1.4"
											stroke-linecap="round"
											stroke-linejoin="round"
										></path>
									</svg>
									<input type="hidden" id="bsf_license_manager[product_id]" name="bsf_license_manager[product_id]" value="astra-addon" />
								</div>
								<button type="submit" name="bsf_activate_license" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-spectra transition focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none">Activate</button>
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
