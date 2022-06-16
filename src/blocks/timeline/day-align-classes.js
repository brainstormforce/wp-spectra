/**
 * Returns Dynamic Generated Classes
 */

function DayAlignClass( attributes, index_val, deviceType ) {
	let dayAlignClass = '';

	const timelinAlignment = 'undefined' !== typeof deviceType ? attributes['timelinAlignment' + deviceType ] : attributes.timelinAlignment;

	if ( 'left' === timelinAlignment ) {
		dayAlignClass = 'uagb-timeline__day-new uagb-timeline__day-left';
	} else if ( 'right' === timelinAlignment ) {
		dayAlignClass = 'uagb-timeline__day-new uagb-timeline__day-right';
	} else if ( 'center' === timelinAlignment ) {
		if ( index_val % 2 === 0 ) { 
			dayAlignClass = 'uagb-timeline__day-new uagb-timeline__day-right';
		} else {
			dayAlignClass = 'uagb-timeline__day-new uagb-timeline__day-left';
		}
	}

	return [ dayAlignClass ];
}

export default DayAlignClass;
