import React from 'react';
import { createRoot } from '@wordpress/element';
/* Main Component */
import '@Common/all-config.scss';
import SettingsWrap from '@DashboardApp/SettingsWrap';
import { Provider } from 'react-redux';
import globalDataStore from '@Admin/store/globalDataStore';
import setInitialState  from '@Utils/setInitialState';

const currentState = globalDataStore.getState();

if ( ! currentState.initialStateSetFlag ) {

	setInitialState( globalDataStore );
}

const rootElement = document.getElementById( 'uag-dashboard-app' );
if ( rootElement ) {
	createRoot( rootElement ).render(
		<Provider store={globalDataStore}>
			<SettingsWrap/>
		</Provider>
	);
}