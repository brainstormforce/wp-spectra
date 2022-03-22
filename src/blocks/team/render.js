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
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMzEzLjY4OSwyMTYuNTgzYzAsMi4xMDItMS43MDUsMy44MDctMy44MDcsMy44MDdINDAuMTE4Yy0yLjEwMywwLTMuODA4LTEuNzA1LTMuODA4LTMuODA3di0wLjQ3Nw0KCQkJYzAtMi4xMDIsMS43MDUtMy44MDcsMy44MDgtMy44MDdoMjY5Ljc2NWMyLjEwMiwwLDMuODA3LDEuNzA1LDMuODA3LDMuODA3VjIxNi41ODN6Ii8+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTQuNjQxLDIzMy4wOWMwLDIuMTA0LTEuNzA1LDMuODA3LTMuODA5LDMuODA3SDU5LjE2OGMtMi4xMDMsMC0zLjgwNy0xLjcwMy0zLjgwNy0zLjgwN3YtMC40NzUNCgkJCWMwLTIuMTA0LDEuNzA0LTMuODA5LDMuODA3LTMuODA5aDIzMS42NjRjMi4xMDQsMCwzLjgwOSwxLjcwNSwzLjgwOSwzLjgwOVYyMzMuMDl6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjE4LjgzNCwxNzcuOTY3YzAsMi44MDctMi4yNzUsNS4wODItNS4wODIsNS4wODJoLTc3LjUwM2MtMi44MDcsMC01LjA4Mi0yLjI3NS01LjA4Mi01LjA4MnYwLjMwOA0KCQkJYzAtMi44MDYsMi4yNzUtNS4wODIsNS4wODItNS4wODJoNzcuNTAzYzIuODA3LDAsNS4wODIsMi4yNzYsNS4wODIsNS4wODJWMTc3Ljk2N3oiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTIwMC41MTYsMTkyLjA2N2MwLDEuNDYyLTEuMTg0LDIuNjQ2LTIuNjQ2LDIuNjQ2aC00NS43MzhjLTEuNDYyLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQljMC0xLjQ2MywxLjE4NS0yLjY0NywyLjY0Ni0yLjY0N2g0NS43MzhDMTk5LjMzMiwxODkuNDIsMjAwLjUxNiwxOTAuNjA0LDIwMC41MTYsMTkyLjA2N0wyMDAuNTE2LDE5Mi4wNjd6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0RCRENERSIgZD0iTTE3Mi45MDEsODguODVjMS4zOTEsMCwyLjc4MSwwLDQuMTczLDANCgkJCWMwLjE4OCwwLjAzOCwwLjM3NiwwLjA4NSwwLjU2NiwwLjExMmMxLjUwMywwLjIyMiwzLjAyMywwLjM1MSw0LjUwNCwwLjY3MWMyMC45NTcsNC41MjUsMzIuMjc0LDI3LjczLDIyLjk2Miw0Ny4wMzgNCgkJCWMtNi43MzksMTMuOTc0LTIxLjg4NSwyMS4zOTQtMzcuMTQ3LDE4LjE5OWMtMTMuMTk4LTIuNzYzLTIzLjU5Mi0xMy41NjMtMjUuODUzLTI2Ljg4Yy0wLjIwNi0xLjIxNi0wLjMzOS0yLjQ0NS0wLjUwNS0zLjY2Nw0KCQkJYzAtMS4zOTIsMC0yLjc4MiwwLTQuMTc0YzAuMjEzLTEuNDc5LDAuMzczLTIuOTY3LDAuNjQ2LTQuNDM1YzIuNDgtMTMuMjkxLDEzLjU4OC0yNC4xNTgsMjYuOTIxLTI2LjM1Mg0KCQkJQzE3MC40MDcsODkuMTU5LDE3MS42NTYsODkuMDIsMTcyLjkwMSw4OC44NXogTTE1NC45NzEsMTQzLjc1MWMwLjkwNC0zLjA5MSwyLjM5NC01Ljc4OCw0LjQ5NC04LjE0MQ0KCQkJYzIuMDk1LTIuMzQ1LDQuNjA4LTQuMTE2LDcuNTg0LTUuMzg3Yy0zLjcwOC0yLjU4Ny01Ljk0MS02LjAxNy02LjQ2OC0xMC40MjNjLTAuNTI4LTQuNDMsMC43MjktOC4zNjMsMy43ODEtMTEuNjM0DQoJCQljNS40NTgtNS44NSwxNC41MDUtNi4yMzIsMjAuMzU0LTAuODk2YzIuODE1LDIuNTY5LDQuNDYzLDUuNzY3LDQuNzMsOS41NzRjMC4zOTYsNS42NDctMS45MTUsMTAuMDU5LTYuNDc0LDEzLjM4DQoJCQljNi4wODQsMi43MTcsMTAuMDg3LDcuMjIxLDEyLjA2MywxMy41NDFjOC4yOS03LjU4MywxMS45MjUtMjAuMDI5LDcuNTk1LTMxLjcyN2MtNC40NzMtMTIuMDc5LTE2LjAxNi0xOS43MTktMjguOTY5LTE5LjI1NQ0KCQkJYy0xMi4yODQsMC40NC0yMy4zNzgsOS4xMTYtMjYuOTAxLDIwLjk1N0MxNDMuMTc5LDEyNS43OCwxNDcuNzg4LDEzNy40MTEsMTU0Ljk3MSwxNDMuNzUxeiBNMTc0Ljk3NywxNTEuNzE3DQoJCQljNS44MDctMC4wNDcsMTEuMTY1LTEuNjE1LDE2LjA2NS00Ljc2NWMwLjQ5OC0wLjMyLDAuNTc1LTAuNjMyLDAuNDUyLTEuMTY1Yy0yLjAyNy04Ljc3MS0xMC4xNzgtMTQuMzIzLTE5LjExNS0xMy4wMDQNCgkJCWMtNi44NTIsMS4wMTEtMTIuNDU5LDYuMjkyLTEzLjkyNCwxMy4wOTJjLTAuMTA3LDAuNDk4LDAuMDA3LDAuNzcyLDAuNDQ3LDEuMDU1QzE2My43OTcsMTUwLjA4MSwxNjkuMTUyLDE1MS42NjMsMTc0Ljk3NywxNTEuNzE3DQoJCQl6IE0xNzQuOTc0LDEwNy40MjljLTUuODYzLDAuMDE1LTEwLjU5Nyw0Ljc2NS0xMC41ODksMTAuNjI5YzAuMDA3LDUuODY4LDQuNzQ2LDEwLjU5OCwxMC42MTQsMTAuNTkxDQoJCQljNS44NjctMC4wMDYsMTAuNTk5LTQuNzUsMTAuNTkyLTEwLjYxN0MxODUuNTgzLDExMi4xNjksMTgwLjgyMSwxMDcuNDE1LDE3NC45NzQsMTA3LjQyOXoiLz4NCgk8L2c+DQoJPGc+DQoJCTxjaXJjbGUgZmlsbD0iI0RCRENERSIgY3g9IjE0OC44MzMiIGN5PSIyNTcuODE2IiByPSIzLjMzMyIvPg0KCQk8Y2lyY2xlIGZpbGw9IiNEQkRDREUiIGN4PSIxNjYuMjc4IiBjeT0iMjU3LjgxNiIgcj0iMy4zMzMiLz4NCgkJPGNpcmNsZSBmaWxsPSIjREJEQ0RFIiBjeD0iMTgzLjcyMyIgY3k9IjI1Ny44MTYiIHI9IjMuMzM0Ii8+DQoJCTxjaXJjbGUgZmlsbD0iI0RCRENERSIgY3g9IjIwMS4xNjciIGN5PSIyNTcuODE2IiByPSIzLjMzMyIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';
	return (
		<>
		{ isPreview ? <img width='100%' src={previewImageData}/> :
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
