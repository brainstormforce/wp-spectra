import { useEffect, useState, useRef } from '@wordpress/element';
import Select from 'react-select';
import { select } from '@wordpress/data';
import { getIdFromString, getPanelIdFromRef } from '@Utils/Helpers';
import PropTypes from 'prop-types';
import { applyFilters } from '@wordpress/hooks';
import UAGHelpText from '@Components/help-text';

const propTypes = {
	label: PropTypes.string,
	options: PropTypes.array,
	data: PropTypes.object,
	isSearchable: PropTypes.bool,
	setAttributes: PropTypes.func,
	help: PropTypes.string,
};

const defaultProps = {
	label: '',
	options: [],
	data: {
		label: '',
		value: [],
	},
	isSearchable: false,
	setAttributes: () => {},
	help: '',
};

// Styles for the React Select Component.	
const customSelectStyles = {
	container: ( provided ) => ( {
		...provided,
		width: '100%',
		boxSizing: 'content-box',
		padding: '0 1px',
		marginTop: '10px',
	} ),
	control: ( provided ) => ( {
		...provided,
		border: '1px solid #e6e7e9',
		boxShadow: 'none',
		minHeight: '30px',
		borderRadius: '3px',
		alignItems: 'flex-start',
	} ),
	valueContainer: ( provided ) => ( {
		...provided,
		padding: '0px 8px',
		paddingTop: '1px',
	} ),
	input: ( provided ) => ( {
		...provided,
		'height': '30px',
		'padding': 0,
		'margin': 0,
		'input[type="text"]:focus': {
			boxShadow: 'none',
		},
	} ),
	placeholder: ( provided ) => ( {
		...provided,
		color: '#50575e',
		fontSize: '14px',
		margin: 0,
	} ),
	singleValue: ( provided ) => ( {
		...provided,
		color: '#50575e',
		top: '50%',
		transform: 'translateY(-50%);',
	} ),
	multiValue: ( provided ) => ( {
		...provided,
		position: 'relative',
		left: '-6px',
	} ),
	multiValueLabel: ( provided ) => ( {
		...provided,
		backgroundColor: '#e6e7e9',
		color: '#50575e',
	} ),
	multiValueRemove: ( provided ) => ( {
		...provided,
		'cursor': 'pointer',
		'&:hover': {
			backgroundColor: '#e6e7e9',
			svg: {
				fill: '#dc2626',
			},
		},
	} ),
	indicatorsContainer: ( provided ) => ( {
		...provided,
		height: '30px',
	} ),
	indicatorSeparator: ( provided ) => ( {
		...provided,
		display: 'none',
	} ),
	dropdownIndicator: ( provided ) => ( {
		...provided,
		color: '#50575e',
		padding: '0 6px',
	} ),
	menu: ( provided ) => ( {
		...provided,
		color: '#50575e',
		zIndex: 9999999,
	} ),
	menuPortal: ( provided ) => ( {
		...provided,
		zIndex: 9999999,
	} ),

}

export default function UAGMultiSelectControl( props ) {
	const {
		label,
		options,
		data,
		isSearchable,
		setAttributes,
		help,
	} = props;
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

	const allOptionsFlat = allOptions.reduce( ( accumulator, currentItem ) => {
		return [ ...accumulator, ...( currentItem?.options || [ currentItem ] ) ]
	}, [] );

	return (
		<div ref={ panelRef } className="spectra-multi-select-control components-base-control">
			{ controlBeforeDomElement }
			<Select
				styles={customSelectStyles}
				options={ allOptions }
				defaultValue={ allOptionsFlat.filter( ( item ) => data.value.includes( item.value ) ) }
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
				isSearchable={ isSearchable }
				isMulti
			/>
			{ controlAfterDomElement }
			{ help && <UAGHelpText text={ help } />}
		</div>
	);
}

UAGMultiSelectControl.propTypes = propTypes;
UAGMultiSelectControl.defaultProps = defaultProps;
