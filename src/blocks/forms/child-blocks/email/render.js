import classnames from 'classnames';
import React from 'react';
import { __ } from '@wordpress/i18n';

const { RichText } = wp.blockEditor;

const { ToggleControl } = wp.components;

const Render = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, isSelected } = props;

	const { block_id, name, required, placeholder } = attributes;

	const isRequired = required
		? __( 'required', 'ultimate-addons-for-gutenberg' )
		: '';

	return (
		<>
			<div
				className={ classnames(
					'uagb-forms-email-wrap',
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
							checked={ required }
							onChange={ ( value ) =>
								setAttributes( { required: ! required } )
							}
						/>
					</div>
				) }
				<RichText
					tagName="div"
					placeholder={ __(
						'Email',
						'ultimate-addons-for-gutenberg'
					) }
					value={ name }
					onChange={ ( value ) => setAttributes( { name: value } ) }
					className={ `uagb-forms-email-label ${ isRequired } uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				<input
					type="text"
					className="uagb-forms-email-input uagb-forms-input"
					placeholder={ placeholder }
					required={ required }
					name={ block_id }
				/>
			</div>
		</>
	);
};
export default React.memo( Render );
