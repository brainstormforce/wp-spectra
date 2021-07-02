import React, { useState } from 'react';
import './NormalButton.scss';
import ReactHtmlParser from 'react-html-parser';
import { __ } from '@wordpress/i18n';

const NormalButton = ( props ) => {

	let {
		classes,
		saving,
		buttonText,
		desc
	} = props;

	let savingState = saving ? 'uag-saving' : '';
	let btnClass = classes ? classes : 'uag-button--primary';
	return (
		<div className="uag-field uag-normal-button-control uag-button-field">
			<button
				className={ `uag-button  ${ savingState } ${ btnClass }` }
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
