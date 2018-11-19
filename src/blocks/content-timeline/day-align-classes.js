/**
 * Function name: DayAlignClass
 * @param array attributes settign array of attributes.
 * @param int index_val  index values.
 */
function DayAlignClass( attributes, index_val ) {

	let day_align_class = ""

	if( "left" == attributes.timelinAlignment ){
		day_align_class = "uagb-timeline__day-new uagb-timeline__day-left"
	}else if( "right" == attributes.timelinAlignment ){
		day_align_class = "uagb-timeline__day-new uagb-timeline__day-right"
	}else if( "center" == attributes.timelinAlignment ){
		if( index_val % 2 == "0" ){
			day_align_class = "uagb-timeline__day-new uagb-timeline__day-right"
		}else{
			day_align_class = "uagb-timeline__day-new uagb-timeline__day-left"
		}
	}

	return [
		day_align_class
	]
}

export default DayAlignClass
