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
	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/marketing-button.png`;
	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
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
				 className="uagb-marketing-btn__link wp-block-button">
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
