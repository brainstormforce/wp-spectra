import classnames from 'classnames';
import React from 'react';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';

const { RichText } = wp.blockEditor;

const Render = ( props ) => {
	props = props.parentProps;

	const {
		className,
		setAttributes,
		attributes,
		mergeBlocks,
		insertBlocksAfter,
		onReplace,
		deviceType,
	} = props;

	const {
		align,
		tag,
		title,
		prefix,
		description_text,
		image,
		imgStyle,
		imgSize,
		imgPosition,
		twitterIcon,
		fbIcon,
		linkedinIcon,
		pinIcon,
		twitterLink,
		fbLink,
		linkedinLink,
		pinLink,
		socialTarget,
		socialEnable,
		stack,
	} = attributes;

	const title_html = (
		<div className="uagb-team__title-wrap">
			<RichText
				tagName={ tag }
				value={ title }
				className="uagb-team__title"
				onChange={ ( value ) => setAttributes( { title: value } ) }
				multiline={ false }
				placeholder={ __(
					'Write a Title',
					'ultimate-addons-for-gutenberg'
				) }
				onMerge={ mergeBlocks }
				onSplit={
					insertBlocksAfter
						? ( before, after, ...blocks ) => {
								setAttributes( { content: before } );
								insertBlocksAfter( [
									...blocks,
									createBlock( 'core/paragraph', {
										content: after,
									} ),
								] );
						  }
						: undefined
				}
				onRemove={ () => onReplace( [] ) }
			/>
			<RichText
				tagName="div"
				value={ prefix }
				placeholder={ __(
					'Enter Prefix',
					'ultimate-addons-for-gutenberg'
				) }
				className="uagb-team__prefix"
				onChange={ ( value ) => setAttributes( { prefix: value } ) }
				onMerge={ mergeBlocks }
				placeholder={ __(
					'Write a Designation',
					'ultimate-addons-for-gutenberg'
				) }
				onSplit={
					insertBlocksAfter
						? ( before, after, ...blocks ) => {
								setAttributes( { content: before } );
								insertBlocksAfter( [
									...blocks,
									createBlock( 'core/paragraph', {
										content: after,
									} ),
								] );
						  }
						: undefined
				}
				onRemove={ () => onReplace( [] ) }
			/>
		</div>
	);

	const social_html = ( icon, link, target ) => {
		const target_value = target ? '_blank' : '_self';

		return (
			<li className="uagb-team__social-icon">
				<a
					href={ link }
					aria-label={ icon }
					target={ target_value }
					title=""
					rel="noopener noreferrer"
				>
					{ renderSVG( icon ) }
				</a>
			</li>
		);
	};

	const social_links = (
		<div className="uagb-team__social-icon-wrap">
			<ul className="uagb-team__social-list">
				{ '' != twitterIcon &&
					social_html( twitterIcon, twitterLink, socialTarget ) }
				{ '' != fbIcon && social_html( fbIcon, fbLink, socialTarget ) }
				{ '' != linkedinIcon &&
					social_html( linkedinIcon, linkedinLink, socialTarget ) }
				{ '' != pinIcon &&
					social_html( pinIcon, pinLink, socialTarget ) }
			</ul>
		</div>
	);

	// Get description and seperator components.
	const desc_html = (
		<div className="uagb-team__desc-wrap">
			<RichText
				tagName="p"
				value={ description_text }
				placeholder={ __(
					'Write a Description',
					'ultimate-addons-for-gutenberg'
				) }
				className="uagb-team__desc"
				onChange={ ( value ) =>
					setAttributes( { description_text: value } )
				}
				onMerge={ mergeBlocks }
				placeholder={ __(
					'Write a Description',
					'ultimate-addons-for-gutenberg'
				) }
				onSplit={
					insertBlocksAfter
						? ( before, after, ...blocks ) => {
								setAttributes( { content: before } );
								insertBlocksAfter( [
									...blocks,
									createBlock( 'core/paragraph', {
										content: after,
									} ),
								] );
						  }
						: undefined
				}
				onRemove={ () => onReplace( [] ) }
			/>
		</div>
	);

	let size = '';
	let img_url = '';

	if ( image ) {
		size = image.sizes;
		if ( image.sizes ) {
			img_url = size[ imgSize ] ? size[ imgSize ].url : image.url;
		} else {
			img_url = image.url;
		}
	}

	let image_html = '';

	if ( '' != img_url ) {
		image_html = (
			<div
				className={ classnames(
					'uagb-team__image-wrap',
					`uagb-team__image-crop-${ imgStyle }`
				) }
			>
				<img
					className=""
					src={ img_url }
					alt={ image.alt ? image.alt : '' }
				/>
			</div>
		);
	}

	return (
		<>
			<div
				className={ classnames(
					className,
					'uagb-team',
					'uagb-team__outer-wrap',
					`uagb-team__image-position-${ imgPosition }`,
					`uagb-team__align-${ align }`,
					`uagb-team__stack-${ stack }`,
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
					`uagb-block-${ props.clientId.substr( 0, 8 ) }`
				) }
			>
				<div className="uagb-team__wrap">
					{ imgPosition == 'left' && image_html }

					<div className="uagb-team__content">
						{ imgPosition == 'above' && image_html }

						{ title_html }

						{ desc_html }

						{ socialEnable && social_links }
					</div>

					{ imgPosition == 'right' && image_html }
				</div>
			</div>
		</>
	);
};

export default React.memo( Render );
