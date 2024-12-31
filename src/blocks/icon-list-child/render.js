// Import classes
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { useLayoutEffect, memo, useEffect } from '@wordpress/element';
import styles from './editor.lazy.scss';
import getImageHeightWidth from '@Controls/getImageHeightWidth';
import { createBlock } from '@wordpress/blocks';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, setAttributes, className, deviceType, onReplace, mergeBlocks } = props;
	const {
		label,
		image_icon,
		icon,
		image,
		block_id,
		link,
		target,
		disableLink,
		hideLabel,
		fromParentIcon,
		imageSizeChild,
		imgTagHeight,
	} = attributes;

	const defaultedAlt = image && image?.alt ? image?.alt : '';

	let imageIconHtml = '';

	useEffect( () => {
		if ( image && image.url && image_icon !== 'none' ) {
			getImageHeightWidth( image?.url, setAttributes, { type: 'width', value: imageSizeChild } );
		}
	}, [ image, imageSizeChild ] );

	if ( image_icon === 'icon' ) {
		if ( icon || fromParentIcon ) {
			imageIconHtml = icon ? renderSVG( icon, setAttributes ) : renderSVG( fromParentIcon, setAttributes );
		}
	} else if ( image && image.url && image_icon !== 'none' ) {
		imageIconHtml = (
			<img
				className="uagb-icon-list__source-image"
				alt={ defaultedAlt }
				src={ image.url }
				width={ imageSizeChild }
				height={ imgTagHeight }
				loading="lazy"
			/>
		);
	}

	const targetVal = target ? '_blank' : '_self';
	const linkUrl = disableLink ? link : '/';

	const propsOnSplit = ( value ) =>
		value
			? createBlock( 'uagb/icon-list-child', { ...attributes, label: value } )
			: createBlock( 'uagb/icon-list-child' );

	return (
		<div
			className={ classnames(
				className,
				`uagb-block-${ block_id }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`
			) }
		>
			{ disableLink && (
				<a
					target={ targetVal }
					rel="noopener noreferrer"
					aria-label={ label.replace( /(<([^>]+)>)/gi, '' ) }
					href={ linkUrl }
				>
					{ ' ' }
				</a>
			) }
			{ imageIconHtml && <span className="uagb-icon-list__source-wrap">{ imageIconHtml }</span> }
			{ ! hideLabel && (
				<RichText
					tagName="span"
					placeholder={ __( 'Label Name', 'ultimate-addons-for-gutenberg' ) }
					value={ label }
					onChange={ ( value ) => setAttributes( { label: value } ) }
					className="uagb-icon-list__label"
					multiline={ false }
					allowedFormats={ [ 'core/bold', 'core/italic', 'core/strikethrough' ] }
					onMerge={ mergeBlocks }
					onSplit={ propsOnSplit }
					onReplace={ onReplace }
					onRemove={ () => onReplace( [] ) }
				/>
			) }
		</div>
	);
};
export default memo( Render );
