/**
 * BLOCK: Forms - Name - Save Block
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
	nameRequired: {
		type: 'boolean',
		default: false,
	},
	name: {
		type: 'string',
		default: __( 'Name', 'ultimate-addons-for-gutenberg' ),
	},
	placeholder: {
		type: 'string',
		default: __( 'John Doe', 'ultimate-addons-for-gutenberg' ),
	},
	autocomplete: {
		type: 'string',
		default: 'name',
	},
};

const deprecated = {
	attributes,
	save: ( props ) => {
		
		const { attributes : { block_id, nameRequired, name, placeholder, autocomplete } } = props;

		const isRequired = nameRequired ? __( 'required', 'ultimate-addons-for-gutenberg' ) : '';

		return (
			<div className={ classnames( 'uagb-forms-name-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }>
				<RichText.Content
					tagName="div"
					value={ name }
					className={ `uagb-forms-name-label ${ isRequired } uagb-forms-input-label` }
					id={ block_id }
				/>
				<input
					type="text"
					placeholder={ placeholder }
					required={ nameRequired }
					className="uagb-forms-name-input uagb-forms-input"
					name={ block_id }
					autoComplete={ autocomplete }
				/>
			</div>
		);

	}
}

export default deprecated;
