import { __ } from '@wordpress/i18n';

import './back-to-templates.scss';

const BackToTemplates = ({ afterClick }) => {
	return (
		<span>
			<span
				className="back-to-templates"
				onClick={(event) => {
					if (afterClick) {
						afterClick(event);
					}
				}}
			>
				{__('Back to Templates', 'gutenberg-templates')}
			</span>
		</span>
	);
};

export default BackToTemplates;
