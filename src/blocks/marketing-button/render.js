import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import React, { useLayoutEffect } from 'react';
import { __ } from '@wordpress/i18n';
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
		attributes,
		setAttributes,
		className,
		mergeBlocks,
		insertBlocksAfter,
		createBlock,
		onReplace,
	} = props;

	const {
		isPreview,
		block_id,
		align,
		textAlign,
		heading,
		prefix,
		icon,
		iconPosition,
		titleTag,
	} = attributes;

	const iconHTML = (
		<>
			{ '' !== icon && (
				renderSVG( icon )
			) }
		</>
	);
	const titleHTML = (
		<>
			<RichText
				placeholder={ __(
					'Add Button Title…',
					'ultimate-addons-for-gutenberg'
				) }
				value={ heading }
				tagName={ titleTag }
				onChange={ ( value ) =>
					setAttributes( { heading: value } )
				}
				allowedFormats={ [
					'bold',
					'italic',
					'strikethrough',
				] }
				className="uagb-marketing-btn__title"
				onRemove={ () => onReplace( [] ) }
				multiline={ false }
				onMerge={ mergeBlocks }
				onSplit={
					insertBlocksAfter
						? ( before, after, ...blocks ) => {
								setAttributes( {
									content: before,
								} );
								insertBlocksAfter( [
									...blocks,
									createBlock( 'core/paragraph', {
										content: after,
									} ),
								] );
						  }
						: undefined
				}
			/>
		</>
	);
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTQuMDA4LDE3NS42ODljMCwxOS4wNS0xNS40NDQsMzQuNDk0LTM0LjQ5NCwzNC40OTRIOTAuNDg2Yy0xOS4wNSwwLTM0LjQ5NC0xNS40NDQtMzQuNDk0LTM0LjQ5NHYtMS4zNzkNCgljMC0xOS4wNTEsMTUuNDQzLTM0LjQ5NCwzNC40OTQtMzQuNDk0aDE2OS4wMjhjMTkuMDUsMCwzNC40OTQsMTUuNDQzLDM0LjQ5NCwzNC40OTRWMTc1LjY4OXoiLz4NCjxnPg0KCTxwYXRoIGZpbGw9IiNCQkJEQzAiIGQ9Ik0yMzguNSwxNjYuODM0YzAsMS44NDEtMS40OTIsMy4zMzMtMy4zMzMsMy4zMzNIMTE0LjgzNGMtMS44NDIsMC0zLjMzNC0xLjQ5Mi0zLjMzNC0zLjMzM2wwLDANCgkJYzAtMS44NDIsMS40OTItMy4zMzQsMy4zMzQtMy4zMzRoMTIwLjMzM0MyMzcuMDA4LDE2My41LDIzOC41LDE2NC45OTIsMjM4LjUsMTY2LjgzNEwyMzguNSwxNjYuODM0eiIvPg0KCTxwYXRoIGZpbGw9IiNCQkJEQzAiIGQ9Ik0yNDUuMDA1LDE4My4xNjdjMCwxLjg0MS0xLjQ5MiwzLjMzMy0zLjMzMiwzLjMzM0gxMDguMzI5Yy0xLjg0MSwwLTMuMzMzLTEuNDkyLTMuMzMzLTMuMzMzbDAsMA0KCQljMC0xLjg0MiwxLjQ5Mi0zLjMzNCwzLjMzMy0zLjMzNGgxMzMuMzQ0QzI0My41MTMsMTc5LjgzMywyNDUuMDA1LDE4MS4zMjUsMjQ1LjAwNSwxODMuMTY3TDI0NS4wMDUsMTgzLjE2N3oiLz4NCjwvZz4NCjwvc3ZnPg0K';
	return (
		isPreview ? <img width='100%' src={previewImageData}/> :
		<div
			className={ classnames(
				className,
				`uagb-marketing-btn__align-${ align }`,
				`uagb-marketing-btn__align-text-${ textAlign }`,
				`uagb-marketing-btn__icon-${ iconPosition }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`,
			) }
		>
				<a // eslint-disable-line jsx-a11y/anchor-is-valid
				 className="uagb-marketing-btn__link">
						{ 'before' === iconPosition &&
							<>
							{ iconHTML }
							{ titleHTML }
							</>
						}
						{ 'after' === iconPosition &&
							<>
							{ titleHTML }
							{ iconHTML }
							</>
						}
						<RichText
							placeholder={ __(
								'Add Button Description…',
								'ultimate-addons-for-gutenberg'
							) }
							value={ prefix }
							tagName="p"
							onChange={ ( value ) =>
								setAttributes( { prefix: value } )
							}
							allowedFormats={ [
								'bold',
								'italic',
								'strikethrough',
							] }
							className="uagb-marketing-btn__prefix"
							onRemove={ () => onReplace( [] ) }
							multiline={ false }
							onMerge={ mergeBlocks }
							onSplit={
								insertBlocksAfter
									? ( before, after, ...blocks ) => {
											setAttributes( {
												content: before,
											} );
											insertBlocksAfter( [
												...blocks,
												createBlock( 'core/paragraph', {
													content: after,
												} ),
											] );
									  }
									: undefined
							}
						/>
				</a>
		</div>
	);
};
export default React.memo( Render );
