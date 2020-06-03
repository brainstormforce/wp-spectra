/**
 * BLOCK: Inline Notice - Save Block
 */

// Import block dependencies and components.
import classnames from "classnames"

const {
	RichText,
	InnerBlocks
} = wp.blockEditor

export default function save( props ) {
	
	const { attributes, className } = props

	const {
		block_id,
		noticeTitle,
		textColor,
		titleColor,
		noticeColor,
		fontSize,
		noticeContent,
		noticeAlignment,
	} = attributes


	return (
		<div className={ classnames(
			className,
			"uagb-inline_notice__outer-wrap",
			`uagb-inline_notice__align-${ noticeAlignment }`,
			`uagb-block-${ block_id }`
		) }>
		<RichText.Content
			value={ noticeTitle }
			tagName="h4"
			style={ {
						color: titleColor,
						backgroundColor: noticeColor,
					} }
			className='uagb-notice-title'
		/>
		<RichText.Content
			value={ noticeContent }
			tagName="div"
			style={ {
						borderColor: noticeColor,
						color: textColor,
					} }
			className='uagb-notice-text'
		/>
		</div>
		)
}