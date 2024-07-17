/**
 * BLOCK: Popup Builder - Render Block on the Front-end.
 */

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { uagbClassNames } from '@Utils/Helpers';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';

export default function save( props ) {
	const {
		attributes,
	} = props;

	const {
		// ------------------------- BLOCK SETTINGS.
		block_id,
		variationSelected,
		variantType,
		// ------------------------- POPUP SETTINGS.
		isDismissable,
		// ------------------------- CLOSE SETTINGS.
		closeIcon,
	} = attributes;

	const blockProps = useBlockProps.save();
	const ariaLabel = ( 'popup' === variantType ) ?  __( 'Close Popup', 'ultimate-addons-for-gutenberg' ) : __( 'Close Info Bar', 'ultimate-addons-for-gutenberg' );

	return variationSelected && (
		<div
			id={ blockProps.id }
			className={ uagbClassNames( [
				blockProps.className,
				`uagb-block-${ block_id }`,
				'uagb-popup-builder',
			] ) }
		>
			<div className={ uagbClassNames( [
				'uagb-popup-builder__wrapper',
				`uagb-popup-builder__wrapper--${ variantType }`,
			] ) }>
				<div className={ uagbClassNames( [
					'uagb-popup-builder__container',
					`uagb-popup-builder__container--${ variantType }`,
				] ) }>
					<InnerBlocks.Content/>
				</div>
				{ ( isDismissable && closeIcon ) && (
					<button className='uagb-popup-builder__close' aria-label={ ariaLabel }>
						{ renderSVG( closeIcon ) }
					</button>
				) }
			</div>
		</div>
	);
}
