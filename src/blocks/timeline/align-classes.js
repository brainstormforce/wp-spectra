/**
 * Function name: AlignClass
 *
 * @param {Object[]} attributes settign array of attributes.
 * @param {number} index_val  index values.
 */
function AlignClass( attributes, index_val ) {
	let alignClass = '';
	if ( 'left' === attributes.timelinAlignment ) {
		alignClass = 'uagb-timeline__left';
	} else if ( 'right' === attributes.timelinAlignment ) {
		alignClass = 'uagb-timeline__right';
	} else if ( 'center' === attributes.timelinAlignment ) {
		if ( index_val % 2 === 0 ) {
			alignClass = 'uagb-timeline__right';
		} else {
			alignClass = 'uagb-timeline__left';
		}
	}

	return [ alignClass ];
}

export default AlignClass;
