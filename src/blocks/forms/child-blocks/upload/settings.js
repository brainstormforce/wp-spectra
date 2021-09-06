import React from 'react';
import { __ } from '@wordpress/i18n';
import InspectorTabs from "../../../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "../../../../components/inspector-tabs/InspectorTab.js";

import {
	PanelBody,
	ToggleControl,
	FormTokenField,
} from '@wordpress/components';

import { InspectorControls } from '@wordpress/block-editor';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { uploadRequired, formats } = attributes;

	const uploadInspectorControls = () => {
		return (
			<PanelBody
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ uploadRequired }
					onChange={ () =>
						setAttributes( { uploadRequired: ! uploadRequired } )
					}
				/>
				<h2>Allowed Formats</h2>
				<FormTokenField
					value={ formats }
					onChange={ ( value ) =>
						setAttributes( { formats: value } )
					}
					placeholder={ __(
						'Type allowed formats',
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
					{ uploadInspectorControls() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
	);
};
export default React.memo( Settings );
