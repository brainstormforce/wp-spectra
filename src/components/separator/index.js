/**
 * External dependencies
 */
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { select } from '@wordpress/data';
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

	const { getSelectedBlock } = select( 'core/block-editor' );
	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	const controlName = 'separator'; // there is no label props that's why keep hard coded label
	const controlBeforeDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.separator.${controlName}.before`, '', blockNameForHook );
	const controlAfterDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.separator.${controlName}`, '', blockNameForHook );
	return (
		<>
			{
				controlBeforeDomElement
			}
			<div className={`spectra-separator ${disabledTopSpace ? 'spectra-separator--removed-top-space' : ''}`} />
			{
				controlAfterDomElement
			}
		</>
	);
};

Separator.propTypes = propTypes;
Separator.defaultProps = defaultProps;
