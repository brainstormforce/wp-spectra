import React from 'react';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import { __ } from '@wordpress/i18n';
import {InspectorControls} from '@wordpress/block-editor';
import { Icon, SelectControl, ToggleControl } from '@wordpress/components';
import UAGMediaPicker from '@Components/image';
import UAGIconPicker from '@Components/icon-picker';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { getImageSize } from '@Utils/Helpers';
import UAGSelectControl from '@Components/select-control';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import Range from '@Components/range/Range.js';

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
		buttonIconSpaceType,
		modalAlign,
		modalAlignTablet,
		modalAlignMobile,
		modalWidth,
		modalWidthTablet,
		modalWidthMobile,
		modalWidthType,
		modalHeight,
		modalHeightTablet,
		modalHeightMobile,
		modalHeightType,
		appearEffect,
		closeIconSize,
		closeIconPosition
	} = attributes;

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {
		
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
	
	const modalTriggerPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Modal Trigger', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
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
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: modalAlign,
							label: 'modalAlign',
						},
						tablet: {
							value: modalAlignTablet,
							label: 'modalAlignTablet',
						},
						mobile: {
							value: modalAlignMobile,
							label: 'modalAlignMobile',
						},
					} }
					options={ [
						{
							value: 'left',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-left' ) }
								/>
							),
							tooltip: __(
								'Left',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'center',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-center' ) }
								/>
							),
							tooltip: __(
								'Center',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'right',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-right' ) }
								/>
							),
							tooltip: __(
								'Right',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ true }
					responsive={true}
				/>
		</UAGAdvancedPanelBody>
	)

	const modalContentPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Modal Content', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
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

			<ResponsiveSlider
				label={ __(
					'Width',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					desktop: {
						value: modalWidth,
						label: 'modalWidth',
					},
					tablet: {
						value: modalWidthTablet,
						label: 'modalWidthTablet',
					},
					mobile: {
						value: modalWidthMobile,
						label: 'modalWidthMobile',
					},
				} }
				min={ '%' === modalWidthType ? 10 : 300 }
				max={ '%' === modalWidthType ? 100 : 1500 }
				unit={ {
					value: modalWidthType,
					label: 'modalWidthType',
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
				setAttributes={ setAttributes }
			/>
			<ResponsiveSlider
				label={ __(
					'Minimum Height',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					desktop: {
						value: modalHeight,
						label: 'modalHeight',
					},
					tablet: {
						value: modalHeightTablet,
						label: 'modalHeightTablet',
					},
					mobile: {
						value: modalHeightMobile,
						label: 'modalHeightMobile',
					},
				} }
				min={ '%' === modalHeightType ? 10 : 300 }
				max={ '%' === modalHeightType ? 100 : 1500 }
				unit={ {
					value: modalHeightType,
					label: 'modalHeightType',
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
				setAttributes={ setAttributes }
			/>
			<UAGSelectControl
				label={ __(
					'Appear Effect',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: appearEffect,
					label: 'appearEffect',
				} }
				setAttributes={ setAttributes }
				options={ [
					{
						value: 'uagb-effect-default',
						label: __(
							'Default',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'uagb-effect-1',
						label: __(
							'Fade in & Scale',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'uagb-effect-2',
						label: __(
							'Slide in (right)',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'uagb-effect-3',
						label: __(
							'Slide in (bottom)',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'uagb-effect-4',
						label: __(
							'Super Scaled',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'uagb-effect-5',
						label: __(
							'Slip from top',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
			/>
		</UAGAdvancedPanelBody>
	)

	const modalClosePanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Close Button', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<Range
				label={ __(
					'Icon Size',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ closeIconSize }
				data={ {
					value: closeIconSize,
					label: 'closeIconSize',
				} }
				min={ 0 }
				max={ 50 }
				displayUnit={ false }
			/>

			<UAGSelectControl
				label={ __(
					'Icon Position',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: closeIconPosition,
					label: 'closeIconPosition',
				} }
				setAttributes={ setAttributes }
				options={ [
					{
						value: 'popup-top-left',
						label: __(
							'Popup - Top Left',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'popup-top-right',
						label: __(
							'Popup - Top Right',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
			/>
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
						{modalTriggerPanel}
						{modalContentPanel}
						{modalClosePanel}
					</InspectorTab>

					<InspectorTab { ...UAGTabs.style }>
						{stylePanel}
					</InspectorTab>
					
				</InspectorTabs>
			</InspectorControls>
		</React.Fragment>
	);
}
