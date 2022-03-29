/**
 * BLOCK: Marketing button - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes, className } = props;

	const {
		block_id,
		align,
		textAlign,
		iconPosition,
		icon,
		heading,
		prefix,
		link,
		linkTarget,
		titleTag,
	} = attributes;

	const target = linkTarget ? '_blank' : '';

	const iconHTML = (
		<>
			{ '' !== icon && (
				renderSVG( icon )
			) }
		</>
	);
	const titleHTML = (
		<>
			<RichText.Content
				value={ heading }
				tagName={ titleTag }
				className="uagb-marketing-btn__title"
			/>
		</>
	);

	return (
		<div
			className={ classnames(
				className,
				`uagb-marketing-btn__align-${ align }`,
				`uagb-marketing-btn__align-text-${ textAlign }`,
				`uagb-marketing-btn__icon-${ iconPosition }`,
				`uagb-block-${ block_id }`
			) }
		>
				<a
					href={ link }
					className="uagb-marketing-btn__link wp-block-button__link"
					target={ target }
					rel="noopener noreferrer"
				>
						{ 'before' === iconPosition &&
							<>
							{ iconHTML }
							{ titleHTML }
							</>
						}
						{ 'after' === iconPosition &&
							<>
							{ titleHTML }
							{ iconHTML }
							</>
						}
						<RichText.Content
							value={ prefix }
							tagName="p"
							className="uagb-marketing-btn__prefix"
						/>
				</a>
		</div>
	);
}
