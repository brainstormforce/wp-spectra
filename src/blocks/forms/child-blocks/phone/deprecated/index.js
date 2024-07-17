import classnames from 'classnames';
import countryOptionsOld from '../country-option-old';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

const attributes = {
	block_id: {
		type: 'string',
	},
	phoneName: {
		type: 'string',
		default: __( 'Phone', 'ultimate-addons-for-gutenberg' ),
	},
	phoneRequired: {
		type: 'boolean',
		default: false,
	},
	pattern: {
		type: 'string',
		default: __( '[0-9]{3}-[0-9]{3}-[0-9]{4}', 'ultimate-addons-for-gutenberg' ),
	},
	selectPhoneCode: {
		type: 'string',
		default: '+44',
	},
	autocomplete: {
		type: 'string',
		default: 'tel-national',
	},
};
const deprecated = [
	{
		attributes,
		save( props ) {
			const { block_id, phoneRequired, phoneName, pattern } = props.attributes;

			let placeholder = '';
			if ( pattern === '[0-9]{3}-[0-9]{2}-[0-9]{3}' ) {
				placeholder = __( '123-45-678', 'ultimate-addons-for-gutenberg' );
			} else if ( pattern === '[0-9]{3}-[0-9]{3}-[0-9]{4}' ) {
				placeholder = __( '123-456-6789', 'ultimate-addons-for-gutenberg' );
			}

			let phone_html = '';
			if ( pattern !== '' ) {
				phone_html = (
					<input
						type="tel"
						placeholder={ placeholder }
						pattern={ pattern }
						required={ phoneRequired }
						className="uagb-forms-phone-input uagb-forms-input"
						name={ `${ phoneName }[]` }
					/>
				);
			} else {
				phone_html = (
					<input
						type="tel"
						required={ phoneRequired }
						className="uagb-forms-phone-input uagb-forms-input"
						name={ `${ phoneName }[]` }
					/>
				);
			}

			const isRequired = phoneRequired ? __( 'required', 'ultimate-addons-for-gutenberg' ) : '';
			return (
				<div
					className={ classnames(
						'uagb-forms-phone-wrap',
						'uagb-forms-field-set',
						`uagb-block-${ block_id }`
					) }
				>
					<RichText.Content
						tagName="div"
						value={ phoneName }
						className={ `uagb-forms-phone-label ${ isRequired } uagb-forms-input-label` }
						id={ block_id }
					/>

					<select
						className="uagb-forms-input uagb-form-phone-country"
						id={ `uagb-form-country-${ block_id }` }
						name={ `${ phoneName }[]` }
					>
						{ countryOptionsOld.map( ( o, index ) => (
							<option value={ o.props.value } key={ index }>
								{ o.props.children }
							</option>
						) ) }
					</select>
					{ phone_html }
				</div>
			);
		},
	},
];

export default deprecated;
