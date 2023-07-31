/**
 * Returns Dynamic Generated CSS
 */
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( attributes, name, deviceType ) {
	const blockName = name.replace( 'uagb/', '' );
	const previewType = deviceType.toLowerCase();
	const { block_id, height, heightTablet, heightMobile } = attributes;

	const heightFallback = getFallbackNumber( height, 'height', blockName );
	const heightTabletFallback = getFallbackNumber( heightTablet, 'heightTablet', blockName );
	const heightMobileFallback = getFallbackNumber( heightMobile, 'heightMobile', blockName );

	let tabletSelectors = {};
	let mobileSelectors = {};

	const selectors = {
		' .uagb-google-map__iframe': {
			'height': generateCSSUnit( heightFallback, 'px' ),
		},
	};

	tabletSelectors = {
		' .uagb-google-map__iframe': {
			'height': generateCSSUnit( heightTabletFallback, 'px' ),
		},
	};

	mobileSelectors = {
		' .uagb-google-map__iframe': {
			'height': generateCSSUnit( heightMobileFallback, 'px' ),
		},
	};

	const baseSelector = `.editor-styles-wrapper .uagb-block-${ block_id }`;

	let stylingCss = generateCSS( selectors, baseSelector );

	if( 'tablet' === previewType || 'mobile' === previewType ) {
		stylingCss += generateCSS(
			tabletSelectors,
			`${ baseSelector }`,
			true,
			'tablet'
		);

		if( 'mobile' === previewType ){
			stylingCss += generateCSS(
				mobileSelectors,
				`${ baseSelector }`,
				true,
				'mobile'
			);
		}
	}
	return stylingCss;
}

export default styling;
