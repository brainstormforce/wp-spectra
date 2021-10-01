import SettingsPageSkeleton from '@Admin/settings-app/components/settings-page/SettingsPageSkeleton';
import React from 'react';
import { useStateValue } from '@Utils/StateProvider';
import TemplatesButton from '@SettingsApp/components/settings-page/TemplatesButton';
import AssetsGeneration from '@SettingsApp/components/tools-page/AssetsGeneration';

function SettingsPage() {
	const [ { globaldata } ] = useStateValue();

	let loading = true;

	if ( 'undefined' === typeof globaldata.length ) {
		loading = false;
	}

	if ( loading ) {
		return (
			<div className="uag-global-settings-metabox">
				<SettingsPageSkeleton />
			</div>
		);
	}


	return (
		<div className="uag-global-settings-metabox">
			<AssetsGeneration />
			<TemplatesButton />
		</div>
	);
}

export default SettingsPage;
