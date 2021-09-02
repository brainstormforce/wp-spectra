import UAGIconPicker from "../../components/icon-picker";
import React from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "../../components/inspector-tabs/InspectorTab.js";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import MultiButtonsControl from "../../components/multi-buttons-control";
import UAGTabsControl from "../../components/tabs";
import UAGImage from "../../components/image";

import {
	PanelBody,
	TextControl,
	ToggleControl,
} from '@wordpress/components';

const Settings = ( props ) => {

	const hideLabel = props.hideLabel;
	props = props.parentProps;
	const { attributes, setAttributes } = props;
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
	} = attributes;

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = (media) => {
		if (!media || !media.url) {
			setAttributes({ image: null });
			return;
		}

		if (!media.type || "image" !== media.type) {
			setAttributes({ image: null });
			return;
		}
		
		setAttributes({ image: media });
	};

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes({ image: "" });
	};

	const textColorControls = () => {
		return (
				<PanelBody
					title={ __( 'Label', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ true }
				>	
					<UAGTabsControl
						tabs={[
							{
								name: "normal",
								title: __(
									"Normal",
									"ultimate-addons-for-gutenberg"
								),
							},
							{
								name: "hover",
								title: __(
									"Hover",
									"ultimate-addons-for-gutenberg"
								),
							},
						]}
						normal={
							<AdvancedPopColorControl
								label={__(
									"Color",
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={label_color ? label_color : ""}
								onColorChange={(value) =>
									setAttributes({ label_color: value })
								}
							/>
						}
						hover={
							<AdvancedPopColorControl
								label={__(
									"Color",
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={label_hover_color ? label_hover_color : ""}
								onColorChange={(value) =>
									setAttributes({ label_hover_color: value })
								}
							/>
						}
						disableBottomSeparator={true}
					/>
				</PanelBody>
		);
	};

	const iconStyleControls = () => {
		return (
				<PanelBody
				    title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<UAGTabsControl
						tabs={[
							{
								name: "normal",
								title: __(
									"Normal",
									"ultimate-addons-for-gutenberg"
								),
							},
							{
								name: "hover",
								title: __(
									"Hover",
									"ultimate-addons-for-gutenberg"
								),
							},
						]}
						normal={
							<AdvancedPopColorControl
								label={__(
									'Color',
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={icon_color ? icon_color : ""}
								onColorChange={(value) =>
									setAttributes({ icon_color: value })
								}
							/>
						}
						hover={
							<AdvancedPopColorControl
								label={__(
									'Color',
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={icon_hover_color ? icon_hover_color : ""}
								onColorChange={(value) =>
									setAttributes({ icon_hover_color: value })
								}
							/>
						}
						disableBottomSeparator={true}
					/>
				</PanelBody>
		);
	};
	const bgStyleControls = () => {
		return (
				<PanelBody
				    title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<UAGTabsControl
						tabs={[
							{
								name: "normal",
								title: __(
									"Normal",
									"ultimate-addons-for-gutenberg"
								),
							},
							{
								name: "hover",
								title: __(
									"Hover",
									"ultimate-addons-for-gutenberg"
								),
							},
						]}
						normal={
							<AdvancedPopColorControl
								label={__(
									'Color',
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={icon_bg_color ? icon_bg_color : ""}
								onColorChange={(value) =>
									setAttributes({ icon_bg_color: value })
								}
							/>
						}
						hover={
							<AdvancedPopColorControl
								label={__(
									"Color",
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={icon_bg_hover_color ? icon_bg_hover_color : ""}
								onColorChange={(value) =>
									setAttributes({ icon_bg_hover_color: value })
								}
							/>
						}
						disableBottomSeparator={true}
					/>
					</PanelBody>
		);
	};
	const borderStyleControls = () => {
		return (
				<PanelBody
				    title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<UAGTabsControl
						tabs={[
							{
								name: "normal",
								title: __(
									"Normal",
									"ultimate-addons-for-gutenberg"
								),
							},
							{
								name: "hover",
								title: __(
									"Hover",
									"ultimate-addons-for-gutenberg"
								),
							},
						]}
						normal={
							<AdvancedPopColorControl
								label={__(
									'Color',
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={icon_border_color ? icon_border_color : ""}
								onColorChange={(value) =>
									setAttributes({ icon_border_color: value })
								}
							/>
						}
						hover={
							<AdvancedPopColorControl
								label={__(
									"Color",
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={icon_border_hover_color ? icon_border_hover_color : ""}
								onColorChange={(value) =>
									setAttributes({ icon_border_hover_color: value })
								}
							/>
						}
						disableBottomSeparator={true}
					/>
				</PanelBody>
		);
	};

	const iconControls = () => {
		return (
				<PanelBody
					initialOpen={ true }
				>
					<MultiButtonsControl
						setAttributes={setAttributes}
						label={__("Type", "ultimate-addons-for-gutenberg")}
						data={{
							value: image_icon,
							label: "image_icon",
						}}
						className="uagb-multi-button-alignment-control"
						options={[
							{
								value: "icon",
								label: ("Icon"),
								tooltip: __(
									"Icon",
									"ultimate-addons-for-gutenberg"
								),
							},
							{
								value: "image",
								label: ("Image"),
								tooltip: __(
									"Image",
									"ultimate-addons-for-gutenberg"
								),
							},
						]}
						showIcons={false}
					/>
					{ 'icon' == image_icon && (
						<>
							<UAGIconPicker
								label={__("Icon", "ultimate-addons-for-gutenberg")}
								value={icon}
								onChange={(value) => setAttributes({ icon: value })}
							/>
						</>
					) }
					{ 'image' == image_icon && (
						<>
							<UAGImage
								onSelectImage={onSelectImage}
								backgroundImage={image}
								onRemoveImage={onRemoveImage}
							/>
						</>
					) }
					<ToggleControl
						label={ __(
							'Enable Link',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ disableLink }
						onChange={ () =>
							setAttributes( { disableLink: ! disableLink } )
						}
					/>
					{ disableLink && (
						<>
							<p className="components-base-control__label">
								{ __( 'URL', 'ultimate-addons-for-gutenberg' ) }
							</p>
							<TextControl
								value={ link }
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
				</PanelBody>
		);
	};

	return (
		<InspectorControls>
		<InspectorTabs>
			<InspectorTab {...UAGTabs.general}>
			{ iconControls() }
			</InspectorTab>
			<InspectorTab {...UAGTabs.style}>
			{ ! hideLabel && ( textColorControls()) }
			{ 'icon' == image_icon && '' !== icon && ( iconStyleControls() ) }
			{ bgStyleControls() }
			{ borderStyleControls() }
			</InspectorTab>
			<InspectorTab {...UAGTabs.advance}></InspectorTab>
		</InspectorTabs>
		</InspectorControls>
	)
};
export default React.memo( Settings );
