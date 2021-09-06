import React from 'react';
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	ToggleControl,
	TextControl,
} from '@wordpress/components';
import Range from "../../../../components/range/Range.js";
import InspectorTabs from "../../../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "../../../../components/inspector-tabs/InspectorTab.js";

import { InspectorControls } from '@wordpress/block-editor';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { textareaRequired, rows, placeholder } = attributes;

	const textareaInspectorControls = () => {
		return (
			<PanelBody
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ textareaRequired }
					onChange={ () =>
						setAttributes( {
							textareaRequired: ! textareaRequired,
						} )
					}
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
				<Range
					label={ __(
						'Number of lines',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={setAttributes}
					value={ rows }
					onChange={ ( value ) => setAttributes( { rows: value } ) }
					min={ 2 }
					max={ 10 }
					displayUnit = {false}
				/>
			</PanelBody>
		);
	};

	return (
		<>
			<InspectorControls>
				<InspectorTabs tabs={["general", "advance"]}>
					<InspectorTab {...UAGTabs.general}>
					{ textareaInspectorControls() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};
export default React.memo( Settings );
