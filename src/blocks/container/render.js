import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { memo } from '@wordpress/element';
import shapes from './shapes';
import { select, useSelect } from '@wordpress/data';
import backgroundCss from './backgroundCss';

const Render = ( props ) => {
	props = props.parentProps;
	const { attributes, clientId, deviceType } = props;

	const {
		block_id,
		htmlTag,
		topType,
		topFlip,
		topContentAboveShape,
		bottomType,
		bottomFlip,
		bottomContentAboveShape,
		backgroundType,
		backgroundVideo,
		topInvert,
		bottomInvert,
		isBlockRootParent,
		contentWidth,
		innerContentWidth,
		hasSliderParent
	} = attributes;

	const direction = attributes[ 'direction' + deviceType ];

	const moverDirection = 'row' === direction ? 'horizontal' : 'vertical';
	const getContainerBGStyle = backgroundCss( attributes, deviceType, clientId );

	const topDividerHtml = 'none' !== topType && (
		<div
			className={ classnames(
				'uagb-container__shape',
				'uagb-container__shape-top',
				{ 'uagb-container__shape-flip': topFlip === true },
				{
					'uagb-container__shape-above-content': topContentAboveShape === true,
				},
				{ 'uagb-container__invert': topInvert === true }
			) }
		>
			{ shapes[ topType ] }
		</div>
	);

	const bottomDividerHtml = 'none' !== bottomType && (
		<div
			className={ classnames(
				'uagb-container__shape',
				'uagb-container__shape-bottom',
				{ 'uagb-container__shape-flip': bottomFlip === true },
				{
					'uagb-container__shape-above-content': bottomContentAboveShape === true,
				},
				{ 'uagb-container__invert': bottomInvert === true }
			) }
		>
			{ shapes[ bottomType ] }
		</div>
	);

	const { getBlockOrder } = select( 'core/block-editor' );

	const hasChildBlocks = getBlockOrder( clientId ).length > 0;

	const CustomTag = 'a' === htmlTag ? 'div' : `${ htmlTag }`;	

	const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( clientId ).length;
	const hasChildrenClass = hasChildren ? 'uagb-container-has-children' : '';
	const isRootContainerClass = isBlockRootParent ? `${ contentWidth } uagb-is-root-container` : '';
	const blockProps = useBlockProps( {
		className: `uagb-block-${ block_id } ${ hasChildrenClass } uagb-editor-preview-mode-${ deviceType.toLowerCase() } ${ isRootContainerClass }`,
		style: getContainerBGStyle
	} );

	const innerBlocksParams = {
		__experimentalMoverDirection: { moverDirection },
		renderAppender: hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender,
	};

	if ( hasSliderParent ) {
		const parentBlocks = wp.blocks.getBlockTypes().filter( function ( item ) {
			return ! item.parent;
		} );

		const ALLOWED_BLOCKS = parentBlocks
			.map( ( block ) => block.name )
			.filter( ( blockName ) => [ 'uagb/slider' ].indexOf( blockName ) === -1 );

		innerBlocksParams.allowedBlocks = ALLOWED_BLOCKS;
	}

	const { getBlockParentsAll, getBlockSingle } = useSelect( ( selectStore ) => {
		const { getBlockParents, getBlock } = selectStore( 'core/block-editor' );
		return { getBlockParentsAll: getBlockParents, getBlockSingle: getBlock };
	}, [] );

	const parentBlockIds = getBlockParentsAll( clientId );
	const parentBlockNames = parentBlockIds.map( ( id ) => getBlockSingle( id ).name );

	if ( parentBlockNames.includes( 'uagb/loop-builder' ) ) {
		const allowedBlocks = [
			'uagb/advanced-heading',
			'uagb/image',
			'uagb/buttons',
			'uagb/container',
			'uagb/info-box'
		]
		innerBlocksParams.allowedBlocks = allowedBlocks;
	}

	return (
		<>
			<CustomTag { ...blockProps } key={ block_id }>
				{/* Video Background is positioned absolutely. The place in the DOM is to render it underneath the shape dividers and content. */}
				{ 'video' === backgroundType && (
					<div className="uagb-container__video-wrap">
						{ backgroundVideo && (
							<video autoPlay loop muted playsinline>
								<source src={ backgroundVideo.url } type="video/mp4" />
							</video>
						) }
					</div>
				) }
				{/* Both the dividers are positioned absolutely. Their place in the DOM is just to determine their default Z-index. */}
				{ topDividerHtml }
				{ bottomDividerHtml }
				{/* Render the content above the Video Background if any and above the Shape Dividers. */}
				{ isBlockRootParent && 'alignfull' === contentWidth && 'alignwide' === innerContentWidth ? (
					<div className="uagb-container-inner-blocks-wrap">
						<InnerBlocks { ...innerBlocksParams } />
					</div>
				) : (
					<InnerBlocks { ...innerBlocksParams } />
				) }
			</CustomTag>
		</>
	);
};
export default memo( Render );
