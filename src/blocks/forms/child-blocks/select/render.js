import classnames from 'classnames';
import React from 'react';
import { __ } from '@wordpress/i18n';

const { Button, ToggleControl } = wp.components;
const { RichText } = wp.blockEditor;

const Render = ( props ) => {
	const { setState } = props;

	props = props.parentProps;

	const { attributes, setAttributes, isSelected } = props;

	const { block_id, selectRequired, options, selectName } = attributes;

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

	const editView = options.map( ( s, index ) => {
		return (
			<div className="uagb-form-select-option">
				<input
					className="uagb-inner-input-view"
					aria-label={ s.optiontitle }
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
					value={ s.optiontitle }
				/>
				<input
					className="uagb-inner-input-view"
					aria-label={ s.optionvalue }
					onChange={ ( e ) =>
						changeOption( { optionvalue: e.target.value }, index )
					}
					type="text"
					value={ s.optionvalue }
				/>
				<Button
					className="uagb-form-select-option-delete"
					icon="trash"
					label="Remove"
					onClick={ () => deleteOption( index ) }
				/>
			</div>
		);
	} );

	const SelectView = () => {
		const showoptionsField = options.map( ( o, index ) => {
			const optionvalue = o.optionvalue;
			const value = optionvalue.replace( /\s+/g, '-' ).toLowerCase();
			return <option value={ optionvalue }>{ o.optiontitle }</option>;
		} );

		return (
			<select
				className="uagb-forms-select-box uagb-forms-input"
				required={ selectRequired }
				name={ block_id }
			>
				<option value="" disabled selected>
					Select your option
				</option>
				{ showoptionsField }
			</select>
		);
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
		const deleteCurrentOptions = options.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				options.splice( index, 1 );
				item = { options };
			}
			return item;
		} );

		setState( { optionsstate: deleteCurrentOptions } );
		setAttributes( { deleteCurrentOptions } );
	};

	const isRequired = selectRequired
		? __( 'required', 'ultimate-addons-for-gutenberg' )
		: '';

	return (
		<>
			<div
				className={ classnames(
					'uagb-forms-select-wrap',
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
							checked={ selectRequired }
							onChange={ ( value ) =>
								setAttributes( {
									selectRequired: ! selectRequired,
								} )
							}
						/>
					</div>
				) }
				<RichText
					tagName="div"
					placeholder={ __(
						'Select Title',
						'ultimate-addons-for-gutenberg'
					) }
					value={ selectName }
					onChange={ ( value ) =>
						setAttributes( { selectName: value } )
					}
					className={ `uagb-forms-select-label ${ isRequired } uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				{ isSelected && (
					<>
						{ editView }
						<div className="uagb-forms-select-controls">
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

				{ ! isSelected && <SelectView /> }
			</div>
		</>
	);
};
export default React.memo( Render );
