/**
 * BLOCK: Popup Builder - Render Block on the Front-end.
 */

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { uagbClassNames } from '@Utils/Helpers';
import renderSVG from '@Controls/renderIcon';

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
				{ ( isDismissable && closeIcon ) && (
					<div className='uagb-popup-builder__close'>
						{ renderSVG( closeIcon ) }
					</div>
				) }
				<div className={ uagbClassNames( [
					'uagb-popup-builder__container',
					`uagb-popup-builder__container--${ variantType }`,
				] ) }>
					<InnerBlocks.Content/>
				</div>
			</div>
		</div>
	);
}
