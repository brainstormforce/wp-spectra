/**
 * BLOCK: Forms - Radio - Save Block
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
	radioName: {
		type: 'string',
		default: __( 'RadioBox Title', 'ultimate-addons-for-gutenberg' ),
	},
	radioRequired: {
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
	layout: {
		type: 'string',
		default: 'round',
	},
};

const deprecated = {
	attributes,
	save: ( props ) => {
		const {
			attributes: { block_id, radioRequired, options, radioName, layout },
		} = props;

		const isRequired = radioRequired ? __( 'required', 'ultimate-addons-for-gutenberg' ) : '';
		return (
			<div
				className={ classnames( 'uagb-forms-radio-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }
			>
				<RichText.Content
					tagName="div"
					value={ radioName }
					className={ `uagb-forms-radio-label ${ isRequired } uagb-forms-input-label` }
					id={ block_id }
				/>

				{ options.map( ( o ) => {
					const optionvalue = o.optionvalue;
					const value = optionvalue.replace( /\s+/g, '-' ).toLowerCase();
					return (
						<>
							<input
								type="radio"
								id={ `radio-${ value }-${ block_id }` }
								name={ block_id }
								value={ optionvalue }
								required={ radioRequired }
								className={ layout }
							/>
							<label htmlFor={ `radio-${ value }-${ block_id }` }>{ o.optiontitle }</label>
							<br />
						</>
					);
				} ) }
			</div>
		);
	},
};

export default deprecated;
