/**
 * BLOCK: Advanced Heading - Deprecated Block
 */

import classnames from 'classnames';
import UAGB_Block_Icons from '@Controls/block-icons';
import TweetButton from './components/TweetButton';
import Description from './components/Description';
import AuthorText from './components/AuthorText';
import AuthorImage from './components/deprecatedAuthorImage';
import DeprecatedAuthorImageV2_0_14 from './components/DeprecatedAuthorImageV2_0_14';
import TweetButtonCTA from './components/TweetButtonCTA';


/**
 * BLOCK: UAGB Quote Block Attributes
 */

 export const attributes = {
	block_id :{
		type : "string"
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	skinStyle: {
		type: "string",
		default: "border"
	},
	align: {
		type: "string",
		default: "left",
	},
	descriptionText: {
		selector: "div.uagb-blockquote__content",
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	descColor: {
		type: "string",
	},
	descFontSize: {
		type: "number",
	},
	descFontSizeType: {
		type: "string",
		default: "px"
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
	descSpace :{
		type: "number",
		default: 20,
	},
	author: {
		selector: ".uagb-blockquote__author",
		default: "Author",
	},
	authorColor: {
		type: "string",
		default: "#888888"
	},
	authorFontSize: {
		type: "number",
	},
	authorFontSizeType: {
		type: "string",
		default: "px"
	},
	authorFontSizeTablet: {
		type: "number",
	},
	authorFontSizeMobile: {
		type: "number",
	},
	authorFontFamily: {
		type: "string",
		default: "Default",
	},
	authorFontWeight: {
		type: "string",
	},
	authorFontSubset: {
		type: "string",
	},
	authorLineHeightType: {
		type: "string",
		default: "em"
	},
	authorLineHeight: {
		type: "number",
	},
	authorLineHeightTablet: {
		type: "number",
	},
	authorLineHeightMobile: {
		type: "number",
	},
	authorLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	authorSpace: {
		type: "number",
		default: 10,
	},
	authorImage: {
		type: "object",
		default:{
			"url": "",
			"alt": "Author Image",
		}
	},
	authorImageSize:{
		type: "string",
		default: "thumbnail",
	},
	authorImageWidth :{
		type: "number",
		default: 40,
	},
	authorImgBorderRadius: {
		type: "number",
		default : 100
	},
	authorImgPosition: {
		type: "string",
		default: "left",
	},
	stack: {
		type: "string",
		default: "none"
	},
	enableTweet:{
		type: "boolean",
		default: true,
	},
	iconView: {
		type: "string",
		default: "icon_text"
	},
	iconSkin: {
		type: "string",
		default: "classic"
	},
	iconLabel: {
		type: "string",
		default: "Tweet"
	},
	iconShareVia: {
		type: "string",
		default: ""
	},
	iconTargetUrl: {
		type: "string",
		default: "current"
	},
	customUrl:{
		type: "string",
	},
	tweetLinkColor: {
		type: "string",
		default: "#1DA1F2"
	},
	tweetBtnColor: {
		type: "string",
		default: "#fff"
	},
	tweetBtnBgColor: {
		type: "string",
		default: "#1DA1F2"
	},
	tweetBtnHoverColor: {
		type: "string"
	},
	tweetBtnBgHoverColor: {
		type: "string",
		default: "#1DA1F2"
	},
	tweetBtnFontSize: {
		type: "number",
		default: 15
	},
	tweetBtnFontSizeType: {
		type: "string",
		default: "px"
	},
	tweetBtnFontSizeTablet: {
		type: "number",
	},
	tweetBtnFontSizeMobile: {
		type: "number",
	},
	tweetBtnFontFamily: {
		type: "string",
		default: "Default",
	},
	tweetBtnFontWeight: {
		type: "string",
	},
	tweetBtnFontSubset: {
		type: "string",
	},
	tweetBtnLineHeightType: {
		type: "string",
		default: "em"
	},
	tweetBtnLineHeight: {
		type: "number",
	},
	tweetBtnLineHeightTablet: {
		type: "number",
	},
	tweetBtnLineHeightMobile: {
		type: "number",
	},
	tweetBtnLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	tweetBtnHrPadding: {
		type: "number",
		default: 10
	},
	tweetBtnVrPadding: {
		type: "number",
		default: 10
	},
	tweetIconSpacing: {
		type: "number",
		default: 10
	},
	borderColor: {
		type: "string",
		default: "#abb8c3"
	},
	borderStyle: {
		type: "string",
		default: "solid"
	},
	borderWidth : {
		type: "number",
		default: 4,
	},
	borderGap : {
		type: "number",
		default: 15,
	},
	verticalPadding:{
		type: "number",
	},
	quoteStyle: {
		type: "string",
		default: "style_2"
	},
	quoteColor: {
		type: "string",
		default: "#abb8c3"
	},
	quoteSize: {
		type: "number",
		default: 25,
	},
	quoteSizeType: {
		type: "string",
		default: "px"
	},
	quoteSizeTablet: {
		type: "number",
	},
	quoteSizeMobile: {
		type: "number",
	},
	quotePadding: {
		type: "number",
		default: 10,
	},
	quotePaddingType: {
		type: "string",
		default: "px"
	},
	quotePaddingTablet: {
		type: "number",
	},
	quotePaddingMobile: {
		type: "number",
	},
	quoteBorderRadius: {
		type: "number",
		default: 100,
	},
	quoteBgColor: {
		type: "string",
		default: "#333"
	},
	quoteTopMargin :{
		type: "number",
	},
	quoteBottomMargin:{
		type: "number",
	},
	quoteLeftMargin :{
		type: "number",
	},
	quoteRightMargin:{
		type: "number",
		default: 20
	},
	quoteHoverColor: {
		type: "string",
	},
	quoteBgHoverColor: {
		type: "string",
	},
	borderHoverColor: {
		type: "string",
	},
	quoteBorderRadiusUnit: {
		type: 'string',
		default: '%',
	},
	paddingBtnUnit: {
		type: 'string',
		default: 'px',
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		default: 'px',
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		default: 'px',
	},
	tweetIconSpacingUnit: {
		type: 'string',
		default: 'px',
	},
	quoteUnit: {
		type: 'string',
		default: 'px',
	},
	quotemobileUnit: {
		type: 'string',
		default: 'px',
	},
	quotetabletUnit: {
		type: 'string',
		default: 'px',
	},
	descSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	borderWidthUnit: {
		type: 'string',
		default: 'px',
	},
	borderGapUnit: {
		type: 'string',
		default: 'px',
	},
	verticalPaddingUnit: {
		type: 'string',
		default: 'px',
	},
}

const deprecated = [
	{
		attributes,
		save( props ) {
			const {
				block_id,
				skinStyle,
				align,
				quoteStyle,
				iconSkin,
				authorImage,
				enableTweet,
				iconView,
				author,
				descriptionText,
				authorImgPosition,
				stack,
			} = props.attributes;

			return (
				<div
					className={ classnames(
						props.className,
						'uagb-blockquote__outer-wrap'
					) }
					id={ `uagb-blockquote-${ block_id }` }
				>
					<div
						className={ classnames(
							'uagb-blockquote__wrap',
							`uagb-blockquote__skin-${ skinStyle }`,
							skinStyle !== 'border'
								? `uagb-blockquote__align-${ align }`
								: '',
							skinStyle === 'quotation'
								? `uagb-blockquote__style-${ quoteStyle }`
								: '',
							enableTweet
								? `uagb-blockquote__with-tweet uagb-blockquote__tweet-style-${ iconSkin } uagb-blockquote__tweet-${ iconView }`
								: '',
							`uagb-blockquote__stack-img-${ stack }`
						) }
					>
						<blockquote className="uagb-blockquote">
							{ skinStyle === 'quotation' && (
								<div className="uagb-blockquote__icon-wrap">
									<span className="uagb-blockquote__icon">
										{ UAGB_Block_Icons.quote_inline_icon }
									</span>
								</div>
							) }
							<div className="uagb-blockquote__content-wrap">
								{ descriptionText !== '' && (
									<Description
										attributes={ props.attributes }
										setAttributes="not_set"
										props={ props }
									/>
								) }

								<footer>
									<div
										className={ classnames(
											'uagb-blockquote__author-wrap',
											authorImage !== ''
												? `uagb-blockquote__author-at-${ authorImgPosition }`
												: ''
										) }
									>
										{
											<AuthorImage
												attributes={ props.attributes }
											/>
										}
										{ author !== '' && (
											<AuthorText
												attributes={ props.attributes }
												setAttributes="not_set"
												props={ props }
											/>
										) }
									</div>
									{ enableTweet && (
										<TweetButton
											attributes={ props.attributes }
										/>
									) }
								</footer>
							</div>
						</blockquote>
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
				skinStyle,
				align,
				quoteStyle,
				iconSkin,
				authorImage,
				enableTweet,
				iconView,
				author,
				descriptionText,
				authorImgPosition,
				stack,
			} = props.attributes;

			return (
				<div
					className={ classnames(
						props.className,
						'uagb-blockquote__outer-wrap'
					) }
					id={ `uagb-blockquote-${ block_id }` }
				>
					<div
						className={ classnames(
							'uagb-blockquote__wrap',
							`uagb-blockquote__skin-${ skinStyle }`,
							skinStyle !== 'border'
								? `uagb-blockquote__align-${ align }`
								: '',
							skinStyle === 'quotation'
								? `uagb-blockquote__style-${ quoteStyle }`
								: '',
							enableTweet
								? `uagb-blockquote__with-tweet uagb-blockquote__tweet-style-${ iconSkin } uagb-blockquote__tweet-${ iconView }`
								: '',
							`uagb-blockquote__stack-img-${ stack }`
						) }
					>
						<blockquote className="uagb-blockquote">
							{ skinStyle === 'quotation' && (
								<div className="uagb-blockquote__icon-wrap">
									<span className="uagb-blockquote__icon">
										{ UAGB_Block_Icons.quote_inline_icon }
									</span>
								</div>
							) }
							<div className="uagb-blockquote__content-wrap">
								{ descriptionText !== '' && (
									<Description
										attributes={ props.attributes }
										setAttributes="not_set"
										props={ props }
									/>
								) }

								<footer>
									<div
										className={ classnames(
											'uagb-blockquote__author-wrap',
											authorImage !== ''
												? `uagb-blockquote__author-at-${ authorImgPosition }`
												: ''
										) }
									>
										{
											<AuthorImage
												attributes={ props.attributes }
											/>
										}
										{ author !== '' && (
											<AuthorText
												attributes={ props.attributes }
												setAttributes="not_set"
												props={ props }
											/>
										) }
									</div>
									{ enableTweet && (
										<TweetButton
											attributes={ props.attributes }
										/>
									) }
								</footer>
							</div>
						</blockquote>
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
				skinStyle,
				align,
				quoteStyle,
				iconSkin,
				authorImage,
				enableTweet,
				iconView,
				author,
				descriptionText,
				authorImgPosition,
				stack,
			} = props.attributes;

			return (
				<div
					className={ classnames(
						props.className,
						'uagb-blockquote__outer-wrap',
						`uagb-block-${ block_id }`
					) }
				>
					<div
						className={ classnames(
							'uagb-blockquote__wrap',
							`uagb-blockquote__skin-${ skinStyle }`,
							skinStyle !== 'border'
								? `uagb-blockquote__align-${ align }`
								: '',
							skinStyle === 'quotation'
								? `uagb-blockquote__style-${ quoteStyle }`
								: '',
							enableTweet
								? `uagb-blockquote__with-tweet uagb-blockquote__tweet-style-${ iconSkin } uagb-blockquote__tweet-${ iconView }`
								: '',
							`uagb-blockquote__stack-img-${ stack }`
						) }
					>
						<blockquote className="uagb-blockquote">
							{ skinStyle === 'quotation' && (
								<div className="uagb-blockquote__icon-wrap">
									<span className="uagb-blockquote__icon">
										{ UAGB_Block_Icons.quote_inline_icon }
									</span>
								</div>
							) }
							<div className="uagb-blockquote__content-wrap">
								{ descriptionText !== '' && (
									<Description
										attributes={ props.attributes }
										setAttributes="not_set"
										props={ props }
									/>
								) }
								<footer>
									<div
										className={ classnames(
											'uagb-blockquote__author-wrap',
											authorImage !== ''
												? `uagb-blockquote__author-at-${ authorImgPosition }`
												: ''
										) }
									>
										{
											<AuthorImage
												attributes={ props.attributes }
											/>
										}
										{ author !== '' && (
											<AuthorText
												attributes={ props.attributes }
												setAttributes="not_set"
												props={ props }
											/>
										) }
									</div>
									{ enableTweet && (
										<TweetButton
											attributes={ props.attributes }
										/>
									) }
								</footer>
							</div>
						</blockquote>
					</div>
				</div>
			);
		}
	},
	{
		attributes : {
			block_id: {
				type: 'string',
			},
			classMigrate: {
				type: 'boolean',
				default: false,
			},
			skinStyle: {
				type: 'string',
				default: 'border',
				UAGCopyPaste: {
					styleType: 'skin-style'
				}
			},
			align: {
				type: 'string',
				default: 'left',
				UAGCopyPaste: {
					styleType: 'overall-alignment'
				}
			},
			descriptionText: {
				selector: 'div.uagb-blockquote__content',
				default:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
			},
			descColor: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'desc-color'
				}
			},
			descFontSize: {
				type: 'number',
				default: 18,
				UAGCopyPaste: {
					styleType: 'desc-font-size'
				}
			},
			descFontSizeType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'desc-font-size-type'
				}
			},
			descFontSizeTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-font-size-tablet'
				}
			},
			descFontSizeMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-font-size-mobile'
				}
			},
			descFontFamily: {
				type: 'string',
				default: 'Default',
				UAGCopyPaste: {
					styleType: 'desc-font-family'
				}
			},
			descFontWeight: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'desc-font-weight'
				}
			},
			descFontStyle: {
				type: 'string',
				default: 'italic',
				UAGCopyPaste: {
					styleType: 'desc-font-style'
				}
			},
			descLineHeightType: {
				type: 'string',
				default: 'em',
				UAGCopyPaste: {
					styleType: 'desc-line-height-type'
				}
			},
			descLineHeight: {
				type: 'number',
				default: 1.5,
				UAGCopyPaste: {
					styleType: 'desc-line-height'
				}
			},
			descLineHeightTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-line-height-tablet'
				}
			},
			descLineHeightMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-line-height-mobile'
				}
			},
			descLoadGoogleFonts: {
				type: 'boolean',
				default: false,
				UAGCopyPaste: {
					styleType: 'desc-load-google-fonts'
				}
			},
			descSpace: {
				type: 'number',
				default: 25,
				UAGCopyPaste: {
					styleType: 'desc-bottom-margin'
				}
			},
			descSpaceTablet: {
				type: 'number',
				default: 20,
				UAGCopyPaste: {
					styleType: 'desc-bottom-margin'
				}
			},
			descSpaceMobile: {
				type: 'number',
				default: 15,
				UAGCopyPaste: {
					styleType: 'desc-bottom-margin'
				}
			},
			descSpaceUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'desc-bottom-margin-unit'
				}
			},
			author: {
				selector: '.uagb-blockquote__author',
				default: 'Author Name',
			},
			authorColor: {
				type: 'string',
				default: '#888888',
				UAGCopyPaste: {
					styleType: 'author-color'
				}
			},
			authorFontSize: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-font-size'
				}
			},
			authorFontSizeType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'author-font-size-type'
				}
			},
			authorFontSizeTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-font-size-tablet'
				}
			},
			authorFontSizeMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-font-size-mobile'
				}
			},
			authorFontFamily: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'author-font-family'
				},
				default: 'Default',
			},
			authorFontWeight: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'author-font-weight'
				}
			},
			authorFontStyle: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'author-font-style'
				}
			},
			authorLineHeightType: {
				type: 'string',
				default: 'em',
				UAGCopyPaste: {
					styleType: 'author-line-height-type'
				}
			},
			authorLineHeight: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-line-height'
				}
			},
			authorLineHeightTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-line-height-tablet'
				}
			},
			authorLineHeightMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-line-height-mobile'
				}
			},
			authorLoadGoogleFonts: {
				type: 'boolean',
				default: false,
				UAGCopyPaste: {
					styleType: 'author-load-google-fonts'
				}
			},
			authorSpace: {
				type: 'number',
				default: 15,
				UAGCopyPaste: {
					styleType: 'author-bottom-margin'
				}
			},
			authorSpaceTablet: {
				type: 'number',
				default: 15,
				UAGCopyPaste: {
					styleType: 'author-bottom-margin'
				}
			},
			authorSpaceMobile: {
				type: 'number',
				default: 15,
				UAGCopyPaste: {
					styleType: 'author-bottom-margin'
				}
			},
			authorSpaceUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'author-bottom-margin-type'
				}
			},
			authorImage: {
				type: 'object',
				default: {
					url: '',
					alt: 'Author Image',
				},
			},
			authorImageSize: {
				type: 'string',
				default: 'thumbnail',
				UAGCopyPaste: {
					styleType: 'author-image-size'
				}
			},
			authorImageWidth: {
				type: 'number',
				default: 40,
				UAGCopyPaste: {
					styleType: 'author-image-width'
				}
			},
			authorImageWidthTablet: {
				type: 'number',
				default: 35,
				UAGCopyPaste: {
					styleType: 'author-image-width'
				}
			},
			authorImageWidthMobile: {
				type: 'number',
				default: 30,
				UAGCopyPaste: {
					styleType: 'author-image-width'
				}
			},
			authorImageWidthUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'author-image-width-unit'
				}
			},
			authorImageGap: {
				type: 'number',
				default: 10,
				UAGCopyPaste: {
					styleType: 'author-image-gap'
				}
			},
			authorImageGapTablet: {
				type: 'number',
				default: 10,
				UAGCopyPaste: {
					styleType: 'author-image-gap-tablet'
				}
			},
			authorImageGapMobile: {
				type: 'number',
				default: 10,
				UAGCopyPaste: {
					styleType: 'author-image-gap-mobile'
				}
			},
			authorImageGapUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'author-image-gap-unit'
				}
			},
			authorImgBorderRadius: {
				type: 'number',
				default: 100,
				UAGCopyPaste: {
					styleType: 'author-image-border-radius'
				}
			},
			authorImgBorderRadiusTablet: {
				type: 'number',
				default: 100,
				UAGCopyPaste: {
					styleType: 'author-image-border-radius'
				}
			},
			authorImgBorderRadiusMobile: {
				type: 'number',
				default: 100,
				UAGCopyPaste: {
					styleType: 'author-image-border-radius'
				}
			},
			authorImgBorderRadiusUnit: {
				type: 'string',
				default: '%',
				UAGCopyPaste: {
					styleType: 'author-image-border-radius-unit'
				}
			},
			authorImgPosition: {
				type: 'string',
				default: 'left',
				UAGCopyPaste: {
					styleType: 'author-image-position'
				}
			},
			stack: {
				type: 'string',
				default: 'none',
			},
			enableTweet: {
				type: 'boolean',
				default: true,
			},
			iconView: {
				type: 'string',
				default: 'icon_text',
			},
			iconSkin: {
				type: 'string',
				default: 'classic',
				UAGCopyPaste: {
					styleType: 'icon-skin'
				}
			},
			iconLabel: {
				type: 'string',
				default: 'Tweet',
			},
			iconShareVia: {
				type: 'string',
				default: '',
			},
			iconTargetUrl: {
				type: 'string',
				default: 'current',
			},
			customUrl: {
				type: 'string',
			},
			tweetLinkColor: {
				type: 'string',
				default: '#1DA1F2',
				UAGCopyPaste: {
					styleType: 'btn-color'
				}
			},
			tweetBtnColor: {
				type: 'string',
				default: '#fff',
				UAGCopyPaste: {
					styleType: 'btn-color'
				}
			},
			tweetBtnBgColor: {
				type: 'string',
				default: '#1DA1F2',
				UAGCopyPaste: {
					styleType: 'btn-bg-color'
				}
			},
			tweetBtnHoverColor: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'btn-hover-color'
				}
			},
			tweetBtnBgHoverColor: {
				type: 'string',
				default: '#1DA1F2',
				UAGCopyPaste: {
					styleType: 'btn-bg-hover-color'
				}
			},
			tweetBtnFontSize: {
				type: 'number',
				default: 15,
				UAGCopyPaste: {
					styleType: 'btn-font-size'
				}
			},
			tweetBtnFontSizeType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'btn-font-size-unit'
				}
			},
			tweetBtnFontSizeTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'btn-font-size-tablet'
				}
			},
			tweetBtnFontSizeMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'btn-font-size-mobile'
				}
			},
			tweetBtnFontFamily: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'btn-font-family'
				},
				default: 'Default',
			},
			tweetBtnFontWeight: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'btn-fonr-weight'
				}
			},
			tweetBtnFontStyle: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'btn-font-style'
				}
			},
			tweetBtnLineHeightType: {
				type: 'string',
				default: 'em',
				UAGCopyPaste: {
					styleType: 'btn-line-height-type'
				}
			},
			tweetBtnLineHeight: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'btn-line-height'
				}
			},
			tweetBtnLineHeightTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'btn-line-height-tablet'
				}
			},
			tweetBtnLineHeightMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'btn-line-height-mobile'
				}
			},
			tweetBtnLoadGoogleFonts: {
				type: 'boolean',
				default: false,
				UAGCopyPaste: {
					styleType: 'btn-load-google-fonts'
				}
			},
			tweetBtnHrPadding: {
				type: 'number',
				default: 10,
				UAGCopyPaste: {
					styleType: 'btn-hr-padding'
				}
			},
			tweetBtnVrPadding: {
				type: 'number',
				default: 10,
				UAGCopyPaste: {
					styleType: 'btn-vr-padding'
				}
			},
			tweetIconSpacing: {
				type: 'number',
				default: 10,
				UAGCopyPaste: {
					styleType: 'tweet-icon-spacing'
				}
			},
			tweetIconSpacingUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'tweet-icon-spacing-unit'
				}
			},
			borderColor: {
				type: 'string',
				default: '#abb8c3',
				UAGCopyPaste: {
					styleType: 'desc-border-color'
				}
			},
			borderStyle: {
				type: 'string',
				default: 'solid',
				UAGCopyPaste: {
					styleType: 'desc-border-style'
				}
			},
			borderWidth: {
				type: 'number',
				default: 4,
				UAGCopyPaste: {
					styleType: 'desc-border-width'
				}
			},
			borderGap: {
				type: 'number',
				default: 15,
				UAGCopyPaste: {
					styleType: 'desc-border-gap'
				}
			},
			borderGapTablet: {
				type: 'number',
				default: 15,
				UAGCopyPaste: {
					styleType: 'desc-border-gap'
				}
			},
			borderGapMobile: {
				type: 'number',
				default: 15,
				UAGCopyPaste: {
					styleType: 'desc-border-gap'
				}
			},
			borderGapUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'desc-border-gap-unit'
				}
			},
			verticalPadding: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-vertical-padding'
				}
			},
			verticalPaddingTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-vertical-padding'
				}
			},
			verticalPaddingMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-vertical-padding'
				}
			},
			verticalPaddingUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'desc-vertical-padding-unit'
				}
			},
			quoteStyle: {
				type: 'string',
				default: 'style_2',
				UAGCopyPaste: {
					styleType: 'quote-style'
				}
			},
			quoteColor: {
				type: 'string',
				default: '#3d3d3d',
				UAGCopyPaste: {
					styleType: 'desc-color'
				}
			},
			quoteSize: {
				type: 'number',
				default: 25,
				UAGCopyPaste: {
					styleType: 'icon-size'
				}
			},
			quoteSizeType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'icon-size-type'
				}
			},
			quoteSizeTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'icon-size-tablet'
				}
			},
			quoteSizeMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'icon-size-mobile'
				}
			},
			quotePadding: {
				type: 'number',
				default: 10,
				UAGCopyPaste: {
					styleType: 'desc-padding'
				}
			},
			quoteUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'desc-margin-unit'
				}
			},
			quotePaddingType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'desc-padding-unit'
				}
			},
			quotePaddingTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-padding-tablet'
				}
			},
			quotePaddingMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-padding-mobile'
				}
			},
			quoteBorderRadius: {
				type: 'number',
				default: 100,
				UAGCopyPaste: {
					styleType: 'desc-border-radius'
				}
			},
			quoteBorderRadiusUnit: {
				type: 'string',
				default: '%',
				UAGCopyPaste: {
					styleType: 'desc-border-radius-unit'
				}
			},
			quoteBgColor: {
				type: 'string',
				default: '#f4f4f4',
				UAGCopyPaste: {
					styleType: 'desc-bg-color'
				}
			},
			quoteTopMargin: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-top-margin'
				}
			},
			quoteBottomMargin: {
				type: 'number',
				default: 15,
				UAGCopyPaste: {
					styleType: 'desc-bottom-margin'
				}
			},
			quoteLeftMargin: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-left-margin'
				}
			},
			quoteRightMargin: {
				type: 'number',
				default: 20,
				UAGCopyPaste: {
					styleType: 'desc-right-margin'
				}
			},
			quoteTopMarginTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-top-margin-tablet'
				}
			},
			quoteBottomMarginTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-bottom-margin-tablet'
				}
			},
			quoteLeftMarginTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-left-margin-tablet'
				}
			},
			quoteRightMarginTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-right-margin-tablet'
				}
			},
			quoteTopMarginMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-top-margin-mobile'
				}
			},
			quoteBottomMarginMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-bottom-margin-mobile'
				}
			},
			quoteLeftMarginMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-left-margin-mobile'
				}
			},
			quoteRightMarginMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'desc-right-margin-mobile'
				}
			},
			quotemobileUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'desc-margin-unit-mobile'
				}
			},
			quotetabletUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'desc-margin-unit-tablet'
				}
			},
			quoteHoverColor: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'desc-hover-color'
				}
			},
			quoteBgHoverColor: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'desc-bg-hover-color'
				}
			},
			borderHoverColor: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'desc-border-hover-color'
				}
			},
			borderWidthUnit: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'desc-border-width-unit'
				}
			},
			paddingBtnTop: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'btn-top-padding'
				}
			},
			paddingBtnBottom: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'btn-bottom-padding'
				}
			},
			paddingBtnLeft: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'btn-left-padding'
				}
			},
			paddingBtnRight: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'btn-right-padding'
				}
			},
			paddingBtnTopTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType:  'btn-top-padding-tablet'
				}
			},
			paddingBtnRightTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType:  'btn-right-padding-tablet'
				}
			},
			paddingBtnBottomTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType:  'btn-bottom-padding-tablet'
				}
			},
			paddingBtnLeftTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType:  'btn-left-padding-tablet'
				}
			},
			paddingBtnTopMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType:  'btn-top-padding-mobile'
				}
			},
			paddingBtnRightMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType:  'btn-right-padding-mobile'
				}
			},
			paddingBtnBottomMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType:  'btn-bottom-padding-mobile'
				}
			},
			paddingBtnLeftMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType:  'btn-left-padding-mobile'
				}
			},
			paddingBtnUnit: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'btn-padding-unit'
				},
				default: 'px',
			},
			mobilePaddingBtnUnit: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'btn-padding-unit-mobile'
				},
				default: 'px',
			},
			tabletPaddingBtnUnit: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'btn-padding-unit-tablet'
				},
				default: 'px',
			},
			btnspacingLink: {
				type: 'boolean',
				default: false,
			},
			spacingLink: {
				type: 'boolean',
				default: false,
			},
			descTransform:{
				type: 'string',
				UAGCopyPaste: {
					styleType: 'desc-transform'
				}
			},
			authorTransform:{
				type: 'string',
				UAGCopyPaste: {
					styleType: 'author-transform'
				}
			},
			tweetBtnTransform:{
				type: 'string',
				UAGCopyPaste: {
					styleType: 'btn-transform'
				}
			},
			descDecoration:{
				type: 'string',
				UAGCopyPaste: {
					styleType: 'desc-decoration'
				}
			},
			authorDecoration:{
				type: 'string',
				UAGCopyPaste: {
					styleType: 'author-decoration'
				}
			},
			tweetBtnDecoration:{
				type: 'string',
				UAGCopyPaste: {
					styleType: 'btn-decoration'
				}
			},
			isPreview: {
				type: 'boolean',
				default: false,
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
			authorLetterSpacing: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-letter-spacing'
				}
			},
			authorLetterSpacingTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-letter-spacing-tablet'
				}
			},
			authorLetterSpacingMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'author-letter-spacing-mobile'
				}
			},
			authorLetterSpacingType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'author-letter-spacing-type'
				}
			},
			tweetBtnLetterSpacing: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'tweetBtn-letter-spacing'
				}
			},
			tweetBtnLetterSpacingTablet: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'tweetBtn-letter-spacing-tablet'
				}
			},
			tweetBtnLetterSpacingMobile: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'tweetBtn-letter-spacing-mobile'
				}
			},
			tweetBtnLetterSpacingType: {
				type: 'string',
				default: 'px',
				UAGCopyPaste: {
					styleType: 'tweetBtn-letter-spacing-type'
				}
			},
			buttonLetterSpacing: {
				type: 'number',
				UAGCopyPaste: {
					styleType: 'button-letter-spacing'
				}
			},
		},
		save( props ) {
			const {
				block_id,
				skinStyle,
				align,
				quoteStyle,
				iconSkin,
				authorImage,
				enableTweet,
				iconView,
				author,
				descriptionText,
				authorImgPosition,
				stack,
			} = props.attributes;
			return (
					<div
						className={ classnames(
							props.className,
							`uagb-block-${ block_id }`,
							`uagb-blockquote__skin-${ skinStyle }`,
							skinStyle !== 'border'
								? `uagb-blockquote__align-${ align }`
								: '',
							skinStyle === 'quotation'
								? `uagb-blockquote__style-${ quoteStyle }`
								: '',
							enableTweet
								? `uagb-blockquote__with-tweet uagb-blockquote__tweet-style-${ iconSkin } uagb-blockquote__tweet-${ iconView }`
								: '',
							`uagb-blockquote__stack-img-${ stack }`
						) }
					>
						<blockquote className="uagb-blockquote">
							{ skinStyle === 'quotation' && (
								<span className="uagb-blockquote__icon">
										{ UAGB_Block_Icons.quote_inline_icon }
								</span>
							) }
								{ descriptionText !== '' && (
									<Description
										attributes={ props.attributes }
										setAttributes="not_set"
										props={ props }
									/>
								) }
								<footer>
									<div
										className={ classnames(
											'uagb-blockquote__author-wrap',
											authorImage !== ''
												? `uagb-blockquote__author-at-${ authorImgPosition }`
												: ''
										) }
									>
										<DeprecatedAuthorImageV2_0_14
											attributes={ props.attributes }
										/>
										{ author !== '' && (
											<AuthorText
												attributes={ props.attributes }
												setAttributes="not_set"
												props={ props }
											/>
										) }
									</div>
									{ enableTweet && (
										<TweetButtonCTA
											attributes={ props.attributes }
										/>
									) }
								</footer>
						</blockquote>
					</div>
			);
		}
	}
];

export default deprecated;
