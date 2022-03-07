UAGBCounter = {
	// eslint-disable-line no-undef
	settings: {
		animated: false
	},
	elements: {},
	init(mainSelector, data = {}) {
		this.elements = this.getDefaultElements(mainSelector);
		this.settings = {...this.settings, ...data}
		if(typeof this.elements.counterWrapper !== 'undefined' && this.elements.counterWrapper){
			if(data.layout === 'bars'){
				this._triggerBar();
			} else if(data.layout === 'circle'){
				this._triggerCircle();
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
		const that = this
		const el = this.elements.counterWrapper.querySelector('.uagb-counter-block-number')
		if(typeof el !== 'undefined' && el){
			const countUp = new window.countUp.CountUp(el, that._getEndNumber(that.settings.endNumber), {
				startVal: that._getStartNumber(that.settings.startNumber),
				duration: that.settings.animationDuration
			});
			if (!countUp.error) {
				countUp.start();
			} else {
				console.error(countUp.error);
			}
		}
	},

	_triggerBar(){
		const that = this
		const numberWrap = that.elements.counterWrapper.querySelector( '.wp-block-uagb-counter__number' );
		const duration = that._getAnimationDuration();
		var startWidth = Math.ceil( ( that.settings.startNumber / that.settings.totalNumber ) * 100 );
		var endWidth = Math.ceil( ( that.settings.endNumber / that.settings.totalNumber ) * 100 );

		jQuery(numberWrap).css('width', startWidth + '%').animate({
			width: endWidth + '%'
		}, {
			duration: duration,
			easing: 'linear',
		});
	},

	_triggerCircle(){
		const that = this
		const circleWrap = that.elements.counterWrapper.querySelector( '.wp-block-uagb-counter-circle-container svg #bar' );
		const totalWidth = that.settings.totalNumber;
		const r = 90;
		const circle = Math.PI*(r*2);
		const startPct = ( 1 - ( that.settings.startNumber / totalWidth ) ) * circle;
		const endPct = ( 1 - ( that.settings.endNumber / totalWidth ) ) * circle;
		const duration = that._getAnimationDuration();
		jQuery(circleWrap).css('strokeDashoffset', startPct).animate({
			strokeDashoffset: endPct
		}, {
			duration: duration,
			easing: 'linear',
			complete: function() {

			}
		});
	},

	_getAnimationDuration(){
		const that = this
		const countAbleNumber = that._getEndNumber() - that._getStartNumber()
		return (countAbleNumber * that.settings.animationDuration) * 10
	},

	_getStartNumber(){
		if(this.settings.layout === 'bars' || this.settings.layout === 'circle'){
			return Math.ceil( ( parseInt(this.settings.startNumber) / parseInt(this.settings.totalNumber) ) * 100 );
		}
		return this.settings.startNumber;
	},
	_getEndNumber(){
		if(this.settings.layout === 'bars' || this.settings.layout === 'circle'){
			return Math.ceil( ( parseInt(this.settings.endNumber) / parseInt(this.settings.totalNumber) ) * 100 );
		}
		return this.settings.endNumber;
	}
};
