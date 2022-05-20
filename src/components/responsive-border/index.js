/**
 * Border component.
 *
 */
import { __ } from '@wordpress/i18n';
import Range from '@Components/range/Range.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import { SelectControl } from '@wordpress/components';
import UAGTabsControl from '@Components/tabs';
import SpacingControl from '@Components/spacing-control';
import styles from './editor.lazy.scss';

import React, { useLayoutEffect } from 'react';
const ResponsiveBorder = ( props ) => {
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	const {
		attributes,
		setAttributes,
		borderColor,
		borderWidth,
		borderRadius,
		borderStyle,
		borderHoverColor,
		borderActiveColor,
		disabledBorderTitle,
		deviceType,
	} = props;

	const tabsToUse = [ {
		name: 'normal',
		title: __(
			'Normal',
			'ultimate-addons-for-gutenberg'
		),
	} ];
	if ( borderHoverColor ){
		tabsToUse.push( {
			name: 'hover',
			title: __(
				'Hover',
				'ultimate-addons-for-gutenberg'
			),
		} );
	}
	if ( borderActiveColor ){
		tabsToUse.push(  {
			name: 'active',
			title: __(
				'Active',
				'ultimate-addons-for-gutenberg'
			),
		} );
	}

	const tabOutputNormal = (
		<AdvancedPopColorControl
			label={ borderColor.title }
			colorValue={ borderColor.value }
			onColorChange={ ( value ) =>
				setAttributes( { [ borderColor.label ]: value } )
			}
		/>
	);
	const tabOutputHover = (
		borderHoverColor ? (
		<AdvancedPopColorControl
			label={ borderHoverColor.title }
			colorValue={ borderHoverColor.value }
			onColorChange={ ( value ) =>
				setAttributes( { [ borderHoverColor.label ]: value } )
			}
		/>
		) : ''
	);
	const tabOutputActive = (
		borderActiveColor ? (
			<AdvancedPopColorControl
				label={ borderActiveColor.title }
				colorValue={ borderActiveColor.value }
				onColorChange={ ( value ) =>
					setAttributes( { [ borderActiveColor.label ]: value } )
				}
			/>
		) : ''
	);
	const advancedControls = (
		<>
		{ ! disabledBorderTitle && (
			<h2>{ __( 'Border', 'ultimate-addons-for-gutenberg' ) }</h2>
		)}
			<div className="uag-border-type">
				<SelectControl
					label={ borderStyle.title }
					labelPosition="top"
					value={ borderStyle.value }
					onChange={ ( value ) =>
						setAttributes( {
							[ borderStyle.label ]: value,
						} )
					}
					options={ [
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'solid',
							label: __(
								'Solid',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dotted',
							label: __(
								'Dotted',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dashed',
							label: __(
								'Dashed',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'double',
							label: __(
								'Double',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'groove',
							label: __(
								'Groove',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'inset',
							label: __(
								'Inset',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'outset',
							label: __(
								'Outset',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'ridge',
							label: __(
								'Ridge',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
			</div>

			{ 'none' !== borderStyle.value && (
				<div className="uag-border-width">
					<SpacingControl
						label={ borderWidth.label }
						valueTop={ borderWidth.valueTop }
						valueRight={ borderWidth.valueRight }
						valueBottom={ borderWidth.valueBottom }
						valueLeft={ borderWidth.valueLeft }
						valueTopTablet={ borderWidth.valueTopTablet }
						valueRightTablet={ borderWidth.valueRightTablet }
						valueBottomTablet={ borderWidth.valueBottomTablet }
						valueLeftTablet={  borderWidth.valueLeftTablet }
						valueTopMobile={ borderWidth.valueTopMobile }
						valueRightMobile={ borderWidth.valueRightMobile }
						valueBottomMobile={ borderWidth.valueBottomMobile }
						valueLeftMobile={ borderWidth.valueLeftMobile }
						disableUnits={true}
						deviceType={ deviceType }
						attributes={ attributes }
						setAttributes={ setAttributes }
						link={ borderWidth.link }
					/>
				</div>
			) }
			<div className="uag-border-radius">
				<SpacingControl
					label={ borderRadius.label }
					valueTop={ borderRadius.valueTopLeft }
					valueRight={ borderRadius.valueTopRight }
					valueBottom={ borderRadius.valueBottomRight }
					valueLeft={ borderRadius.valueBottomLeft }
					valueTopTablet={ borderRadius.valueTopLeftTablet }
					valueRightTablet={ borderRadius.valueTopRightTablet }
					valueBottomTablet={ borderRadius.valueBottomRightTablet }
					valueLeftTablet={  borderRadius.valueBottomLeftTablet }
					valueTopMobile={ borderRadius.valueTopLeftMobile }
					valueRightMobile={ borderRadius.valueTopRightMobile }
					valueBottomMobile={ borderRadius.valueBottomRightMobile }
					valueLeftMobile={ borderRadius.valueBottomLeftMobile }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __(
								'%',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: '%',
						},
					] }
					unit={borderRadius.unit}
					mUnit={borderRadius.mUnit}
					tUnit={borderRadius.tUnit}
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ borderRadius.link }
				/>
			</div>
			{ 'none' !== borderStyle.value && (
				<UAGTabsControl
					tabs={ tabsToUse }
					normal={ tabOutputNormal }
					hover={ tabOutputHover }
					active={ tabOutputActive }
					disableBottomSeparator={ props.disableBottomSeparator }
				/>
			) }
		</>
	);

	return (
		<div className="uag-border-select-control components-base-control">
			{ advancedControls }
		</div>
	);
};

export default ResponsiveBorder;
