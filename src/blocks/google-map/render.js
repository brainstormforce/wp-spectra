import React from "react";
import classnames from "classnames";

const Render = ( props ) => {

	props = props.parentProps;

	const {
		className,
		attributes: { height, zoom, address, language },
	} = props;

	return (
		<div
			className={ classnames(
				className,
				'uagb-google-map__wrap',
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`
			) }
		>
			<iframe
				className="uagb-google-map__iframe"
				title={ __( 'Google Map for ' + address ) }
				src={ url }
				style={ {
					height,
				} }>
			</iframe>
		</div>
		);



}

export default React.memo( Render );
