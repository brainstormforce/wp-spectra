import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './TextField.scss';

function TextField( props ) {
	const {
		name,
		id,
		label,
		value,
		placeholder,
		tooltip,
		desc,
		type,
		min,
		max,
		readonly,
		icon,
		onChangeCB,
		attr,
	} = props;
	const [ inputvalue, setInputvalue ] = useState( value );

	useEffect( () => {
		setInputvalue( value );
	}, [ value ] );

	function handleChange( e ) {
		setInputvalue( e.target.value );

		// Trigger change
		let changeEvent = new CustomEvent( 'uag:text:change', {
			bubbles: true,
			detail: { e: e, name: props.name, value: e.target.value },
		} );

		document.dispatchEvent( changeEvent );

		if ( onChangeCB ) {
			onChangeCB( e.target.value );
		}
	}

	const fieldtype = type ? type : 'text';
	return (
		<div className="uag-field uag-text-field">
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
						{ ...attr }
						type={ fieldtype }
						className={ props.class }
						name={ name }
						value={ inputvalue }
						id={ id }
						onChange={ handleChange }
						placeholder={ placeholder }
						min={ min }
						max={ max }
						readOnly={ readonly }
					></input>
				</div>
			</div>
			{ icon && (
				<div className="uag-text-field__icon">
					<span className={ icon }></span>
				</div>
			) }
			{ desc && (
				<div className="uag-field__desc">
					{ ReactHtmlParser( desc ) }
				</div>
			) }
		</div>
	);
}

export default TextField;
