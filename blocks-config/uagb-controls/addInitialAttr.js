import { useEffect } from '@wordpress/element';
import { select } from '@wordpress/data';

const getUniqId = ( blocks ) => blocks
	.reduce( ( result, block ) => {
		if ( block?.attributes?.block_id && block.name.includes( 'uagb' ) ) {
			result.blockIds.push( block.attributes.block_id );
			result.clientIds.push( block.clientId );
		}

		if ( block.innerBlocks ) {
			const { blockIds, clientIds } = getUniqId( block.innerBlocks );
			result.blockIds = [ ...result.blockIds, ...blockIds ];
			result.clientIds = [ ...result.clientIds, ...clientIds ];
		}

		return result;
	}, { blockIds: [], clientIds: [] } );

const checkDuplicate = ( blockIds, block_id, currentIndex ) => {
	const getFiltered =  blockIds.filter( ( el ) => ( el === block_id ) );
	return getFiltered.length > 1 && currentIndex === blockIds.lastIndexOf( block_id )
}

const addInitialAttr = ( ChildComponent ) => {
	const WrappedComponent = ( props ) => {
		const { name, setAttributes, clientId, attributes : { block_id } } = props;
		
		useEffect( () => {
			const listOfClassMigrate = [
				'uagb/advanced-heading',
				'uagb/blockquote',
				'uagb/buttons',
				'uagb/call-to-action',
				'uagb/column',
				'uagb/columns',
				'uagb/icon-list',
				'uagb/marketing-button',
				'uagb/image-gallery',
				'uagb/info-box',
				'uagb/lottie',
				'uagb/restaurant-menu',
				'uagb/section',
				'uagb/social-share',
				'uagb/content-timeline',
				'uagb/table-of-contents',
				'uagb/team',
				'uagb/testimonial',
			];

			const listOfChildMigrate = [
				'uagb/buttons',
				'uagb/icon-list',
				'uagb/restaurant-menu',
				'uagb/social-share',
                'uagb/content-timeline',
			];

			const listOfIsHtml = [ 'uagb/cf7-styler', 'uagb/gf-styler' ];

			const listOfEditorInnerblocksPreview = [ 'uagb/countdown' ];

			const listOfAllTaxonomyStore = [ 'uagb/post-carousel', 'uagb/post-grid', 'uagb/post-masonry' ];

			const attributeObject = { block_id: clientId.substr( 0, 8 ) };

			if ( listOfAllTaxonomyStore.includes( name ) ) {
				attributeObject.allTaxonomyStore = undefined;
			}
			
            // editorInnerblocksPreview: This attribute is used to display innerblocks preview for 'Replace with Content' mode.
			if ( listOfEditorInnerblocksPreview.includes( name ) ) {
				attributeObject.editorInnerblocksPreview = false;
			}

			if ( listOfIsHtml.includes( name ) ) {
				attributeObject.isHtml = false;
			}

			if ( listOfChildMigrate.includes( name ) ) {
				attributeObject.childMigrate = true;
			}

			if ( listOfClassMigrate.includes( name ) ) {
				attributeObject.classMigrate = true;
			}


			/**
			 * Resolve issue of reusable block.
			 * As of now we are not providing for all block
			 * After tested few blocks we will implement this is all blocks.
			 */
			const REUSABLE_BLOCK_ISSUE_RESOLVED_BLOCKS = [ 
				'uagb/blockquote',
				'uagb/cf7-styler',
				'uagb/column',
				'uagb/columns',
				'uagb/container',
				'uagb/counter',
				'uagb/faq',
				'uagb/faq-child',
				'uagb/forms',
				'uagb/forms-accept',
				'uagb/forms-checkbox',
				'uagb/forms-date',
				'uagb/forms-email',
				'uagb/forms-hidden',
				'uagb/forms-name',
				'uagb/forms-phone',
				'uagb/forms-radio',
				'uagb/forms-select',
				'uagb/forms-textarea',
				'uagb/forms-toggle',
				'uagb/forms-upload',
				'uagb/forms-url',
				'uagb/gf-styler',
				'uagb/google-map',
				'uagb/how-to',
				'uagb/how-to-step',
				'uagb/icon-list',
				'uagb/icon-list-child',
				'uagb/image-gallery',
				'uagb/inline-notice',
				'uagb/lottie',
				'uagb/marketing-button',
				'uagb/modal',
				'uagb/popup-builder',
				'uagb/post-button',
				'uagb/post-carousel',
				'uagb/post-excerpt',
				'uagb/post-grid',
				'uagb/post-image',
				'uagb/post-masonry',
				'uagb/post-meta',
				'uagb/post-taxonomy',
				'uagb/post-title',
				'uagb/restaurant-menu',
				'uagb/restaurant-menu-child',
				'uagb/review',
				'uagb/section',
				'uagb/separator',
				'uagb/slider',
				'uagb/slider-child',
				'uagb/social-share',
				'uagb/social-share-child',
				'uagb/star-rating',
				'uagb/table-of-contents',
				'uagb/tabs',
				'uagb/tabs-child',
				'uagb/taxonomy-list',
				'uagb/team',
				'uagb/testimonial',
				'uagb/content-timeline',
				'uagb/content-timeline-child',
				'uagb/post-timeline',
				'uagb/wp-search',
				'uagb/instagram-feed',
				'uagb/login',
				'uagb/loop-builder',
				'uagb/loop-wrapper',
				'uagb/register',
				'uagb/register-email',
				'uagb/register-first-name',
				'uagb/register-last-name',
				'uagb/register-password',
				'uagb/register-reenter-password',
				'uagb/register-terms',
				'uagb/register-username',
			];

			if( ! REUSABLE_BLOCK_ISSUE_RESOLVED_BLOCKS.includes( name ) ){
				const getAllBlocks = select( 'core/editor' ).getBlocks();
				const { blockIds, clientIds } = getUniqId( getAllBlocks );
				if ( 'not_set' === block_id || ! block_id || checkDuplicate( blockIds, block_id, clientIds.indexOf( clientId ) ) ) {
					setAttributes( attributeObject );
				}
			}else{
				setAttributes( attributeObject );
			}

		}, [ clientId ] );

		return <ChildComponent { ...props } />;
	};

	return WrappedComponent;
};
export default addInitialAttr;
