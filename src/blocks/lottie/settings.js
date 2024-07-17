import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import ResponsiveSlider from '@Components/responsive-slider';
import Range from '@Components/range/Range.js';
import UAGMediaPicker from '@Components/image';
import UAGTabsControl from '@Components/tabs';

import { InspectorControls, BlockControls, MediaReplaceFlow } from '@wordpress/block-editor';

import { ToggleControl, ToolbarGroup, Icon, ExternalLink } from '@wordpress/components';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGTextControl from '@Components/text-control';
import { memo } from '@wordpress/element';

const Settings = ( props ) => {

	const { loopLottie, reverseDirection } = props;

	const {
		setAttributes,
		attributes: {
		lottieSource,
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
		},
		onSelectLottieJSON,
		onSelectLottieURL,
	} = props;

	const controlsSettings = (
		<>
			<UAGAdvancedPanelBody title={ __( 'General', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
				<p className="uagb-form-notice">
					{
						<>
							{__(
								'Note: You can see sample Lottie animations ',
								'ultimate-addons-for-gutenberg'
							)}
							<ExternalLink
								href={
									'https://lottiefiles.com/'
								}
							>
								{__( 'here on this', 'ultimate-addons-for-gutenberg' )}
							</ExternalLink>
							{__( ' website.', 'ultimate-addons-for-gutenberg' )}
						</>
					}
				</p>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'File Source', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: lottieSource,
						label: 'lottieSource',
					} }
					options={ [
						{
							value: 'library',
							label: __( 'Library', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'url',
							label: __( 'URL', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				{ lottieSource === 'upload' && (
					<UAGMediaPicker
						backgroundImage={ jsonLottie }
						onSelectImage={ onSelectLottieJSON }
						slug={ 'lottie' }
						label={ __( 'Lottie Animation', 'ultimate-addons-for-gutenberg' ) }
						allow={ [ 'application/json' ] }
						disableRemove={ true }
					/>
				) }
				{ lottieSource === 'library' && (
					<UAGMediaPicker
						backgroundImage={ jsonLottie }
						onSelectImage={ onSelectLottieJSON }
						slug={ 'lottie' }
						label={ __( 'Lottie Animation', 'ultimate-addons-for-gutenberg' ) }
						allow={ [ 'application/json' ] }
						disableRemove={ true }
					/>
				) }
				{ lottieSource === 'url' && (
					<UAGTextControl
						label={ __( 'Lottie Animation URL', 'ultimate-addons-for-gutenberg' ) }
						value={ lottieURl }
						data={ {
							value: lottieURl,
							label: 'lottieURl',
						} }
						setAttributes={ setAttributes }
						onChange={ ( value ) => setAttributes( { lottieURl: value } ) }
					/>
				) }
			</UAGAdvancedPanelBody>
			<UAGAdvancedPanelBody title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
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
						},
						{
							value: 'hover',
							label: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'click',
							label: __( 'Click', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'scroll',
							label: __( 'Viewport', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					help={
						'scroll' === playOn || 'none' === playOn
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
				/>
				<ToggleControl
					label={ __( 'Loop', 'ultimate-addons-for-gutenberg' ) }
					checked={ loop }
					onChange={ loopLottie }
					help={ __(
						"Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing.",
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<Range
					label={ __( 'Speed', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ speed }
					data={ {
						value: speed,
						label: 'speed',
					} }
					min={ 1 }
					max={ 50 }
					displayUnit={ false }
					help={ __(
						'This setting will only take effect once you refresh the editor page.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				{ loop && (
					<ToggleControl
						label={ __( 'Reverse', 'ultimate-addons-for-gutenberg' ) }
						checked={ reverse }
						onChange={ reverseDirection }
						help={ __( 'Direction of animation.', 'ultimate-addons-for-gutenberg' ) }
					/>
				) }
			</UAGAdvancedPanelBody>
		</>
	);

	const styleSettings = (
		<UAGAdvancedPanelBody title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
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
						label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ backgroundColor ? backgroundColor : '' }
						data={ {
							value: backgroundColor,
							label: 'backgroundColor',
						} }
						setAttributes={ setAttributes }
					/>
				}
				hover={
					<AdvancedPopColorControl
						label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ backgroundHColor ? backgroundHColor : '' }
						data={ {
							value: backgroundHColor,
							label: 'backgroundHColor',
						} }
						setAttributes={ setAttributes }
					/>
				}
				disableBottomSeparator={ true }
			/>
		</UAGAdvancedPanelBody>
	);

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
						{ __( 'this document', 'ultimate-addons-for-gutenberg' ) }{ ' ' }
					</a>
					{ __( 'to know more about it.', 'ultimate-addons-for-gutenberg' ) }
				</span>
			</div>
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
						onSelectURL={ ( value ) => onSelectLottieURL( value ) }
						onSelect={ onSelectLottieJSON }
					/>
				</ToolbarGroup>
			</BlockControls>
		);
	};

	return (
		<>
			{ getBlockControls() }
			<InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'style', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>{ controlsSettings }</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>{ styleSettings }</InspectorTab>
					<InspectorTab { ...UAGTabs.advance } parentProps={ props }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};

export default memo( Settings );
