import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { useLayoutEffect, memo } from '@wordpress/element';
import styles from './editor.lazy.scss';
import { format } from '@wordpress/date';

import { __ } from '@wordpress/i18n';
import { useDeviceType } from '@Controls/getPreviewType';

import { createBlock } from '@wordpress/blocks';

import { RichText } from '@wordpress/block-editor';

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

	// Setup the attributes.
	const {
		setAttributes,
		insertBlocksAfter,
		mergeBlocks,
		onReplace,
		attributes,
		attributes: {
			block_id,
			headingTag,
			icon,
			t_date,
			displayPostDate,
			dateFormat,
			time_heading,
			time_desc,
			content,
		},
	} = props;

	const timelinAlignment =
		'undefined' !== typeof attributes[ 'timelinAlignment' + deviceType ]
			? attributes[ 'timelinAlignment' + deviceType ]
			: attributes.timelinAlignment;

	const splitBlock = ( before, after, ...blocks ) => {
		if ( after ) {
			// any other blocks being inserted after the current paragraph.
			blocks.push( createBlock( 'core/paragraph', { content: after } ) );
		}

		if ( blocks.length && insertBlocksAfter ) {
			insertBlocksAfter( blocks );
		}

		if ( ! before ) {
			// If before content is omitted, treat as intent to delete block.
			onReplace( [] );
		} else if ( content !== before ) {
			// Only update content if it has in-fact changed. In case that user
			// has created a new paragraph at end of an existing one, the value
			// of before will be strictly equal to the current content.
			setAttributes( { content: before } );
		}
	};

	let displayInnerDate = false;
	const postDate = t_date;

	if ( timelinAlignment === 'center' ) {
		displayInnerDate = true;
	}

	return (
		<article
			className={ classnames(
				'wp-block-uagb-content-timeline-child uagb-timeline__field',
				`uagb-timeline-child-${ block_id }`,
				props.attributes.content_class
			) }
		>
			<div className="uagb-timeline__marker uagb-timeline__out-view-icon">
				{ renderSVG( icon, setAttributes ) ? (
					renderSVG( icon, setAttributes )
				) : (
					<svg xmlns="" viewBox="0 0 256 512"></svg>
				) }
			</div>
			<div className={ classnames( props.attributes.dayalign_class, 'uagb-timeline__events-inner-new' ) }>
				<div className="uagb-timeline__events-inner--content">
					{ displayPostDate !== true && t_date && (
						<div className={ 'uagb-timeline__date-hide uagb-timeline__inner-date-new' }>
							{ ( 'custom' !== dateFormat && format( dateFormat, postDate ) ) || postDate }
						</div>
					) }
					<RichText
						tagName={ headingTag }
						value={ time_heading }
						onChange={ ( value ) => setAttributes( { time_heading: value } ) }
						placeholder={ __( 'Write a Heading', 'ultimate-addons-for-gutenberg' ) }
						className="uagb-timeline__heading"
						onMerge={ mergeBlocks }
						onSplit={
							insertBlocksAfter
								? ( before, after, ...blocks ) => {
										setAttributes( {
											content: before,
										} );
										insertBlocksAfter( [
											...blocks,
											createBlock( 'core/paragraph', { content: after } ),
										] );
								  }
								: undefined
						}
						onRemove={ () => onReplace( [] ) }
					/>
					<RichText
						tagName="p"
						value={ time_desc }
						onChange={ ( value ) => setAttributes( { time_desc: value } ) }
						placeholder={ __( 'Write a Description', 'ultimate-addons-for-gutenberg' ) }
						className="uagb-timeline-desc-content"
						onMerge={ mergeBlocks }
						onSplit={ splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
					<div className="uagb-timeline__arrow"></div>
				</div>
			</div>
			{ displayInnerDate && (
				<div className="uagb-timeline__date-new">
					{ displayPostDate !== true && t_date && (
						<>{ ( 'custom' !== dateFormat && format( dateFormat, postDate ) ) || postDate }</>
					) }
				</div>
			) }
		</article>
	);
};

export default memo( Render );
