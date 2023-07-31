/**
 * BLOCK: Forms - Textarea - Deprecared
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

const attributes = {
	isPreview: {
		type: 'boolean',
		default: false,
	},
	block_id: {
		type: 'string',
	},
	textareaName: {
		type: 'string',
		default: __( 'Message', 'ultimate-addons-for-gutenberg' ),
	},
	textareaRequired: {
		type: 'boolean',
		default: false,
	},
	rows: {
		type: 'number',
		default: 4,
	},
	placeholder: {
		type: 'string',
		default: __( 'Enter your message', 'ultimate-addons-for-gutenberg' ),
	},
	autocomplete: {
		type: 'string',
		default: 'off',
	},
};

const deprecated = [
	{
		attributes,
		save( props ) {
			const blockName = 'forms-textarea';

	const { attributes : { block_id, textareaRequired, textareaName, rows, placeholder, autocomplete } } = props;

			const isRequired = textareaRequired ? __( 'required', 'ultimate-addons-for-gutenberg' ) : '';

			return (
				<div className={ classnames( 'uagb-forms-textarea-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }>
					<RichText.Content
						tagName="div"
						value={ textareaName }
						className={ `uagb-forms-textarea-label ${ isRequired } uagb-forms-input-label` }
						id={ block_id }
					/>
					<textarea
						required={ textareaRequired }
						className="uagb-forms-textarea-input uagb-forms-input"
						rows={ getFallbackNumber( rows, 'rows', blockName ) }
						placeholder={ placeholder }
						name={ block_id }
						autoComplete={ autocomplete }
					></textarea>
				</div>
			);
		},
	},
];

export default deprecated;
