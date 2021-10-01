import './ToolsPage.scss';
import ToolsPageSkeleton from '@Admin/settings-app/components/tools-page/ToolsPageSkeleton';
import React from 'react';
import { useStateValue } from '@Utils/StateProvider';
import VersionControl from '@SettingsApp/components/tools-page/VersionControl';

function ToolsPage() {
	const [ { globaldata } ] = useStateValue();

	let loading = true;

	if ( 'undefined' === typeof globaldata.length ) {
		loading = false;
	}	

	let currentTab = <p>Default Tab</p>;

	if ( loading ) {
		return (
			<div className="uag-global-settings-metabox">
				<ToolsPageSkeleton />
			</div>
		);
	}
	currentTab = <VersionControl />;

	return <div className="uag-global-settings-metabox">{ currentTab }</div>;
}

export default ToolsPage;
