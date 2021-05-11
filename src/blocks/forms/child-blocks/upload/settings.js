import React from 'react';
import { __ } from '@wordpress/i18n';

const { PanelBody, ToggleControl, FormTokenField } = wp.components;
const { InspectorControls } = wp.blockEditor;

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { uploadRequired, formats } = attributes;

	const uploadInspectorControls = () => {
		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
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
		<>
			<InspectorControls>{ uploadInspectorControls() }</InspectorControls>
		</>
	);
};
export default React.memo( Settings );
