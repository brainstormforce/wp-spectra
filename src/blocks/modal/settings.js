import React from 'react';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';

import { __ } from '@wordpress/i18n';
import {InspectorControls} from '@wordpress/block-editor';
import { TextControl, SelectControl } from '@wordpress/components';
import Range from '@Components/range/Range.js';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';


export default function Settings( props ) {
	const { attributes, setAttributes } = props.parentProps;
	const { modalTrigger } = attributes;
	
	const generalPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Modal Trigger', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<SelectControl
				label={ __( 'Display Modal On', 'ultimate-addons-for-gutenberg' ) }
				value={ modalTrigger }
				onChange={ ( value ) => {
					setAttributes({ modalTrigger: value })
				} }
				options={ [
					{ value: 'text', label: 'Text' },
					{ value: 'image', label: 'Image' },
					{ value: 'icon', label: 'Icon' },
				] }
			/>
		</UAGAdvancedPanelBody>
	)

	const stylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			Style settings
		</UAGAdvancedPanelBody>
	)

	return (
		<React.Fragment>
			<InspectorControls>
				<InspectorTabs>

					<InspectorTab { ...UAGTabs.general }>
						{generalPanel}
					</InspectorTab>

					<InspectorTab { ...UAGTabs.style }>
						{stylePanel}
					</InspectorTab>
					
				</InspectorTabs>
			</InspectorControls>
		</React.Fragment>
	);
}
