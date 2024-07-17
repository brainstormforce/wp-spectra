/**
 * BLOCK: Forms - Toggle - Save Block
 */

import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;

	const { block_id, toggleRequired, name, toggleStatus, layout, trueValue, falseValue } = attributes;

	const isRequired = toggleRequired ? 'required' : '';

	return (
		<div className={ classnames( 'uagb-forms-toggle-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }>
			<RichText.Content
				tagName="div"
				value={ name }
				className={ `uagb-forms-toggle-label ${ isRequired } uagb-forms-input-label` }
				id={ block_id }
			/>
			<label // eslint-disable-line jsx-a11y/label-has-for
				className="uagb-switch"
				id="uag-form"
			>
				<input
					type="hidden"
					className="uagb-forms-toggle-input"
					checked={ toggleStatus }
					data-truestate={ trueValue }
					data-falsestate={ falseValue }
					value={ toggleStatus ? trueValue : falseValue }
					required={ toggleRequired }
					name={ block_id }
					aria-label={ name }
				/>
				<input
					type="checkbox"
					className="uagb-forms-toggle-input"
					checked={ toggleStatus }
					data-truestate={ trueValue }
					data-falsestate={ falseValue }
					value={ toggleStatus ? trueValue : falseValue }
					required={ toggleRequired }
					name={ block_id }
					aria-label={ name }
				/>
				<span className={ `uagb-slider ${ layout }` }></span>
			</label>
		</div>
	);
}
