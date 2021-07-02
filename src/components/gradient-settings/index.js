import { __ } from '@wordpress/i18n';
const { __experimentalPanelColorGradientSettings } = wp.blockEditor;

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
