import { __ } from '@wordpress/i18n';

import { InspectorControls } from '@wordpress/block-editor';
import UAGMediaPicker from '@Components/image';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import { memo } from '@wordpress/element';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UpgradeComponent from '@Components/upgrade-to-pro-cta';

const Settings = ( props ) => {

	const { setAttributes, attributes } = props;

	// Setup the attributes.
	const { image, showImage } = attributes;

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

	return (
		<>
			<InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>
					<UAGAdvancedPanelBody title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
							<p className="uagb-settings-notice">
								{ showImage
									? __(
											'For the common styling options please select the Parent Block of this Price List Item.',
											'ultimate-addons-for-gutenberg'
									  )
									: __(
											'For the common styling options and enabling images, please select the Parent Block of this Price List Item.',
											'ultimate-addons-for-gutenberg'
									  ) }
							</p>
							{ showImage && (
								<>
									<UAGMediaPicker
										onSelectImage={ onSelectRestImage }
										backgroundImage={ image }
										onRemoveImage={ onRemoveRestImage }
									/>
								</>
							) }
						</UAGAdvancedPanelBody>
						{'not-installed' === uagb_blocks_info.spectra_pro_status && (
							<UAGAdvancedPanelBody
								title={__( 'Dynamic Content', 'ultimate-addons-for-gutenberg' )}
							>
								<UpgradeComponent
									control={
										{
											title: __( 'Experience dynamic content with Spectra Pro. No more static displays. Personalize your user experience.', 'ultimate-addons-for-gutenberg' ),
											renderAs: 'list',
											campaign: 'dynamic-content',
										}
									}
								/>
							</UAGAdvancedPanelBody>
						)}
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance } parentProps={ props }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};
export default memo( Settings );
