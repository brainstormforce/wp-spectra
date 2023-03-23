import { __ } from '@wordpress/i18n';
import { ToggleControl } from '@wordpress/components';
import UAGSelectControl from '@Components/select-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';

import { InspectorControls } from '@wordpress/block-editor';
import UAGTextControl from '@Components/text-control';
import { memo } from '@wordpress/element';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { required, placeholder, autocomplete } = attributes;

	const urlInspectorControls = () => {
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
						{ label: __( 'URL', 'ultimate-addons-for-gutenberg' ), value: 'url' },
					] }
				/>
				<UAGTextControl
					label={ __( 'Placeholder', 'ultimate-addons-for-gutenberg' ) }
					value={ placeholder }
					data={ {
						value: placeholder,
						label: 'placeholder',
					} }
					setAttributes={ setAttributes }
					onChange={ ( value ) => setAttributes( { placeholder: value } ) }
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
				<InspectorTab { ...UAGTabs.general }>{ urlInspectorControls() }</InspectorTab>
				<InspectorTab { ...UAGTabs.advance }></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};
export default memo( Settings );
