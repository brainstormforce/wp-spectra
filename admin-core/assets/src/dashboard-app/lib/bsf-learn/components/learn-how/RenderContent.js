import Button from './Button';
import Checklist from './Checklist';
import Image from './Image';
import Link from './Link';
import List from './List';
import Paragraph from './Paragraph';
import Video from './Video';

/**
 * RenderContent Component
 *
 * Dynamically renders different content types based on item type.
 * Supports: video, image, link, heading, paragraph/text, list, checklist, button.
 *
 * @param {Array} items - Array of content items to render
 * @param {string} items[].type - Content type (video|image|link|heading|paragraph|text|list|checklist|button)
 * @param {Object} items[].data - Data object for the content type
 * @param {string} items[].text - Text content for paragraph/heading types
 */
const RenderContent = ( { items } ) => {
	// Ensure items is always an array
	if ( ! Array.isArray( items ) ) {
		items = [ items ];
	}

	return items?.map( ( item, index ) => {
		switch ( item.type ) {
			case 'video':
				return (
					<Video
						key={ index }
						url={ item.data.url }
						title={ item.data.title }
					/>
				);
			case 'image':
				return (
					<Image
						key={ index }
						src={ item.data.src }
						alt={ item.data.alt }
					/>
				);
			case 'link':
				return (
					<Link
						key={ index }
						prefix={ item.prefix }
						text={ item.data.text }
						url={ item.data.url }
						target={ item.data.target }
					/>
				);
			case 'heading':
				return <Paragraph key={ index } text={ item.text } isHeading />;
			case 'paragraph':
			case 'text':
				return <Paragraph key={ index } text={ item.text } />;
			case 'list':
				return <List key={ index } items={ item.data.items } />;
			case 'checklist':
				return <Checklist key={ index } items={ item.data.items } />;
			case 'button':
				return (
					<Button
						key={ index }
						onClick={ () =>
							window.open( item.data.url, item.data.target )
						}
						{ ...item.data }
					/>
				);
			default:
				return null;
		}
	} );
};

export default RenderContent;
