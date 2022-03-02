import React from 'react';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';

import { __ } from '@wordpress/i18n';
import {InspectorControls} from '@wordpress/block-editor';
import { TextControl, SelectControl } from '@wordpress/components';
import Range from '@Components/range/Range.js';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';


export default function Settings( props ) {
	const { attributes, setAttributes } = props.parentProps;
	const {startNumber, endNumber, numberPrefix, numberSuffix, animationDuration, thousandSeparator, heading, headingTag, layout} = attributes;
	const generalPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<SelectControl
				label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				value={ layout }
				options={ [
					{ label: __( 'Number Counter', 'ultimate-addons-for-gutenberg' ), value: 'number' },
					{ label: __( 'Circle Counter', 'ultimate-addons-for-gutenberg' ), value: 'circle' },
					{ label: __( 'Bars Counter', 'ultimate-addons-for-gutenberg' ), value: 'bars' },
				] }
				onChange={ ( value ) => setAttributes({layout: value}) }
			/>
			<TextControl
				label={ __( 'Starting Number', 'ultimate-addons-for-gutenberg' ) }
				value={ startNumber }
				onChange={ ( value ) => setAttributes({startNumber: value})}
			/>
			<TextControl
				label={ __( 'Ending Number', 'ultimate-addons-for-gutenberg' ) }
				value={ endNumber }
				onChange={ ( value ) => setAttributes({endNumber: value})}
			/>
			<TextControl
				label={ __( 'Number Prefix', 'ultimate-addons-for-gutenberg' ) }
				value={ numberPrefix }
				onChange={ ( value ) => setAttributes({numberPrefix: value})}
			/>
			<TextControl
				label={ __( 'Number Suffix', 'ultimate-addons-for-gutenberg' ) }
				value={ numberSuffix }
				onChange={ ( value ) => setAttributes({numberSuffix: value})}
			/>
			<Range
				label={ __(
					'Animation Duration',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ animationDuration }
				onChange={ ( value ) =>
					setAttributes( { animationDuration: value } )
				}
				min={ 100 }
				step={ 100 }
				max={ 20000 }
				displayUnit={ false }
			/>
			<SelectControl
				label={ __( 'Thousand Separator', 'ultimate-addons-for-gutenberg' ) }
				value={ thousandSeparator }
				onChange={ ( value ) => {
					setAttributes({thousandSeparator: value})
				} }
				options={ [
					{ value: 'none', label: 'None' },
					{ value: ',', label: ',' },
					{ value: '.', label: '.' },
				] }
			/>
		</UAGAdvancedPanelBody>
	)

	const stylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			style settings
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
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</React.Fragment>
	);
}
