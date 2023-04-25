import { useEffect, useState, useRef } from '@wordpress/element';
import Select from 'react-select';
import { select } from '@wordpress/data';
import { getIdFromString, getPanelIdFromRef } from '@Utils/Helpers';
import PropTypes from 'prop-types';
import { applyFilters } from '@wordpress/hooks';

const propTypes = {
	label: PropTypes.string,
	options: PropTypes.array,
	data: PropTypes.object,
	setAttributes: PropTypes.func,
};

const defaultProps = {
	label: '',
	options: [],
	data: {
		label: '',
		value: [],
	},
	setAttributes: () => {},
};

export default function UAGMultiSelectControl( { label, options, data, setAttributes } ) {
	const [ panelNameForHook, setPanelNameForHook ] = useState( null );
	const panelRef = useRef( null );
	const { getSelectedBlock } = select( 'core/block-editor' );
	const selectedBlock = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) );
	}, [ selectedBlock ] );

	const controlName = getIdFromString( label );
	const controlBeforeDomElement = applyFilters(
		`spectra.${ selectedBlock }.${ panelNameForHook }.${ controlName }.before`,
		'',
		selectedBlock
	);
	const controlAfterDomElement = applyFilters(
		`spectra.${ selectedBlock }.${ panelNameForHook }.${ controlName }`,
		'',
		selectedBlock
	);
	const allOptions = applyFilters(
		`spectra.${ selectedBlock }.${ panelNameForHook }.${ controlName }.options`,
		options,
		selectedBlock
	);

	return (
		<div ref={ panelRef } className="components-base-control">
			{ controlBeforeDomElement }
			<Select
				options={ allOptions }
				defaultValue={ allOptions.filter( ( item ) => data.value.includes( item.value ) ) }
				onChange={ ( option ) =>
					setAttributes( {
						[ data.label ]: option.reduce( ( acc, current ) => {
							acc.push( current.value );
							return acc;
						}, [] ),
					} )
				}
				classNamePrefix={ 'spectra-multi-select' }
				className={ 'spectra-multi-select' }
				isMulti
			/>
			{ controlAfterDomElement }
		</div>
	);
}

UAGMultiSelectControl.propTypes = propTypes;
UAGMultiSelectControl.defaultProps = defaultProps;
