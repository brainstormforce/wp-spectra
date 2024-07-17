import classnames from 'classnames';
import { memo } from '@wordpress/element';

const Render = ( props ) => {

	const { attributes, isSelected } = props;

	const { block_id, hidden_field_name, hidden_field_value } = attributes;

	const hidden_field_label = hidden_field_name.replace( /\s+/g, '-' ).toLowerCase();

	const changeHiddenName = ( value ) => {
		const { setAttributes } = props;
		setAttributes( { hidden_field_name: value.target.value } );
	};

	return (
		<>
			<div className={ classnames( 'uagb-forms-hidden-wrap', `uagb-block-${ block_id }` ) }>
				{ /* Edit View */ }
				{ isSelected && (
					<input
						type="text"
						className="uagb-forms-hidden-input"
						onChange={ changeHiddenName }
						value={ hidden_field_name }
					/>
				) }
				{ /* Hidden Field View */ }
				{ ! isSelected && (
					<>
						<label
							className={ `uagb-forms-hidden-label uagb-form-hidden-${ hidden_field_label }` }
							htmlFor={ hidden_field_label }
						>
							{ hidden_field_name }
						</label>
						<input
							id={ hidden_field_label }
							type="hidden"
							className="uagb-forms-hidden-input"
							value={ hidden_field_value }
						/>
					</>
				) }
			</div>
		</>
	);
};
export default memo( Render );
