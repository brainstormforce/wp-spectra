import { __ } from '@wordpress/i18n';

import React from 'react';
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import UAGImage from '@Components/image';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import { PanelBody } from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;
	const { setAttributes, attributes } = props;

	// Setup the attributes.
	const { headingAlign, imagePosition, image } = attributes;

	const onSelectRestImage = ( media ) => {
		let imageUrl = null;
		if ( ! media || ! media.url ) {
			imageUrl = null;
		} else {
			imageUrl = media;
		}

		if ( ! media.type || 'image' !== media.type ) {
			imageUrl = null;
		}

		setAttributes( {
			image: imageUrl,
		} );
	};

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveRestImage = () => {
		setAttributes( {
			image: null,
		} );
	};

	const blockControls = () => {
		return (
			<>
				{ imagePosition == 'top' && (
					<BlockControls key="controls">
						<AlignmentToolbar
							value={ headingAlign }
							onChange={ ( value ) =>
								setAttributes( { headingAlign: value } )
							}
						/>
					</BlockControls>
				) }
			</>
		);
	};

	return (
		<>
			{ blockControls() }
			<InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>
						<PanelBody initialOpen={ true }>
							<p className="uagb-settings-notice">
								{ __(
									'For the common styling options please select the Parent Block of this Price List Item.'
								) }
							</p>
							<UAGImage
								onSelectImage={ onSelectRestImage }
								backgroundImage={ image }
								onRemoveImage={ onRemoveRestImage }
							/>
						</PanelBody>
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};
export default React.memo( Settings );
