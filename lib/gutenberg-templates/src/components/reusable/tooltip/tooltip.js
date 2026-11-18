import { Fragment } from '@wordpress/element';
import Tippy from '@tippyjs/react';

const Tooltip = ( {
	content,
	children,
	placement = 'bottom',
	appendTo,
	maxWidth,
} ) => {
	return !! content ? (
		<Tippy
			content={ content }
			className="!bg-tooltip"
			trigger="mouseenter"
			hideOnClick={ true }
			placement={ placement }
			{ ...( appendTo ? { appendTo } : {} ) }
			{ ...( maxWidth ? { maxWidth } : {} ) }
			popperOptions={ {
				modifiers: [
					{
						name: 'preventOverflow',
						options: {
							boundary: document.querySelector(
								'#ast-block-templates-modal'
							),
						},
					},
				],
			} }
			arrow
		>
			<div className="inline-flex">{ children }</div>
		</Tippy>
	) : (
		<Fragment>{ children }</Fragment>
	);
};

export default Tooltip;
