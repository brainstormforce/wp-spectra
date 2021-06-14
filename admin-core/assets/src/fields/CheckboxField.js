import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './CheckboxField.scss';

function Checkbox( props ) {
	const {
		name,
		id,
		label,
		value,
		desc,
		backComp = false,
		tooltip,
		onClick,
		notice,
		child_class = '',
	} = props;

	const [ inputvalue, setInputvalue ] = useState( value );

	useEffect( () => {
		setInputvalue( value );
	}, [ value ] );

	const checkedvalue = backComp ? 'enable' : 'yes';
	const uncheckedvalue = backComp ? 'disable' : 'no';

	function handleCheckboxClick( e ) {
		let current_value = 'no';

		if ( e.target.checked ) {
			// Check is there any notice added in the checkbox.
			if ( notice && ! show_notice( notice ) ) {
				return;
			}

			setInputvalue( checkedvalue );
			current_value = checkedvalue;
		} else {
			setInputvalue( uncheckedvalue );
			current_value = uncheckedvalue;
		}

		// Trigger change
		let changeEvent = new CustomEvent( 'uag:checkbox:change', {
			bubbles: true,
			detail: { e: e, name: name, value: current_value },
		} );

		document.dispatchEvent( changeEvent );

		if ( onClick ) {
			onClick();
		}
	}

	// Function to show desired alert box to get the confirmation from the user input.
	function show_notice( notice ) {
		switch ( notice.type ) {
			case 'alert':
				alert( notice.message );
				return true;
			case 'confirm':
				let is_confirm = confirm( notice.message );
				return is_confirm ? true : false;
			case 'prompt':
				let is_prompt = prompt( notice.message );
				return is_prompt === notice.check.toUpperCase() ? true : false;
			default:
				return false;
		}
	}

	return (
		<div className="uag-field uag-checkbox-field">
			<div className="uag-field__data">
				<div className={ `uag-field__data--content ${ child_class }` }>
					<input
						type="hidden"
						className={ props.class }
						name={ name }
						defaultValue={ uncheckedvalue }
					/>
					<input
						type="checkbox"
						className={ props.class }
						name={ name }
						value={ inputvalue }
						id={ id ? id : name }
						checked={ checkedvalue === inputvalue ? 'checked' : '' }
						onClick={ handleCheckboxClick }
						onChange={ onClick }
					/>
				</div>

				{ label && (
					<div className="uag-field__data--label">
						<label htmlFor={ id ? id : name }>
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
			</div>

			{ desc && (
				<div className="uag-field__desc">
					{ ReactHtmlParser( desc ) }
				</div>
			) }
		</div>
	);
}

export default Checkbox;
