/**
 * BLOCK: Forms - hidden - Save Block
 */

import classnames from 'classnames';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;

	const { block_id, hidden_field_value, hidden_field_name } = attributes;

	const blockProps = useBlockProps.save( {
		className: classnames( 'uagb-forms-hidden-wrap', `uagb-block-${ block_id }` ),
	} );

	return (
		<div { ...blockProps }>
			<input
				type="hidden"
				id="hidden"
				className="uagb-forms-hidden-input"
				value={ hidden_field_value }
				name={ hidden_field_name }
			/>
		</div>
	);
}
