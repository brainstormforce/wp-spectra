import classnames from "classnames";
import TableOfContents from "./toc";
import React from "react";
import { __ } from '@wordpress/i18n';
import renderSVG from "@Controls/renderIcon";

const {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	RichText,
	ColorPalette,
} = wp.blockEditor;

const Render = ( props ) => {

	props = props.parentProps;

	const { attributes, setAttributes, className, headers, deviceType } = props;

	const {
		align,
		heading,
		disableBullets,
		makeCollapsible,
		initialCollapse,
		icon,
		iconColor,
		bulletColor,
		iconSize,
		smoothScroll,
		smoothScrollOffset,
		smoothScrollDelay,
		scrollToTop,
		scrollToTopColor,
		scrollToTopBgColor,
		customWidth,
		widthDesktop,
		widthTablet,
		widthMobile,
		widthTypeMobile,
		widthTypeTablet,
		widthTypeDesktop,
		tColumnsDesktop,
		tColumnsTablet,
		tColumnsMobile,
		//Color
		backgroundColor,
		linkColor,
		linkHoverColor,
		headingColor,
		//Padding,
		vPaddingDesktop,
		vPaddingTablet,
		vPaddingMobile,
		hPaddingDesktop,
		hPaddingTablet,
		hPaddingMobile,
		paddingTypeMobile,
		paddingTypeTablet,
		paddingTypeDesktop,
		//Padding,
		vMarginDesktop,
		vMarginTablet,
		vMarginMobile,
		hMarginDesktop,
		hMarginTablet,
		hMarginMobile,
		marginTypeMobile,
		marginTypeTablet,
		marginTypeDesktop,
		headingBottom,
		// Content Padding,
		contentPaddingDesktop,
		contentPaddingTablet,
		contentPaddingMobile,
		contentPaddingTypeMobile,
		contentPaddingTypeTablet,
		contentPaddingTypeDesktop,
		//Border
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		//Typography
		loadGoogleFonts,
		fontFamily,
		fontWeight,
		fontSubset,
		fontSize,
		fontSizeType,
		fontSizeTablet,
		fontSizeMobile,
		lineHeightType,
		lineHeight,
		lineHeightTablet,
		lineHeightMobile,
		headingLoadGoogleFonts,
		headingFontFamily,
		headingFontWeight,
		headingFontSubset,
		headingFontSize,
		headingFontSizeType,
		headingFontSizeTablet,
		headingFontSizeMobile,
		headingLineHeightType,
		headingLineHeight,
		headingLineHeightTablet,
		headingLineHeightMobile,
		mappingHeaders,
		headingAlignment,
		headingTitle,
	} = attributes;

	let icon_html = '';

	if ( makeCollapsible && icon ) {
		icon_html = (
			<span className="uag-toc__collapsible-wrap">
				{ renderSVG( icon ) }
			</span>
		);
	}

	return (
		<>
			<div
				className={ classnames(
					className,
					`uagb-toc__align-${ align }`,
					`uagb-toc__columns-${ tColumnsDesktop }`,
					initialCollapse ? 'uagb-toc__collapse' : '',
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
					`uagb-block-${ props.clientId.substr( 0, 8 ) }`
				) }
			>
				<div className="uagb-toc__wrap">
					<div className="uagb-toc__title-wrap">
						<RichText
							tagName={ 'div' }
							placeholder={ __(
								'Table Of Contents',
								'ultimate-addons-for-gutenberg'
							) }
							value={ headingTitle }
							className="uagb-toc__title"
							onChange={ ( value ) =>
								setAttributes( { headingTitle: value } )
							}
							multiline={ false }
							onRemove={ () => props.onReplace( [] ) }
						/>
						{ icon_html }
					</div>
					<TableOfContents
						mappingHeaders={ mappingHeaders }
						headers={ headers }
					/>
				</div>
			</div>
		</>
	)

}


export default React.memo( Render );
