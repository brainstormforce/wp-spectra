/**
 * Returns Dynamic Generated Table of Contents
 */

import getMapping from "./getMapping"

function generateContent( props ) {

	const { attributes, setAttributes, isSelected, className } = props

	const {
		considerH1,
		considerH2,
		considerH3,
		considerH4,
		considerH5,
		considerH6,
		mapping,
	} = attributes

	let matches = mapping
	let headings = {
		1 : ( considerH1 ) ? "1" : false,
		2 : ( considerH2 ) ? "2" : false,
		3 : ( considerH3 ) ? "3" : false,
		4 : ( considerH4 ) ? "4" : false,
		5 : ( considerH5 ) ? "5" : false,
		6 : ( considerH6 ) ? "6" : false
	}
	let current_depth      = 100
	let html               = ""
	let numbered_items     = []
	let numbered_items_min = null


	// find the minimum heading to establish our baseline
	for ( var j = 0; j < matches.length; j ++ ) {
		if ( current_depth > matches[ j ][2] ) {
			current_depth = parseInt(matches[ j ][2])
		}
	}

	numbered_items[ current_depth ] = 0
	numbered_items_min = current_depth

	for ( var i = 0; i < matches.length; i ++ ) {

		if ( headings[ parseInt( matches[ i ][2] ) ] == false ) {
			continue
		}

		if ( current_depth == parseInt( matches[ i ][2] ) ) {

			html += "<li>"
		}

		// Start lists.
		if ( current_depth != parseInt( matches[ i ][2] ) ) {

			for ( current_depth; current_depth < parseInt( matches[ i ][2] ); current_depth++ ) {

				numbered_items[ current_depth + 1 ] = 0
				html += "<ul><li>"
			}
		}


		// List item.
		let text = matches[i][0]
		text = text.replace( "<h" + matches[i][2] + ">", "" )
		text = text.replace( "</h" + matches[i][2] + ">", "" )

		let href_link = UAGBTableOfContents._parse( matches[i] )

		html += "<a href=\"#" + href_link + "\" title=\"" + text + "\">" + text + "</a>"

		// End lists.
		if ( i != matches.length - 1 ) {

			if ( current_depth > parseInt( matches[ i + 1 ][2] ) ) {

				for ( current_depth; current_depth > parseInt( matches[ i + 1 ][2] ); current_depth-- ) {

					html += "</li></ul>"
					numbered_items[ current_depth ] = 0
				}
			}

			if ( current_depth == parseInt( matches[ i + 1 ][2] ) ) {

				html += "</li>"
			}

		} else {

			// this is the last item, make sure we close off all tags
			for ( current_depth; current_depth >= numbered_items_min; current_depth -- ) {

				html += "</li>"

				if ( current_depth != numbered_items_min ) {
					html += "</ul>"
				}
			}
		}
	}

	return html
}

export default generateContent
