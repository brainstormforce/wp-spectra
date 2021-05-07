import classnames from 'classnames';
import React from 'react';
import { __ } from '@wordpress/i18n';
const { ToggleControl } = wp.components;
const { RichText } = wp.blockEditor;

const Render = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, isSelected } = props;

	const {
		block_id,
		toggleRequired,
		name,
		toggleStatus,
		layout,
		trueValue,
		falseValue,
	} = attributes;

	const isRequired = toggleRequired
		? __( 'required', 'ultimate-addons-for-gutenberg' )
		: '';

	return (
		<>
			<div
				className={ classnames(
					'uagb-forms-toggle-wrap',
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
							checked={ toggleRequired }
							onChange={ ( value ) =>
								setAttributes( {
									toggleRequired: ! toggleRequired,
								} )
							}
						/>
					</div>
				) }
				<RichText
					tagName="div"
					placeholder={ __(
						'Name',
						'ultimate-addons-for-gutenberg'
					) }
					value={ name }
					onChange={ ( value ) => setAttributes( { name: value } ) }
					className={ `uagb-forms-toggle-label ${ isRequired } uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				<label className="uagb-switch">
					<input
						type="hidden"
						className="uagb-forms-toggle-input"
						checked={ toggleStatus }
						data-truestate={ trueValue }
						data-falsestate={ falseValue }
						value={ toggleStatus ? trueValue : falseValue }
						required={ toggleRequired }
						name={ block_id }
					/>
					<input
						type="checkbox"
						className="uagb-forms-toggle-input"
						readOnly
						checked={ toggleStatus }
						data-truestate={ trueValue }
						data-falsestate={ falseValue }
						value={ toggleStatus ? trueValue : falseValue }
						required={ toggleRequired }
						name={ block_id }
					/>
					<span className={ `uagb-slider ${ layout }` }></span>
				</label>
			</div>
		</>
	);
};
export default React.memo( Render );
