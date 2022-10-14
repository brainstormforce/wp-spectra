import React from 'react';
import classnames from 'classnames';
import { RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Save( props ) {
	const {
		block_id,
		triggerText,
		previewModal
	} = props.attributes;

	return (
		<div
			className={ classnames(
				`uagb-block-${ block_id }`,
				'wp-block-modal'
			) }
		>
			<RichText.Content
				value={ triggerText }
				tagName="p"
				className={ classnames(
					'uagb-modal-text',
					previewModal
						? 'uagb-modal-trigger'
						: '',
				) }
			/>
			<div class="uagb-modal-popup">
				<div class="uagb-modal-popup-wrap">
					<div class="uagb-modal-popup-content">
						<InnerBlocks.Content />
					</div>
					<div class="uagb-modal-popup-close">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}