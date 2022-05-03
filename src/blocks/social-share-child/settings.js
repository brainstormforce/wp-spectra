/**
 * BLOCK: Social Share - Settings.
 */

// Import classes
import UAGIconPicker from '@Components/icon-picker';
import { __ } from '@wordpress/i18n';
import React from 'react';
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGTabsControl from '@Components/tabs';
import UAGImage from '@Components/image';



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const {
		type,
		image_icon,
		icon,
		image,
		icon_color,
		icon_hover_color,
		icon_bg_color,
		icon_bg_hover_color,
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

	const onChangeType = ( value ) => {
		const icon_mapping = {
			facebook: 'fab fa-facebook',
			twitter: 'fab fa-twitter-square',
			google: 'fab fa-google-plus-square',
			pinterest: 'fab fa-pinterest-square',
			linkedin: 'fab fa-linkedin',
			digg: 'fab fa-digg',
			blogger: 'fab fa-blogger',
			reddit: 'fab fa-reddit-square',
			stumbleupon: 'fab fa-stumbleupon-circle',
			tumblr: 'fab fa-tumblr-square',
			myspace: 'fas fa-user-friends',
			email: 'fas fa-envelope',
			pocket: 'fab fa-get-pocket',
			vk: 'fab fa-vk',
			odnoklassniki: 'fab fa-odnoklassniki',
			skype: 'fab fa-skype',
			telegram: 'fab fa-telegram',
			whatsapp: 'fab fa-whatsapp',
			xing: 'fab fa-xing',
			buffer: 'fab fa-buffer',
		};

		setAttributes( { type: value } );

		setAttributes( { icon: icon_mapping[ value ] } );
	};

	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<SelectControl
					label={ __( 'Type' ) }
					value={ type }
					options={ [
						{
							value: 'facebook',
							label: __(
								'Facebook',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'twitter',
							label: __(
								'Twitter',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'google',
							label: __(
								'Google Currents',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'pinterest',
							label: __(
								'Pinterest',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'linkedin',
							label: __(
								'LinkedIn',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'digg',
							label: __(
								'Digg',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'blogger',
							label: __(
								'Blogger',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'reddit',
							label: __(
								'Reddit',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'stumbleupon',
							label: __(
								'StumbleUpon',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'tumblr',
							label: __(
								'Tumblr',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'myspace',
							label: __(
								'Myspace',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'email',
							label: __(
								'Email',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'pocket',
							label: __(
								'Pocket',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'vk',
							label: __( 'VK', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'odnoklassniki',
							label: __(
								'Odnoklassniki',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'skype',
							label: __(
								'Skype',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'telegram',
							label: __(
								'Telegram',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'whatsapp',
							label: __(
								'WhatsApp',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'xing',
							label: __(
								'Xing',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'buffer',
							label: __(
								'Buffer',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					onChange={ onChangeType }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Image / Icon',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: image_icon,
						label: 'image_icon',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'icon',
							label: __(
								'Icon',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'image',
							label: __(
								'Image',
								'ultimate-addons-for-gutenberg'
							),
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
						<UAGImage
							onSelectImage={ onSelectImage }
							backgroundImage={ image }
							onRemoveImage={ onRemoveImage }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const iconColorSettings = () => {
		let colorControl = '';
		let colorControlHover = '';

		if ( 'image' === image_icon ) {
			colorControl = (
				<>
					<AdvancedPopColorControl
						label={ __(
							'Background Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={ icon_bg_color ? icon_bg_color : '' }
						onColorChange={ ( value ) =>
							setAttributes( { icon_bg_color: value } )
						}
					/>
				</>
			);
			colorControlHover = (
				<>
					<AdvancedPopColorControl
						label={ __(
							'Background Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={
							icon_bg_hover_color ? icon_bg_hover_color : ''
						}
						onColorChange={ ( value ) =>
							setAttributes( { icon_bg_hover_color: value } )
						}
					/>
				</>
			);
		} else {
			colorControl = (
				<>
					<AdvancedPopColorControl
						label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ icon_color ? icon_color : '' }
						onColorChange={ ( value ) =>
							setAttributes( { icon_color: value } )
						}
					/>
					<AdvancedPopColorControl
						label={ __(
							'Background Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={ icon_bg_color ? icon_bg_color : '' }
						onColorChange={ ( value ) =>
							setAttributes( { icon_bg_color: value } )
						}
					/>
				</>
			);
			colorControlHover = (
				<>
					<AdvancedPopColorControl
						label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ icon_hover_color ? icon_hover_color : '' }
						onColorChange={ ( value ) =>
							setAttributes( { icon_hover_color: value } )
						}
					/>
					<AdvancedPopColorControl
						label={ __(
							'Background Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={
							icon_bg_hover_color ? icon_bg_hover_color : ''
						}
						onColorChange={ ( value ) =>
							setAttributes( { icon_bg_hover_color: value } )
						}
					/>
				</>
			);
		}
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Icon Color', 'ultimate-addons-for-gutenberg' ) }
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
					normal={ colorControl }
					hover={ colorControlHover }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	return (
		<InspectorControls>
			<InspectorTabs>
				<InspectorTab { ...UAGTabs.general }>
					{ generalSettings() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.style }>
					{ iconColorSettings() }
				</InspectorTab>
				<InspectorTab
					{ ...UAGTabs.advance }
					parentProps={ props }
				></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};

export default React.memo( Settings );
