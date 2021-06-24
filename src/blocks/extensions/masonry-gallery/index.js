import { __ } from '@wordpress/i18n';
import { Fragment } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import { ToggleControl, PanelBody } from "@wordpress/components";
import { createHigherOrderComponent } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
const { enableMasonryGallery } = uagb_blocks_info;

const MasonryGallery = createHigherOrderComponent((BlockEdit) => {

	return (props) => {

		const { attributes, setAttributes, isSelected } = props;
		const blockName = props.name;
		const blockType = [ 'core/gallery' ];

		const update = ( value ) => {
			if ( value ) {
				setAttributes({ className: 'uag-masonry' })
			} else {
				let classNameList = attributes.className;
				classNameList = classNameList.replace( "uag-masonry", "" );
				setAttributes({ className: classNameList })
			}
			setAttributes({ masonry: !attributes.masonry })
		}
		
		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && blockType.includes(blockName) &&
					<InspectorControls>
						<PanelBody title={ __( "Masonry Gallery", 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
							<ToggleControl
								label={ __('Enable Masonry Layout')}
								checked={attributes.masonry}
								onChange={(value) => update( value )}
							/>
						</PanelBody>	
					</InspectorControls>
				}
			</Fragment>
		);
	};
}, 'MasonryGallery');

if ( '1' === enableMasonryGallery ) {
	addFilter(
		'editor.BlockEdit',
		'uagb/masonry-gallery',
		MasonryGallery,
		999
	);
}