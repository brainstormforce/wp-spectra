import React from 'react';
import { useLocation } from 'react-router-dom';
import './BlocksSettings.scss';

function BlocksSettings( prop ) {
	
	return (
		<a href={ prop.slug } className={ navClass }>
			{ prop.title }
		</a>
	);
}

export default BlocksSettings;
