import renderSVG from '@Controls/renderIcon';

const Icon = ( props ) => {
	const { attributes } = props;
	const { iconView, iconShape } = attributes

	return (
		<>
			{ ( attributes.showIcon ) && (
				<div className="uagb-ifb-icon-wrap">
					<div className={ ( iconView === 'none' ) ? ( 'uagb-iconbox-icon-wrap' ) : ( ( iconShape === 'Circle' ) ? ( 'uagb-iconbox-icon-wrap uagb-infobox-shape-circle' ) : ( 'uagb-iconbox-icon-wrap uagb-infobox-shape-squre' ) ) }>
						{ renderSVG( attributes.icon ) }
					</div>
				</div>
			)}
		</>
	);
};
export default Icon;
