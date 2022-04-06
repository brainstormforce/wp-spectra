UAGBContainer = { // eslint-disable-line no-undef
	init( attr, id ) {
		console.log('in init');
		const rootContainer = document.querySelector( `${id}.uagb-is-root-container` );
		if ( rootContainer ) {
			console.log(window.innerWidth);
			const rootContainerFullWidth = rootContainer.clientWidth;
			rootContainer.style.paddingLeft = `calc( ( ${rootContainerFullWidth}px - var( --inner-content-custom-width ) ) / 2 + var( --padding-left ) )`;
			rootContainer.style.paddingRight = `calc( ( ${rootContainerFullWidth}px - var( --inner-content-custom-width ) ) / 2 + var( --padding-right ) )`;
		}

	},
};
