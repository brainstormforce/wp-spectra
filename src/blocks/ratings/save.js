/**
 * BLOCK: Inline Notice - Save Block
 */

// Import block dependencies and components.
import classnames from "classnames"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
import { EmptyStar, FullStar, HalfStar } from "./icons";

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
		starSize,
		starColor,
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
					{ showFeature &&
						<div className="uagb-ratings-feature">
							{
								features.map( ( features, index ) => {
							
									return( 
										<div
											className={ classnames(
											`uagb-rating-feature-${index}`,
											"uagb-rating-feature-child__wrapper",
											) }
											key={ index }
										>
											<div className="uagb-features">
												<RichText.Content
													tagName="div"
													value={ features.features_name }
													className='uagb-rating-feature__label'
												/>
												<div className="uagb-features-star">
													<div className="uagb-star-inner-container">
														{[...Array(starCount)].map((e, i) => (
															<div>
																{i < (highlightedStars ? highlightedStars : selectedStars) ? (
																	highlightedStars ? (
																		highlightedStars - 1 === i ? (
																			selectedStars % 1 > 0 ? (
																				highlightedStars - selectedStars - 0.5 !== 0 ? (
																					<HalfStar size={starSize} fillColor={starColor} />
																				) : (
																					<FullStar size={starSize} fillColor={starColor} />
																				)
																			) : highlightedStars - selectedStars !== 0 ? (
																				<FullStar size={starSize} fillColor={starColor} />
																			) : (
																				<HalfStar size={starSize} fillColor={starColor} />
																			)
																		) : (
																			<FullStar size={starSize} fillColor={starColor} />
																		)
																	) : selectedStars - i >= 1 ? (
																		<FullStar size={starSize} fillColor={starColor} />
																	) : (
																		<HalfStar size={starSize} fillColor={starColor} />
																	)
																) : (
																	<EmptyStar size={starSize} />
																)}
															</div>
														))}
													</div>
												</div>
											</div>
										</div>		
										)
									} 
								)
							}	
						</div>
					}
			</div>
			<div class="uagb-ratings-wrap">
				<div className="uagb-avg-review-star">
					<RichText.Content
						tagName="h4"
						value={ featuresAvgText }
						className='uagb-avg-rating-text'
					/>
					<div className="uagb-avg-review-star-inner-container">
					{[...Array(starCount)].map((e, i) => (
						<div>
							{i < (highlightedStars ? highlightedStars : selectedStars) ? (
								highlightedStars ? (
									highlightedStars - 1 === i ? (
										selectedStars % 1 > 0 ? (
											highlightedStars - selectedStars - 0.5 !== 0 ? (
												<HalfStar size={starSize} fillColor={starColor} />
											) : (
												<FullStar size={starSize} fillColor={starColor} />
											)
										) : highlightedStars - selectedStars !== 0 ? (
											<FullStar size={starSize} fillColor={starColor} />
										) : (
											<HalfStar size={starSize} fillColor={starColor} />
										)
									) : (
										<FullStar size={starSize} fillColor={starColor} />
									)
								) : selectedStars - i >= 1 ? (
									<FullStar size={starSize} fillColor={starColor} />
								) : (
									<HalfStar size={starSize} fillColor={starColor} />
								)
							) : (
								<EmptyStar size={starSize} />
							)}
						</div>
					))}
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
			
			</div>
	)
}