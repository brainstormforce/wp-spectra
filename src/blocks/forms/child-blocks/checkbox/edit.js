/**
 * BLOCK: Forms - Checkbox - Edit
 */

import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import React, { useState, useEffect } from 'react';

const { PanelBody, Button, ToggleControl } = wp.components;

const { InspectorControls, RichText } = wp.blockEditor;

const UAGBFormsCheckboxEdit = ( props ) => {
	const [ state, setState ] = useState( {
		optionsstate: [
			{
				optiontitle: __(
					'Option Name 1',
					'ultimate-addons-for-gutenberg'
				),
			},
		],
	} );

	useEffect( () => {
		const { attributes, setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-forms-checkbox-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	const { attributes, setAttributes, isSelected } = props;

	const { block_id, checkboxRequired, options, checkboxName } = attributes;
	const checkboxInspectorControls = () => {
		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ checkboxRequired }
					onChange={ ( value ) =>
						setAttributes( {
							checkboxRequired: ! checkboxRequired,
						} )
					}
				/>
			</PanelBody>
		);
	};

	const addOption = () => {
		const newOption = {
			optiontitle: __(
				`Option Name ${ options.length + 1 }`,
				'ultimate-addons-for-gutenberg'
			),
			optionvalue: __(
				`Option Value ${ options.length + 1 }`,
				'ultimate-addons-for-gutenberg'
			),
		};
		options[ options.length ] = newOption;
		const addnewOptions = options.map( ( item, thisIndex ) => {
			return item;
		} );

		setAttributes( { options: addnewOptions } );
		setState( { optionsstate: addnewOptions } );
	};

	const changeOption = ( e, index ) => {
		const editOptions = options.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item = { ...item, ...e };
			}
			return item;
		} );

		setAttributes( { options: editOptions } );
		setState( { optionsstate: editOptions } );
	};

	const deleteOption = ( index ) => {
		const deleteOptions = options.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				options.splice( index, 1 );
				item = { options };
			}
			return item;
		} );

		setState( { optionsstate: deleteOptions } );
		setAttributes( { deleteOptions } );
	};

	const editView = options.map( ( option, index ) => {
		return (
			<div className="uagb-form-checkbox-option">
				<input
					type="checkbox"
					name={ `checkbox-${ block_id }` }
					value={ option.optiontitle }
					id={ option.optiontitle }
				/>
				<label htmlFor={ option.optiontitle }></label>
				<input
					className="uagb-inner-input-view"
					aria-label={ option.optiontitle }
					onChange={ ( e ) =>
						changeOption(
							{
								optiontitle: e.target.value,
								optionvalue: e.target.value,
							},
							index
						)
					}
					type="text"
					value={ option.optiontitle }
				/>
				<input
					className="uagb-inner-input-view"
					aria-label={ option.optionvalue }
					onChange={ ( e ) =>
						changeOption( { optionvalue: e.target.value }, index )
					}
					type="text"
					value={ option.optionvalue }
				/>
				<Button
					className="uagb-form-checkbox-option-delete"
					icon="trash"
					label="Remove"
					onClick={ () => deleteOption( index ) }
				/>
			</div>
		);
	} );

	const CheckboxView = () => {
		return options.map( ( option, index ) => {
			const optionvalue = option.optionvalue;
			const value = optionvalue.replace( /\s+/g, '-' ).toLowerCase();
			return (
				<>
					<input
						type="checkbox"
						className="uagb-forms-checkbox"
						id={ `checkbox-${ value }-${ block_id }` }
						name={ `${ checkboxName }[]` }
						value={ value }
						required={ checkboxRequired }
					/>
					<label htmlFor={ `checkbox-${ value }-${ block_id }` }>
						{ option.optiontitle }
					</label>
					<br />
				</>
			);
		} );
	};

	const isRequired = checkboxRequired
		? __( 'required', 'ultimate-addons-for-gutenberg' )
		: '';

	return (
		<>
			<InspectorControls>
				{ checkboxInspectorControls() }
			</InspectorControls>
			<div
				className={ classnames(
					'uagb-forms-checkbox-wrap',
					'uagb-forms-field-set',
					`uagb-block-${ block_id }`
				) }
			>
				{ isSelected && (
					<div className="uagb-forms-required-wrap">
						<ToggleControl
							label={ __(
								'Required',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ checkboxRequired }
							onChange={ ( value ) =>
								setAttributes( {
									checkboxRequired: ! checkboxRequired,
								} )
							}
						/>
					</div>
				) }
				<RichText
					tagName="div"
					placeholder={ __(
						'Checkbox Title',
						'ultimate-addons-for-gutenberg'
					) }
					value={ checkboxName }
					onChange={ ( value ) =>
						setAttributes( { checkboxName: value } )
					}
					className={ `uagb-forms-checkbox-label ${ isRequired } uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				{ isSelected && (
					<>
						{ editView }
						<div className="uagb-forms-checkbox-controls">
							<div>
								<Button isSecondary onClick={ addOption }>
									{ __(
										' + Add Option ',
										'ultimate-addons-for-gutenberg'
									) }
								</Button>
							</div>
						</div>
					</>
				) }

				{ ! isSelected && <CheckboxView /> }
			</div>
		</>
	);
};

export default UAGBFormsCheckboxEdit;
