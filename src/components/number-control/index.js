import { ButtonGroup, Button, Tooltip, __experimentalNumberControl as NumberControl } from '@wordpress/components';
import ResponsiveToggle from '../responsive-toggle';
import { __, sprintf } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { useLayoutEffect, useEffect, useState, useRef } from '@wordpress/element';
import { limitMax, limitMin } from '@Controls/unitWiseMinMaxOption';
import classnames from 'classnames';
import { select, useSelect } from '@wordpress/data';
import { getIdFromString, getPanelIdFromRef } from '@Utils/Helpers';
import UAGReset from '../reset';
import Separator from '@Components/separator';
import { applyFilters } from '@wordpress/hooks';
import UAGHelpText from '@Components/help-text';

const UAGNumberControl = ( props ) => {
	const [ panelNameForHook, setPanelNameForHook ] = useState( null );
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
		setPanelNameForHook( getPanelIdFromRef( panelRef ) );
	}, [ blockNameForHook ] );

	// Get selected block's data.
	const selectedBlock = useSelect( () => {
		return select( 'core/block-editor' ).getSelectedBlock();
	}, [] );

	// If Dynamic Content prop is enabled and the name (attribute name) is set, we retrieve the controls for the dynamic content feature. 
	const registerTextExtender = props.enableDynamicContent && props.name ? wp.hooks.applyFilters( 'uagb.registerTextExtender', '', selectedBlock?.name, props.name, props.dynamicContentType ) : null;

	const isEnableDynamicContent = () => {
		if( !props.enableDynamicContent || ! props.name ){
			return false;
		}
		const dynamicContent = selectedBlock?.attributes?.dynamicContent
		if( dynamicContent && dynamicContent?.[props.name]?.enable === true ) {
			return true
		}
		return false;
	}

	const { isShiftStepEnabled } = props;

	let max = limitMax( props.unit?.value, props );
	let min = limitMin( props.unit?.value, props );
	const inputValue = isNaN( props?.value ) ? '' : props?.value;

	let unitSizes = [
		{
			name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
			unitValue: 'px',
		},
		{
			name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
			unitValue: 'em',
		},
	];

	if ( props.units ) {
		unitSizes = props.units;
	}

	const handleOnChange = ( newValue ) => {
		const parsedValue = parseFloat( newValue );
		if ( props.setAttributes ) {
			props.setAttributes( {
				[ props.data.label ]: parsedValue,
			} );
		}
		if ( props?.onChange ) {
			props.onChange( parsedValue );
		}
	};

	const resetValues = ( defaultValues ) => {
		if ( props?.onChange ) {
			props?.onChange( defaultValues[ props?.data?.label ] );
		}
		if ( props.displayUnit ) {
			onChangeUnits( defaultValues[ props?.unit?.label ] );
		}
	};

	const onChangeUnits = ( newValue ) => {
		props.setAttributes( { [ props.unit.label ]: newValue } );

		max = limitMax( newValue, props );
		min = limitMin( newValue, props );

		if ( props.value > max ) {
			handleOnChange( max );
		}
		if ( props.value < min ) {
			handleOnChange( min );
		}
	};

	const onUnitSizeClick = ( uSizes ) => {
		const items = [];
		uSizes.map( ( key ) =>
			items.push(
				<Tooltip
					text={ sprintf(
						/* translators: abbreviation for units */
						__( '%s units', 'ultimate-addons-for-gutenberg' ),
						key.name
					) }
					key={ key.name }
				>
					<Button
						key={ key.unitValue }
						className={ 'uagb-number-control__units--' + key.name }
						isSmall
						isPrimary={ props.unit.value === key.unitValue }
						isSecondary={ props.unit.value !== key.unitValue }
						aria-pressed={ props.unit.value === key.unitValue }
						aria-label={ sprintf(
							/* translators: abbreviation for units */
							__( '%s units', 'ultimate-addons-for-gutenberg' ),
							key.name
						) }
						onClick={ () => onChangeUnits( key.unitValue ) }
					>
						{ key.unitValue }
					</Button>
				</Tooltip>
			)
		);

		return items;
	};

	const ControlHeader = () => {
		return (
			<div className="uagb-control__header">
				<div className="uagb-number-control__actions uagb-control__actions">
					<UAGReset
						onReset={ resetValues }
						attributeNames={ [ props.data.label, props.displayUnit ? props.unit.label : false ] }
						setAttributes={ props.setAttributes }
					/>
					{ props.displayUnit && (
						<ButtonGroup
							className="uagb-control__units"
							aria-label={ __( 'Select Units', 'ultimate-addons-for-gutenberg' ) }
						>
							{ onUnitSizeClick( unitSizes ) }
						</ButtonGroup>
					) }
				</div>
			</div>
		);
	};

	const variant = props.inlineControl ? 'inline' : 'full-width';

	const controlName = getIdFromString( props?.label ); //
	const controlBeforeDomElement = applyFilters(
		`spectra.${ blockNameForHook }.${ panelNameForHook }.${ controlName }.before`,
		'',
		blockNameForHook
	);
	const controlAfterDomElement = applyFilters(
		`spectra.${ blockNameForHook }.${ panelNameForHook }.${ controlName }`,
		'',
		blockNameForHook
	);

	return (
		<div ref={ panelRef } className={`components-base-control uag-number-control uagb-size-type-field-tabs${isEnableDynamicContent() ? ' uagb-text-control--open-dynamic-content' : ''}`}>
			{ controlBeforeDomElement }
			{ props.showControlHeader &&
				<ControlHeader />
			}
			<div className={ classnames(
					'uagb-number-control__mobile-controls',
					'uag-number-control__' + variant,
				) }
			>
				<ResponsiveToggle
					label= { props.label }
					responsive= { props.responsive }
				/>
				{/* If Dynamic Content is enabled, we don't need to show the input field */}
				{ !isEnableDynamicContent() &&
					<>
						<NumberControl
							labelPosition="edge"
							disabled={ props.disabled }
							isShiftStepEnabled={ isShiftStepEnabled }
							max={ max }
							min={ min }
							onChange={ handleOnChange }
							value={ inputValue }
							step={ props?.step || 1 }
							required={ props?.required }
							readOnly={isEnableDynamicContent()}
						/>
					</>
				}
				{/* Show the Dynamic Content Controls */}
				{
					registerTextExtender
				}
			</div>
			{ <UAGHelpText text={ props.help } />}
			{/* Add a separator below for better UI since many dynamic content controls are shown */}
			{
				isEnableDynamicContent() && (
					<Separator />
				)
			}
			{ controlAfterDomElement }
		</div>
	);
};

UAGNumberControl.defaultProps = {
	label: __( 'Margin', 'ultimate-addons-for-gutenberg' ),
	className: '',
	allowReset: true,
	isShiftStepEnabled: true,
	max: Infinity,
	min: -Infinity,
	resetFallbackValue: '',
	placeholder: null,
	unit: [ 'px', 'em' ],
	displayUnit: true,
	responsive: false,
	showControlHeader: true,
	inlineControl: true,
	dynamicContentType: 'text',
	enableDynamicContent: false,
	// name: attribute name as a string,  // a prop used when dynamic content support needs to be added to an instance of this control.
	help: false,
};

export default UAGNumberControl;
