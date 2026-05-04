import { Text } from '@bsf/force-ui';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Checklist Component
 *
 * Renders a numbered checklist of items with step labels.
 *
 * @param {Array} items - Array of checklist items
 * @param {string} items[].text - Item text
 */
const Checklist = ( { items } ) => {
	return (
		<div className="space-y-2">
			{ items.map( ( item, index ) => (
				<div key={ index } className="flex items-start gap-2">
					<Text
						size={ 14 }
						weight={ 600 }
						color="primary"
						className="flex-shrink-0"
					>
						{ sprintf(
							// translators: %s is the step number.
							__( 'Step %d:', 'ultimate-addons-for-gutenberg' ),
							index + 1
						) }
					</Text>
					<Text size={ 14 } color="secondary">
						{ item.text }
					</Text>
				</div>
			) ) }
		</div>
	);
};

export default Checklist;
