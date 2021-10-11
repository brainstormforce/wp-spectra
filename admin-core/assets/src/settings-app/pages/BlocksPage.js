import React from 'react';
import { useStateValue } from '@Utils/StateProvider';
import BlocksSettings from '@SettingsApp/components/blocks-page/BlocksSettings';
import SettingPageSkeleton from '@Admin/settings-app/components/blocks-page/BlocksPageSkeleton';

function BlocksPage() {
	const [ { globaldata } ] = useStateValue();

	let loading = true;

	if ( 'undefined' === typeof globaldata.length ) {
		loading = false;
	}

	if ( loading ) {
		return (
			<div className="uag-user-info">
				<SettingPageSkeleton />
			</div>
		);
	}
	return (
		<>
			<div className="uag-user-info">
				<BlocksSettings />
			</div>
		</>
	);
}

export default BlocksPage;
