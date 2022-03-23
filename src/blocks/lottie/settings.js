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
		const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjREJEQ0RFIiBkPSJNMjM5LjQ3MiwxOTEuNzM4Yy00LjIyOCwwLjQyLTcuNzcyLDIuMTIyLTEwLjkzLDQuNjc2DQoJCWMtNS45ODQsNC44NDEtOS40MzQsMTEuMzgxLTExLjgwOCwxOC40ODRjLTEuNDE1LDQuMjM2LTIuMTk1LDguNjgzLTMuMzY3LDEzLjAwNmMtMC4yODIsMS4wMzktMC43NjQsMi4yMzgtMS41NDgsMi44ODkNCgkJYy0yLjM2NiwxLjk2LTUuMTg0LDAuMTU3LTUuODgyLTMuMTc2Yy0xLjIzNi01LjkwMy0yLjUzMS0xMS44MjQtNC4zNDUtMTcuNTY1Yy0xLjYwMS01LjA2My00LjUwNy05LjUzOC04LjU0Mi0xMy4xMjENCgkJYy05LjY0NS04LjU2Ni0yMy43NzEtNy4wODUtMzEuODg4LDMuMzU2Yy01LjE2Niw2LjY0Ny03LjU1OSwxNC40NDctOS4xMDksMjIuNTY2Yy0wLjMyMSwxLjY3OS0wLjUsMy4zODMtMC43NjEsNS4wNzINCgkJYy0wLjM1OCwyLjMxMy0xLjc3NSwzLjcwNy0zLjcwOCwzLjY2OWMtMS45NDctMC4wMzgtMy4xOC0xLjU0OC0zLjY3OS0zLjc3M2MtMS4zMTctNS44ODgtMi41MjMtMTEuODI0LTQuMzEzLTE3LjU3Mg0KCQljLTEuNjAyLTUuMTQ2LTQuNTMtOS42ODUtOC42Mi0xMy4zMTdjLTkuNjQ2LTguNTY4LTIzLjc1My03LjA5My0zMS44ODgsMy4zNTVjLTUuMTI1LDYuNTgxLTcuNTEzLDE0LjMxMy05LjA3MSwyMi4zNTQNCgkJYy0wLjM2NSwxLjg4Ni0wLjU0MSwzLjgxLTAuODUzLDUuNzA3Yy0wLjMzMywyLjAyMi0yLjAwMSwzLjM5Mi0zLjg2NCwzLjIzN2MtMS44OTYtMC4xNTYtMy41NTItMS43NjctMy4zNTEtMy43NjUNCgkJYzEuMzk2LTEzLjg1Niw1LjA4OS0yNi44NTMsMTUuNzkzLTM2LjYwMmMxMi42NS0xMS41MjEsMzIuMzAxLTguOTY0LDQyLjcyNSw1LjUwOWMyLjg4Niw0LjAwNiw0Ljk5Miw4LjU3NSw3LjQxOCwxMi44MTkNCgkJYzAuMjk1LTAuNjk2LDAuNzQ1LTEuNzc5LDEuMjEzLTIuODU1YzMuMDk4LTcuMTA2LDcuMi0xMy40NjcsMTMuNzg0LTE3Ljg1NWMxMi40MTgtOC4yNzgsMjguNjMzLTUuNjMsMzguNDI4LDYuMTg5DQoJCWMzLjkxNyw0LjcyOSw2LjU1MiwxMC4xNDcsOC43MzgsMTYuMjI5YzAuNTg3LTEuMzU4LDEuMDM3LTIuNDM0LDEuNTEtMy40OThjMy41NjMtOC4wMzMsOC4yMDYtMTUuMjcxLDE2LjExMS0xOS42MzgNCgkJYzIuOTk1LTEuNjUyLDYuNDU4LTIuNTA4LDkuNzcyLTMuNTFjMS4yNDMtMC4zNzYsMi4wNDEtMC42NzIsMi41NTgtMi4wNDRjMi41MjQtNi43MTYsOS4xNjQtMTAuMzY5LDE2LjI2Ny05LjEyNg0KCQljNi41NTUsMS4xNDgsMTEuNTg3LDYuOTQ3LDExLjc5OCwxMy41OTdjMC4yMzEsNy4yNDEtNC4zMSwxMy4yMTctMTEuMzAxLDE0Ljg3MWMtNi41NTQsMS41NTItMTMuNDUyLTEuODA5LTE2LjM2Mi03Ljk3OA0KCQlDMjQwLjA5NywxOTMuMjkxLDIzOS44NDYsMTkyLjYyOCwyMzkuNDcyLDE5MS43Mzh6IE0yNjAuNzk5LDE4Ny42OTNjLTAuMDI1LTQuMDM5LTMuMzc5LTcuMzM0LTcuMzc5LTcuMjQ3DQoJCWMtMy45MzYsMC4wODYtNy4xNjMsMy4zNTItNy4xODksNy4yNzNjLTAuMDI3LDQuMDI5LDMuMjY1LDcuMzE3LDcuMzIyLDcuMzEyQzI1Ny42NDYsMTk1LjAyNCwyNjAuODI0LDE5MS44MDYsMjYwLjc5OSwxODcuNjkzeiIvPg0KCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjREJEQ0RFIiBkPSJNMTU4LjU3MSwxNDMuODQ3Yy0wLjAwMS00Ljk4NiwwLjAwNy05Ljk3My0wLjAwNC0xNC45NTkNCgkJYy0wLjAwOC00LjE3OCwxLjUwNi03LjU0LDUuMzUyLTkuNDc5YzMuODE1LTEuOTI0LDcuMjU0LTAuOTM4LDEwLjUzMywxLjUzNmM2LjQ4Miw0Ljg4NiwxMy4wNDUsOS42NjIsMTkuNTYxLDE0LjUNCgkJYzYuMzg1LDQuNzQxLDYuMzk0LDEyLjI0NCwwLjAwNywxNi45OTljLTYuNjI2LDQuOTMtMTMuMjk3LDkuNzk4LTE5LjkxMSwxNC43NDZjLTMuMTgsMi4zNzgtNi41NTIsMy4xMjctMTAuMTgxLDEuMzA3DQoJCWMtMy42Ny0xLjg0LTUuMzEtNS4wMjgtNS4zNDUtOS4wNDlDMTU4LjUzOCwxNTQuMjQ3LDE1OC41NzIsMTQ5LjA0NiwxNTguNTcxLDE0My44NDd6IE0xNjUuODgxLDE0My44NDYNCgkJYzAsNS4wNTYtMC4wNjgsMTAuMTEzLDAuMDU4LDE1LjE2NmMwLjAyNSwwLjk5MywwLjU2MiwyLjMzMSwxLjMxMywyLjgyNWMwLjUzOSwwLjM1NCwxLjk5OC0wLjE5OSwyLjc1NS0wLjc0OA0KCQljNi41NjctNC43NjQsMTMuMDc0LTkuNjExLDE5LjU4Ny0xNC40NTJjMi41ODMtMS45MjEsMi41ODUtMy40NTYsMC4wMTEtNS4zN2MtNi40NTUtNC43OTgtMTIuOTAyLTkuNjA3LTE5LjQxNC0xNC4zMjYNCgkJYy0wLjgxOC0wLjU5NC0yLjM4Mi0xLjIzNC0yLjkzMi0wLjg2M2MtMC43ODQsMC41My0xLjI5MSwxLjk2NS0xLjMyLDMuMDNDMTY1LjgwNiwxMzQuMDE4LDE2NS44OCwxMzguOTMyLDE2NS44ODEsMTQzLjg0NnoiLz4NCjwvZz4NCjwvc3ZnPg0K';
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
