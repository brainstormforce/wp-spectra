import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import { createBlock } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;
	const deviceType = useDeviceType();
	const {
		className,
		setAttributes,
		attributes,
		mergeBlocks,
		insertBlocksAfter,
		onReplace,
	} = props;

	const {
		isPreview,
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

	const titleHtml = (
		<>
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
		</>
	);

	const socialHtml = ( icon, link, target ) => {
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

	const socialLinks = (
			<ul className="uagb-team__social-list">
				{ '' !== twitterIcon &&
					socialHtml( twitterIcon, twitterLink, socialTarget ) }
				{ '' !== fbIcon && socialHtml( fbIcon, fbLink, socialTarget ) }
				{ '' !== linkedinIcon &&
					socialHtml( linkedinIcon, linkedinLink, socialTarget ) }
				{ '' !== pinIcon &&
					socialHtml( pinIcon, pinLink, socialTarget ) }
			</ul>
	);

	// Get description and seperator components.
	const descHtml = (
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
					className={`uagb-team__image-crop-${ imgStyle }`}
					src={ imgUrl }
					alt={ image.alt ? image.alt : '' }
				/>
		);
	}
		const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0zMTcuMTExLDEzOC44MjljMCwxLjg5Ni0xLjUzNSwzLjQzMi0zLjQzLDMuNDMySDM2LjMxN2MtMS44OTMsMC0zLjQzLTEuNTM2LTMuNDMtMy40MzJ2LTAuNDI3DQoJCQkJYzAtMS44OTYsMS41MzctMy40MywzLjQzLTMuNDNoMjc3LjM2NGMxLjg5NSwwLDMuNDMsMS41MzQsMy40MywzLjQzVjEzOC44Mjl6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjk5Ljk0OSwxNTYuNDA4YzAsMS44OTMtMS41MzUsMy40MjktMy40MywzLjQyOUg1My40OGMtMS44OTUsMC0zLjQzMS0xLjUzNi0zLjQzMS0zLjQyOXYtMC40Mw0KCQkJCWMwLTEuODkzLDEuNTM2LTMuNDI5LDMuNDMxLTMuNDI5SDI5Ni41MmMxLjg5NSwwLDMuNDMsMS41MzYsMy40MywzLjQyOVYxNTYuNDA4eiIvPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI4Mi43ODcsMTczLjk4NWMwLDEuODk1LTEuNTM2LDMuNDI5LTMuNDMxLDMuNDI5SDcwLjY0M2MtMS44OTQsMC0zLjQzLTEuNTM0LTMuNDMtMy40Mjl2LTAuNDI3DQoJCQkJYzAtMS44OTYsMS41MzYtMy40MzIsMy40My0zLjQzMmgyMDguNzE0YzEuODk1LDAsMy40MzEsMS41MzYsMy40MzEsMy40MzJWMTczLjk4NXoiLz4NCgkJPC9nPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjA5LjUsMjAxLjMzNGMwLDIuMjA5LTEuNzkxLDQtNCw0aC02MWMtMi4yMDksMC00LTEuNzkxLTQtNFYyMDBjMC0yLjIwOSwxLjc5MS00LDQtNGg2MQ0KCQkJYzIuMjA5LDAsNCwxLjc5MSw0LDRWMjAxLjMzNHoiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTE5NS4wODMsMjE1LjU4M2MwLDEuMTUtMC45MzMsMi4wODMtMi4wODQsMi4wODNIMTU3Yy0xLjE1LDAtMi4wODMtMC45MzMtMi4wODMtMi4wODNsMCwwDQoJCQljMC0xLjE1MSwwLjkzMy0yLjA4NCwyLjA4My0yLjA4NGgzNS45OTlDMTk0LjE1LDIxMy40OTksMTk1LjA4MywyMTQuNDMyLDE5NS4wODMsMjE1LjU4M0wxOTUuMDgzLDIxNS41ODN6Ii8+DQoJCTxnPg0KCQkJPGNpcmNsZSBmaWxsPSIjREJEQ0RFIiBjeD0iMTY5LjEyNSIgY3k9IjIzMy4zNzUiIHI9IjEuMzc1Ii8+DQoJCQk8Y2lyY2xlIGZpbGw9IiNEQkRDREUiIGN4PSIxNzUiIGN5PSIyMzMuMzc1IiByPSIxLjM3NSIvPg0KCQkJPGNpcmNsZSBmaWxsPSIjREJEQ0RFIiBjeD0iMTgwLjg3NSIgY3k9IjIzMy4zNzUiIHI9IjEuMzc1Ii8+DQoJCTwvZz4NCgk8L2c+DQoJPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0RCRENERSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50cz0iMTcuNjc3LDE4MC4zNzUgMTIuOTgyLDE4NC42NzggDQoJCTE3LjY3NSwxODkuMzQ4IAkiLz4NCgk8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjREJEQ0RFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIzMzIuMzIxLDE4MC4zNzUgMzM3LjAxNywxODQuNjc4IA0KCQkzMzIuMzIzLDE4OS4zNDggCSIvPg0KPC9nPg0KPC9zdmc+DQo=';
	return (
		<>
		{ isPreview ? <img width='100%' src={previewImageData} alt=''/> :
			<div
				className={ classnames(
					className,
					`uagb-team__image-position-${ imgPosition }`,
					`uagb-team__align-${ align }`,
					`uagb-team__stack-${ stack }`,
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
					`uagb-block-${ props.clientId.substr( 0, 8 ) }`
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
}
		</>
	);
};

export default React.memo( Render );
