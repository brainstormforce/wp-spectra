import React from 'react';
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	ToggleControl,
	TextControl,
} from '@wordpress/components';
import InspectorTabs from "../../../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "../../../../components/inspector-tabs/InspectorTab.js";
import MultiButtonsControl from "../../../../components/multi-buttons-control";
import { InspectorControls } from '@wordpress/block-editor';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const {
		toggleRequired,
		toggleStatus,
		layout,
		trueValue,
		falseValue,
	} = attributes;

	const toggleInspectorControls = () => {
		return (
			<PanelBody
				initialOpen={ true }
			>
				<p className="uagb-settings-notice">
					{ __(
						'Leaving the toggle in On/Off state will set it as a default value on page load for the user.',
						'ultimate-addons-for-gutenberg'
					) }
				</p>

				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ toggleRequired }
					onChange={ () =>
						setAttributes( { toggleRequired: ! toggleRequired } )
					}
				/>
				<ToggleControl
					label={ __(
						'Default State',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ toggleStatus }
					help={
						toggleStatus
							? __( 'ON State', 'ultimate-addons-for-gutenberg' )
							: __( 'OFF State', 'ultimate-addons-for-gutenberg' )
					}
					onChange={ () =>
						setAttributes( { toggleStatus: ! toggleStatus } )
					}
				/>
				<TextControl
					label={ __(
						'True State',
						'ultimate-addons-for-gutenberg'
					) }
					value={ trueValue }
					onChange={ ( value ) =>
						setAttributes( { trueValue: value } )
					}
				/>
				<TextControl
					label={ __(
						'False State',
						'ultimate-addons-for-gutenberg'
					) }
					value={ falseValue }
					onChange={ ( value ) =>
						setAttributes( { falseValue: value } )
					}
				/>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						'Layout',
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: layout,
						label: "layout",
					}}
					className="uagb-multi-button-alignment-control"
					options={[
						{
							value: "",
							label: 'Square'

						},
						{
							value: "round",
							label: 'Round',
						},

					]}
					showIcons={false}
				/>
			</PanelBody>
		);
	};

	return (
			<InspectorControls>
				<InspectorTabs tabs={["general", "advance"]}>
					<InspectorTab {...UAGTabs.general}>
					{ toggleInspectorControls() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
	);
};
export default React.memo( Settings );
