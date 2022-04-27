/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		align,
		gap,
		gapTablet,
		gapMobile,
		social_layout,
		borderRadius,
		borderRadiusTablet,
		borderRadiusMobile,
		size,
		sizeType,
		sizeMobile,
		sizeTablet,
		bgSize,
		stack,
	} = props.attributes;

	const selectors = {};
	const tabletSelectors = {};
	const mobileSelectors = {};

	selectors[ '.uagb-social-share__layout-vertical .uagb-ss__wrapper' ] = {
		'padding': generateCSSUnit( bgSize, 'px' ),
		'margin-left': 0,
		'margin-right': 0,
		'margin-bottom': generateCSSUnit( gap, 'px' ),
	};
	tabletSelectors[ '.uagb-social-share__layout-vertical .uagb-ss__wrapper' ] = {
		'margin-left': 0,
		'margin-right': 0,
		'margin-bottom': generateCSSUnit( gapTablet, 'px' ),
	};
	mobileSelectors[ '.uagb-social-share__layout-vertical .uagb-ss__wrapper' ] = {
		'margin-left': 0,
		'margin-right': 0,
		'margin-bottom': generateCSSUnit( gapMobile, 'px' ),
	};

	selectors[
		'.uagb-social-share__layout-vertical.uagb-social-share__outer-wrap'
	] = {
		'flex-direction': 'column',
	};

	selectors[ '.uagb-social-share__layout-horizontal .uagb-ss__wrapper' ] = {
		'padding': generateCSSUnit( bgSize, 'px' ),
		'margin-left': generateCSSUnit( gap / 2, 'px' ),
		'margin-right': generateCSSUnit( gap / 2, 'px' ),
	};

	tabletSelectors[ '.uagb-social-share__layout-horizontal .uagb-ss__wrapper' ] = {
		'margin-left': generateCSSUnit( gapTablet / 2, 'px' ),
		'margin-right': generateCSSUnit( gapTablet / 2, 'px' ),
	};
	mobileSelectors[ '.uagb-social-share__layout-horizontal .uagb-ss__wrapper' ] = {
		'margin-left': generateCSSUnit( gapMobile / 2, 'px' ),
		'margin-right': generateCSSUnit( gapMobile / 2, 'px' ),
	};

	selectors[ ' .uagb-ss__wrapper.uagb-ss-repeater ' ] = {
		'border-radius': generateCSSUnit( borderRadius, 'px' ),
	};
	tabletSelectors[ ' .uagb-ss__wrapper.uagb-ss-repeater ' ] = {
		'border-radius': generateCSSUnit( borderRadiusTablet, 'px' ),
	};
	mobileSelectors[ ' .uagb-ss__wrapper.uagb-ss-repeater ' ] = {
		'border-radius': generateCSSUnit( borderRadiusMobile, 'px' ),
	};

	selectors[ ' .uagb-ss__source-image' ] = {
		'width': generateCSSUnit( size, sizeType ),
	};

	selectors[ ' .uagb-ss__source-wrap' ] = {
		'width': generateCSSUnit( size, sizeType ),
	};

	selectors[ ' .uagb-ss__source-wrap svg' ] = {
		'width': generateCSSUnit( size, sizeType ),
		'height': generateCSSUnit( size, sizeType ),
	};

	selectors[ ' .uagb-ss__source-icon' ] = {
		'width': generateCSSUnit( size, sizeType ),
		'height': generateCSSUnit( size, sizeType ),
		'font-size': generateCSSUnit( size, sizeType ),
		'line-height': generateCSSUnit( size, sizeType ),
	};

	let alignment = 'center';
	if ( align === 'left' ){
		alignment = 'flex-start';
	}else if( align === 'right' ){
		alignment = 'flex-end'
	}else{
		alignment = 'center';
	}

	selectors[ '.uagb-social-share__outer-wrap .block-editor-inner-blocks' ] = {
		'text-align': align,
	};
	selectors[ '.uagb-social-share__outer-wrap .block-editor-inner-blocks .block-editor-block-list__layout' ] = {
		'justify-content': alignment,
		'-webkit-box-pack': alignment,
		'-ms-flex-pack': alignment,
		'-webkit-box-align': alignment,
		'-ms-flex-align': alignment,
		'align-items': alignment,
	};
	selectors[
		'.uagb-social-share__outer-wrap'
	] = {
		'justify-content': alignment,
		'-webkit-box-pack': alignment,
		'-ms-flex-pack': alignment,
		'-webkit-box-align': alignment,
		'-ms-flex-align': alignment,
		'align-items': alignment,
	};

	if ( 'horizontal' === social_layout ) {
		if ( 'desktop' === stack ) {
			selectors[
				'.uagb-social-share__layout-horizontal .block-editor-inner-blocks > .block-editor-block-list__layout'
			] = {
				'flex-direction': 'column',
			};

			selectors[ ' .uagb-ss__wrapper' ] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( gap, 'px' ),
			};
			tabletSelectors[ ' .uagb-ss__wrapper' ] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( gapTablet, 'px' ),
			};
			mobileSelectors[ ' .uagb-ss__wrapper' ] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( gapMobile, 'px' ),
			};

			selectors[ '.uagb-social-share__outer-wrap' ] = {
				'flex-direction': 'column',
				'justify-content': alignment,
				'-webkit-box-pack': alignment,
				'-ms-flex-pack': alignment,
				'-webkit-box-align': alignment,
				'-ms-flex-align': alignment,
				'align-items': alignment,
			};
		} else if ( 'tablet' === stack ) {
			tabletSelectors[ ' .uagb-ss__wrapper' ] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( gapTablet, 'px' ),
			};

			tabletSelectors[
				'.uagb-editor-preview-mode-tablet .block-editor-block-list__layout'
			] = {
				'flex-direction': 'column',
			};
			mobileSelectors[
				'.uagb-editor-preview-mode-mobile .block-editor-block-list__layout'
			] = {
				'flex-direction': 'column',
			};
			tabletSelectors[
				'.uagb-social-share__layout-horizontal .uagb-ss__wrapper'
			] = {
				'margin-left': 0,
				'margin-right': 0,
			};
		} else if ( 'mobile' === stack ) {
			mobileSelectors[ ' .uagb-ss__wrapper' ] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( gapMobile, 'px' ),
			};

			mobileSelectors[
				'.uagb-editor-preview-mode-mobile .block-editor-block-list__layout'
			] = {
				'flex-direction': 'column',
			};

			mobileSelectors[
				'.uagb-social-share__layout-horizontal .uagb-ss__wrapper'
			] = {
				'margin-left': 0,
				'margin-right': 0,
			};
		}
	}

	mobileSelectors[ ' .uagb-ss__source-image' ] = {
		'width': generateCSSUnit( sizeMobile, sizeType ),
	};

	mobileSelectors[ ' .uagb-ss__source-wrap' ] = {
		'width': generateCSSUnit( sizeMobile, sizeType ),
		'height': generateCSSUnit( sizeMobile, sizeType ),
		'line-height': generateCSSUnit( sizeMobile, sizeType ),
	};

	mobileSelectors[ ' .uagb-ss__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeMobile, sizeType ),
		'height': generateCSSUnit( sizeMobile, sizeType ),
	};

	mobileSelectors[ ' .uagb-ss__source-icon' ] = {
		'width': generateCSSUnit( sizeMobile, sizeType ),
		'height': generateCSSUnit( sizeMobile, sizeType ),
		'font-size': generateCSSUnit( sizeMobile, sizeType ),
		'line-height': generateCSSUnit( sizeMobile, sizeType ),
	};

	tabletSelectors[ ' .uagb-ss__source-image' ] = {
		'width': generateCSSUnit( sizeTablet, sizeType ),
	};

	tabletSelectors[ ' .uagb-ss__source-wrap' ] = {
		'width': generateCSSUnit( sizeTablet, sizeType ),
		'height': generateCSSUnit( sizeTablet, sizeType ),
		'line-height': generateCSSUnit( sizeTablet, sizeType ),
	};

	tabletSelectors[ ' .uagb-ss__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeTablet, sizeType ),
		'height': generateCSSUnit( sizeTablet, sizeType ),
	};

	tabletSelectors[ ' .uagb-ss__source-icon' ] = {
		'width': generateCSSUnit( sizeTablet, sizeType ),
		'height': generateCSSUnit( sizeTablet, sizeType ),
		'font-size': generateCSSUnit( sizeTablet, sizeType ),
		'line-height': generateCSSUnit( sizeTablet, sizeType ),
	};

	let stylingCss = '';
	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
