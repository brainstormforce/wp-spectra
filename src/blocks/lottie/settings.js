import React from 'react';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import ResponsiveSlider from '@Components/responsive-slider';
import Range from '@Components/range/Range.js';
import UAGTabsControl from '@Components/tabs';

import {
	InspectorControls,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	AlignmentToolbar
} from '@wordpress/block-editor';

import {
	ToggleControl,
	ToolbarGroup,
	Icon,
} from '@wordpress/components';



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	const { loopLottie, reverseDirection } = props;

	props = props.parentProps;

	const { setAttributes, attributes } = props;

	const {
		align,
		height,
		heightTablet,
		heightMob,
		width,
		widthTablet,
		widthMob,
		backgroundColor,
		loop,
		speed,
		reverse,
		jsonLottie,
		lottieURl,
		playOn,
		backgroundHColor,
		isPreview
	} = attributes;

	const controlsSettings = (
		<UAGAdvancedPanelBody
			title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Play On', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: playOn,
					label: 'playOn',
				} }
				className="uagb-multi-button-alignment-control"
				options={ [
					{
						value: 'none',
						label: __( 'Default', 'ultimate-addons-for-gutenberg' ),
						tooltip: __(
							'Default',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'hover',
						label: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
						tooltip: __(
							'On Hover',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'click',
						label: __( 'Click', 'ultimate-addons-for-gutenberg' ),
						tooltip: __(
							'On Click',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'scroll',
						label: __(
							'Viewport',
							'ultimate-addons-for-gutenberg'
						),
						tooltip: __(
							'Viewport',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				help={
					'scroll' === playOn
						? __(
								"This setting will only take effect once you are on the live page, and not while you're editing.",
								'ultimate-addons-for-gutenberg'
						  )
						: ''
				}
			/>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: align,
					label: 'align',
				} }
				className="uagb-multi-button-alignment-control"
				options={ [
					{
						value: 'left',
						icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
						tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'center',
						icon: (
							<Icon icon={ renderSVG( 'fa fa-align-center' ) } />
						),
						tooltip: __(
							'Center',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'right',
						icon: (
							<Icon icon={ renderSVG( 'fa fa-align-right' ) } />
						),
						tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
					},
				] }
				showIcons={ true }
			/>
			<ToggleControl
				label={ __( 'Loop', 'ultimate-addons-for-gutenberg' ) }
				checked={ loop }
				onChange={ loopLottie }
				help={ __(
					"Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing."
				) }
			/>
			<Range
				label={ __( 'Speed', 'ultimate-addons-for-gutenberg' ) }
				setAttributes={ setAttributes }
				value={ speed }
				onChange={ ( value ) => setAttributes( { speed: value } ) }
				min={ 1 }
				max={ 50 }
				displayUnit={ false }
			/>
			{ loop && (
				<ToggleControl
					label={ __( 'Reverse', 'ultimate-addons-for-gutenberg' ) }
					checked={ reverse }
					onChange={ reverseDirection }
					help={ __(
						'Direction of animation.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
			) }
		</UAGAdvancedPanelBody>
	);

	const styleSettings = (
		<UAGAdvancedPanelBody
			title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<ResponsiveSlider
				label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					desktop: {
						value: width,
						label: 'width',
					},
					tablet: {
						value: widthTablet,
						label: 'widthTablet',
					},
					mobile: {
						value: widthMob,
						label: 'widthMob',
					},
				} }
				min={ 0 }
				max={ 1000 }
				displayUnit={ false }
				setAttributes={ setAttributes }
			/>
			<ResponsiveSlider
				label={ __( 'Height', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					desktop: {
						value: height,
						label: 'height',
					},
					tablet: {
						value: heightTablet,
						label: 'heightTablet',
					},
					mobile: {
						value: heightMob,
						label: 'heightMob',
					},
				} }
				min={ 0 }
				max={ 1000 }
				displayUnit={ false }
				setAttributes={ setAttributes }
			/>
			<UAGTabsControl
				tabs={ [
					{
						name: 'normal',
						title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
					},
					{
						name: 'hover',
						title: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
					},
				] }
				normal={
					<AdvancedPopColorControl
						label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ backgroundColor ? backgroundColor : '' }
						onColorChange={ ( value ) =>
							setAttributes( { backgroundColor: value } )
						}
					/>
				}
				hover={
					<AdvancedPopColorControl
						label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ backgroundHColor ? backgroundHColor : '' }
						onColorChange={ ( value ) =>
							setAttributes( { backgroundHColor: value } )
						}
					/>
				}
				disableBottomSeparator={ true }
			/>
		</UAGAdvancedPanelBody>
	);

	const onSelectLottieJSON = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { jsonLottie: null } );
			return;
		}

		setAttributes( { jsonLottie: media } );
		setAttributes( { lottieURl: media.url } );
	};

	//Check if given url is valid or not for json extension.
	let validJsonPath = 'invalid';
	if ( lottieURl && lottieURl.endsWith( '.json' ) ) {
		validJsonPath = 'valid';
	}
	if ( ! uagb_blocks_info.uagb_mime_type ) {
		return (
			<div className="uagb-show-notice">
				<span>
					{ __(
						'Lottie block requires the file type JSON to be uploaded to media files. Seems like your website has disabled this file type. Please refer',
						'ultimate-addons-for-gutenberg'
					) }
					<a
						href={ `${ uagb_blocks_info.uagb_site_url }/docs/lottie/?utm_source=uagb-dashboard&utm_medium=uagb-editor-page&utm_campaign=uagb-plugin` }
						target="__blank"
					>
						{ ' ' }
						{ __( 'this document' ) }{ ' ' }
					</a>
					{ __( 'to know more about it.' ) }
				</span>
			</div>
		);
	}

	if ( validJsonPath === 'invalid' ) {
		const lottie_url = (
			<span>
				{ ' ' }
				{ __(
					'Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations',
					'ultimate-addons-for-gutenberg'
				) }
				<a href="https://lottiefiles.com/" target="__blank">
					{ ' ' }
					{ __( 'here on this' ) }{ ' ' }
				</a>
				{ __( 'website.' ) }
			</span>
		);
		const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/lottie-animation.png`;
		return (
			isPreview ? <img width='100%' src={previewImageData} alt=''/> :
			<>
			<div className="uagb-lottie_upload_wrap">
				<MediaPlaceholder
					labels={ {
						title: __( 'Lottie', 'ultimate-addons-for-gutenberg' ),
						instructions: lottie_url,
					} }
					allowedTypes={ [ 'application/json' ] }
					accept={ [ 'application/json' ] }
					value={ jsonLottie }
					onSelectURL={ ( value ) =>
						setAttributes( { lottieURl: value } )
					}
					onSelect={ onSelectLottieJSON }
				/>
			</div>
			</>
		);
	}

	const getBlockControls = () => {
		return (
			<BlockControls>
				<ToolbarGroup>
					<MediaReplaceFlow
						mediaURL={ lottieURl }
						allowedTypes={ [ 'application/json' ] }
						accept={ [ 'application/json' ] }
						onSelectURL={ ( value ) =>
							setAttributes( { lottieURl: value } )
						}
						onSelect={ onSelectLottieJSON }
					/>
				</ToolbarGroup>
				<AlignmentToolbar
					value={ align }
					onChange={ ( value ) =>
						setAttributes( { align: value } )
					}
				/>
			</BlockControls>
		);
	};

	return (
		<>
			{ validJsonPath === 'valid' && getBlockControls() }
			<InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'style', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>
						{ controlsSettings }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ styleSettings }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};

export default React.memo( Settings );
