import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { useLayoutEffect, memo } from '@wordpress/element';
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
		block_id,
		align,
		textAlign,
		heading,
		prefix,
		icon,
		iconPosition,
		titleTag,
		showDescription,
	} = attributes;

	const iconHTML = (
		<>
			{ '' !== icon && (
				renderSVG( icon, setAttributes )
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
				value={ heading.replace( /<(?!br\s*V?)[^>]+>/g, '' ) }
				allowedFormats={ [] } // Removed the WP default link/bold/italic from the toolbar for button.
				tagName={ titleTag }
				onChange={ ( value ) =>
					setAttributes( { heading: value } )
				}
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

	return (
		<div
			className={ classnames(
				className,
				`uagb-marketing-btn__align-${ align }`,
				`uagb-marketing-btn__align-text-${ textAlign }`,
				`uagb-marketing-btn__icon-${ iconPosition }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`,
				'wp-block-button'
			) }
		>
				<a // eslint-disable-line jsx-a11y/anchor-is-valid
				 className="uagb-marketing-btn__link wp-block-button__link">
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
						{ showDescription && (
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
						) }
				</a>
		</div>
	);
};
export default memo( Render );
