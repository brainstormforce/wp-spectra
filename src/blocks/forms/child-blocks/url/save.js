/**
 * BLOCK: Forms - URL - Save Block
 */

import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
export default function save( props ) {
	const { attributes } = props;

	const { block_id, required, name, placeholder, autocomplete } = attributes;

	const isRequired = required ? 'required' : '';

	return (
		<div className={ classnames( 'uagb-forms-url-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }>
			<RichText.Content
				tagName="div"
				value={ name }
				className={ `uagb-forms-url-label ${ isRequired } uagb-forms-input-label` }
				id={ block_id }
			/>
			<input
				type="url"
				name={ block_id }
				required={ required }
				placeholder={ placeholder }
				className="uagb-forms-url-input uagb-forms-input"
				autoComplete={ autocomplete }
			/>
		</div>
	);
}
