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
        var msg;

        switch ( itemType ) {
            case "Product":
                if ( 'undefined' === typeof sku || '' === sku ) {
                    msg = __( 'Mising SKU' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof brand || '' === brand ) {
                    msg = __( 'Mising Brand' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof offerType || '' === offerType ) {
                    msg = __( 'Missing field Offer Type' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof offerCurrency || '' === offerCurrency ) {
                    msg = __('Missing field Offer Currency');
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof offerPrice || '' === offerPrice ) {
                    msg = __( 'Missing field Offer Price' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof offerExpiry || '' === offerExpiry ) {
                    msg = __( 'Missing field Offer Expiry' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof identifier || '' === identifier ) {
                    msg = __( 'Missing field Identifier' );
                    emptyItems.push( msg );
                }
                break;
            
            case 'Book':
                if ( 'undefined' === typeof isbn || '' === isbn ) {
                    msg = __( 'Mising ISBN Number' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof bookAuthorName || '' === bookAuthorName ) {
                    msg = __( 'Mising Book Author Name' );
                    emptyItems.push( msg );
                }
                break; 

            case 'Movie':
                if ( 'undefined' === typeof datecreated || '' === datecreated ) {
                    msg = __( 'Mising Date' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof directorname || '' === directorname ) {
                    msg = __( 'Mising Director Name' );
                    emptyItems.push( msg );
                }
                break;
            
            case 'Course':
                if ( 'undefined' === typeof provider || '' === provider ) {
                    msg = __( 'Mising Provider' );
                    emptyItems.push( msg );
                }
                break;
            
            case 'SoftwareApplication':
                if ( 'undefined' === typeof appCategory || '' === appCategory ) {
                    msg = __( 'Mising Application Category' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof operatingSystem || '' === operatingSystem ) {
                    msg = __( 'Mising Operating System' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof offerType || '' === offerType ) {
                    msg = __( 'Missing field Offer Type' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof offerPrice || '' === offerPrice ) {
                    msg = __( 'Missing field Offer Price' );
                    emptyItems.push( msg );
                }
                if ( 'undefined' === typeof offerCurrency || '' === offerCurrency ) {
                    msg = __( 'Missing field Offer Currency' );
                    emptyItems.push( msg );
                }
                break;
            
           default:
                //empty
				break;
        }
        
        if( itemType ){
            if ( 'undefined' === typeof rTitle || '' === rTitle ) {
                msg = __( 'Mising Rating Block Title' );
                emptyItems.push( msg );
            }
            if ( 'undefined' === typeof rContent || '' === rContent || false == enableDescription ) {
                msg = __( 'Mising Description' );
                emptyItems.push( msg );
            }
            if ( 'undefined' === typeof mainimage.url || null === mainimage.url || '' === mainimage.url || false == enableImage ) {
                msg = __( 'Mising Image' );
                emptyItems.push( msg );
            }
            if ( 'undefined' === typeof ctaLink || '' === ctaLink ) {
                msg = __( 'Missing field url' );
                emptyItems.push( msg );
            }
            if ( 'undefined' === typeof rAuthor || '' === rAuthor || false == showAuthor ) {
                msg = __( 'Missing Author' );
                emptyItems.push( msg );
            }
            if ( 'undefined' === typeof reviewPublisher || '' === reviewPublisher ) {
                msg = __( 'Mising Review Publisher' );
                emptyItems.push( msg );
            }
            if ( 'undefined' === typeof datepublish || '' === datepublish ) {
                msg = __( 'Mising Date of Publish' );
                emptyItems.push( msg );
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