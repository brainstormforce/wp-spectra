UAGBCounter = {
	// eslint-disable-line no-undef
	elements: {},
	init(mainSelector, data = {}) {
		this.elements = this.getDefaultElements(mainSelector);
		if(typeof this.elements.counterWrapper !== 'undefined' && this.elements.counterWrapper){
			const numberCount = this._numberCount(data);
			this._inViewInit(numberCount, data);
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

	_inViewInit(countUp, data){
		const that = this
		const callback = entries => {
			entries.forEach( entry => {
				const el = entry.target
				if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
					if (!countUp.error) {
						if(data.layout === 'bars'){
							that._triggerBar(el, data);
						} else if(data.layout === 'circle'){
							that._triggerCircle(el, data);
						}
						countUp.start();
					} else {
						console.error(countUp.error);
					}
					el.classList.add( 'is-visible' )
				}
			} )
		}
		const IO = new IntersectionObserver( callback, { threshold: 1 } )
		IO.observe( that.elements.counterWrapper )
	},
	_numberCount(data){
		const that = this
		const el = this.elements.counterWrapper.querySelector('.uagb-counter-block-number')
		if(typeof el !== 'undefined' && el){
			const countUp = new window.countUp.CountUp(el, that._getEndNumber(data), {
				startVal: that._getStartNumber(data),
				duration: data.animationDuration
			});
			return countUp;
		}
	},

	_triggerBar(el, data){
		const that = this
		const numberWrap = el.querySelector( '.wp-block-uagb-counter__number' );
		const duration = that._getAnimationDuration(data);
		var startWidth = Math.ceil( ( data.startNumber / data.totalNumber ) * 100 );
		var endWidth = Math.ceil( ( data.endNumber / data.totalNumber ) * 100 );
		jQuery(numberWrap).css('width', startWidth + '%').animate({
			width: endWidth + '%'
		}, {
			duration: duration,
			easing: 'linear',
		});
	},

	_triggerCircle(el, data){
		const that = this
		const circleWrap = el.querySelector( '.wp-block-uagb-counter-circle-container svg #bar' );
		const totalWidth = data.totalNumber;
		const r = 90;
		const circle = Math.PI*(r*2);
		const startPct = ( 1 - ( data.startNumber / totalWidth ) ) * circle;
		const endPct = ( 1 - ( data.endNumber / totalWidth ) ) * circle;
		const duration = that._getAnimationDuration(data);
		jQuery(circleWrap).css('strokeDashoffset', startPct).animate({
			strokeDashoffset: endPct
		}, {
			duration: duration,
			easing: 'linear',
			complete: function() {

			}
		});
	},

	_getAnimationDuration(data){
		const that = this
		const countAbleNumber = that._getEndNumber(data) - that._getStartNumber(data)
		return (countAbleNumber * data.animationDuration) * 10
	},

	_getStartNumber(data){
		if(data.layout === 'bars' || data.layout === 'circle'){
			return Math.ceil( ( parseInt(data.startNumber) / parseInt(data.totalNumber) ) * 100 );
		}
		return data.startNumber;
	},
	_getEndNumber(data){
		if(data.layout === 'bars' || data.layout === 'circle'){
			return Math.ceil( ( parseInt(data.endNumber) / parseInt(data.totalNumber) ) * 100 );
		}
		return data.endNumber;
	}
};
