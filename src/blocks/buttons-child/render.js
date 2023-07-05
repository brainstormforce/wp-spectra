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
	props = props.parentProps;

	const { attributes, setAttributes, deviceType, context } = props;

	const {
		className,
		icon,
		iconPosition,
		removeText,
		noFollow,
		showIcon,
	} = attributes;

	let { label } = attributes;

	// Check if this has dynamic content.
	if ( label && -1 !== label.indexOf( '<span data-spectra-dc-field="' ) ) {
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
					allowedFormats={ ['uagb/dynamic-content'] } // Removed the WP default link/bold/italic from the toolbar for button.
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
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				'wp-block-button'
			) }
		>
			<div className="uagb-button__wrapper">
				<div
					className={ classnames(
						'uagb-buttons-repeater',
						'wp-block-button__link'
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
