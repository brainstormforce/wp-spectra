import { __ } from '@wordpress/i18n';
import { __experimentalGradientPicker } from '@wordpress/components';

function GradientSettings(props) {
	
	const {
		attributes,
		setAttributes
	} = props;
	const {
		gradientValue
	} = attributes
    
    const onGradientChange = value => {
		setAttributes({ gradientValue: value });
	
    };

	return (
		<__experimentalGradientPicker
			value={ gradientValue }
			onChange={ onGradientChange }
		/>
	);
}

export default GradientSettings;
