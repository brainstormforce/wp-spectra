import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './DocField.scss';

function DocField( props ) {
	const { content } = props;

	return (
		<div className="uag-field uag-doc-field">
			{ content && (
				<div className="uag-field__doc-content">
					{ ReactHtmlParser( content ) }
				</div>
			) }
		</div>
	);
}

export default DocField;
