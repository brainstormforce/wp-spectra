/**
 * BLOCK: Forms - Accept - Save Block
 */

import classnames from 'classnames';

export default function save( props ) {
	const { attributes } = props;

	const { block_id, acceptRequired, acceptText, showLink, linkLabel, link, linkInNewTab } = attributes;

	const isRequired = acceptRequired ? 'required' : '';
	const target = linkInNewTab ? '_blank' : '_self';

	return (
		<div className={ classnames( 'uagb-forms-accept-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }>
			{ showLink && (
				<div className="uagb-forms-accept-privacy-link">
					<a href={ link } target={ target } rel="noopener noreferrer">
						{ linkLabel }
					</a>
				</div>
			) }
			<input
				type="checkbox"
				name={ block_id }
				required={ acceptRequired }
				value="Agree"
				className="uagb-forms-checkbox"
				id={ `uagb-forms-accept-${ block_id }` }
			/>
			<label
				name={ block_id }
				htmlFor={ `uagb-forms-accept-${ block_id }` }
				className={ `uagb-forms-accept-label ${ isRequired }` }
				id={ block_id }
			>
				{ acceptText }
			</label>
			<br></br>
		</div>
	);
}
