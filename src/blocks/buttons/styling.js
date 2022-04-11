/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		fontFamily,
		fontWeight,
		gap,
		stack,
		align,
		fontStyle,
		fontTransform,
		fontDecoration,

		alignTablet,
		alignMobile,
		fontSizeType,
		fontSize,
		fontSizeMobile,
		fontSizeTablet,
		lineHeightType,
		lineHeight,
		lineHeightMobile,
		lineHeightTablet,

	} = props.attributes;

	const selectors = {};
	const tabletSelectors = {};
	const mobileSelectors = {};

	selectors[ ' .uagb-button__wrapper .uagb-buttons-repeater:not(.wp-block-button__link)' ] = { // For Backword user.
		'font-family': fontFamily,
		'font-style' : fontStyle,
		'text-decoration': fontDecoration,
		'text-transform': fontTransform,
		'font-weight': fontWeight,
		'font-size': generateCSSUnit( fontSize, fontSizeType ),
		'line-height': generateCSSUnit( lineHeight, lineHeightType ),
	};

	selectors[ ' .uagb-button__wrapper .uagb-buttons-repeater' ] = { // For new user.
		'font-family': fontFamily,
		'font-style' : fontStyle,
		'text-decoration': fontDecoration,
		'text-transform': fontTransform,
		'font-weight': fontWeight,
		'font-size': generateCSSUnit( fontSize, fontSizeType ),
		'line-height': generateCSSUnit( lineHeight, lineHeightType ),
	};
	if ( 'desktop' === stack ) {
		selectors[ '.uagb-editor-preview-mode-desktop .block-editor-block-list__layout' ] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gap, 'px' )
		};
		tabletSelectors[ '.uagb-editor-preview-mode-tablet .block-editor-block-list__layout' ] = {
			'column-gap': generateCSSUnit( gap , 'px' ),
		};
		mobileSelectors[ '.uagb-editor-preview-mode-mobile .block-editor-block-list__layout' ] = {
			'column-gap': generateCSSUnit( gap , 'px' ),
		};
	} else if ( 'tablet' === stack ) {
		selectors[ '.uagb-editor-preview-mode-desktop .block-editor-block-list__layout' ] = {
			'column-gap': generateCSSUnit( gap , 'px' ),
		};
		tabletSelectors['.uagb-editor-preview-mode-tablet .block-editor-block-list__layout'] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gap, 'px' ),
		};
		mobileSelectors['.uagb-editor-preview-mode-mobile .block-editor-block-list__layout'] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gap, 'px' ),
		};

	} else if ( 'mobile' === stack ) {
		selectors[ '.uagb-editor-preview-mode-desktop .block-editor-block-list__layout' ] = {
			'column-gap': generateCSSUnit( gap , 'px' ),
		};
		tabletSelectors[ '.uagb-editor-preview-mode-tablet .block-editor-block-list__layout' ] = {
			'column-gap': generateCSSUnit( gap , 'px' ),
		};
		mobileSelectors['.uagb-editor-preview-mode-mobile .block-editor-block-list__layout'] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gap, 'px' ),
		};
	} else if ( 'none' === stack ) {
		selectors[ '.uagb-buttons__outer-wrap .block-editor-block-list__layout' ] = {
			'column-gap': generateCSSUnit( gap , 'px' ),
		};
	}

	if ( align !== 'full' ) {
		selectors[ '.uagb-editor-preview-mode-desktop .block-editor-inner-blocks' ] = {
			'text-align': align,
		};
	} else {
		selectors['.uagb-editor-preview-mode-desktop .block-editor-block-list__layout'] = {
			'width': '100%'
		}
		selectors[ ' .block-editor-block-list__block' ] = {
			'width': '100%',
		};
	}
	if ( alignTablet !== 'full' ) {
		tabletSelectors[ '.uagb-editor-preview-mode-tablet .block-editor-inner-blocks' ] = {
			'text-align': alignTablet,
		};
	} else {
		tabletSelectors['.uagb-editor-preview-mode-tablet .block-editor-block-list__layout'] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gap, 'px' ),
		};
		tabletSelectors[ '.uagb-editor-preview-mode-tablet .block-editor-block-list__layout' ] = {
			'width': '100%'
		}
		tabletSelectors[ ' .block-editor-block-list__block ' ] = {
			'width': '100%',
		};
	}
	if ( alignMobile !== 'full' ) {
		mobileSelectors[ '.uagb-editor-preview-mode-mobile .block-editor-inner-blocks' ] = {
			'text-align': alignMobile,
		};
	} else {
		mobileSelectors['.uagb-editor-preview-mode-mobile .block-editor-block-list__layout'] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gap, 'px' ),
		};
		mobileSelectors[ '.uagb-editor-preview-mode-mobile .block-editor-block-list__layout' ] = {
			'width': '100%'
		}
		mobileSelectors[ ' .block-editor-block-list__block ' ] = {
			'width': '100%',
		};
	}

	tabletSelectors[ ' .uagb-buttons-repeater' ] = {
		'font-size': generateCSSUnit( fontSizeTablet, fontSizeType ),
		'line-height': generateCSSUnit( lineHeightTablet, lineHeightType ),
	};

	mobileSelectors[ ' .uagb-buttons-repeater' ] = {
		'font-size': generateCSSUnit( fontSizeMobile, fontSizeType ),
		'line-height': generateCSSUnit( lineHeightMobile, lineHeightType ),
	};

	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;
	let stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS( tabletSelectors, id, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, id, true, 'mobile' );

	return stylingCss;
}

export default styling;
