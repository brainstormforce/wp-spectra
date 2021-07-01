/**
 * Border component.
 *
 */
 import { __ } from '@wordpress/i18n';
 import Range from '../../components/range/Range.js';
 import AdvancedPopColorControl from '../../advanced-pop-color-control';
 import { SelectControl} from '@wordpress/components';

 const Border = props => {

    const { 
        setAttributes,
        borderColor,
        borderWidth,
        borderRadius,
        borderStyle,
        borderHoverColor,
    } = props
    
    var advancedControls;

        advancedControls = (
            <>
            <div className="uag-border-wrap">
            <label className="uag-border-label">{ borderStyle.label }</label>
                <SelectControl
                    value={ borderStyle.value }
                    onChange={ ( value ) => setAttributes( { borderStyle: value } ) }
                    options={ [
                        { value: "none", label: __( "None", 'ultimate-addons-for-gutenberg' ) },
                        { value: "solid", label: __( "Solid", 'ultimate-addons-for-gutenberg' ) },
                        { value: "dotted", label: __( "Dotted", 'ultimate-addons-for-gutenberg' ) },
                        { value: "dashed", label: __( "Dashed", 'ultimate-addons-for-gutenberg' ) },
                        { value: "double", label: __( "Double", 'ultimate-addons-for-gutenberg' ) },
                        { value: "groove", label: __( "Groove", 'ultimate-addons-for-gutenberg' ) },
                        { value: "inset", label: __( "Inset", 'ultimate-addons-for-gutenberg' ) },
                        { value: "outset", label: __( "Outset", 'ultimate-addons-for-gutenberg' ) },
                        { value: "ridge", label: __( "Ridge", 'ultimate-addons-for-gutenberg' ) },
                    ] }
                />
            </div>
            { 'none' !== borderStyle.value && (
            <div className="uag-border-width">
                <Range 
                    label={ borderWidth.label }
                    value={ borderWidth.value }
                    onChange={ ( value ) => setAttributes( { borderWidth: value } ) }
                    min={ -100 }
                    max={ 100 }
                    displayUnit= { false }
                />
            </div>
            ) }
            { 'none' !== borderStyle.value && (
            <div className="uag-border-radius">
                <Range 
                    label={ borderRadius.label }
                    value={ borderRadius.value }
                    onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
                    min={ -100 }
                    max={ 100 } 
                    displayUnit= { false }
                />
            </div>
            ) }
            { 'none' !== borderStyle.value && (
                <AdvancedPopColorControl
                    label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
                    colorValue={ ( borderColor.value ) }
                    colorDefault={ '' }
                    onColorChange={ value => setAttributes( { borderColor: value } ) }
                    onColorClassChange={ value => setAttributes( { colorClass: value } ) }
                />
            ) }
            { 'none' !== borderStyle.value && (
                <AdvancedPopColorControl
                    label={ __( 'Hover Color', 'ultimate-addons-for-gutenberg' ) }
                    colorValue={ ( borderHoverColor.value ) }
                    colorDefault={ '' }
                    onColorChange={ value => setAttributes( { borderHoverColor: value } ) }
                    onColorClassChange={ value => setAttributes( { colorClass: value } ) }
                />
            ) }
            </>
        );

    return(
        <div className='uag-typography-option-actions'>
            <span>{ props.label }</span>
            { advancedControls }
        </div>
    )
}

export default Border