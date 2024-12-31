import classnames from 'classnames';
import { useLayoutEffect, memo } from '@wordpress/element';
import styles from './editor.lazy.scss';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes } = props;

	const { block_id, acceptRequired, acceptText, showLink, linkLabel, link, linkInNewTab } = attributes;

	const isRequired = acceptRequired ? 'required' : '';
	const target = linkInNewTab ? '_blank' : '_self';

	return (
		<>
			<div
				className={ classnames( 'uagb-forms-accept-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }
			>
				{ showLink && (
					<div className="uagb-forms-accept-privacy-link">
						<a href={ link } target={ target } rel="noopener noreferrer">
							{ linkLabel }
						</a>
					</div>
				) }
				<input
					type="checkbox"
					id={ `uagb-forms-accept-${ block_id }` }
					className="uagb-forms-checkbox"
					name={ block_id }
					required={ acceptRequired }
					value="Agree"
				/>
				<label
					name={ block_id }
					htmlFor={ `uagb-forms-accept-${ block_id }` }
					className={ `uagb-forms-accept-label ${ isRequired }` }
				>
					{ acceptText }
				</label>
				<br></br>
			</div>
		</>
	);
};

export default memo( Render );
