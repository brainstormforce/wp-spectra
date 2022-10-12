
window.UAGBModal = {
    elements: {},
	init( mainSelector ) {

		this.elements = this.getDefaultElements( mainSelector );
        console.log( "===============================================" );

        if( typeof this.elements.modalWrapper !== 'undefined' && this.elements.modalWrapper ) {
			console.log( modalWrapper );
		}

	},
    getDefaultElements( mainSelector ) {
		const modalWrapper = this.getElement( mainSelector );
		return {
			modalWrapper
		};
	},
};