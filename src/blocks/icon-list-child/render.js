// Import classes
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';
const { RichText } = wp.blockEditor;

const iconListChildRender = ( props ) => {
	const { attributes, setAttributes } = props;
	const {
		className,
		label,
		image_icon,
		icon,
		image,
		block_id,
		link,
		target,
		disableLink,
		hideLabel,
	} = attributes;

	let image_icon_html = '';

	if ( image_icon == 'icon' ) {
		if ( icon ) {
			image_icon_html = (
				<span className="uagb-icon-list__source-icon">
					{ renderSVG( icon ) }
				</span>
			);
		}
	} else if ( image && image.url ) {
		image_icon_html = (
			<img className="uagb-icon-list__source-image" src={ image.url } />
		);
	}

	const target_val = target ? '_blank' : '_self';
	const link_url = ! disableLink ? link : '/';

	return (
		<div
			className={ classnames(
				`uagb-icon-list-repeater`,
				'uagb-icon-list__wrapper',
				className,
				`uagb-block-${ block_id }`
			) }
		>
			{ ! disableLink && (
				<a
					target={ target_val }
					rel="noopener noreferrer"
					aria-label={ label }
					href={ link_url }
				></a>
			) }
			<div className="uagb-icon-list__content-wrap">
				<span className="uagb-icon-list__source-wrap">
					{ image_icon_html }
				</span>
				{ ! hideLabel && '' != label && (
					<div className="uagb-icon-list__label-wrap">
						<RichText
							tagName="div"
							placeholder={ __(
								'Label Name',
								'ultimate-addons-for-gutenberg'
							) }
							value={ label }
							onChange={ ( value ) =>
								setAttributes( { label: value } )
							}
							className="uagb-icon-list__label"
							placeholder={ __( 'Description' ) }
							multiline={ false }
							allowedFormats={ [
								'core/bold',
								'core/italic',
								'core/strikethrough',
							] }
						/>
					</div>
				) }
			</div>
		</div>
	);
};
export default iconListChildRender;
