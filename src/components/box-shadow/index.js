/**
 * Box-Shadow reusable component.
 *
 */
import { __ } from '@wordpress/i18n';
import Range from '@Components/range/Range.js';
import AdvancedPopColorControl from '../color-control/advanced-pop-color-control';
import { Button, Dashicon } from '@wordpress/components';
import MultiButtonsControl from '../multi-buttons-control/index';
import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { select } from '@wordpress/data'
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';
import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';
import { getIdFromString, getPanelIdFromRef } from '@Utils/Helpers';

const BoxShadowControl = ( props ) => {
	const [panelNameForHook, setPanelNameForHook] = useState( null );
	const panelRef = useRef( null );
	const [ showAdvancedControls, toggleAdvancedControls ] = useState( false );

	const allBlocksAttributes = wp.hooks.applyFilters( 'uagb.blocksAttributes', blocksAttributes ); // eslint-disable-line @wordpress/no-unused-vars-before-return

	const { getSelectedBlock } = select( 'core/block-editor' );

	useLayoutEffect( () => {
		window.addEventListener( 'click', function( e ){
			const popupButton = document.querySelector( `.active.popup-${blockId} .spectra-control-popup__options--action-button` );
			const popupWrap = document.querySelector( `.active.popup-${blockId} .spectra-control-popup` );

			if ( popupButton && ! popupButton?.contains( e.target ) && popupWrap && ! popupWrap?.contains( e.target ) && ! e.target?.classList?.contains( 'uagb-advanced-color-indicate' ) && ! e.target?.parentElement?.closest( '.uagb-popover-color' ) && ! e.target?.parentElement?.closest( '.uagb-reset' ) ) {
				toggleAdvancedControls( false )
				const blockName = getSelectedBlock()?.name;
				const uagSettingState = getUAGEditorStateLocalStorage( 'uagSettingState' );

				const data = {
					...uagSettingState,
					[blockName] : {
						...uagSettingState?.[blockName],
						selectedSetting : false
					}
				}

				const uagLocalStorage = getUAGEditorStateLocalStorage();
				if ( uagLocalStorage ) {
					uagLocalStorage.setItem( 'uagSettingState', JSON.stringify( data ) );
				}
			}
		  } );
	}, [] );

	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) )
	}, [blockNameForHook] )

	const {
		setAttributes,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		label = __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ),
		popup = false,
		blockId
	} = props;

	let advancedControls;
	const activeClass = showAdvancedControls ? 'active' : '';

	// Array of all the current Typography Control's Labels.
	const attributeNames = [
		boxShadowColor.label,
		boxShadowHOffset.label,
		boxShadowVOffset.label,
		boxShadowBlur.label,
		boxShadowSpread.label,
		boxShadowPosition.label,
	];

	// Function to get the Block's default Box Shadow Values.
	const getBlockBoxShadowValue = () => {
		const selectedBlockName = getSelectedBlock()?.name.split( '/' ).pop();

		let defaultValues = false;
		if ( 'undefined' !== typeof allBlocksAttributes[ selectedBlockName ] ) {
			attributeNames.forEach( ( attributeName ) => {
				if ( attributeName ) {
					const blockDefaultAttributeValue = ( 'undefined' !== typeof allBlocksAttributes[ selectedBlockName ][ attributeName ]?.default ) ? allBlocksAttributes[ selectedBlockName ][ attributeName ]?.default : '';
					defaultValues = {
						...defaultValues,
						[ attributeName ] : blockDefaultAttributeValue,
					}
				}
			} );
		}
		return defaultValues;
	}

	// Function to check if any Box Shadow Setting has changed.
	const getUpdateState = () => {
		const defaultValues = getBlockBoxShadowValue();
		const selectedBlockAttributes = getSelectedBlock()?.attributes;
		let isBoxShadowUpdated = false;
		attributeNames.forEach( ( attributeName ) => {
			if ( selectedBlockAttributes?.[ attributeName ] && ( selectedBlockAttributes?.[ attributeName ] !== defaultValues?.[ attributeName ] ) ) {
				isBoxShadowUpdated = true;
			}
		} );
		return isBoxShadowUpdated;
	};

	// Flag to check if this control has been updated or not.
	const isBoxShadowUpdated = popup && getUpdateState();

	const overallControls = (
		<>
			{ /* Shadow Color */ }
			<AdvancedPopColorControl
				label={ boxShadowColor.title }
				colorValue={ boxShadowColor.value }
				data={ {
					value: boxShadowColor.value,
					label: boxShadowColor.label,
				} }
				setAttributes={ setAttributes }
			/>
			{ /* Horizontal Positioning */ }
			<Range
				label={ boxShadowHOffset.title }
				value={ boxShadowHOffset.value }
				min={ -100 }
				max={ 100 }
				displayUnit={ false }
				setAttributes={setAttributes}
				data={ {
					value: boxShadowHOffset.value,
					label: boxShadowHOffset.label,
				} }
			/>
			{ /* Vertical Positioning */ }
			<Range
				label={ boxShadowVOffset.title }
				value={ boxShadowVOffset.value }
				min={ -100 }
				max={ 100 }
				displayUnit={ false }
				setAttributes={setAttributes}
				data={ {
					value: boxShadowVOffset.value,
					label: boxShadowVOffset.label,
				} }
			/>
			{ /* Blur */ }
			<Range
				label={ boxShadowBlur.title }
				value={ boxShadowBlur.value }
				min={ 0 }
				max={ 100 }
				displayUnit={ false }
				setAttributes={setAttributes}
				data={ {
					value: boxShadowBlur.value,
					label: boxShadowBlur.label,
				} }
			/>
			{ /* Spread */ }
			<Range
				label={ boxShadowSpread.title }
				value={ boxShadowSpread.value }
				min={ -100 }
				max={ 100 }
				displayUnit={ false }
				setAttributes={setAttributes}
				data={ {
					value: boxShadowSpread.value,
					label: boxShadowSpread.label,
				} }
			/>
			{ /* Shadow Position */ }
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ boxShadowPosition.title }
				data={ {
					value: boxShadowPosition.value,
					label: boxShadowPosition.label,
				} }
				options={ [
					{
						value: 'outset',
						label: __(
							'Outset',
							'ultimate-addons-for-gutenberg'
						),
						tooltip: __(
							'Outset',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'inset',
						label: __(
							'Inset',
							'ultimate-addons-for-gutenberg'
						),
						tooltip: __(
							'Inset (10px)',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				showIcons={ false }
			/>
		</>
	);

	if ( showAdvancedControls ) {
		advancedControls = (
			<div className="uagb-box-shadow-advanced spectra-control-popup">
				{ overallControls }
			</div>
		);
	}

	const boxShadowAdvancedControls = (
		<div className="spectra-control-popup__options--action-wrapper">
			<span className="uag-control-label">
				{ label }
				{ isBoxShadowUpdated && (
					<div className="spectra__change-indicator--dot-right"/>
				) }
			</span>
			<Button
				className="uag-box-shadow-button spectra-control-popup__options--action-button"
				aria-pressed={ showAdvancedControls }
				onClick={ () => {
						const allPopups = document.querySelectorAll( '.spectra-control-popup__options' );
						if ( allPopups && 0 < allPopups.length ) {
							for ( let i = 0; i < allPopups.length; i++ ) {
								const popupButton = allPopups[i]?.querySelector( '.spectra-control-popup__options.active .spectra-control-popup__options--action-button' );
								popupButton?.click();
							}
						}
						toggleAdvancedControls( ! showAdvancedControls )

						const blockName = getSelectedBlock()?.name;
						const uagSettingState = getUAGEditorStateLocalStorage( 'uagSettingState' );
						let data = {
							...uagSettingState,
							[blockName] : {
								...uagSettingState?.[blockName],
								selectedSetting : '.uag-box-shadow-options'
							}
						}

						if ( showAdvancedControls ) {
							data = {
								...uagSettingState,
								[blockName] : {
									...uagSettingState?.[blockName],
									selectedSetting : false
								}
							}
						}
						const uagLocalStorage = getUAGEditorStateLocalStorage();
						if ( uagLocalStorage ) {
							uagLocalStorage.setItem( 'uagSettingState', JSON.stringify( data ) );
						}
					}
				}
			>
				<Dashicon icon="edit" />
			</Button>
		</div>
	);

	const controlName = getIdFromString( props.label );
	const controlBeforeDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}.before`, '', blockNameForHook );
	const controlAfterDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}`, '', blockNameForHook );

	return (
		<div
			ref={panelRef}
		>
			{
				controlBeforeDomElement
			}
			{
				popup ? (
					<div
						className={ ` components-base-control uag-box-shadow-options spectra-control-popup__options popup-${blockId} ${ activeClass }` }
					>
						{ boxShadowAdvancedControls }
						{ showAdvancedControls && advancedControls }
					</div>
				) : (
					<>
						{ overallControls }
					</>
				)
			}
			{
				controlAfterDomElement
			}
		</div>
	);
};

export default BoxShadowControl;
