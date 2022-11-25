/**
 * External dependencies
 */
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	disabledTopSpace: PropTypes.bool
};

const defaultProps = {
	disabledTopSpace: false
};
export default function Separator ( { disabledTopSpace } ) {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	return <div className={`spectra-separator ${disabledTopSpace ? 'spectra-separator--removed-top-space' : ''}`} />;
};

Separator.propTypes = propTypes;
Separator.defaultProps = defaultProps;
