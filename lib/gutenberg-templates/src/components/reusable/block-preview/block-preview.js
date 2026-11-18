import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { STORE_KEY } from '../../../store';
import {
	memo,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from '@wordpress/element';
import { classNames, decodeHTMLEntities } from '../../../utils/helpers';
import { shouldSkipReplacement } from '../single-block/utils';
import easingFunctions from '../../../utils/easing-functions';

const { spectra_common_styles, is_rtl } = ast_block_template_vars;
const visibility = {
	hidden: 'hidden',
	visible: 'visible',
};

const BlockPreview = ( {
	item,
	content,
	stylesheet,
	astraCustomizer,
	globalStylesheet,
	colorPalette,
	dynamicContent,
	selectedImages,
	disableAi,
	togglePopup,
	email,
	phone,
	address,
	onClickBlock,
	className = '',
	fullPreview = false,
	disableAutoScroll = false,
} ) => {
	const thumbnailRef = useRef( null );
	const thumbnailContainerRef = useRef( null );
	const thumbnail_image_url = item[ 'thumbnail-image-url' ] || '';
	const featured_image_url = item[ 'featured-image-url' ] || '';

	let imageCounter = 0;
	let containerImageCounter = 0;

	const [ imageThumbnailURL, setThumbnailImageURL ] = useState(
		`${ ast_block_template_vars.uri }dist/placeholder_200_200.png`
	);
	const [ imageFeaturedlURL, setFeaturedImageURL ] = useState(
		`${ ast_block_template_vars.uri }dist/placeholder_200_200.png`
	);

	const replaceImages = ( images, previewImages ) => {
		if ( disableAi ) {
			return;
		}

		if ( Object.keys( dynamicContent ).length === 0 || ! dynamicContent ) {
			return;
		}

		if ( ! previewImages?.length ) {
			return;
		}

		images?.forEach( function ( image ) {
			if ( shouldSkipReplacement( image.src ) ) {
				return;
			}

			image.onload = () => {
				// Skip if the image is already replaced.
				const imageSrc = image.getAttribute( 'src' ) || '';
				if (
					imageSrc.includes( 'unsplash' ) ||
					imageSrc.includes( 'pexels' ) ||
					imageSrc.includes( 'pixabay' )
				) {
					updateVisibility( image, visibility.visible );
					return;
				}

				const imageUrl = previewImages[ imageCounter ];

				if ( undefined === imageUrl ) {
					updateVisibility( image, visibility.visible );
					return;
				}

				if (
					! (
						imageUrl.url.includes( 'unsplash' ) ||
						imageUrl.url.includes( 'pexels' ) ||
						imageUrl.url.includes( 'pixabay' )
					)
				) {
					updateVisibility( image, visibility.visible );
					return;
				}

				imageCounter++;

				if ( undefined === previewImages[ imageCounter ] ) {
					imageCounter = 0;
				}

				if ( 'PICTURE' === image.parentNode.nodeName ) {
					const sourceElements =
						image.parentNode.querySelectorAll( 'source' );
					sourceElements.forEach( ( source ) => {
						source.setAttribute( 'srcset', imageUrl.optimized_url );
					} );
					const imageElement =
						image.parentNode.querySelector( 'img' );
					imageElement.setAttribute( 'src', imageUrl.optimized_url );
				} else {
					const newImage = document.createElement( 'img' );
					newImage.src = imageUrl.optimized_url;
					image.parentNode.replaceChild( newImage, image );
				}

				updateVisibility( image, visibility.visible );
			};
			image.onerror = () => {
				updateVisibility( image, visibility.visible );
			};
		} );
	};

	const replaceContactDetails = ( contentStr ) => {
		const emailSrc = 'contact@example.com';
		const phoneSrc = '202-555-0188';
		const addressSrc = '2360 Hood Avenue, San Diego, CA, 92123';
		if ( email ) {
			contentStr = contentStr.replace( emailSrc, email );
		}
		if ( phone ) {
			contentStr = contentStr.replace( phoneSrc, phone );
		}
		if ( address ) {
			contentStr = contentStr.replace( addressSrc, address );
		}
		return contentStr;
	};

	const replaceContainerImages = ( styleContent, images = [] ) => {
		if ( disableAi ) {
			return styleContent;
		}

		if ( Object.keys( dynamicContent ).length === 0 || ! dynamicContent ) {
			return styleContent;
		}

		if ( images && images.length === 0 ) {
			return styleContent;
		}
		const backgroundImageRegex =
			/background-image\s*:\s*url\(['"]?([^'")]+)['"]?\)/g;

		const newStyleContent = styleContent.replace(
			backgroundImageRegex,
			function ( match, imageUrl ) {
				if ( shouldSkipReplacement( imageUrl ) ) {
					return match;
				}
				if ( ! images[ containerImageCounter ]?.url ) {
					return '';
				}
				const currentImageUrl = images[ containerImageCounter ]?.url;
				containerImageCounter++;
				containerImageCounter %= images.length;
				return 'background-image: url("' + currentImageUrl + '")';
			}
		);

		return newStyleContent;
	};

	useLayoutEffect( () => {
		let isMounted = true;
		const previewImages = selectedImages;

		const imgThumbnail = new Image();
		imgThumbnail.src = thumbnail_image_url;

		const imgFeatured = new Image();
		imgFeatured.src = featured_image_url;

		const thumbnailContainer = thumbnailContainerRef.current;

		function handleThumbnailLoad( image, setURL ) {
			if ( isMounted ) {
				image.onload = () => {
					setURL( image.src );
				};
			}
		}

		handleThumbnailLoad( imgThumbnail, setThumbnailImageURL );
		handleThumbnailLoad( imgFeatured, setFeaturedImageURL );

		const astraWpEditorCss = document
				.getElementById( 'astra-wp-editor-styles-inline-css' )
				?.textContent.replace( /:root/g, '.block-container' )
				.replace( /body/g, '.block-container' ),
			astraBlockEditorCss = document
				.getElementById( 'astra-block-editor-styles-inline-css' )
				?.textContent.replace( /:root/g, '.block-container' )
				.replace( /body/g, '.block-container' );

		let markup = ``;

		if ( stylesheet ) {
			stylesheet = replaceContainerImages( stylesheet, previewImages );
			stylesheet = stylesheet?.replaceAll( '--wp--preset--color--ast-global-color-', '--ast-global-color-' );
		}

		markup += astraCustomizer
			? `<style type="text/css" id="gt-astra-customizer">${ astraCustomizer }</style>`
			: '';
		markup += `<style type="text/css" id="gt-spectra-common-stylesheet">${ spectra_common_styles }</style>`;
		markup = stylesheet
			? `${ markup } <style type="text/css" id="gt-common-stylesheet">${ stylesheet }</style>`
			: markup;
		if ( globalStylesheet ) {
			markup =
				markup +
				`<style type="text/css" id="gt-global-stylesheet"> ${ globalStylesheet } </style>`;
		}

		if ( astraWpEditorCss ) {
			markup =
				markup +
				`<style type="text/css" id="gt-wpeditor-css" > ${ astraWpEditorCss } </style>`;
		}

		if ( astraBlockEditorCss ) {
			markup =
				markup +
				`<style type="text/css" id="gt-blockeditor-css"> ${ astraBlockEditorCss } </style>`;
		}

		if ( thumbnailContainer && content ) {
			let shadow = thumbnailContainer.shadowRoot;
			if ( shadow === null ) {
				shadow = thumbnailContainer.attachShadow( { mode: 'open' } );
			}
			if ( shadow === null ) {
				return;
			}
			let original_content = decodeHTMLEntities( content );
			if ( ! disableAi ) {
				const dynamic_content = dynamicContent ?? [];
				if (
					dynamic_content &&
					Object.keys( dynamic_content )?.length > 0
				) {
					Object.keys( dynamic_content ).forEach( ( key ) => {
						original_content =
							dynamic_content[ key ] !== null
								? original_content.replace(
										key,
										dynamic_content[ key ]
								  )
								: original_content;
					} );
				}
				if (
					!! dynamicContent &&
					Object.keys( dynamicContent ).length > 0
				) {
					original_content =
						replaceContactDetails( original_content );
					original_content =
						replaceGoogleMapLocation( original_content );
				}
			}

			shadow.innerHTML =
				markup +
				'<div class="st-block-container">' +
				original_content +
				'</div>';
			// shadow.innerHTML = markup + '<div class="st-block-container">' + ast_block_template_vars.header_markup + original_content + ast_block_template_vars.footer_markup + '</div>';
			colorPalette.forEach( ( color, index ) => {
				shadow?.host.style.setProperty(
					`--ast-global-color-${ index }`,
					color
				);
			} );

			const images =
				thumbnailContainer.shadowRoot.querySelectorAll( 'img' );
			if ( shadow ) {
				images.forEach( ( imageItem ) => {
					if (
						shouldSkipReplacement( imageItem.src ) ||
						disableAi ||
						previewImages?.length === 0 ||
						Object.keys( dynamicContent ).length === 0 ||
						! dynamicContent
					) {
						return;
					}
					updateVisibility( imageItem, visibility.hidden );
				} );
				updateScaling();
				replaceImages( images, previewImages );
			}
		}

		return () => {
			isMounted = false;
		};
	}, [ item, disableAi, dynamicContent, selectedImages ] );

	useEffect( () => {
		const resizeObserver = new ResizeObserver( updateScaling );
		resizeObserver.observe( document.documentElement );

		return () => {
			if ( ! resizeObserver ) {
				return;
			}
			resizeObserver.disconnect();
		};
	}, [] );

	useEffect( () => {
		const astPopup = document.querySelector(
			'#ast-block-templates-modal-wrap'
		);
		if ( ! astPopup ) {
			return;
		}

		const observer = new MutationObserver( updateScaling );
		observer.observe( astPopup, {
			childList: true,
			attributes: true,
			subtree: true,
		} );

		return () => {
			if ( ! observer ) {
				return;
			}
			observer.disconnect();
		};
	}, [] );

	useEffect( () => {
		const thumbnailContainer = thumbnailContainerRef?.current;
		if ( thumbnailContainer ) {
			const shadow = thumbnailContainer.shadowRoot;
			colorPalette.forEach( ( color, index ) => {
				if ( shadow === null ) {
					return;
				}
				shadow.host.style.setProperty(
					`--ast-global-color-${ index }`,
					color
				);
			} );
		}
	}, [ colorPalette ] );

	function updateScaling() {
		const thumbnail = thumbnailRef?.current;
		const thumbnailContainer = thumbnailContainerRef?.current;
		if ( ! thumbnail || ! thumbnailContainer ) {
			return;
		}

		const width = thumbnail.parentNode.offsetWidth;
		const scale = width / 1200;
		const scaledHeight = scale * thumbnailContainer.offsetHeight;

		thumbnail.style.transform = `scale(${ scale })`;
		thumbnail.style.height = `${ scaledHeight }px`;
	}

	const updateVisibility = ( element, value ) => {
		if ( ! element ) {
			return;
		}
		element.style.visibility = value;
	};

	const replaceGoogleMapLocation = ( contentStr = '' ) => {
		if ( ! address ) {
			return contentStr;
		}
		const regex =
			/(src="https:\/\/maps\.google\.com\/maps\?q=)([^&]+)(&z=\d+&hl=en&t=m&output=embed&iwloc=near")/g;
		return contentStr.replace(
			regex,
			`$1${ encodeURIComponent( address ) }$3`
		);
	};

	let scrollTimeout = 0;
	let startScroll = 0;
	const scrollToPosition = ( element, position, duration ) => {
		const start = element.scrollTop;
		const change = position - start;
		const increment = 20;
		let currentTime = 0;

		const animateScroll = function () {
			currentTime += increment;
			const val = easingFunctions.linearTween(
				currentTime,
				start,
				change,
				duration
			);
			element.scrollTop = val;
			if ( currentTime < duration ) {
				scrollTimeout = setTimeout( animateScroll, increment );
			}
		};

		animateScroll();
	};

	const handleScrollDown = () => {
		if ( item.type !== 'page' ) {
			return;
		}

		const scrollContainer = thumbnailContainerRef.current;
		if ( scrollTimeout ) {
			clearTimeout( scrollTimeout );
		}
		startScroll = setTimeout( () => {
			scrollToPosition(
				scrollContainer,
				scrollContainer.scrollHeight,
				4000
			);
		}, 1000 );
	};

	const handleScrollUp = () => {
		if ( startScroll ) {
			clearTimeout( startScroll );
		}
		const scrollContainer = thumbnailContainerRef.current;
		if ( scrollTimeout ) {
			clearTimeout( scrollTimeout );
		}
		scrollToPosition( scrollContainer, 0, 1500 );
	};

	const handleOnClickSingleBlock = ( event, blockItem ) => {
		if (
			! event ||
			event.target.closest( '.gt-single-block-action-btns' ) !== null ||
			typeof onClickBlock !== 'function'
		) {
			return;
		}

		onClickBlock( blockItem );
	};

	// Reset the counter when the popup is closed.
	useEffect( () => {
		if ( ! togglePopup ) {
			imageCounter = 0;
			containerImageCounter = 0;
		}
	}, [ togglePopup ] );

	const originClass = is_rtl ? 'origin-top-right' : 'origin-top-left';

	return (
		<div
			className={ classNames(
				'cursor-pointer relative border border-solid border-border-primary overflow-hidden group',
				className
			) }
		>
			<div
				className={ classNames(
					'thumbnail left-0 m-0 min-h-[auto] overflow-visible text-left top-0 relative pointer-events-none',
					originClass
				) }
				ref={ thumbnailRef }
			>
				<div
					className={ classNames(
						'absolute w-[1200px] pointer-events-none overflow-hidden',
						fullPreview ? 'max-h-fit' : 'max-h-[1600px]'
					) }
					ref={ thumbnailContainerRef }
				>
					{ ! content && (
						<img
							srcSet={ `${ imageFeaturedlURL }, ${ imageThumbnailURL }` }
							src={ imageThumbnailURL }
							alt="Preview"
						/>
					) }
					<div className="preview">
						<span className="ast-block-templates-icon ast-block-templates-icon-search"></span>
					</div>
				</div>
			</div>
			{ ! fullPreview && (
				<div
					className="absolute inset-0 grid grid-cols-1 grid-rows-1 place-items-end"
					onClick={ ( e ) => handleOnClickSingleBlock( e, item ) }
					{ ...( disableAutoScroll && {
						onMouseEnter: handleScrollDown,
						onMouseLeave: handleScrollUp,
					} ) }
					role="button"
					tabIndex="0"
					onKeyDown={ ( e ) =>
						e.key === 'Enter'
							? handleOnClickSingleBlock( e, item )
							: null
					}
				></div>
			) }
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getDisableAi, getTogglePopup } = select( STORE_KEY );
		return {
			disableAi: getDisableAi(),
			togglePopup: getTogglePopup(),
		};
	} )
)( memo( BlockPreview ) );
