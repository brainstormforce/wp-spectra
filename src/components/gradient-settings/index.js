import { __ } from "@wordpress/i18n";
import { __experimentalGradientPicker } from "@wordpress/components";

function GradientSettings(props) {
	const { setAttributes, backgroundGradient } = props;

	const onGradientChange = (value) => {
		setAttributes({ [backgroundGradient.label]: value });
	};

	return (
		<__experimentalGradientPicker
			value={backgroundGradient.value}
			onChange={onGradientChange}
		/>
	);
}

export default GradientSettings;
