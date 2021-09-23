import React from 'react';
import './NormalButton.scss';

const NormalButton = ( props ) => {
	const { classes, saving, buttonText } = props;
	
	const savingState = saving ? 'uag-saving' : '';
	const btnClass = classes ? classes : 'uag-button--primary';
	return (
		<div className="uag-field uag-normal-button-control uag-button-field">
			<button
				className={ `uag-button  ${ savingState } ${ btnClass }` }
				onClick={ props.onClick } disabled = {props.disabled}
			>
				{ buttonText }
			</button>
		</div>
	);
};

export default NormalButton;
