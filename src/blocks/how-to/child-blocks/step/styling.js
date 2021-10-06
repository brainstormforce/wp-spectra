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
			'font-size': generateCSSUnit(
				urlFontSize,
				urlFontSizeType
			),
		},
		' .block-editor-rich-text__editable.uagb-how-to-step-name': {
			'color': titleColor,
			'font-family': titleFontFamily,
			'font-style': titleFontStyle,
			'text-transform': titleTransform,
			'text-decoration': titleDecoration,
			'font-weight': titleFontWeight,
			'font-size': generateCSSUnit(
				titleFontSize,
				titleFontSizeType
			),
		},
		' .block-editor-rich-text__editable.uagb-how-to-step-description': {
			'color': descriptionColor,
			'font-family': descriptionFontFamily,
			'font-style': descriptionFontStyle,
			'text-transform': descriptionTransform,
			'text-decoration': descriptionDecoration,
			'font-weight': descriptionFontWeight,
			'font-size': generateCSSUnit(
				descriptionFontSize,
				descriptionFontSizeType
			),
		},
	};

	mobileSelectors = {
		' .uagb-step-link-text': {
			'font-size': generateCSSUnit(
				urlFontSizeMobile,
				urlFontSizeType
			),
		},
		' .block-editor-rich-text__editable.uagb-how-to-step-name': {
			'font-size': generateCSSUnit(
				titleFontSizeMobile,
				titleFontSizeType
			),
		},
		' .block-editor-rich-text__editable.uagb-how-to-step-description': {
			'font-size': generateCSSUnit(
				descriptionFontSizeMobile,
				descriptionFontSizeType
			),
		},
	};

	tabletSelectors = {
		' .uagb-step-link-text': {
			'font-size': generateCSSUnit(
				urlFontSizeTablet,
				urlFontSizeType
			),
		},
		' .block-editor-rich-text__editable.uagb-how-to-step-name': {
			'font-size': generateCSSUnit(
				titleFontSizeTablet,
				titleFontSizeType
			),
		},
		' .block-editor-rich-text__editable.uagb-how-to-step-description': {
			'font-size': generateCSSUnit(
				descriptionFontSizeTablet,
				descriptionFontSizeType
			),
		},
	};

	const baseSelector = `.block-editor-page #wpwrap .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	let stylingCss = generateCSS( selectors, baseSelector );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ baseSelector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ baseSelector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
