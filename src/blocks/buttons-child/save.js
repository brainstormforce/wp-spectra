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
		target,
		link,
		label,
		icon,
		iconPosition,
		removeText,
		buttonSize
	} = attributes;

	const btnText = () => {
		if( removeText ){
			return <RichText.Content
						value={ label }
						tagName="div"
						className="uagb-button__link"
					/>
		} else {
			return '';
		}
	}
	const iconHtml = ( curr_position ) => {
		if ( '' !== icon && curr_position === iconPosition ) {
			return (
				<span
					className={ classnames(
						'uagb-button__icon',
						`uagb-button__icon-position-${ iconPosition }`
					) }
				>
					{ renderSVG( icon ) }
				</span>
			);
		}
		return null;
	};

	return (
		<div
			className={ classnames(
				className,
				'uagb-buttons__outer-wrap',
				`uagb-block-${ block_id }`,
				'wp-block-button',
				`uagb-btn__${buttonSize}-btn`
			) }
		>
			<div className="uagb-button__wrapper">
				<a
					className={ classnames(
						'uagb-buttons-repeater',
						'wp-block-button__link'
					) }
					href={ link }
					rel="noopener noreferrer"
					target={ target }
				>
					{ iconHtml( 'before' ) }
					{ btnText() }
					{ iconHtml( 'after' ) }
				</a>
			</div>
		</div>
	);
}
