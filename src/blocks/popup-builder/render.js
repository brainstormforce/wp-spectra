/**
 * BLOCK: Popup Builder - Render Block in the Editor.
 */

import { memo } from '@wordpress/element';
import { select } from '@wordpress/data';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { getBlockTypes } from '@wordpress/blocks';
import renderSVG from '@Controls/renderIcon';
import { uagbClassNames } from '@Utils/Helpers';

const Render = ( props ) => {
	const {
		clientId,
		className,
		attributes,
		setAttributes,
		deviceType,
	} = props;

	const {
		// ------------------------- BLOCK SETTINGS.
		block_id,
		variantType,
		// ------------------------- POPUP SETTINGS.
		isDismissable,
		// ------------------------- CLOSE SETTINGS.
		closeIcon,
	} = attributes;

	const {
		getBlockOrder,
	} = select( 'core/block-editor' );

	const excludeBlocks = [
		'uagb/how-to-step',
		'uagb/buttons-child',
		'uagb/faq-child',
		'uagb/content-timeline-child',
		'uagb/icon-list-child',
		'uagb/social-share-child',
		'uagb/restaurant-menu-child',
		'uagb/tabs-child',
		'uagb/post-image',
		'uagb/post-taxonomy',
		'uagb/post-title',
		'uagb/post-meta',
		'uagb/post-excerpt',
		'uagb/post-button',
		'uagb/forms-name',
		'uagb/forms-email',
		'uagb/forms-hidden',
		'uagb/forms-phone',
		'uagb/forms-textarea',
		'uagb/forms-url',
		'uagb/forms-select',
		'uagb/forms-radio',
		'uagb/forms-checkbox',
		'uagb/forms-toggle',
		'uagb/forms-date',
		'uagb/forms-accept',
		'uagb/modal',
		'uagb/slider-child',
		'uagb/popup-builder',
	];

	const blockProps = useBlockProps( {
		className: uagbClassNames( [
			className,
			`uagb-block-${ block_id }`,
			`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
			'uagb-popup-builder',
		] ),
	} );

	const hasChildBlocks = getBlockOrder( clientId ).length > 0;

	const ALLOWED_BLOCKS = getBlockTypes().map( block => block.name ).filter( blockName => ! excludeBlocks.includes( blockName ) );

	const innerBlocksParams = {
		allowedBlocks: ALLOWED_BLOCKS,
		templateLock: false,
		renderAppender: hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender,
	}

	return (
		<div
			{ ...blockProps }
		>
			<div className={ uagbClassNames( [
				'uagb-popup-builder__wrapper',
				`uagb-popup-builder__wrapper--${ variantType }`,
			] ) }>
				{ ( isDismissable && closeIcon ) && (
					<div className='uagb-popup-builder__close'>
						{ renderSVG( closeIcon, setAttributes ) }
					</div>
				) }
				<div className={ uagbClassNames( [
					'uagb-popup-builder__container',
					`uagb-popup-builder__container--${ variantType }`,
				] ) }>
					<InnerBlocks { ...innerBlocksParams } />
				</div>
			</div>
		</div>
	);
};
export default memo( Render );
