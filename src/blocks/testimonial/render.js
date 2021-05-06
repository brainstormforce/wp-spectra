import classnames from "classnames"
import AuthorName from "./components/AuthorName"
import Company from "./components/Company"
import Description from "./components/Description"
import TestimonialImage from "./components/Image"
import Slider from "react-slick"
import PositionClasses from "./classes"
import UAGB_Block_Icons from "@Controls/block-icons"

const testimonialRender = props => {

    const { className, setAttributes, attributes, deviceType } = props

    // Setup the attributes.
    const {
        test_item_count,
        test_block,
        headingAlign,
        companyColor,
        descColor,
        authorColor,

        nameFontSizeType,
        nameFontSize,
        nameFontSizeTablet,
        nameFontSizeMobile,
        nameFontFamily,
        nameFontWeight,
        nameFontSubset,
        nameLineHeightType,
        nameLineHeight,
        nameLineHeightTablet,
        nameLineHeightMobile,
        nameLoadGoogleFonts,

        companyFontSizeType,
        companyFontSize,
        companyFontSizeTablet,
        companyFontSizeMobile,
        companyFontFamily,
        companyFontWeight,
        companyFontSubset,
        companyLineHeightType,
        companyLineHeight,
        companyLineHeightTablet,
        companyLineHeightMobile,
        companyLoadGoogleFonts,

        descFontSizeType,
        descFontSize,
        descFontSizeTablet,
        descFontSizeMobile,
        descFontFamily,
        descFontWeight,
        descFontSubset,
        descLineHeightType,
        descLineHeight,
        descLineHeightTablet,
        descLineHeightMobile,
        descLoadGoogleFonts,

        descSpace,
        iconimgStyle,
        imagePosition,
        imageAlignment,
        nameSpace,
        imgHrPadding,
        imgVrPadding,
        imageSize,
        imageWidth,
        columns,
        tcolumns,
        mcolumns,
        pauseOnHover,
        infiniteLoop,
        transitionSpeed,
        arrowDots,
        arrowSize,
        arrowBorderSize,
        arrowBorderRadius,
        autoplay,
        autoplaySpeed,
        arrowColor,
        rowGap,
        columnGap,
        contentPadding,
        backgroundType,
        backgroundColor,
        backgroundImage,
        backgroundPosition,
        backgroundSize,
        backgroundRepeat,
        backgroundImageColor,
        backgroundOpacity,
        borderStyle,
        borderWidth ,
        borderRadius,
        borderColor,
        stack,
    } = attributes

    const NextArrow = ( ) => {
        return <button type='button' data-role='none' className='slick-next slick-arrow' aria-label='Next' tabIndex='0' role='button' style={{ 'borderColor' : arrowColor, 'borderRadius' : arrowBorderRadius, 'borderWidth' : arrowBorderSize }}>
                { UAGB_Block_Icons.carousel_right }</button>
    }

    const PrevArrow = ( ) => {
        return <button type='button' data-role='none' className='slick-prev slick-arrow' aria-label='Previous' tabIndex='0' role='button' style={{ 'borderColor' : arrowColor, 'borderRadius' : arrowBorderRadius, 'borderWidth' : arrowBorderSize }}>
                { UAGB_Block_Icons.carousel_left }</button>
    }
    
    let dots = ( "dots" == arrowDots || "arrows_dots" == arrowDots ) ? true : false
    let arrows = ( "arrows" == arrowDots || "arrows_dots" == arrowDots ) ? true : false

    const settings = {
        slidesToShow : columns,
        slidesToScroll : 1,
        autoplaySpeed : autoplaySpeed,
        autoplay : autoplay,
        infinite : infiniteLoop,
        pauseOnHover : pauseOnHover,
        speed : transitionSpeed,
        arrows : arrows,
        dots : dots,
        rtl : false,
        draggable: false,
        nextArrow: <NextArrow arrowSize={arrowSize}/>,
        prevArrow: <PrevArrow arrowSize={arrowSize}/>,
        responsive : [
            {
                breakpoint : 1024,
                settings : {
                    slidesToShow : tcolumns,
                    slidesToScroll : 1,
                }
            },
            {
                breakpoint : 767,
                settings : {
                    slidesToShow : mcolumns,
                    slidesToScroll : 1,
                }
            }
        ]
    } 

    return 	<div className={ classnames(
                className,
                "uagb-slick-carousel uagb-tm__arrow-outside",
                `uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
                `uagb-block-${ props.clientId.substr( 0, 8 ) }`
            ) }
            >
                <Slider
                    className={ classnames(
                        "is-carousel",
                        `uagb-tm__columns-${ columns }`,
                        "uagb-tm__items"
                    ) }
                    {...settings}
                >
                    { test_block.map( ( test, index ) =>

                        <div className = { classnames(
                            "uagb-testimonial__wrap",
                            ...PositionClasses( attributes ),
                        ) } key ={ "wrap-"+index } >
                            <div className = "uagb-tm__content" key ={ "tm_content-"+index }>
                                <div className = "uagb-tm__overlay"></div>
                                { (imagePosition == "top" || imagePosition == "left" ) && <TestimonialImage  attributes={attributes}  index_value = {index} /> }

                                <div className ="uagb-tm__text-wrap">
                                    {  // Get description.
                                        <>
                                            <div className = "uagb-testinomial-text-wrap" key={"text-wrap-"+index}>
                                                <Description attributes={attributes} setAttributes = { setAttributes } props = { props }  index_value = {index}/>
                                            </div>
                                        </>
                                    }
                                        <div className ="uagb-tm__meta-inner">

                                            { (imagePosition == "bottom" ) && <TestimonialImage  attributes={attributes} index_value = {index} /> }

                                            { 
                                                <>
                                                    <div className = "uagb-testimonial-details" key={"tm_wraps-"+index}>
                                                        <AuthorName attributes={attributes} setAttributes = { setAttributes } props = { props } index_value = {index}/>
                                                        <Company attributes={attributes} setAttributes = { setAttributes } props = { props }  index_value = {index}/>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </div>
                                { ( imagePosition == "right" ) && <TestimonialImage  attributes={attributes}  index_value = {index} /> }
                            </div>
                        </div>
                    )}
                </Slider>
            </div>

}
export default testimonialRender