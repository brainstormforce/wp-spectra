/**
 * BLOCK: FAQ-Child - Deprecated Block
 */

import classnames from 'classnames';
import renderSVG from '@Controls/deprecatedRenderIcon';
import attributes from './attributes';
import { RichText } from '@wordpress/block-editor';
import savev2_11_2 from './v2.11.2/save';

const deprecated = [
	{
		attributes,
		save( props ) {
			const { className } = props;
			const { block_id, question, answer, icon, iconActive, layout } = props.attributes;

			const faqRenderIcon = () => {
				return (
					<>
						<span className="uagb-icon uagb-faq-icon-wrap">{ renderSVG( icon ) }</span>
						<span className="uagb-icon-active uagb-faq-icon-wrap">{ renderSVG( iconActive ) }</span>
					</>
				);
			};
			const faqRenderAccordion = () => {
				return (
					<div className="uagb-faq-child__wrapper">
						<div className="uagb-faq-item">
							<div className="uagb-faq-questions-button uagb-faq-questions">
								{ 'accordion' === layout && faqRenderIcon() }
								<RichText.Content tagName="span" value={ question } className="uagb-question" />
							</div>
							<div className="uagb-faq-content">
								<span>
									<RichText.Content tagName="p" value={ answer } />
								</span>
							</div>
						</div>
					</div>
				);
			};
			return (
				<div className={ classnames( className, 'uagb-faq-child__outer-wrap', `uagb-block-${ block_id }` ) }>
					{ faqRenderAccordion() }
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { className } = props;
			const { block_id, question, answer, icon, iconActive, layout, headingTag } = props.attributes;

			const faqRenderIcon = () => {
				return (
					<>
						<span className="uagb-icon uagb-faq-icon-wrap">{ renderSVG( icon ) }</span>
						<span className="uagb-icon-active uagb-faq-icon-wrap">{ renderSVG( iconActive ) }</span>
					</>
				);
			};
			const faqRenderAccordion = () => {
				return (
					<div className="uagb-faq-child__wrapper">
						<div className="uagb-faq-item" role="tab" tabIndex="0">
							<div className="uagb-faq-questions-button uagb-faq-questions">
								{ 'accordion' === layout && faqRenderIcon() }
								<RichText.Content tagName={ headingTag } value={ question } className="uagb-question" />
							</div>
							<div className="uagb-faq-content">
								<span>
									<RichText.Content tagName="p" value={ answer } />
								</span>
							</div>
						</div>
					</div>
				);
			};
			return (
				<div className={ classnames( className, 'uagb-faq-child__outer-wrap', `uagb-block-${ block_id }` ) }>
					{ faqRenderAccordion() }
				</div>
			);
		},
	},
	{
		attributes: attributes,
		save: savev2_11_2,
	}
];

export default deprecated;
