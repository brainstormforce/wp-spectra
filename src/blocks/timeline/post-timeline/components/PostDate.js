import { dateI18n, format } from '@wordpress/date';
import React from 'react';
const PostDate = ( props ) => {
	const { post, attributes, dateClass } = props;

	return (
		<>
			<time
				dateTime={ format( 'c', post.date_gmt ) }
				className={ dateClass }
				style={ {
					color: attributes.dateColor,
				} }
			>
				{ attributes.displayPostDate && post.date_gmt && (
					dateI18n( attributes.dateFormat, post.date_gmt )
				) }
			</time>
		</>
	);
};

export default React.memo( PostDate );
