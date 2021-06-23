import './ToolsPage.scss';
import { __ } from '@wordpress/i18n';
import ToolsPageSkeleton from '@Admin/settings-app/components/tools-page/ToolsPageSkeleton';
import Nav from '@SettingsApp/components/tools-page/ToolsNav';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import apiFetch from '@wordpress/api-fetch';
import { useStateValue } from '@Utils/StateProvider';
import VersionControl from '@SettingsApp/components/tools-page/VersionControl';
import AssetsGeneration from '@SettingsApp/components/tools-page/AssetsGeneration';

function ToolsPage() {

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
		return <ToolsPageSkeleton />;
	} else {
		switch ( tab ) {
			case '#version_control_tools':
				current_tab = (
					<VersionControl/>
				);
				break;
			case '#assets_generation_tools':
				current_tab = (
					<AssetsGeneration/>
				);

				break;

			default:
				current_tab = (
					<AssetsGeneration/>
				);
				break;
		}
	}

	return (
		<div className="uag-global-settings-metabox">
			<div className="uag-global-settings-metabox__tabs">
				<nav className="uag-global-settings-metabox__tabs-menu">
					<Nav
						title={ __( 'Assets Generation', 'ultimate-addons-for-gutenberg' ) }
						slug="#assets_generation_tools"
					/>
					<Nav
						title={ __( 'Version Control', 'ultimate-addons-for-gutenberg' ) }
						slug="#version_control_tools"
					/>
				</nav>

				<div className="uag-global-settings-metabox__current-tab">
					<>{ current_tab }</>
				</div>
			</div>
		</div>
	);
}

export default ToolsPage;
