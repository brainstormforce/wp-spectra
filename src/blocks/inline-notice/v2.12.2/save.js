/**
 * BLOCK: Inline Notice - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';

import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes, className } = props;

	const {
		block_id,
		noticeTitle,
		noticeContent,
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
	return (
		<div
			className={classnames(
				className,
				`${noticeDismiss}`,
				`uagb-inline_notice__align-${noticeAlignment}`,
				`uagb-block-${block_id}`,
				`${active}`
			)}
		>
			<button className="uagb-notice-close-button" type="button" aria-label="Close">
				{imageIconHtml}
			</button>
			<RichText.Content value={noticeTitle} tagName={headingTag} className="uagb-notice-title" />
			<RichText.Content value={noticeContent} tagName="div" className="uagb-notice-text" />
		</div>
	);
}