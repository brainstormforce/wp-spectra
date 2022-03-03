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
		const el = this.elements.counterWrapper.querySelector('.uagb-counter-block-number')
		if(typeof el !== 'undefined' && el){
			const countUp = new window.countUp.CountUp(el, 5234);
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
		jQuery(numberWrap).animate({
			width: 100 + '%'
		}, 2000);
	},

	_triggerCircle(){
		const that = this
		const circleWrap = that.elements.counterWrapper.querySelector( '.wp-block-uagb-counter-circle-container svg #bar' );
		var val = 30;
		var r = 90;
		var c = Math.PI*(r*2);

		if (val < 0) { val = 0;}
		if (val > 100) { val = 100;}

		var pct = ((100-val)/100)*c;

		jQuery(circleWrap).animate({
			strokeDashoffset: pct
		}, {
			duration: 2000,
			easing: 'swing',
			complete: function() {

			}
		});
	},




};
