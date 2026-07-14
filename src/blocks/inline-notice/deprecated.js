/**
 * BLOCK: Inline Notice - Deprecated Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import renderSVG from '@Controls/deprecatedRenderIcon';
import renderSVGCurrent from '@Controls/renderIcon';
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import attributes from './attributes';
import newSaveV2_10_3 from './v2.10.3/save';
import attributesV2_10_3 from './v2.10.3/attributes';
import attributesV2_12_2 from './v2.12.2/attributes';
import newSaveV2_12_2 from './v2.12.2/save';

const deprecated = [
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;

			const {
				block_id,
				noticeTitle,
				noticeAlignment,
				headingTag,
				icon,
				noticeDismiss,
				cookies,
			} = attributes;

			let imageIconHtml = '';

			if ( noticeDismiss ) {
				imageIconHtml = renderSVGCurrent( icon );
			}

			let active = '';
			if ( true === cookies ) {
				active = 'uagb-notice__active';
			}
			return (
				<div
					className={classnames(
						className,
						`${noticeDismiss}`,
						`uagb-inline_notice__align-${noticeAlignment}`,
						`uagb-block-${block_id}`,
						`${active}`
					)}
				>
					<button className="uagb-notice-close-button" type="button" aria-label="Close">
						{imageIconHtml}
					</button>
					<RichText.Content value={noticeTitle} tagName={headingTag} className="uagb-notice-title" />
					<div className='uagb-notice-text'>
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;

			const {
				block_id,
				c_id,
				noticeTitle,
				noticeContent,
				noticeAlignment,
				headingTag,
				icon,
				noticeDismiss,
				cookies,
				close_cookie_days,
			} = attributes;

			let image_icon_html = '';

			if ( noticeDismiss ) {
				image_icon_html = <span className="uagb-notice-dismiss">{ renderSVG( icon ) }</span>;
			}

			var active = '';
			if ( true === cookies ) {
				active = 'uagb-notice__active';
			}
			return (
				<div
					className={ classnames(
						className,
						'uagb-inline_notice__outer-wrap',
						`${ noticeDismiss }`,
						`uagb-inline_notice__align-${ noticeAlignment }`,
						`uagb-block-${ block_id }`,
						`${ active }`
					) }
				>
					{ image_icon_html }
					<RichText.Content value={ noticeTitle } tagName={ headingTag } className="uagb-notice-title" />
					<RichText.Content value={ noticeContent } tagName="div" className="uagb-notice-text" />
				</div>
			);
		},
	},
	{
		attributes: attributesV2_10_3,
		save: newSaveV2_10_3,
	},
	{
		attributes: attributesV2_12_2,
		save: newSaveV2_12_2,
	}
];

export default deprecated;
