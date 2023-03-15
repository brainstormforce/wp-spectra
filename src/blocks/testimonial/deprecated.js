/**
 * BLOCK: Testimonial - Deprecated Block
 */

import classnames from 'classnames';
import AuthorName from './components/AuthorName';
import Company from './components/Company';
import Description from './components/Description';
import PositionClasses from './classes';
import TestimonialImage from './components/TestimonialImage';
import TestimonialImages from './components/oldImage';
import { Fragment } from '@wordpress/element';
import { getBorderAttributes } from '@Controls/generateAttributes';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

const ITEM_COUNT = 3

const testimonial_block = []

for (var i = 1; i <= ITEM_COUNT; i++) {
	var desc_text = "I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!"
	var author_text    = "John Doe "
	var company_text    = "Company"+i
	testimonial_block.push(
		{
			"description": desc_text,
			"name": author_text,
			"company": company_text,
			"image": "",
		}
	)
}

const overallBorderAttributes = getBorderAttributes( 'overall' );

const attributes = {
	test_item_count: {
		type: "number",
		default: ITEM_COUNT
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	test_block: {
		type: "array",
		default : testimonial_block,
	},
	headingAlign: {
		type: "string",
		default: "center",
	},
	descColor: {
		type: "string",
		default: "#333"
	},
	companyColor: {
		type: "string",
		default: "#888888"
	},
	authorColor: {
		type: "string",
		default: "#333"
	},
	iconimgStyle: {
		type: "string",
		default: "circle"
	},
	imagePosition:{
		type: "string",
		default: "bottom"
	},
	imageAlignment:{
		type: "string",
		default: "top"
	},

	nameFontSizeType: {
		type: "string",
		default: "px"
	},
	nameFontSize: {
		type: "number",
	},
	nameFontSizeTablet: {
		type: "number",
	},
	nameFontSizeMobile: {
		type: "number",
	},
	nameFontFamily: {
		type: "string",
		default: "Default",
	},
	nameFontWeight: {
		type: "string",
	},
	nameFontSubset: {
		type: "string",
	},
	nameLineHeightType: {
		type: "string",
		default: "em"
	},
	nameLineHeight: {
		type: "number",
	},
	nameLineHeightTablet: {
		type: "number",
	},
	nameLineHeightMobile: {
		type: "number",
	},
	nameLoadGoogleFonts: {
		type: "boolean",
		default: false
	},

	companyFontSizeType: {
		type: "string",
		default: "px"
	},
	companyFontSize: {
		type: "number",
	},
	companyFontSizeTablet: {
		type: "number",
	},
	companyFontSizeMobile: {
		type: "number",
	},
	companyFontFamily: {
		type: "string",
		default: "Default",
	},
	companyFontWeight: {
		type: "string",
	},
	companyFontSubset: {
		type: "string",
	},
	companyLineHeightType: {
		type: "string",
		default: "em"
	},
	companyLineHeight: {
		type: "number",
	},
	companyLineHeightTablet: {
		type: "number",
	},
	companyLineHeightMobile: {
		type: "number",
	},
	companyLoadGoogleFonts: {
		type: "boolean",
		default: false
	},

	descFontSizeType: {
		type: "string",
		default: "px"
	},
	descFontSize: {
		type: "number",
	},
	descFontSizeTablet: {
		type: "number",
	},
	descFontSizeMobile: {
		type: "number",
	},
	descFontFamily: {
		type: "string",
		default: "Default",
	},
	descFontWeight: {
		type: "string",
	},
	descFontSubset: {
		type: "string",
	},
	descLineHeightType: {
		type: "string",
		default: "em"
	},
	descLineHeight: {
		type: "number",
	},
	descLineHeightTablet: {
		type: "number",
	},
	descLineHeightMobile: {
		type: "number",
	},
	descLoadGoogleFonts: {
		type: "boolean",
		default: false
	},

	nameSpace: {
		type: "number",
		default : 5
	},
	descSpace: {
		type: "number",
		default : 15
	},
	block_id :{
		type : "string",
		default : "not_set"
	},
	authorSpace :{
		type: "number",
		default: 5,
	},
	imgVrPadding :{
		type: "number",
		default: 10,
	},
	imgHrPadding :{
		type: "number",
		default: 10,
	},
	imgTopPadding :{
		type: "number",
		default: 10,
	},
	imgBottomPadding :{
		type: "number",
		default: 10,
	},
	iconImage: {
		type: "object",
		default:{
			"url": "",
			"alt": "InfoBox placeholder img",
		}
	},
	imageSize:{
		type: "string",
		default: "thumbnail",
	},
	imageWidth :{
		type: "number",
		default: 60,
	},
	columns :{
		type: "number",
		default: 1,
	},
	tcolumns :{
		type: "number",
		default: 1,
	},
	mcolumns :{
		type: "number",
		default: 1,
	},
	pauseOnHover: {
		type: "boolean",
		default: true,
	},
	infiniteLoop: {
		type: "boolean",
		default: true,
	},
	transitionSpeed :{
		type: "number",
		default: 500,
	},
	autoplay: {
		type: "boolean",
		default: true,
	},
	autoplaySpeed :{
		type: "number",
		default: 2000,
	},
	arrowDots : {
		type : "string",
		default : "arrows_dots"
	},
	arrowSize :{
		type: "number",
		default: 20,
	},
	arrowBorderSize : {
		type: "number",
		default : 1,
	},
	arrowBorderRadius : {
		type: "number",
		default : 0,
	},
	arrowColor :{
		type: "string",
		default: "#aaaaaa",
	},
	rowGap: {
		type: "number",
		default : 10
	},
	columnGap: {
		type: "number",
		default : 10
	},
	contentPadding: {
		type: "number",
		default : 5
	},
	backgroundType: {
		type: "string",
	},
	backgroundImage: {
		type: "object",
	},
	backgroundPosition: {
		type: "string",
		default: "center-center"
	},
	backgroundSize: {
		type: "string",
		default: "cover"
	},
	backgroundRepeat: {
		type: "string",
		default: "no-repeat"
	},
	backgroundColor:{
		type: "string"
	},
	backgroundImageColor: {
		type: "string"
	},
	borderStyle : {
		type: "string",
		default: "none"
	},
	borderWidth : {
		type: "number",
		default: "1"
	},
	borderRadius : {
		type: "number"
	},
	borderColor : {
		type: "string"
	},
	backgroundOpacity:{
		type: "number",
		default: 50
	},
	arrowColor:{
		type: "string",
		default: "#333"
	},
	stack: {
		type: "string",
		default: "tablet"
	},
	nameSpaceType: {
		type: 'string',
		default: 'px',
	},
	descSpaceType: {
		type: 'string',
		default: 'px',
	},
	imgpaddingUnit: {
		type: 'string',
		default: 'px',
	},
	arrowBorderSizeUnit: {
		type: 'string',
		default: 'px',
	},
	arrowBorderRadiusUnit: {
		type: 'string',
		default: 'px',
	},
	arrowSizeType: {
		type: 'string',
		default: 'px',
	},
	rowGapType: {
		type: 'string',
		default: 'px',
	},
	columnGapType: {
		type: 'string',
		default: 'px',
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
	},
	...overallBorderAttributes
}

// for v2_0_14 backward compatability
const testimonialBlockV2_0_14 = [];

for ( let i = 1; i <= ITEM_COUNT; i++ ) {
	const descText =
		'I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!';
	const authorText = 'John Doe ';
	const companyText = 'Company Name';
	testimonialBlockV2_0_14.push( {
		description: descText,
		name: authorText,
		company: companyText,
		image: '',
	} );
}

const deprecated = [
	{
		attributes,
		save( props ) {
			const {
				block_id,
				className,
				columns,
				autoplaySpeed,
				autoplay,
				infiniteLoop,
				pauseOnHover,
				transitionSpeed,
				tcolumns,
				arrowSize,
				mcolumns,
				test_block,
				imagePosition,
				arrowColor,
			} = props.attributes;

			const sldierData = [];
			sldierData.push( {
				block_id,
				columns,
				autoplaySpeed,
				autoplay,
				infiniteLoop,
				pauseOnHover,
				transitionSpeed,
				tcolumns,
				arrowSize,
				mcolumns,
				arrowColor,
			} );

			return (
				<>
					<div
						className={ classnames(
							className,
							'uagb-testomonial__outer-wrap uagb-slick-carousel uagb-tm__arrow-outside'
						) }
						id={ `uagb-testimonial-${ block_id }` }
						data-slider={ JSON.stringify( sldierData ) }
					>
						<div
							className={ classnames(
								'is-carousel',
								`uagb-tm__columns-${ columns }`,
								'uagb-tm__items'
							) }
						>
							{ test_block.map( ( test, index ) => (
								<div
									className={ classnames(
										'uagb-testimonial__wrap',
										...PositionClasses( props.attributes )
									) }
									key={ 'wrap-' + index }
								>
									<div
										className="uagb-tm__content"
										key={ 'tm_content-' + index }
									>
										<div className="uagb-tm__overlay"></div>
										{ ( imagePosition == 'top' ||
											imagePosition == 'left' ) && (
											<TestimonialImage
												attributes={ props.attributes }
												index_value={ index }
											/>
										) }

										<div className="uagb-tm__text-wrap">
											{
												// Get description.
												<>
													<div
														className="uagb-testinomial-text-wrap"
														key={
															'text-wrap-' + index
														}
													>
														<Description
															attributes={
																props.attributes
															}
															setAttributes="not_set"
															props={ props }
															index_value={
																index
															}
														/>
													</div>
												</>
											}
											<div className="uagb-tm__meta">
												<div className="uagb-tm__meta-inner">
													{ imagePosition ==
														'bottom' && (
														<TestimonialImage
															attributes={
																props.attributes
															}
															index_value={
																index
															}
														/>
													) }

													{
														//title_text
														<>
															<div
																className="uagb-testimonial-details"
																key={
																	'tm_wraps-' +
																	index
																}
															>
																<AuthorName
																	attributes={
																		props.attributes
																	}
																	setAttributes="not_set"
																	props={
																		props
																	}
																	index_value={
																		index
																	}
																/>
																<Company
																	attributes={
																		props.attributes
																	}
																	setAttributes="not_set"
																	props={
																		props
																	}
																	index_value={
																		index
																	}
																/>
															</div>
														</>
													}
												</div>
											</div>
										</div>
										{ imagePosition == 'right' && (
											<TestimonialImage
												attributes={ props.attributes }
												index_value={ index }
											/>
										) }
									</div>
								</div>
							) ) }
						</div>
					</div>
				</>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				block_id,
				className,
				columns,
				autoplaySpeed,
				autoplay,
				infiniteLoop,
				pauseOnHover,
				transitionSpeed,
				tcolumns,
				arrowSize,
				mcolumns,
				test_block,
				imagePosition,
				arrowColor,
			} = props.attributes;

			return (
					<div
						className={ classnames(
							className,
							'uagb-testomonial__outer-wrap uagb-slick-carousel uagb-tm__arrow-outside'
						) }
						id={ `uagb-testimonial-${ block_id }` }
					>
						<div
							className={ classnames(
								'is-carousel',
								`uagb-tm__columns-${ columns }`,
								'uagb-tm__items'
							) }
						>
							{ test_block.map( ( test, index ) => (
								<div
									className={ classnames(
										'uagb-testimonial__wrap',
										...PositionClasses( props.attributes )
									) }
									key={ 'wrap-' + index }
								>
									<div
										className="uagb-tm__content"
										key={ 'tm_content-' + index }
									>
										<div className="uagb-tm__overlay"></div>
										{ ( imagePosition == 'top' ||
											imagePosition == 'left' ) && (
											<TestimonialImage
												attributes={ props.attributes }
												index_value={ index }
											/>
										) }

										<div className="uagb-tm__text-wrap">
											{
												// Get description.
												<>
													<div
														className="uagb-testinomial-text-wrap"
														key={
															'text-wrap-' + index
														}
													>
														<Description
															attributes={
																props.attributes
															}
															setAttributes="not_set"
															props={ props }
															index_value={
																index
															}
														/>
													</div>
												</>
											}
											<div className="uagb-tm__meta">
												<div className="uagb-tm__meta-inner">
													{ imagePosition ==
														'bottom' && (
														<TestimonialImage
															attributes={
																props.attributes
															}
															index_value={
																index
															}
														/>
													) }

													{
														//title_text
														<>
															<div
																className="uagb-testimonial-details"
																key={
																	'tm_wraps-' +
																	index
																}
															>
																<AuthorName
																	attributes={
																		props.attributes
																	}
																	setAttributes="not_set"
																	props={
																		props
																	}
																	index_value={
																		index
																	}
																/>
																<Company
																	attributes={
																		props.attributes
																	}
																	setAttributes="not_set"
																	props={
																		props
																	}
																	index_value={
																		index
																	}
																/>
															</div>
														</>
													}
												</div>
											</div>
										</div>
										{ imagePosition == 'right' && (
											<TestimonialImage
												attributes={ props.attributes }
												index_value={ index }
											/>
										) }
									</div>
								</div>
							) ) }
						</div>
					</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				block_id,
				className,
				columns,
				autoplaySpeed,
				autoplay,
				infiniteLoop,
				pauseOnHover,
				transitionSpeed,
				tcolumns,
				arrowSize,
				mcolumns,
				test_block,
				imagePosition,
				arrowColor,
			} = props.attributes;

			return (
					<div
						className={ classnames(
							className,
							'uagb-testomonial__outer-wrap uagb-slick-carousel uagb-tm__arrow-outside',
							`uagb-block-${ block_id }`
						) }
					>
						<div
							className={ classnames(
								'is-carousel',
								`uagb-tm__columns-${ columns }`,
								'uagb-tm__items'
							) }
						>
							{ test_block.map( ( test, index ) => (
								<div
									className={ classnames(
										'uagb-testimonial__wrap',
										...PositionClasses( props.attributes )
									) }
									key={ 'wrap-' + index }
								>
									<div
										className="uagb-tm__content"
										key={ 'tm_content-' + index }
									>
										<div className="uagb-tm__overlay"></div>
										{ ( imagePosition == 'top' ||
											imagePosition == 'left' ) && (
											<TestimonialImage
												attributes={ props.attributes }
												index_value={ index }
											/>
										) }

										<div className="uagb-tm__text-wrap">
											{
												// Get description.
												<>
													<div
														className="uagb-testinomial-text-wrap"
														key={
															'text-wrap-' + index
														}
													>
														<Description
															attributes={
																props.attributes
															}
															setAttributes="not_set"
															props={ props }
															index_value={
																index
															}
														/>
													</div>
												</>
											}
											<div className="uagb-tm__meta">
												<div className="uagb-tm__meta-inner">
													{ imagePosition ==
														'bottom' && (
														<TestimonialImage
															attributes={
																props.attributes
															}
															index_value={
																index
															}
														/>
													) }

													{
														//title_text
														<>
															<div
																className="uagb-testimonial-details"
																key={
																	'tm_wraps-' +
																	index
																}
															>
																<AuthorName
																	attributes={
																		props.attributes
																	}
																	setAttributes="not_set"
																	props={
																		props
																	}
																	index_value={
																		index
																	}
																/>
																<Company
																	attributes={
																		props.attributes
																	}
																	setAttributes="not_set"
																	props={
																		props
																	}
																	index_value={
																		index
																	}
																/>
															</div>
														</>
													}
												</div>
											</div>
										</div>
										{ imagePosition == 'right' && (
											<TestimonialImage
												attributes={ props.attributes }
												index_value={ index }
											/>
										) }
									</div>
								</div>
							) ) }
						</div>
					</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				block_id,
				className,
				columns,
				autoplaySpeed,
				autoplay,
				infiniteLoop,
				pauseOnHover,
				transitionSpeed,
				tcolumns,
				arrowSize,
				mcolumns,
				test_block,
				imagePosition,
				arrowColor,
			} = props.attributes;
			return (
				<div
					className={ classnames(
						className,
						'uagb-testomonial__outer-wrap uagb-slick-carousel uagb-tm__arrow-outside',
						`uagb-block-${ block_id }`
					) }
				>
					<div
						className={ classnames(
							'is-carousel',
							`uagb-tm__columns-${ columns }`,
							'uagb-tm__items'
						) }
					>
						{ test_block.map( ( test, index ) => (
							<div
								className={ classnames(
									'uagb-testimonial__wrap',
									...PositionClasses( props.attributes )
								) }
								key={ 'wrap-' + index }
							>
								<div
									className="uagb-tm__content"
									key={ 'tm_content-' + index }
								>
									<div className="uagb-tm__overlay"></div>
									{ ( imagePosition == 'top' ||
										imagePosition == 'left' ) && (
										<TestimonialImages
											attributes={ props.attributes }
											index_value={ index }
										/>
									) }

									<div className="uagb-tm__text-wrap">
										{
											// Get description.
											<>
												<div
													className="uagb-testinomial-text-wrap"
													key={ 'text-wrap-' + index }
												>
													<Description
														attributes={
															props.attributes
														}
														setAttributes="not_set"
														props={ props }
														index_value={ index }
													/>
												</div>
											</>
										}
										<div className="uagb-tm__meta">
											<div className="uagb-tm__meta-inner">
												{ imagePosition == 'bottom' && (
													<TestimonialImages
														attributes={
															props.attributes
														}
														index_value={ index }
													/>
												) }

												{
													//title_text
													<>
														<div
															className="uagb-testimonial-details"
															key={
																'tm_wraps-' +
																index
															}
														>
															<AuthorName
																attributes={
																	props.attributes
																}
																setAttributes="not_set"
																props={ props }
																index_value={
																	index
																}
															/>
															<Company
																attributes={
																	props.attributes
																}
																setAttributes="not_set"
																props={ props }
																index_value={
																	index
																}
															/>
														</div>
													</>
												}
											</div>
										</div>
									</div>
									{ imagePosition == 'right' && (
										<TestimonialImages
											attributes={ props.attributes }
											index_value={ index }
										/>
									) }
								</div>
							</div>
						) ) }
					</div>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				block_id,
				className,
				columns,
				autoplaySpeed,
				autoplay,
				infiniteLoop,
				pauseOnHover,
				transitionSpeed,
				tcolumns,
				arrowSize,
				mcolumns,
				test_block,
				imagePosition,
				arrowColor,
			} = props.attributes

			return (
				<div className={ classnames(
					className,
					"uagb-testomonial__outer-wrap uagb-slick-carousel uagb-tm__arrow-outside",
					`uagb-block-${block_id}`
				) }
				>

					<div
						className={ classnames(
							"is-carousel",
							`uagb-tm__columns-${ columns }`,
							"uagb-tm__items"
						) }
					>
						{ test_block.map( ( test, index ) =>

							<div className = { classnames(
								"uagb-testimonial__wrap",
								...PositionClasses( props.attributes ),
							) } key ={ "wrap-"+index } >
								<div className = "uagb-tm__content" key ={ "tm_content-"+index }>
									<div className = "uagb-tm__overlay"></div>
									{ (imagePosition == "top" || imagePosition == "left" ) && <TestimonialImage  attributes={props.attributes} index_value = {index} /> }

									<div className ="uagb-tm__text-wrap">
										{  // Get description.
											<Fragment>
												<div className = "uagb-testinomial-text-wrap" key={"text-wrap-"+index}>
													<Description attributes={props.attributes} setAttributes = "not_set" props = { props }  index_value = {index}/>
												</div>
											</Fragment>
										}
										<div className ="uagb-tm__meta">
											<div className ="uagb-tm__meta-inner">

												{ (imagePosition == "bottom" ) && <TestimonialImage  attributes={props.attributes}  index_value = {index} /> }

												{ //title_text
													<Fragment>
														<div className = "uagb-testimonial-details" key={"tm_wraps-"+index}>
															<AuthorName attributes={props.attributes} setAttributes = "not_set"  props = { props } index_value = {index}/>
															<Company attributes={props.attributes} setAttributes = "not_set"  props = { props }  index_value = {index}/>
														</div>
													</Fragment>
												}
											</div>
										</div>
									</div>
									{ ( imagePosition == "right" ) && <TestimonialImage  attributes={props.attributes} index_value = {index} /> }
								</div>
							</div>
						)}
					</div>
				</div>
			)
		},
	},
	{
		attributes : {
			test_item_count: {
				type: 'number',
				default: ITEM_COUNT,
			},
			classMigrate: {
				type: 'boolean',
				default: false,
			},
			test_block: {
				type: 'array',
				default: testimonialBlockV2_0_14,
			},
			headingAlign: {
				type: 'string',
				default: 'center',
				UAGCopyPaste: {
					styleType: 'main-title-align'
				},
			},
			headingAlignTablet: {
				type: 'string',
				default: 'center',
				UAGCopyPaste: {
					styleType: 'main-title-align-tablet'
				},
			},
			headingAlignMobile: {
				type: 'string',
				default: 'center',
				UAGCopyPaste: {
					styleType: 'main-title-align-mobile'
				},
			},
			descColor: {
				type: 'string',
				default: '#333',
				UAGCopyPaste: {
					styleType: 'desc-color'
				},
			},
			companyColor: {
				type: 'string',
				default: '#888888',
				UAGCopyPaste: {
					styleType: 'prefix-color'
				},
			},
			authorColor: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'author-color'
				},
				default: '#333',
			},
			iconimgStyle: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'image-style'
				},
				default: 'circle',
			},
			imagePosition: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'image-position'
				},
				default: 'bottom',
			},
			imageAlignment: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'image-align'
				},
				default: 'top',
			},

			nameFontSizeType: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'author-font-size-type'
				},
				default: 'px',
			},
			nameFontSize: {
				type: 'number',
				default: 20,
				UAGCopyPaste: {
					styleType: 'author-font-size'
				},
			},
			nameFontSizeTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-font-size-tablet'
				},
			},
			nameFontSizeMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-font-size-mobile'
				},
			},
			nameFontFamily: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'author-font-family'
				},
				default: 'Default',
			},
			nameFontWeight: {
				type: 'string',
				default: '500',
				UAGCopyPaste: {
					styleType: 'author-font-weight'
				},
			},
			nameFontStyle: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'author-font-style'
				},
			},
			nameLineHeightType: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'author-line-height-type'
				},
				default: 'em',
			},
			nameLineHeight: {
				type: 'number',
				default: 2,
				UAGCopyPaste: {
					styleType: 'author-line-height'
				},
			},
			nameLineHeightTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-line-height-tablet'
				},
			},
			nameLineHeightMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-line-height-mobile'
				},
			},
			nameLoadGoogleFonts: {
				type: 'boolean',
				default: false,
			},

			companyFontSizeType: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'prefix-font-size-type'
				},
				default: 'px',
			},
			companyFontSize: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'prefix-font-size'
				},
			},
			companyFontSizeTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'prefix-font-size-tablet'
				},
			},
			companyFontSizeMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'prefix-font-size-mobile'
				},
			},
			companyFontFamily: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'prefix-font-family'
				},
				default: 'Default',
			},
			companyFontWeight: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'prefix-font-weight'
				},
			},
			companyFontStyle: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'prefix-font-style'
				},
			},
			companyLineHeightType: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'prefix-line-height-type'
				},
				default: 'em',
			},
			companyLineHeight: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'prefix-line-height'
				},
			},
			companyLineHeightTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'prefix-line-height-tablet'
				},
			},
			companyLineHeightMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'prefix-line-height-mobile'
				},
			},
			companyLoadGoogleFonts: {
				type: 'boolean',
				default: false,
				UAGCopyPaste: {
					styleType: 'prefix-load-google-fonts'
				},
			},

			descFontSizeType: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'desc-font-size-type'
				},
				default: 'px',
			},
			descFontSize: {
				type: 'number',
				default: 18,
				UAGCopyPaste: {
					styleType: 'desc-font-size'
				},
			},
			descFontSizeTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-font-size-tablet'
				},
			},
			descFontSizeMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-font-size-mobile'
				},
			},
			descFontFamily: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'desc-font-family'
				},
				default: 'Default',
			},
			descFontWeight: {
				type: 'string',
				default: '400',
				UAGCopyPaste: {
					styleType: 'desc-font-weight'
				},
			},
			descFontStyle: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'desc-font-style'
				},
			},
			descLineHeightType: {
				type: 'string',
				default: 'em',
				UAGCopyPaste: {
					styleType: 'desc-line-height-type'
				},
			},
			descLineHeight: {
				type: 'number',
				default: 1.6,
				UAGCopyPaste: {
					styleType: 'desc-line-height'
				},
			},
			descLineHeightTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-line-height-tablet'
				},
			},
			descLineHeightMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-line-height-mobile'
				},
			},
			descLoadGoogleFonts: {
				type: 'boolean',
				default: false,
				UAGCopyPaste: {
					styleType: 'desc-load-google-fonts'
				},
			},

			nameSpace: {
				type: 'number',
				default: 5,
				UAGCopyPaste: {
					styleType: 'author-bottom-margin'
				},
			},
			nameSpaceMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-bottom-margin-mobile'
				},
			},
			nameSpaceTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-bottom-margin-tablet'
				},
			},
			descSpace: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-bottom-margin'
				},
				default: 20,
			},
			descSpaceTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-bottom-margin-tablet'
				},
			},
			descSpaceMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-bottom-margin-mobile'
				},
			},
			block_id: {
				type: 'string',
				default: 'not_set',
			},
			authorSpace: {
				type: 'number',
				default: 5,
				UAGCopyPaste: {
					styleType: 'author-bottom-margin'
				},
			},
			imgVrPadding: {
				type: 'number',
				default: 10,
				UAGCopyPaste: {
					styleType: 'image-vertical-padding'
				},
			},
			imgHrPadding: {
				type: 'number',
				default: 10,
				UAGCopyPaste: {
					styleType: 'image-horizontal-padding'
				},
			},
			imgTopPadding: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-top-padding'
				},
				default: 10,
			},
			imgBottomPadding: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-bottom-padding'
				},
				default: 10,
			},
			iconImage: {
				type: 'object',
				default: {
					url: '',
					alt: 'InfoBox placeholder img',
				},
			},
			imageSize: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'image-size'
				},
				default: 'thumbnail',
			},
			imageWidth: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-width'
				},
				default: 60,
			},
			imageWidthMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-width-mobile'
				},
			},
			imageWidthTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-width-tablet'
				},
			},
			columns: {
				type: 'number',
				default: 1,
			},
			tcolumns: {
				type: 'number',
				default: 1,
			},
			mcolumns: {
				type: 'number',
				default: 1,
			},
			pauseOnHover: {
				type: 'boolean',
				default: true,
			},
			infiniteLoop: {
				type: 'boolean',
				default: true,
			},
			transitionSpeed: {
				type: 'number',
				default: 500,
			},
			autoplay: {
				type: 'boolean',
				default: true,
			},
			autoplaySpeed: {
				type: 'number',
				default: 2000,
			},
			arrowDots: {
				type: 'string',
				default: 'arrows_dots',
			},
			arrowSize: {
				type: 'number',
				default: 20,
				UAGCopyPaste: {
					styleType: 'arrow-size'
				},
			},
			arrowBorderSize: {
				type: 'number',
				default: 0,
				UAGCopyPaste: {
					styleType: 'arrow-border-size'
				},
			},
			arrowBorderSizeUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'arrow-unit'
				},
			},
			arrowBorderRadius: {
				type: 'number',
				default: 0,
				UAGCopyPaste: {
					styleType: 'arrow-border-radius'
				},
			},
			arrowBorderRadiusUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'arrow-unit'
				},
			},
			arrowColor: {
				type: 'string',
				default: '#333',
				UAGCopyPaste: {
					styleType: 'arrow-color'
				},
			},
			rowGap: {
				type: 'number',
				default: 10,
				UAGCopyPaste: {
					styleType: 'row-gap'
				},
			},
			rowGapMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'row-gap-mobile'
				},
			},
			rowGapTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'row-gap-tablet'
				},
			},
			columnGap: {
				type: 'number',
				default: 10,
				UAGCopyPaste: {
					styleType: 'column-gap'
				},
			},
			columnGapMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'column-gap-mobile'
				},
			},
			columnGapTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'column-gap-tablet'
				},
			},
			contentPadding: {
				type: 'number',
				default: 5,
				UAGCopyPaste: {
					styleType: 'content-padding'
				},
			},
			backgroundType: {
				type: 'string',
				default: 'none',
				UAGCopyPaste: {
					styleType: 'column-bg-type'
				},
			},
			backgroundImage: {
				type: 'object',
				UAGCopyPaste: {
					styleType: 'column-bg-image'
				},
			},
			backgroundPosition: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'column-bg-position'
				},
				default: 'center-center',
			},
			backgroundSize: {
				type: 'string',
				default: 'cover',
				UAGCopyPaste: {
					styleType: 'column-bg-size'
				},
			},
			backgroundRepeat: {
				type: 'string',
				default: 'no-repeat',
				UAGCopyPaste: {
					styleType: 'column-bg-repeat'
				},
			},
			backgroundColor: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'column-bg-color'
				},
			},
			backgroundImageColor: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'column-bg-image-color'
				},
			},
			borderStyle: {
				type: 'string',
				default: 'none',
			},
			borderWidth: {
				type: 'number',
			},
			borderRadius: {
				type: 'number',
			},
			borderColor: {
				type: 'string',
			},
			backgroundOpacity: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'column-bg-opacity'
				},
			},
			stack: {
				type: 'string',
				default: 'tablet',
			},
			imageWidthType: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'image-width-type'
				},
				default: 'px',
			},
			arrowSizeType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'arrow-size-type'
				},
			},
			rowGapType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'row-gap-unit'
				},
			},
			columnGapType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'column-gap-unit'
				},
			},
			descSpaceType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'desc-bottom-margin-unit'
				},
			},
			nameSpaceType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'author-bottom-margin-type'
				},
			},
			borderHoverColor: {
				type: 'string',
			},
			overlayType: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'column-overlay-type'
				},
				default: 'color',
			},
			backgroundAttachment: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'column-bg-attachment'
				},
			},
			gradientValue: {
				type: 'string',
				default: 'linear-gradient(90deg, rgb(6, 147, 227, 0.5) 0%, rgb(155, 81, 224, 0.5) 100%)',
				UAGCopyPaste: {
					styleType: 'column-gradient-value'
				},
			},
			descTransform: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'desc-transform'
				},
			},
			descDecoration: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'desc-decoration'
				},
			},
			nameTransform: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'author-transform'
				},
			},
			nameDecoration: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'author-decoration'
				},
			},
			companyTransform: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'prefix-transform'
				},
			},
			companyDecoration: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'prefix-decoration'
				},
			},
			paddingUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'desc-padding-unit'
				},
			},
			mobilePaddingUnit: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'desc-padding-unit-mobile'
				},
				default: 'px',
			},
			tabletPaddingUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'desc-padding-unit-tablet'
				},
			},
			paddingTop: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-top-padding'
				},
			},
			paddingBottom: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-bottom-padding'
				},
			},
			paddingLeft: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-left-padding'
				},
			},
			paddingRight: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-right-padding'
				},
			},
			paddingTopTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-left-padding-tablet'
				},
			},
			paddingRightTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-left-padding-tablet'
				},
			},
			paddingBottomTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-left-padding-tablet'
				},
			},
			paddingLeftTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-left-padding-tablet'
				},
			},
			paddingTopMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-top-padding-mobile'
				},
			},
			paddingRightMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-right-padding-mobile'
				},
			},
			paddingBottomMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-bottom-padding-mobile'
				},
			},
			paddingLeftMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-left-padding-mobile'
				},
			},
			imgspacingLink: {
				type: 'boolean',
			},
			spacingLink: {
				type: 'boolean',
			},
			imgpaddingTop: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-top-padding'
				},
			},
			imgpaddingRight: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-right-padding'
				},
			},
			imgpaddingBottom: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-bottom-padding'
				},
			},
			imgpaddingLeft: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-left-padding'
				},
			},
			imgpaddingTopTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-top-padding-tablet'
				},
			},
			imgpaddingRightTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-right-padding-tablet'
				},
			},
			imgpaddingBottomTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-bottom-padding-tablet'
				},
			},
			imgpaddingLeftTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-left-padding-tablet'
				},
			},
			imgpaddingTopMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-top-padding-mobile'
				},
			},
			imgpaddingRightMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-right-padding-mobile'
				},
			},
			imgpaddingBottomMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-bottom-padding-mobile'
				},
			},
			imgpaddingLeftMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'image-left-padding-mobile'
				},
			},
			imgpaddingUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'image-padding-unit'
				},
			},
			imgmobilePaddingUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'image-padding-unit-mobile'
				},
			},
			imgtabletPaddingUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'image-padding-unit-tablet'
				},
			},
			gradientColor1: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'column-gradient-color-1'
				},
			},
			gradientColor2: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'column-gradient-color-2'
				},
			},
			gradientType: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'column-gradient-type'
				},
				default: 'linear',
			},
			gradientLocation1: {
				type: 'number',
				default: 0,
				UAGCopyPaste: {
					styleType: 'column-gradient-location-1'
				},
			},
			gradientLocation2: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'column-gradient-location-2'
				},
				default: 100,
			},
			gradientAngle: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'column-gradient-angle'
				},
				default: 0,
			},
			gradientPosition: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'column-gradient-position'
				},
				default: 'center center',
			},
			isPreview: {
				type: 'boolean',
				default: false,
			},
			equalHeight             : {
				type    : 'boolean',
				default : false,
				UAGCopyPaste: {
					styleType: 'post-equal-height'
				},
			},
			...overallBorderAttributes,
			// letter spacing
			nameLetterSpacing: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'main-title-letter-spacing'
				}
			},
			nameLetterSpacingTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'main-title-letter-spacing-tablet'
				}
			},
			nameLetterSpacingMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'main-title-letter-spacing-mobile'
				}
			},
			nameLetterSpacingType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'main-title-letter-spacing-type'
				}
			},
			descLetterSpacing: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-letter-spacing'
				}
			},
			descLetterSpacingTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-letter-spacing-tablet'
				}
			},
			descLetterSpacingMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-letter-spacing-mobile'
				}
			},
			descLetterSpacingType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'desc-letter-spacing-type'
				}
			},
			companyLetterSpacing: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-letter-spacing'
				}
			},
			companyLetterSpacingTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-letter-spacing-tablet'
				}
			},
			companyLetterSpacingMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-letter-spacing-mobile'
				}
			},
			companyLetterSpacingType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'desc-letter-spacing-type'
				}
			},
		},
		save( props ) {
			const {
				block_id,
				className,
				columns,
				tcolumns,
				mcolumns,
				test_block,
				imagePosition,
				equalHeight,
				test_item_count
			} = props.attributes;
			const equalHeightClass = equalHeight
			? 'uagb-post__carousel_equal-height'
			: '';
			const isGridLayout = test_item_count === columns ? 'uagb-post__carousel_notset' : '';
			const isGridLayoutTablet = test_item_count === tcolumns ? 'uagb-post__carousel_notset-tablet' : '';
			const isGridLayoutMobile = test_item_count === mcolumns ? 'uagb-post__carousel_notset-mobile' : '';
			return (
				<div
					className={ classnames(
						className,
						'uagb-slick-carousel uagb-tm__arrow-outside',
						`uagb-block-${ block_id }`,
						`${ equalHeightClass }`,
						isGridLayout,
						isGridLayoutTablet,
						isGridLayoutMobile
					) }
				>
					<div
						className={ classnames(
							'is-carousel',
							`uagb-tm__columns-${ getFallbackNumber( columns, 'columns', 'testimonial' ) }`,
							'uagb-tm__items',
						) }
					>
						{ test_block.map( ( test, index ) => (
							<div
								className={ classnames(
									'uagb-testimonial__wrap',
									...PositionClasses( props.attributes )
								) }
								key={ 'wrap-' + index }
							>
								<div
									className="uagb-tm__content"
									key={ 'tm_content-' + index }
								>
									<div className="uagb-tm__overlay"></div>
									{ ( imagePosition === 'top' ||
										imagePosition === 'left' ) && (
										<TestimonialImages
											attributes={ props.attributes }
											index_value={ index }
										/>
									) }

									<div className="uagb-tm__text-wrap">
										{
											// Get description.
											<>
												<Description
													attributes={ props.attributes }
													setAttributes="not_set"
													props={ props }
													index_value={ index }
												/>
											</>
										}
										<div className="uagb-tm__meta-inner">
											{ imagePosition === 'bottom' && (
												<TestimonialImages
													attributes={ props.attributes }
													index_value={ index }
												/>
											) }

											{
												//title_text
												<>
													<div
														className="uagb-testimonial-details"
														key={ 'tm_wraps-' + index }
													>
														<AuthorName
															attributes={
																props.attributes
															}
															setAttributes="not_set"
															props={ props }
															index_value={ index }
														/>
														<Company
															attributes={
																props.attributes
															}
															setAttributes="not_set"
															props={ props }
															index_value={ index }
														/>
													</div>
												</>
											}
										</div>
									</div>
									{ imagePosition === 'right' && (
										<TestimonialImages
											attributes={ props.attributes }
											index_value={ index }
										/>
									) }
								</div>
							</div>
						) ) }
					</div>
				</div>
			);
		}
	}
];

export default deprecated;
