/**
 * BLOCK: Buttons Child - Edit Class
 */

// Import classes
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { memo } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

const Render = ( props ) => {

	const { attributes, setAttributes, deviceType, context, labelHasDynamicContent } = props;

	const {
		className,
		icon,
		iconPosition,
		removeText,
		noFollow,
		showIcon,
		block_id,
		buttonType,
		inheritFromTheme,
	} = attributes;

	let { label } = attributes;

	const inheritAstraSecondary = inheritFromTheme && 'secondary' === buttonType;
	const buttonTypeClass = inheritAstraSecondary ? 'ast-outline-button' : 'wp-block-button__link';
	//border-width is added to revert the border related styles by default.
	const borderStyle = inheritAstraSecondary ? { borderWidth: 'revert-layer' } : {};

	// Check if this has dynamic content.
	if ( labelHasDynamicContent ) {
		const renderedMarkup = applyFilters( `uag_render_text_loop_data`, label, context );
		if ( renderedMarkup !== '' ) {
			label = renderedMarkup;
		}
	}

	const iconHtml = ( curr_position ) => {
		if ( showIcon && '' !== icon && curr_position === iconPosition ) {
			return (
				<span className={ classnames( 'uagb-button__icon', `uagb-button__icon-position-${ iconPosition }` ) }>
					{ renderSVG( icon, setAttributes ) }
				</span>
			);
		}
		return null;
	};
	const btnAllowedFormats = uagb_blocks_info.spectra_pro_status ? ['uagb/dynamic-content'] : [];
	const btnText = () => {
		if ( ! removeText ) {
			return (
				<RichText
					placeholder={ __( 'Add text…', 'ultimate-addons-for-gutenberg' ) }
					value={ label }
					tagName="div"
					onChange={ ( value ) => {
						setAttributes( { label: value } );
					} }
					className="uagb-button__link"
					rel={ noFollow ? 'nofollow noopener' : 'follow noopener' }
					keepPlaceholderOnFocus
					allowedFormats={ btnAllowedFormats } // Removed the WP default link/bold/italic from the toolbar for button.
				/>
			);
		}
		return '';
	};

	return (
		<div
			className={ classnames(
				className,
				'uagb-buttons__outer-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`,
				'wp-block-button'
			) }
		>
			<div className="uagb-button__wrapper">
				<div
					className={ classnames(
						'uagb-buttons-repeater',
						`${ buttonTypeClass }`,
					) }
					style={ borderStyle }
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
