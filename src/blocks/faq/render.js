/**
 * BLOCK: FAQ
 */

import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import { useLayoutEffect, memo, useMemo } from '@wordpress/element';

import styles from './editor.lazy.scss';
const ALLOWED_BLOCKS = [ 'uagb/faq-child' ];

const faq = [];
const faqCount = 2;

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, deviceType, clientId } = props;
	const { equalHeight, iconAlign, layout, expandFirstItem, inactiveOtherItems, enableToggle } = attributes;

	const getFaqChildTemplate = useMemo( () => {
		const childFaq = [];

		for ( let i = 0; i < faqCount; i++ ) {
			childFaq.push( [ 'uagb/faq-child', faq[ i ] ] );
		}

		return childFaq;
	}, [ faqCount, faq ] );

	const equalHeightClass = equalHeight ? 'uagb-faq-equal-height' : '';

	return (
		<div
			className={ classnames(
				'uagb-faq__outer-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ clientId.substr( 0, 8 ) }`,
				`uagb-faq-icon-${ iconAlign }`,
				`uagb-faq-layout-${ layout }`,
				`uagb-faq-expand-first-${ expandFirstItem }`,
				`uagb-faq-inactive-other-${ inactiveOtherItems }`,
				equalHeightClass
			) }
			data-faqtoggle={ enableToggle }
			role="tablist"
		>
			<InnerBlocks
				template={ getFaqChildTemplate }
				templateLock={ false }
				allowedBlocks={ ALLOWED_BLOCKS }
				__experimentalMoverDirection={ 'vertical' }
			/>
		</div>
	);
};

export default memo( Render );
