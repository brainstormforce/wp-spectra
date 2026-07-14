/**
 * WordPress dependencies
 */
import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;
	const {
		block_id,
		schema,
		enableSchemaSupport,
		equalHeight,
		iconAlign,
		layout,
		expandFirstItem,
		inactiveOtherItems,
		enableToggle,
	} = attributes;

	const renderSchema = () => {
		if ( true === enableSchemaSupport ) {
			return <script type="application/ld+json">{ schema }</script>;
		}
		return '';
	};

	const equalHeightClass = equalHeight ? 'uagb-faq-equal-height' : '';

	const blockProps = useBlockProps.save( {
		className: classnames(
			'uagb-faq__outer-wrap',
			`uagb-block-${ block_id }`,
			`uagb-faq-icon-${ iconAlign }`,
			`uagb-faq-layout-${ layout }`,
			`uagb-faq-expand-first-${ expandFirstItem }`,
			`uagb-faq-inactive-other-${ inactiveOtherItems }`,
			equalHeightClass
		),
	} );

	return (
		<div
			{ ...blockProps }
			data-faqtoggle={ enableToggle }
			role="tablist"
		>
			{ renderSchema() }
			<InnerBlocks.Content />
		</div>
	);
}
