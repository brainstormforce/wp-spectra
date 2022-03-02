UAGBCounter = {
	// eslint-disable-line no-undef
	settings: {
		animated: false
	},
	elements: {},
	init(mainSelector, data = {}) {
		this.elements = this.getDefaultElements(mainSelector);
		if(typeof this.elements.counterWrapper !== 'undefined' && this.elements.counterWrapper){
			if(data.layout === 'bars'){
				this._triggerBar();
			}
			this._initCount();
		}
	},
	getDefaultElements(mainSelector) {
		const counterWrapper = this.getElement(mainSelector);

		return {
			counterWrapper
		};
	},
	getElement(selector, childSelector = null) {
		let domElement = document.querySelector(selector);
		if (domElement) {
			if (childSelector) {
				return domElement.querySelector(childSelector);
			}
		} else {
			const editorCanvas = document.querySelector(
				'iframe[name="editor-canvas"]'
			);
			if (editorCanvas && editorCanvas.contentDocument) {
				domElement = editorCanvas.contentDocument.querySelector(
					selector
				);
				if (childSelector) {
					return (domElement = domElement.querySelector(
						childSelector
					));
				}
			}
		}
		return domElement;
	},

	_initCount(){
		const el = this.elements.counterWrapper.querySelector('.uagb-counter-block-number')
		if(typeof el !== 'undefined' && el){
			this.numberCount( el, {
				duration: 5000,
				delay: 16,
			} )
		}
	},

	_triggerBar(){
		const that = this
		const numberWrap = that.elements.counterWrapper.querySelector( '.wp-block-uagb-counter__number' );
		jQuery(numberWrap).animate({
			width: 100 + '%'
		}, 2000);
	},

	_triggerCircle(){

	},

	numberCount( el, options = {} ){
		const {
			action = 'start',
			duration = 1000,
			delay = 16,
		} = options

		// Allow people to use this as a stop method.
		if ( action === 'stop' ) {
			this.stopNumberCount( el )
			return
		}

		this.stopNumberCount( el )

		const startNumber = el.getAttribute('data-from-value')
		const endNumber = el.getAttribute('data-to-value')

		const nums = this.divideNumbers( endNumber, {
			duration: duration || el.getAttribute( 'data-duration' ),
			delay: delay || el.getAttribute( 'data-delay' ),
		} )

		// Remember the contents.
		el._countUpOrigInnerHTML = el.innerHTML

		// Start counting.
		el.innerHTML = nums[ 0 ] || '&nbsp;' // Use a non-breaking space to prevent layout shift.
		el.style.visibility = 'visible'

		// Function for displaying output with the set time and delay.
		const output = function() {
			el.innerHTML = nums.shift() || '&nbsp;' // Use a non-breaking space to prevent layout shift.
			if ( nums.length ) {
				clearTimeout( el.countUpTimeout )
				el.countUpTimeout = setTimeout( output, delay )
			} else {
				el._countUpOrigInnerHTML = undefined
			}
		}
		el.countUpTimeout = setTimeout( output, delay )
	},
	stopNumberCount (el){
		clearTimeout( el.countUpTimeout )
		if ( el._countUpOrigInnerHTML ) {
			el.innerHTML = el._countUpOrigInnerHTML
			el._countUpOrigInnerHTML = undefined
		}
		el.style.visibility = ''
	},
	divideNumbers( numToDivide, options = {} ) {
		const {
			duration = 1000,
			delay = 16,
		} = options

		// Number of times the number will change.
		const divisions = duration / delay

		// Split numbers and html tags.
		const splitValues = numToDivide.toString().split( /(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/ )

		// Contains all numbers to be displayed.
		const nums = []

		// Set blank strings to ready the split values.
		for ( let k = 0; k < divisions; k++ ) {
			nums.push( '' )
		}

		// Loop through all numbers and html tags.
		for ( let i = 0; i < splitValues.length; i++ ) {
			// If number split it into smaller numbers and insert it to nums.
			if ( /([0-9.][,.0-9]*[0-9]*)/.test( splitValues[ i ] ) && ! /<[^>]+>/.test( splitValues[ i ] ) ) {
				let num = splitValues[ i ]

				// Find all the occurances of . and ,
				const symbols = [ ...num.matchAll( /[.,]/g ) ]
					// Get all the locations of the characters so we can re-place them later on.
					.map( m => ( { char: m[0], i: num.length - m.index - 1 } ) )
					// Make sure we go through the characters from right to left
					.sort( ( a, b ) => a.i - b.i )

				// Remove commas and dots for computation purposes.
				num = num.replace( /[.,]/g, '' )

				// Start adding numbers from the end.
				let k = nums.length - 1

				// Create small numbers we'll the count over.
				for ( let val = divisions; val >= 1; val-- ) {
					let newNum = parseInt( num / divisions * val, 10 )

					// Re-insert the symbols in the indices they were at.
					newNum = symbols.reduce( ( num, { char, i } ) => {
						return num.length <= i ? num // If we don't have enough numbers, don't insert the symbol.
							: num.slice( 0, -i ) + char + num.slice( -i )
					}, newNum.toString() )

					// Insert all small numbers.
					nums[ k-- ] += newNum
				}
			} else {
				// Insert all non-numbers in the same place.
				for ( let k = 0; k < divisions; k++ ) {
					nums[ k ] += splitValues[ i ]
				}
			}
		}

		// The last value of the element should be the original one.
		nums[ nums.length ] = numToDivide.toString()

		return nums
	}

};
