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
		let changeEvent = new CustomEvent( 'wcf:text:change', {
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
		<div className="wcf-field wcf-text-field">
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
				<div className="wcf-text-field__icon">
					<span class={ icon }></span>
				</div>
			) }
			{ desc && (
				<div className="wcf-field__desc">
					{ ReactHtmlParser( desc ) }
				</div>
			) }
		</div>
	);
}

export default TextField;
