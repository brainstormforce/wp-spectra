import classnames from 'classnames';
import React from 'react';
import { __ } from '@wordpress/i18n';

const { ToggleControl } = wp.components;
const { RichText } = wp.blockEditor;

const Render = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, isSelected } = props;

	const { block_id, nameRequired, name, placeholder } = attributes;

	const isRequired = nameRequired
		? __( 'required', 'ultimate-addons-for-gutenberg' )
		: '';

	return (
		<>
			<div
				className={ classnames(
					'uagb-forms-name-wrap',
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
							checked={ nameRequired }
							onChange={ ( value ) =>
								setAttributes( {
									nameRequired: ! nameRequired,
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
					className={ `uagb-forms-name-label ${ isRequired } uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				<input
					type="text"
					placeholder={ placeholder }
					required={ nameRequired }
					className="uagb-forms-name-input uagb-forms-input"
					name={ block_id }
				/>
			</div>
		</>
	);
};
export default React.memo( Render );
