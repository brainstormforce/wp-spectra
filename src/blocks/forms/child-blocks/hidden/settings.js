import { __ } from '@wordpress/i18n';
import { memo } from '@wordpress/element';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';

import UAGTextControl from '@Components/text-control';

import { InspectorControls } from '@wordpress/block-editor';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { hidden_field_value } = attributes;

	const hiddenFieldSettings = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<UAGTextControl
					label={ __( 'Value', 'ultimate-addons-for-gutenberg' ) }
					value={ hidden_field_value }
					data={ {
						value: hidden_field_value,
						label: 'hidden_field_value',
					} }
					setAttributes={ setAttributes }
					onChange={ ( value ) => setAttributes( { hidden_field_value: value } ) }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<>
			<InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>{ hiddenFieldSettings() }</InspectorTab>
					<InspectorTab { ...UAGTabs.advance }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};
export default memo( Settings );
