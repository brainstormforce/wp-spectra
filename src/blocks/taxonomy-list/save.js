/**
 * BLOCK: Taxonomy List - Save Block
 */

import classnames from "classnames"

const { Fragment } = wp.element


 export default function save( props ) {
    const { className } = props

    const {
        block_id,
        postType,       
        taxonomyType,        
        layout,
        seperatorStyle, 
        noTaxDisplaytext     

    } = props.attributes

    let allTaxonomy = uagb_blocks_info.all_taxonomy
	let currentTax = allTaxonomy[postType]
	let categoriesList = []
    let rest_base = ""
    
    if ( "undefined" != typeof currentTax ) {

		if ( "undefined" != typeof currentTax["taxonomy"][taxonomyType] ) {
			rest_base = ( currentTax["taxonomy"][taxonomyType]["rest_base"] == false || currentTax["taxonomy"][taxonomyType]["rest_base"] == null ) ? currentTax["taxonomy"][taxonomyType]["name"] : currentTax["taxonomy"][taxonomyType]["rest_base"]
		}

		if ( "" != taxonomyType ) {
			if ( "undefined" != typeof currentTax["terms"] && "undefined" != typeof currentTax["terms"][taxonomyType] ) {
				categoriesList = currentTax["terms"][taxonomyType]
			}
		}
    }
    
     return (
         <Fragment>
             <div className={ classnames(
					className,
					"uagb-taxonomy__outer-wrap",
					`uagb-block-${block_id}`
					) }>
						<div className={ classnames(
						className,
						"uagb-taxonomy-wrap",
						`uagb-layout-${layout}`
						) }>

							{"grid" === layout && ( 
								categoriesList.map((p,index)=>
									<div className="uagb-taxomony-box">
										<a class="uagb-tax-link" href={p.link}>
											<h4 class="uagb-tax-title">{p.name}</h4>
											<div class="uagb-tax-count">{p.count} Documents</div>
										</a>
									</div>						
								)
							)}

							{"list" === layout && ( 
								<ul className="uagb-list-wrap">
									{categoriesList.map((p,index)=>										
										<li className="uagb-tax-list">
											<div className="uagb-tax-link-wrap">
												<a class="uagb-tax-link" href={p.link}>
													{p.name} - {p.count} Documents
												</a>
											</div>

											{"none" != seperatorStyle && (
												<div class="uagb-tax-separator-wrap">
													<div class="uagb-tax-separator"></div>
												</div>
											)}

										</li>
									)}
								</ul>
							)}
						</div>
							{/* If no Taxonomy is available. */}
							{categoriesList == "" && (
								<div class="uagb-tax-not-available">{noTaxDisplaytext}</div>
							)}

					</div>	
         </Fragment>
     )
 }