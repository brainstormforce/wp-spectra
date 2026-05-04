import { Text } from '@bsf/force-ui';

/**
 * List Component
 *
 * Renders a bulleted list of items.
 *
 * @param {Array} items - Array of list items (strings)
 */
const List = ( { items } ) => {
	return (
		<ul className="list-disc ml-8">
			{ items.map( ( item, index ) => (
				<li key={ index } className="my-0.5">
					<Text size={ 14 } color="secondary">
						{ item }
					</Text>
				</li>
			) ) }
		</ul>
	);
};

export default List;
