/**
 * BLOCK: Forms - Name - Deprecared
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

import attributes from './attributes';

const deprecated = [
	{
		attributes,
		save( props ) {
			const { block_id, radioRequired, options, radioName } = props.attributes;

			const isRequired = radioRequired ? __( 'required', 'ultimate-addons-for-gutenberg' ) : '';

			return (
				<div
					className={ classnames(
						'uagb-forms-radio-wrap',
						'uagb-forms-field-set',
						`uagb-block-${ block_id }`
					) }
				>
					<RichText.Content
						tagName="div"
						value={ radioName }
						className={ `uagb-forms-radio-label ${ isRequired } uagb-forms-input-label` }
						id={ block_id }
					/>

					{ options.map( ( o, index ) => {
						var optionvalue = o.optionvalue;
						var value = optionvalue.replace( /\s+/g, '-' ).toLowerCase();
						return (
							<>
								<input
									type="radio"
									id={ `radio-${ value }-${ block_id }` }
									name={ block_id }
									value={ optionvalue }
									required={ radioRequired }
								/>
								<label htmlFor={ `radio-${ value }-${ block_id }` }>{ o.optiontitle }</label>
								<br />
							</>
						);
					} ) }
				</div>
			);
		},
	},
];

export default deprecated;
