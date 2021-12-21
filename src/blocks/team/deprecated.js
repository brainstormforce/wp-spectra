/**
 * BLOCK: Team - Deprecated Block
 */

import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { RichText } from '@wordpress/block-editor';

const attributes = {
	block_id :{
		type : "string"
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	align: {
		type: "string",
		default: "center",
	},
	tag :{
		type: "string",
		default: "h3"
	},
	title: {
		selector: "h1,h2,h3,h4,h5,h6",
		default: "John Doe",
	},
	prefix: {
		selector: "div.uagb-team__prefix",
		default: "Designation",
	},
	description_text: {
		selector: "p",
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	titleColor: {
		type: "string",
	},
	prefixColor: {
		type: "string",
		default: "#888888"
	},
	descColor: {
		type: "string",
	},
	socialColor: {
		type: "string",
		default: "#333"
	},
	socialHoverColor: {
		type: "string"
	},
	titleFontFamily: {
		type: "string",
		default: "Default",
	},
	titleFontWeight: {
		type: "string",
	},
	titleFontSubset: {
		type: "string",
	},
	titleFontSizeType: {
		type: "string",
		default: "px"
	},
	titleLineHeightType: {
		type: "string",
		default: "em"
	},
	titleFontSize: {
		type: "number",
	},
	titleFontSizeTablet: {
		type: "number",
	},
	titleFontSizeMobile: {
		type: "number",
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightTablet: {
		type: "number",
	},
	titleLineHeightMobile: {
		type: "number",
	},
	prefixFontFamily: {
		type: "string",
		default: "Default",
	},
	prefixFontWeight: {
		type: "string",
	},
	prefixFontSubset: {
		type: "string",
	},
	prefixFontSizeType: {
		type: "string",
		default: "px"
	},
	prefixLineHeightType: {
		type: "string",
		default: "em"
	},
	prefixFontSize: {
		type: "number",
		default: 15	
	},
	prefixFontSizeTablet: {
		type: "number",
	},
	prefixFontSizeMobile: {
		type: "number",
	},
	prefixLineHeight: {
		type: "number",
	},
	prefixLineHeightTablet: {
		type: "number",
	},
	prefixLineHeightMobile: {
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
	descFontSizeType: {
		type: "string",
		default: "px"
	},
	descLineHeightType: {
		type: "string",
		default: "em"
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
	descLineHeight: {
		type: "number",
	},
	descLineHeightTablet: {
		type: "number",
	},
	descLineHeightMobile: {
		type: "number",
	},
	socialFontSize: {
		type: "number",
		default: 20
	},
	socialFontSizeType: {
		type: "string",
		default: "px"
	},
	socialFontSizeMobile: {
		type: "number",
	},
	socialFontSizeTablet: {
		type: "number",
	},
	image: {
		type: "object",
	},
	imgStyle: {
		type: "string",
		default: "normal"
	},
	imgPosition: {
		type: "string",
		default: "above"
	},
	imgAlign:{
		type : "string",
		default : "top"
	},
	imgSize:{
		type: "string",
		default: "thumbnail",
	},
	imgWidth :{
		type: "number",
		default: 120,
	},
	titleSpace: {
		type: "number",
	},
	prefixSpace: {
		type: "number",
	},
	descSpace :{
		type: "number",
		default: 10,
	},
	imgLeftMargin :{
		type: "number",
		default: 20,
	},
	imgRightMargin :{
		type: "number",
		default: 20,
	},
	imgTopMargin :{
		type: "number",
		default: 15,
	},
	imgBottomMargin :{
		type: "number",
		default: 15,
	},
	socialEnable: {
		type: "boolean",
		default: true
	},
	socialSpace :{
		type: "number",
		default: 20,
	},
	socialTarget: {
		type: "boolean",
		default: false,
	},
	twitterIcon : {
		type : "string",
		default : "fab fa-twitter"
	},
	fbIcon : {
		type : "string",
		default : "fab fa-facebook"
	},
	linkedinIcon : {
		type : "string",
		default : "fab fa-linkedin"
	},
	pinIcon : {
		type : "string",
		default : "fab fa-pinterest"
	},
	twitterLink: {
		type: "string",
		default : "#"
	},
	fbLink: {
		type: "string",
		default : "#"
	},
	linkedinLink: {
		type: "string",
		default : "#"
	},
	pinLink: {
		type: "string",
		default : "#"
	},
	stack: {
		type: "string",
		default: "tablet"
	},
	titleLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	prefixLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	descLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	imageMarginUnit: {
		type: 'string',
		default: 'px',
	},
}

function social_html( icon, link, target ) {
	const target_value = target ? '_blank' : '_self';
	return (
		<li className="uagb-team__social-icon">
			<a
				href={ link }
				target={ target_value }
				title=""
				rel="noopener noreferrer"
			>
				{ renderSVG( icon ) }
			</a>
		</li>
	);
}

function deprecated_social_html( icon, link, target ) {
	const target_value = target ? '_blank' : '_self';
	return (
		<li className="uagb-team__social-icon">
			<a
				href={ link }
				target={ target_value }
				title=""
				rel="noopener noreferrer"
			>
				<span className={ icon }></span>
			</a>
		</li>
	);
}

function deprecated_social_html_beta_v1( icon, link, target ) {
	const target_value = target ? '_blank' : '_self';
	return (
		<li className="uagb-team__social-icon">
			<a
				href={ link }
				aria-label={ icon }
				target={ target_value }
				title=""
				rel="noopener noreferrer"
			>
				{ renderSVG( icon ) }
			</a>
		</li>
	);
}

const deprecated = [
	{
		attributes,
		save( props ) {
			const {
				block_id,
				align,
				tag,
				title,
				prefix,
				description_text,
				image,
				imgSize,
				imgStyle,
				imgPosition,
				twitterIcon,
				fbIcon,
				linkedinIcon,
				pinIcon,
				twitterLink,
				fbLink,
				linkedinLink,
				pinLink,
				socialTarget,
				socialEnable,
				stack,
			} = props.attributes;

			let size = '';
			let img_url = '';

			if ( image ) {
				size = image.sizes;
				if ( image.sizes ) {
					img_url = size[ imgSize ] ? size[ imgSize ].url : image.url;
				} else {
					img_url = image.url;
				}
			}

			let image_html = '';

			if ( '' != img_url ) {
				image_html = (
					<div
						className={ classnames(
							'uagb-team__image-wrap',
							`uagb-team__image-crop-${ imgStyle }`
						) }
					>
						<img
							className=""
							src={ img_url }
							alt={ image.alt ? image.alt : '' }
						/>
					</div>
				);
			}

			return (
				<div
					className={ classnames(
						props.className,
						'uagb-team',
						'uagb-team__outer-wrap',
						`uagb-team__image-position-${ imgPosition }`,
						`uagb-team__align-${ align }`,
						`uagb-team__stack-${ stack }`
					) }
					id={ `uagb-team-${ block_id }` }
				>
					<div className="uagb-team__wrap">
						{ imgPosition == 'left' && image_html }

						<div className="uagb-team__content">
							{ imgPosition == 'above' && image_html }

							<div className="uagb-team__title-wrap">
								<RichText.Content
									tagName={ tag }
									value={ title }
									className="uagb-team__title"
								/>
								<RichText.Content
									tagName="span"
									value={ prefix }
									className="uagb-team__prefix"
								/>
							</div>

							<div className="uagb-team__desc-wrap">
								<RichText.Content
									tagName="p"
									value={ description_text }
									className="uagb-team__desc"
								/>
							</div>
							{ socialEnable && (
								<div className="uagb-team__social-icon-wrap">
									<ul className="uagb-team__social-list">
										{ '' != twitterIcon &&
											deprecated_social_html(
												twitterIcon,
												twitterLink,
												socialTarget
											) }
										{ '' != fbIcon &&
											deprecated_social_html(
												fbIcon,
												fbLink,
												socialTarget
											) }
										{ '' != linkedinIcon &&
											deprecated_social_html(
												linkedinIcon,
												linkedinLink,
												socialTarget
											) }
										{ '' != pinIcon &&
											deprecated_social_html(
												pinIcon,
												pinLink,
												socialTarget
											) }
									</ul>
								</div>
							) }
						</div>

						{ imgPosition == 'right' && image_html }
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
				align,
				tag,
				title,
				prefix,
				description_text,
				image,
				imgSize,
				imgStyle,
				imgPosition,
				twitterIcon,
				fbIcon,
				linkedinIcon,
				pinIcon,
				twitterLink,
				fbLink,
				linkedinLink,
				pinLink,
				socialTarget,
				socialEnable,
				stack,
			} = props.attributes;

			let size = '';
			let img_url = '';

			if ( image ) {
				size = image.sizes;
				if ( image.sizes ) {
					img_url = size[ imgSize ] ? size[ imgSize ].url : image.url;
				} else {
					img_url = image.url;
				}
			}

			let image_html = '';

			if ( '' != img_url ) {
				image_html = (
					<div
						className={ classnames(
							'uagb-team__image-wrap',
							`uagb-team__image-crop-${ imgStyle }`
						) }
					>
						<img
							className=""
							src={ img_url }
							alt={ image.alt ? image.alt : '' }
						/>
					</div>
				);
			}

			return (
				<div
					className={ classnames(
						props.className,
						'uagb-team',
						'uagb-team__outer-wrap',
						`uagb-team__image-position-${ imgPosition }`,
						`uagb-team__align-${ align }`,
						`uagb-team__stack-${ stack }`
					) }
					id={ `uagb-team-${ block_id }` }
				>
					<div className="uagb-team__wrap">
						{ imgPosition == 'left' && image_html }

						<div className="uagb-team__content">
							{ imgPosition == 'above' && image_html }

							<div className="uagb-team__title-wrap">
								<RichText.Content
									tagName={ tag }
									value={ title }
									className="uagb-team__title"
								/>
								<RichText.Content
									tagName="span"
									value={ prefix }
									className="uagb-team__prefix"
								/>
							</div>

							<div className="uagb-team__desc-wrap">
								<RichText.Content
									tagName="p"
									value={ description_text }
									className="uagb-team__desc"
								/>
							</div>
							{ socialEnable && (
								<div className="uagb-team__social-icon-wrap">
									<ul className="uagb-team__social-list">
										{ '' != twitterIcon &&
											social_html(
												twitterIcon,
												twitterLink,
												socialTarget
											) }
										{ '' != fbIcon &&
											social_html(
												fbIcon,
												fbLink,
												socialTarget
											) }
										{ '' != linkedinIcon &&
											social_html(
												linkedinIcon,
												linkedinLink,
												socialTarget
											) }
										{ '' != pinIcon &&
											social_html(
												pinIcon,
												pinLink,
												socialTarget
											) }
									</ul>
								</div>
							) }
						</div>

						{ imgPosition == 'right' && image_html }
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
				align,
				tag,
				title,
				prefix,
				description_text,
				image,
				imgSize,
				imgStyle,
				imgPosition,
				twitterIcon,
				fbIcon,
				linkedinIcon,
				pinIcon,
				twitterLink,
				fbLink,
				linkedinLink,
				pinLink,
				socialTarget,
				socialEnable,
				stack,
			} = props.attributes;

			let size = '';
			let img_url = '';

			if ( image ) {
				size = image.sizes;
				if ( image.sizes ) {
					img_url = size[ imgSize ] ? size[ imgSize ].url : image.url;
				} else {
					img_url = image.url;
				}
			}

			let image_html = '';

			if ( '' != img_url ) {
				image_html = (
					<div
						className={ classnames(
							'uagb-team__image-wrap',
							`uagb-team__image-crop-${ imgStyle }`
						) }
					>
						<img
							className=""
							src={ img_url }
							alt={ image.alt ? image.alt : '' }
						/>
					</div>
				);
			}

			return (
				<div
					className={ classnames(
						props.className,
						'uagb-team',
						'uagb-team__outer-wrap',
						`uagb-team__image-position-${ imgPosition }`,
						`uagb-team__align-${ align }`,
						`uagb-team__stack-${ stack }`,
						`uagb-block-${ block_id }`
					) }
				>
					<div className="uagb-team__wrap">
						{ imgPosition == 'left' && image_html }

						<div className="uagb-team__content">
							{ imgPosition == 'above' && image_html }

							<div className="uagb-team__title-wrap">
								<RichText.Content
									tagName={ tag }
									value={ title }
									className="uagb-team__title"
								/>
								<RichText.Content
									tagName="span"
									value={ prefix }
									className="uagb-team__prefix"
								/>
							</div>

							<div className="uagb-team__desc-wrap">
								<RichText.Content
									tagName="p"
									value={ description_text }
									className="uagb-team__desc"
								/>
							</div>
							{ socialEnable && (
								<div className="uagb-team__social-icon-wrap">
									<ul className="uagb-team__social-list">
										{ '' != twitterIcon &&
											social_html(
												twitterIcon,
												twitterLink,
												socialTarget
											) }
										{ '' != fbIcon &&
											social_html(
												fbIcon,
												fbLink,
												socialTarget
											) }
										{ '' != linkedinIcon &&
											social_html(
												linkedinIcon,
												linkedinLink,
												socialTarget
											) }
										{ '' != pinIcon &&
											social_html(
												pinIcon,
												pinLink,
												socialTarget
											) }
									</ul>
								</div>
							) }
						</div>

						{ imgPosition == 'right' && image_html }
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
				align,
				tag,
				title,
				prefix,
				description_text,
				image,
				imgSize,
				imgStyle,
				imgPosition,
				twitterIcon,
				fbIcon,
				linkedinIcon,
				pinIcon,
				twitterLink,
				fbLink,
				linkedinLink,
				pinLink,
				socialTarget,
				socialEnable,
				stack
			} = props.attributes
		
			let size = ""
			let img_url = ""
		
			if ( image ) {
				size = image.sizes
				if ( image.sizes ) {
					img_url = ( size[imgSize] ) ? size[imgSize].url : image.url
				} else {
					img_url = image.url
				}
			}
		
			let image_html = ""
		
			if ( "" != img_url ) {
				image_html = (
					<div
						className={ classnames(
							"uagb-team__image-wrap",
							`uagb-team__image-crop-${imgStyle}`,
						) }>
						<img
							className =""
							src = { img_url }
							alt = { ( image.alt ) ? image.alt : "" }
						/>
					</div>
				)
			}
		
			return (
				<div
					className = { classnames(
						props.className,
						"uagb-team",
						"uagb-team__outer-wrap",
						`uagb-team__image-position-${imgPosition}`,
						`uagb-team__align-${align}`,
						`uagb-team__stack-${stack}`,
						`uagb-block-${ block_id }`
					) }>
					<div className = "uagb-team__wrap">
		
						{ ( imgPosition == "left") && image_html }
		
						<div className = "uagb-team__content">
		
							{  imgPosition == "above" && image_html }
		
							<div className = "uagb-team__title-wrap">
								<RichText.Content
									tagName= { tag }
									value={ title }
									className = 'uagb-team__title'
								/>
								<RichText.Content
									tagName="span"
									value={ prefix }
									className='uagb-team__prefix'
								/>
							</div>
		
							<div className = "uagb-team__desc-wrap">
								<RichText.Content
									tagName='p'
									value={ description_text }
									className='uagb-team__desc'
								/>
							</div>
							{ socialEnable &&
								<div className="uagb-team__social-icon-wrap">
									<ul className="uagb-team__social-list">
										{ "" != twitterIcon && deprecated_social_html_beta_v1( twitterIcon, twitterLink, socialTarget ) }
										{ "" != fbIcon && deprecated_social_html_beta_v1( fbIcon, fbLink, socialTarget ) }
										{ "" != linkedinIcon && deprecated_social_html_beta_v1( linkedinIcon, linkedinLink, socialTarget ) }
										{ "" != pinIcon && deprecated_social_html_beta_v1( pinIcon, pinLink, socialTarget ) }
									</ul>
								</div>
							}
		
						</div>
		
						{ ( imgPosition == "right") && image_html }
					</div>
				</div>
			)
		}
	}
];

export default deprecated;
