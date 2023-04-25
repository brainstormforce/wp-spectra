/**
 * BLOCK: Forms - Date - Deprecared
 */

import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import attributes from './attributes';

const deprecated = [
	{
		attributes,
		save( props ) {
			const { block_id, hidden_field_value } = props.attributes;
			return (
				<div className={ classnames( 'uagb-forms-hidden-wrap', `uagb-block-${ block_id }` ) }>
					<input type="hidden" className="uagb-forms-hidden-input" value={ hidden_field_value } />
				</div>
			);
		},
	},
];

export default deprecated;
