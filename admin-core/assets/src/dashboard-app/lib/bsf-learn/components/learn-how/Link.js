import { Text } from '@bsf/force-ui';

/**
 * Link Component
 *
 * Renders a link with optional prefix text.
 *
 * @param {string} prefix - Optional prefix text before the link
 * @param {string} text - Link text (defaults to url if not provided)
 * @param {string} url - Link URL
 * @param {string} target - Link target (defaults to '_blank')
 */
const Link = ( { prefix, text, url, target = '_blank' } ) => (
	<div className="text-sm flex gap-1">
		{ prefix && <span>{ prefix }</span> }
		<Text
			as="a"
			href={ url }
			target={ target }
			className="text-gs-primary underline"
		>
			{ text || url }
		</Text>
	</div>
);

export default Link;
