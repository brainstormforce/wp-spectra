import UAGIconPicker from "../../components/icon-picker";
import React from 'react';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	MediaUpload,
} from '@wordpress/block-editor';
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "../../components/inspector-tabs/InspectorTab.js";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import MultiButtonsControl from "../../components/multi-buttons-control";

import {
	PanelBody,
	Button,
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

	const textColorControls = () => {
		return (
				<PanelBody
					title={ __( 'Text', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ true }
				>
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
					<AdvancedPopColorControl
						label={__(
							"Hover",
							"ultimate-addons-for-gutenberg"
						)}
						colorValue={label_hover_color ? label_hover_color : ""}
						onColorChange={(value) =>
							setAttributes({ label_hover_color: value })
						}
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
					<AdvancedPopColorControl
						label={__(
							'Hover',
							"ultimate-addons-for-gutenberg"
						)}
						colorValue={icon_hover_color ? icon_hover_color : ""}
						onColorChange={(value) =>
							setAttributes({ icon_hover_color: value })
						}
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
					<AdvancedPopColorControl
						label={__(
							"Hover",
							"ultimate-addons-for-gutenberg"
						)}
						colorValue={icon_bg_hover_color ? icon_bg_hover_color : ""}
						onColorChange={(value) =>
							setAttributes({ icon_bg_hover_color: value })
						}
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
					<AdvancedPopColorControl
						label={__(
							"Hover",
							"ultimate-addons-for-gutenberg"
						)}
						colorValue={icon_border_hover_color ? icon_border_hover_color : ""}
						onColorChange={(value) =>
							setAttributes({ icon_border_hover_color: value })
						}
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
							<div className="uagb-bg-image">
							<MediaUpload
								title={__(
									"Select Image",
									"ultimate-addons-for-gutenberg"
								)}
								onSelect={ ( value ) =>
									setAttributes( { image: value } )
								}
								allowedTypes={["image"]}
								value={image}
								render={ ( { open } ) => (
									<Button isSecondary onClick={ open }>
										{ ! image
											? __(
													'Select Image',
													'ultimate-addons-for-gutenberg'
											)
											: __(
													'Replace image',
													'ultimate-addons-for-gutenberg'
											) }
									</Button>
								) }
							/>
							</div>
							{ image && (
								<Button
									className="uagb-rm-btn"
									onClick={ () =>
										setAttributes( { image: null } )
									}
									isLink
									isDestructive
								>
									{ __(
										'Remove Image',
										'ultimate-addons-for-gutenberg'
									) }
								</Button>
							) }
						</>
					) }
					<h2>
						{ __(
							'List Item Link',
							'ultimate-addons-for-gutenberg'
						) }
					</h2>
					<ToggleControl
						label={ __(
							'Disable Link',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ disableLink }
						onChange={ () =>
							setAttributes( { disableLink: ! disableLink } )
						}
					/>
					{ ! disableLink && (
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
