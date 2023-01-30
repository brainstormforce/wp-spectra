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

	let ctaIconOutput = '';
	if ( attributes.showIcon && attributes.ctaIcon !== '' ) {
		if ( setAttributes !== 'not_set' ) {
			ctaIconOutput = renderSVG( attributes.ctaIcon, setAttributes );
		} else {
			ctaIconOutput = renderSVG( attributes.ctaIcon );
		}
	}

	let link = '/';
	let preventDefaultFunc = ( e ) => {  // Disables click events for link in editor.
		e.preventDefault();
	}
	if ( setAttributes === 'not_set' ) {
		link = attributes.ctaLink;
		preventDefaultFunc = false;  // Ensures click events for links aren't disabled for frontend.
	}

	if ( setAttributes !== 'not_set' ) {
		return (
			<>
				{ ( attributes.ctaType === 'button' ||
					attributes.ctaType === 'text' ) && (
					<a
						href={ link }
						className={ classnames(
							'uagb-cta__button-link-wrapper',
							'button' === attributes.ctaType ? 'wp-block-button__link' : ''
						) }
						target={ target }
						rel={ rel }
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
					</a>
				) }
			</>
		)
	}

	return (
		<>
			{ ( attributes.ctaType === 'button' ||
				attributes.ctaType === 'text' ) && (
				<a
					href={ link }
					className={ classnames(
						'uagb-cta__button-link-wrapper',
						'button' === attributes.ctaType ? 'wp-block-button__link' : ''
					) }
					target={ target }
					rel={ rel }
					onClick={ preventDefaultFunc }
				>
					{ attributes.ctaIconPosition === 'before' && ctaIconOutput }
					<RichText.Content
						value={ attributes.ctaText.replace( /<(?!br\s*V?)[^>]+>/g, '' ) }
					/>
					{ attributes.ctaIconPosition === 'after' && ctaIconOutput }
				</a>
			) }
		</>
	);
};

export default CTA;
