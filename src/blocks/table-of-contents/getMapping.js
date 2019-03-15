/**
 * Returns matched heading mapping array
 */

function getMapping( props ) {

	const { attributes, setAttributes, isSelected, className } = props

	const {
		considerH1,
		considerH2,
		considerH3,
		considerH4,
		considerH5,
		considerH6,
	} = attributes

	let this_post = wp.data.select("core/editor").getCurrentPost()
	let content = this_post.content
	let matches = []
	let m
	let headings = {
		1 : ( considerH1 ) ? "1" : false,
		2 : ( considerH2 ) ? "2" : false,
		3 : ( considerH3 ) ? "3" : false,
		4 : ( considerH4 ) ? "4" : false,
		5 : ( considerH5 ) ? "5" : false,
		6 : ( considerH6 ) ? "6" : false
	}
	let html               = ""

	const regex = /(<h([1-6]{1})[^>]*>).*<\/h\2>/gm

	while (( m = regex.exec( content ) ) !== null) {
		// This is necessary to avoid infinite loops with zero-width matches
		if ( m.index === regex.lastIndex ) {
			regex.lastIndex++
		}

		matches.push( m )
	}

	return matches
}

export default getMapping
