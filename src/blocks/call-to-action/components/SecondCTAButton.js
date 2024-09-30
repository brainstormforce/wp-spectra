import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import renderSVG from '@Controls/renderIcon';

const SecondCTAButton = ( props ) => {
	const { attributes, setAttributes } = props;
	const { secRelString } = props.attributes;

	let target = '_self';
	if ( attributes.secondCtaTarget ) {
		target = '_blank';
	}

	
	const inheritAstraSecondary = attributes.secInheritFromTheme && 'secondary' === attributes.secCtaButtonType;
	const buttonTypeClass = inheritAstraSecondary ? 'ast-outline-button' : 'wp-block-button__link';
	//border-width is added to revert the border related styles by default.
	const borderStyle = inheritAstraSecondary ? { borderWidth: 'revert-layer' } : {};

	const CustomTag = inheritAstraSecondary ? 'div' : 'a';

	let secondCtaIconOutput = '';
	if ( attributes.showSecondIcon && attributes.secondCtaIcon !== '' ) {
		if ( setAttributes !== 'not_set' ) {
			secondCtaIconOutput = renderSVG( attributes.secondCtaIcon, setAttributes );
		} else {
			secondCtaIconOutput = renderSVG( attributes.secondCtaIcon );
		}
	}

	let link = '/';
	let preventDefaultFunc = ( e ) => {
		// Disables click events for link in editor.
		e.preventDefault();
	};
	if ( setAttributes === 'not_set' ) {
		link = attributes.secondCtaLink;
		preventDefaultFunc = false; // Ensures click events for links aren't disabled for frontend.
	}

	if ( setAttributes !== 'not_set' ) {
		return (
			<>
				<CustomTag
					href={ link }
					className={ classnames( 'uagb-cta-second__button', buttonTypeClass ) }
					target={ target }
					rel={ secRelString }
					style={ borderStyle }
					onClick={ preventDefaultFunc }
				>
					{ attributes.secondCtaIconPosition === 'before' && secondCtaIconOutput }
					<RichText
						value={ attributes.secondCtaLabel.replace( /<(?!br\s*V?)[^>]+>/g, '' ) }
						onChange={ ( value ) => {
							setAttributes( { secondCtaLabel: value } );
						} }
						allowedFormats={ [] } // Removed the WP default link/bold/italic from the toolbar for button.
					/>
					{ attributes.secondCtaIconPosition === 'after' && secondCtaIconOutput }
				</CustomTag>
			</>
		);
	}

	return (
		<>
			<a
				href={ link }
				className={ classnames( 'uagb-cta-second__button', buttonTypeClass ) }
				target={ target }
				rel={ secRelString }
				style={ borderStyle }
				onClick={ preventDefaultFunc }
			>
				{ attributes.secondCtaIconPosition === 'before' && secondCtaIconOutput }
				<RichText.Content value={ attributes.secondCtaLabel.replace( /<(?!br\s*V?)[^>]+>/g, '' ) } />
				{ /* { attributes.secondCtaLabel } */ }
				{ attributes.secondCtaIconPosition === 'after' && secondCtaIconOutput }
			</a>
		</>
	);
};

export default SecondCTAButton;
