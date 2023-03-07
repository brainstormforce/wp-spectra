/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Dashicon } from '@wordpress/components';

/**
 * Internal dependencies
 */
import UAGSelectControl from '@Components/select-control';
import FontFamilyControl from './font-typography';
import RangeTypographyControl from './range-typography';
import TypographyStyles from './inline-styles';
import styles from './editor.lazy.scss';
import { useLayoutEffect, useEffect, useState, useRef } from '@wordpress/element';

import { getIdFromString, getPanelIdFromRef } from '@Utils/Helpers';
import { select } from '@wordpress/data';
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';
import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';
import UAGHelpText from '@Components/help-text';

// Export for ease of importing in individual blocks.
export { TypographyStyles };

const TypographyControl = ( props ) => {
	const [panelNameForHook, setPanelNameForHook] = useState( null );
	const panelRef = useRef( null );

	const [ showAdvancedControls, toggleAdvancedControls ] = useState( false );
	const allBlocksAttributes = wp.hooks.applyFilters( 'uagb.blocksAttributes', blocksAttributes ); // eslint-disable-line @wordpress/no-unused-vars-before-return

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	useLayoutEffect( () => {
		window.addEventListener( 'click', function( e ){
			const popupButton = document.querySelector( `.active.popup-${props?.attributes?.block_id} .spectra-control-popup__options--action-button` );
			const popupWrap = document.querySelector( `.active.popup-${props?.attributes?.block_id} .spectra-control-popup` );

			if ( popupButton && ! popupButton?.contains( e.target ) && popupWrap && ! popupWrap?.contains( e.target ) && ! e.target?.parentElement?.parentElement?.classList?.contains( 'uag-font-family-select__menu' ) && ! e.target?.classList?.contains( 'uag-responsive-common-button' ) && ! e.target?.closest( '.uag-responsive-common-button' ) && ! e.target?.parentElement?.closest( '.uagb-reset' ) ) {
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

	let lineHeight;
	let fontFamily;
	let fontAdvancedControls;
	let fontTypoAdvancedControls;
	let showAdvancedFontControls;
	let transform;
	let decoration;
	let letterSpacing;
	const activeClass = showAdvancedControls ? 'active' : '';

	const {
		disableFontFamily,
		disableFontSize,
		disableLineHeight,
		disableTransform,
		disableDecoration,
		disableAdvancedOptions = false,
		help = false
	} = props;

	if ( true !== disableFontFamily ) {
		fontFamily = <FontFamilyControl { ...props } />;
	}
	const lineHeightStepsVal = ( 'em' === props.lineHeightType?.value ? 0.1 : 1 ); // fractional value when unit is em.
	const letterSpacingStepsVal = ( 'em' === props.letterSpacingType?.value ? 0.1 : 1 ); // fractional value when unit is em.

	// Array of all the current Typography Control's Labels.
	const attributeNames = [];

	if ( ! disableFontFamily ) {
		attributeNames.push(
			props.fontFamily.label,
			props.fontWeight.label,
			props.fontStyle.label,
		);
	}

	if ( ! disableFontSize ) {
		attributeNames.push(
			props.fontSizeType.label,
			props.fontSize.label,
			props.fontSizeMobile.label,
			props.fontSizeTablet.label,
		);
	}

	if ( ! disableLineHeight ) {
		attributeNames.push(
			props.lineHeightType.label,
			props.lineHeight.label,
			props.lineHeightMobile.label,
			props.lineHeightTablet.label,
		);
	}

	if ( ! disableTransform ) {
		attributeNames.push(
			props.transform.label,
		);
	}

	if ( ! disableDecoration ) {
		attributeNames.push(
			props.decoration.label,
		);
	}

	if ( props.letterSpacing ) {
		attributeNames.push(
			props.letterSpacing.label,
			props.letterSpacingTablet.label,
			props.letterSpacingMobile.label,
			props.letterSpacingType.label,
		);
	}

	const { getSelectedBlock } = select( 'core/block-editor' );
	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) )
	}, [blockNameForHook] )

	// Function to get the Block's default Typography Values.
	const getBlockTypographyValue = () => {
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

	// Function to check if any Typography Setting has changed.
	const getUpdateState = () => {
		const defaultValues = getBlockTypographyValue();
		const selectedBlockAttributes = getSelectedBlock()?.attributes;
		let isTypographyUpdated = false;
		attributeNames.forEach( ( attributeName ) => {
			if ( selectedBlockAttributes?.[ attributeName ] && ( selectedBlockAttributes?.[ attributeName ] !== defaultValues?.[ attributeName ] ) ) {
				isTypographyUpdated = true;
			}
		} );
		return isTypographyUpdated;
	};

	// Flag to check if this control has been updated or not.
	const isTypographyUpdated = getUpdateState();

	if ( true !== disableLineHeight ) {
		lineHeight = (
			<RangeTypographyControl
				type={ props.lineHeightType }
				typeLabel={ props.lineHeightType.label }
				sizeMobile={ props.lineHeightMobile }
				sizeMobileLabel={ props.lineHeightMobile.label }
				sizeTablet={ props.lineHeightTablet }
				sizeTabletLabel={ props.lineHeightTablet.label }
				size={ props.lineHeight }
				sizeLabel={ props.lineHeight.label }
				sizeMobileText={ __(
					'Line Height',
					'ultimate-addons-for-gutenberg'
				) }
				sizeTabletText={ __(
					'Line Height',
					'ultimate-addons-for-gutenberg'
				) }
				sizeText={ __(
					'Line Height',
					'ultimate-addons-for-gutenberg'
				) }
				step={ lineHeightStepsVal }
				{ ...props }
			/>
		);
	}

	if ( props.letterSpacing ) {
		letterSpacing = (
			<RangeTypographyControl
				type={ props.letterSpacingType }
				typeLabel={ props.letterSpacingType.label }
				sizeMobile={ props.letterSpacingMobile }
				sizeMobileLabel={ props.letterSpacingMobile.label }
				sizeTablet={ props.letterSpacingTablet }
				sizeTabletLabel={ props.letterSpacingTablet.label }
				size={ props.letterSpacing }
				sizeLabel={ props.letterSpacing.label }
				sizeMobileText={ __(
					'Letter Spacing',
					'ultimate-addons-for-gutenberg'
				) }
				sizeTabletText={ __(
					'Letter Spacing',
					'ultimate-addons-for-gutenberg'
				) }
				sizeText={ __(
					'Letter Spacing',
					'ultimate-addons-for-gutenberg'
				) }
				step={ letterSpacingStepsVal }
				{ ...props }
			/>
		);
	}

	if ( ! disableTransform && props.transform ) {
		transform = (
			<UAGSelectControl
				label={ __(
					'Transform',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: props.transform.value,
					label: props.transform.label,
				} }
				setAttributes={ props.setAttributes }
				options={ [
					{
						value: '',
						label: __(
							'Default',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'normal',
						label: __(
							'Normal',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'capitalize',
						label: __(
							'Capitalize',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'uppercase',
						label: __(
							'Uppercase',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'lowercase',
						label: __(
							'Lowercase',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
			/>
		);
	}
	if ( ! disableDecoration && props.decoration ) {
		decoration = (
			<div className="uag-typography-decoration">
				<UAGSelectControl
					label={ __(
						'Decoration',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: props.decoration.value,
						label: props.decoration.label,
					} }
					setAttributes={ props.setAttributes }
					options={ [
						{
							value: '',
							label: __(
								'Default',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'underline',
							label: __(
								'Underline',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'overline',
							label: __(
								'Overline',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'line-through',
							label: __(
								'Line Through',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
			</div>
		);
	}
	if ( true !== disableFontFamily && true !== disableFontSize ) {
		fontAdvancedControls = (
			<Button
				className="uag-typography-button spectra-control-popup__options--action-button"
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
								selectedSetting : '.uag-typography-options'
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
		);
	} else {
		showAdvancedFontControls = (
			<>
				{ fontFamily }
				{ transform }
				{ decoration }
				{ lineHeight }
				{ letterSpacing }
			</>
		);
	}

	if ( showAdvancedControls === true ) {
		showAdvancedFontControls = (
			<div className="uagb-typography-advanced spectra-control-popup">
				{ fontFamily }
				{ transform }
				{ decoration }
				{ lineHeight }
				{ letterSpacing }
			</div>
		);
	}

	if ( true !== disableFontFamily && true !== disableFontSize ) {
		fontTypoAdvancedControls = (
			<div className="spectra-control-popup__options--action-wrapper">
				<span className="uag-control-label">
					{ props.label }
					{ isTypographyUpdated && (
						<div className="spectra__change-indicator--dot-right"/>
					) }
				</span>
				{ fontAdvancedControls }
			</div>
		);
	}

	const controlName = getIdFromString( props.label );
	const controlBeforeDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}.before`, '', blockNameForHook );
	const controlAfterDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}`, '', blockNameForHook );


	return (
		<div
			ref={panelRef}
			className="components-base-control"
		>
			{
				controlBeforeDomElement
			}
			<div
				className={ ` uag-typography-options spectra-control-popup__options popup-${props?.attributes?.block_id} ${ activeClass }` }
			>
				{ ! disableAdvancedOptions && (
					<>
						{ fontTypoAdvancedControls }
						{ showAdvancedFontControls }
					</>
				) }
				<UAGHelpText text={ help } />
			</div>
			{
				controlAfterDomElement
			}
		</div>
	);
};

export default TypographyControl;
