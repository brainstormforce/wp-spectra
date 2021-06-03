import React from 'react';
import './InputText.scss';

function InputText( props ) {
	const { attr } = props;

	const [ inputvalue, setInputvalue ] = React.useState( props.value );

	function handleChange( e ) {
		setInputvalue( e.target.value );
	}

	const type = props.type ? props.type : 'text';
	return (
		<>
			<input
				{ ...attr }
				type={ type }
				className={ props.class }
				name={ props.name }
				value={ inputvalue }
				id={ props.id }
				onChange={ handleChange }
				placeholder={ props.placeholder }
				min={ props.min }
				max={ props.max }
				readOnly={ props.readonly }
			></input>
		</>
	);
}

export default InputText;
