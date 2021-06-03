import React, { useState } from 'react';
import reactCSS from 'reactcss';
import './ColorPickerField.scss';

import { SketchPicker } from 'react-color';

function ColorPickerField( props ) {
	const { name, label, id, value, isActive = true } = props;

	const [ displayColorPicker, setdisplayColorPicker ] = useState( false );
	const [ color, setColor ] = useState( value );

	const styles = reactCSS( {
		default: {
			color: {
				width: '36px',
				height: '30px',
				background: color,
			},
		},
	} );
	const handleClick = () => {
		setdisplayColorPicker( ( prevValue ) => ! prevValue );
	};
	const handleClose = () => {
		setdisplayColorPicker( false );
	};
	const handleResetColor = () => {
		handleChange( '' );
	};

	const handleChange = ( color ) => {
		if ( color ) {
			setColor( color.hex );
		} else {
			setColor( color );
		}

		// Trigger change
		let changeEvent = new CustomEvent( 'wcf:color:change', {
			bubbles: true,
			detail: { e: color, name: props.name, value: color.hex },
		} );

		document.dispatchEvent( changeEvent );
	};
	return (
		<div
			className={ `wcf-field wcf-color-field ${
				! isActive ? 'wcf-hide' : ''
			}` }
		>
			<div className="wcf-field__data">
				{ label && (
					<div class="wcf-field__data--label">
						<label>{ label }</label>
					</div>
				) }
				<div class="wcf-field__data--content">
					<div className="wcf-colorpicker-selector">
						<div
							className="wcf-colorpicker-swatch-wrap"
							onClick={ handleClick }
						>
							<span
								className="wcf-colorpicker-swatch"
								style={ styles.color }
							/>
							<span className="wcf-colorpicker-label">
								Select Color
							</span>
							<input
								type="hidden"
								name={ name }
								value={ color }
							/>
						</div>
						{ color && (
							<span
								className="wcf-colorpicker-reset"
								onClick={ handleResetColor }
							>
								Reset
							</span>
						) }
					</div>
					<div className="wcf-color-picker">
						{ displayColorPicker ? (
							<div className="wcf-color-picker-popover">
								<div
									className="wcf-color-picker-cover"
									onClick={ handleClose }
								/>
								<SketchPicker
									name={ name }
									color={ color }
									onChange={ handleChange }
									disableAlpha={ true }
								/>
							</div>
						) : null }
					</div>
				</div>
			</div>
		</div>
	);
}

export default ColorPickerField;
