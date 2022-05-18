/**
 * BLOCK: Testimonial - Deprecated Block
 */

import classnames from 'classnames';
import AuthorName from './components/AuthorName';
import Company from './components/Company';
import Description from './components/Description';
import PositionClasses from './classes';
import TestimonialImage from './components/TestimonialImage';
import TestimonialImages from './components/Image';

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
	}
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
	}
];

export default deprecated;
