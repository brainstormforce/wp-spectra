import SettingsPageSkeleton from '@Admin/settings-app/components/settings-page/SettingsPageSkeleton';
import React from 'react';
import { useStateValue } from '@Utils/StateProvider';
import TemplatesButton from '@SettingsApp/components/settings-page/TemplatesButton';
import AssetsGeneration from '@SettingsApp/components/settings-page/AssetsGeneration';
import VersionControl from '@SettingsApp/components/settings-page/VersionControl';
import LoadFonts from '@SettingsApp/components/settings-page/LoadFonts';

function SettingsPage() {
	const [ { globaldata } ] = useStateValue();

	let loading = true;

	if ( 'undefined' === typeof globaldata.length ) {
		loading = false;
	}

	if ( loading ) {
		return (
			<div className="uag-user-info">
				<SettingsPageSkeleton />
			</div>
		);
	}


	return (
		<div className="uag-user-info">
			<AssetsGeneration />
			<TemplatesButton />
			<VersionControl />
			<LoadFonts/>
		</div>
	);
}

export default SettingsPage;
