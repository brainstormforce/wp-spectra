/**
 * Internal dependencies
 */
 import BaseControlMultiLabel from '../base-control-multi-label'
 import SVGIconBottom from './images/bottom.svg'
 import SVGIconHorizontalCenter from './images/horizontal-center.svg'
 import SVGIconLeft from './images/left.svg'
 import SVGIconRight from './images/right.svg'
 import SVGIconStretch from './images/stretch.svg'
 import SVGIconTop from './images/top.svg'
 import SVGIconVerticalCenter from './images/vertical-center.svg'
 import Button from '../button'
 
 /**
  * External dependencies
  */
 import classnames from 'classnames'
 
 /**
  * WordPress dependencies
  */
 import {
     BaseControl, ButtonGroup,
 } from '@wordpress/components';
 import { __ } from '@wordpress/i18n';
 
 const FLEX_HORIZONTAL_ALIGN_OPTIONS = [
     {
         value: 'flex-start',
         title: __( 'Align Left','ultimate-addons-for-gutenberg' ),
         icon: <SVGIconLeft />,
     },
     {
         value: 'center',
         title: __( 'Align Center','ultimate-addons-for-gutenberg' ),
         icon: <SVGIconHorizontalCenter />,
     },
     {
         value: 'flex-end',
         title: __( 'Align Right','ultimate-addons-for-gutenberg' ),
         icon: <SVGIconRight />,
     },
 ]
 
 const FLEX_VERTICAL_ALIGN_STRETCH_OPTIONS = [
     {
         value: 'flex-start',
         title: __( 'Align Top','ultimate-addons-for-gutenberg' ),
         icon: <SVGIconTop />,
     },
     {
         value: 'center',
         title: __( 'Align Center','ultimate-addons-for-gutenberg' ),
         icon: <SVGIconVerticalCenter />,
     },
     {
         value: 'flex-end',
         title: __( 'Align Bottom','ultimate-addons-for-gutenberg' ),
         icon: <SVGIconBottom />,
     },
     {
         value: 'stretch',
         title: __( 'Stretch','ultimate-addons-for-gutenberg' ),
         icon: <SVGIconStretch />,
     },
 ]
 
 const FLEX_VERTICAL_ALIGN_OPTIONS = [
     {
         value: 'flex-start',
         title: __( 'Align Top','ultimate-addons-for-gutenberg' ),
         icon: <SVGIconTop />,
     },
     {
         value: 'center',
         title: __( 'Align Center','ultimate-addons-for-gutenberg' ),
         icon: <SVGIconVerticalCenter />,
     },
     {
         value: 'flex-end',
         title: __( 'Align Bottom','ultimate-addons-for-gutenberg' ),
         icon: <SVGIconBottom />,
     },
 ]
 
 const CONTROLS = {
     'flex-horizontal': FLEX_HORIZONTAL_ALIGN_OPTIONS,
     'flex-vertical': FLEX_VERTICAL_ALIGN_OPTIONS,
     'flex-vertical-with-stretch': FLEX_VERTICAL_ALIGN_STRETCH_OPTIONS,
 }
 
 const AdvancedToolbarControl = props => {
     const controls = typeof props.controls === 'string' ? CONTROLS[ props.controls ] : props.controls
 
     const toolbarClasses = classnames( {
         'uagb-toolbar--full-width': props.fullwidth,
         'uagb-toolbar--multiline': props.multiline,
     } )
 
     return (
         <BaseControl
             help={ props.help }
             className={ classnames( 'uagb-advanced-toolbar-control', props.className ) }
         >
             <BaseControlMultiLabel
                 label={ props.label }
                 units={ props.units }
                 unit={ props.unit }
                 onChangeUnit={ props.onChangeUnit }
                 screens={ props.screens }
             />
             <ButtonGroup
                children={
					controls.map( ( option, index ) => {
						const controlProps = {
							...option,
							onClick: () => {
								// If toggle only, prevent buttons from being unselected.
								if ( props.isToggleOnly && option.value === props.value ) {
									return
								}
								props.onChange( option.value !== props.value ? option.value : '' )
							},
							isPrimary: props.value === option.value,
							isSmall: props.isSmall,
							children: ! option.icon ? option.custom || <span className="uagb-advanced-toolbar-control__text-button">{ option.title }</span> : null,
						}
						return <Button key={ index } { ...controlProps } />
					} )
				}
				className={ toolbarClasses }
			/>
         </BaseControl>
     )
 }
 
 AdvancedToolbarControl.defaultProps = {
     onChange: () => {},
     onChangeUnit: () => {},
     help: '',
     className: '',
     units: [ 'px' ],
     unit: 'px',
     screens: [ 'desktop' ],
     value: '',
     controls: [],
     multiline: false,
     fullwidth: true,
     isSmall: false,
     isToggleOnly: false,
 }
 
 export default AdvancedToolbarControl