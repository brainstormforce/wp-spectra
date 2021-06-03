import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './SectionHeadingField.scss';

function SectionHeadingField( props ) {
	const { label, desc } = props;

	return (
		<div className="wcf-field wcf-section-heading-field">
			{ label && (
				<div class="wcf-field__data--label">
					<label>{ label }</label>
				</div>
			) }

			{ desc && (
				<div className="wcf-field__desc">
					{ ReactHtmlParser( desc ) }
				</div>
			) }
		</div>
	);
}

export default SectionHeadingField;
