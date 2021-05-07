import React from 'react';
import { __ } from '@wordpress/i18n';

const { PanelBody, TextControl } = wp.components;
const { InspectorControls } = wp.blockEditor;

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { hidden_field_value } = attributes;

	const hiddenFieldSettings = () => {
		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
				<TextControl
					label={ __( 'Value', 'ultimate-addons-for-gutenberg' ) }
					value={ hidden_field_value }
					onChange={ ( hidden_field_value ) =>
						setAttributes( { hidden_field_value } )
					}
				/>
			</PanelBody>
		);
	};

	return (
		<>
			<InspectorControls>{ hiddenFieldSettings() }</InspectorControls>
		</>
	);
};
export default React.memo( Settings );
