import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
// import './DateField.scss';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TextField( props ) {
	const {
		name,
		id,
		label,
		value,
		placeholder,
		tooltip,
		desc,
		onChangeCB,
		className,
	} = props;

	const [ startDate, setStartDate ] = useState( null );

	const [ datevalue, setValue ] = useState( value );

	function handleChange( date ) {
		setStartDate( date );

		if ( onChangeCB ) {
			onChangeCB( date );
		}

		setValue( date );
	}

	return (
		<div className="wcf-field wcf-date-field">
			<div className="wcf-field__data">
				{ label && (
					<div class="wcf-field__data--label">
						<label>
							{ label }
							{ tooltip && (
								<span
									className="wcf-tooltip-icon"
									data-position="top"
								>
									<em
										className="dashicons dashicons-editor-help"
										title={ tooltip }
									></em>
								</span>
							) }
						</label>
					</div>
				) }

				<div class="wcf-field__data--content">
					<DatePicker
						dateFormat="yyyy-MM-dd"
						className={ className }
						name={ name }
						id={ name }
						selected={ startDate }
						placeholderText={ placeholder }
						onChange={ handleChange }
						value={ datevalue }
						maxDate={ new Date() }
					/>
				</div>
			</div>

			{ desc && (
				<div className="wcf-field__desc">
					{ ReactHtmlParser( desc ) }
				</div>
			) }
		</div>
	);
}

export default TextField;
