import React from 'react';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';

import { __ } from '@wordpress/i18n';
import {InspectorControls} from '@wordpress/block-editor';
import { SelectControl, ToggleControl } from '@wordpress/components';
import UAGMediaPicker from '@Components/image';
import UAGIconPicker from '@Components/icon-picker';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { getImageSize } from '@Utils/Helpers';
import UAGSelectControl from '@Components/select-control';
import ResponsiveSlider from '@Components/responsive-slider';

let imageSizeOptions = [
	{
		value: 'thumbnail',
		label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ),
	},
	{ value: 'medium', label: __( 'Medium', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'full', label: __( 'Large', 'ultimate-addons-for-gutenberg' ) },
];

export default function Settings( props ) {
	const { attributes, setAttributes } = props.parentProps;
	const { 
		modalTrigger, 
		previewModal, 
		iconImage, 
		icon, 
		imageSize,
		buttonIcon,
		buttonIconPosition,
		buttonIconSpace,
		buttonIconSpaceTablet,
		buttonIconSpaceMobile,
		buttonIconSpaceType 
	} = attributes;

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {

	console.log( buttonIcon );

		
		if ( ! media || ! media.url ) {
			setAttributes( { iconImage: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			setAttributes( { iconImage: null } );
			return;
		}

		if ( media.sizes ) {
			const new_img = getImageSize( media.sizes );
			imageSizeOptions = new_img;
		}
		
		setAttributes( { iconImage: media } );
	};

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { iconImage: '' } );
	};

	if ( iconImage && iconImage.sizes ) {
		imageSizeOptions = getImageSize( iconImage.sizes );
	}
	
	const generalPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Modal Trigger', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<ToggleControl
				label={ __(
					'Preview Modal',
					'ultimate-addons-for-gutenberg'
				) }
				checked={ previewModal }
				onChange={ () =>
					setAttributes( { previewModal: ! previewModal } )
				}
			/>
			<SelectControl
				label={ __( 'Display Modal On', 'ultimate-addons-for-gutenberg' ) }
				value={ modalTrigger }
				onChange={ ( value ) => {
					setAttributes({ modalTrigger: value })
				} }
				options={ [
					{ value: 'text', label: 'Text' },
					{ value: 'icon', label: 'Icon' },
					{ value: 'image', label: 'Image' },
					{ value: 'button', label: 'Button' },
				] }
			/>
				{ modalTrigger === 'icon' && (
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
				{ modalTrigger === 'image' && (
					<>
						<UAGMediaPicker
							onSelectImage={ onSelectImage }
							backgroundImage={ iconImage }
							onRemoveImage={ onRemoveImage }
						/>
						{ iconImage &&
							iconImage.url !== 'null' &&
							iconImage.url !== '' && (
								<UAGSelectControl
									label={ __(
										'Image Size',
										'ultimate-addons-for-gutenberg'
									) }
									data={ {
										value: imageSize,
										label: 'imageSize',
									} }
									setAttributes={ setAttributes }
									options={ imageSizeOptions }
								/>
							) }
					</>
				) }
				{ modalTrigger === 'button' && (
					<>
						<UAGIconPicker
							label={ __(
								'Button Icon',
								'ultimate-addons-for-gutenberg'
							) }
							value={ buttonIcon }
							onChange={ ( value ) =>
								setAttributes( { buttonIcon: value } )
							}
						/>
						<UAGSelectControl
							label={ __(
								'Icon Position',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: buttonIconPosition,
								label: 'buttonIconPosition',
							} }
							setAttributes={ setAttributes }
							options={ [
								{
									value: 'before',
									label: __(
										'Before Text',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'after',
									label: __(
										'After Text',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
						/>
						<ResponsiveSlider
							label={ __(
								'Icon Spacing',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								desktop: {
									value: buttonIconSpace,
									label: 'buttonIconSpace',
								},
								tablet: {
									value: buttonIconSpaceTablet,
									label: 'buttonIconSpaceTablet',
								},
								mobile: {
									value: buttonIconSpaceMobile,
									label: 'buttonIconSpaceMobile',
								},
							} }
							min={ 0 }
							max={ 50 }
							unit={ {
								value: buttonIconSpaceType,
								label: 'buttonIconSpaceType',
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
										'EM',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'em',
								},
							] }
							setAttributes={ setAttributes }
						/>
					</>
				) }
		</UAGAdvancedPanelBody>
	)

	const stylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			Style settings
		</UAGAdvancedPanelBody>
	)

	return (
		<React.Fragment>
			<InspectorControls>
				<InspectorTabs>

					<InspectorTab { ...UAGTabs.general }>
						{generalPanel}
					</InspectorTab>

					<InspectorTab { ...UAGTabs.style }>
						{stylePanel}
					</InspectorTab>
					
				</InspectorTabs>
			</InspectorControls>
		</React.Fragment>
	);
}
