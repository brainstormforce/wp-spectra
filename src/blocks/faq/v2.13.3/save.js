/**
 * BLOCK: FAQ - Save Block
 */

import classnames from 'classnames';

import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const { className } = props;
	const { block_id, schema, enableSchemaSupport, equalHeight } = props.attributes;

	const renderSchema = () => {
		if ( true === enableSchemaSupport ) {
			return <script type="application/ld+json">{ schema }</script>;
		}

		return '';
	};

	const equalHeightClass = equalHeight ? 'uagb-faq-equal-height' : '';

	return (
		<div
			className={ classnames(
				className,
				'uagb-faq__outer-wrap',
				`uagb-block-${ block_id }`,
				`uagb-faq-icon-${ props.attributes.iconAlign }`,
				`uagb-faq-layout-${ props.attributes.layout }`,
				`uagb-faq-expand-first-${ props.attributes.expandFirstItem }`,
				`uagb-faq-inactive-other-${ props.attributes.inactiveOtherItems }`,
				'uagb-faq__wrap',
				'uagb-buttons-layout-wrap',
				equalHeightClass
			) }
			data-faqtoggle={ props.attributes.enableToggle }
			role="tablist"
		>
			{ renderSchema() }
			<InnerBlocks.Content />
		</div>
	);
}