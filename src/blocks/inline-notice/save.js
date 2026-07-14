/**
 * BLOCK: Inline Notice - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';

import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;

	const {
		block_id,
		noticeTitle,
		noticeAlignment,
		headingTag,
		icon,
		noticeDismiss,
		cookies,
	} = attributes;

	let imageIconHtml = '';

	if ( noticeDismiss ) {
		imageIconHtml = renderSVG( icon );
	}

	let active = '';
	if ( true === cookies ) {
		active = 'uagb-notice__active';
	}

	const blockProps = useBlockProps.save( {
		className: classnames(
			`${noticeDismiss}`,
			`uagb-inline_notice__align-${noticeAlignment}`,
			`uagb-block-${block_id}`,
			`${active}`
		),
	} );

	return (
		<div
			{ ...blockProps }
		>
			<button className="uagb-notice-close-button" type="button" aria-label="Close">
				{imageIconHtml}
			</button>
			<RichText.Content value={noticeTitle} tagName={headingTag} className="uagb-notice-title" />
			<div className='uagb-notice-text'>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}