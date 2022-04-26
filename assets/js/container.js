UAGBContainer = { // eslint-disable-line no-undef
	init( id ) {
		const rootContainer = document.querySelector( `${id}.uagb-is-root-container` );
		if ( rootContainer ) {
			const rootContainerFullWidth = rootContainer.clientWidth;
			const innerContentCustomWidth = getComputedStyle( rootContainer ).getPropertyValue( '--inner-content-custom-width' ); // eslint-disable-line no-undef

			rootContainer.style.setProperty( '--inner-content-custom-width-final', `min(${rootContainerFullWidth}px,${innerContentCustomWidth})` );
			rootContainer.style.setProperty( '--root-container-full-width', `${rootContainerFullWidth}px` );

			if ( rootContainerFullWidth <= parseInt( innerContentCustomWidth ) ) {
				rootContainer.style.setProperty( 'padding-left', `calc( ( var(--root-container-full-width) - var( --inner-content-custom-width-final ) ) / 2 + var(--padding-left) )` );
				rootContainer.style.setProperty( 'padding-right', `calc( ( var(--root-container-full-width) - var( --inner-content-custom-width-final ) ) / 2 + var(--padding-right) )` );
			} else {
				rootContainer.style.setProperty( 'padding-left', `calc( ( var(--root-container-full-width) - var( --inner-content-custom-width-final ) ) / 2 )` );
				rootContainer.style.setProperty( 'padding-right', `calc( ( var(--root-container-full-width) - var( --inner-content-custom-width-final ) ) / 2 )` );
			}
		}

	},
};
