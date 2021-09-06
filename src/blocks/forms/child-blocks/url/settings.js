import React from 'react';
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';
import InspectorTabs from "../../../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "../../../../components/inspector-tabs/InspectorTab.js";

import { InspectorControls } from '@wordpress/block-editor';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { required, placeholder } = attributes;

	const urlInspectorControls = () => {
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
			<InspectorControls>
				<InspectorTabs tabs={["general", "advance"]}>
					<InspectorTab {...UAGTabs.general}>
					{ urlInspectorControls() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
	);
};
export default React.memo( Settings );
