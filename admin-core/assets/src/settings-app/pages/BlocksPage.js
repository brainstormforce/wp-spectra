import React, { useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';
import { useStateValue } from '@Utils/StateProvider';
import './BlocksPage.scss';
import { __ } from '@wordpress/i18n';
import BlocksSettings from '@SettingsApp/components/blocks-page/BlocksSettings';
import DisplayCondition from '@SettingsApp/components/blocks-page/DisplayCondition';
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
		return (
			<div className="uag-blocks-settings-metabox">
				<SettingPageSkeleton />
			</div>
		);
	}
	return (
		<>
			<div className="uag-blocks-settings-metabox">
				<p>
					{ __(
						'Below is the list of all blocks included within Ultimate Addons for Gutenberg. Activate the blocks you want to use and deactivate the rest to get the best performance. Activated blocks will appear in the Gutenberg block editor.',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<BlocksSettings />
				<DisplayCondition/>
			</div>
		</>
	);
}

export default BlocksPage;
