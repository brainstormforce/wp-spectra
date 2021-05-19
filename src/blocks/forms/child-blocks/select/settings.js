import React from 'react';
import { __ } from '@wordpress/i18n';

const { PanelBody, ToggleControl } = wp.components;
const { InspectorControls } = wp.blockEditor;

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { selectRequired } = attributes;

	const selectInspectorControls = () => {
		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
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
		<>
			<InspectorControls>{ selectInspectorControls() }</InspectorControls>
		</>
	);
};
export default React.memo( Settings );
