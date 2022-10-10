UAGBCounter = { // eslint-disable-line no-undef
	elements: {},
	init( mainSelector, data = {} ) {
		this.elements = this.getDefaultElements( mainSelector );
		if( !data.isFrontend ){
			this.elements.counterWrapper.removeAttribute( 'played' );
		}
		if( typeof this.elements.counterWrapper !== 'undefined' && this.elements.counterWrapper ){
			const numberCount = this._numberCount( data );
			this._inViewInit( numberCount, data );
		}
	},
	getDefaultElements( mainSelector ) {
		const counterWrapper = this.getElement( mainSelector );
		return {
			counterWrapper
		};
	},
	getElement( selector, childSelector = null ) {
		let domElement = document.querySelector( selector );
		if ( domElement ) {
			if ( childSelector ) {
				return domElement.querySelector( childSelector );
			}
		} else {
			const editorCanvas = document.querySelector(
				'iframe[name="editor-canvas"]'
			);
			if ( editorCanvas && editorCanvas.contentDocument ) {
				domElement = editorCanvas.contentDocument.querySelector(
					selector
				);
				if ( childSelector ) {
					return ( domElement = domElement.querySelector(
						childSelector
					) );
				}
			}
		}
		return domElement;
	},

	_inViewInit( countUp, data ){
		const that = this
		const callback = entries => {
			entries.forEach( entry => {
				const el = entry.target
				const hasPlayed = el.hasAttribute( 'played' );  // Check if an animation has played; If played already, do mot re-trigger it.
				// entry.isIntersecting && ! el.classList.contains( 'is-visible' )
				if ( entry.isIntersecting && !hasPlayed ) {
					if ( !countUp.error ) {
						if( data.layout === 'bars' ){
							that._triggerBar( el, data );
						} else if( data.layout === 'circle' ){
							that._triggerCircle( el, data );
						}
						countUp.start();
					} else {
						console.error( countUp.error ); // eslint-disable-line no-console
					}
					// el.classList.add( 'is-visible' )
				}
			} )
		}
		const IO = new IntersectionObserver( callback, { threshold: 1 } ) // eslint-disable-line no-undef
		IO.observe( that.elements.counterWrapper )
	},
	_numberCount( data ){
		const that = this
		const el = this.elements.counterWrapper.querySelector( '.uagb-counter-block-number' )
		if( typeof el !== 'undefined' && el ){
			const countUp = new window.countUp.CountUp( el, that._getEndNumber( data ), {
				startVal: that._getStartNumber( data ),
				duration: data.animationDuration,
				separator: data.thousandSeparator,
				useEasing: false,
				decimalPlaces: data.decimalPlaces,
			} );
			return countUp;
		}
	},

	_triggerBar( el, data ){
		const that = this
		const parentWrapClass = 'wp-block-uagb-counter--bars';
		const numberWrap = el.querySelector( '.wp-block-uagb-counter__number' );
		const duration = that._getAnimationDuration( data );
		const startWidth = data.startNumber < data.totalNumber ? Math.ceil( ( data.startNumber / data.totalNumber ) * 100 ) : 0;
		const endWidth = data.endNumber < data.totalNumber ? Math.ceil( ( data.endNumber / data.totalNumber ) * 100 ) : 100;

		const animationKeyframes = [
			{ width: startWidth + '%' },
			{ width: endWidth + '%' },
		];

		const animationProperties = {
			duration,
			fill: 'forwards',
		};

		// Condition to prevent an edge case bug where number layout gets animated like bar layout.
		if( el.classList.contains( parentWrapClass ) ){
			numberWrap.animate( animationKeyframes, animationProperties );
		}

		el.setAttribute( 'played', true );  // Set: animation has played once.

	},

	_triggerCircle( el, data ){
		const that = this
		const circleWrap = el.querySelector( '.wp-block-uagb-counter-circle-container svg #bar' );

		const diameter = data.circleSize - 20;
		const circumference = Math.PI * diameter;
		const totalNumber = data.totalNumber;
		
		let startPoint = 100 * ( data.startNumber / totalNumber );
		startPoint = ( startPoint < 100 ) ? startPoint : 100;
		startPoint = 100 - startPoint;
		startPoint = ( startPoint / 100 ) * circumference;

		let endPoint = 100 * ( data.endNumber / totalNumber );
		endPoint = ( endPoint < 100 ) ? endPoint : 100;
		endPoint = 100 - endPoint;
		endPoint = ( endPoint / 100 ) * circumference;

		const duration = that._getAnimationDuration( data );

		const animationKeyframes = [
			{ strokeDashoffset: startPoint + 'px' },
			{ strokeDashoffset: endPoint + 'px' },
		];

		const animationProperties = {
			duration,
			fill: 'forwards',
		};

		circleWrap.animate( animationKeyframes, animationProperties );

		el.setAttribute( 'played', true );  // Set: animation has played once.

	},

	_getAnimationDuration( data ){
		return data.animationDuration * 1000
	},

	_getStartNumber( data ){
		if( data.layout === 'bars' || data.layout === 'circle' ){
			return ( ( parseFloat( data.startNumber ) / parseFloat( data.totalNumber ) ) * 100 );
		}
		return data.startNumber;
	},
	_getEndNumber( data ){
		if( data.layout === 'bars' || data.layout === 'circle' ){
			return ( ( parseFloat( data.endNumber ) / parseFloat( data.totalNumber ) ) * 100 );
		}
		return data.endNumber;
	}
};
