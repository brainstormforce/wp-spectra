/**
 * BLOCK: Forms - Checkbox - Deprecared
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

const attributes = {
	isPreview: {
		type: 'boolean',
		default: false,
	},
	block_id: {
		type: 'string',
	},
	checkboxName: {
		type: 'string',
		default: __( 'Checkbox Title', 'ultimate-addons-for-gutenberg' ),
	},
	checkboxRequired: {
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

const deprecated = [
	{
		attributes,
		save( props ) {
			const { attributes } = props;

			const { block_id, checkboxRequired, options, checkboxName } = attributes;

			const isRequired = checkboxRequired ? __( 'required', 'ultimate-addons-for-gutenberg' ) : '';

			return (
				<div
					className={ classnames(
						'uagb-forms-checkbox-wrap',
						'uagb-forms-field-set',
						`uagb-block-${ block_id }`
					) }
				>
					<RichText.Content
						tagName="div"
						value={ checkboxName }
						className={ `uagb-forms-checkbox-label ${ isRequired } uagb-forms-input-label` }
						id={ block_id }
					/>

					{ options.map( ( o, index ) => {
						const optionvalue = o.optionvalue;
						const value = optionvalue.replace( /\s+/g, '-' ).toLowerCase();
						return (
							<Fragment key={ index }>
								<input
									type="checkbox"
									className="uagb-forms-checkbox"
									id={ `checkbox-${ value }-${ block_id }` }
									name={ `${ checkboxName }[]` }
									value={ optionvalue }
									required={ checkboxRequired }
									onInvalid="this.setCustomValidity('Please check this box if you want to proceed.')"
								/>
								<label htmlFor={ `checkbox-${ value }-${ block_id }` }>{ o.optiontitle }</label>
								<br />
							</Fragment>
						);
					} ) }
				</div>
			);
		},
	},
];

export default deprecated;
