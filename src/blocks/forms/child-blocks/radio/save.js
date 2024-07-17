/**
 * BLOCK: Forms - Radio - Save Block
 */

import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;

	const { block_id, radioRequired, options, radioName, layout } = attributes;

	const isRequired = radioRequired ? 'required' : '';

	return (
		<div className={ classnames( 'uagb-forms-radio-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }>
			<RichText.Content
				tagName="div"
				value={ radioName }
				className={ `uagb-forms-radio-label ${ isRequired } uagb-forms-input-label` }
				id={ block_id }
			/>

			{ options.map( ( o ) => {
				const optionvalue = o.optionvalue;
				const value = optionvalue.replace( /\s+/g, '-' ).toLowerCase();
				return (
					<>
						<input
							type="radio"
							id={ `radio-${ value }-${ block_id }` }
							name={ block_id }
							value={ optionvalue }
							required={ radioRequired }
							className={ layout }
						/>
						<label htmlFor={ `radio-${ value }-${ block_id }` }>{ o.optiontitle }</label>
						<br />
					</>
				);
			} ) }
		</div>
	);
}
