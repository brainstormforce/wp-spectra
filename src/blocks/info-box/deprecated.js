/**
 * BLOCK: Columns - Deprecated Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import Prefix from './components/Prefix';
import Title from './components/Title';
import InfoBoxDesc from './components/InfoBoxDesc';
import InfoBoxIcon from './components/InfoBoxIcon';
import Icon from './components/Icon';
import InfoBoxPositionClasses from './classes';
import InfoBoxSeparator from './components/InfoBoxSeparator';
import InfoBoxCta from './components/InfoBoxCta';
import CallToAction from './components/CallToAction';
import InfoBoxIconImage from './components/InfoBoxIconImage';
import IconImage from './components/IconImage';

const attributes = {
	inheritFromTheme: {
		type: "boolean",
		default: false
	},
	prefixTitle: {
		source: "html",
		selector: "span.uagb-ifb-title-prefix",
		default: "Prefix",
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	infoBoxTitle: {
		source: "html",
		selector: "h1,h2,h3,h4,h5,h6",
		default: "Info Box",
	},
	headingDesc: {
		source: "html",
		selector: "p",
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	headingAlign: {
		type: "string",
		default: "center",
	},
	headingColor: {
		type: "string",
	},
	subHeadingColor: {
		type: "string",
	},
	prefixColor: {
		type: "string",
	},
	icon : {
		type : "string",
		default : "fa fa-star"
	},
	iconimgPosition: {
		type: "string",
		default: "above-title"
	},
	iconSize : {
		type: "number",
		default: 40,
	},
	iconHover : {
		type : "string",
		default : ""
	},
	iconSizeType: {
		type: 'String',
		default: 'px',
	},
	prefixFontSizeType: {
		type: 'string',
		default: 'px',
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
	},
	subHeadFontSizeType: {
		type: 'string',
		default: 'px',
	},
	ctaIconSpaceType: {
		type: 'string',
		default: 'px',
	},
	thicknessUnit: {
		type: 'string',
		default: 'px',
	},
	ctaFontSizeType: {
		type: 'string',
		default: 'px',
	},
	iconMarginUnit: {
		type: 'string',
		default: 'px',
	},
	iconMobilePaddingUnit: {
		type: 'string',
		default: 'px',
	},
	iconTabletPaddingUnit: {
		type: 'string',
		default: 'px',
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
	prefixSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	headSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	seperatorSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	subHeadSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	imageWidthUnit: {
		type: 'string',
		default: 'px',
	},
	iconimgBorderRadiusUnit: {
		type: 'string',
		default: 'px',
	},
	iconBgHover : {
		type : "string",
		default : ""
	},
	iconColor : {
		type : "string",
		default : "#333",
	},
	prefixTag :{
		type: "string",
		default: "h3"
	},
	prefixFontSize: {
		type: "number",
	},
	prefixFontSizeType: {
		type: "string",
		default: "px"
	},
	prefixFontSizeTablet: {
		type: "number",
	},
	prefixFontSizeMobile: {
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
	prefixLineHeightType: {
		type: "string",
		default: "em"
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
	prefixLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	headingTag: {
		type: "string",
		default: "h3"
	},
	headFontSize: {
		type: "number",
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
	subHeadFontSize: {
		type: "number",
	},
	subHeadFontSizeType: {
		type: "string",
		default: "px"
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
		default: "em"
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
	headSpace: {
		type: "number",
		default : 10,
	},
	subHeadSpace: {
		type: "number",
		default : 10,
	},
	seperatorSpace:{
		type: "number",
		default : 10,
	},
	iconimgBorderRadius: {
		type: "number",
		default : 0
	},
	source_type :{
		type: "string",
		default: "icon",
	},
	block_id :{
		type : "string",
		default : "not_set"
	},
	sourceAlign:{
		type : "string",
		default : "top"
	},
	ctaTarget: {
		type: "boolean",
		default: false,
	},
	ctaIcon : {
		type : "string",
		default : ""
	},
	ctaIconPosition: {
		type: "string",
		default: "after"
	},
	ctaIconSpace :{
		type: "number",
		default : 5
	},
	seperatorPosition: {
		type: "string",
		default: "after_title",
	},
	seperatorStyle: {
		type: "string",
		default: "solid",
	},
	seperatorColor: {
		type: "string",
		default: "#333",
	},
	seperatorWidth :{
		type: "number",
		default : 30
	},
	separatorWidthType: {
		type: "string",
		default: "%"
	},
	seperatorThickness :{
		type: "number",
		default : 2
	},
	ctaType: {
		type: "string",
		default: "none",
	},
	ctaText: {
		type: "html",
		default: "Read More",
	},
	ctaLink: {
		type: "string",
		default: "#",
	},
	ctaLinkColor :{
		type: "string",
		default: "#333",
	},
	ctaFontSize :{
		type: "number",
	},
	ctaFontSizeType :{
		type: "string",
		default: "px"
	},
	ctaFontSizeMobile :{
		type: "number",
	},
	ctaFontSizeTablet :{
		type: "number",
	},
	ctaFontFamily: {
		type: "string",
		default: "Default",
	},
	ctaFontWeight: {
		type: "string",
	},
	ctaFontSubset: {
		type: "string",
	},
	ctaLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	ctaBtnLinkColor :{
		type: "string",
		default: "#333",
	},
	ctaLinkHoverColor:{
		type: "string",
		default: "",
	},
	ctaBgColor :{
		type: "string",
		default:"transparent",
	},
	ctaBgHoverColor :{
		type: "string",
		default:"transparent",
	},
	ctaBorderColor: {
		type: "string",
		default: "#333",
	},
	ctaBorderhoverColor:{
		type: "string",
		default: "",
	},
	ctaBorderStyle: {
		type: "string",
		default: "solid",
	},
	ctaBtnVertPadding :{
		type: "number",
		default: 10,
	},
	ctaBtnHrPadding :{
		type: "number",
		default: 14,
	},
	ctaBorderWidth :{
		type: "number",
		default: 1,
	},
	ctaBorderRadius :{
		type: "number",
		default: 0,
	},
	prefixSpace :{
		type: "number",
		default: 5,
	},
	iconLeftMargin :{
		type: "number",
		default: 10,
	},
	iconRightMargin :{
		type: "number",
		default: 10,
	},
	iconTopMargin :{
		type: "number",
		default: 5,
	},
	iconBottomMargin :{
		type: "number",
		default: 5,
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
		default: 120,
	},
	imageWidthType : {
		type    : "boolean",
		default : true,
	},
	stack: {
		type: "string",
		default: "tablet"
	},
	showPrefix: {
		type: "boolean",
		default: true,
	},
	showTitle: {
		type: "boolean",
		default: true,
	},
	showDesc: {
		type: "boolean",
		default: true,
	},
}

const deprecated = [
	{
		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				backgroundType,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
			} = props.attributes;

			// Get icon/Image components.
			let is_image = '';

			if ( source_type === 'icon' ) {
				is_image = <InfoBoxIcon attributes={ props.attributes } />;
			} else {
				is_image = <InfoBoxIconImage attributes={ props.attributes } />;
			}

			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle && (
						<InfoBoxSeparator attributes={ props.attributes } />
					) }
					<div className="uagb-ifb-text-wrap">
						<InfoBoxDesc
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
						<InfoBoxCta attributes={ props.attributes } />
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<>
					<div className="uagb-ifb-title-wrap">
						<Prefix
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
						<Title
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
					</div>
				</>
			);

			const output = (
				<>
					<div
						className={ classnames(
							'uagb-infobox__content-wrap',
							...InfoBoxPositionClasses( props.attributes )
						) }
					>
						<div className="uagb-ifb-left-right-wrap">
							{ iconimgPosition == 'left' && is_image }
							<div className="uagb-ifb-content">
								{ iconimgPosition == 'above-title' && is_image }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									title_text }

								{ iconimgPosition == 'below-title' && is_image }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									desc }

								{ iconimgPosition === 'left-title' && (
									<>
										<div className="uagb-ifb-left-title-image">
											{ is_image }
											{ title_text }
										</div>
										{ desc }
									</>
								) }

								{ iconimgPosition === 'right-title' && (
									<>
										<div className="uagb-ifb-right-title-image">
											{ title_text }
											{ is_image }
										</div>
										{ desc }
									</>
								) }

								{ ( iconimgPosition == 'left' ||
									iconimgPosition == 'right' ) && (
									<>
										{ title_text }
										{ desc }
									</>
								) }
							</div>

							{ iconimgPosition == 'right' && is_image }
						</div>
					</div>
				</>
			);

			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<>
					<div
						className={ classnames(
							className,
							'uagb-infobox__outer-wrap'
						) }
						id={ `uagb-infobox-${ block_id }` }
					>
						{ ctaType == 'all' && (
							<>
								<a
									href={ ctaLink }
									className="uagb-infobox-link-wrap"
									target={ target }
									rel="noopener noreferrer"
								>
									{ ' ' }
									{ output }
								</a>
							</>
						) }
						{ ctaType !== 'all' && output }
					</div>
				</>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				backgroundType,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
			} = props.attributes;

			// Get icon/Image components.
			let is_image = '';

			if ( source_type === 'icon' && icon !== '' ) {
				is_image = <InfoBoxIcon attributes={ props.attributes } />;
			} else {
				is_image = <InfoBoxIconImage attributes={ props.attributes } />;
			}

			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle && (
						<InfoBoxSeparator attributes={ props.attributes } />
					) }
					<div className="uagb-ifb-text-wrap">
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ ctaType !== 'none' && (
							<InfoBoxCta attributes={ props.attributes } />
						) }
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<>
					<div className="uagb-ifb-title-wrap">
						{ showPrefix && '' !== prefixTitle && (
							<Prefix
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ showTitle && '' !== infoBoxTitle && (
							<Title
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
					</div>
				</>
			);

			const output = (
				<>
					<div
						className={ classnames(
							'uagb-infobox__content-wrap',
							...InfoBoxPositionClasses( props.attributes )
						) }
					>
						<div className="uagb-ifb-left-right-wrap">
							{ iconimgPosition == 'left' && is_image }
							<div className="uagb-ifb-content">
								{ iconimgPosition == 'above-title' && is_image }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									title_text }

								{ iconimgPosition == 'below-title' && is_image }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									desc }

								{ iconimgPosition === 'left-title' && (
									<>
										<div className="uagb-ifb-left-title-image">
											{ is_image }
											{ title_text }
										</div>
										{ desc }
									</>
								) }

								{ iconimgPosition === 'right-title' && (
									<>
										<div className="uagb-ifb-right-title-image">
											{ title_text }
											{ is_image }
										</div>
										{ desc }
									</>
								) }

								{ ( iconimgPosition == 'left' ||
									iconimgPosition == 'right' ) && (
									<>
										{ title_text }
										{ desc }
									</>
								) }
							</div>

							{ iconimgPosition == 'right' && is_image }
						</div>
					</div>
				</>
			);

			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<>
					<div
						className={ classnames(
							className,
							'uagb-infobox__outer-wrap'
						) }
						id={ `uagb-infobox-${ block_id }` }
					>
						{ ctaType == 'all' && (
							<>
								<a
									href={ ctaLink }
									className="uagb-infobox-link-wrap"
									target={ target }
									rel="noopener noreferrer"
								>
									{ ' ' }
									{ output }
								</a>
							</>
						) }
						{ ctaType !== 'all' && output }
					</div>
				</>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				backgroundType,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
			} = props.attributes;

			// Get icon/Image components.
			let is_image = '';

			if ( source_type === 'icon' && icon !== '' ) {
				is_image = <Icon attributes={ props.attributes } />;
			} else {
				is_image = <InfoBoxIconImage attributes={ props.attributes } />;
			}

			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle && (
						<InfoBoxSeparator attributes={ props.attributes } />
					) }
					<div className="uagb-ifb-text-wrap">
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ ctaType !== 'none' && (
							<CallToAction attributes={ props.attributes } />
						) }
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<>
					<div className="uagb-ifb-title-wrap">
						{ showPrefix && '' !== prefixTitle && (
							<Prefix
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ showTitle && '' !== infoBoxTitle && (
							<Title
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
					</div>
				</>
			);

			const output = (
				<>
					<div
						className={ classnames(
							'uagb-infobox__content-wrap',
							...InfoBoxPositionClasses( props.attributes )
						) }
					>
						<div className="uagb-ifb-left-right-wrap">
							{ iconimgPosition == 'left' && is_image }
							<div className="uagb-ifb-content">
								{ iconimgPosition == 'above-title' && is_image }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									title_text }

								{ iconimgPosition == 'below-title' && is_image }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									desc }

								{ iconimgPosition === 'left-title' && (
									<>
										<div className="uagb-ifb-left-title-image">
											{ is_image }
											{ title_text }
										</div>
										{ desc }
									</>
								) }

								{ iconimgPosition === 'right-title' && (
									<>
										<div className="uagb-ifb-right-title-image">
											{ title_text }
											{ is_image }
										</div>
										{ desc }
									</>
								) }

								{ ( iconimgPosition == 'left' ||
									iconimgPosition == 'right' ) && (
									<>
										{ title_text }
										{ desc }
									</>
								) }
							</div>

							{ iconimgPosition == 'right' && is_image }
						</div>
					</div>
				</>
			);

			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<>
					<div
						className={ classnames(
							className,
							'uagb-infobox__outer-wrap'
						) }
						id={ `uagb-infobox-${ block_id }` }
					>
						{ ctaType == 'all' && (
							<>
								<a
									href={ ctaLink }
									className="uagb-infobox-link-wrap"
									target={ target }
									rel="noopener noreferrer"
								>
									{ ' ' }
									{ output }
								</a>
							</>
						) }
						{ ctaType !== 'all' && output }
					</div>
				</>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				backgroundType,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
				seperatorPosition,
			} = props.attributes;

			// Get icon/Image components.
			let is_image = '';

			if ( source_type === 'icon' && icon !== '' ) {
				is_image = <Icon attributes={ props.attributes } />;
			} else {
				is_image = <InfoBoxIconImage attributes={ props.attributes } />;
			}

			let icon_image_html = is_image;
			let seperator_position = seperatorPosition;
			const seperator_html = (
				<InfoBoxSeparator attributes={ props.attributes } />
			);
			let show_seperator = true;

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition == 'above-title' ||
					iconimgPosition == 'below-title' )
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ is_image }
						{ 'none' !== seperatorStyle && seperator_html }
					</>
				);
			}

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition !== 'above-title' ||
					iconimgPosition !== 'below-title' )
			) {
				seperator_position = 'after_title';
			}

			if (
				iconimgPosition == 'below-title' &&
				seperatorPosition == 'after_title'
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ 'none' !== seperatorStyle && seperator_html }
						{ is_image }
					</>
				);
			}
			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle &&
						seperator_position == 'after_title' &&
						show_seperator &&
						seperator_html }
					<div className="uagb-ifb-text-wrap">
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							seperator_position == 'after_desc' &&
							seperator_html }
						{ ctaType !== 'none' && (
							<CallToAction attributes={ props.attributes } />
						) }
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<>
					<div className="uagb-ifb-title-wrap">
						{ showPrefix && '' !== prefixTitle && (
							<Prefix
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							seperator_position == 'after_prefix' &&
							seperator_html }
						{ showTitle && '' !== infoBoxTitle && (
							<Title
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
					</div>
				</>
			);

			const output = (
				<>
					<div
						className={ classnames(
							'uagb-infobox__content-wrap',
							ctaType == 'all'
								? ' uagb-infobox_cta-type-all'
								: '',
							...InfoBoxPositionClasses( props.attributes )
						) }
					>
						<div className="uagb-ifb-left-right-wrap">
							{ iconimgPosition == 'left' && is_image }
							<div className="uagb-ifb-content">
								{ iconimgPosition == 'above-title' &&
									icon_image_html }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									title_text }

								{ iconimgPosition == 'below-title' &&
									icon_image_html }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									desc }

								{ iconimgPosition === 'left-title' && (
									<>
										<div className="uagb-ifb-left-title-image">
											{ icon_image_html }
											{ title_text }
										</div>
										{ desc }
									</>
								) }

								{ iconimgPosition === 'right-title' && (
									<>
										<div className="uagb-ifb-right-title-image">
											{ title_text }
											{ icon_image_html }
										</div>
										{ desc }
									</>
								) }

								{ ( iconimgPosition == 'left' ||
									iconimgPosition == 'right' ) && (
									<>
										{ title_text }
										{ desc }
									</>
								) }
							</div>

							{ iconimgPosition == 'right' && icon_image_html }
						</div>
					</div>
				</>
			);

			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<>
					<div
						className={ classnames(
							className,
							'uagb-infobox__outer-wrap'
						) }
						id={ `uagb-infobox-${ block_id }` }
					>
						{ ctaType == 'all' && (
							<>
								<a
									href={ ctaLink }
									className="uagb-infobox-link-wrap uagb-infbox__link-to-all"
									target={ target }
									rel="noopener noreferrer"
								></a>
								{ output }
							</>
						) }
						{ ctaType !== 'all' && output }
					</div>
				</>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				backgroundType,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
				seperatorPosition,
			} = props.attributes;

			// Get icon/Image components.
			let is_image = '';

			if ( source_type === 'icon' && icon !== '' ) {
				is_image = <Icon attributes={ props.attributes } />;
			} else {
				is_image = <InfoBoxIconImage attributes={ props.attributes } />;
			}

			let icon_image_html = is_image;
			let seperator_position = seperatorPosition;
			const seperator_html = (
				<InfoBoxSeparator attributes={ props.attributes } />
			);
			let show_seperator = true;

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition == 'above-title' ||
					iconimgPosition == 'below-title' )
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ is_image }
						{ 'none' !== seperatorStyle && seperator_html }
					</>
				);
			}

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition !== 'above-title' ||
					iconimgPosition !== 'below-title' )
			) {
				seperator_position = 'after_title';
			}

			if (
				iconimgPosition == 'below-title' &&
				seperatorPosition == 'after_title'
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ 'none' !== seperatorStyle && seperator_html }
						{ is_image }
					</>
				);
			}
			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle &&
						seperator_position == 'after_title' &&
						show_seperator &&
						seperator_html }
					<div className="uagb-ifb-text-wrap">
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							seperator_position == 'after_desc' &&
							seperator_html }
						{ ctaType !== 'none' && (
							<CallToAction attributes={ props.attributes } />
						) }
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<>
					<div className="uagb-ifb-title-wrap">
						{ showPrefix && '' !== prefixTitle && (
							<Prefix
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							seperator_position == 'after_prefix' &&
							seperator_html }
						{ showTitle && '' !== infoBoxTitle && (
							<Title
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
					</div>
				</>
			);

			const output = (
				<>
					<div
						className={ classnames(
							'uagb-infobox__content-wrap',
							ctaType == 'all'
								? ' uagb-infobox_cta-type-all'
								: '',
							...InfoBoxPositionClasses( props.attributes )
						) }
					>
						<div className="uagb-ifb-left-right-wrap">
							{ iconimgPosition == 'left' && is_image }
							<div className="uagb-ifb-content">
								{ iconimgPosition == 'above-title' &&
									icon_image_html }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									title_text }

								{ iconimgPosition == 'below-title' &&
									icon_image_html }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									desc }

								{ iconimgPosition === 'left-title' && (
									<>
										<div className="uagb-ifb-left-title-image">
											{ icon_image_html }
											{ title_text }
										</div>
										{ desc }
									</>
								) }

								{ iconimgPosition === 'right-title' && (
									<>
										<div className="uagb-ifb-right-title-image">
											{ title_text }
											{ icon_image_html }
										</div>
										{ desc }
									</>
								) }

								{ ( iconimgPosition == 'left' ||
									iconimgPosition == 'right' ) && (
									<>
										{ title_text }
										{ desc }
									</>
								) }
							</div>

							{ iconimgPosition == 'right' && icon_image_html }
						</div>
					</div>
				</>
			);

			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<>
					<div
						className={ classnames(
							className,
							'uagb-infobox__outer-wrap',
							`uagb-block-${ block_id }`
						) }
					>
						{ ctaType == 'all' && (
							<>
								<a
									href={ ctaLink }
									className="uagb-infobox-link-wrap uagb-infbox__link-to-all"
									target={ target }
									rel="noopener noreferrer"
								></a>
								{ output }
							</>
						) }
						{ ctaType !== 'all' && output }
					</div>
				</>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
				seperatorPosition,
			} = props.attributes;

			// Get icon/Image components.
			let is_image = '';

			if ( source_type === 'icon' && icon !== '' ) {
				is_image = <Icon attributes={ props.attributes } />;
			} else {
				is_image = <InfoBoxIconImage attributes={ props.attributes } />;
			}

			let icon_image_html = is_image;
			let seperator_position = seperatorPosition;
			const seperator_html = (
				<InfoBoxSeparator attributes={ props.attributes } />
			);
			let show_seperator = true;

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition == 'above-title' ||
					iconimgPosition == 'below-title' )
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ is_image }
						{ 'none' !== seperatorStyle && seperator_html }
					</>
				);
			}

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition !== 'above-title' ||
					iconimgPosition !== 'below-title' )
			) {
				seperator_position = 'after_title';
			}

			if (
				iconimgPosition == 'below-title' &&
				seperatorPosition == 'after_title'
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ 'none' !== seperatorStyle && seperator_html }
						{ is_image }
					</>
				);
			}
			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle &&
						seperator_position == 'after_title' &&
						show_seperator &&
						seperator_html }
					<div className="uagb-ifb-text-wrap">
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							seperator_position == 'after_desc' &&
							seperator_html }
						{ ctaType !== 'none' && (
							<CallToAction attributes={ props.attributes } />
						) }
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<div className="uagb-ifb-title-wrap">
					{ showPrefix && '' !== prefixTitle && (
						<Prefix
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
					) }
					{ 'none' !== seperatorStyle &&
						seperator_position == 'after_prefix' &&
						seperator_html }
					{ showTitle && '' !== infoBoxTitle && (
						<Title
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
					) }
				</div>
			);

			const output = (
				<div
					className={ classnames(
						'uagb-infobox__content-wrap',
						ctaType == 'all' ? ' uagb-infobox_cta-type-all' : '',
						...InfoBoxPositionClasses( props.attributes )
					) }
				>
					<div className="uagb-ifb-left-right-wrap">
						{ iconimgPosition == 'left' && is_image }
						<div className="uagb-ifb-content">
							{ iconimgPosition == 'above-title' &&
								icon_image_html }

							{ ( iconimgPosition == 'above-title' ||
								iconimgPosition == 'below-title' ) &&
								title_text }

							{ iconimgPosition == 'below-title' &&
								icon_image_html }

							{ ( iconimgPosition == 'above-title' ||
								iconimgPosition == 'below-title' ) &&
								desc }

							{ iconimgPosition === 'left-title' && (
								<>
									<div className="uagb-ifb-left-title-image">
										{ icon_image_html }
										{ title_text }
									</div>
									{ desc }
								</>
							) }

							{ iconimgPosition === 'right-title' && (
								<>
									<div className="uagb-ifb-right-title-image">
										{ title_text }
										{ icon_image_html }
									</div>
									{ desc }
								</>
							) }

							{ ( iconimgPosition == 'left' ||
								iconimgPosition == 'right' ) && (
								<>
									{ title_text }
									{ desc }
								</>
							) }
						</div>

						{ iconimgPosition == 'right' && icon_image_html }
					</div>
				</div>
			);

			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<div
					className={ classnames(
						className,
						'uagb-infobox__outer-wrap',
						`uagb-block-${ block_id }`
					) }
				>
					{ ctaType == 'all' && (
						<a
							href={ ctaLink }
							className="uagb-infobox-link-wrap uagb-infbox__link-to-all"
							target={ target }
							aria-label={ 'Infobox Link' }
							rel="noopener noreferrer"
						></a>
					) }
					{ output }
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
				seperatorPosition,
			} = props.attributes;

			// Get icon/Image components.
			let is_image = '';

			if ( source_type === 'icon' && icon !== '' ) {
				is_image = <Icon attributes={ props.attributes } />;
			} else {
				is_image = <InfoBoxIconImage attributes={ props.attributes } />;
			}

			let icon_image_html = is_image;
			let seperator_position = seperatorPosition;
			const seperator_html = (
				<InfoBoxSeparator attributes={ props.attributes } />
			);
			let show_seperator = true;

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition == 'above-title' ||
					iconimgPosition == 'below-title' )
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ is_image }
						{ 'none' !== seperatorStyle && seperator_html }
					</>
				);
			}

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition !== 'above-title' ||
					iconimgPosition !== 'below-title' )
			) {
				seperator_position = 'after_title';
			}

			if (
				iconimgPosition == 'below-title' &&
				seperatorPosition == 'after_title'
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ 'none' !== seperatorStyle && seperator_html }
						{ is_image }
					</>
				);
			}
			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle &&
						seperator_position == 'after_title' &&
						show_seperator &&
						seperator_html }
					<div className="uagb-ifb-text-wrap">
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							seperator_position == 'after_desc' &&
							seperator_html }
						{ ctaType !== 'none' && (
							<CallToAction attributes={ props.attributes } />
						) }
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<div className="uagb-ifb-title-wrap">
					{ showPrefix && '' !== prefixTitle && (
						<Prefix
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
					) }
					{ 'none' !== seperatorStyle &&
						seperator_position == 'after_prefix' &&
						seperator_html }
					{ showTitle && '' !== infoBoxTitle && (
						<Title
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
					) }
				</div>
			);

			const output = (
				<div
					className={ classnames(
						'uagb-infobox__content-wrap',
						ctaType == 'all' ? ' uagb-infobox_cta-type-all' : '',
						...InfoBoxPositionClasses( props.attributes )
					) }
				>
					<div className="uagb-ifb-left-right-wrap">
						{ iconimgPosition == 'left' && is_image }
						<div className="uagb-ifb-content">
							{ iconimgPosition == 'above-title' &&
								icon_image_html }

							{ ( iconimgPosition == 'above-title' ||
								iconimgPosition == 'below-title' ) &&
								title_text }

							{ iconimgPosition == 'below-title' &&
								icon_image_html }

							{ ( iconimgPosition == 'above-title' ||
								iconimgPosition == 'below-title' ) &&
								desc }

							{ iconimgPosition === 'left-title' && (
								<>
									<div className="uagb-ifb-left-title-image">
										{ icon_image_html }
										{ title_text }
									</div>
									{ desc }
								</>
							) }

							{ iconimgPosition === 'right-title' && (
								<>
									<div className="uagb-ifb-right-title-image">
										{ title_text }
										{ icon_image_html }
									</div>
									{ desc }
								</>
							) }

							{ ( iconimgPosition == 'left' ||
								iconimgPosition == 'right' ) && (
								<>
									{ title_text }
									{ desc }
								</>
							) }
						</div>

						{ iconimgPosition == 'right' && icon_image_html }
					</div>
				</div>
			);

			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<div
					className={ classnames(
						className,
						'uagb-infobox__outer-wrap',
						`uagb-block-${ block_id }`
					) }
				>
					{ ctaType == 'all' && (
						<a
							href={ ctaLink }
							className="uagb-infobox-link-wrap uagb-infbox__link-to-all"
							target={ target }
							aria-label={ 'Infobox Link' }
							rel="noopener noreferrer"
						></a>
					) }
					{ output }
				</div>
			);
		},
	},
	{

		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
				seperatorPosition,
			} = props.attributes;

			// Get icon/Image components.
			let isImage = '';

			if ( source_type === 'icon' && icon !== '' ) {
				isImage = <Icon attributes={ props.attributes } />;
			} else {
				isImage = <IconImage attributes={ props.attributes } />;
			}

			let iconImageHtml = isImage;
			let position = seperatorPosition;
			const seperatorHtml = <InfoBoxSeparator attributes={ props.attributes } />;
			let showSeperator = true;

			if (
				position === 'after_icon' &&
				( iconimgPosition === 'above-title' || iconimgPosition === 'below-title' )
			) {
				showSeperator = false;
				iconImageHtml = (
					<>
						{ isImage }
						{ 'none' !== seperatorStyle && seperatorHtml }
					</>
				);
			}

			if (
				position === 'after_icon' &&
				( iconimgPosition !== 'above-title' ||
					iconimgPosition !== 'below-title' )
			) {
				position = 'after_title';
			}

			if ( iconimgPosition === 'below-title' && position === 'after_title' ) {
				showSeperator = false;
				iconImageHtml = (
					<>
						{ 'none' !== seperatorStyle && seperatorHtml }
						{ isImage }
					</>
				);
			}
			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle &&
						position === 'after_title' &&
						showSeperator &&
						seperatorHtml }
					<div className="uagb-ifb-text-wrap">
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							position === 'after_desc' &&
							seperatorHtml }
						{ ctaType !== 'none' && (
							<CallToAction attributes={ props.attributes } />
						) }
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<div className="uagb-ifb-title-wrap">
					{ showPrefix && '' !== prefixTitle && (
						<Prefix
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
					) }
					{ 'none' !== seperatorStyle &&
						position === 'after_prefix' &&
						seperatorHtml }
					{ showTitle && '' !== infoBoxTitle && (
						<Title
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
					) }
				</div>
			);

			const output = (
				<div
					className={ classnames(
						'uagb-infobox__content-wrap',
						ctaType === 'all' ? ' uagb-infobox_cta-type-all' : '',
						...InfoBoxPositionClasses( props.attributes )
					) }
				>
					<div className="uagb-ifb-left-right-wrap">
						{ iconimgPosition === 'left' && isImage }
						<div className="uagb-ifb-content">
							{ iconimgPosition === 'above-title' && iconImageHtml }

							{ ( iconimgPosition === 'above-title' ||
								iconimgPosition === 'below-title' ) &&
								title_text }

							{ iconimgPosition === 'below-title' && iconImageHtml }

							{ ( iconimgPosition === 'above-title' ||
								iconimgPosition === 'below-title' ) &&
								desc }

							{ iconimgPosition === 'left-title' && (
								<>
									<div className="uagb-ifb-left-title-image">
										{ iconImageHtml }
										{ title_text }
									</div>
									{ desc }
								</>
							) }

							{ iconimgPosition === 'right-title' && (
								<>
									<div className="uagb-ifb-right-title-image">
										{ title_text }
										{ iconImageHtml }
									</div>
									{ desc }
								</>
							) }

							{ ( iconimgPosition === 'left' ||
								iconimgPosition === 'right' ) && (
								<>
									{ title_text }
									{ desc }
								</>
							) }
						</div>

						{ iconimgPosition === 'right' && iconImageHtml }
					</div>
				</div>
			);

			let target = '_self';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<div
					className={ classnames(
						className,
						'uagb-infobox__outer-wrap',
						`uagb-block-${ block_id }`
					) }
				>
					{ ctaType === 'all' && (
						<a // eslint-disable-line jsx-a11y/anchor-has-content
							href={ ctaLink }
							className="uagb-infobox-link-wrap uagb-infbox__link-to-all"
							target={ target }
							aria-label={ 'Infobox Link' }
							rel="noopener noreferrer"
						></a>
					) }
					{ output }
				</div>
			);
		}
	}
];

export default deprecated;
