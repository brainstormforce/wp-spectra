/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';

function styling( attributes, clientId ) {
	const {
		width,
		widthTablet,
		widthMob,
		height,
		heightTablet,
		heightMob,
		backgroundColor,
		backgroundHColor,
	} = attributes;

	const widthFallback = isNaN( width ) ? 'auto' : `${ width }px`;
	const heightFallback = isNaN( height ) ? 'auto' : `${ height }px`;

	const widthTabletFallback = isNaN( widthTablet ) ? widthFallback : `${ widthTablet }px`;
	const widthMobFallback = isNaN( widthMob ) ? widthTabletFallback : `${ widthMob }px`;
	const heightTabletFallback = isNaN( heightTablet ) ? heightFallback : `${ heightTablet }px`;
	const heightMobFallback = isNaN( heightMob ) ? heightTabletFallback : `${ heightMob }px`;

	const selectors = {
		'.uagb-lottie__outer-wrap': {
			'width': widthFallback,
			'height': heightFallback,
			'background': backgroundColor,
		},
		'.uagb-lottie__outer-wrap:hover': {
			'background': backgroundHColor,
		},
		' .lf-player-container #lottie': {
			'height': heightFallback,
		},
	};

	const tablet_selectors = {
		'.uagb-lottie__outer-wrap': {
			'width': widthTabletFallback,
			'height': heightTabletFallback,
		},
		' .lf-player-container #lottie': {
			'height': heightTabletFallback,
		},
	};

	const mobile_selectors = {
		'.uagb-lottie__outer-wrap': {
			'width': widthMobFallback,
			'height': heightMobFallback,
		},
		' .lf-player-container #lottie': {
			'height': heightMobFallback,
		},
	};

	const base_selector = `.editor-styles-wrapper .uagb-block-${ clientId.substr( 0, 8 ) }`;

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS( tablet_selectors, `${ base_selector }`, true, 'tablet' );

	styling_css += generateCSS( mobile_selectors, `${ base_selector }`, true, 'mobile' );

	return styling_css;
}

export default styling;
