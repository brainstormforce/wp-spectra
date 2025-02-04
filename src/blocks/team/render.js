import classnames from 'classnames';
import { useLayoutEffect, memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import { createBlock } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { className, setAttributes, attributes, mergeBlocks, insertBlocksAfter, onReplace, deviceType } = props;

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
		socialTarget,
		socialEnable,
		stack,
		imgWidth,
		block_id,
	} = attributes;

	const titleHtml = (
		<>
			<RichText
				tagName={ tag }
				value={ title }
				className="uagb-team__title"
				onChange={ ( value ) => setAttributes( { title: value } ) }
				multiline={ false }
				placeholder={ __( 'Write a Title', 'ultimate-addons-for-gutenberg' ) }
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
				className="uagb-team__prefix"
				onChange={ ( value ) => setAttributes( { prefix: value } ) }
				onMerge={ mergeBlocks }
				placeholder={ __( 'Write a Designation', 'ultimate-addons-for-gutenberg' ) }
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
		</>
	);

	const socialHtml = ( icon, target ) => {
		const target_value = target ? '_blank' : '_self';

		return (
			<li className="uagb-team__social-icon">
				<a // eslint-disable-line jsx-a11y/anchor-is-valid
					href={ '#' } 
					aria-label={ icon } 
					target={ target_value } 
					title="" 
					rel="noopener noreferrer"
				> 
					{ renderSVG( icon, setAttributes ) }
				</a>
			</li>
		);
	};

	const socialLinks = (
		<ul className="uagb-team__social-list">
			{ '' !== twitterIcon && socialHtml( twitterIcon, socialTarget ) }
			{ '' !== fbIcon && socialHtml( fbIcon, socialTarget ) }
			{ '' !== linkedinIcon && socialHtml( linkedinIcon, socialTarget ) }
			{ '' !== pinIcon && socialHtml( pinIcon, socialTarget ) }
		</ul>
	);

	// Get description and seperator components.
	const descHtml = (
		<RichText
			tagName="p"
			value={ description_text }
			placeholder={ __( 'Write a Description', 'ultimate-addons-for-gutenberg' ) }
			className="uagb-team__desc"
			onChange={ ( value ) => setAttributes( { description_text: value } ) }
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
	);

	let size = '';
	let imgUrl = '';

	if ( image ) {
		size = image.sizes;
		if ( image.sizes ) {
			imgUrl = size[ imgSize ] ? size[ imgSize ].url : image.url;
		} else {
			imgUrl = image.url;
		}
	}

	let imageHtml = '';

	if ( '' !== imgUrl ) {
		imageHtml = (
			<img
				className={ `uagb-team__image-crop-${ imgStyle }` }
				src={ imgUrl }
				alt={ image.alt ? image.alt : '' }
				height={ imgWidth }
				width={ imgWidth }
				loading="lazy"
			/>
		);
	}

	return (
		<div
			className={ classnames(
				className,
				`uagb-team__image-position-${ imgPosition }`,
				`uagb-team__align-${ align }`,
				`uagb-team__stack-${ stack }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			{ imgPosition === 'left' && imageHtml }

			<div className="uagb-team__content">
				{ imgPosition === 'above' && imageHtml }

				{ titleHtml }

				{ descHtml }

				{ socialEnable && socialLinks }
			</div>

			{ imgPosition === 'right' && imageHtml }
		</div>
	);
};

export default memo( Render );
