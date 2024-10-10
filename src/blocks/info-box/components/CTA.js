import { RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';

const InfoBoxCta = ( props ) => {
	const { attributes, setAttributes = 'not_set' } = props;

	const inheritAstraSecondary = attributes.inheritFromTheme && 'secondary' === attributes.ctaButtonType;
	const buttonTypeClass = inheritAstraSecondary ? 'ast-outline-button' : 'wp-block-button__link';
	//border-width is added to revert the border related styles by default.
	const borderStyle = inheritAstraSecondary ? { borderWidth: 'revert-layer' } : {};

	const ctaBtnClass = `uagb-infobox-cta-link ${buttonTypeClass}`;

	const CustomTag = inheritAstraSecondary ? 'div' : 'a';

	let target = '_self';
	const rel = attributes.relString;
	if ( attributes.ctaTarget ) {
		target = '_blank';
	}

	let ctaIconOutput = '';
	if ( attributes.showCtaIcon && attributes.ctaIcon !== '' ) {
		ctaIconOutput = renderSVG( attributes.ctaIcon, setAttributes );
	}
	const ctaTextOutput = (
		<>
		{ attributes.ctaIconPosition === 'before' && ctaIconOutput }
			< RichText
				tagName = "span"
				placeholder = { __( 'Read More', 'ultimate-addons-for-gutenberg' ) }
				value = { attributes.ctaText.replace( /<(?!br\s*V?)[^>]+>/g, '' ) }
				className = "uagb-inline-editing"
				multiline = { false }
				onChange = { ( value ) => {
				setAttributes( { ctaText: value } );
			} }
			allowedFormats = { [] } // Removed the WP default link/bold/italic from the toolbar for button.
			/>
		{ attributes.ctaIconPosition === 'after' && ctaIconOutput }
		</>
	);

	if ( setAttributes !== 'not_set' ) {
		return (
			<div className="uagb-ifb-cta">
				{ ( attributes.ctaType === 'text' && attributes.inheritFromTheme ) && (
					<div className={ classnames( 'uagb-ifb-button-wrapper', 'uagb-ifb-button-type-text', 'wp-block-button' ) }>
						<CustomTag // eslint-disable-line jsx-a11y/anchor-is-valid
							target={ target }
							className={ classnames( ctaBtnClass  ) }
							rel={ rel }
							style={ borderStyle }
						>
							{ ctaTextOutput }
						</CustomTag>
					</div>
				) }
				{ ( attributes.ctaType === 'text' && ! attributes.inheritFromTheme ) && (
					<a // eslint-disable-line jsx-a11y/anchor-is-valid
						target={target}
						className={ classnames( 'uagb-infobox-cta-link' ) }
						rel={rel}
					>
					{ ctaTextOutput }
					</a>
				) }
				{ attributes.ctaType === 'button' && (
					<div className={ classnames( 'uagb-ifb-button-wrapper', 'wp-block-button' ) }>
						<CustomTag // eslint-disable-line jsx-a11y/anchor-is-valid
							className={ ctaBtnClass }
							target={ target }
							rel={ rel }
							style={ borderStyle }
						>
							{ ctaTextOutput }
						</CustomTag>
					</div>
				) }
			</div>
		);
	}
	const ctaTextOutputFrontend = (
		<>
		{ attributes.ctaIconPosition === 'before' && ctaIconOutput }
			< RichText.Content
				tagName = "span"
				value = { attributes.ctaText.replace( /<(?!br\s*V?)[^>]+>/g, '' ) }
				className = "uagb-inline-editing"
			/>
		{ attributes.ctaIconPosition === 'after' && ctaIconOutput }
		</>
	);
	return (
		<>
			<div className={classnames( 'uagb-ifb-button-wrapper', ( attributes.ctaType === 'text' && attributes.inheritFromTheme ) ? 'uagb-ifb-button-type-text' : '', 'wp-block-button' ) }>
			{ ( attributes.ctaType === 'text' && attributes.inheritFromTheme ) && (
				<>
					<a
						href={ attributes.ctaLink || '#' }
						target={ target }
						onClick={
							( '' === attributes.ctaLink || '#' === attributes.ctaLink ) && ( ! attributes?.dynamicContent?.ctaLink?.enable ) ? 'return false;' : 'return true;'
						}
						className={ ctaBtnClass }
						rel={ rel }
						style={ borderStyle }
					>
						{ ctaTextOutputFrontend }
					</a>
					</>
				) }
				{ ( attributes.ctaType === 'text' && ! attributes.inheritFromTheme ) && (
					<>
						<a
							href={attributes.ctaLink || '#'}
							target={target}
							onClick={
								( '' === attributes.ctaLink || '#' === attributes.ctaLink ) && ( !attributes?.dynamicContent?.ctaLink?.enable ) ? 'return false;' : 'return true;'
							}
							className={'uagb-infobox-cta-link'}
							rel={rel}
						>
							{ ctaTextOutputFrontend }
						</a>
					</>
				) }
				{ attributes.ctaType === 'button' && (
					<>
					<a
						href={ attributes.ctaLink || '#' }
						className={ ctaBtnClass }
						target={ target }
						rel={ rel }
						style={ borderStyle }
						onClick={
							( '' === attributes.ctaLink || '#' === attributes.ctaLink ) && ( ! attributes?.dynamicContent?.ctaLink?.enable ) ? 'return false;' : 'return true;'
						}
					>
						{ ctaTextOutputFrontend }
					</a>
				</>
				) }
		</div >
		</>
	);
};
export default InfoBoxCta;
