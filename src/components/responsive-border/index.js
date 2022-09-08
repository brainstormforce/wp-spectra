/**
 * Border component.
 *
 */
import { __ } from '@wordpress/i18n';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import UAGSelectControl from '@Components/select-control';
import UAGTabsControl from '@Components/tabs';
import SpacingControl from '@Components/spacing-control';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	prefix: PropTypes.string,
	borderStyleLabel: PropTypes.string,
	borderWidthLabel: PropTypes.string,
	borderRadiusLabel: PropTypes.string,
	borderColorLabel: PropTypes.string,
};

const defaultProps = {
	borderStyleLabel: __( 'Style', 'ultimate-addons-for-gutenberg' ),
	borderWidthLabel: __( 'Width', 'ultimate-addons-for-gutenberg' ),
	borderRadiusLabel: __( 'Radius', 'ultimate-addons-for-gutenberg' ),
	borderColorLabel: __( 'Color', 'ultimate-addons-for-gutenberg' ),
	borderHoverColorLabel:__(
		'Hover Color',
		'ultimate-addons-for-gutenberg'
	)
};

const ResponsiveBorder = ( props ) => {
	const {
		attributes,
		setAttributes,
		disabledBorderTitle,
		disableBottomSeparator = false,
		deviceType,

		prefix,
		borderStyleLabel,
		borderWidthLabel,
		borderRadiusLabel,
		borderColorLabel,
		borderHoverColorLabel,
		showWidth,
		label = __( 'Border', 'ultimate-addons-for-gutenberg' ),
		normalTabLabel = __(
			'Normal',
			'ultimate-addons-for-gutenberg'
		),
		hoverTabLabel = __(
			'Hover',
			'ultimate-addons-for-gutenberg'
		),
		borderRadiusHelp,
	} = props;

	const tabsToUse = [ {
		name: 'normal',
		title: normalTabLabel,
	} ];

	tabsToUse.push( {
		name: 'hover',
		title: hoverTabLabel,
	} );

	const borderStyle = attributes[prefix + 'BorderStyle'];

	const tabOutputNormal = (
		<AdvancedPopColorControl
			label={ borderColorLabel }
			colorValue={
				attributes[prefix + 'BorderColor'] ? attributes[prefix + 'BorderColor'] : ''
			}
			data={ {
				value: attributes[prefix + 'BorderColor'],
				label: prefix + 'BorderColor',
			} }
			setAttributes={ setAttributes }
		/>
	);
	const tabOutputHover = (
		<AdvancedPopColorControl
			label={ borderHoverColorLabel }
			colorValue={
				attributes[prefix + 'BorderHColor'] ? attributes[prefix + 'BorderHColor'] : ''
			}
			data={ {
				value: attributes[prefix + 'BorderHColor'],
				label: prefix + 'BorderHColor',
			} }
			setAttributes={ setAttributes }
		/>
	);

	const advancedControls = (
		<>
			{ ! disabledBorderTitle && (
				<h2>{ label }</h2>
			) }
			<UAGSelectControl
				label={ borderStyleLabel }
				data={ {
					value: borderStyle,
					label: prefix + 'BorderStyle',
				} }
				setAttributes={ setAttributes }
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
			{ '' !== borderStyle && 'none' !== borderStyle && (
				showWidth !== false &&
					<SpacingControl
					label={ borderWidthLabel }
					valueTop={ {
						value: attributes[prefix + 'BorderTopWidth'],
						label: prefix + 'BorderTopWidth',
					} }
					valueRight={ {
						value: attributes[prefix + 'BorderRightWidth'],
						label: prefix + 'BorderRightWidth',
					}  }
					valueBottom={ {
						value: attributes[prefix + 'BorderBottomWidth'],
						label: prefix + 'BorderBottomWidth',
					} }
					valueLeft={  {
						value: attributes[prefix + 'BorderLeftWidth'],
						label: prefix + 'BorderLeftWidth',
					} }
					valueTopTablet={ {
						value: attributes[prefix + 'BorderTopWidthTablet'],
						label: prefix + 'BorderTopWidthTablet',
					} }
					valueRightTablet={ {
						value: attributes[prefix + 'BorderRightWidthTablet'],
						label: prefix + 'BorderRightWidthTablet',
					} }
					valueBottomTablet={ {
						value: attributes[prefix + 'BorderBottomWidthTablet'],
						label: prefix + 'BorderBottomWidthTablet',
					} }
					valueLeftTablet={ {
						value: attributes[prefix + 'BorderLeftWidthTablet'],
						label: prefix + 'BorderLeftWidthTablet',
					} }
					valueTopMobile={ {
						value: attributes[prefix + 'BorderTopWidthMobile'],
						label: prefix + 'BorderTopWidthMobile',
					} }
					valueRightMobile={ {
						value: attributes[prefix + 'BorderRightWidthMobile'],
						label: prefix + 'BorderRightWidthMobile',
					} }
					valueBottomMobile={ {
						value: attributes[prefix + 'BorderBottomWidthMobile'],
						label: prefix + 'BorderBottomWidthMobile',
					} }
					valueLeftMobile={ {
						value: attributes[prefix + 'BorderLeftWidthMobile'],
						label: prefix + 'BorderLeftWidthMobile',
					} }
					disableUnits={true}
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: attributes[prefix + 'BorderLink'],
						label: prefix + 'BorderLink',
					} }
				/>
			) }
			<SpacingControl
				label={ borderRadiusLabel }
				valueTop={ {
					value: attributes[prefix + 'BorderTopLeftRadius'],
					label: prefix + 'BorderTopLeftRadius',
				} }
				valueRight={ {
					value: attributes[prefix + 'BorderTopRightRadius'],
					label: prefix + 'BorderTopRightRadius',
				} }
				valueBottom={ {
					value: attributes[prefix + 'BorderBottomRightRadius'],
					label: prefix + 'BorderBottomRightRadius',
				} }
				valueLeft={ {
					value: attributes[prefix + 'BorderBottomLeftRadius'],
					label: prefix + 'BorderBottomLeftRadius',
				} }
				valueTopTablet={{
					value: attributes[prefix + 'BorderTopLeftRadiusTablet'],
					label: prefix + 'BorderTopLeftRadiusTablet',
				} }
				valueRightTablet={ {
					value: attributes[prefix + 'BorderTopRightRadiusTablet'],
					label: prefix + 'BorderTopRightRadiusTablet',
				} }
				valueBottomTablet={{
					value: attributes[prefix + 'BorderBottomRightRadiusTablet'],
					label: prefix + 'BorderBottomRightRadiusTablet',
				} }
				valueLeftTablet={ {
					value: attributes[prefix + 'BorderBottomLeftRadiusTablet'],
					label: prefix + 'BorderBottomLeftRadiusTablet',
				} }
				valueTopMobile={ {
					value: attributes[prefix + 'BorderTopLeftRadiusMobile'],
					label: prefix + 'BorderTopLeftRadiusMobile',
				} }
				valueRightMobile={ {
					value: attributes[prefix + 'BorderTopRightRadiusMobile'],
					label: prefix + 'BorderTopRightRadiusMobile',
				} }
				valueBottomMobile={ {
					value: attributes[prefix + 'BorderBottomRightRadiusMobile'],
					label: prefix + 'BorderBottomRightRadiusMobile',
				} }
				valueLeftMobile={ {
					value: attributes[prefix + 'BorderBottomLeftRadiusMobile'],
					label: prefix + 'BorderBottomLeftRadiusMobile',
				} }
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
				unit={{
					value: attributes[prefix + 'BorderRadiusUnit'],
					label: prefix + 'BorderRadiusUnit',
				}}
				mUnit={{
					value: attributes[prefix + 'BorderRadiusUnitMobile'],
					label: prefix + 'BorderRadiusUnitMobile',
				}}
				tUnit={{
					value: attributes[prefix + 'BorderRadiusUnitTablet'],
					label: prefix + 'BorderRadiusUnitTablet',
				}}
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: attributes[prefix + 'BorderRadiusLink'],
					label: prefix + 'BorderRadiusLink',
				} }
				help={ borderRadiusHelp ? borderRadiusHelp : false }
			/>
			{ 'none' !== borderStyle && (
				<UAGTabsControl
					tabs={ tabsToUse }
					normal={ tabOutputNormal }
					hover={ tabOutputHover }
					active={ '' }
					disableBottomSeparator={ disableBottomSeparator }
				/>
			) }
		</>
	);

	return ( advancedControls );
};

export default ResponsiveBorder;

ResponsiveBorder.propTypes = propTypes;
ResponsiveBorder.defaultProps = defaultProps;
