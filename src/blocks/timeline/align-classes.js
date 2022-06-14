/**
 * Function name: AlignClass
 *
 * @param {Object[]} attributes settign array of attributes.
 * @param {number} index_val  index values.
 * @param deviceType
 */
 function AlignClass( attributes, index_val, deviceType ) {
	let alignClass = '';

	const timelinAlignment = 'undefined' !== deviceType ? attributes['timelinAlignment' + deviceType ] : attributes.timelinAlignment;

	if ( 'left' === timelinAlignment ) {
		alignClass = 'uagb-timeline__left';
	} else if ( 'right' === timelinAlignment ) {
		alignClass = 'uagb-timeline__right';
	} else if ( 'center' === timelinAlignment ) {
		if ( index_val % 2 === 0 ) {
			alignClass = 'uagb-timeline__right';
		} else {
			alignClass = 'uagb-timeline__left';
		}
	}

	return [ alignClass ];
}

export default AlignClass;
