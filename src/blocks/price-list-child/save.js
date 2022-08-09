/**
 * BLOCK: Column - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import Title from './components/Title';
import Price from './components/Price';
import Description from './components/Description';
import PositionClasses from '../price-list/classes';
import RestMenuImage from './components/RestMenuImage';

export default function save( props ) {
	const { imagePosition, headingAlign } = props.attributes;

	return (
		<>
			<div
				className={ classnames(
					'uagb-rest_menu__wrap',
					...PositionClasses( props.attributes )
				) }
			>
				<div className="uagb-rm__content">
					{ ( imagePosition === 'top' || imagePosition === 'left' ) && (
						<RestMenuImage attributes={ props.attributes } />
					) }
						{
							<>
							<div className="uagb-rm-details">
							{ imagePosition === 'right' && (
								<>
								<Price
									attributes={ props.attributes }
									setAttributes="not_set"
									props={ props }
								/>
								<Title
									attributes={ props.attributes }
									setAttributes="not_set"
									props={ props }
								/>
								<Description
									attributes={ props.attributes }
									setAttributes="not_set"
									props={ props }
								/>
								</>
							) }
							{ ( imagePosition === 'top' || imagePosition === 'left' ) && (
								<>
								{ ( headingAlign === 'right' ) && (
								<Price
									attributes={ props.attributes }
									setAttributes="not_set"
									props={ props }
								/>
								)}
								<Title
									attributes={ props.attributes }
									setAttributes="not_set"
									props={ props }
								/>
								<Description
									attributes={ props.attributes }
									setAttributes="not_set"
									props={ props }
								/>
								{ ( headingAlign !== 'right' ) && (
								<Price
									attributes={ props.attributes }
									setAttributes="not_set"
									props={ props }
								/>
								)}
								</>
							)}
							</div>

							</>
						}
					{ imagePosition === 'right' && (
						<RestMenuImage attributes={ props.attributes } />
					) }
				</div>
					<div className="uagb-rm__separator"></div>
			</div>
		</>
	);
}
