/**
 * BLOCK: FAQ
 */

import classnames from 'classnames';
import times from 'lodash/times';
import memoize from 'memize';

const { InnerBlocks } = wp.blockEditor;

const ALLOWED_BLOCKS = [ 'uagb/faq-child' ];

const faq = [];

export default function renderFaq( props ) {
	const { attributes, deviceType } = props;
	const { equalHeight } = attributes;

	const getFaqChildTemplate = memoize( ( faq_count, faq ) => {
		return times( faq_count, ( n ) => [ 'uagb/faq-child', faq[ n ] ] );
	} );

	const equalHeightClass = equalHeight ? 'uagb-faq-equal-height' : '';

	return (
		<div
			className={ classnames(
				'uagb-faq__outer-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				`uagb-faq-icon-${ props.attributes.iconAlign }`,
				`uagb-faq-layout-${ props.attributes.layout }`,
				`uagb-faq-expand-first-${ props.attributes.expandFirstItem }`,
				`uagb-faq-inactive-other-${ props.attributes.inactiveOtherItems }`,
				equalHeightClass
			) }
			data-faqtoggle={ props.attributes.enableToggle }
			role="tablist"
		>
			<InnerBlocks
				template={ getFaqChildTemplate( 2, faq ) }
				templateLock={ false }
				allowedBlocks={ ALLOWED_BLOCKS }
				__experimentalMoverDirection={ 'vertical' }
			/>
		</div>
	);
}
