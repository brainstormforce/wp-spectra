/**
 * BLOCK: FAQ - Child - Save Block
 */

import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { className } = props;
	const {
		block_id,
		question,
		answer,
		icon,
		iconActive,
		layout,
		headingTag,
	} = props.attributes;

	const faqRenderIcon = () => {
		return (
			<>
				<span className="uagb-icon uagb-faq-icon-wrap">
					{ renderSVG( icon ) }
				</span>
				<span className="uagb-icon-active uagb-faq-icon-wrap">
					{ renderSVG( iconActive ) }
				</span>
			</>
		);
	};
	const faqRenderAccordion = () => {
		return (
			<>
				<div className="uagb-faq-questions-button uagb-faq-questions">
					{ 'accordion' === layout && faqRenderIcon() }
					<RichText.Content
						tagName={ headingTag }
						value={ question }
						className="uagb-question"
					/>
				</div>
				<RichText.Content className="uagb-faq-content" tagName="p" value={ answer } />	
			</>
		);
	};
	return (
		<div
			className={ classnames(
				className,
				'uagb-faq-child__outer-wrap',
				'uagb-faq-item',
				`uagb-block-${ block_id }`
			) }
			role="tab"
			tabIndex="0"
		>
			{ faqRenderAccordion() }
		</div>
	);
}
