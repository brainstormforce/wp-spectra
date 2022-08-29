import React from 'react';
import MainNav from './MainNav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SettingsRoute from './SettingsRoute';
import SettingsSavedNotification from './SettingsSavedNotification';

const SettingsWrap = () => {

    return (
        <Router>
            <MainNav/>
			<SettingsSavedNotification/>
			<Switch>
				<Route path="/">
					<SettingsRoute />
				</Route>
			</Switch>
		</Router>
    );
};

export default SettingsWrap;
