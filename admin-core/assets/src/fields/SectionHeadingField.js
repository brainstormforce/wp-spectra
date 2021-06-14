import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './SectionHeadingField.scss';

function SectionHeadingField( props ) {
	const { label, desc } = props;

	return (
		<div className="uag-field uag-section-heading-field">
			{ label && (
				<div className="uag-field__data--label">
					<label>{ label }</label>
				</div>
			) }

			{ desc && (
				<div className="uag-field__desc">
					{ ReactHtmlParser( desc ) }
				</div>
			) }
		</div>
	);
}

export default SectionHeadingField;
