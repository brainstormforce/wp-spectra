/**
 * BLOCK: How-To - Save Block
 */

// Import block dependencies and components.
import classnames from "classnames"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

const {
	RichText,
	InnerBlocks
} = wp.blockEditor

export default function save( props ) {
	
	const { attributes, className } = props

	const {
		block_id,
		headingTitle,
		headingDesc,
		timeNeeded,
		time,
		estCost,
		cost,
		hideLabel,
		mainimage,
		iconPosition
	} = attributes

	console.log(attributes)

	let image_icon_html = ""

		if ( mainimage && mainimage.url ) {

			image_icon_html = <img className="uagb-howto__source-image" src={mainimage.url} />

		} 
	// const labelClass = ( hideLabel ) ? "uagb-icon-list__no-label" : ""

	return (
		<div
			className={ classnames(
				className,
				`uagb-block-${ block_id }`,					
			) }
		>
			<div className="uagb-howto__wrap">
				<RichText.Content
					value={ headingTitle }
					tagName='h1'
					className='uagb-howto-heading-text'
				/>
				<RichText.Content
					value={ headingDesc }
					tagName='p'
					className='uagb-howto-desc-text'
				/>
				<span className="uagb-howto__source-wrap">{image_icon_html}</span>
				<span className="uagb-howto__time-wrap">
				<RichText.Content
					value={ timeNeeded }
					tagName='h3'
					className='uagb-howto-timeNeeded-text'
				/>
				<RichText.Content
					value={ time }
					tagName='h3'
					className='uagb-howto-timeNeeded-value'
				/>
				</span>
				<span className="uagb-howto__cost-wrap">
				<RichText.Content
					value={ estCost }
					tagName='h3'
					className='uagb-howto-estcost-text'
				/>
				<RichText.Content
					value={ cost }
					tagName='h3'
					className='uagb-howto-estcost-value'
				/>
				</span>
			</div>
		</div>
	)
}