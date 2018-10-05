/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

const {
	ColorPalette,
	description,
	MediaUpload,
} = wp.blocks

const {
	Button,
	Dashicon,
	PanelBody,
	PanelColor,
	PanelRow,
	SelectControl,
} = wp.components

const { Component, Fragment } = wp.element

/**
 * Internal dependencies
 */
import BackgroundOptionsClasses from "./classes"
import BackgroundOptionsInlineStyles from "./inline-styles"
import BackgroundOptionsVideoOutput from "./video"
import "./editor.scss"

// Export for ease of importing in individual blocks.
export {
	BackgroundOptionsClasses,
	BackgroundOptionsInlineStyles,
	BackgroundOptionsVideoOutput,
}

class BackgroundOptions extends Component {

	render() {
		const { attributes } = this.props

		const setBackgroundType = value => this.props.setAttributes( { backgroundType: value } )
		const setBackgroundImage = value => this.props.setAttributes( { backgroundImage: value } )
		const removeBackgroundImage = () => this.props.setAttributes( { backgroundImage: null } )
		const setBackgroundVideo = value => this.props.setAttributes( { backgroundVideo: value } )
		const removeBackgroundVideo = () => this.props.setAttributes( { backgroundVideo: null } )
		const setBackgroundColor = value => this.props.setAttributes( { backgroundColor: value } )

		const imageBackgroundSelect = () => {
			if ( "image" !== attributes.backgroundType ) {
				return ""
			}

			if ( ! attributes.backgroundImage ) {
				return (
					<div className="media-upload-wrapper">
						<p>
							<MediaUpload
								buttonProps={ {
									className: "components-button button button-large",
								} }
								onSelect={ setBackgroundImage }
								type="image"
								value=""
								render={ ( { open } ) => (
									<Button className="button button-large" onClick={ open }>
										<Dashicon icon="format-image" /> { __( "Upload Image" ) }
									</Button>
								) }
							/>
						</p>
						<p>
							<description>
								{ __( "Add/Upload an image file. (1920x1080px .jpg, .png)" ) }
							</description>
						</p>
					</div>
				)
			}

			return (
				<div className="image-wrapper">
					<p>
						<img
							src={ attributes.backgroundImage.url }
							alt={ attributes.backgroundImage.alt }
						/>
					</p>
					{ this.props.focus ? (
						<div className="media-button-wrapper">
							<p>
								<Button
									className="remove-image button button-large"
									onClick={ removeBackgroundImage }
								>
									<Dashicon icon="no-alt" /> { __( "Remove Image" ) }
								</Button>
							</p>
							<p>
								<description>
									{ __( "Add/Upload an image file. (1920x1080px .jpg, .png)" ) }
								</description>
							</p>
						</div>
					) : null }
				</div>
			)
		}

		const videoBackgroundSelect = () => {
			if ( "video" !== attributes.backgroundType ) {
				return ""
			}

			if ( ! attributes.backgroundVideo ) {
				return (
					<div className="media-upload-wrapper">
						<p>
							<MediaUpload
								buttonProps={ {
									className: "components-button button button-large",
								} }
								onSelect={ setBackgroundVideo }
								type="video"
								value=""
								render={ ( { open } ) => (
									<Button className="button button-large" onClick={ open }>
										<Dashicon icon="format-video" /> { __( "Upload Video" ) }
									</Button>
								) }
							/>
						</p>
						<p>
							<description>
								{ __( "Add/Upload a 1920x1080 .mp4 video file. Note: background videos are only supported on heroes." ) }
							</description>
						</p>
					</div>
				)
			}

			return (
				<div className="video-wrapper">
					<p>
						<video className="video-container video-container-overlay">
							<source
								type="video/mp4"
								src={ attributes.backgroundVideo.url }
							/>
						</video>
					</p>
					{ this.props.focus ? (
						<div className="media-button-wrapper">
							<p>
								<Button
									className="remove-video button button-large"
									onClick={ removeBackgroundVideo }
								>
									<Dashicon icon="no-alt" /> { __( "Remove Video" ) }
								</Button>
							</p>

							<p>
								<description>
									{ __( "Add/Upload a 1920x1080 .mp4 video file. Note: background videos are only supported on heroes." ) }
								</description>
							</p>
						</div>
					) : null }
				</div>
			)
		}

		const colorPanelSelect = () => {
			if ( "color" !== attributes.backgroundType ) {
				return ""
			}

			return (
				<PanelColor
					title={ __( "Background Color" ) }
					colorValue={ attributes.backgroundColor }
				>
					<ColorPalette
						value={ attributes.backgroundColor }
						onChange={ setBackgroundColor }
					/>
				</PanelColor>
			)
		}

		return (
			<PanelBody
				title={ __( "Background Options" ) }
				className="wds-background-options"
				initialOpen={ false }
			>
				<PanelRow>
					<SelectControl
						key="background-type"
						label={ __( "Background Type" ) }
						value={ attributes.backgroundType ? attributes.backgroundType : "" }
						options={ [
							{
								label: __( "None" ),
								value: "",
							},
							{
								label: __( "Image" ),
								value: "image",
							},
							{
								label: __( "Video" ),
								value: "video",
							},
							{
								label: __( "Color" ),
								value: "color",
							},
						] }
						onChange={ setBackgroundType }
					/>
				</PanelRow>
				<PanelRow>
					{ imageBackgroundSelect() }
					{ videoBackgroundSelect() }
					{ colorPanelSelect() }
				</PanelRow>
			</PanelBody>
		)
	}
}

export default BackgroundOptions
