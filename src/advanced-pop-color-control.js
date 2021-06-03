/**
 * Advanced Color Control.
 *
 */

/**
 * Import Icons
 */
 import cIcons from './uagb-color-icons';
 import UagbColorPicker from './uagb-color-picker';
 import hexToRGBA from './hex-to-rgba';
 import get from 'lodash/get';
 import map from 'lodash/map';
 
 /**
  * Internal block libraries
  */
 import { __, sprintf } from '@wordpress/i18n';
 const {
     Component,
 } = wp.element;
 const {
     Button,
     Popover,
     ColorIndicator,
     Tooltip,
     Dashicon,
 } = wp.components;
 const {
     withSelect,
 } = wp.data;
 const {
    ColorPalette,
} = wp.blockEditor
 /**
  * Build the Measure controls
  * @returns {object} Measure settings.
  */
 class AdvancedPopColorControl extends Component {
     constructor() {
         super( ...arguments );
         this.onChangeState = this.onChangeState.bind( this );
         this.onChangeComplete = this.onChangeComplete.bind( this );
         this.unConvertOpacity = this.unConvertOpacity.bind( this );
         this.state = {
             alpha: false === this.props.alpha ? false : true,
             isVisible: false,
             colors: [],
             classSat: 'first',
             currentColor: '',
             inherit: false,
             currentOpacity: this.props.opacityValue !== undefined ? this.props.opacityValue : 1,
             isPalette: ( ( this.props.colorValue && this.props.colorValue.startsWith( 'palette' ) ) || ( this.props.colorDefault && this.props.colorDefault.startsWith( 'palette' ) ) ? true : false ),
         };
     }
     render() {
         const toggleVisible = () => {
             this.setState( { isVisible: true } );
         };
         const toggleClose = () => {
             if ( this.state.isVisible === true ) {
                 this.setState( { isVisible: false } );
             }
         };
         const convertOpacity = ( value ) => {
             let val = 1;
             if ( value ) {
                 val = value / 100;
             }
             return val;
         };
         const convertedOpacityValue = ( 100 === this.props.opacityUnit ? convertOpacity( this.props.opacityValue ) : this.props.opacityValue );
         const colorVal = ( this.state.currentColor ? this.state.currentColor : this.props.colorValue );
         let currentColorString = ( this.state.isPalette && this.props.colors && this.props.colors[ parseInt( colorVal.slice( -1 ), 10 ) - 1 ] ? this.props.colors[ parseInt( colorVal.slice( -1 ), 10 ) - 1 ].color : colorVal );
         if ( '' === currentColorString ) {
             currentColorString = this.props.colorDefault;
         }
         if ( this.props.onOpacityChange && ! this.state.isPalette ) {
             currentColorString = hexToRGBA( ( undefined === currentColorString ? '' : currentColorString ), ( convertedOpacityValue !== undefined && convertedOpacityValue !== '' ? convertedOpacityValue : 1 ) );
         }
         return (
             <div className="uagb-color-popover-container components-base-control new-uagb-advanced-colors">
                 <div className="uagb-advanced-color-settings-container">
                     { this.props.label && (
                         <h2 className="uagb-beside-color-label">{ this.props.label }</h2>
                     ) }
                     { this.props.colorValue && this.props.colorValue !== this.props.colorDefault && (
                         <Tooltip text={ __( 'Clear' ) }>
                             <Button
                                 className="components-color-palette__clear"
                                 type="button"
                                 onClick={ () => {
                                     this.setState( { currentColor: this.props.colorDefault, isPalette: ( this.props.colorDefault && this.props.colorDefault.startsWith( 'palette' ) ? true : false ) } );
                                     this.props.onColorChange( this.props.colorDefault ? this.props.colorDefault : undefined );
                                     if ( this.props.onColorClassChange ) {
                                         this.props.onColorClassChange( '' );
                                     }
                                 } }
                                 isSmall
                             >
                                 <Dashicon icon="image-rotate" />
                             </Button>
                         </Tooltip>
                     ) }
                     { ( !this.props.colorValue ) && 
                    (<Button
                        className="uagb-spacing-reset"
                        type="button"
                        onClick={ () => {
                            this.setState( { currentColor: this.props.colorDefault, isPalette: ( this.props.colorDefault && this.props.colorDefault.startsWith( 'palette' ) ? true : false ) } );
                            this.props.onColorChange( this.props.colorDefault ? this.props.colorDefault : undefined );
                            if ( this.props.onColorClassChange ) {
                                this.props.onColorClassChange( '' );
                            }
                        } }
                        isSmall
                        isSecondary
                        disabled
                    >
                        <Dashicon icon="image-rotate" />
                    </Button>)
                }
                     <div className="uagb-beside-color-click">
                         { this.state.isVisible && (
                             <Popover position="top left" className="uagb-popover-color new-uagb-advanced-colors-pop" onClose={ toggleClose }>
                                 { this.state.classSat === 'first' && ! this.props.disableCustomColors && (
                                     <UagbColorPicker
                                         color={ currentColorString }
                                         onChange={ ( color ) => this.onChangeState( color, '' ) }
                                         onChangeComplete={ ( color ) => {
                                             this.onChangeComplete( color, '' );
                                             if ( this.props.onColorClassChange ) {
                                                 this.props.onColorClassChange( '' );
                                             }
                                         } }
                                     />
                                 ) }
                                 { this.state.classSat !== 'first' && ! this.props.disableCustomColors && (
                                     <UagbColorPicker
                                         color={ currentColorString }
                                         onChange={ ( color ) => this.onChangeState( color, '' ) }
                                         onChangeComplete={ ( color ) => {
                                             this.onChangeComplete( color, '' );
                                             if ( this.props.onColorClassChange ) {
                                                 this.props.onColorClassChange( '' );
                                             }
                                         } }
                                     />
                                 ) }
                                 { this.props.colors && (
                                    <ColorPalette
                                        color={ currentColorString }
                                        onChange={ ( color ) => this.onChangeState( color, '' ) }
                                        onChangeComplete={ ( color ) => {
                                                this.onChangeComplete( color, '' );
                                                if ( this.props.onColorClassChange ) {
                                                    this.props.onColorClassChange( '' );
                                                }
                                            } }
                                        clearable={false}
                                        disableCustomColors={true}
                                    />
                                 ) }
                             </Popover>
                         ) }
                         { this.state.isVisible && (
                             <Tooltip text={ __( 'Select Color' ) }>
                                 <Button className={ `uagb-color-icon-indicate ${ ( this.state.alpha ? 'uagb-has-alpha' : 'uagb-no-alpha' ) }` } onClick={ toggleClose }>
                                     <ColorIndicator className="uagb-advanced-color-indicate" colorValue={ currentColorString } />
                                     { '' === currentColorString && this.state.inherit && (
                                         <span className="color-indicator-icon">{ cIcons.inherit }</span>
                                     ) }
                                     { ( ( this.props.colorValue && this.props.colorValue.startsWith( 'palette' ) ) || ( this.props.colorDefault && this.props.colorDefault.startsWith( 'palette' ) ) ) && (
                                         <span className="color-indicator-icon">{ <Dashicon icon="admin-site" /> }</span>
                                     ) }
                                 </Button>
                             </Tooltip>
                         ) }
                         { ! this.state.isVisible && (
                             <Tooltip text={ __( 'Select Color' ) }>
                                 <Button className={ `uagb-color-icon-indicate ${ ( this.state.alpha ? 'uagb-has-alpha' : 'uagb-no-alpha' ) }` } onClick={ toggleVisible }>
                                     <ColorIndicator className="uagb-advanced-color-indicate" colorValue={ currentColorString } />
                                     { '' === currentColorString && this.state.inherit && (
                                         <span className="color-indicator-icon">{ cIcons.inherit }</span>
                                     ) }
                                     { ( ( this.props.colorValue && this.props.colorValue.startsWith( 'palette' ) ) || ( this.props.colorDefault && this.props.colorDefault.startsWith( 'palette' ) ) ) && (
                                         <span className="color-indicator-icon">{ <Dashicon icon="admin-site" /> }</span>
                                     ) }
                                 </Button>
                             </Tooltip>
                         ) }
                     </div>
                 </div>
             </div>
         );
     }
     unConvertOpacity( value ) {
         let val = 100;
         if ( value ) {
             val = value * 100;
         }
         return val;
     }
     onChangeState( color, palette ) {
         let opacity = ( 100 === this.props.opacityUnit ? 100 : 1 );
         let newColor;
         if ( palette ) {
             newColor = palette;
         } else if ( undefined !== color.rgb && undefined !== color.rgb.a && 1 !== color.rgb.a ) {
             if ( this.props.onOpacityChange ) {
                 newColor = color.hex;
                 opacity = ( 100 === this.props.opacityUnit ? this.unConvertOpacity( color.rgb.a ) : color.rgb.a );
             } else {
                 newColor = 'rgba(' + color.rgb.r + ',' + color.rgb.g + ',' + color.rgb.b + ',' + color.rgb.a + ')';
             }
         } else if ( undefined !== color.hex ) {
             newColor = color.hex;
         } else {
             newColor = color;
         }
         this.setState( { currentColor: newColor, currentOpacity: opacity, isPalette: ( palette ? true : false ) } );
         if ( undefined !== this.props.onChange ) {
             this.props.onChange( newColor );
         }
     }
     onChangeComplete( color, palette ) {
         let opacity = ( 100 === this.props.opacityUnit ? 100 : 1 );
         let newColor;
         if ( palette ) {
             newColor = palette;
         } else if ( undefined !== color.rgb && undefined !== color.rgb.a && 1 !== color.rgb.a ) {
             if ( this.props.onOpacityChange ) {
                 newColor = color.hex;
                 opacity = ( 100 === this.props.opacityUnit ? this.unConvertOpacity( color.rgb.a ) : color.rgb.a );
             } else {
                 newColor = 'rgba(' + color.rgb.r + ',' + color.rgb.g + ',' + color.rgb.b + ',' + color.rgb.a + ')';
             }
         } else if ( undefined !== color.hex ) {
             newColor = color.hex;
         } else {
             newColor = color;
         }
         this.setState( { currentColor: newColor, currentOpacity: opacity, isPalette: ( palette ? true : false ) } );
         if ( undefined !== this.props.onArrayChange ) {
             this.props.onArrayChange( newColor, opacity );
         } else {
             this.props.onColorChange( newColor );
             if ( undefined !== this.props.onOpacityChange ) {
                 setTimeout( () => {
                     this.props.onOpacityChange( opacity );
                 }, 50 );
             }
         }
     }
 }
 export default withSelect( ( select, ownProps ) => {
     const settings = select( 'core/block-editor' ).getSettings();
     const colors = get( settings, [ 'colors' ], [] );
     const disableCustomColors = ownProps.disableCustomColors === undefined ? settings.disableCustomColors : ownProps.disableCustomColors;
     return {
         colors,
         disableCustomColors,
     };
 } )( AdvancedPopColorControl );