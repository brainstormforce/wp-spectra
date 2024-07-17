import classnames from 'classnames';
import { useLayoutEffect, memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';

import { RichText } from '@wordpress/block-editor';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, setAttributes } = props;

	const { block_id, dateRequired, name, additonalVal, minYear, minMonth, minDay } = attributes;

	let validation_min_value = '';
	const validation_max_value = '';

	if ( minYear && minMonth && minDay ) {
		validation_min_value = minYear + '-' + minMonth + '-' + minDay;
	}

	let date_html = '';
	if ( additonalVal ) {
		date_html = (
			<input
				type="date"
				className="uagb-forms-date-input uagb-forms-input"
				required={ dateRequired }
				min={ validation_min_value }
				max={ validation_max_value }
				name={ block_id }
			/>
		);
	} else {
		date_html = (
			<input
				type="date"
				className="uagb-forms-date-input uagb-forms-input"
				required={ dateRequired }
				name={ block_id }
			/>
		);
	}

	const isRequired = dateRequired ? 'required' : '';

	return (
		<>
			<div className={ classnames( 'uagb-forms-date-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }>
				<RichText
					tagName="div"
					placeholder={ __( 'Date', 'ultimate-addons-for-gutenberg' ) }
					value={ name }
					onChange={ ( value ) => setAttributes( { name: value } ) }
					className={ `uagb-forms-date-label ${ isRequired } uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				{ date_html }
			</div>
		</>
	);
};
export default memo( Render );
