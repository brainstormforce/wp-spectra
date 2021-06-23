import React from 'react';
import { useLocation } from 'react-router-dom';
import './SettingsNav.scss';

function SettingsNav( prop ) {
	let location = useLocation();
	let tab = '' !== location.hash ? location.hash : '#blocks_settings';
	var navClass =
		prop.slug === tab ? 'uag-settings-nav__active' : 'uag-settings-nav';

	return (
		<a href={ prop.slug } className={ navClass }>
			{ prop.title }
		</a>
	);
}

export default SettingsNav;
