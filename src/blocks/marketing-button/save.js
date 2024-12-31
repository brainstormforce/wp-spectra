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
		showDescription,
		inheritFromTheme,
		buttonType
	} = attributes;

	const target = linkTarget ? '_blank' : '';

	const inheritAstraSecondary = inheritFromTheme && 'secondary' === buttonType;
	const buttonTypeClass = inheritAstraSecondary ? 'ast-outline-button' : 'wp-block-button__link';
	//border-width is added to revert the border related styles by default.
	const borderStyle = inheritAstraSecondary ? { borderWidth: 'revert-layer' } : {};
    
	const marketingBtnClass = `uagb-marketing-btn__link ${buttonTypeClass}`;


	const iconHTML = <>{ '' !== icon && renderSVG( icon ) }</>;
	const titleHTML = (
		<>
			<RichText.Content
				value={ heading.replace( /<(?!br\s*V?)[^>]+>/g, '' ) }
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
				`uagb-block-${ block_id }`,
				'wp-block-button'
			) }
		>
			<a
				href={ link }
				className={ marketingBtnClass }
				target={ target }
				rel="noopener noreferrer"
				style={ borderStyle }
			>
				{ 'before' === iconPosition && (
					<>
						{ iconHTML }
						{ titleHTML }
					</>
				) }
				{ 'after' === iconPosition && (
					<>
						{ titleHTML }
						{ iconHTML }
					</>
				) }
				{ showDescription && (
					<RichText.Content value={ prefix } tagName="p" className="uagb-marketing-btn__prefix" />
				) }
			</a>
		</div>
	);
}
