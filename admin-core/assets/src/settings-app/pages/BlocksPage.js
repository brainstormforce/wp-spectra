import React, { useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';
import { useStateValue } from '@Utils/StateProvider';
import { __ } from '@wordpress/i18n';
import './BlocksPage.scss';
import BlocksSettings from '@SettingsApp/components/blocks-page/BlocksSettings';
import SettingPageSkeleton from '@Admin/settings-app/components/blocks-page/BlocksPageSkeleton';

function BlocksPage() {
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

	if ( loading ) {
		return <div className="uag-blocks-settings-metabox">
					<SettingPageSkeleton />
				</div>;
	}
	return (
		<div className="uag-blocks-settings-metabox">
			<BlocksSettings />
		</div>
	);
}

export default BlocksPage;
