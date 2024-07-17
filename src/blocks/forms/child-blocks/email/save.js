/**
 * BLOCK: Forms - Email - Save Block
 */

import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;

	const { block_id, name, required, placeholder, autocomplete } = attributes;

	const isRequired = required ? 'required' : '';

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
}
