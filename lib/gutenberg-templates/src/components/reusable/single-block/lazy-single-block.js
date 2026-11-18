import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { withSelect, useSelect, useDispatch } from '@wordpress/data';
import {
	useRef,
	useEffect,
	useState,
	useLayoutEffect,
	memo,
} from '@wordpress/element';
import {
	classNames,
	decodeHTMLEntities,
	getSpectraStatus,
} from '../../../utils/helpers';
import ImportBlockButton from '../import-block-button/import-block-button';
import FavoriteSingleBlock from './favorite-single-block';
import PremiumBadge from '../premium-badge/premium-badge';
import { shouldSkipReplacement } from './utils.js';
import easingFunctions from '../../../utils/easing-functions';
import FadeInOut from '../fade-in-out/fade-in-out.js';
import licensePopup from '../license/license-popup';
import Tooltip from '../tooltip/tooltip.js';
import PluginRequiredTooltip from '../plugin-required-tooltip/plugin-required-tooltip';
import useLicense from '../../../hooks/use-license.js';

const { spectra_common_styles, is_rtl } = ast_block_template_vars;

const visibility = {
	hidden: 'hidden',
	visible: 'visible',
};

const SingleBlock = ( {
	item,
	content,
	stylesheet,
	astraCustomizer,
	globalStylesheet,
	colorPalette,
	adaptiveMode,
	dynamicContent,
	selectedImages,
	disableAi,
	togglePopup,
	email,
	phone,
	address,
	onClickBlock,
	isLocked,
} ) => {
	const thumbnailRef = useRef( null );
	const thumbnailContainerRef = useRef( null );
	const thumbnail_image_url = item[ 'thumbnail-image-url' ] || '';
	const featured_image_url = item[ 'featured-image-url' ] || '';
	const spectraPluginStatus = getSpectraStatus();
	const { licenseStatus } = useLicense();

	let imageCounter = 0;
	let containerImageCounter = 0;
	const { importing } = useSelect( ( select ) => {
		const { getImporting } = select( 'ast-block-templates' );
		return {
			importing: getImporting(),
		};
	} );

	const { setImporting } = useDispatch( 'ast-block-templates' );

	const [ selfState, setSelfState ] = useState( {
		importing: false,
	} );

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
	useEffect( () => {
		// This effect will run whenever the importing state changes
		if ( importing ) {
			// Disable click events on all blocks
			document.querySelectorAll( '.single-block' ).forEach( ( block ) => {
				block.style.pointerEvents = 'none';
			} );
		} else {
			// Re-enable click events on all blocks
			document.querySelectorAll( '.single-block' ).forEach( ( block ) => {
				block.style.pointerEvents = 'auto';
			} );
		}
	}, [ importing ] );
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
		const wpStylesheet = ast_block_template_vars.wp_stylesheet;

		let markup = ``;

		if ( stylesheet ) {
			stylesheet = replaceContainerImages( stylesheet, previewImages );
			stylesheet = stylesheet?.replaceAll( '--wp--preset--color--ast-global-color-', '--ast-global-color-' );
		}

		if ( astraCustomizer ) {
			// Replace color values in astraCustomizer based on activeBlockPalette and defaultBlockPalette
			if ( astraCustomizer && colorPalette && colorPalette.length > 0 ) {
				// Loop through the color palette and replace corresponding color values
				colorPalette.forEach( ( color, index ) => {
					const wpPresetColor = `var(--wp--preset--color--ast-global-color-${ index })`;
					const customColorVar = `var(--ast-global-color-${ index })`;

					// Replace both the preset and custom variable references
					astraCustomizer = astraCustomizer.replaceAll( wpPresetColor, customColorVar );

					// Also replace any raw color values that might exist
					if ( color ) {
						astraCustomizer = astraCustomizer.replaceAll( color, customColorVar );
					}
				} );

				// Replace Website demos customizer button color with the primary color in the color palette.
				if ( ! adaptiveMode ) {
					astraCustomizer = astraCustomizer.replaceAll( '#ffc300', colorPalette[ 0 ] );
				}
			}

			// Apply the styles for v2 patterns as v3 patterns has higher specificity rules.
			if ( ! adaptiveMode ) {
				astraCustomizer += `
					.wp-block-button .wp-block-button__link,
					.wp-block-search .wp-block-search__button,
					.st-block-container .wp-block-file .wp-block-file__button {
						border-top-left-radius: 4px;
						border-bottom-left-radius: 4px;
						border-top-right-radius: 4px;
						border-bottom-right-radius: 4px;
					}
				`;
			}
		}

		markup += wpStylesheet
			? `<style type="text/css" id="wp-includes-styles">${ wpStylesheet }</style>`
			: '';
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

		// Get common WordPress CSS variables from the main document
		const rootStyles = getComputedStyle( document.documentElement ); // eslint-disable-line no-undef
		const wpCssVariables = {
			'--wp--style--block-gap': rootStyles.getPropertyValue( '--wp--style--block-gap' ).trim() || '24px',
			// Easily extendable for other variables
		};

		// Generate CSS variable definitions
		let cssVariableDefinitions = '';
		Object.keys( wpCssVariables ).forEach( ( variable ) => {
			cssVariableDefinitions += `						${ variable }: ${ wpCssVariables[ variable ] };\n`;
		} );

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

			// Add CSS variable definitions to the shadow DOM
			const cssVariables = `
				<style>
					.st-block-container {
${ cssVariableDefinitions }					}
				</style>
			`;

			shadow.innerHTML =
				cssVariables +
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

		// Also observe the thumbnail container for size changes
		const thumbnailContainer = thumbnailContainerRef.current;
		if ( thumbnailContainer ) {
			resizeObserver.observe( thumbnailContainer );
		}

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

		// Ensure the parent container can accommodate the scaled content
		if ( thumbnail.parentNode ) {
			thumbnail.parentNode.style.minHeight = `${ scaledHeight }px`;
		}
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

	const getInsertButtonText = () => {
		if ( isLocked && licenseStatus !== 'active' ) {
			return (
				<Tooltip
					content={
						! getSpectraStatus()?.active &&
						__(
							'Unlock all patterns and design kits with the Essentials or Business Toolkit package.',
							'ast-block-templates'
						)
					}
					placement="top"
				>
					{ __( 'Get Access', 'ast-block-templates' ) }
				</Tooltip>
			);
		}

		return __( 'Insert', 'ast-block-templates' );
	};

	const handleOnClickSingleBlock = ( event, blockItem ) => {
		if (
			importing ||
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
		<FadeInOut
			className={ classNames(
				'w-full h-fit',
				importing ? 'importing' : ''
			) }
		>
			<div
				className={ classNames(
					'hover:!min-h-[3.375rem] cursor-pointer relative border border-solid border-border-primary hover:border-accent-spectra transition duration-150 ease-in-out overflow-hidden group',
					importing && 'border-accent-spectra'
				) }
			>
				<div
					className={ `thumbnail left-0 m-0 min-h-[auto] overflow-visible text-left top-0 ${ originClass } relative pointer-events-none` }
					ref={ thumbnailRef }
				>
					<div
						className="absolute w-[1200px] pointer-events-none max-h-none overflow-hidden"
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
				<div
					className={ classNames(
						'absolute inset-0 grid grid-cols-1 grid-rows-1 place-items-end',
						importing ? 'pointer-events-none' : ''
					) }
					onMouseEnter={ handleScrollDown }
					onMouseLeave={ handleScrollUp }
					onClick={ ( e ) => handleOnClickSingleBlock( e, item ) }
					role="button"
					tabIndex="0"
					onKeyDown={ ( e ) =>
						e.key === 'Enter'
							? handleOnClickSingleBlock( e, item )
							: null
					}
				>
					<div
						className={ classNames(
							'gt-single-block-action-btns opacity-100 md:opacity-0 group-hover:opacity-100 w-full flex items-center justify-between px-3 py-2 backdrop-blur-sm bg-white/[0.85] shadow-action-buttons transition-all duration-150 ease-in-out',
							true === selfState.importing ? 'opacity-100' : ''
						) }
					>
						<PluginRequiredTooltip
							item={ item }
							disabled={ isLocked && licenseStatus !== 'active' }
						>
							<ImportBlockButton
								title={ getInsertButtonText() }
								showIcon={ spectraPluginStatus.active }
								liveRequest={ true }
								item={ item }
								importing={ selfState.importing }
								onClick={ ( event ) => {
								// If block is locked, redirect to upgrade page
								if ( isLocked && licenseStatus !== 'active' ) {
									event?.preventDefault();
									event?.stopPropagation();
									if ( getSpectraStatus()?.active ) {
										licensePopup.show();
										return false;
									}

									window.open(
										ast_block_template_vars.getProURL,
										'_blank'
									);
									return false;
								}

								// Pattern is not locked, proceed with import
								setSelfState( {
									...selfState,
									importing: true,
								} );

								setImporting( true );

								// Return undefined to allow import to proceed
								return undefined;
							} }
								onBlockImport={ () => {
								setSelfState( {
									...selfState,
									importing: false,
								} );

								setImporting( false );
							} }
								onImportFail={ () => {
								setSelfState( {
									...selfState,
									importing: false,
								} );

								setImporting( false );
							} }
								isLocked={ isLocked }
							/>
						</PluginRequiredTooltip>
						<FavoriteSingleBlock item={ item } />
					</div>
				</div>

				{ /* Premium Badge - Only show when isLocked is true */ }
				{ isLocked && (
					<div className="absolute top-2 right-2 z-10">
						<PremiumBadge item={ item } />
					</div>
				) }
			</div>
		</FadeInOut>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getDisableAi, getDisablePreview, getTogglePopup } = select(
			'ast-block-templates'
		);
		return {
			disableAi: getDisableAi(),
			disablePreview: getDisablePreview(),
			togglePopup: getTogglePopup(),
		};
	} )
)( memo( SingleBlock ) );
