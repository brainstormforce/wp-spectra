import { ToggleControl } from '@wordpress/components';
import './ToggleField.scss';

function ToggleField( props ) {
	const { name, id, label, value } = props;

	const checked = 'disabled' === value ? false : true;

	function handleCheckboxClick( e ) {
		const checkedValue = e ? 'enabled' : 'disabled';
		// Trigger change
		const changeEvent = new CustomEvent( 'uag:toggle:change', { // eslint-disable-line no-undef
			bubbles: true,
			detail: { e, name, value: checkedValue, id },
		} );

		document.dispatchEvent( changeEvent );
	}

	return (
		<div className="uag-field uag-toggle-field">
			<div className="uag-field__data">
				<ToggleControl
					className={ props.class }
					name={ name }
					id={ id ? id : name }
					label={ label }
					checked={ checked }
					onChange={ handleCheckboxClick }
				/>
			</div>
		</div>
	);
}

export default ToggleField;
