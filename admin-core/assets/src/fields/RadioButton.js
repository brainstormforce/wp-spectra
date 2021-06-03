import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './RadioButton.scss';

function Radio( props ) {
	const { name, label, id, value, checked, desc, options } = props;

	const [ inputradio, setInputRadio ] = useState( checked );
	const [ inputvalue, setInputvalue ] = useState( value );

	function handleRadioClick( e ) {
		setInputRadio( e.target.checked );
	}

	var unique_id = name + Math.random().toString( 36 ).substring( 2, 5 );

	return (
		<div className="wcf-field wcf-radio-button">
			<div className="wcf-field__data">
				<div class="wcf-field__data--content">
					<input
						type="radio"
						name={ name }
						value={ inputvalue }
						defaultChecked={ inputradio }
						id={ id ? id : unique_id }
						onClick={ handleRadioClick }
					/>
				</div>
				{ label && (
					<div class="wcf-field__data--label">
						<label for={ id ? id : unique_id }>{ label }</label>
					</div>
				) }
			</div>

			{ desc && (
				<div className="wcf-field__desc">
					{ ReactHtmlParser( desc ) }
				</div>
			) }
		</div>
	);
}

export default Radio;
