import React, { useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';
import { useStateValue } from '@Utils/StateProvider';
import { __ } from '@wordpress/i18n';
import './BlocksPage.scss';
import BlocksSettings from '@SettingsApp/components/blocks-page/BlocksSettings';
import SettingPageSkeleton from '@Admin/settings-app/components/blocks-page/BlocksPageSkeleton';
import { ToggleField } from '@Fields';

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
		return (
			<div className="uag-blocks-settings-metabox">
				<SettingPageSkeleton />
			</div>
		);
	}
	return (
		<>
			<div className="uag-blocks-settings-metabox">
				<BlocksSettings />
				<div className="uag-extension__metabox">
					<h2>Extension</h2>
					<div className="uag-individual-block-settings-metabox">
						<ToggleField
							id={ '' }
							name="_uag_common[blocks_activation_and_deactivation]"
							label={ 'Display Condition' }
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default BlocksPage;
