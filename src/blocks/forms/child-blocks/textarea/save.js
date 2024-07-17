/**
 * BLOCK: Forms - Textarea - Save Block
 */

import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

export default function save( props ) {
	const blockName = 'forms-textarea';

	const { attributes } = props;

	const { block_id, textareaRequired, textareaName, rows, placeholder, autocomplete } = attributes;

	const isRequired = textareaRequired ? 'required' : '';

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
}
