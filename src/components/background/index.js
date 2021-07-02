import { __ } from '@wordpress/i18n';
import Range from '../../components/range/Range.js';
import AdvancedPopColorControl from '../../components/color-control/advanced-pop-color-control.js'
import { SelectControl, BaseControl, Button } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import './editor.scss';
import GradientSettings from "../../components/gradient-settings"

 const Background = props => {

    const { 
        setAttributes,
        backgroundImageColor,
        overlayType,
        backgroundSize,
        backgroundRepeat,
        backgroundAttachment,
        backgroundPosition,
        backgroundImage,
        backgroundColor,
        backgroundType,
		backgroundOpacity,
    } = props;

	const onRemoveImage = () => {
		const { setAttributes } = props

		setAttributes( { backgroundImage: null } )
	}

	const onSelectImage = ( media ) => {

		const { setAttributes } = props

		if ( ! media || ! media.url ) {
			setAttributes( { backgroundImage: null } )
			return
		}

		if ( ! media.type || "image" != media.type ) {
			return
		}

		setAttributes( { backgroundImage: media } )
	}
    
    var advancedControls;

        advancedControls = (
			<>
			<div className="uag-background-wrap">
				<label className="uag-background-label">{__( "Background Type", 'ultimate-addons-for-gutenberg' ) }</label>
				<SelectControl
					value={ backgroundType.value }
					onChange={ ( value ) => setAttributes( { backgroundType: value } ) }
					options={ [
						{ value: "none", label: __( "None", 'ultimate-addons-for-gutenberg' ) },
						{ value: "color", label: __( "Color", 'ultimate-addons-for-gutenberg' ) },
						{ value: "gradient", label: __( "Gradient", 'ultimate-addons-for-gutenberg' ) },
						{ value: "image", label: __( "Image", 'ultimate-addons-for-gutenberg' ) }
					] }
				/>
			</div>
			{ 'color' === backgroundType.value && (
			<AdvancedPopColorControl
				label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ ( backgroundColor.value ? backgroundColor.value : '' ) }
				colorDefault={ '' }
				onColorChange={ value => setAttributes( { backgroundColor: value } ) }
				onColorClassChange={ value => setAttributes( { colorClass: value } ) }
			/>
			) }
			{ "image" === backgroundType.value &&
				( <>
					<BaseControl
						className="editor-bg-image-control"
						label={ __( "Background Image", 'ultimate-addons-for-gutenberg' ) }>
						<div className="uagb-bg-image">
						<MediaUpload
							title={ __( "Select Background Image", 'ultimate-addons-for-gutenberg' ) }
							onSelect={ onSelectImage }
							allowedTypes={ [ "image" ] }
							value={ backgroundImage.value }
							render={ ( { open } ) => (
								<Button isSecondary onClick={ open }>
									{ ! backgroundImage.value ? __( "Select Background Image", 'ultimate-addons-for-gutenberg' ) : __( "Replace image", 'ultimate-addons-for-gutenberg' ) }
								</Button>
							) }
						/>
						{ backgroundImage.value &&
							( <Button className="uagb-rm-btn" onClick={ onRemoveImage } isLink isDestructive>
								{ __( "Remove Image", 'ultimate-addons-for-gutenberg' ) }
							</Button> )
						}
						</div>
					</BaseControl>
					{ backgroundImage.value &&
						( <>
							<SelectControl
								label={ __( "Image Position", 'ultimate-addons-for-gutenberg' ) }
								value={ backgroundPosition.value }
								onChange={ ( value ) => setAttributes( { backgroundPosition: value } ) }
								options={ [
									{ value: "top-left", label: __( "Top Left", 'ultimate-addons-for-gutenberg' ) },
									{ value: "top-center", label: __( "Top Center", 'ultimate-addons-for-gutenberg' ) },
									{ value: "top-right", label: __( "Top Right", 'ultimate-addons-for-gutenberg' ) },
									{ value: "center-left", label: __( "Center Left", 'ultimate-addons-for-gutenberg' ) },
									{ value: "center-center", label: __( "Center Center", 'ultimate-addons-for-gutenberg' ) },
									{ value: "center-right", label: __( "Center Right", 'ultimate-addons-for-gutenberg' ) },
									{ value: "bottom-left", label: __( "Bottom Left", 'ultimate-addons-for-gutenberg' ) },
									{ value: "bottom-center", label: __( "Bottom Center", 'ultimate-addons-for-gutenberg' ) },
									{ value: "bottom-right", label: __( "Bottom Right", 'ultimate-addons-for-gutenberg' ) },
								] }
								className="uagb-bg-image-position-control"
							/>
							<SelectControl
								label={ __( "Attachment", 'ultimate-addons-for-gutenberg' ) }
								value={ backgroundAttachment.value }
								onChange={ ( value ) => setAttributes( { backgroundAttachment: value } ) }
								options={ [
									{ value: "fixed", label: __( "Fixed", 'ultimate-addons-for-gutenberg' ) },
									{ value: "scroll", label: __( "Scroll", 'ultimate-addons-for-gutenberg' ) }
								] }
								className="uagb-bg-image-attachment-control"
							/>
							<SelectControl
								label={ __( "Repeat", 'ultimate-addons-for-gutenberg' ) }
								value={ backgroundRepeat.value }
								onChange={ ( value ) => setAttributes( { backgroundRepeat: value } ) }
								options={ [
									{ value: "no-repeat", label: __( "No Repeat", 'ultimate-addons-for-gutenberg' ) },
									{ value: "repeat", label: __( "Repeat", 'ultimate-addons-for-gutenberg' ) },
									{ value: "repeat-x", label: __( "Repeat-x", 'ultimate-addons-for-gutenberg' ) },
									{ value: "repeat-y", label: __( "Repeat-y", 'ultimate-addons-for-gutenberg' ) }
								] }
								className="uagb-bg-image-repeat-control"
							/>
							<SelectControl
								label={ __( "Size", 'ultimate-addons-for-gutenberg' ) }
								value={ backgroundSize.value }
								onChange={ ( value ) => setAttributes( { backgroundSize: value } ) }
								options={ [
									{ value: "auto", label: __( "Auto", 'ultimate-addons-for-gutenberg' ) },
									{ value: "cover", label: __( "Cover", 'ultimate-addons-for-gutenberg' ) },
									{ value: "contain", label: __( "Contain", 'ultimate-addons-for-gutenberg' ) }
								] }
								className="uagb-bg-image-size-control"
							/>
							<SelectControl
								label={ __( "Overlay Type", 'ultimate-addons-for-gutenberg' ) }
								value={ overlayType.value }
								onChange={ ( value ) => setAttributes( { overlayType: value } ) }
								options={ [
									{ value: "color", label: __( "Color", 'ultimate-addons-for-gutenberg' ) },
									{ value: "gradient", label: __( "Gradient", 'ultimate-addons-for-gutenberg' ) },
								] }
								className="uagb-bg-image-overlay-type-control"
							/>
							{ "color" == overlayType.value &&
								<>
									<AdvancedPopColorControl
										label={ __( 'Image Overlay Color', 'ultimate-addons-for-gutenberg' ) }
										colorValue={ backgroundImageColor.value }
										colorDefault={ '' }
										onColorChange={ value => setAttributes( { backgroundImageColor: value } ) }
										onColorClassChange={ value => setAttributes( { colorClass: value } ) }
									/>
								</>
							}
							{ "gradient" == overlayType.value &&
								( <>
									<GradientSettings attributes={ props.attributes }	setAttributes={ setAttributes }/>
								</> )
							}
						</> )
					}
				</> 
				)
			}
			{ "gradient" === backgroundType.value &&
				( <>
					<GradientSettings attributes={ props.attributes }	setAttributes={ props.setAttributes }/>
				</> )
			}
			{ ( "color" == backgroundType.value || ( "image" == backgroundType.value && backgroundImage.value ) || "gradient" == backgroundType.value ) &&
				( <Range 
					label={ __( "Opacity", 'ultimate-addons-for-gutenberg' ) }
					value={ backgroundOpacity.value } 
					onChange={ val => setAttributes( { backgroundOpacity: parseInt(val) } ) }
					min={ 0 } 
					max={ 100 } 
					displayUnit={ false }
				/>)
			}
		</>
    );

    return(
        <div className='uag-typography-option-actions'>
            <span>{ props.label }</span>
            { advancedControls }
        </div>
    )
}

export default Background