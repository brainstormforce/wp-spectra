import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './TextareaField.scss';

function TextareaField( props ) {
	const { name, value, label, desc, id, placeholder, tooltip } = props;
	const [ inputvalue, setInputvalue ] = useState( value );

	function handleChange( e ) {
		setInputvalue( e.target.value );

		// Trigger change
		let changeEvent = new CustomEvent( 'uag:textarea:change', {
			bubbles: true,
			detail: { e: e, name: props.name, value: e.target.value },
		} );

		document.dispatchEvent( changeEvent );
	}

	return (
		<div className="uag-field uag-textarea-field">
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
					<textarea
						className={ props.class }
						name={ name }
						value={ inputvalue }
						id={ id }
						onChange={ handleChange }
						placeholder={ placeholder }
						rows="10"
						cols="60"
					></textarea>
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

export default TextareaField;
