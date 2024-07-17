/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';

function styling( attributes ) {
	const { icon_color, icon_hover_color, icon_bg_color, icon_bg_hover_color, block_id } = attributes;

	const selectors = {
		'.uagb-ss-repeater span.uagb-ss__link': {
			'color': icon_color,
		},
		'.uagb-ss-repeater span.uagb-ss__link svg': {
			'fill': icon_color,
		},
		'.uagb-ss-repeater:hover span.uagb-ss__link': {
			'color': icon_hover_color,
		},
		'.uagb-ss-repeater:hover span.uagb-ss__link svg': {
			'fill': icon_hover_color,
		},
		'.uagb-ss-repeater.uagb-ss__wrapper': {
			'background': icon_bg_color,
		},
		'.uagb-ss-repeater.uagb-ss__wrapper:hover': {
			'background': icon_bg_hover_color,
		},
	};

	let stylingCss = '';
	const id = `.uagb-block-${ block_id }`;

	stylingCss = generateCSS( selectors, id );

	return stylingCss;
}

export default styling;
