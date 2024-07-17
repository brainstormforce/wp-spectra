import { useLayoutEffect, useEffect, useState, useRef } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
import { select } from '@wordpress/data';
import styles from './editor.lazy.scss';
import { getIdFromString, getPanelIdFromRef } from '@Utils/Helpers';
import PropTypes from 'prop-types';
import { applyFilters } from '@wordpress/hooks';
// Use the onChange prop only if needed.
// When using the onChange prop, you may skip the label KV-Pair of the data prop and the setAttributes prop.
// Children can now be declared as Options or OptGroups, as in the WP Select Control. Skip the options prop in this case.

const propTypes = {
	label: PropTypes.string,
	layout: PropTypes.string,
	options: PropTypes.array,
	data: PropTypes.object,
	setAttributes: PropTypes.func,
	onChange: PropTypes.func,
	help: PropTypes.string,
};

const defaultProps = {
	layout: 'inline',
	onChange: null,
};

export default function UAGSelectControl( { layout, label, options, data, setAttributes, onChange, help, children } ) {
	const [ panelNameForHook, setPanelNameForHook ] = useState( null );
	const panelRef = useRef( null );

	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { getSelectedBlock } = select( 'core/block-editor' );
	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) );
	}, [ blockNameForHook ] );

	const controlName = getIdFromString( label );

	// Filter for the control that should appear before this control.
	const controlBeforeDomElement = applyFilters(
		`spectra.${ blockNameForHook }.${ panelNameForHook }.${ controlName }.before`,
		'',
		blockNameForHook
	);

	// Filter for the control that should appear after this control.
	const controlAfterDomElement = applyFilters(
		`spectra.${ blockNameForHook }.${ panelNameForHook }.${ controlName }`,
		'',
		blockNameForHook
	);

	// Filter for all the options of this control.
	const allOptions = applyFilters(
		`spectra.${ blockNameForHook }.${ panelNameForHook }.${ controlName }.options`,
		options,
		blockNameForHook
	);

	// Filter for all the children of this control.
	const allChildren = applyFilters(
		`spectra.${ blockNameForHook }.${ panelNameForHook }.${ controlName }.children`,
		children,
		blockNameForHook
	);

	return (
		<div ref={ panelRef } className={ `uagb-select-control uagb-select-control--layout-${ layout }` }>
			{ controlBeforeDomElement }
			{ children ? (
				<SelectControl
					label={ label }
					value={ data.value }
					onChange={ ( value ) =>
						onChange ? onChange( value ) : setAttributes( { [ data.label ]: value } )
					}
					help={ help }
				>
					{ allChildren }
				</SelectControl>
			) : (
				<SelectControl
					label={ label }
					value={ data.value }
					onChange={ ( value ) =>
						onChange ? onChange( value ) : setAttributes( { [ data.label ]: value } )
					}
					options={ allOptions }
					help={ help }
				/>
			) }
			{ controlAfterDomElement }
		</div>
	);
}

UAGSelectControl.propTypes = propTypes;
UAGSelectControl.defaultProps = defaultProps;
