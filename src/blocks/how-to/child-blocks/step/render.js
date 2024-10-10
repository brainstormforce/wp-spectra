import classnames from 'classnames';
import { useLayoutEffect, memo, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { RichText } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import getImageHeightWidth from '@Controls/getImageHeightWidth';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, setAttributes, mergeBlocks, insertBlocksAfter, onReplace, deviceType } = props;

	const {
		block_id,
		name,
		description,
		url,
		urlType,
		image,
		imageSize,
		urlText,
		urlTarget,
		imgPosition,
		imgTagHeight,
		imgTagWidth,
		relString
	} = attributes;

	let urlCheck = '';
	if ( typeof image !== 'undefined' && image !== null && image !== '' ) {
		urlCheck = image.url;
	}

	let imageUrl = '';
	if ( urlCheck !== '' ) {
		const size = image.sizes;

		if ( typeof size !== 'undefined' && typeof size[ imageSize ] !== 'undefined' ) {
			imageUrl = size[ imageSize ].url;
		} else {
			imageUrl = urlCheck;
		}
	}
	let target = '_self';
	if ( urlTarget ) {
		target = '_blank';
	}

	useEffect( () => {
		getImageHeightWidth( imageUrl, setAttributes );
	}, [ imageUrl ] );

	const defaultedAlt = image?.alt || '';

	const imageMarkup = (
		<img
			className="uagb-how-to-step-image"
			src={ imageUrl }
			alt={ defaultedAlt }
			width={ imgTagWidth }
			height={ imgTagHeight }
			loading="lazy"
		/>
	);
	const contentMarkup = (
		<div className="uagb-step-content-wrap">
			<RichText
				tagName="div"
				className="uagb-how-to-step-name"
				placeholder={ __( 'Name', 'ultimate-addons-for-gutenberg' ) }
				value={ name }
				onChange={ ( value ) => setAttributes( { name: value } ) }
				multiline={ false }
			/>
			<RichText
				tagName="p"
				value={ description }
				placeholder={ __( 'Write a Description', 'ultimate-addons-for-gutenberg' ) }
				className="uagb-how-to-step-description"
				onChange={ ( value ) => setAttributes( { description: value } ) }
				onMerge={ mergeBlocks }
				onSplit={
					insertBlocksAfter
						? ( before, after, ...blocks ) => {
								setAttributes( { description: before } );
								insertBlocksAfter( [
									...blocks,
									createBlock( 'core/paragraph', {
										description: after,
									} ),
								] );
						  }
						: undefined
				}
				onRemove={ () => onReplace( [] ) }
			/>
			{ 'text' === urlType && (
				<>
					{ '' !== url ? (
						<a href={ url } target={ target } className="uagb-step-link" rel={ relString }>
							<span className="uagb-step-link-text">{ urlText }</span>
						</a>
					) : (
						<span className="uagb-step-link-text">{ urlText }</span>
					) }
				</>
			) }
		</div>
	);
	return (
		<div
			className={ classnames(
				'uagb-how-to-step-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			{ ( 'all' === urlType || 'none' === urlType ) && (
				<>
					{ '' !== url && 'all' === urlType && (
						<a // eslint-disable-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid
							className="uagb-step-link"
							aria-label={ 'Step Link' }
							rel="noopener noreferrer"
							target={ target }
						></a>
					) }
					<div className={ `uagb-step-image-content-wrap uag-image-position-${ imgPosition }` }>
						{ imageUrl && imageMarkup }

						{ contentMarkup }
					</div>
				</>
			) }
			{ 'text' === urlType && (
				<div className={ `uagb-step-image-content-wrap uag-image-position-${ imgPosition }` }>
					{ imageUrl && imageMarkup }
					{ contentMarkup }
				</div>
			) }
		</div>
	);
};
export default memo( Render );
