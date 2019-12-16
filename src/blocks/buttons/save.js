/**
 * BLOCK: Buttons - Save Block
 */

import classnames from "classnames"
import times from "lodash/times"

const {
	RichText
} = wp.blockEditor

// Extend component
const { Fragment } = wp.element

export default function save( props ) {
	
	const { attributes, className } = props

	const {
		block_id,
		align,
		items,
		buttons,
		btn_count,
	} = props.attributes

	const renderButtons = ( index ) => {

		if ( "undefined" != typeof buttons[index] ) {

			return (
				<div
					className={ classnames(
						`uagb-buttons-repeater-${index}`,
						"uagb-button__wrapper"
					) }
					key={index}
				>
					<RichText.Content
						value={ buttons[index].label }
						tagName='a'
						className='uagb-button__link'
						href={ buttons[index].link }
						rel ="noopener noreferrer"
						target={ buttons[index].target }
					/>
				</div>
			)
		}
	}

	return (
		<div className={ classnames(
			className,
			"uagb-buttons__outer-wrap",
			`uagb-block-${ block_id }`
		) }
		>
			<div className="uagb-buttons__wrap">
				{ times( btn_count, n => renderButtons( n ) ) }
			</div>
		</div>
	)
}
