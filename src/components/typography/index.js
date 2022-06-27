/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Dashicon } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import UAGSelectControl from '@Components/select-control';
import FontFamilyControl from './font-typography';
import RangeTypographyControl from './range-typography';
import TypographyStyles from './inline-styles';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { select } from '@wordpress/data'
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';

// Export for ease of importing in individual blocks.
export { TypographyStyles };

const TypographyControl = ( props ) => {

	const [ showAdvancedControls, toggleAdvancedControls ] = useState( false );

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	useLayoutEffect( () => {
		window.addEventListener( 'click', function( e ){
			const typoDiv = document.querySelector( '.uagb-typography-advanced' );
			const actionsDiv = document.querySelector( '.uag-typography-button' );
			if ( typoDiv ) {
				if ( ! typoDiv.contains( e.target ) && ! actionsDiv.contains( e.target ) && ! e.target?.parentElement?.parentElement?.classList?.contains( 'uag-font-family-select__menu' ) && ! e.target?.classList?.contains( 'uag-responsive-common-button' ) && ! e.target?.closest( '.uag-responsive-common-button' ) && ! e.target?.closest( '.uagb-range-control-responsive' ) ){
					toggleAdvancedControls( false )
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
	} = props;

	if ( true !== disableFontFamily ) {
		fontFamily = <FontFamilyControl { ...props } />;
	}
	const lineHeightStepsVal = ( 'em' === props.lineHeightType?.value ? 0.1 : 1 );

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
				steps={ lineHeightStepsVal }
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
				steps={ 0.1 }
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
							value: 'none',
							label: __(
								'Default',
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
						toggleAdvancedControls( ! showAdvancedControls )

						if ( ! showAdvancedControls ) {
							const { getSelectedBlock } = select( 'core/block-editor' );
							const blockName = getSelectedBlock()?.name;
							const uagSettingState = getUAGEditorStateLocalStorage( 'uagSettingState' );
							const data = {
								...uagSettingState,
								[blockName] : {
									...uagSettingState?.[blockName],
									selectedSetting : '.uag-typography-options'
								}
							}

							const uagLocalStorage = getUAGEditorStateLocalStorage();
							if ( uagLocalStorage ) {
								uagLocalStorage.setItem( 'uagSettingState', JSON.stringify( data ) );
							}
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
				<span className="uag-control-label">{ props.label }</span>
				{ fontAdvancedControls }
			</div>
		);
	}

	return (
		<div
			className={ `components-base-control uag-typography-options spectra-control-popup__options ${ activeClass }` }
		>
			{ ! disableAdvancedOptions && (
				<>
					{ fontTypoAdvancedControls }
					{ showAdvancedFontControls }
				</>
			) }
		</div>
	);
};

export default TypographyControl;
