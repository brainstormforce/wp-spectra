/**
 * BLOCK: Inline Notice - Save Block
 */

// Import block dependencies and components.
import classnames from "classnames"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

const {
	RichText,
} = wp.blockEditor

export default function save( props ) {
	
	const { attributes, className } = props

	const {
		block_id,
		c_id,
		noticeTitle,
		noticeContent,
		noticeAlignment,
		icon,
		noticeDismiss,
		cookies,
		close_cookie_days
	} = attributes
 
	let image_icon_html = ''

	if ( noticeDismiss ) {
		image_icon_html = <span className="uagb-notice-dismiss">{ renderSVG(icon) }</span>
	}


	return (
		<div className={ classnames(
			className,
			"uagb-inline_notice__outer-wrap",
			`${ noticeDismiss }`,
			`uagb-inline_notice__align-${ noticeAlignment }`,
			`uagb-block-${ block_id }`
		) }
		data-id = { c_id }
		data-cookies= { cookies }
		data-cookies-days= { close_cookie_days }
		>
			{image_icon_html}
			<RichText.Content
				value={ noticeTitle }
				tagName="h4"
				className='uagb-notice-title'
			/>
			<RichText.Content
				value={ noticeContent }
				tagName="div"
				className='uagb-notice-text'
			/>
		</div>
		)
}