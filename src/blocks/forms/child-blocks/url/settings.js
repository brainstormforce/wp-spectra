import React from 'react';
import { __ } from '@wordpress/i18n';
const { PanelBody, ToggleControl, TextControl } = wp.components;
const { InspectorControls } = wp.blockEditor;

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { required, placeholder } = attributes;

	const urlInspectorControls = () => {
		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ required }
					onChange={ () => setAttributes( { required: ! required } ) }
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
			</PanelBody>
		);
	};

	return (
		<>
			<InspectorControls>{ urlInspectorControls() }</InspectorControls>
		</>
	);
};
export default React.memo( Settings );
