import classnames from 'classnames';
import React from 'react';
import { __ } from '@wordpress/i18n';

const { ToggleControl } = wp.components;
const { RichText } = wp.blockEditor;

const Render = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, isSelected } = props;

	const { block_id, dateRequired, name, additonalVal } = attributes;

	let date_html = '';
	if ( additonalVal ) {
		date_html = (
			<input
				type="date"
				className="uagb-forms-date-input uagb-forms-input"
				required={ dateRequired }
				min={ validation_min_value }
				max={ validation_max_value }
				name={ block_id }
			/>
		);
	} else {
		date_html = (
			<input
				type="date"
				className="uagb-forms-date-input uagb-forms-input"
				required={ dateRequired }
				name={ block_id }
			/>
		);
	}

	const isRequired = dateRequired
		? __( 'required', 'ultimate-addons-for-gutenberg' )
		: '';

	return (
		<>
			<div
				className={ classnames(
					'uagb-forms-date-wrap',
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
							checked={ dateRequired }
							onChange={ ( value ) =>
								setAttributes( {
									dateRequired: ! dateRequired,
								} )
							}
						/>
					</div>
				) }
				<RichText
					tagName="div"
					placeholder={ __(
						'Date',
						'ultimate-addons-for-gutenberg'
					) }
					value={ name }
					onChange={ ( value ) => setAttributes( { name: value } ) }
					className={ `uagb-forms-date-label ${ isRequired } uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				{ date_html }
			</div>
		</>
	);
};
export default React.memo( Render );
