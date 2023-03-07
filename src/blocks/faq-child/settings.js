import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { memo } from '@wordpress/element';

const Settings = () => {
	const faqChildControls = () => {
		return (
			<p className="uagb-settings-notice">
				{ __(
					'For the styling options please select the Parent Block.'
				) }
			</p>
		);
	};

	return <InspectorControls>{ faqChildControls }</InspectorControls>;
};

export default memo( Settings );
