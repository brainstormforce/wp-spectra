/**
 * BLOCK: Advanced Heading - Deprecated Block
 */
 import classnames from 'classnames';

import { RichText } from '@wordpress/block-editor';
const attributes = {
	block_id: {
		type: "string"
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	headingTitle: {
		source: "html",
		selector: "h1,h2,h3,h4,h5,h6",
	},
	headingId: {
		type: "string",
	},
	headingDesc: {
		source: "html",
		selector: "p",
		default: "",
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
	separatorColor: {
		type: "string",
	},
	headingTag: {
		type: "string",
		default: "h2"
	},
	level: {
		type: "number",
		default: 2
	},
	seperatorStyle: {
		type: "string",
		default: "solid",
	},
	separatorHeight: {
		type: "number",
		default: 2
	},
	separatorWidth: {
		type: "number",
		default: 12
	},
	separatorWidthType : {
		type: "string",
		default: "%"
	},
	headSpace: {
		type: "number",
		default: 15
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
	headFontSizeType: {
		type: "string",
		default: "px"
	},
	headLineHeightType: {
		type: "string",
		default: "em"
	},
	headFontSize: {
		type: "number",
	},
	headFontSizeTablet: {
		type: "number",
	},
	headFontSizeMobile: {
		type: "number",
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
	subHeadFontFamily: {
		type: "string",
		default: "",
	},
	subHeadFontWeight: {
		type: "string",
	},
	subHeadFontSubset: {
		type: "string",
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
	subHeadLineHeight: {
		type: "number",
	},
	subHeadLineHeightType: {
		type: "string",
		default: "em"
	},
	subHeadLineHeightTablet: {
		type: "number",
	},
	subHeadLineHeightMobile: {
		type: "number",
	},
	separatorSpace: {
		type: "number",
		default: 15
	},
	headLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	subHeadLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	headingDescToggle: {
		source: 'boolean',
		default: true,
	},
}
const deprecated = [
	{
		attributes,
		save( props ) {
			const {
				block_id,
				headingTitle,
				headingDesc,
				headingTag,
				seperatorStyle,
			} = props.attributes;

			let seprator_output = '';
			if ( seperatorStyle !== 'none' ) {
				seprator_output = (
					<div className="uagb-separator-wrap">
						<div className="uagb-separator"></div>
					</div>
				);
			}
			return (
				<div
					className={ props.className }
					id={ `uagb-adv-heading-${ block_id }` }
				>
					<RichText.Content
						tagName={ headingTag }
						value={ headingTitle }
						className="uagb-heading-text"
					/>
					{ seprator_output }
					<RichText.Content
						tagName="p"
						value={ headingDesc }
						className="uagb-desc-text"
					/>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				block_id,
				headingTitle,
				headingDesc,
				headingTag,
				seperatorStyle,
				headingId,
			} = props.attributes;

			let seprator_output = '';
			if ( seperatorStyle !== 'none' ) {
				seprator_output = (
					<div className="uagb-separator-wrap">
						<div className="uagb-separator"></div>
					</div>
				);
			}
			return (
				<div
					className={ props.className }
					id={ `uagb-adv-heading-${ block_id }` }
				>
					<RichText.Content
						tagName={ headingTag }
						value={ headingTitle }
						className="uagb-heading-text"
						id={ headingId }
					/>
					{ seprator_output }
					<RichText.Content
						tagName="p"
						value={ headingDesc }
						className="uagb-desc-text"
					/>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				block_id,
				headingTitle,
				headingDesc,
				headingTag,
				seperatorStyle,
				headingId,
			} = props.attributes;

			let seprator_output = '';
			if ( seperatorStyle !== 'none' ) {
				seprator_output = (
					<div className="uagb-separator-wrap">
						<div className="uagb-separator"></div>
					</div>
				);
			}
			return (
				<div
					className={ classnames(
						props.className,
						`uagb-block-${ block_id }`
					) }
				>
					<RichText.Content
						tagName={ headingTag }
						value={ headingTitle }
						className="uagb-heading-text"
						id={ headingId }
					/>
					{ seprator_output }
					<RichText.Content
						tagName="p"
						value={ headingDesc }
						className="uagb-desc-text"
					/>
				</div>
			)
		}
	},
	{
		attributes,
		save( props ) {
			const {
				block_id,
				headingTitle,
				headingDesc,
				headingTag,
				seperatorStyle,
				headingId,
			} = props.attributes;

			let seprator = '';
			if ( seperatorStyle !== 'none' ) {
				seprator = (
					<div className="uagb-separator-wrap">
						<div className="uagb-separator"></div>
					</div>
				);
			}
			let headingText = '';
			if ( headingTitle !== '' ) {
				headingText = (
					<RichText.Content
						tagName={ headingTag }
						value={ headingTitle }
						className="uagb-heading-text"
						id={ headingId }
					/>
				);
			}
			let descText = '';

			if ( headingDesc !== '' ) {
				descText = (
					<RichText.Content
						tagName="p"
						value={ headingDesc }
						className="uagb-desc-text"
					/>
				);
			}

			return (
				<div
					className={ classnames(
						props.className,
						`uagb-block-${ block_id }`
					) }
				>
					{ headingText }
					{ seprator }
					{ descText }
				</div>
			);
		}
	},
	{
		attributes,
		save( props ) {
		const {
			block_id,
			headingTitle,
			headingDesc,
			headingTag,
			seperatorStyle,
			headingId,
		} = props.attributes;

		let seprator = '';
		if ( seperatorStyle !== 'none' ) {
			seprator = (
				<div className="uagb-separator-wrap">
					<div className="uagb-separator"></div>
				</div>
			);
		}
		let headingText = '';
		if ( headingTitle !== '' ) {
			headingText = (
				<RichText.Content
					tagName={ headingTag }
					value={ headingTitle }
					className="uagb-heading-text"
					id={ headingId }
				/>
			);
		}
		let descText = '';

		if ( headingDesc !== '' ) {
			descText = (
				<RichText.Content
					tagName="p"
					value={ headingDesc }
					className="uagb-desc-text"
				/>
			);
		}

		return (
			<div
				className={ classnames(
					props.className,
					`uagb-block-${ block_id }`
				) }
			>
				{ headingText }
				{ seprator }
				{ descText }
			</div>
		);
	}
}
];

export default deprecated;
