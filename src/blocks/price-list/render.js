import classnames from 'classnames';
import PositionClasses from './classes';
import memoize from 'memize';
import times from 'lodash/times';
import { InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = [ 'uagb/restaurant-menu-child' ];

const Render = ( props ) => {
	props = props.parentProps;
	const { className, attributes, deviceType } = props;

	// Setup the attributes.
	const { menu_item_count, rest_menu_item_arr } = attributes;

	let cnt = 0;
	rest_menu_item_arr.map( ( item, thisIndex ) => {
		const image_arr = rest_menu_item_arr[ thisIndex ];
		if ( image_arr && typeof image_arr !== 'undefined' ) {
			const image = image_arr.image;
			if (
				typeof image !== 'undefined' &&
				image !== null &&
				image !== ''
			) {
				cnt++;
			}
		}
	} );

	const getPriceListTemplate = memoize(
		( menu_item_block, rest_menu_item_arr ) => {
			return times( menu_item_block, ( n ) => [
				'uagb/restaurant-menu-child',
				rest_menu_item_arr[ n ],
			] );
		}
	);

	return (
		<div
			className={ classnames(
				className,
				'uagb-rest_menu__outer-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				...PositionClasses( attributes )
			) }
		>
			<InnerBlocks
				template={ getPriceListTemplate(
					menu_item_count,
					rest_menu_item_arr
				) }
				templateLock={ false }
				allowedBlocks={ ALLOWED_BLOCKS }
				__experimentalMoverDirection={ 'horizontal' }
			/>
		</div>
	);
};
export default React.memo( Render );
