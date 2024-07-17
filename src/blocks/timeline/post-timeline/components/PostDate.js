import { dateI18n, format } from '@wordpress/date';
import { memo } from '@wordpress/element';
const PostDate = ( props ) => {
	const { post, attributes, dateClass } = props;

	return (
		<>
			<div
				dateTime={ format( 'c', post.date_gmt ) }
				className={ dateClass }
				style={ {
					color: attributes.dateColor,
				} }
			>
				{ attributes.displayPostDate && post.date_gmt && dateI18n( attributes.dateFormat, post.date_gmt ) }
			</div>
		</>
	);
};

export default memo( PostDate );
