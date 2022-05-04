import React from 'react';
import { __ } from '@wordpress/i18n';
import { ToggleControl, TextControl, SelectControl } from '@wordpress/components';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';

import { InspectorControls } from '@wordpress/block-editor';



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { required, placeholder, autocomplete } = attributes;

	const urlInspectorControls = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<SelectControl
					label={ __( 'Autocomplete', 'ultimate-addons-for-gutenberg' ) }
					value={ autocomplete }
					options={ [
						{ label: __( 'Off', 'ultimate-addons-for-gutenberg' ), value: 'off' },
						{ label: __( 'URL', 'ultimate-addons-for-gutenberg' ), value: 'url' },
					] }
					onChange={ ( autocomplete ) =>
						setAttributes( { autocomplete } )
					}
				/>
				<TextControl
					label={ __(
						'Placeholder',
						'ultimate-addons-for-gutenberg'
					) }
					value={ placeholder }
					onChange={ ( value ) =>
						setAttributes( { placeholder: value } )
					}
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
				<InspectorTab { ...UAGTabs.general }>
					{ urlInspectorControls() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.advance }></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};
export default React.memo( Settings );
