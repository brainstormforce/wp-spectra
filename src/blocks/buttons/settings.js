import lazyLoader from '@Controls/lazy-loader';
import React, { Suspense } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, BlockAlignmentToolbar } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import Range from '@Components/range/Range.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';


import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const {
		align,
		gap,
		stack,
		loadGoogleFonts,
		fontFamily,
		fontWeight,
		fontStyle,
		fontTransform,
		fontDecoration,
	} = attributes;

	let loadBtnGoogleFonts;

	if ( loadGoogleFonts === true ) {
		const btnconfig = {
			google: {
				families: [
					fontFamily + ( fontWeight ? ':' + fontWeight : '' ),
				],
			},
		};

		loadBtnGoogleFonts = (
			<WebfontLoader config={ btnconfig }></WebfontLoader>
		);
	}

	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
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
						{
							value: 'full',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-justify' ) }
								/>
							),
							tooltip: __(
								'Full Width',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ true }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Stack On', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: stack,
						label: 'stack',
					} }
					options={ [
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'desktop',
							label: __(
								'Desktop',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'tablet',
							label: __(
								'Tablet',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'mobile',
							label: __(
								'Mobile',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					help={ __(
						'Note: Choose on what breakpoint the buttons will stack.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<Range
					label={ __(
						'Gap Between Buttons',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ gap }
					onChange={ ( value ) => setAttributes( { gap: value } ) }
					min={ 0 }
					max={ 500 }
					displayUnit={ false }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const styleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: loadGoogleFonts,
						label: 'loadGoogleFonts',
					} }
					fontFamily={ { value: fontFamily, label: 'fontFamily' } }
					fontWeight={ { value: fontWeight, label: 'fontWeight' } }
					fontStyle={ {
						value: fontStyle,
						label: 'fontStyle',
					} }
					transform={ {
						value: fontTransform,
						label: 'fontTransform',
					} }
					decoration={ {
						value: fontDecoration,
						label: 'fontDecoration',
					} }
					disableFontSize={ true }
					disableLineHeight={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const blockControls = () => {
		return (
			<BlockControls>
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } );
					} }
					controls={ [ 'left', 'center', 'right', 'full' ] }
				/>
			</BlockControls>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ styleSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadBtnGoogleFonts }
		</Suspense>
	);
};

export default React.memo( Settings );
