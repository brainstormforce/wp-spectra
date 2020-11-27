/**
 * Function name: AlignClass
 * @param array attributes settign array of attributes.
 * @param int index_val  index values.
 */
function AlignClass( attributes, index_val ) {

	let align_class = ""
	if( "left" == attributes.timelinAlignment ){
		align_class = "uagb-timeline__widget uagb-timeline__left"
	}else if( "right" == attributes.timelinAlignment ){
		align_class = "uagb-timeline__widget uagb-timeline__right"
	}else if( "center" == attributes.timelinAlignment ){
		// for (var i = 1; i <= attributes.counter; i++) {
			if( index_val % 2 == 0 ){
				// console.log("even-"+i)
				align_class = "uagb-timeline__widget uagb-timeline__right"
			}else{
				// console.log("odd-"+i)
				align_class = "uagb-timeline__widget uagb-timeline__left"
			}  
		}
	// }     
        
	return [
		align_class
	]
}

export default AlignClass