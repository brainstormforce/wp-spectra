import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import apiFetch from '@wordpress/api-fetch';
import { useStateValue } from '@Utils/StateProvider';
import { __ } from '@wordpress/i18n';

import './SettingsPage.scss';

import Nav from '@SettingsApp/components/settings-page/SettingNav';
import GeneralSettings from '@SettingsApp/components/settings-page/GeneralSettings';
import OtherSettings from '@SettingsApp/components/settings-page/OtherSettings';

import SettingPageSkeleton from '@Admin/settings-app/components/settings-page/SettingsPageSkeleton';

function SettingsPage() {
	const [ { globaldata }, dispatch ] = useStateValue();

	let loading = true;

	if ( 'undefined' === typeof globaldata.length ) {
		loading = false;
	}

	useEffect( () => {
		let isActive = true;
		if ( globaldata.length < 1 ) {
			const getsettings = async () => {
				apiFetch( {
					path: '/uag/v1/admin/commonsettings/',
				} ).then( ( data ) => {
					if ( isActive ) {
						dispatch( {
							type: 'SET_SETTINGS',
							commondata: data,
						} );
					}
				} );
			};

			getsettings();
		}
		return () => {
			isActive = false;
		};
	}, [] );

	let location = useLocation();
	let tab = location.hash;
	let current_tab = <p>Default Tab</p>;

	if ( loading ) {
		return <SettingPageSkeleton />;
	} else {
		switch ( tab ) {
			case '#general_settings':
				current_tab = (
					<GeneralSettings
						data={ globaldata.general }
						list={ globaldata.checkout_list }
					/>
				);
				break;
			case '#other_settings':
				current_tab = (
					<OtherSettings data={ globaldata.other_setttings } />
				);

				break;

			default:
				current_tab = (
					<GeneralSettings
						data={ globaldata.general }
						list={ globaldata.checkout_list }
					/>
				);
				break;
		}
	}
	return (
		<div className="wcf-global-settings-metabox">
			<div className="wcf-global-settings-metabox__tabs">
				<nav className="wcf-global-settings-metabox__tabs-menu">
					<Nav
						title={ __( 'General Settings', 'ultimate-addons-for-gutenberg' ) }
						slug="#general_settings"
					/>
					<Nav
						title={ __( 'Other Settings', 'ultimate-addons-for-gutenberg' ) }
						slug="#other_settings"
					/>
				</nav>

				<div className="wcf-global-settings-metabox__current-tab">
					<>{ current_tab }</>
				</div>
			</div>
		</div>
	);
}

export default SettingsPage;
