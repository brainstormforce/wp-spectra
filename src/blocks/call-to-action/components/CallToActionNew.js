import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import renderSVG from '@Controls/renderIcon';

const CTA = ( props ) => {
	const { attributes, setAttributes } = props;

	let target = '_self';
	const rel = 'noopener noreferrer';
	if ( attributes.ctaTarget ) {
		target = '_blank';
	}

	const inheritAstraSecondary = attributes.inheritFromTheme && 'secondary' === attributes.ctaButtonType;
	const buttonTypeClass = inheritAstraSecondary ? 'ast-outline-button' : 'wp-block-button__link';
	//border-width is added to revert the border related styles by default.
	const borderStyle = inheritAstraSecondary ? { borderWidth: 'revert-layer' } : {};

	const CustomTag = inheritAstraSecondary ? 'div' : 'a';

	let ctaIconOutput = '';
	if ( attributes.showIcon && attributes.ctaIcon !== '' ) {
		if ( setAttributes !== 'not_set' ) {
			ctaIconOutput = renderSVG( attributes.ctaIcon, setAttributes );
		} else {
			ctaIconOutput = renderSVG( attributes.ctaIcon );
		}
	}

	let link = '/';
	let preventDefaultFunc = ( e ) => {
		// Disables click events for link in editor.
		e.preventDefault();
	};
	if ( setAttributes === 'not_set' || attributes?.dynamicContent?.ctaLink?.enable ) {
		link = attributes.ctaLink || '#';
		preventDefaultFunc = false; // Ensures click events for links aren't disabled for frontend.
	}

	if ( setAttributes !== 'not_set' ) {
		return (
			<>
				{ ( attributes.ctaType === 'button' || attributes.ctaType === 'text' ) && (
					<CustomTag
						href={ link }
						className={ classnames(
							'uagb-cta__button-link-wrapper',
							'button' === attributes.ctaType ? buttonTypeClass : ''
						) }
						target={ target }
						rel={ rel }
						style={ borderStyle }
						onClick={ preventDefaultFunc }
					>
						{ attributes.ctaIconPosition === 'before' && ctaIconOutput }
						<RichText
							value={ attributes.ctaText.replace( /<(?!br\s*V?)[^>]+>/g, '' ) }
							onChange={ ( value ) => {
								setAttributes( { ctaText: value } );
							} }
							allowedFormats={ [] } // Removed the WP default link/bold/italic from the toolbar for button.
						/>
						{ attributes.ctaIconPosition === 'after' && ctaIconOutput }
					</CustomTag>
				) }
			</>
		);
	}

	return (
		<>
			{ ( attributes.ctaType === 'button' || attributes.ctaType === 'text' ) && (
				<a
					href={ link }
					className={ classnames(
						'uagb-cta__button-link-wrapper',
						'button' === attributes.ctaType ? buttonTypeClass : ''
					) }
					target={ target }
					rel={ rel }
					style={ borderStyle }
					onClick={ preventDefaultFunc }
				>
					{ attributes.ctaIconPosition === 'before' && ctaIconOutput }
					<RichText.Content value={ attributes.ctaText.replace( /<(?!br\s*V?)[^>]+>/g, '' ) } />
					{ attributes.ctaIconPosition === 'after' && ctaIconOutput }
				</a>
			) }
		</>
	);
};

export default CTA;
