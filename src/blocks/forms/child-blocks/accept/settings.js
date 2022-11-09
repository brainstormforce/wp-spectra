import React from 'react';
import { __ } from '@wordpress/i18n';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';

import {
	ToggleControl,
	TextControl,
} from '@wordpress/components';

import { InspectorControls } from '@wordpress/block-editor';



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGTextControl from '@Components/text-control';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const {
		acceptRequired,
		acceptText,
		showLink,
		linkLabel,
		link,
		linkInNewTab,
	} = attributes;

	const acceptInspectorControls = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<UAGTextControl
					variant='textarea'
					setAttributes={ setAttributes }
					label={ __(
						'Acceptance Text',
						'ultimate-addons-for-gutenberg'
					) }
					help={ __( 'Label to display as acceptance message.', 'ultimate-addons-for-gutenberg' ) }
					value={ acceptText }
					data={ {
						value: acceptText,
						label: 'acceptText'
					} }
					onChange={ ( value ) =>
						setAttributes( { acceptText: value } )
					}
				/>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ acceptRequired }
					onChange={ () =>
						setAttributes( { acceptRequired: ! acceptRequired } )
					}
				/>
				<ToggleControl
					label={ __(
						'Enable Privacy Link',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ showLink }
					onChange={ () => setAttributes( { showLink: ! showLink } ) }
				/>

				{ showLink && (
					<>
						<TextControl
							label={ __(
								'Link Label',
								'ultimate-addons-for-gutenberg'
							) }
							value={ linkLabel }
							onChange={ ( value ) =>
								setAttributes( { linkLabel: value } )
							}
						/>
						<TextControl
							className="uagb-forms-editor-privacy-link"
							label={ __(
								'Link',
								'ultimate-addons-for-gutenberg'
							) }
							value={ link }
							onChange={ ( value ) =>
								setAttributes( { link: value } )
							}
							help={
								'' === link
									? __(
											'Enter a valid link.',
											'ultimate-addons-for-gutenberg'
									  )
									: ''
							}
						/>
						<ToggleControl
							label={ __(
								'Open in new tab',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ linkInNewTab }
							onChange={ () =>
								setAttributes( {
									linkInNewTab: ! linkInNewTab,
								} )
							}
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<>
			<InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>
						{ acceptInspectorControls() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};

export default React.memo( Settings );
