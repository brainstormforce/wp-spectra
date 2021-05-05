/**
 * BLOCK: Forms - Radio - Edit
 */

import classnames from "classnames";
import { __ } from '@wordpress/i18n';
import React, { useState, useEffect } from 'react';
const {
	PanelBody,
	Button,
	ToggleControl,

} = wp.components;
const {
	InspectorControls,
	RichText,
} = wp.blockEditor;


const UAGBFormsRadioEdit = ( props ) => {

	const [state, setState] = useState({ optionsstate:  [ { "optiontitle": __( "Option Name 1" , "ultimate-addons-for-gutenberg" ) } ] });

	useEffect(() => {
		const { attributes, setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" );
		$style.setAttribute( "id", "uagb-style-forms-radio-" + props.clientId.substr( 0, 8 ) );
		document.head.appendChild( $style );
	}, []);

	const { attributes, setAttributes, isSelected } = props;

	const {
		block_id,
		radioRequired,
		options,
		radioName
	} = attributes;
	const radioInspectorControls = () => {

		return (
			<PanelBody
				title={ __( "General" , "ultimate-addons-for-gutenberg" ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
				<ToggleControl
					label={ __( "Required" , "ultimate-addons-for-gutenberg" ) }
					checked={ radioRequired }
					onChange={ ( value ) => setAttributes( { radioRequired: ! radioRequired } ) }
				/>
			</PanelBody>
		);
	};

	const addOption = () => {
		const newOption ={ "optiontitle": __( `Option Name ${options.length + 1}`, "ultimate-addons-for-gutenberg" ),"optionvalue": __( `Option Value ${options.length + 1}`, "ultimate-addons-for-gutenberg" ) };
		options[options.length] = newOption;
		const addnewOptions = options.map( ( item, thisIndex ) => {
			return item;
		} );

		setAttributes( { options:addnewOptions } );
		setState( { optionsstate : addnewOptions } );
	};

	const changeOption = ( e, index ) => {
		const editOptions = options.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item = { ...item, ...e };
			}
			return item;
		} );

		setAttributes( { options: editOptions } );
		setState( { optionsstate : editOptions } );

	};

	const deleteOption = index => {
		const deleteOptions = options.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				options.splice( index, 1 );
				item = { options };
			}
			return item;
		} );

		setState( { optionsstate : deleteOptions } );
		setAttributes( { deleteOptions } );

	};

	const editView = options.map( ( option, index ) => {

		return (
			<div className="uagb-form-radio-option">
				<input
					type="radio"
					name={ `radio-${block_id}` }
					value={ option.optiontitle }
					id={ option.optiontitle }
				/>
				<label htmlFor={ option.optiontitle }></label>
				<input
					className="uagb-inner-input-view"
					aria-label={ option.optiontitle }
					onChange={ e => changeOption( { optiontitle: e.target.value,optionvalue: e.target.value }, index ) }
					type="text"
					value={ option.optiontitle }
				/>
				<input
					className="uagb-inner-input-view"
					aria-label={ option.optionvalue }
					onChange={ e => changeOption( { optionvalue: e.target.value }, index ) }
					type="text"
					value={ option.optionvalue }
				/>
				<Button
					className="uagb-form-radio-option-delete"
					icon="trash"
					label="Remove" onClick={ () => deleteOption( index ) }
				/>
			</div>
		);
	} );

	const RadioView = () => {

		return  (

			options.map( ( option, index ) => {
				const optionvalue = option.optionvalue;
				const value = optionvalue.replace( /\s+/g, "-" ).toLowerCase();
				return (
					<>
						<input type="radio" id={ value } name={ block_id } value={ optionvalue } required={ radioRequired } />
						<label htmlFor={ value }>{ option.optiontitle }</label><br />
					</>
				);
			} )
		);
	};

	const isRequired = ( radioRequired ) ?__( "required","ultimate-addons-for-gutenberg" ) : "";

	return (
		<>
			<InspectorControls>
				{ radioInspectorControls() }
			</InspectorControls>
			<div className={ classnames(
				"uagb-forms-radio-wrap",
				"uagb-forms-field-set",
				`uagb-block-${ block_id }`,
			) }>
				{ isSelected && (
					<div className="uagb-forms-required-wrap">
						<ToggleControl
							label={ __( "Required" , "ultimate-addons-for-gutenberg" ) }
							checked={ radioRequired }
							onChange={ ( value ) => setAttributes( { radioRequired: ! radioRequired } ) }
						/>
					</div>
				) }
				<RichText
					tagName="div"
					placeholder={ __( "Radio Title" , "ultimate-addons-for-gutenberg" ) }
					value={ radioName }
					onChange={ ( value ) => setAttributes( { radioName: value } ) }
					className={ `uagb-forms-radio-label ${isRequired} uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				{ isSelected && (
					<>
						<div className="uagb-forms-radio-controls">
							{ editView }
							<div>
								<Button isSecondary onClick={ addOption }>{ __( " + Add Option " , "ultimate-addons-for-gutenberg" ) }</Button>
							</div>
						</div>
					</>
				) }

				{ !isSelected && ( <RadioView /> ) }
			</div>
		</>
	);
}



export default UAGBFormsRadioEdit;
