/**
 * BLOCK: Columns - Deprecated Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import shapes from './deprecatedShapes';

import { InnerBlocks } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: "string",
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	columns: {
		type: "number",
		default: 2
	},
	align: {
		type: "string"
	},
	vAlign: {
		type: "string"
	},
	stack: {
		type: "string",
		default: "mobile"
	},
	columnGap: {
		type: "string",
		default: "10"
	},
	topPadding: {
		type: "number",
		default: 20
	},
	bottomPadding: {
		type: "number",
		default: 20
	},
	leftPadding: {
		type: "number",
		default: 20
	},
	rightPadding: {
		type: "number",
		default: 20
	},
	topPaddingTablet: {
		type: "number"
	},
	bottomPaddingTablet: {
		type: "number"
	},
	leftPaddingTablet: {
		type: "number"
	},
	rightPaddingTablet: {
		type: "number"
	},
	topPaddingMobile: {
		type: "number"
	},
	bottomPaddingMobile: {
		type: "number"
	},
	leftPaddingMobile: {
		type: "number"
	},
	rightPaddingMobile: {
		type: "number"
	},
	topMargin: {
		type: "number",
		default: 0
	},
	bottomMargin: {
		type: "number",
		default: 0
	},
	topMarginMobile: {
		type: "number"
	},
	bottomMarginMobile: {
		type: "number"
	},
	topMarginTablet: {
		type: "number"
	},
	bottomMarginTablet: {
		type: "number"
	},
	contentWidth: {
		type: "string",
		default: "theme"
	},
	width: {
		type: "number",
		default: 900
	},
	widthType: {
		type: "string",
		default: "px"
	},
	tag: {
		type: "string",
		default: "section"
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
	backgroundAttachment: {
		type: "string",
		default: "scroll"
	},
	backgroundVideo: {
		type: "object",
	},
	backgroundColor: {
		type: "string",
	},
	gradientColor1: {
		type: "string",
	},
	gradientColor2: {
		type: "string",
	},
	gradientType: {
		type: "string",
		default: "linear"
	},
	gradientLocation1: {
		type: "number",
		default: 0
	},
	gradientLocation2: {
		type: "number",
		default: 100
	},
	gradientAngle: {
		type: "number",
		default: 0
	},
	gradientPosition: {
		type: "string",
		default: "center center"
	},
	backgroundOpacity: {
		type: "number",
	},
	backgroundVideoOpacity: {
		type: "number",
		default: 50
	},
	backgroundVideoColor: {
		type: "string",
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
		default: 1
	},
	borderRadius : {
		type: "number"
	},
	borderColor : {
		type: "string"
	},
	bottomType : {
		type: "string",
		default : "none"
	},
	bottomColor : {
		type: "string"
	},
	bottomHeight : {
		type: "number"
	},
	bottomHeightTablet : {
		type: "number"
	},
	bottomHeightMobile : {
		type: "number"
	},
	bottomWidth : {
		type: "number"
	},
	topType : {
		type: "string",
		default : "none"
	},
	topColor : {
		type: "string"
	},
	topHeight : {
		type: "number"
	},
	topHeightTablet : {
		type: "number"
	},
	topHeightMobile : {
		type: "number"
	},
	topWidth : {
		type: "number"
	},
	topFlip: {
		type: "boolean",
		default: false
	},
	bottomFlip: {
		type: "boolean",
		default: false
	},
	reverseTablet: {
		type: "boolean",
		default: false
	},
	reverseMobile: {
		type: "boolean",
		default: false
	},
	topDividerOpacity : {
		type: "number",
		default: 100
	},
	bottomDividerOpacity : {
		type: "number",
		default: 100
	},
	topContentAboveShape: {
		type: "boolean",
		default: false
	},
	bottomContentAboveShape: {
		type: "boolean",
		default: false
	},
	mobileMarginType: {
		type: "string",
		default: 'px'
	},
	tabletMarginType: {
		type: "string",
		default: 'px'
	},
	desktopMarginType: {
		type: "string",
		default: 'px'
	},
	mobilePaddingType: {
		type: "string",
		default: 'px'
	},
	tabletPaddingType: {
		type: "string",
		default: 'px'
	},
	desktopPaddingType: {
		type: "string",
		default: 'px'
	},
	boxShadowColor: {
		type: "string"
	},
	boxShadowHOffset : {
		type: "number",
		default: 0
	},
	boxShadowVOffset : {
		type: "number",
		default: 0
	},
	boxShadowBlur : {
		type: "number"
	},
	boxShadowSpread : {
		type: "number"
	},
	boxShadowPosition: {
		type: "string",
		default: "outset"
	},
	gradientValue: {
		type: "string",
		default:"",
	},

}

const deprecated = [
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;

			const {
				block_id,
				tag,
				backgroundType,
				backgroundVideo,
				contentWidth,
				align,
				columns,
				stack,
				vAlign,
				columnGap,
				topType,
				bottomType,
				bottomFlip,
				topFlip,
				reverseTablet,
				reverseMobile,
				topContentAboveShape,
				bottomContentAboveShape,
			} = props.attributes;

			const CustomTag = `${ tag }`;

			const top_divider_html = topType != 'none' && (
				<div
					className={ classnames(
						'uagb-columns__shape',
						'uagb-columns__shape-top',
						{ 'uagb-columns__shape-flip': topFlip === true },
						{
							'uagb-columns__shape-above-content':
								topContentAboveShape === true,
						}
					) }
				>
					{ shapes[ topType ] }
				</div>
			);

			const bottom_divider_html = bottomType != 'none' && (
				<div
					className={ classnames(
						'uagb-columns__shape',
						'uagb-columns__shape-bottom',
						{ 'uagb-columns__shape-flip': bottomFlip === true },
						{
							'uagb-columns__shape-above-content':
								bottomContentAboveShape === true,
						}
					) }
					data-negative="false"
				>
					{ shapes[ bottomType ] }
				</div>
			);

			const reverse_tablet = reverseTablet
				? 'uagb-columns__reverse-tablet'
				: '';

			const reverse_mobile = reverseMobile
				? 'uagb-columns__reverse-mobile'
				: '';

			return (
				<CustomTag
					className={ classnames(
						className,
						'uagb-columns__wrap',
						`uagb-columns__background-${ backgroundType }`,
						`uagb-columns__stack-${ stack }`,
						`uagb-columns__valign-${ vAlign }`,
						`uagb-columns__gap-${ columnGap }`,
						`align${ align }`,
						reverse_tablet,
						reverse_mobile
					) }
					id={ `uagb-columns-${ block_id }` }
				>
					<div className="uagb-columns__overlay"></div>
					{ top_divider_html }
					{ 'video' == backgroundType && (
						<div className="uagb-columns__video-wrap">
							{ backgroundVideo && (
								<video
									src={ backgroundVideo.url }
									autoPlay
									loop
									muted
								></video>
							) }
						</div>
					) }
					<div
						className={ classnames(
							'uagb-columns__inner-wrap',
							`uagb-columns__columns-${ columns }`
						) }
					>
						<InnerBlocks.Content />
					</div>
					{ bottom_divider_html }
				</CustomTag>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;

			const {
				block_id,
				tag,
				backgroundType,
				backgroundVideo,
				contentWidth,
				align,
				columns,
				stack,
				vAlign,
				columnGap,
				topType,
				bottomType,
				bottomFlip,
				topFlip,
				reverseTablet,
				reverseMobile,
				topContentAboveShape,
				bottomContentAboveShape,
			} = props.attributes;

			const CustomTag = `${ tag }`;

			const top_divider_html = topType != 'none' && (
				<div
					className={ classnames(
						'uagb-columns__shape',
						'uagb-columns__shape-top',
						{ 'uagb-columns__shape-flip': topFlip === true },
						{
							'uagb-columns__shape-above-content':
								topContentAboveShape === true,
						}
					) }
				>
					{ shapes[ topType ] }
				</div>
			);

			const bottom_divider_html = bottomType != 'none' && (
				<div
					className={ classnames(
						'uagb-columns__shape',
						'uagb-columns__shape-bottom',
						{ 'uagb-columns__shape-flip': bottomFlip === true },
						{
							'uagb-columns__shape-above-content':
								bottomContentAboveShape === true,
						}
					) }
					data-negative="false"
				>
					{ shapes[ bottomType ] }
				</div>
			);

			const reverse_tablet = reverseTablet
				? 'uagb-columns__reverse-tablet'
				: '';

			const reverse_mobile = reverseMobile
				? 'uagb-columns__reverse-mobile'
				: '';

			return (
				<CustomTag
					className={ classnames(
						className,
						'uagb-columns__wrap',
						`uagb-columns__background-${ backgroundType }`,
						`uagb-columns__stack-${ stack }`,
						`uagb-columns__valign-${ vAlign }`,
						`uagb-columns__gap-${ columnGap }`,
						`align${ align }`,
						reverse_tablet,
						reverse_mobile
					) }
					id={ `uagb-columns-${ block_id }` }
				>
					<div className="uagb-columns__overlay"></div>
					{ top_divider_html }
					{ 'video' == backgroundType && (
						<div className="uagb-columns__video-wrap">
							{ backgroundVideo && (
								<video autoPlay loop muted playsinline>
									<source
										src={ backgroundVideo.url }
										type="video/mp4"
									/>
								</video>
							) }
						</div>
					) }
					<div
						className={ classnames(
							'uagb-columns__inner-wrap',
							`uagb-columns__columns-${ columns }`
						) }
					>
						<InnerBlocks.Content />
					</div>
					{ bottom_divider_html }
				</CustomTag>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;

			const {
				block_id,
				tag,
				backgroundType,
				backgroundVideo,
				align,
				columns,
				stack,
				vAlign,
				columnGap,
				topType,
				bottomType,
				bottomFlip,
				topFlip,
				reverseTablet,
				reverseMobile,
				topContentAboveShape,
				bottomContentAboveShape,
			} = attributes;

			const CustomTag = `${ tag }`;

			const top_divider_html = topType != 'none' && (
				<div
					className={ classnames(
						'uagb-columns__shape',
						'uagb-columns__shape-top',
						{ 'uagb-columns__shape-flip': topFlip === true },
						{
							'uagb-columns__shape-above-content':
								topContentAboveShape === true,
						}
					) }
				>
					{ shapes[ topType ] }
				</div>
			);

			const bottom_divider_html = bottomType != 'none' && (
				<div
					className={ classnames(
						'uagb-columns__shape',
						'uagb-columns__shape-bottom',
						{ 'uagb-columns__shape-flip': bottomFlip === true },
						{
							'uagb-columns__shape-above-content':
								bottomContentAboveShape === true,
						}
					) }
					data-negative="false"
				>
					{ shapes[ bottomType ] }
				</div>
			);

			const reverse_tablet = reverseTablet
				? 'uagb-columns__reverse-tablet'
				: '';

			const reverse_mobile = reverseMobile
				? 'uagb-columns__reverse-mobile'
				: '';

			return (
				<CustomTag
					className={ classnames(
						className,
						'uagb-columns__wrap',
						`uagb-columns__background-${ backgroundType }`,
						`uagb-columns__stack-${ stack }`,
						`uagb-columns__valign-${ vAlign }`,
						`uagb-columns__gap-${ columnGap }`,
						`align${ align }`,
						reverse_tablet,
						reverse_mobile,
						`uagb-block-${ block_id }`
					) }
				>
					<div className="uagb-columns__overlay"></div>
					{ top_divider_html }
					{ 'video' == backgroundType && (
						<div className="uagb-columns__video-wrap">
							{ backgroundVideo && (
								<video autoPlay loop muted playsinline>
									<source
										src={ backgroundVideo.url }
										type="video/mp4"
									/>
								</video>
							) }
						</div>
					) }
					<div
						className={ classnames(
							'uagb-columns__inner-wrap',
							`uagb-columns__columns-${ columns }`
						) }
					>
						<InnerBlocks.Content />
					</div>
					{ bottom_divider_html }
				</CustomTag>
			);
		},
	},
];

export default deprecated;
