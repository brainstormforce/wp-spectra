/**
 * BLOCK: Advanced Heading - Save Block
 */

import classnames from 'classnames';

import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		block_id,
		headingTitle,
		headingDesc,
		headingTag,
		seperatorStyle,
		headingId,
	} = props.attributes;

	let seprator = '';
	if ( seperatorStyle !== 'none' ) {
		seprator = <div className="uagb-separator"></div>
	}
	let headingText = '';
	if ( headingTitle !== '' ) {
		headingText = (
			<RichText.Content
				tagName={ headingTag }
				value={ headingTitle }
				className="uagb-heading-text"
				id={ headingId }
			/>
		);
	}
	let descText = '';

	if ( headingDesc !== '' ) {
		descText = (
			<RichText.Content
				tagName="p"
				value={ headingDesc }
				className="uagb-desc-text"
			/>
		);
	}

	return (
		<div
			className={ classnames(
				props.className,
				`uagb-block-${ block_id }`
			) }
		>
			{ headingText }
			{ seprator }
			{ descText }
		</div>
	);
}
