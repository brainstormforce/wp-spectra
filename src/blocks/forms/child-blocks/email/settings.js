import { __ } from '@wordpress/i18n';
import { memo } from '@wordpress/element';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import UAGSelectControl from '@Components/select-control';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl } from '@wordpress/components';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGTextControl from '@Components/text-control';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { required, placeholder, autocomplete } = attributes;

	const nameInspectorControls = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<UAGSelectControl
					label={ __( 'Autocomplete', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: autocomplete,
						label: 'autocomplete',
					} }
					setAttributes={ setAttributes }
					options={ [
						{ label: __( 'Off', 'ultimate-addons-for-gutenberg' ), value: 'off' },
						{ label: __( 'email', 'ultimate-addons-for-gutenberg' ), value: 'email' },
					] }
				/>
				<UAGTextControl
					label="Placeholder"
					value={ placeholder }
					data={ {
						value: placeholder,
						label: 'placeholder',
					} }
					setAttributes={ setAttributes }
					onChange={ ( value ) => setAttributes( { placeholder: value } ) }
					placeholder={ __( 'Placeholder', 'ultimate-addons-for-gutenberg' ) }
				/>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ required }
					onChange={ () => setAttributes( { required: ! required } ) }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<InspectorControls>
			<InspectorTabs tabs={ [ 'general', 'advance' ] }>
				<InspectorTab { ...UAGTabs.general }>{ nameInspectorControls() }</InspectorTab>
				<InspectorTab { ...UAGTabs.advance }></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};
export default memo( Settings );
