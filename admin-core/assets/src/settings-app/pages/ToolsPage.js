import ToolsPageSkeleton from '@Admin/settings-app/components/tools-page/ToolsPageSkeleton';
import React from 'react';
import { useStateValue } from '@Utils/StateProvider';
import VersionControl from '@SettingsApp/components/tools-page/VersionControl';
import LoadFonts from '@SettingsApp/components/tools-page/LoadFonts';
function ToolsPage() {
	const [ { globaldata } ] = useStateValue();

	let loading = true;

	if ( 'undefined' === typeof globaldata.length ) {
		loading = false;
	}	

	if ( loading ) {
		return (
			<div className="uag-user-info">
				<ToolsPageSkeleton />
			</div>
		);
	}

	return <div className="uag-user-info">
				<VersionControl />
				<LoadFonts/>
			</div>;
}

export default ToolsPage;
