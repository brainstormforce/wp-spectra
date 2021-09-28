/**
 * BLOCK: Advanced Heading - Deprecated Block
 */

import classnames from 'classnames';
import UAGB_Block_Icons from '@Controls/block-icons';
import TweetButton from './components/TweetButton';
import TweetButtonCTA from './components/TweetButtonCTA';
import Description from './components/Description';
import AuthorText from './components/AuthorText';
import AuthorImage from './components/AuthorImage';

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
										<TweetButtonCTA
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
										<TweetButtonCTA
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
	}
];

export default deprecated;
