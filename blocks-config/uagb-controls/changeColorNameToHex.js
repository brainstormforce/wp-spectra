function colourNameToHex( colour ) {
	const colours = {'black': '#000000','cyan-bluish-gray':'#abb8c3', 'white':'#ffffff', 'pale-pink':'#f78da7',
			'luminous-vivid-orange':'#ff6900','luminous-vivid-amber':'#fcb900','light-green-cyan':'#7bdcb5','vivid-green-cyan':'#00d084',
			'pale-cyan-blue': '#8ed1fc','vivid-cyan-blue': '#0693e3','vivid-purple': '#9b51e0'}

		if ( typeof colours[colour?.toLowerCase()] !== 'undefined' ){
			return colours[colour?.toLowerCase()];
		}

    return false;
}
export default colourNameToHex
