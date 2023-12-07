/**
 * BLOCK: Buttons - Save Block
 */

import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes, className } = props;

	const {
		block_id,
		opensInNewTab,
		link,
		label,
		icon,
		iconPosition,
		removeText,
		noFollow,
		showIcon,
		dynamicContent,
		buttonType,
		inheritFromTheme,
	} = attributes;

	const inheritAstraSecondary = inheritFromTheme && 'secondary' === buttonType;
	const buttonTypeClass = inheritAstraSecondary ? 'ast-outline-button' : 'wp-block-button__link';
	//border-width is added to revert the border related styles by default.
	const borderStyle = inheritAstraSecondary ? { borderWidth: 'revert-layer' } : {};

	const btnText = () => {
		if ( ! removeText ) {
			return (
				<RichText.Content
					value={ label }
					tagName="div"
					className="uagb-button__link"
				/>
			);
		}
		return '';
	};
	const iconHtml = ( curr_position ) => {
		if ( showIcon && '' !== icon && curr_position === iconPosition ) {
			return (
				<span className={ classnames( 'uagb-button__icon', `uagb-button__icon-position-${ iconPosition }` ) }>
					{ renderSVG( icon ) }
				</span>
			);
		}
		return null;
	};
	const openNewWindow = opensInNewTab ? '_blank' : '_self';
	
	return (
		<div
			className={ classnames(
				className,
				'uagb-buttons__outer-wrap',
				`uagb-block-${ block_id }`,
				'wp-block-button'
			) }
		>
			<div className="uagb-button__wrapper">
				<a // eslint-disable-line jsx-a11y/anchor-is-valid
					className={ classnames(
						'uagb-buttons-repeater',
						`${ buttonTypeClass }`,
					) }
					style={ borderStyle }
					href={ ( '' === link || dynamicContent?.link?.enable ) ? '#' : link }
					onClick={ ( '' === link || '#' === link ) && ( ! dynamicContent?.link?.enable ) ? 'return false;' : 'return true;' }
					rel={ noFollow ? 'nofollow noopener' : 'follow noopener' }
					target={ openNewWindow }
				>
					{ iconHtml( 'before' ) }
					{ btnText() }
					{ iconHtml( 'after' ) }
				</a>
			</div>
		</div>
	);
}
