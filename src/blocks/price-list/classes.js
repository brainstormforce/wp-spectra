/**
 * Returns Dynamic Generated Classes
 */

import { getFallbackNumber } from '@Controls/getAttributeFallback';
function PositionClasses( attributes, name = 'uagb/restaurant-menu' ) {
	const { columns, tcolumns, mcolumns } = attributes;

	let iconimgStyleClass = '';
	let imgeCount = 0;
	const image = attributes.image;

	if ( typeof attributes.rest_menu_item_arr !== 'undefined' ) {
		// eslint-disable-next-line  array-callback-return
		attributes.rest_menu_item_arr.map( ( item ) => {
			const image_arr = item.image;
			if ( image_arr && typeof image_arr !== 'undefined' ) {
				imgeCount++;
			}
		} );
	}

	if ( typeof image !== 'undefined' && image !== null && image !== '' ) {
		imgeCount++;
	}

	if ( imgeCount > 0 ) {
		iconimgStyleClass += 'uagb-rm__image-position-' + attributes.imagePosition + ' ';
	}

	iconimgStyleClass += ' uagb-rm__align-' + attributes.headingAlign + ' ';

	if ( 'left' === attributes.imagePosition || 'right' === attributes.imagePosition ) {
		iconimgStyleClass += 'uagb-rm__image-aligned-' + attributes.imageAlignment + ' ';
		if ( attributes.stack !== 'none' ) {
			iconimgStyleClass += 'uagb-rm-stacked-' + attributes.stack + ' ';
			if ( attributes.imagePosition === 'right' ) {
				iconimgStyleClass += 'uagb-rm-reverse-order-' + attributes.stack + ' ';
			}
		}
	}
	const blockName = name.replace( 'uagb/', '' );

	const columnsFallback = getFallbackNumber( columns, 'columns', blockName );
	const tcolumnsFallback = getFallbackNumber( tcolumns, 'tcolumns', blockName );
	const mcolumnsFallback = getFallbackNumber( mcolumns, 'mcolumns', blockName );

	iconimgStyleClass += 'uagb-rm__desk-column-' + columnsFallback + ' ';
	iconimgStyleClass += 'uagb-rm__tablet-column-' + tcolumnsFallback + ' ';
	iconimgStyleClass += 'uagb-rm__mobile-column-' + mcolumnsFallback + ' ';

	return [ iconimgStyleClass ];
}

export default PositionClasses;
