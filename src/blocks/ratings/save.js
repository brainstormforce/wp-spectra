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
	
	const { highlightedStars, attributes, className } = props

	const {
		block_id,
		rTitle,
		rContent,
		mainimage,
		imgSize,
		showFeature,
		feature_count,
		featuresTitle,
		featuresAvgText,
		features,
		headingTag,
		pricetext,
		offerHighPrice,
		offerLowPrice,
		offerPrice,
		offerType,
		offerCurrency,
		selectedStars,
		offerStatus,
		availabilitytext,
		starCount,
	} = attributes

	console.log(attributes)

		let url_chk = ''
		let title = ''
		if( "undefined" !== typeof attributes.mainimage  && null !== attributes.mainimage && "" !== attributes.mainimage ){
			url_chk = attributes.mainimage.url
			title = attributes.mainimage.title
		}
		
		let url = ''
		if( '' !== url_chk ){
			let size = attributes.mainimage.sizes
			let imageSize = attributes.imgSize

			if ( "undefined" !== typeof size && "undefined" !== typeof size[imageSize] ) {
			  url = size[imageSize].url 
			}else{
			  url = url_chk 
			}
	}

	let image_icon_html = ''

	if ( mainimage && mainimage.url ) {

		image_icon_html = <img className="uagb-howto__source-image" src={url} title={title}/>

	}

	return (
		<div className={ classnames(
			className,
			"uagb-ratings__outer-wrap",
			`uagb-block-${ block_id }`
		) }
		>
			<RichText.Content
				value={ rTitle }
				className='uagb-rating-title'
				tagName={ headingTag }
			/>
			<RichText.Content
				tagName="p"
				value={ rContent }
				className='uagb-rating-desc'
			/>
			<div className="uagb-rating__source-wrap">
				{image_icon_html}
			</div>
			<div className="uagb-rating__wrap">
				{ showFeature &&
					<RichText.Content
						tagName="h4"
						value={ featuresTitle }
						className='uagb-rating-feature-text'
					/>
				}
					<div className="uagb-ratings-feature">
								
									<div className="uagb-features">
										<RichText.Content
											tagName="div"
											className='uagb-rating-feature__label'
											value={ features.features_name }
										/>
									</div>
				        
					</div>
			</div>
			<div class="uagb-ratings-wrap">
				<div className="uagb-avg-review-star">
					<RichText.Content
						tagName="h4"
						value={ featuresAvgText }
						className='uagb-avg-rating-text'
					/>
				</div>
				<div className="uagb-avg-review-star-inner-container">
				
					<div>

					</div>
				
				</div>
			</div>
			<div className="uagb-product-price">
				<RichText.Content
					tagName="h4"
					value={ pricetext }
					className='uagb-price-text'
				/>
					{offerType === "Offer" ? (
						<div className="uagb-product-price-value">
							<RichText.Content
								tagName="h4"
								value={ offerPrice }
								className='uagb-price-value-text'
							/>
						</div>
					) : (
						<div className="uagb-product-price-value">
							<RichText.Content
								tagName="h4"
								value={ offerLowPrice }
								className='uagb-price-value-text'
							/>
						</div>
						)
					}
					<div className="uagb-product-price-currency">
						<RichText.Content
							tagName="h4"
							value={ offerCurrency }
							className='uagb-price-currency-text'
						/>
					</div>
			</div>
			<div className="uagb-stock-availability">
				<RichText.Content
					tagName="h4"
					value={ availabilitytext }
					className='uagb-availability-text'
				/>
				<div className="uagb-stock-availability-value">
					<RichText.Content
						tagName="h4"
						value={ offerStatus }
						className='uagb-availability-value-text'
					/>
				</div>
			</div>
			</div>
	)
}