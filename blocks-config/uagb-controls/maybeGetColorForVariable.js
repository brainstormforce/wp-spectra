const maybeGetColorForVariable = ( color ) => {
		
    if ( color && color.includes( 'var' ) ) {
        
        const style = window.getComputedStyle( document.body )
        color = color.slice( 4 ).slice( 0, -1 );
        color = style.getPropertyValue( color ).trim();
    }
    return color;
}

export default maybeGetColorForVariable;