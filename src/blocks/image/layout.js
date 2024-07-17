import { useEffect, useRef } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Layout( { attributes, isSelected, setAttributes, captionRef } ) {
	const {
		caption,
		enableCaption,
		heading,
		headingTag,
		layout,
		overlayContentPosition,
		seperatorStyle,
		seperatorPosition,
	} = attributes;
	const headingRef = useRef();
	useEffect( () => {
		headingRef.current = heading;
	}, [ caption ] );

	const imageHeading = (
		<>
			{ ( ! RichText.isEmpty( heading ) || isSelected ) && (
				<RichText
					ref={ headingRef }
					tagName={ headingTag }
					className="uagb-image-heading"
					aria-label={ __( 'Image overlay heading text', 'ultimate-addons-for-gutenberg' ) }
					placeholder={ __( 'Add Heading', 'ultimate-addons-for-gutenberg' ) }
					value={ heading }
					onChange={ ( value ) => setAttributes( { heading: value } ) }
				/>
			) }
		</>
	);

	const imageCaption = (
		<>
			{ ( ! RichText.isEmpty( caption ) || isSelected ) && (
				<RichText
					ref={ captionRef }
					tagName="figcaption"
					className="uagb-image-caption"
					aria-label={ __( 'Image caption text', 'ultimate-addons-for-gutenberg' ) }
					placeholder={ __( 'Add caption', 'ultimate-addons-for-gutenberg' ) }
					value={ caption }
					onChange={ ( value ) => setAttributes( { caption: value } ) }
				/>
			) }
		</>
	);

	const separator = 'none' !== seperatorStyle && <div className="uagb-image-separator"></div>;

	return (
		<>
			{ layout === 'overlay' ? (
				<>
					<div className="wp-block-uagb-image--layout-overlay__color-wrapper"></div>
					<div
						className={ `wp-block-uagb-image--layout-overlay__inner ${ overlayContentPosition.replace(
							' ',
							'-'
						) }` }
					>
						{ 'before_title' === seperatorPosition && separator }
						{ imageHeading }
						{ 'after_title' === seperatorPosition && separator }
						{ imageCaption }
						{ 'after_sub_title' === seperatorPosition && separator }
					</div>
				</>
			) : (
				<>{ enableCaption && imageCaption }</>
			) }
		</>
	);
}
