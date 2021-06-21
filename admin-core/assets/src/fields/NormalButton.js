import React, { useState } from 'react';
import './NormalButton.scss';
import ReactHtmlParser from 'react-html-parser';
import { __ } from '@wordpress/i18n';

const NormalButton = ( props ) => {

	let {
		classes,
		saving,
		buttonText,
		desc,
	} = props;

	let savingState = saving ? 'uag-saving' : '';
	
	return (
		<div className="uag-field uag-button-control uag-button-field">
			<button
				className={ `uag-button uag-button--primary ${ savingState } ${ classes }` }
				onClick = { props.onClick }
			>
				{ buttonText }
			</button>
			{ desc && (
				<div className="uag-field__desc">
					{ ReactHtmlParser( desc ) }
				</div>
			) }
		</div>
	);
}

export default NormalButton;
