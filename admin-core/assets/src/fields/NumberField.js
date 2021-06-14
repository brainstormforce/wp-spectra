import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './NumberField.scss';

function NumberField( props ) {
	const {
		name,
		id,
		label,
		desc,
		value,
		tooltip,
		placeholder,
		min,
		max,
		readonly,
	} = props;
	const [ inputvalue, setInputvalue ] = useState( value );

	function handleChange( e ) {
		var name = document.getElementsByName(
			e.target.getAttribute( 'name' )
		);
		name[ 0 ].setAttribute( 'value', e.target.value );

		setInputvalue( e.target.value );

		// Trigger change
		let changeEvent = new CustomEvent( 'uag:number:change', {
			bubbles: true,
			detail: { e: e, name: props.name, value: e.target.value },
		} );

		document.dispatchEvent( changeEvent );
	}

	return (
		<div className="uag-field uag-number-field">
			<div className="uag-field__data">
				{ label && (
					<div className="uag-field__data--label">
						<label>
							{ label }
							{ tooltip && (
								<span
									className="uag-tooltip-icon"
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

				<div className="uag-field__data--content">
					<input
						type="number"
						className={ props.class }
						name={ name }
						value={ inputvalue }
						id={ id }
						onChange={ handleChange }
						placeholder={ placeholder }
						min={ min }
						max={ max }
						readOnly={ readonly }
						inputmode="numeric"
					></input>
				</div>
			</div>
			{ desc && (
				<div className="uag-field__desc">
					{ ReactHtmlParser( desc ) }
				</div>
			) }
		</div>
	);
}

export default NumberField;
