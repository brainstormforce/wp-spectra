import React from 'react';
import { __ } from '@wordpress/i18n';
import InspectorTabs from "@Components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "@Components/inspector-tabs/InspectorTab.js";

import { InspectorControls } from '@wordpress/block-editor';

import { ToggleControl, TextControl, PanelBody } from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { required, placeholder } = attributes;

	const nameInspectorControls = () => {
		return (
			<PanelBody
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ required }
					onChange={ () => setAttributes( { required: ! required } ) }
				/>
				<TextControl
					label="Placeholder"
					value={ placeholder }
					onChange={ ( value ) =>
						setAttributes( { placeholder: value } )
					}
					placeholder={ __(
						'Placeholder',
						'ultimate-addons-for-gutenberg'
					) }
				/>
			</PanelBody>
		);
	};

	return (
			<InspectorControls>
			<InspectorTabs tabs={["general", "advance"]}>
					<InspectorTab {...UAGTabs.general}>
					{ nameInspectorControls() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
	);
};
export default React.memo( Settings );
