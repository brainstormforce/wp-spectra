/**
 * Block Icon : General Settings.
 */
import { memo } from '@wordpress/element';
import UAGIconPicker from '@Components/icon-picker';
import { __ } from '@wordpress/i18n';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGTextControl from '@Components/text-control';
import { Icon, ToggleControl } from '@wordpress/components';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { iconPresets } from '../../presets';
import renderSVG from '@Controls/renderIcon';
import Range from '@Components/range/Range.js';
import UAGPresets from '@Components/presets';

const GeneralSettings = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		icon,
		iconSize,
		iconSizeTablet,
		iconSizeMobile,
		iconSizeUnit,
		align,
		alignTablet,
		alignMobile,
		rotation,
		rotationUnit,
		link,
		target,
		disableLink,
	} = attributes;

	return (
		<>
			<UAGAdvancedPanelBody title={ __( 'Presets', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
				<UAGPresets setAttributes={ setAttributes } presets={ iconPresets } presetInputType="radioImage" />
			</UAGAdvancedPanelBody>
			<UAGAdvancedPanelBody title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<UAGIconPicker
					label={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
					value={ icon }
					onChange={ ( value ) => setAttributes( { icon: value } ) }
				/>
				<ResponsiveSlider
					label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: iconSize,
							label: 'iconSize',
						},
						tablet: {
							value: iconSizeTablet,
							label: 'iconSizeTablet',
						},
						mobile: {
							value: iconSizeMobile,
							label: 'iconSizeMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					unit={ {
						value: iconSizeUnit,
						label: 'iconSizeUnit',
					} }
					setAttributes={ setAttributes }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: align,
							label: 'align',
						},
						tablet: {
							value: alignTablet,
							label: 'alignTablet',
						},
						mobile: {
							value: alignMobile,
							label: 'alignMobile',
						},
					} }
					options={ [
						{
							value: 'left',
							icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
							tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'center',
							icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
							tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'right',
							icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
							tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					showIcons={ true }
					responsive={ true }
				/>
				<Range
					label={ __( 'Rotation', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ rotation }
					data={ {
						value: rotation,
						label: 'rotation',
					} }
					min={ -180 }
					max={ 180 }
					unit={ {
						value: rotationUnit,
						label: 'rotationUnit',
					} }
					units={ [
						{
							name: __( 'Degree', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'deg',
						},
					] }
				/>
				<ToggleControl
					label={ __( 'Link', 'ultimate-addons-for-gutenberg' ) }
					checked={ disableLink }
					onChange={ () => setAttributes( { disableLink: ! disableLink } ) }
				/>
				{ disableLink && (
					<>
						<UAGTextControl
							label={ __( 'URL', 'ultimate-addons-for-gutenberg' ) }
							value={ link }
							data={ {
								value: link,
								label: 'link',
							} }
							setAttributes={ setAttributes }
							onChange={ ( value ) => setAttributes( { link: value } ) }
							placeholder={ __( 'Enter URL', 'ultimate-addons-for-gutenberg' ) }
						/>
						<ToggleControl
							label={ __( 'Open in New Tab', 'ultimate-addons-for-gutenberg' ) }
							checked={ target }
							onChange={ () => setAttributes( { target: ! target } ) }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		</>
	);
};

export default memo( GeneralSettings );
