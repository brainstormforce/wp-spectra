/* eslint-disable no-nested-ternary */

import React from 'react';

import { __ } from '@wordpress/i18n';

const PluginStats = () => {

	const renderDivider = () => (
		<svg width="1" height="16" viewBox="0 0 1 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="16" stroke="#E2E8F0"/>
		</svg>
	);

	const renderLicenseStatus = () => (
		uag_react.spectra_pro_installed ? (
			uag_react.spectra_pro_status ? (
				uag_react.license_status ? (
					__( 'License activated', 'ultimate-addons-for-gutenberg' )
				) : (
					__( 'License not activated', 'ultimate-addons-for-gutenberg' )
				)
			) : (
				__( 'Enable Spectra Pro', 'ultimate-addons-for-gutenberg' )
			)
		) : (
			__( 'Upgrade to Pro', 'ultimate-addons-for-gutenberg' )
		)
	);

	console.log( uag_react.spectra_pro_ver );

	return (
		<>
			<div>
				{ uag_react.plugin_ver }
			</div>
			{ ( uag_react.spectra_pro_ver ) && (
				<>
					{ renderDivider() }
					<div>
						{ uag_react.spectra_pro_ver }
					</div>
					{ renderDivider() }
					{ renderLicenseStatus() }
				</>
			) }
		</>
	);

};

export default PluginStats;