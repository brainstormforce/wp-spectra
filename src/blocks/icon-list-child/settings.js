import UAGIconPicker from '@Components/icon-picker';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGTabsControl from '@Components/tabs';
import UAGMediaPicker from '@Components/image';
import SpacingControl from '@Components/spacing-control';

import { ToggleControl } from '@wordpress/components';
import { memo } from '@wordpress/element';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGTextControl from '@Components/text-control';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, deviceType } = props;
	const {
		image_icon,
		icon,
		image,
		icon_color,
		label_color,
		icon_hover_color,
		label_hover_color,
		icon_bg_color,
		icon_bg_hover_color,
		icon_border_color,
		icon_border_hover_color,
		link,
		target,
		disableLink,
		// margin
		childTopMargin,
		childRightMargin,
		childLeftMargin,
		childBottomMargin,
		childTopMarginTablet,
		childRightMarginTablet,
		childLeftMarginTablet,
		childBottomMarginTablet,
		childTopMarginMobile,
		childRightMarginMobile,
		childLeftMarginMobile,
		childBottomMarginMobile,
		childMarginUnit,
		childMarginUnitTablet,
		childMarginUnitMobile,
		childMarginLink,
		// padding
		childTopPadding,
		childRightPadding,
		childLeftPadding,
		childBottomPadding,
		childTopPaddingTablet,
		childRightPaddingTablet,
		childLeftPaddingTablet,
		childBottomPaddingTablet,
		childTopPaddingMobile,
		childRightPaddingMobile,
		childLeftPaddingMobile,
		childBottomPaddingMobile,
		childPaddingUnit,
		childPaddingUnitTablet,
		childPaddingUnitMobile,
		childPaddingLink,
		hideLabel,
	} = attributes;

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { image: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			setAttributes( { image: null } );
			return;
		}

		setAttributes( { image: media } );
	};

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { image: '' } );
	};

	const textColorControls = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Label', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<UAGTabsControl
					tabs={ [
						{
							name: 'normal',
							title: __(
								'Normal',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							name: 'hover',
							title: __(
								'Hover',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					normal={
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ label_color ? label_color : '' }
							data={ {
								value: label_color,
								label: 'label_color',
							} }
							setAttributes={ setAttributes }
						/>
					}
					hover={
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								label_hover_color ? label_hover_color : ''
							}
							data={ {
								value: label_hover_color,
								label: 'label_hover_color',
							} }
							setAttributes={ setAttributes }
						/>
					}
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const iconStyleControls = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<UAGTabsControl
					tabs={ [
						{
							name: 'normal',
							title: __(
								'Normal',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							name: 'hover',
							title: __(
								'Hover',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					normal={
						<>
						{'icon' === image_icon &&
						'' !== icon &&
						<>
							<AdvancedPopColorControl
								label={ __(
									'Icon Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ icon_color ? icon_color : '' }
								data={ {
									value: icon_color,
									label: 'icon_color',
								} }
								setAttributes={ setAttributes }
							/>
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ icon_bg_color ? icon_bg_color : '' }
								data={ {
									value: icon_bg_color,
									label: 'icon_bg_color',
								} }
								setAttributes={ setAttributes }
							/>
						</> }
							<AdvancedPopColorControl
							label={ __(
								'Border Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								icon_border_color ? icon_border_color : ''
							}
							data={ {
								value: icon_border_color,
								label: 'icon_border_color',
							} }
							setAttributes={ setAttributes }
							/>
						</>
					}
					hover={
						<>
						{'icon' === image_icon &&
						'' !== icon &&
						<>
							<AdvancedPopColorControl
								label={ __(
									'Icon Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									icon_hover_color ? icon_hover_color : ''
								}
								data={ {
									value: icon_hover_color,
									label: 'icon_hover_color',
								} }
								setAttributes={ setAttributes }
							/>
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									icon_bg_hover_color ? icon_bg_hover_color : ''
								}
								data={ {
									value: icon_bg_hover_color,
									label: 'icon_bg_hover_color',
								} }
								setAttributes={ setAttributes }
							/>
							</>}
							<AdvancedPopColorControl
								label={ __(
									'Border Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									icon_border_hover_color
										? icon_border_hover_color
										: ''
								}
								data={ {
									value: icon_border_hover_color,
									label: 'icon_border_hover_color',
								} }
								setAttributes={ setAttributes }
							/>
						</>
					}
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const iconControls = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: image_icon,
						label: 'image_icon',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'icon',
							label: 'Icon',
						},
						{
							value: 'image',
							label: 'Image',
						},
						{
							value: 'none',
							label: 'None',
						},
					] }
					showIcons={ false }
				/>

				{ 'icon' === image_icon && (
					<>
						<UAGIconPicker
							label={ __(
								'Icon',
								'ultimate-addons-for-gutenberg'
							) }
							value={ icon }
							onChange={ ( value ) =>
								setAttributes( { icon: value } )
							}
						/>
					</>
				) }
				{ 'image' === image_icon && (
					<>
						<UAGMediaPicker
							onSelectImage={ onSelectImage }
							backgroundImage={ image }
							onRemoveImage={ onRemoveImage }
						/>
					</>
				) }
				<ToggleControl
					label={ __( 'Link', 'ultimate-addons-for-gutenberg' ) }
					checked={ disableLink }
					onChange={ () =>
						setAttributes( { disableLink: ! disableLink } )
					}
				/>
				{ disableLink && (
					<>
						<UAGTextControl
							label={__( 'URL', 'ultimate-addons-for-gutenberg' )}
							value={ link }
							data={{
								value: link,
								label: 'link',
							}}
							setAttributes={ setAttributes }
							onChange={ ( value ) =>
								setAttributes( { link: value } )
							}
							placeholder={ __(
								'Enter URL',
								'ultimate-addons-for-gutenberg'
							) }
						/>
						<ToggleControl
							label={ __(
								'Open in New Tab',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ target }
							onChange={ () =>
								setAttributes( { target: ! target } )
							}
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const spacingControls = () => {
		return(
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SpacingControl
					label={ __(
						'Margin',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: childTopMargin,
						label: 'childTopMargin',
					} }
					valueRight={ {
						value: childRightMargin,
						label: 'childRightMargin',
					} }
					valueBottom={ {
						value: childBottomMargin,
						label: 'childBottomMargin',
					} }
					valueLeft={ {
						value: childLeftMargin,
						label: 'childLeftMargin',
					} }
					valueTopTablet={ {
						value: childTopMarginTablet,
						label: 'childTopMarginTablet',
					} }
					valueRightTablet={ {
						value: childRightMarginTablet,
						label: 'childRightMarginTablet',
					} }
					valueBottomTablet={ {
						value: childBottomMarginTablet,
						label: 'childBottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: childLeftMarginTablet,
						label: 'childLeftMarginTablet',
					} }
					valueTopMobile={ {
						value: childTopMarginMobile,
						label: 'childTopMarginMobile',
					} }
					valueRightMobile={ {
						value: childRightMarginMobile,
						label: 'childRightMarginMobile',
					} }
					valueBottomMobile={ {
						value: childBottomMarginMobile,
						label: 'childBottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: childLeftMarginMobile,
						label: 'childLeftMarginMobile',
					} }
					unit={ {
						value: childMarginUnit,
						label: 'childMarginUnit',
					} }
					mUnit={ {
						value: childMarginUnitMobile,
						label: 'childMarginUnitMobile',
					} }
					tUnit={ {
						value: childMarginUnitTablet,
						label: 'childMarginUnitTablet',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: childMarginLink,
						label: 'childMarginLink',
					} }
				/>

				<SpacingControl
					label={ __(
						'Padding',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: childTopPadding,
						label: 'childTopPadding',
					} }
					valueRight={ {
						value: childRightPadding,
						label: 'childRightPadding',
					} }
					valueBottom={ {
						value: childBottomPadding,
						label: 'childBottomPadding',
					} }
					valueLeft={ {
						value: childLeftPadding,
						label: 'childLeftPadding',
					} }
					valueTopTablet={ {
						value: childTopPaddingTablet,
						label: 'childTopPaddingTablet',
					} }
					valueRightTablet={ {
						value: childRightPaddingTablet,
						label: 'childRightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: childBottomPaddingTablet,
						label: 'childBottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: childLeftPaddingTablet,
						label: 'childLeftPaddingTablet',
					} }
					valueTopMobile={ {
						value: childTopPaddingMobile,
						label: 'childTopPaddingMobile',
					} }
					valueRightMobile={ {
						value: childRightPaddingMobile,
						label: 'childRightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: childBottomPaddingMobile,
						label: 'childBottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: childLeftPaddingMobile,
						label: 'childLeftPaddingMobile',
					} }
					unit={ {
						value: childPaddingUnit,
						label: 'childPaddingUnit',
					} }
					mUnit={ {
						value: childPaddingUnitMobile,
						label: 'childPaddingUnitMobile',
					} }
					tUnit={ {
						value: childPaddingUnitTablet,
						label: 'childPaddingUnitTablet',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: childPaddingLink,
						label: 'childPaddingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<InspectorControls>
			<InspectorTabs>
				<InspectorTab { ...UAGTabs.general }>
					{ iconControls() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.style }>
					{ ! hideLabel && textColorControls() }
					{ iconStyleControls() }
					{ spacingControls() }
				</InspectorTab>
				<InspectorTab
					{ ...UAGTabs.advance }
					parentProps={ props }
				></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};
export default memo( Settings );
