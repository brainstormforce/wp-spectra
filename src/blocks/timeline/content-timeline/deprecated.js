/**
 * BLOCK: Testimonial - Deprecated Block
 */

import classnames from 'classnames';
import attributes from './attributes';
import ContentTmClasses from '.././classes';
import AlignClass from '.././align-classes';
import DayAlignClass from '.././day-align-classes';
import renderSVG from '@Controls/deprecatedRenderIcon';
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { dateI18n, __experimentalGetSettings } from '@wordpress/date';

function DeprecatedContentTmClasses( attributes ) {
	/* Arrow position */
	var arrow_align_class  = "uagb-timeline__arrow-top"+" "
	if( attributes.arrowlinAlignment == "center" ){
		arrow_align_class = "uagb-timeline__arrow-center"+" "
	}else if( attributes.arrowlinAlignment == "bottom" ){
		arrow_align_class = "uagb-timeline__arrow-bottom"+" "
	}

	/* Alignmnet */
	var align_class = "uagb-timeline__center-block "+" "
	if( attributes.timelinAlignment == "left" ){
		align_class = "uagb-timeline__left-block"+" "
	}else if( attributes.timelinAlignment == "right"){
		align_class = "uagb-timeline__right-block"+" "
	}
	align_class+= arrow_align_class+""
	align_class += "uagb-timeline__responsive-"+attributes.stack+" uagb-timeline"

	return [
		align_class
	]
}

