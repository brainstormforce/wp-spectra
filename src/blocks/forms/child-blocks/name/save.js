/**
 * BLOCK: Forms - Name - Save Block
 */

import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;

	const { block_id, nameRequired, name, placeholder, autocomplete } = attributes;

	const isRequired = nameRequired ? 'required' : '';

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
