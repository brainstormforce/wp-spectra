import React from 'react';
import MainNav from './MainNav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SettingsRoute from './SettingsRoute';

const SettingsWrap = () => {

    return (
        <Router>
            <MainNav/>
			<Switch>
				<Route path="/">
					<SettingsRoute />
				</Route>
			</Switch>
		</Router>
    );
};

export default SettingsWrap;