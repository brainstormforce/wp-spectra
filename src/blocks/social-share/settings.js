/**
 * BLOCK: Social Share - Settings.
 */

import lazyLoader from '@Controls/lazy-loader';
import React, { Suspense } from 'react';
import Range from "../../components/range/Range.js";
import ResponsiveSlider from "../../components/responsive-slider";
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab from "../../components/inspector-tabs/InspectorTab.js";

import { __ } from '@wordpress/i18n';

import {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	SelectControl,
	Button,
	ButtonGroup,
} from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, deviceType } = props;

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

	const sizeTypes = [
		{ key: 'px', name: __( 'px', 'ultimate-addons-for-gutenberg' ) },
		{ key: 'em', name: __( 'em', 'ultimate-addons-for-gutenberg' ) },
	];

	const sizeTypesControls = (
		<ButtonGroup
			className="uagb-size-type-field"
			aria-label={ __( 'Size Type', 'ultimate-addons-for-gutenberg' ) }
		>
			{ sizeTypes.map( ( { name, key } ) => (
				<Button
					key={ key }
					className="uagb-size-btn"
					isSmall
					isPrimary={ sizeType === key }
					aria-pressed={ sizeType === key }
					onClick={ () => setAttributes( { sizeType: key } ) }
				>
					{ name }
				</Button>
			) ) }
		</ButtonGroup>
	);

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
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<SelectControl
					label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
					value={ social_layout }
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
					onChange={ ( value ) =>
						setAttributes( { social_layout: value } )
					}
				/>
				{ 'horizontal' == social_layout && (
					<>
						<SelectControl
							label={ __(
								'Stack on',
								'ultimate-addons-for-gutenberg'
							) }
							value={ stack }
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
							onChange={ ( value ) =>
								setAttributes( { stack: value } )
							}
							help={ __(
								'Note: Choose on what breakpoint the Icons will stack.',
								'ultimate-addons-for-gutenberg'
							) }
						/>
					</>
				) }
				<hr className="uagb-editor__separator" />
				<ResponsiveSlider
					label={__(
						"Size",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						desktop: {
							value: size,
							label: "size",
						},
						tablet: {
							value: sizeTablet,
							label: "sizeTablet",
						},
						mobile: {
							value: sizeMobile,
							label: "sizeMobile",
						},
					}}
					min={0}
					max={500}
					displayUnit={false}
					setAttributes={setAttributes}
				/>
				<Range
					label={__(
						"Background Size",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={bgSize}
					onChange={(value) =>
						setAttributes({ bgSize: value })
					}
					min={0}
					max={500}
					displayUnit={false}
				/>
				<Range
					label={__(
						"Border Radius",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={borderRadius}
					onChange={(value) =>
						setAttributes({ borderRadius: value })
					}
					min={0}
					max={500}
					displayUnit={false}
				/>
				<hr className="uagb-editor__separator" />
				<Range
					label={__(
						"Gap between Items",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={gap}
					onChange={(value) =>
						setAttributes({ gap: value })
					}
					min={0}
					max={100}
					displayUnit={false}
				/>
			</PanelBody>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControls() }
			<InspectorControls>
			<InspectorTabs tabs={["general","advance"]}>
				<InspectorTab key={"general"}>{ generalSettings() }</InspectorTab>
				<InspectorTab key={"advance"}></InspectorTab>
			</InspectorTabs>
			</InspectorControls>
		</Suspense>
	);
};

export default React.memo( Settings );
