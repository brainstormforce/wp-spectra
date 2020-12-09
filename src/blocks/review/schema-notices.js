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

        switch ( itemType ) {
            case "Product":
                if ( 'undefined' === typeof sku || '' === sku ) {
                    emptyItems.push( 'Mising SKU' );
                }
                if ( 'undefined' === typeof brand || '' === brand ) {
                    emptyItems.push( 'Mising Brand' );
                }
                if ( 'undefined' === typeof offerType || '' === offerType ) {
                    emptyItems.push( 'Missing field Offer Type' );
                }
                if ( 'undefined' === typeof offerCurrency || '' === offerCurrency ) {
                    emptyItems.push( 'Missing field Offer Currency' );
                }
                if ( 'undefined' === typeof offerPrice || '' === offerPrice ) {
                    emptyItems.push( 'Missing field Offer Price' );
                }
                if ( 'undefined' === typeof offerExpiry || '' === offerExpiry ) {
                    emptyItems.push( 'Missing field Offer Expiry' );
                }
                if ( 'undefined' === typeof identifier || '' === identifier ) {
                    emptyItems.push( 'Missing field Identifier' );
                }
                break;
            
            case 'Book':
                if ( 'undefined' === typeof isbn || '' === isbn ) {
                    emptyItems.push( 'Mising ISBN Number' );
                }
                if ( 'undefined' === typeof bookAuthorName || '' === bookAuthorName ) {
                    emptyItems.push( 'Mising Book Author Name' );
                }
                break; 

            case 'Movie':
                if ( 'undefined' === typeof datecreated || '' === datecreated ) {
                    emptyItems.push( 'Mising Date' );
                }
                if ( 'undefined' === typeof directorname || '' === directorname ) {
                    emptyItems.push( 'Mising Director Name' );
                }
                break;
            
            case 'Course':
                if ( 'undefined' === typeof provider || '' === provider ) {
                    emptyItems.push( 'Mising Provider' );
                }
                break;
            
            case 'SoftwareApplication':
                if ( 'undefined' === typeof appCategory || '' === appCategory ) {
                    emptyItems.push( 'Mising Application Category' );
                }
                if ( 'undefined' === typeof operatingSystem || '' === operatingSystem ) {
                    emptyItems.push( 'Mising Operating System' );
                }
                if ( 'undefined' === typeof offerType || '' === offerType ) {
                    emptyItems.push( 'Missing field Offer Type' );
                }
                if ( 'undefined' === typeof offerPrice || '' === offerPrice ) {
                    emptyItems.push( 'Missing field Offer Price' );
                }
                if ( 'undefined' === typeof offerCurrency || '' === offerCurrency ) {
                    emptyItems.push( 'Missing field Offer Currency' );
                }
                break;
            
           default:
                //empty
				break;
        }
        
        if( itemType ){
            if ( 'undefined' === typeof rTitle || '' === rTitle ) {
                emptyItems.push( 'Mising Rating Block Title' );
            }
            if ( 'undefined' === typeof rContent || '' === rContent || false == enableDescription ) {
                emptyItems.push( 'Mising Description' );
            }
            if ( 'undefined' === typeof mainimage.url || null === mainimage.url || '' === mainimage.url || false == enableImage ) {
                emptyItems.push( 'Mising Image' );
            }
            if ( 'undefined' === typeof ctaLink || '' === ctaLink ) {
                emptyItems.push( 'Missing field url' );
            }
            if ( 'undefined' === typeof rAuthor || '' === rAuthor || false == showAuthor ) {
                emptyItems.push( 'Missing Author' );
            }
            if ( 'undefined' === typeof reviewPublisher || '' === reviewPublisher ) {
                emptyItems.push( 'Mising Review Publisher' );
            }
            if ( 'undefined' === typeof datepublish || '' === datepublish ) {
                emptyItems.push( 'Mising Date of Publish' );
            }
        }
        
        const listItems = emptyItems.map( ( item ) =>
            <li key={ item }> { item } </li> 
        );

        const schemaNoticeMarkup = () => {
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
            return '';
        }

        return (
            <Fragment>
                { schemaNoticeMarkup() }
            </Fragment>
        )
    }
}

export default SchemaNotices