const uagAttributes = {
	content_class: {
		type : "string",
	},
	tm_content: {
		type: "array",
		default : item,
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	childMigrate: {
		type: "boolean",
		default: false
	},
	dateFormat: {
		type: "string",
		default: "F j, Y"
	},
	align : {
		type : "string",
		default : "center",
	},
	headingColor : {
		type : "string",
	},
	subHeadingColor : {
		type : "string",
	},
	separatorBg : {
		type : "string",
		default : "#eee",
	},
	backgroundColor : {
		type : "string",
		default : "#eee",
	},
	separatorColor : {
		type : "string",
		default : "#eee",
	},
	separatorFillColor : {
		type : "string",
		default : "#61ce70",
	},
	separatorBorder : {
		type : "string",
		default : "#eee",
	},
	borderFocus : {
		type : "string",
		default : "#5cb85c",
	},
	headingTag : {
		type : "string",
		default : "h4",
	},
	horizontalSpace : {
		type : "number",
		default : 10,
	},
	verticalSpace : {
		type : "number",
		default : 15,
	},
	headFontSize : {
		type : "number",
	},
	headFontSizeType: {
		type: "string",
		default: "px"
	},
	headFontSizeTablet: {
		type: "number",
	},
	headFontSizeMobile: {
		type: "number",
	},
	headFontFamily: {
		type: "string",
		default: "Default",
	},
	headFontWeight: {
		type: "string",
	},
	headFontSubset: {
		type: "string",
	},
	headLineHeightType: {
		type: "string",
		default: "em"
	},
	headLineHeight: {
		type: "number",
	},
	headLineHeightTablet: {
		type: "number",
	},
	headLineHeightMobile: {
		type: "number",
	},
	headLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	timelinAlignment : {
		type : "string",
		default : "center",
	},
	arrowlinAlignment : {
		type : "string",
		default : "center",
	},
	subHeadFontSizeType: {
		type: "string",
		default: "px"
	},
	subHeadFontSize: {
		type: "number",
	},
	subHeadFontSizeTablet: {
		type: "number",
	},
	subHeadFontSizeMobile: {
		type: "number",
	},
	subHeadFontFamily: {
		type: "string",
		default: "Default",
	},
	subHeadFontWeight: {
		type: "string",
	},
	subHeadFontSubset: {
		type: "string",
	},
	subHeadLineHeightType: {
		type: "string",
		default: "em",
	},
	subHeadLineHeight: {
		type: "number",
	},
	subHeadLineHeightTablet: {
		type: "number",
	},
	subHeadLineHeightMobile: {
		type: "number",
	},
	subHeadLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	headSpace : {
		type : "number",
		default : 5,
	},
	separatorwidth : {
		type : "number",
		default : 3,
	},
	borderwidth : {
		type : "number",
		default : 0,
	},
	iconColor : {
		type : "string",
		default : "#333",
	},
	iconFocus : {
		type : "string",
		default : "#fff",
	},
	iconBgFocus : {
		type : "string",
		default : "#61ce70",
	},
	dateColor : {
		type : "string",
		default : "#333",
	},
	dateFontsizeType: {
		type: "string",
		default: "px"
	},
	dateFontsize: {
		type: "number",
	},
	dateFontsizeTablet: {
		type: "number",
	},
	dateFontsizeMobile: {
		type: "number",
	},
	dateFontFamily: {
		type: "string",
		default: "Default",
	},
	dateFontWeight: {
		type: "string",
	},
	dateFontSubset: {
		type: "string",
	},
	dateLineHeightType: {
		type: "string",
		default: "em"
	},
	dateLineHeight: {
		type: "number",
	},
	dateLineHeightTablet: {
		type: "number",
	},
	dateLineHeightMobile: {
		type: "number",
	},
	dateLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	connectorBgsize : {
		type : "number",
		default : 35,
	},
	subHeadSpace : {
		type : "number",
		default : 5,
	},
	dateBottomspace : {
		type : "number",
		default : 5,
	},
	block_id  : {
		type : "string",
		default : "0",
	},
	timelineItem :{
		type : "number",
		default : ITEM_COUNT,
	},
	tm_client_id  : {
		type : "string",
		default : "not_set",
	},
	borderRadius : {
		type : "number",
		default : 2,
	},
	bgPadding : {
		type : "number",
		default : 20,
	},
	iconSize : {
		type : "number",
		default : 12,
	},
	icon : {
		type : "string",
		default : "fab fa fa-calendar-alt"
	},
	t_date : {
		type: "array",
		default: date_arr,
	},
	displayPostDate:{
		type: "boolean",
		default: true,
	},
	stack: {
		type: "string",
		default: "tablet"
	},
}

const deprecated = [
	{
		attributes,
		save( props ) {
			const {
				block_id,
				headingTag,
				timelinAlignment,
				displayPostDate,
				icon,
				tm_content,
				t_date,
				stack,
				className,
			} = props.attributes;

			const hasItems = Array.isArray( tm_content ) && tm_content.length;

			const dateFormat = __experimentalGetSettings().formats.date;

			let content_align_class = AlignClass( props.attributes, 0 ); // Get classname for layout alignment
			let day_align_class = DayAlignClass( props.attributes, 0 ); //

			const data_copy = [ ...tm_content ];
			let display_inner_date = false;

			return (
				<div
					className={ classnames(
						className,
						'uagb-timeline__outer-wrap'
					) }
					id={ `uagb-ctm-${ block_id }` }
				>
					<div
						className={ classnames(
							'uagb-timeline__content-wrap',
							...ContentTmClasses( props.attributes )
						) }
					>
						<div className="uagb-timeline-wrapper">
							<div className="uagb-timeline__main">
								<div className="uagb-timeline__days">
									{ tm_content.map( ( post, index ) => {
										const second_index = 'uagb-' + index;
										if ( timelinAlignment == 'center' ) {
											display_inner_date = true;
											content_align_class = AlignClass(
												props.attributes,
												index
											); // Get classname for layout alignment
											day_align_class = DayAlignClass(
												props.attributes,
												index
											); //
										}
										const Tag = headingTag;
										const icon_class =
											'uagb-timeline__icon-new out-view-uagb-timeline__icon ' +
											icon;

										return (
											<article
												className="uagb-timeline__field uagb-timeline__animate-border"
												key={ index }
											>
												<div
													className={ classnames(
														...content_align_class
													) }
												>
													<div className="uagb-timeline__marker out-view-uagb-timeline__icon">
														<span
															className={
																icon_class
															}
														></span>
													</div>

													<div
														className={ classnames(
															...day_align_class
														) }
													>
														<div className="uagb-events-new">
															<div className="uagb-timeline__events-inner-new">
																<div className="uagb-timeline__date-hide uagb-timeline__date-inner">
																	{ displayPostDate &&
																		t_date[
																			index
																		]
																			.title && (
																			<div
																				className={
																					'uagb-timeline__inner-date-new'
																				}
																			>
																				{ dateI18n(
																					dateFormat,
																					t_date[
																						index
																					]
																						.title
																				) }
																			</div>
																		) }
																</div>

																<div className="uagb-timeline-content">
																	<div className="uagb-timeline__heading-text">
																		<RichText.Content
																			tagName={
																				headingTag
																			}
																			value={
																				post.time_heading
																			}
																			className="uagb-timeline__heading"
																		/>
																	</div>

																	<RichText.Content
																		tagName="p"
																		value={
																			post.time_desc
																		}
																		className="uagb-timeline-desc-content"
																	/>

																	<div className="uagb-timeline__arrow"></div>
																</div>
															</div>
														</div>
													</div>

													{ display_inner_date && (
														<div className="uagb-timeline__date-new">
															{ displayPostDate &&
																t_date[ index ]
																	.title && (
																	<div
																		className={
																			'uagb-timeline__date-new'
																		}
																	>
																		{ dateI18n(
																			dateFormat,
																			t_date[
																				index
																			]
																				.title
																		) }
																	</div>
																) }
														</div>
													) }
												</div>
											</article>
										);
									} ) }
								</div>
								<div className="uagb-timeline__line">
									<div className="uagb-timeline__line__inner"></div>
								</div>
							</div>
						</div>
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
				headingTag,
				timelinAlignment,
				displayPostDate,
				icon,
				tm_content,
				t_date,
				stack,
				className,
			} = props.attributes;

			const hasItems = Array.isArray( tm_content ) && tm_content.length;

			const dateFormat = __experimentalGetSettings().formats.date;

			let content_align_class = AlignClass( props.attributes, 0 ); // Get classname for layout alignment
			let day_align_class = DayAlignClass( props.attributes, 0 ); //

			const data_copy = [ ...tm_content ];
			let display_inner_date = false;

			return (
				<div
					className={ classnames(
						className,
						'uagb-timeline__outer-wrap'
					) }
					id={ `uagb-ctm-${ block_id }` }
				>
					<div
						className={ classnames(
							'uagb-timeline__content-wrap',
							...ContentTmClasses( props.attributes )
						) }
					>
						<div className="uagb-timeline-wrapper">
							<div className="uagb-timeline__main">
								<div className="uagb-timeline__days">
									{ tm_content.map( ( post, index ) => {
										const second_index = 'uagb-' + index;
										if ( timelinAlignment == 'center' ) {
											display_inner_date = true;
											content_align_class = AlignClass(
												props.attributes,
												index
											); // Get classname for layout alignment
											day_align_class = DayAlignClass(
												props.attributes,
												index
											); //
										}
										const Tag = headingTag;
										const icon_class =
											'uagb-timeline__icon-new out-view-uagb-timeline__icon ' +
											icon;
										let post_date = dateI18n(
											dateFormat,
											t_date[ index ].title
										);
										if ( post_date === 'Invalid date' ) {
											post_date = t_date[ index ].title;
										}
										return (
											<article
												className="uagb-timeline__field uagb-timeline__field-wrap"
												key={ index }
											>
												<div
													className={ classnames(
														...content_align_class
													) }
												>
													<div className="uagb-timeline__marker out-view-uagb-timeline__icon">
														<span
															className={
																icon_class
															}
														></span>
													</div>

													<div
														className={ classnames(
															...day_align_class
														) }
													>
														<div className="uagb-events-new">
															<div className="uagb-timeline__events-inner-new">
																<div className="uagb-timeline__date-hide uagb-timeline__date-inner">
																	{ displayPostDate &&
																		t_date[
																			index
																		]
																			.title && (
																			<div
																				className={
																					'uagb-timeline__inner-date-new'
																				}
																			>
																				{
																					post_date
																				}
																			</div>
																		) }
																</div>

																<div className="uagb-timeline-content">
																	<div className="uagb-timeline__heading-text">
																		<RichText.Content
																			tagName={
																				headingTag
																			}
																			value={
																				post.time_heading
																			}
																			className="uagb-timeline__heading"
																		/>
																	</div>

																	<RichText.Content
																		tagName="p"
																		value={
																			post.time_desc
																		}
																		className="uagb-timeline-desc-content"
																	/>

																	<div className="uagb-timeline__arrow"></div>
																</div>
															</div>
														</div>
													</div>

													{ display_inner_date && (
														<div className="uagb-timeline__date-new">
															{ displayPostDate &&
																t_date[ index ]
																	.title && (
																	<div
																		className={
																			'uagb-timeline__date-new'
																		}
																	>
																		{
																			post_date
																		}
																	</div>
																) }
														</div>
													) }
												</div>
											</article>
										);
									} ) }
								</div>
								<div className="uagb-timeline__line">
									<div className="uagb-timeline__line__inner"></div>
								</div>
							</div>
						</div>
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
				headingTag,
				timelinAlignment,
				displayPostDate,
				icon,
				tm_content,
				t_date,
				date_icon,
				stack,
				timelineItem,
			} = props.attributes;

			const hasItems = Array.isArray( tm_content ) && tm_content.length;

			const dateFormat = __experimentalGetSettings().formats.date;

			let content_align_class = AlignClass( props.attributes, 0 ); // Get classname for layout alignment
			let day_align_class = DayAlignClass( props.attributes, 0 ); //

			let display_inner_date = false;

			return (
				<div
					className={ classnames(
						props.className,
						'uagb-timeline__outer-wrap'
					) }
					id={ `uagb-ctm-${ block_id }` }
				>
					<div
						className={ classnames(
							'uagb-timeline__content-wrap',
							...ContentTmClasses( props.attributes )
						) }
					>
						<div className="uagb-timeline-wrapper">
							<div className="uagb-timeline__main">
								<div className="uagb-timeline__days">
									{ tm_content.map( ( post, index ) => {
										if ( timelineItem <= index ) {
											return;
										}

										const second_index = 'uagb-' + index;
										if ( timelinAlignment == 'center' ) {
											display_inner_date = true;
											content_align_class = AlignClass(
												props.attributes,
												index
											); // Get classname for layout alignment
											day_align_class = DayAlignClass(
												props.attributes,
												index
											); //
										}
										const Tag = headingTag;
										const icon_class =
											'uagb-timeline__icon-new out-view-uagb-timeline__icon ';
										let post_date = dateI18n(
											dateFormat,
											t_date[ index ].title
										);
										if ( post_date === 'Invalid date' ) {
											post_date = t_date[ index ].title;
										}
										return (
											<article
												className="uagb-timeline__field uagb-timeline__field-wrap"
												key={ index }
											>
												<div
													className={ classnames(
														...content_align_class
													) }
												>
													<div className="uagb-timeline__marker out-view-uagb-timeline__icon">
														<span
															className={
																icon_class
															}
														>
															{ renderSVG(
																icon
															) }
														</span>
													</div>

													<div
														className={ classnames(
															...day_align_class
														) }
													>
														<div className="uagb-events-new">
															<div className="uagb-timeline__events-inner-new">
																<div className="uagb-timeline__date-hide uagb-timeline__date-inner">
																	{ displayPostDate &&
																		t_date[
																			index
																		]
																			.title && (
																			<div
																				className={
																					'uagb-timeline__inner-date-new'
																				}
																			>
																				{
																					post_date
																				}
																			</div>
																		) }
																</div>

																<div className="uagb-timeline-content">
																	<div className="uagb-timeline__heading-text">
																		<RichText.Content
																			tagName={
																				headingTag
																			}
																			value={
																				post.time_heading
																			}
																			className="uagb-timeline__heading"
																		/>
																	</div>

																	<RichText.Content
																		tagName="p"
																		value={
																			post.time_desc
																		}
																		className="uagb-timeline-desc-content"
																	/>

																	<div className="uagb-timeline__arrow"></div>
																</div>
															</div>
														</div>
													</div>

													{ display_inner_date && (
														<div className="uagb-timeline__date-new">
															{ displayPostDate &&
																t_date[ index ]
																	.title && (
																	<div
																		className={
																			'uagb-timeline__date-new'
																		}
																	>
																		{
																			post_date
																		}
																	</div>
																) }
														</div>
													) }
												</div>
											</article>
										);
									} ) }
								</div>
								<div className="uagb-timeline__line">
									<div className="uagb-timeline__line__inner"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		},
	},
	{
		//deprecated
		attributes,
		save( props ) {
			const {
				block_id,
				headingTag,
				timelinAlignment,
				displayPostDate,
				icon,
				tm_content,
				t_date,
				date_icon,
				stack,
				timelineItem,
				dateFormat,
			} = props.attributes;

			const hasItems = Array.isArray( tm_content ) && tm_content.length;

			let content_align_class = AlignClass( props.attributes, 0 ); // Get classname for layout alignment
			let day_align_class = DayAlignClass( props.attributes, 0 ); //

			let display_inner_date = false;

			return (
				<div
					className={ classnames(
						props.className,
						'uagb-timeline__outer-wrap',
						`uagb-block-${ block_id }`
					) }
				>
					<div
						className={ classnames(
							'uagb-timeline__content-wrap',
							...ContentTmClasses( props.attributes )
						) }
					>
						<div className="uagb-timeline-wrapper">
							<div className="uagb-timeline__main">
								<div className="uagb-timeline__days">
									{ tm_content.map( ( post, index ) => {
										if ( timelineItem <= index ) {
											return;
										}

										const second_index = 'uagb-' + index;
										if ( timelinAlignment == 'center' ) {
											display_inner_date = true;
											content_align_class = AlignClass(
												props.attributes,
												index
											); // Get classname for layout alignment
											day_align_class = DayAlignClass(
												props.attributes,
												index
											); //
										}
										const Tag = headingTag;
										const icon_class =
											'uagb-timeline__icon-new out-view-uagb-timeline__icon ';
										let post_date = t_date[ index ].title;
										if ( 'custom' != dateFormat ) {
											post_date = dateI18n(
												dateFormat,
												t_date[ index ].title
											);
											if (
												post_date === 'Invalid date'
											) {
												post_date =
													t_date[ index ].title;
											}
										}
										return (
											<article
												className="uagb-timeline__field uagb-timeline__field-wrap"
												key={ index }
											>
												<div
													className={ classnames(
														...content_align_class
													) }
												>
													<div className="uagb-timeline__marker out-view-uagb-timeline__icon">
														<span
															className={
																icon_class
															}
														>
															{ renderSVG(
																icon
															) }
														</span>
													</div>

													<div
														className={ classnames(
															...day_align_class
														) }
													>
														<div className="uagb-events-new">
															<div className="uagb-timeline__events-inner-new">
																<div className="uagb-timeline__date-hide uagb-timeline__date-inner">
																	{ displayPostDate &&
																		t_date[
																			index
																		]
																			.title && (
																			<div
																				className={
																					'uagb-timeline__inner-date-new'
																				}
																			>
																				{
																					post_date
																				}
																			</div>
																		) }
																</div>

																<div className="uagb-timeline-content">
																	<div className="uagb-timeline__heading-text">
																		<RichText.Content
																			tagName={
																				headingTag
																			}
																			value={
																				post.time_heading
																			}
																			className="uagb-timeline__heading"
																		/>
																	</div>

																	<RichText.Content
																		tagName="p"
																		value={
																			post.time_desc
																		}
																		className="uagb-timeline-desc-content"
																	/>

																	<div className="uagb-timeline__arrow"></div>
																</div>
															</div>
														</div>
													</div>

													{ display_inner_date && (
														<div className="uagb-timeline__date-new">
															{ displayPostDate &&
																t_date[ index ]
																	.title && (
																	<div
																		className={
																			'uagb-timeline__date-new'
																		}
																	>
																		{
																			post_date
																		}
																	</div>
																) }
														</div>
													) }
												</div>
											</article>
										);
									} ) }
								</div>
								<div className="uagb-timeline__line">
									<div className="uagb-timeline__line__inner"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		},
	},
	{
		uagAttributes,
		save( props ) {
			const { block_id } = props.attributes;

			return (
				<div
					className={ classnames(
						props.className,
						'uagb-timeline__outer-wrap',
						`uagb-block-${ block_id }`
					) }
				>
					<div
						className={ classnames(
							'uagb-timeline__content-wrap',
							...DeprecatedContentTmClasses( props.attributes )
						) }
					>
						<div className="uagb-timeline-wrapper">
							<div className="uagb-timeline__main">
								<div className="uagb-timeline__days">
									<InnerBlocks.Content />
								</div>
								<div className="uagb-timeline__line">
									<div className="uagb-timeline__line__inner"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		},
	},
];

export default deprecated;
