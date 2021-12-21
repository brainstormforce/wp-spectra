import classnames from 'classnames';
import PositionClasses from '../price-list/classes';
import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import RestMenuImage from './components/RestMenuImage';
import Title from './components/Title';
import Price from './components/Price';
import Description from './components/Description';
import { select } from '@wordpress/data';

const Render = ( props ) => {
	props = props.parentProps;
	const { className, setAttributes, attributes } = props;

	// Setup the attributes.
	const { imagePosition } = attributes;

	const parentClientId = select(
		'core/block-editor'
	).getBlockHierarchyRootClientId( props.clientId );
	const parentAttributes = select( 'core/block-editor' ).getBlockAttributes(
		parentClientId
	);
	
	const position = ( parentAttributes ) ? ( ( parentAttributes.imagePosition ) ?  parentAttributes.imagePosition : imagePosition ) : imagePosition; // eslint-disable-line no-nested-ternary

	return (
		<div
			className={ classnames(
				className,
				'uagb-rest_menu__wrap',
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				...PositionClasses( attributes )
			) }
		>
			<Suspense fallback={ lazyLoader() }>
				<div className="uagb-rm__content">
					{ ( position === 'top' || position === 'left' ) && (
						<RestMenuImage attributes={ attributes } />
					) }
						{
							<>
							<div className="uagb-rm-details">
							{ position === 'right' && (
								<>
								<Price
									attributes={ attributes }
									setAttributes={ setAttributes }
									props={ props }
								/>
								<Title
									attributes={ attributes }
									setAttributes={ setAttributes }
									props={ props }
								/>
								<Description
									attributes={ attributes }
									setAttributes={ setAttributes }
									props={ props }
								/>
								</>
							) }
							{ ( position === 'top' || position === 'left' ) && (
								<>
								<Title
									attributes={ attributes }
									setAttributes={ setAttributes }
									props={ props }
								/>
								<Description
									attributes={ attributes }
									setAttributes={ setAttributes }
									props={ props }
								/>
								<Price
									attributes={ attributes }
									setAttributes={ setAttributes }
									props={ props }
								/>
								</>
							)}
							</div>
							</>
						}
					{ position === 'right' && (
						<RestMenuImage attributes={ attributes } />
					) }
				</div>
			</Suspense>
				<div className="uagb-rm__separator"></div>
		</div>
	);
};
export default React.memo( Render );
