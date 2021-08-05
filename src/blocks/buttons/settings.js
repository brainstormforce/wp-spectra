import lazyLoader from '@Controls/lazy-loader';
import React, { Suspense } from 'react';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	Icon,
} from '@wordpress/components';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import MultiButtonsControl from "../../components/multi-buttons-control";
import renderSVG from "@Controls/renderIcon";
import Range from "../../components/range/Range.js";
import InspectorTabs from "@Components/inspector-tabs/InspectorTabs.js";
import InspectorTab from "@Components/inspector-tabs/InspectorTab.js";

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
		fontSubset,
	} = attributes;

	let loadBtnGoogleFonts;

	if ( loadGoogleFonts == true ) {
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
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						"Alignment",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: align,
						label: "align",
					}}
					className="uagb-multi-button-alignment-control"
					options={[
						{
							value: "left",
							icon: (
								<Icon
									icon={renderSVG(
										"fa fa-align-left"
									)}
								/>
							),
							tooltip: __(
								"Left",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "center",
							icon: (
								<Icon
									icon={renderSVG(
										"fa fa-align-center"
									)}
								/>
							),
							tooltip: __(
								"Center",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "right",
							icon: (
								<Icon
									icon={renderSVG(
										"fa fa-align-right"
									)}
								/>
							),
							tooltip: __(
								"Right",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "full",
							icon: (
								<Icon
									icon={renderSVG(
										"fa fa-align-justify"
									)}
								/>
							),
							tooltip: __(
								"Full Width",
								"ultimate-addons-for-gutenberg"
							),
						},
					]}
					showIcons={true}
				/>
				<h2>{ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }</h2>
				<Range
					label={__(
						"Gap Between Buttons",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={gap}
					onChange={(value) =>
						setAttributes({ gap: value })
					}
					min={0}
					max={500}
					displayUnit={false}
				/>
				<hr className="uagb-editor__separator" />
				<SelectControl
					label={ __( 'Stack on', 'ultimate-addons-for-gutenberg' ) }
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
					onChange={ ( value ) => setAttributes( { stack: value } ) }
					help={ __(
						'Note: Choose on what breakpoint the buttons will stack.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<hr className="uagb-editor__separator" />
				<h2>{ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }</h2>
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
					fontSubset={ { value: fontSubset, label: 'fontSubset' } }
					disableFontSize={ true }
					disableLineHeight={ true }
				/>
			</PanelBody>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			<InspectorControls>
			<InspectorTabs tabs={["general", "advance"]}>
				<InspectorTab key={"general"}>
				{ generalSettings() }
				</InspectorTab>
				<InspectorTab key={"advance"}></InspectorTab>
			</InspectorTabs>
			</InspectorControls>
			{ loadBtnGoogleFonts }
		</Suspense>
	);
};

export default React.memo( Settings );
