UAGBContainer = { // eslint-disable-line no-undef
	init( id ) {
		const rootContainer = document.querySelector( `${id}.uagb-is-root-container` );
		if ( rootContainer ) {
			const rootContainerFullWidth = rootContainer.clientWidth;
			rootContainer.style.paddingLeft = `calc( ( ${rootContainerFullWidth}px - var( --inner-content-custom-width ) ) / 2 + var( --padding-left ) )`;
			rootContainer.style.paddingRight = `calc( ( ${rootContainerFullWidth}px - var( --inner-content-custom-width ) ) / 2 + var( --padding-right ) )`;
		}

	},
};
