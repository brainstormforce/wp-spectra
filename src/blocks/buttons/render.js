import classnames from 'classnames';
import times from 'lodash/times';
import memoize from 'memize';
import { __ } from '@wordpress/i18n';

const { InnerBlocks } = wp.blockEditor;

const ALLOWED_BLOCKS = [ 'uagb/buttons-child' ];

export default function renderButtons( props ) {
	const { attributes } = props;

	const { className, btn_count, buttons, stack } = attributes;

	const getButtonTemplate = memoize( ( button_block, buttons ) => {
		return times( button_block, ( n ) => [
			'uagb/buttons-child',
			buttons[ n ],
		] );
	} );

	return (
		<div
			className={ classnames(
				className,
				'uagb-buttons__outer-wrap',
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`
			) }
		>
			<div
				className={ classnames(
					'uagb-buttons__wrap',
					`uagb-buttons-stack-${ stack }`
				) }
			>
				<InnerBlocks
					template={ getButtonTemplate( btn_count, buttons ) }
					templateLock={ false }
					allowedBlocks={ ALLOWED_BLOCKS }
					__experimentalMoverDirection={
						'desktop' == stack ? 'vertical' : 'horizontal'
					}
				/>
			</div>
		</div>
	);
}
