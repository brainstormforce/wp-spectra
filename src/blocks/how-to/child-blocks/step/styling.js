/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		urlFontSize,
		urlFontSizeType,
		urlFontSizeMobile,
		urlFontSizeTablet,
		urlFontFamily,
		urlFontWeight,

		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleFontFamily,
		titleFontWeight,

		descriptionFontSize,
		descriptionFontSizeType,
		descriptionFontSizeMobile,
		descriptionFontSizeTablet,
		descriptionFontFamily,
		descriptionFontWeight,
		titleColor,
		descriptionColor,
		urlColor,

		urlFontStyle,
		urlTransform,
		urlDecoration,
		titleFontStyle,
		titleTransform,
		titleDecoration,
		descriptionFontStyle,
		descriptionTransform,
		descriptionDecoration,
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
		descriptionLetterSpacing,
		descriptionLetterSpacingTablet,
		descriptionLetterSpacingMobile,
		descriptionLetterSpacingType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		titleLineHeightType,
		descriptionLineHeight,
		descriptionLineHeightType,
		descriptionLineHeightTablet,
		descriptionLineHeightMobile,
		urlLineHeight,
		urlLineHeightTablet,
		urlLineHeightMobile,
		urlLineHeightType,
		urlLetterSpacing,
		urlLetterSpacingTablet,
		urlLetterSpacingMobile,
		urlLetterSpacingType,
	} = props.attributes;

	let tabletSelectors = {};
	let mobileSelectors = {};

	const selectors = {
		' .uagb-step-link-text': {
			'color': urlColor,
			'font-family': urlFontFamily,
			'font-style': urlFontStyle,
			'text-transform': urlTransform,
			'text-decoration': urlDecoration,
			'font-weight': urlFontWeight,
			'font-size': generateCSSUnit( urlFontSize, urlFontSizeType ),
			'line-height': generateCSSUnit( urlLineHeight, urlLineHeightType ),
			'letter-spacing': generateCSSUnit( urlLetterSpacing, urlLetterSpacingType ),
		},
		' .block-editor-rich-text__editable.uagb-how-to-step-name': {
			'color': titleColor,
			'font-family': titleFontFamily,
			'font-style': titleFontStyle,
			'text-transform': titleTransform,
			'text-decoration': titleDecoration,
			'font-weight': titleFontWeight,
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeight, titleLineHeightType ),
			'letter-spacing': generateCSSUnit( titleLetterSpacing, titleLetterSpacingType ),
		},
		' .block-editor-rich-text__editable.uagb-how-to-step-description': {
			'color': descriptionColor,
			'font-family': descriptionFontFamily,
			'font-style': descriptionFontStyle,
			'text-transform': descriptionTransform,
			'text-decoration': descriptionDecoration,
			'font-weight': descriptionFontWeight,
			'font-size': generateCSSUnit( descriptionFontSize, descriptionFontSizeType ),
			'line-height': generateCSSUnit( descriptionLineHeight, descriptionLineHeightType ),
			'letter-spacing': generateCSSUnit( descriptionLetterSpacing, descriptionLetterSpacingType ),
		},
	};

	mobileSelectors = {
		' .uagb-step-link-text': {
			'font-size': generateCSSUnit( urlFontSizeMobile, urlFontSizeType ),
			'line-height': generateCSSUnit( urlLineHeightMobile, urlLineHeightType ),
			'letter-spacing': generateCSSUnit( urlLetterSpacingMobile, urlLetterSpacingType ),
		},
		' .block-editor-rich-text__editable.uagb-how-to-step-name': {
			'font-size': generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeightMobile, titleLineHeightType ),
			'letter-spacing': generateCSSUnit( titleLetterSpacingMobile, titleLetterSpacingType ),
		},
		' .block-editor-rich-text__editable.uagb-how-to-step-description': {
			'font-size': generateCSSUnit( descriptionFontSizeMobile, descriptionFontSizeType ),
			'line-height': generateCSSUnit( descriptionLineHeightMobile, descriptionLineHeightType ),
			'letter-spacing': generateCSSUnit( descriptionLetterSpacingMobile, descriptionLetterSpacingType ),
		},
	};

	tabletSelectors = {
		' .uagb-step-link-text': {
			'font-size': generateCSSUnit( urlFontSizeTablet, urlFontSizeType ),
			'line-height': generateCSSUnit( urlLineHeightTablet, urlLineHeightType ),
			'letter-spacing': generateCSSUnit( urlLetterSpacingTablet, urlLetterSpacingType ),
		},
		' .block-editor-rich-text__editable.uagb-how-to-step-name': {
			'font-size': generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeightTablet, titleLineHeightType ),
			'letter-spacing': generateCSSUnit( titleLetterSpacingTablet, titleLetterSpacingType ),
		},
		' .block-editor-rich-text__editable.uagb-how-to-step-description': {
			'font-size': generateCSSUnit( descriptionFontSizeTablet, descriptionFontSizeType ),
			'line-height': generateCSSUnit( descriptionLineHeightTablet, descriptionLineHeightType ),
			'letter-spacing': generateCSSUnit( descriptionLetterSpacingTablet, descriptionLetterSpacingType ),
		},
	};

	const baseSelector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	let stylingCss = generateCSS( selectors, baseSelector );

	stylingCss += generateCSS( tabletSelectors, `${ baseSelector }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ baseSelector }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default styling;
