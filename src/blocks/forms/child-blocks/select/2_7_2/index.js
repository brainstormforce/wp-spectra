/**
 * BLOCK: Forms - Select - Save Block
 */

import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

const attributes = {
	isPreview: {
		type: 'boolean',
		default: false,
	},
	block_id: {
		type: 'string',
	},
	selectName: {
		type: 'string',
		default: __( 'Select Title', 'ultimate-addons-for-gutenberg' ),
	},
	selectRequired: {
		type: 'boolean',
		default: false,
	},
	options: {
		type: 'array',
		default: [
			{
				optiontitle: __( 'Option Name 1', 'ultimate-addons-for-gutenberg' ),
				optionvalue: __( 'Option Value 1', 'ultimate-addons-for-gutenberg' ),
			},
		],
	},
};

const deprecated = {
	attributes,
	save: ( props ) => {
		const {
			attributes: { block_id, selectRequired, options, selectName },
		} = props;

		const isRequired = selectRequired ? __( 'required', 'ultimate-addons-for-gutenberg' ) : '';

		return (
			<div
				className={ classnames( 'uagb-forms-select-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }
			>
				<RichText.Content
					tagName="div"
					value={ selectName }
					className={ `uagb-forms-select-label ${ isRequired } uagb-forms-input-label` }
					id={ block_id }
				/>
				<select
					className="uagb-forms-select-box uagb-forms-input"
					required={ selectRequired }
					name={ block_id }
				>
					<option value="" disabled selected>
						{ __( 'Select your option', 'ultimate-addons-for-gutenberg' ) }
					</option>
					{ options.map( ( o, index ) => {
						return (
							<option key={ index } value={ o.optionvalue }>
								{ o.optiontitle }
							</option>
						);
					} ) }
				</select>
			</div>
		);
	},
};

export default deprecated;
