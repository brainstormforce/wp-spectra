/**
 * BLOCK: UAGB Review Block.
 */

import styling from './styling';
import SchemaNotices from './schema-notices';
import { useEffect, useMemo } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';

const ReviewComponent = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		attributes: {
			parts,
			itemType,
			summaryDescription,
			starCount,
			reviewPublisher,
			datepublish,
			rTitle,
			rContent,
			rAuthor,
			isbn,
			provider,
			sku,
			brand,
			datecreated,
			directorname,
			appCategory,
			operatingSystem,
			aggregateType,
			offerType,
			offerPrice,
			itemSubtype,
			mainimage,
			identifierType,
			identifier,
			ctaLink,
			offerExpiry,
			offerCurrency,
			offerStatus,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			contentVrPadding,
			contentHrPadding,
			topPadding,
			bottomPadding,
			rightPadding,
			leftPadding,
			enableSchema,
			items,
			showFeature,
			showAuthor,
			enableDescription,
			enableImage,
			bookAuthorName,
		},
		setAttributes,
		name,
		clientId,
	} = props;

	const updatePageSchema = () => {
		const newAverage = parts.map( ( i ) => i.value ).reduce( ( total, v ) => total + v ) / parts.length;
		const newAverageCount = parts.length;
		let itemtype = '';

		if ( [ 'Product', 'SoftwareApplication', 'Book' ].includes( itemType ) ) {
			itemtype = itemSubtype !== 'None' && itemSubtype !== '' ? itemSubtype : itemType;
		} else {
			itemtype = itemType;
		}

		const jsonData = {
			'@context': 'https://schema.org/',
			'@type': 'Review',
			'reviewBody': summaryDescription,
			'description': rContent,
			'itemReviewed': [],
			'reviewRating': {
				'@type': 'Rating',
				'ratingValue': newAverage,
				'worstRating': '0',
				'bestRating': starCount,
			},
			'author': {
				'@type': 'Person',
				'name': rAuthor,
			},
			'publisher': reviewPublisher,
			'datePublished': datepublish,
			'url': ctaLink,
		};

		switch ( itemType ) {
			case 'Book':
				jsonData.itemReviewed = {
					'@type': itemtype,
					'name': rTitle,
					'description': rContent,
					'image': [],
					'author': rAuthor,
					isbn,
				};
				break;

			case 'Course':
				jsonData.itemReviewed = {
					'@type': itemType,
					'name': rTitle,
					'description': rContent,
					'image': [],
					provider,
				};
				break;

			case 'Product':
				jsonData.itemReviewed = {
					'@type': itemtype,
					'name': rTitle,
					'description': rContent,
					'image': [],
					sku,
					'brand': {
						'@type': 'Brand',
						'name': brand,
					},
					'offers': [],
				};
				break;

			case 'Movie':
				jsonData.itemReviewed = {
					'@type': itemType,
					'name': rTitle,
					'dateCreated': datecreated,
					'director': {
						'@type': 'Person',
						'name': directorname,
					},
				};
				break;

			case 'SoftwareApplication':
				jsonData.itemReviewed = {
					'@type': itemtype,
					'name': rTitle,
					'applicationCategory': appCategory,
					operatingSystem,
					'aggregateRating': {
						'@type': aggregateType,
						'ratingValue': newAverage,
						'ratingCount': newAverageCount,
					},
					'offers': {
						'@type': offerType,
						'price': offerPrice,
						'url': ctaLink,
						'priceCurrency': offerCurrency,
					},
				};
				break;

			default:
				break;
		}

		if ( mainimage ) {
			jsonData.itemReviewed.image = mainimage.url;
		}

		if ( itemType === 'Product' ) {
			jsonData.itemReviewed[ identifierType ] = identifier;
			jsonData.itemReviewed.offers = {
				'@type': offerType,
				'price': offerPrice,
				'url': ctaLink,
				'priceValidUntil': offerExpiry,
				'priceCurrency': offerCurrency,
				'availability': offerStatus,
			};
		}

		setAttributes( { schema: JSON.stringify( jsonData ) } );
	};

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		if ( contentVrPadding ) {
			if ( undefined === topPadding ) {
				setAttributes( { topPadding: contentVrPadding } );
			}
			if ( undefined === bottomPadding ) {
				setAttributes( { bottomPadding: contentVrPadding } );
			}
		}

		if ( contentHrPadding ) {
			if ( undefined === rightPadding ) {
				setAttributes( { rightPadding: contentHrPadding } );
			}
			if ( undefined === leftPadding ) {
				setAttributes( { leftPadding: contentHrPadding } );
			}
		}

		const postSaveButton = document.getElementsByClassName( 'editor-post-publish-button' )?.[ 0 ];

		if ( postSaveButton ) {
			postSaveButton.addEventListener( 'click', updatePageSchema );
		}
	}, [] );

	useEffect( () => {
		const ratingLinkWrapper = document.querySelector( '.uagb-rating-link-wrapper' );
		if ( ratingLinkWrapper !== null ) {
			ratingLinkWrapper.addEventListener( 'click', function ( event ) {
				event.preventDefault();
			} );
		}

		const postSaveButton = document.getElementsByClassName( 'editor-post-publish-button' )?.[ 0 ];

		if ( postSaveButton ) {
			postSaveButton.addEventListener( 'click', updatePageSchema );
			return () => {
				postSaveButton?.removeEventListener( 'click', updatePageSchema );
			};
		}
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	if (
		items &&
		items !== JSON.stringify( parts ) &&
		parts.length === 1 &&
		parts[ 0 ].label === '' &&
		parts[ 0 ].value === 0
	) {
		setAttributes( {
			parts: JSON.parse( items ),
			items: '[{"label":"","value":0}]',
		} );
	}

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	return (
		<>
			<SchemaNotices
				enableSchema={ enableSchema }
				itemType={ itemType }
				rTitle={ rTitle }
				enableDescription={ enableDescription }
				rContent={ rContent }
				enableImage={ enableImage }
				mainimage={ mainimage }
				sku={ sku }
				brand={ brand }
				starCount={ starCount }
				showAuthor={ showAuthor }
				rAuthor={ rAuthor }
				showfeature={ showFeature }
				aggregateType={ aggregateType }
				offerType={ offerType }
				datepublish={ datepublish }
				offerCurrency={ offerCurrency }
				offerPrice={ offerPrice }
				ctaLink={ ctaLink }
				offerExpiry={ offerExpiry }
				identifier={ identifier }
				isbn={ isbn }
				bookAuthorName={ bookAuthorName }
				directorname={ directorname }
				datecreated={ datecreated }
				provider={ provider }
				appCategory={ appCategory }
				operatingSystem={ operatingSystem }
				reviewPublisher={ reviewPublisher }
			/>
			<DynamicCSSLoader { ...{ blockStyling } } />
			<DynamicFontLoader { ...{ attributes } } />
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default compose(
	AddStaticStyles,
)( ReviewComponent );
