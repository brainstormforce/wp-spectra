import { __ } from '@wordpress/i18n';
import React from 'react';
import { InspectorControls } from '@wordpress/block-editor';
import InspectorTabs from "@Components/inspector-tabs/InspectorTabs.js";
import InspectorTab from "@Components/inspector-tabs/InspectorTab.js";

import { PanelBody, TextControl } from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;

	// Setup the attributes.
	const {
		setAttributes,
		attributes: { t_date, displayPostDate },
	} = props;

	const timelineItemSettings = () => {
		if ( displayPostDate ) {
			return '';
		}

		return (
			<PanelBody
				title={ __( 'Timeline Item', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<TextControl
					label={ __( 'Date', 'ultimate-addons-for-gutenberg' ) }
					value={ t_date }
					onChange={ ( value ) => setAttributes( { t_date: value } ) }
				/>
			</PanelBody>
		);
	};
	return (
	<InspectorControls>
		<InspectorTabs tabs={["general", "advance"]}>
		<InspectorTab key={"general"}>{ timelineItemSettings() }</InspectorTab>
		<InspectorTab key={"advance"}></InspectorTab>
		</InspectorTabs>
	</InspectorControls>
	);
};

export default React.memo( Settings );
