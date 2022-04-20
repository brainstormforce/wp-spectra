/**
 * BLOCK: Social Share - Settings.
 */

import lazyLoader from '@Controls/lazy-loader';
import React, { Suspense } from 'react';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import presets from './presets';
import UAGPresets from '@Components/presets';
const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const {
		align,
		gap,
		stack,
		social_layout,
		borderRadius,
		size,
		sizeType,
		sizeMobile,
		sizeTablet,
		bgSize,
	} = attributes;

	const blockControls = () => {
		return (
			<BlockControls>
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } );
					} }
					controls={ [ 'left', 'center', 'right' ] }
				/>
			</BlockControls>
		);
	};

	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: social_layout,
						label: 'social_layout',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'horizontal',
							label: __(
								'Horizontal',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'vertical',
							label: __(
								'Vertical',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ false }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Alignment',
						'ultimate-addons-for-gutenberg'
					) }
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
									icon={ renderSVG(
										'fa fa-align-center'
									) }
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
									icon={ renderSVG(
										'fa fa-align-right'
									) }
								/>
							),
							tooltip: __(
								'Right',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ true }
				/>
				{ 'horizontal' === social_layout && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Stack On',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: stack,
								label: 'stack',
							} }
							className="uagb-multi-button-alignment-control"
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
							showIcons={ false }
							help={ __(
								'Note: Choose on what breakpoint the Icons will stack.',
								'ultimate-addons-for-gutenberg'
							) }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const spacingSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Common', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveSlider
					label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: size,
							label: 'size',
						},
						tablet: {
							value: sizeTablet,
							label: 'sizeTablet',
						},
						mobile: {
							value: sizeMobile,
							label: 'sizeMobile',
						},
					} }
					min={ 0 }
					max={ 100 }
					unit={ {
						value: sizeType,
						label: 'sizeType',
					} }
					setAttributes={ setAttributes }
				/>
				<Range
					label={ __(
						'Background Size',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ bgSize }
					onChange={ ( value ) => setAttributes( { bgSize: value } ) }
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
					help={ __(
						'Note: Background Size option is useful when one adds background color to the icons.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<Range
					label={ __(
						'Border Radius',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ borderRadius }
					onChange={ ( value ) =>
						setAttributes( { borderRadius: value } )
					}
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
					help={ __(
						'Note: Border Radius option is useful when one adds background color to the icons.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<Range
					label={ __(
						'Gap between Items',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ gap }
					onChange={ ( value ) => setAttributes( { gap: value } ) }
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const presetSettings = () => {
		return <UAGAdvancedPanelBody
					title={ __( 'Presets', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ true }
				>
					<UAGPresets
						setAttributes = { setAttributes }
						presets = { presets }
						presetInputType = 'radioImage'
					/>
				</UAGAdvancedPanelBody>
	};
	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ presetSettings() }
						{ generalSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ spacingSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</Suspense>
	);
};

export default React.memo( Settings );
