/**
 * Returns Dynamic Generated Classes
 */

function ContentTmClasses( attributes, deviceType ) {
	/* Arrow position */
	let arrowAlignClass = 'uagb-timeline__arrow-top' + ' ';
	if ( attributes.arrowlinAlignment === 'center' ) {
		arrowAlignClass = 'uagb-timeline__arrow-center' + ' ';
	} else if ( attributes.arrowlinAlignment === 'bottom' ) {
		arrowAlignClass = 'uagb-timeline__arrow-bottom' + ' ';
	}

	const timelinAlignment = 'undefined' !== typeof attributes['timelinAlignment' + deviceType ] ? attributes['timelinAlignment' + deviceType ] : attributes.timelinAlignment;

	/* Alignmnet */
	let alignClass = 'uagb-timeline__center-block ' + ' ';
	if ( timelinAlignment === 'left' ) {
		alignClass = 'uagb-timeline__left-block' + ' ';
	} else if ( timelinAlignment === 'right' ) {
		alignClass = 'uagb-timeline__right-block' + ' ';
	}
	alignClass += arrowAlignClass + '';
	alignClass += ' uagb-timeline';

	return [ alignClass ];
}

export default ContentTmClasses;
