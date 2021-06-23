import { __ } from '@wordpress/i18n';
import SettingsPageSkeleton from '@Admin/settings-app/components/settings-page/SettingsPageSkeleton';
import Nav from '@SettingsApp/components/settings-page/SettingsNav';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import apiFetch from '@wordpress/api-fetch';
import { useStateValue } from '@Utils/StateProvider';
import TemplatesButton from '@SettingsApp/components/settings-page/TemplatesButton';

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
		return <SettingsPageSkeleton />;
	} else {
		switch ( tab ) {
			case '#templates_settings':
				current_tab = (
					<TemplatesButton />
				);
				break;
			default:
				current_tab = (
					<TemplatesButton />
				);
				break;
		}
	}

	return (
		<div className="uag-global-settings-metabox">
			<div className="uag-global-settings-metabox__tabs">
				<nav className="uag-global-settings-metabox__tabs-menu">
					<Nav
						title={ __( 'Templates', 'ultimate-addons-for-gutenberg' ) }
						slug="#templates_settings"
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
