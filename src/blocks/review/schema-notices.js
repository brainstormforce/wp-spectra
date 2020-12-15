/**
 * Review Schema Notices component.
 *
 */
const { __ } = wp.i18n

const { Component, Fragment } = wp.element

class SchemaNotices extends Component {

	constructor() {
        super( ...arguments )
    }
    render() {
        const {
            enableSchema,
            itemType,
            rTitle,
            enableDescription,
            rContent,
            enableImage,
            mainimage,
            sku,
            brand,
            showAuthor,
            rAuthor,
            offerType,
            offerCurrency,
            offerPrice,
            ctaLink,
            offerExpiry,
            datepublish,
            identifier,
            isbn,
            bookAuthorName,
            directorname,
            datecreated,
            provider,
            appCategory,
            reviewPublisher,
            operatingSystem,
            } = this.props

        var emptyItems = [];
        var msg;

        switch ( itemType ) {
            case "Product":
                if ( 'undefined' === typeof sku || '' === sku ) {
                    msg = __( 'Mising merchant-specific identifier for product ( SKU )' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof brand || '' === brand ) {
                    msg = __( 'Mising brand of the product' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof offerType || '' === offerType ) {
                    msg = __( 'Missing offer Type' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof offerCurrency || '' === offerCurrency ) {
                    msg = __('Missing offer currency of a product');
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof offerPrice || '' === offerPrice ) {
                    msg = __( 'Missing offer price of a product' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof offerExpiry || '' === offerExpiry ) {
                    msg = __( 'Missing offer expiry of a product' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof identifier || '' === identifier ) {
                    msg = __( 'Missing global identifiers' );
                    emptyItems.push( msg );
                }
                break;
            
            case 'Book':
                if ( 'undefined' === typeof isbn || '' === isbn ) {
                    msg = __( 'Mising ISBN number of a book' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof bookAuthorName || '' === bookAuthorName ) {
                    msg = __( 'Mising author of the book' );
                    emptyItems.push( msg );
                }
                break; 

            case 'Movie':
                if ( 'undefined' === typeof datecreated || '' === datecreated ) {
                    msg = __( 'Mising released date of the movie' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof directorname || '' === directorname ) {
                    msg = __( 'Mising director name of the movie' );
                    emptyItems.push( msg );
                }
                break;
            
            case 'Course':
                if ( 'undefined' === typeof provider || '' === provider ) {
                    msg = __( 'Mising provider of the course' );
                    emptyItems.push( msg );
                }
                break;
            
            case 'SoftwareApplication':
                if ( 'undefined' === typeof appCategory || '' === appCategory ) {
                    msg = __( 'Mising type of application (Application Category)' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof operatingSystem || '' === operatingSystem ) {
                    msg = __( 'Mising operating system(s) required' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof offerType || '' === offerType ) {
                    msg = __( 'Missing Offer Type' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof offerPrice || '' === offerPrice ) {
                    msg = __( 'Missing offer price of the application' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof offerCurrency || '' === offerCurrency ) {
                    msg = __( 'Missing offer currency of the application' );
                    emptyItems.push( msg );
                }
                break;
            
           default:
                //empty
				break;
        }
        
        if( itemType ){
            if ( 'undefined' === typeof rTitle || '' === rTitle ) {
                msg = __( 'Mising title of the review' );
                emptyItems.push( msg );
            }
            if ( 'undefined' === typeof rContent || '' === rContent || false == enableDescription ) {
                msg = __( 'Mising review description' );
                emptyItems.push( msg );
            }
            if ( 'undefined' === typeof mainimage.url || null === mainimage.url || '' === mainimage.url || false == enableImage ) {
                msg = __( 'Mising review Image' );
                emptyItems.push( msg );
            }
            if ( 'undefined' === typeof ctaLink || '' === ctaLink ) {
                msg = __( 'Missing url field' );
                emptyItems.push( msg );
            }
            if ( 'undefined' === typeof rAuthor || '' === rAuthor || false == showAuthor ) {
                msg = __( 'Mising review author name' );
                emptyItems.push( msg );
            }
            if ( 'undefined' === typeof reviewPublisher || '' === reviewPublisher ) {
                msg = __( 'Mising review publisher' );
                emptyItems.push( msg );
            }
            if ( 'undefined' === typeof datepublish || '' === datepublish ) {
                msg = __( 'Mising date of publish' );
                emptyItems.push( msg );
            }
        }
        
        const listItems = emptyItems.map( ( item ) =>
            <li key={ item }> { item } </li> 
        );

        const schemaNoticeMarkup = () => {
            if( enableSchema == true ){
                if ( 0 !== emptyItems.length ) {
                    return (
                        <div className="rating-schema-notices">

                            <h6> { __( 'It seems that the following fields are empty. This may generate Schema errors / warnings for your Page, we recommend you to fill these fields.' ) } </h6>
                            <ul className="rating-schema-notices-list">
                                { listItems }
                            </ul>
                    <p>{ __( 'P.S. Note that this notice is visible only in the editor. This will not be visible in frontend. Also, once the required fields are added, this notice will go away.' ) }&nbsp;<a href="https://developers.google.com/search/docs/data-types/review-snippet" target="_blank">{ __( 'Read more.' ) }</a></p>
                        </div>
                    )
                }
            }
            return '';
        }

        return (
           
            <Fragment>
                 {schemaNoticeMarkup()}
            </Fragment>
        )
    }
}

export default SchemaNotices