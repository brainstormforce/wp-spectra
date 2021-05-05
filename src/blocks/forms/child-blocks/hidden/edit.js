/**
 * BLOCK: Forms - hidden - Edit
 */

import classnames from "classnames";

import { __ } from '@wordpress/i18n';
import React, { useState, useEffect } from 'react';
const {
	PanelBody,
	TextControl,
} = wp.components;
const {
	InspectorControls
} = wp.blockEditor;


const UAGBFormsHiddenEdit = ( props ) => {

	useEffect(() => {
		const { attributes, setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" );
		$style.setAttribute( "id", "uagb-style-forms-hidden-" + props.clientId.substr( 0, 8 ) );
		document.head.appendChild( $style );
	}, []);

	const changeHiddenName = ( value ) => {
		const { setAttributes } = props;
		setAttributes( { hidden_field_name: value.target.value } );
	}

	const { attributes,setAttributes } = props;

	const {
		block_id,
		hidden_field_name,
		hidden_field_value,
	} = attributes;

	const hiddenFieldSettings = () => {

		return (
			<PanelBody
				title={ __( "General" , "ultimate-addons-for-gutenberg" ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>

				<TextControl
					label={ __( "Value" , "ultimate-addons-for-gutenberg" ) }
					value={ hidden_field_value }
					onChange={ ( hidden_field_value ) =>setAttributes( { hidden_field_value } ) }
				/>

			</PanelBody>
		);
	};


	const hidden_field_label = hidden_field_name.replace( /\s+/g, "-" ).toLowerCase();
	return (
		<>
			<InspectorControls>
				{ hiddenFieldSettings() }
			</InspectorControls>
			<div className={ classnames(
				"uagb-forms-hidden-wrap",
				`uagb-block-${ block_id }`,
			) }>
				{ /* Edit View */ }
				{ props.isSelected && (
					<input type="text"  className="uagb-forms-hidden-input"  onChange={ changeHiddenName }  value={ hidden_field_name } />
				) }
				{ /* Hidden Field View */ }
				{ !props.isSelected && (
					<>
						<label className={ `uagb-forms-hidden-label uagb-form-hidden-${hidden_field_label}` }> { __( hidden_field_name , "ultimate-addons-for-gutenberg" ) } </label>
						<input type="hidden"  className="uagb-forms-hidden-input" value={ hidden_field_value } />
					</>
				) }

			</div>
		</>
	);

}

export default UAGBFormsHiddenEdit;
