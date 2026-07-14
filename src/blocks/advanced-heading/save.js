/**
 * BLOCK: Advanced Heading - Save Block
 */

import classnames from 'classnames';

import { RichText, useBlockProps } from '@wordpress/block-editor';

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
		headingWrapper,
	} = props.attributes;

	const Element = headingWrapper || 'div';

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

	const blockProps = useBlockProps.save( {
		className: classnames( `uagb-block-${ block_id }` ),
	} );

	return (
		<Element { ...blockProps }>
			{ headingDescToggle && 'above-heading' === headingDescPosition ? descText : '' }
			{ headingTitleToggle && headingText }
			{ headingDescToggle && 'below-heading' === headingDescPosition ? descText : '' }
			{ ! headingDescToggle && ! headingTitleToggle ? seprator : '' }
		</Element>
	);
}
