import React from 'react';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

export default function Save( props ) {
	const {
		block_id,
		triggerText
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
				className="uagb-modal-text"
			/>
		</div>
	);
}
