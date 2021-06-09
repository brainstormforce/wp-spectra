import React from 'react';
import { useLocation } from 'react-router-dom';
import './ToolsNav.scss';

function ToolsNav( prop ) {
	let location = useLocation();
	let tab = '' !== location.hash ? location.hash : '#assets_generation_tools';
	var navClass =
		prop.slug === tab ? 'uag-settings-nav__active' : 'uag-settings-nav';

	return (
		<a href={ prop.slug } className={ navClass }>
			{ prop.title }
		</a>
	);
}

export default ToolsNav;
