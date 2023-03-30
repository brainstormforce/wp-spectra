/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		icon_color,
		label_color,
		icon_hover_color,
		label_hover_color,
		icon_bg_color,
		icon_bg_hover_color,
		icon_border_color,
		icon_border_hover_color,
		// margin
		childTopMargin,
		childRightMargin,
		childLeftMargin,
		childBottomMargin,
		childTopMarginTablet,
		childRightMarginTablet,
		childLeftMarginTablet,
		childBottomMarginTablet,
		childTopMarginMobile,
		childRightMarginMobile,
		childLeftMarginMobile,
		childBottomMarginMobile,
		childMarginUnit,
		childMarginUnitTablet,
		childMarginUnitMobile,
		// padding
		childTopPadding,
		childRightPadding,
		childLeftPadding,
		childBottomPadding,
		childTopPaddingTablet,
		childRightPaddingTablet,
		childLeftPaddingTablet,
		childBottomPaddingTablet,
		childTopPaddingMobile,
		childRightPaddingMobile,
		childLeftPaddingMobile,
		childBottomPaddingMobile,
		childPaddingUnit,
		childPaddingUnitTablet,
		childPaddingUnitMobile,
	} = props.attributes;

	const selectors = {
		'.wp-block-uagb-icon-list-child': {
			'margin-top': generateCSSUnit( childTopMargin, childMarginUnit ),
			'margin-right': generateCSSUnit( childRightMargin, childMarginUnit ),
			'margin-bottom': generateCSSUnit( childBottomMargin, childMarginUnit ),
			'margin-left': generateCSSUnit( childLeftMargin, childMarginUnit ),
			'padding-top': generateCSSUnit( childTopPadding, childPaddingUnit ),
			'padding-right': generateCSSUnit( childRightPadding, childPaddingUnit ),
			'padding-bottom': generateCSSUnit( childBottomPadding, childPaddingUnit ),
			'padding-left': generateCSSUnit( childLeftPadding, childPaddingUnit ),
		},
		'.wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap svg': {
			'color': icon_color,
			'fill': icon_color,
		},
		'.wp-block-uagb-icon-list-child:hover .uagb-icon-list__source-wrap svg': {
			'color': icon_hover_color,
			'fill': icon_hover_color,
		},
		'.wp-block-uagb-icon-list-child .uagb-icon-list__label': {
			'color': label_color,
		},
		'.wp-block-uagb-icon-list-child:hover .uagb-icon-list__label': {
			'color': label_hover_color,
		},
		'.wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap': {
			'background': icon_bg_color,
			'border-color': icon_border_color,
		},
		'.wp-block-uagb-icon-list-child:hover .uagb-icon-list__source-wrap': {
			'background': icon_bg_hover_color,
			'border-color': icon_border_hover_color,
		},
	};

	let tabletSelectors = {};
	let mobileSelectors = {};

	tabletSelectors = {
		'.wp-block-uagb-icon-list-child': {
			'margin-top': generateCSSUnit( childTopMarginTablet, childMarginUnitTablet ),
			'margin-right': generateCSSUnit( childRightMarginTablet, childMarginUnitTablet ),
			'margin-bottom': generateCSSUnit( childBottomMarginTablet, childMarginUnitTablet ),
			'margin-left': generateCSSUnit( childLeftMarginTablet, childMarginUnitTablet ),
			'padding-top': generateCSSUnit( childTopPaddingTablet, childPaddingUnitTablet ),
			'padding-right': generateCSSUnit( childRightPaddingTablet, childPaddingUnitTablet ),
			'padding-bottom': generateCSSUnit( childBottomPaddingTablet, childPaddingUnitTablet ),
			'padding-left': generateCSSUnit( childLeftPaddingTablet, childPaddingUnitTablet ),
		},
	};

	mobileSelectors = {
		'.wp-block-uagb-icon-list-child': {
			'margin-top': generateCSSUnit( childTopMarginMobile, childMarginUnitMobile ),
			'margin-right': generateCSSUnit( childRightMarginMobile, childMarginUnitMobile ),
			'margin-bottom': generateCSSUnit( childBottomMarginMobile, childMarginUnitMobile ),
			'margin-left': generateCSSUnit( childLeftMarginMobile, childMarginUnitMobile ),
			'padding-top': generateCSSUnit( childTopPaddingMobile, childPaddingUnitMobile ),
			'padding-right': generateCSSUnit( childRightPaddingMobile, childPaddingUnitMobile ),
			'padding-bottom': generateCSSUnit( childBottomPaddingMobile, childPaddingUnitMobile ),
			'padding-left': generateCSSUnit( childLeftPaddingMobile, childPaddingUnitMobile ),
		},
	};

	let stylingCss = '';
	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS( tabletSelectors, `${ id }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ id }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default styling;
