import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './DocField.scss';

function DocField( props ) {
	const { content } = props;

	return (
		<div className="wcf-field wcf-doc-field">
			{ content && (
				<div className="wcf-field__doc-content">
					{ ReactHtmlParser( content ) }
				</div>
			) }
		</div>
	);
}

export default DocField;
