/**
 * External dependencies
 */
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';

const Separator = ( { topMargin = true, bottomMargin = true } ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	return <div className={ `spectra-separator${ topMargin && ' spectra-separator__margin--top ' }${ bottomMargin && ' spectra-separator__margin--bottom' }` } />;
};

export default Separator;
