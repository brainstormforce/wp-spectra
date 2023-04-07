/**
 * BLOCK: Advanced Heading - Save Block
 */

import classnames from 'classnames';

import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		block_id,
		headingTitleToggle,
		headingTitle,
		headingDesc,
		headingDescToggle,
		headingTag,
		seperatorStyle,
		headingId,
		seperatorPosition,
		headingDescPosition,
	} = props.attributes;

	let seprator = '';
	if ( seperatorStyle !== 'none' ) {
		seprator = <div className="uagb-separator"></div>;
	}
	let headingText = '';
	if ( headingTitle ) {
		headingText = (
			<>
				{ seperatorPosition === 'above-heading' ? seprator : '' }
				<RichText.Content
					tagName={ headingTag }
					value={ headingTitle }
					className="uagb-heading-text"
					id={ headingId }
				/>
				{ seperatorPosition === 'below-heading' ? seprator : '' }
			</>
		);
	}
	let descText = '';

	if ( headingDesc ) {
		descText = (
			<>
				{ seperatorPosition === 'above-sub-heading' ? seprator : '' }
				<RichText.Content tagName="p" value={ headingDesc } className="uagb-desc-text" />
				{ seperatorPosition === 'below-sub-heading' ? seprator : '' }
			</>
		);
	}

	return (
		<div className={ classnames( props.className, `uagb-block-${ block_id }` ) }>
			{ headingDescToggle && 'above-heading' === headingDescPosition ? descText : '' }
			{ headingTitleToggle && headingText }
			{ headingDescToggle && 'below-heading' === headingDescPosition ? descText : '' }
			{ ! headingDescToggle && ! headingTitleToggle ? seprator : '' }
		</div>
	);
}
