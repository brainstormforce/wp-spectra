
import { GradientPicker } from '@wordpress/components';

const GradientSettings = ( props ) => {
	const { setAttributes, backgroundGradient, onOpacityChange } = props;

	const onGradientChange = ( value ) => {
		setAttributes( { [ backgroundGradient.label ]: value } );
	};

	return (
		<GradientPicker
			value={ backgroundGradient.value }
			onChange={ onGradientChange }
			className="uagb-gradient-picker"
		/>
	);
}

export default GradientSettings;
