import React from 'react';
import { useLocation } from 'react-router-dom';
import './SettingsNav.scss';

function SettingsNav( prop ) {
	let location = useLocation();
	let tab = '' !== location.hash ? location.hash : '#general_settings';
	var navClass =
		prop.slug === tab ? 'wcf-settings-nav__active' : 'wcf-settings-nav';

	return (
		<a href={ prop.slug } className={ navClass }>
			{ prop.title }
		</a>
	);
}

export default SettingsNav;
