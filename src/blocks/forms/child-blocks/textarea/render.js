import classnames from 'classnames';
import React from 'react';
import { __ } from '@wordpress/i18n';
import { ToggleControl } from '@wordpress/components';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

import { RichText } from '@wordpress/block-editor';

const Render = ( props ) => {
	
	props = props.parentProps;
	
	const blockName = props.name.replace( 'uagb/', '' );

	const { attributes, setAttributes, isSelected } = props;

	const {
		block_id,
		textareaRequired,
		textareaName,
		rows,
		placeholder,
	} = attributes;

	const isRequired = textareaRequired
		? __( 'required', 'ultimate-addons-for-gutenberg' )
		: '';

	return (
		<>
			<div
				className={ classnames(
					'uagb-forms-textarea-wrap',
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
							checked={ textareaRequired }
							onChange={ () =>
								setAttributes( {
									textareaRequired: ! textareaRequired,
								} )
							}
						/>
					</div>
				) }
				<RichText
					tagName="div"
					placeholder={ __(
						'Textarea Name',
						'ultimate-addons-for-gutenberg'
					) }
					value={ textareaName }
					onChange={ ( value ) =>
						setAttributes( { textareaName: value } )
					}
					className={ `uagb-forms-textarea-label ${ isRequired } uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				<textarea
					required={ textareaRequired }
					className="uagb-forms-textarea-input uagb-forms-input"
					rows={ getFallbackNumber( rows, 'rows', blockName ) }
					placeholder={ placeholder }
					name={ block_id }
				></textarea>
			</div>
		</>
	);
};
export default React.memo( Render );
