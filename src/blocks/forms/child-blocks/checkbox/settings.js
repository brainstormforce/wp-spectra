import React from 'react';
import { __ } from '@wordpress/i18n';

const { PanelBody, ToggleControl } = wp.components;

const { InspectorControls } = wp.blockEditor;

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, isSelected } = props;

	const { block_id, checkboxRequired, options, checkboxName } = attributes;

	const checkboxInspectorControls = () => {
		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ checkboxRequired }
					onChange={ ( value ) =>
						setAttributes( {
							checkboxRequired: ! checkboxRequired,
						} )
					}
				/>
			</PanelBody>
		);
	};

	return (
		<>
			<InspectorControls>
				{ checkboxInspectorControls() }
			</InspectorControls>
		</>
	);
};

export default React.memo( Settings );
