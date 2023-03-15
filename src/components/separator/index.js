/**
 * External dependencies
 */
import styles from './editor.lazy.scss';
import { useLayoutEffect, useEffect, useState, useRef } from '@wordpress/element';
import { getPanelIdFromRef } from '@Utils/Helpers';
import { select } from '@wordpress/data';
import PropTypes from 'prop-types';
import { applyFilters } from '@wordpress/hooks';

const propTypes = {
	disabledTopSpace: PropTypes.bool
};

const defaultProps = {
	disabledTopSpace: false
};
export default function Separator ( { disabledTopSpace } ) {
	const [panelNameForHook, setPanelNameForHook] = useState( null );
	const panelRef = useRef( null );
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { getSelectedBlock } = select( 'core/block-editor' );
	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) )
	}, [blockNameForHook] )

	const controlName = 'separator'; // there is no label props that's why keep hard coded label
	const controlBeforeDomElement = applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}.before`, '', blockNameForHook );
	const controlAfterDomElement = applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}`, '', blockNameForHook );
	return (
		<div
			ref={panelRef}

		>
			{
				controlBeforeDomElement
			}
			<div className={`spectra-separator ${disabledTopSpace ? 'spectra-separator--removed-top-space' : ''}`} />
			{
				controlAfterDomElement
			}
		</div>
	);
};

Separator.propTypes = propTypes;
Separator.defaultProps = defaultProps;
