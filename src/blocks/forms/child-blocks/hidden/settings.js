import React from 'react';
import { __ } from '@wordpress/i18n';
import InspectorTabs from "../../../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "../../../../components/inspector-tabs/InspectorTab.js";

import { PanelBody, TextControl } from '@wordpress/components';

import { InspectorControls } from '@wordpress/block-editor';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { hidden_field_value } = attributes;

	const hiddenFieldSettings = () => {
		return (
			<PanelBody
				initialOpen={ true }
			>
				<TextControl
					label={ __( 'Value', 'ultimate-addons-for-gutenberg' ) }
					value={ hidden_field_value }
					onChange={ ( new_hidden_field_value ) =>
						setAttributes( { new_hidden_field_value } )
					}
				/>
			</PanelBody>
		);
	};

	return (
		<>
			<InspectorControls>
				<InspectorTabs tabs={["general", "advance"]}>
					<InspectorTab {...UAGTabs.general}>
					{ hiddenFieldSettings() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};
export default React.memo( Settings );
