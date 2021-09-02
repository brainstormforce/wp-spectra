// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"
// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
} from "@wordpress/block-editor"

import {
	PanelBody,
} from "@wordpress/components"
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "../../components/inspector-tabs/InspectorTab.js";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import Range from "../../components/range/Range.js";
import MultiButtonsControl from "../../components/multi-buttons-control";

const Settings = ( props ) => {
    props = props.parentProps;
    // Setup the attributes
	const {
		attributes,
		setAttributes,
		attributes: {
			rating,
			range,
			layout,
			align,
			size,
			gap,
			unmarkedColor,
			color,
			title,
			loadGoogleFonts,
			fontFamily,
			fontWeight,
			fontSubset,
			fontSizeType,
			fontSize,
			fontSizeMobile,
			fontSizeTablet,
			lineHeightType,
			lineHeight,
			lineHeightMobile,
			lineHeightTablet,
			titleColor,
			titleGap
		},
	} = props

	let loadTitleGoogleFonts;

	if( loadGoogleFonts == true ) {
		
		const hconfig = {
			google: {
				families: [ fontFamily + ( fontWeight ? ':' + fontWeight : '' ) ],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ hconfig }>
			</WebfontLoader>
		)
	}
    
    let alignmentOptions = [
        { value: "left", label: __( "Left", 'ultimate-addons-for-gutenberg' ) },
        { value: "center", label: __( "Center", 'ultimate-addons-for-gutenberg' ) },
        { value: "right", label: __( "Right", 'ultimate-addons-for-gutenberg' ) },
        { value: "full", label: __( "Full Width", 'ultimate-addons-for-gutenberg' ) },
    ];
	if ( 'stack' === layout ) {
		alignmentOptions = [
            { value: "left", label: __( "Left", 'ultimate-addons-for-gutenberg' ) },
            { value: "center", label: __( "Center", 'ultimate-addons-for-gutenberg' ) },
            { value: "right", label: __( "Right", 'ultimate-addons-for-gutenberg' ) },
        ];
		if ( 'full' === align ) {
			setAttributes( {
				align: 'left',
			} )
		}
	}

	/**
	 * Adds all Feneral tab controls.
	 */
	const generalSettings = (
        <PanelBody title={ __( "General", 'ultimate-addons-for-gutenberg' ) }>
            <MultiButtonsControl
                setAttributes={setAttributes}
                label={__(
                    "Range",
                    "ultimate-addons-for-gutenberg"
                )}
                data={{
                    value: range,
                    label: "range",
                }}
                options={ [
                    { value: "5", label: __( "1-5", 'ultimate-addons-for-gutenberg' ) },
                    { value: "10", label: __( "1-10", 'ultimate-addons-for-gutenberg' ) },
                ] }
            />
            <Range
                label={__(
                    "Rating",
                    "ultimate-addons-for-gutenberg"
                )}
                setAttributes={setAttributes}
                value={rating}
                onChange={(value) =>
                    setAttributes({ rating: value })
                }
                min={0}
                max={range}
                step={0.1}
                displayUnit = {false}
            />
           <MultiButtonsControl
                setAttributes={setAttributes}
                label={__(
                    "Layout",
                    "ultimate-addons-for-gutenberg"
                )}
                data={{
                    value: layout,
                    label: "layout",
                }}
                options={ [
                    { value: "inline", label: __( "Inline", 'ultimate-addons-for-gutenberg' ) },
                    { value: "stack", label: __( "Stack", 'ultimate-addons-for-gutenberg' ) },
                ] }
            />
             <MultiButtonsControl
                setAttributes={setAttributes}
                label={__(
                    "Alignment",
                    "ultimate-addons-for-gutenberg"
                )}
                data={{
                    value: align,
                    label: "align",
                }}
                options={ alignmentOptions }
            />
        </PanelBody>
    )
    const titleStyling =  (
        <PanelBody title={ __( "Title", 'ultimate-addons-for-gutenberg' ) } initialOpen={false}>
             <TypographyControl
                label={ __( "Typography", 'ultimate-addons-for-gutenberg' ) }
                attributes = { attributes }
                setAttributes = { setAttributes }
                loadGoogleFonts = { { value: loadGoogleFonts, label:'loadGoogleFonts'  } }
                fontFamily = { { value: fontFamily, label:'fontFamily'  } }
                fontWeight = { { value: fontWeight, label:'fontWeight'  } }
                fontSubset = { { value: fontSubset, label:'fontSubset'  } }
                fontSizeType = { { value: fontSizeType, label: 'fontSizeType' } }
                fontSize = { { value: fontSize, label:'fontSize'  } }
                fontSizeMobile = { { value: fontSizeMobile, label:'fontSizeMobile'  } }
                fontSizeTablet= { { value: fontSizeTablet, label:'fontSizeTablet'  } }
                lineHeightType = { { value: lineHeightType, label: 'lineHeightType' } }
                lineHeight = { { value: lineHeight, label:'lineHeight'  } }
                lineHeightMobile = { { value: lineHeightMobile, label:'lineHeightMobile'  } }
                lineHeightTablet= { { value: lineHeightTablet, label:'lineHeightTablet'  } }
            />
            <AdvancedPopColorControl
                label={__(
                    "Color",
                    "ultimate-addons-for-gutenberg"
                )}
                colorValue={titleColor}
                onColorChange={(value) =>
                    setAttributes({ titleColor: value })
                }
            />
            <Range
                label={__(
                    "Gap",
                    "ultimate-addons-for-gutenberg"
                )}
                setAttributes={setAttributes}
                value={titleGap}
                onChange={(value) =>
                    setAttributes({ titleGap: value })
                }
                min={0}
                max={50}
                displayUnit = {false}
            />
        </PanelBody>
    );
	const starStyling =  (
        <PanelBody title={ __( "Star", 'ultimate-addons-for-gutenberg' ) } initialOpen={true}>
            <AdvancedPopColorControl
                label={__(
                    "Color",
                    "ultimate-addons-for-gutenberg"
                )}
                colorValue={color}
                onColorChange={(value) =>
                    setAttributes({ color: value })
                }
            />
            <AdvancedPopColorControl
                label={__(
                    "Unmarked Color",
                    "ultimate-addons-for-gutenberg"
                )}
                colorValue={unmarkedColor}
                onColorChange={(value) =>
                    setAttributes({ unmarkedColor: value })
                }
            />
            <Range
                label={__(
                    "Size",
                    "ultimate-addons-for-gutenberg"
                )}
                setAttributes={setAttributes}
                value={size}
                onChange={(value) =>
                    setAttributes({ size: value })
                }
                min={0}
                max={100}
                displayUnit = {false}
            />
            <Range
                label={__(
                    "Gap",
                    "ultimate-addons-for-gutenberg"
                )}
                setAttributes={setAttributes}
                value={gap}
                onChange={(value) =>
                    setAttributes({ gap: value })
                }
                min={0}
                max={50}
                displayUnit = {false}
            />
        </PanelBody>
    );
    return (
        <>
            <InspectorControls>
                <InspectorTabs tabs={["general", "style", "advance"]}>
                <InspectorTab {...UAGTabs.general}>
                    { generalSettings }
                </InspectorTab>
                <InspectorTab {...UAGTabs.style}>
                { starStyling }
                { '' !== title && titleStyling }
                </InspectorTab>
                <InspectorTab {...UAGTabs.advance} parentProps = {props}>
                </InspectorTab>
            </InspectorTabs>
            </InspectorControls>
            { loadTitleGoogleFonts }
        </>
	);
}
export default React.memo( Settings );