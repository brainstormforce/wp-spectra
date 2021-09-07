import React from 'react';
import { __ } from '@wordpress/i18n';
import InspectorTabs from "@Components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "@Components/inspector-tabs/InspectorTab.js";

import { PanelBody, ToggleControl, SelectControl } from '@wordpress/components';

import { InspectorControls } from '@wordpress/block-editor';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { phoneRequired, pattern } = attributes;

	const phoneInspectorControls = () => {
		return (
			<PanelBody
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ phoneRequired }
					onChange={ () =>
						setAttributes( { phoneRequired: ! phoneRequired } )
					}
				/>
				<SelectControl
					label={ __( 'Pattern' ) }
					value={ pattern }
					options={ [
						{ label: 'None', value: '' },
						{
							label: '123-45-678',
							value: __(
								'[0-9]{3}-[0-9]{2}-[0-9]{3}',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							label: '123-456-6789',
							value: __(
								'[0-9]{3}-[0-9]{3}-[0-9]{4}',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					onChange={ ( new_pattern ) => {
						setAttributes( { new_pattern } );
					} }
				/>
			</PanelBody>
		);
	};

	return (
			<InspectorControls>
				<InspectorTabs tabs={["general", "advance"]}>
					<InspectorTab {...UAGTabs.general}>
					{ phoneInspectorControls() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
	);
};
export default React.memo( Settings );
