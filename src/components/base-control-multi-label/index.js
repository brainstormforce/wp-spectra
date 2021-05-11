/**
 * External dependencies
 */

 const BaseControlMultiLabel = props => {
     return (
         <div className="uagb-base-control-multi-label">
             <div className="uagb-base-control-multi-label__label components-base-control__label">{ props.label }</div>             
             <div className="uagb-base-control-multi-label__units">
                 { props.units.length > 1 &&
                     props.units.map( ( unit, i ) => {
                         return (
                             <button
                                 key={ i }
                                 className={ props.unit === unit ? 'is-active' : '' }
                                 onClick={ () => props.onChangeUnit( unit ) }
                             >
                                 { unit }
                             </button>
                         )
                     } )
                 }
                 { props.afterButton }
             </div>
         </div>
     )
 }
 
 BaseControlMultiLabel.defaultProps = {
     label: '',
     units: [ 'px' ],
     unit: 'px',
     onChangeUnit: () => {},
     screens: [ 'desktop' ],
     onChangeScreen: () => {},
     afterButton: null,
 }
 
 export default BaseControlMultiLabel