/**
 * WordPress dependencies
 */
 import { __ } from '@wordpress/i18n'

 /**
  * External dependencies
  */
 import AdvancedToolbarControl from '../advanced-toolbar-control'
 import { omit } from 'lodash'
 import classnames from 'classnames'
 
 const ALIGN_OPTIONS = [
     {
         value: 'left',
         title: __( 'Align Left','ultimate-addons-for-gutenberg'),
         icon: 'editor-alignleft',
     },
     {
         value: 'center',
         title: __( 'Align Center','ultimate-addons-for-gutenberg'),
         icon: 'editor-aligncenter',
     },
     {
         value: 'right',
         title: __( 'Align Right','ultimate-addons-for-gutenberg'),
         icon: 'editor-alignright',
     },
     {
         value: 'justify',
         title: __( 'Justified','ultimate-addons-for-gutenberg'),
         icon: 'editor-justify',
     },
 ]
 
 const AlignButtonsControl = props => {
     const {
         justified,
         className,
     } = props
 
     return (
         <AdvancedToolbarControl
             { ...omit( props, [ 'justified' ] ) }
             className={ classnames( [ className, 'uagb-align-buttons-control' ] ) }
             controls={
                 ALIGN_OPTIONS.filter( option => {
                     return ! justified ? option.value !== 'justify' : true
                 } )
             }
         />
     )
 }
 
 AlignButtonsControl.defaultProps = {
     className: '',
     label: __( 'Align','ultimate-addons-for-gutenberg'),
     value: ALIGN_OPTIONS[ 0 ].value,
     justified: false,
 }
 
 export default AlignButtonsControl