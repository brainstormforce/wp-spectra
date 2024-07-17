/**
 * BLOCK: Column - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import Title from './components/Title';
import Price from './components/Price';
import Description from './components/Description';
import RestMenuImage from './components/RestMenuImage';

export default function save( props ) {
	const { imagePosition, headingAlign, imgAlign, showImage } = props.attributes;

	return (
		<div className={ classnames( 'uagb-rest_menu__wrap' ) }>
			{ imgAlign === 'top' && (
				<>
					{ showImage && <RestMenuImage attributes={ props.attributes } /> }
					<div className="uagb-rm__content">
						{ headingAlign === 'right' && (
							<Price attributes={ props.attributes } setAttributes="not_set" props={ props } />
						) }
						<div className="uagb-rm-details">
							<Title attributes={ props.attributes } setAttributes="not_set" props={ props } />
							<Description attributes={ props.attributes } setAttributes="not_set" props={ props } />
							{ headingAlign === 'center' && (
								<Price attributes={ props.attributes } setAttributes="not_set" props={ props } />
							) }
						</div>
						{ headingAlign === 'left' && (
							<Price attributes={ props.attributes } setAttributes="not_set" props={ props } />
						) }
					</div>
					<div className="uagb-rm__separator"></div>
				</>
			) }
			{ imgAlign === 'side' && (
				<>
					<div className="uagb-rm__content">
						{ imagePosition === 'left' && showImage && <RestMenuImage attributes={ props.attributes } /> }
						{ imagePosition === 'right' && (
							<Price attributes={ props.attributes } setAttributes="not_set" props={ props } />
						) }
						<div className="uagb-rm-details">
							<Title attributes={ props.attributes } setAttributes="not_set" props={ props } />
							<Description attributes={ props.attributes } setAttributes="not_set" props={ props } />
						</div>
						{ imagePosition === 'left' && (
							<Price attributes={ props.attributes } setAttributes="not_set" props={ props } />
						) }
						{ imagePosition === 'right' && showImage && <RestMenuImage attributes={ props.attributes } /> }
					</div>
					<div className="uagb-rm__separator"></div>
				</>
			) }
		</div>
	);
}
