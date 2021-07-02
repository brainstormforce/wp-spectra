import hexToRgba from "@Controls/hexToRgba";
import { __ } from '@wordpress/i18n';
const { __experimentalPanelColorGradientSettings } = wp.blockEditor;

function GradientSettings({ attributes, setAttributes }) {
	
	const {
		gradientValue,
	} = attributes;

	//set the gradient value to settings if new gradientvalue is not set
	if ( "" === attributes.gradientValue.value) {
        const rgb_gradientColor1 = hexToRgba(attributes.gradientColor1.value);
		const rgb_gradientColor2 = hexToRgba(attributes.gradientColor2.value);
        
		if ("linear" === attributes.gradientType.value) {
			var value = `linear-gradient(${ attributes.gradientAngle.value }deg,${rgb_gradientColor1} ${attributes.gradientLocation1.value}%, ${rgb_gradientColor2} ${attributes.gradientLocation2.value}%)`;            
			setAttributes({ gradientValue: value });
		} else {
            var value = `radial-gradient(at ${ attributes.gradientPosition.value }, ${rgb_gradientColor1} ${attributes.gradientLocation1.value}%, ${rgb_gradientColor2} ${attributes.gradientLocation2.value}%)`;
			setAttributes({ gradientValue: value });
		}
	}
    
    const onGradientChange = value => {
		setAttributes({ gradientValue: value });
        setAttributes({ gradientAngle: "" ,gradientColor1: "",gradientColor2: "",gradientLocation1: "",gradientLocation2: "",});
	
    };

	return (
		<__experimentalPanelColorGradientSettings
			title={__("Color Settings",'ultimate-addons-for-gutenberg')}
			initialOpen={true}
			settings={[
				{
					label: __("Overlay Color",'ultimate-addons-for-gutenberg'),
					gradientValue,
					onGradientChange
				}
			]}
		/>
	);
}

export default GradientSettings;
