/**
 * Rating Schema Notices component.
 *
 */
const { __ } = wp.i18n

const { select } = wp.data;

const { Component, Fragment } = wp.element

class SchemaNotices extends Component {

	constructor() {
        super( ...arguments )
    }
    render() {
        const {
            rTitle,
            rContent,
            mainimage,
            sku,
            brand,
            starCount,
            rAuthor,
            newAverage,
            offerType,
            offerCount,
            offerLowPrice,
            offerHighPrice,
            offerCurrency,
            offerPrice,
            ctaLink,
            offerExpiry,
            identifier,
            features,
            clientId,
            } = this.props

        var emptyItems = [];
        
        var feature_empty_item_flag = false;
        // features.forEach((feature, key) => {
            if ( '' === mainimage.url || 'undefined' === typeof mainimage.url ) {
                feature_empty_item_flag = true;
            }
        // });

        if ( 'undefined' === typeof rTitle || '' === rTitle ) {
            emptyItems.push( 'Mising Rating Block Title' );
        }
        if ( 'undefined' === typeof rContent || '' === rContent ) {
            emptyItems.push( 'Mising Description' );
        }
        if ( 'undefined' === typeof mainimage.url || null === mainimage.url || '' === mainimage.url ) {
            emptyItems.push( 'Mising Image' );
        }
        if ( 'undefined' === typeof sku || '' === sku ) {
            emptyItems.push( 'Mising SKU' );
        }
        if ( 'undefined' === typeof brand || '' === brand ) {
            emptyItems.push( 'Brand' );
        }
        if ( 'undefined' === typeof rAuthor || '' === rAuthor ) {
            emptyItems.push( 'Author' );
        }
        if ( 'undefined' === typeof offerCount || '' === offerCount ) {
            emptyItems.push( 'Missing field Offer Count' );
        }
        if ( 'undefined' === typeof offerType || '' === offerType ) {
            emptyItems.push( 'Missing field Offer Type' );
        }
        if ( 'undefined' === typeof offerLowPrice || '' === offerLowPrice ) {
            emptyItems.push( 'Missing field Offer Low Price' );
        }
        if ( 'undefined' === typeof offerHighPrice || '' === offerHighPrice ) {
            emptyItems.push( 'Missing field Offer High Price' );
        }
        if ( 'undefined' === typeof offerCurrency || '' === offerCurrency ) {
            emptyItems.push( 'Missing field Offer Currency' );
        }
        if ( 'undefined' === typeof offerPrice || '' === offerPrice ) {
            emptyItems.push( 'Missing field Offer Price' );
        }
        if ( 'undefined' === typeof ctaLink || '' === ctaLink ) {
            emptyItems.push( 'Missing field url' );
        }
        if ( 'undefined' === typeof offerExpiry || '' === offerExpiry ) {
            emptyItems.push( 'Missing field Offer Expiry' );
        }
        if ( 'undefined' === typeof identifier || '' === identifier ) {
            emptyItems.push( 'Missing field Identifier' );
        }
        if ( true === feature_empty_item_flag ) {
            emptyItems.push( 'Feature list rating are required' );
        }
        const listItems = emptyItems.map( ( item ) =>
            <li key={ item }> { item } </li> 
        );

        const schemaNoticeMarkup = () => {

            if ( 0 !== emptyItems.length ) {
                return (
                    <div className="rating-schema-notices">

                        <h6> { __( 'It seems the following fields are empty. This may generate Schema errors / warnings for your Page, we recommend you to fill these fields.' ) } </h6>
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