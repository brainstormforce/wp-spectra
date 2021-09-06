import React from 'react';
import { __ } from '@wordpress/i18n';
import InspectorTabs from "../../../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "../../../../components/inspector-tabs/InspectorTab.js";

import { PanelBody, ToggleControl } from '@wordpress/components';

import { InspectorControls } from '@wordpress/block-editor';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { selectRequired } = attributes;

	const selectInspectorControls = () => {
		return (
			<PanelBody
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ selectRequired }
					onChange={ () =>
						setAttributes( { selectRequired: ! selectRequired } )
					}
				/>
			</PanelBody>
		);
	};

	return (
			<InspectorControls>
				<InspectorTabs tabs={["general", "advance"]}>
					<InspectorTab {...UAGTabs.general}>
					{ selectInspectorControls() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
	);
};
export default React.memo( Settings );
