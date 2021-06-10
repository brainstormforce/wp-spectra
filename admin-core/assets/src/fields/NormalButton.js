import React, { useState } from 'react';
import './NormalButton.scss';
import { __ } from '@wordpress/i18n';

const NormalButton = ( props ) => {

	let classes = props.class ? props.class : '';

	return (
		<div className="uag-field uag-button-control uag-button-field">
			<button
				className={ `uag-button uag-button--primary ${ classes }` }
				onClick = { props.onClick }
			>
				{ props.label }
			</button>
		</div>
	);
}

export default NormalButton;
