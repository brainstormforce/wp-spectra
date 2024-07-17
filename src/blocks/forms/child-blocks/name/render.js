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

	const { block_id, nameRequired, name, placeholder } = attributes;

	const isRequired = nameRequired ? 'required' : '';

	return (
		<>
			<div className={ classnames( 'uagb-forms-name-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }>
				<RichText
					tagName="div"
					placeholder={ __( 'Name', 'ultimate-addons-for-gutenberg' ) }
					value={ name }
					onChange={ ( value ) => setAttributes( { name: value } ) }
					className={ `uagb-forms-name-label ${ isRequired } uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				<input
					type="text"
					placeholder={ placeholder }
					required={ nameRequired }
					className="uagb-forms-name-input uagb-forms-input"
					name={ block_id }
				/>
			</div>
		</>
	);
};
export default memo( Render );
