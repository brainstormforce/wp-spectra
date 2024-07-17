/**
 * BLOCK: Forms - Email - Deprecared
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
	name: {
		type: 'string',
		default: __( 'Email', 'ultimate-addons-for-gutenberg' ),
	},
	required: {
		type: 'boolean',
		default: false,
	},
	placeholder: {
		type: 'string',
		default: __( 'example@mail.com', 'ultimate-addons-for-gutenberg' ),
	},
	autocomplete: {
		type: 'string',
		default: 'email',
	},
};

const deprecated = {
		attributes,
		save: ( props ) => {
            const { attributes : { block_id, name, required, placeholder, autocomplete } } = props;
        
            const isRequired = required ? __( 'required', 'ultimate-addons-for-gutenberg' ) : '';
        
            return (
                <div className={ classnames( 'uagb-forms-email-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }>
                    <RichText.Content
                        tagName="div"
                        value={ name }
                        className={ `uagb-forms-email-label ${ isRequired } uagb-forms-input-label` }
                        id={ block_id }
                    />
                    <input
                        type="email"
                        className="uagb-forms-email-input uagb-forms-input"
                        placeholder={ placeholder }
                        required={ required }
                        name={ block_id }
                        autoComplete={ autocomplete }
                    />
                </div>
            );
        },
	}
export default deprecated;
