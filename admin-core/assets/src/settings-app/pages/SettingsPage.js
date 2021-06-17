import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import apiFetch from '@wordpress/api-fetch';
import { useStateValue } from '@Utils/StateProvider';
import { __ } from '@wordpress/i18n';

import './SettingsPage.scss';

import Nav from '@SettingsApp/components/settings-page/SettingNav';

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
			case '#blocks_settings':
				current_tab = (
					''
				);
				break;
			default:
				current_tab = (
					''
				);
				break;
		}
	}
	return (
		<div className="uag-global-settings-metabox">
			<div className="uag-global-settings-metabox__tabs">
				<nav className="uag-global-settings-metabox__tabs-menu">
					<Nav
						title={ __( 'Blocks Settings', 'ultimate-addons-for-gutenberg' ) }
						slug="#blocks_settings"
					/>
				</nav>

				<div className="uag-global-settings-metabox__current-tab">
					<>{ current_tab }</>
				</div>
			</div>
		</div>
	);
}

export default SettingsPage;
