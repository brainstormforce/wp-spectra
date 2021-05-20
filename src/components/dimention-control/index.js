/**
 * External dependencies
 */
 import classnames from 'classnames';
 import map from 'lodash/map';
 
 /**
  * Import Css
  */
  import './editor.scss';
 
 /**
  * WordPress dependencies
  */
 import { __, sprintf } from '@wordpress/i18n';
 import { withInstanceId } from '@wordpress/compose';
 import { Component, Fragment } from '@wordpress/element';
 import { ButtonGroup, Button, Tooltip, Dashicon } from '@wordpress/components';
 
 class DimensionsControl extends Component {
     constructor( props ) {
         super( ...arguments );
         this.onChangeTop = this.onChangeTop.bind( this );
         this.onChangeRight = this.onChangeRight.bind( this );
         this.onChangeBottom = this.onChangeBottom.bind( this );
         this.onChangeLeft = this.onChangeLeft.bind( this );
         this.onChangeAll = this.onChangeAll.bind( this );
         this.onChangeUnits = this.onChangeUnits.bind( this );
         this.onChangeSize = this.onChangeSize.bind( this );
     }
 
     onChangeTop( value, device ) {
         if ( this.props.type === 'padding' ) {
             this.props.setAttributes( { [ 'paddingTop' ]: value } );
         } else {
             this.props.setAttributes( { [ 'marginTop' ]: value } );
         }
     }
 
     onChangeRight( value, device ) {
         if ( this.props.type === 'padding' ) {
             this.props.setAttributes( { [ 'paddingRight' ]: value } );
         } else {
             this.props.setAttributes( { [ 'marginRight' ]: value } );
         }
     }
 
     onChangeBottom( value, device ) {
         if ( this.props.type === 'padding' ) {
             this.props.setAttributes( { [ 'paddingBottom' ]: value } );
         } else {
             this.props.setAttributes( { [ 'marginBottom' ]: value } );
         }
     }
 
     onChangeLeft( value, device ) {
         if ( this.props.type === 'padding' ) {
             this.props.setAttributes( { [ 'paddingLeft' ]: value } );
         } else {
             this.props.setAttributes( { [ 'marginLeft' ]: value } );
         }
     }
 
     onChangeAll( value, device ) {
         if ( this.props.type === 'padding' ) {
             this.props.setAttributes( { [ 'paddingTop' ]: value, [ 'paddingRight' ]: value, [ 'paddingBottom' ]: value, [ 'paddingLeft' ]: value } );
         } else {
             this.props.setAttributes( { [ 'marginTop' ]: value, [ 'marginRight' ]: value, [ 'marginBottom' ]: value, [ 'marginLeft' ]: value } );
         }
     }
 
     onChangeUnits( value ) {
         if ( this.props.type === 'padding' ) {
             this.props.setAttributes( { paddingUnit: value } );
         } else {
             this.props.setAttributes( { marginUnit: value } );
         }
 
     }
 
     onChangeSize( value, size ) {
         if ( this.props.type === 'padding' ) {
             this.props.setAttributes( { paddingSyncUnits: true } );
             this.props.setAttributes( { paddingSize: value } );
             if ( size ) {
                 if ( size < 0 ) {
                     size = '';
                 }
                 this.props.setAttributes( { paddingTop: size, paddingRight: size, paddingBottom: size, paddingLeft: size, paddingUnit: 'px' } );
             }
         } else {
             this.props.setAttributes( { marginSize: value } );
             if ( size ) {
                 if ( size < 0 ) {
                     size = '';
                 }
                 this.props.setAttributes( { marginTop: size, marginRight: 0, marginBottom: size, marginLeft: 0, marginUnit: 'px' } );
             }
         }
 
     }
 
     render() {
         const {
             help,
             instanceId,
             label = __( 'Margin', 'ultimate-addons-for-gutenberg' ),
             type = 'margin',
             unit,
             valueBottom,
             valueLeft,
             valueRight,
             valueTop,
             setAttributes,
         } = this.props;
 
         const { paddingSize, marginSize } = this.props.attributes;
 
         const classes = classnames(
             'components-base-control',
             'components-uagb-dimensions-control', {
             }
         );
 
         const id = `inspector-uagb-dimensions-control-${ instanceId }`;
 
         const onChangeTopValue = ( event ) => {
             const newValue = ( event.target.value === '' ) ? undefined : Number( event.target.value );
 
                 this.onChangeTop( newValue );
         };
 
         const onChangeRightValue = ( event ) => {
             const newValue = ( event.target.value === '' ) ? undefined : Number( event.target.value );
 
                 this.onChangeRight( newValue );
         };
 
         const onChangeBottomValue = ( event ) => {
             const newValue = ( event.target.value === '' ) ? undefined : Number( event.target.value );
 
                 this.onChangeBottom( newValue );
         };
 
         const onChangeLeftValue = ( event ) => {
             const newValue = ( event.target.value === '' ) ? undefined : Number( event.target.value );
 
                 this.onChangeLeft( newValue );
         };
 
         const unitSizes = [
             {
                 /* translators: a unit of size (px) for css markup */
                 name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
                 unitValue: 'px',
             },
             {
                 /* translators: a unit of size (em) for css markup */
                 name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
                 unitValue: 'em',
             },
             {
                 /* translators: a unit of size (vw) for css markup */
                 name: __( 'Viewport width', 'ultimate-addons-for-gutenberg' ),
                 unitValue: 'vw',
             },
             {
                 /* translators: a unit of size (vh) for css markup */
                 name: __( 'Viewport height', 'ultimate-addons-for-gutenberg' ),
                 unitValue: 'vh',
             },
             {
                 /* translators: a unit of size for css markup */
                 name: __( 'Percentage', 'ultimate-addons-for-gutenberg' ),
                 unitValue: '%',
             },
         ];
 
         return (
             <Fragment>
                 <div className={ classes }>
                         <Fragment>
                             <div className="components-uagb-dimensions-control__header">
                                 { label && <p className={ 'components-uagb-dimensions-control__label' }>{ label }</p> }
                                 <div className="components-uagb-dimensions-control__actions">
                                     <ButtonGroup className="components-uagb-dimensions-control__units" aria-label={ __( 'Select Units', 'ultimate-addons-for-gutenberg' ) }>
                                         { map( unitSizes, ( { unitValue, name } ) => (
                                             <Tooltip text={ sprintf(
                                                 /* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
                                                 __( '%s units', 'ultimate-addons-for-gutenberg' ),
                                                 name
                                             ) }>
                                                 <Button
                                                     key={ unitValue }
                                                     className={ 'components-uagb-dimensions-control__units--' + name }
                                                     isSmall
                                                     isPrimary={ unit === unitValue }
                                                     isSecondary={ unit !== unitValue }
                                                     aria-pressed={ unit === unitValue }
                                                     aria-label={ sprintf(
                                                         /* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
                                                         __( '%s units', 'ultimate-addons-for-gutenberg' ),
                                                         name
                                                     ) }
                                                     onClick={ () => this.onChangeUnits( unitValue ) }
                                                 >
                                                     { unitValue }
                                                 </Button>
                                             </Tooltip>
                                         ) ) }
                                     </ButtonGroup>
                                     { ( this.props.valueTop && this.props.valueRight && this.props.valueBottom && this.props.valueLeft ) && (
                                     <Button
                                         className="uagb-spacing-reset"
                                         type="button"
                                         onClick={ () => this.onChangeSize( 'no', -1 ) }
                                         isSmall
                                         isSecondary
                                     >
                                        <Dashicon icon="redo" />
                                     </Button>
                                     ) }
                                 </div>
                             </div>
                            
                            <Fragment>
                                <div className="components-uagb-dimensions-control__inputs">
                                    <input
                                        className="components-uagb-dimensions-control__number"
                                        type="number"
                                        onChange={ onChangeTopValue }
                                        aria-label={ sprintf(
                                            /* translators: %s: values associated with CSS syntax, 'Margin', 'Padding' */
                                            __( '%s top', 'ultimate-addons-for-gutenberg' ),
                                            label
                                        ) }
                                        aria-describedby={ !! help ? id + '__help' : undefined }
                                        value={ valueTop !== '' ? valueTop : '' }
                                        min={ type === 'padding' ? 0 : undefined }
                                        data-device-type=""
                                    />
                                    <input
                                        className="components-uagb-dimensions-control__number"
                                        type="number"
                                        onChange={ onChangeRightValue }
                                        aria-label={ sprintf(
                                            /* translators: %s: values associated with CSS syntax, 'Margin', 'Padding' */
                                            __( '%s right', 'ultimate-addons-for-gutenberg' ),
                                            label
                                        ) }
                                        aria-describedby={ !! help ? id + '__help' : undefined }
                                        value={ valueRight !== '' ? valueRight : '' }
                                        min={ type === 'padding' ? 0 : undefined }
                                        data-device-type=""
                                    />
                                    <input
                                        className="components-uagb-dimensions-control__number"
                                        type="number"
                                        onChange={ onChangeBottomValue }
                                        aria-label={ sprintf(
                                            /* translators: %s:  values associated with CSS syntax, 'Margin', 'Padding' */
                                            __( '%s bottom', 'ultimate-addons-for-gutenberg' ),
                                            label
                                        ) }
                                        aria-describedby={ !! help ? id + '__help' : undefined }
                                        value={ valueBottom !== '' ? valueBottom : '' }
                                        min={ type === 'padding' ? 0 : undefined }
                                        data-device-type=""
                                    />
                                    <input
                                        className="components-uagb-dimensions-control__number"
                                        type="number"
                                        onChange={ onChangeLeftValue }
                                        aria-label={ sprintf(
                                            /* translators: %s:  values associated with CSS syntax, 'Margin', 'Padding' */
                                            __( '%s left', 'ultimate-addons-for-gutenberg' ), label
                                        ) }
                                        aria-describedby={ !! help ? id + '__help' : undefined }
                                        value={ valueLeft !== '' ? valueLeft : '' }
                                        min={ type === 'padding' ? 0 : undefined }
                                        data-device-type=""
                                    />
                                </div>
                            </Fragment>
                                        
                             <div className="components-uagb-dimensions-control__input-labels">
                                 <span className="components-uagb-dimensions-control__number-label">{ __( 'Top', 'ultimate-addons-for-gutenberg' ) }</span>
                                 <span className="components-uagb-dimensions-control__number-label">{ __( 'Right', 'ultimate-addons-for-gutenberg' ) }</span>
                                 <span className="components-uagb-dimensions-control__number-label">{ __( 'Bottom', 'ultimate-addons-for-gutenberg' ) }</span>
                                 <span className="components-uagb-dimensions-control__number-label">{ __( 'Left', 'ultimate-addons-for-gutenberg' ) }</span>
                                 <span className="components-uagb-dimensions-control__number-label-blank"></span>
                             </div>
                         </Fragment>
                </div>
            </Fragment>
         );
     }
 }
 
 export default withInstanceId( DimensionsControl );