/**
 * BLOCK: Buttons Child - Edit Class
 */

// Import classes
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { memo } from '@wordpress/element';

import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const deviceType = useDeviceType();

	const {
		className,
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

	const iconHtml = ( curr_position ) => {
		if ( showIcon && '' !== icon && curr_position === iconPosition ) {
			return (
				<span
					className={ classnames(
						'uagb-button__icon',
						`uagb-button__icon-position-${ iconPosition }`
					) }
				>
					{ renderSVG( icon, setAttributes ) }
				</span>
			);
		}
		return null;
	};
	const btnText = () => {
		if( ! removeText ){
			return <RichText
						placeholder={ __( 'Add text…' ) }
						value={ label.replace( /(<([^>]+)>)/ig, '' ) }
						tagName="div"
						onChange={ ( value ) => {
							setAttributes( { label: value } );
						} }
						className="uagb-button__link"
						rel= { noFollow ? 'nofollow noopener' : 'follow noopener' }
						keepPlaceholderOnFocus
						allowedFormats={ [] } // Removed the WP default link/bold/italic from the toolbar for button.
					/>
		}
			return '';

	}

	const hasBackground = background !== '' || backgroundType === 'transparent' || 'gradient' === backgroundType  ? 'has-background' : '';

	return (
		<div
			className={ classnames(
				className,
				'uagb-buttons__outer-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				'wp-block-button',
				btnBorderStyle !== 'none' && btnBorderStyle !== 'default' ? 'is-style-outline' : '',
			) }
		>
			<div className="uagb-button__wrapper">
				<div
					className={ classnames(
						'uagb-buttons-repeater',
						'wp-block-button__link',
						hasBackground,
						color !== '' ? 'has-text-color' : '',
					) }
				>
					{ iconHtml( 'before' ) }
					{ btnText() }
					{ iconHtml( 'after' ) }
				</div>
			</div>
		</div>
	);
};

export default memo( Render );
