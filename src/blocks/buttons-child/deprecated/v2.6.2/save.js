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
		backgroundType,
		btnBorderStyle,
		background,
		color,
		showIcon,
	} = attributes;

	const btnText = () => {
		if ( ! removeText ) {
			return (
				<RichText.Content
					value={ label.replace( /<(?!br\s*V?)[^>]+>/g, '' ) }
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
	const hasBackground =
		background !== '' || backgroundType === 'transparent' || 'gradient' === backgroundType ? 'has-background' : '';

	return (
		<div
			className={ classnames(
				className,
				'uagb-buttons__outer-wrap',
				`uagb-block-${ block_id }`,
				'wp-block-button',
				btnBorderStyle !== 'none' && btnBorderStyle !== 'default' ? 'is-style-outline' : ''
			) }
		>
			<div className="uagb-button__wrapper">
				<a
					className={ classnames(
						'uagb-buttons-repeater',
						'wp-block-button__link',
						hasBackground,
						color !== '' ? 'has-text-color' : ''
					) }
					href={ '' === link || '#' === link ? '#' : link }
					onClick={ '' === link || '#' === link ? 'return false;' : 'return true;' }
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
