import { __ } from '@wordpress/i18n';

const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	MediaUpload,
} = wp.blockEditor;

const { PanelBody, BaseControl, Button } = wp.components;

const priceListChildSettings = ( props ) => {
	const { setAttributes, attributes } = props;

	// Setup the attributes.
	const { headingAlign, imagePosition, image } = attributes;

	const onSelectRestImage = ( media ) => {
		let image_url = null;
		if ( ! media || ! media.url ) {
			image_url = null;
		} else {
			image_url = media;
		}

		if ( ! media.type || 'image' !== media.type ) {
			image_url = null;
		}

		setAttributes( {
			image: image_url,
		} );
	};

	/*
	 * Event to set Image selectot label.
	 */
	const getImageName = ( image ) => {
		let image_title = __( 'Select Image' );
		if ( image ) {
			if ( image.url == null || image.url == '' ) {
				image_title = __( 'Select Image' );
			} else {
				image_title = __( 'Replace Image' );
			}
		}
		return image_title;
	};

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveRestImage = () => {
		setAttributes( {
			image: null,
		} );
	};

	const inspectControl = () => {
		return (
			<InspectorControls>
				<p className="uagb-settings-notice">
					{ __(
						'For the common styling options please select the Parent Block of this Price List Item.'
					) }
				</p>
				<PanelBody title={ __( 'Image' ) } initialOpen={ true }>
					<BaseControl
						className="editor-bg-image-control"
						label={ __( '' ) }
					>
						<MediaUpload
							title={ __( 'Select Image' ) }
							onSelect={ ( media ) => {
								onSelectRestImage( media );
							} }
							allowedTypes={ [ 'image' ] }
							value={ image }
							render={ ( { open } ) => (
								<Button isSecondary onClick={ open }>
									{ getImageName( image ) }
								</Button>
							) }
						/>
						{ image && (
							<Button
								className="uagb-rm-btn"
								onClick={ onRemoveRestImage }
								isLink
								isDestructive
							>
								{ __( 'Remove Image' ) }
							</Button>
						) }
					</BaseControl>
				</PanelBody>
			</InspectorControls>
		);
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
			{ inspectControl() }
		</>
	);
};
export default priceListChildSettings;
