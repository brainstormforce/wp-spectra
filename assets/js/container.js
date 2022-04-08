UAGBContainer = { // eslint-disable-line no-undef
	init( id ) {
		const rootContainer = document.querySelector( `${id}.uagb-is-root-container` );
		if ( rootContainer ) {
			const rootContainerFullWidth = rootContainer.clientWidth;
			const innerContentCustomWidth = getComputedStyle( rootContainer ).getPropertyValue( '--inner-content-custom-width' ); // eslint-disable-line no-undef
			rootContainer.style.setProperty( '--inner-content-custom-width', `min(${rootContainerFullWidth}px,${innerContentCustomWidth})` );
			rootContainer.style.setProperty( '--root-container-full-width', `${rootContainerFullWidth}px` );
		}

	},
};
