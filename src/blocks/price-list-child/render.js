import classnames from 'classnames';
import { useEffect, memo } from '@wordpress/element';
import RestMenuImage from './components/RestMenuImage';
import Title from './components/Title';
import Price from './components/Price';
import Description from './components/Description';
import { select } from '@wordpress/data';
import getImageHeightWidth from '@Controls/getImageHeightWidth';

const Render = ( props ) => {
	props = props.parentProps;
	const { className, setAttributes, attributes } = props;

	// Setup the attributes.
	const { imagePosition, headingAlign, imgAlign, showImage, image, imageWidth } = attributes;

	const parentClientId = select( 'core/block-editor' ).getBlockHierarchyRootClientId( props.clientId );
	const parentAttributes = select( 'core/block-editor' ).getBlockAttributes( parentClientId );

	// eslint-disable-next-line no-nested-ternary
	const position = parentAttributes
		? parentAttributes.imagePosition
			? parentAttributes.imagePosition
			: imagePosition
		: imagePosition;
	// eslint-disable-next-line no-nested-ternary
	const align = parentAttributes
		? parentAttributes.headingAlign
			? parentAttributes.headingAlign
			: headingAlign
		: headingAlign;
	// eslint-disable-next-line no-nested-ternary
	const imgAlignment = parentAttributes
		? parentAttributes.imgAlign
			? parentAttributes.imgAlign
			: imgAlign
		: imgAlign;

	setAttributes( { imagePosition: position } );
	setAttributes( { headingAlign: align } );
	setAttributes( { imgAlign: imgAlignment } );

	useEffect( () => {
		if ( image && image.url ) {
			getImageHeightWidth( image?.url, setAttributes, { type: 'width', value: imageWidth } );
		}
	}, [ image, imageWidth ] );

	return (
		<div
			className={ classnames(
				className,
				'uagb-rest_menu__wrap',
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`
			) }
		>
			{ imgAlignment === 'top' && (
				<>
					{ showImage && <RestMenuImage attributes={ attributes } /> }
					<div className="uagb-rm__content">
						{ align === 'right' && (
							<Price attributes={ attributes } setAttributes={ setAttributes } props={ props } />
						) }
						<div className="uagb-rm-details">
							<Title attributes={ attributes } setAttributes={ setAttributes } props={ props } />
							<Description attributes={ attributes } setAttributes={ setAttributes } props={ props } />
							{ align === 'center' && (
								<Price attributes={ attributes } setAttributes={ setAttributes } props={ props } />
							) }
						</div>
						{ align === 'left' && (
							<Price attributes={ attributes } setAttributes={ setAttributes } props={ props } />
						) }
					</div>
					<div className="uagb-rm__separator"></div>
				</>
			) }
			{ imgAlignment === 'side' && (
				<>
					<div className="uagb-rm__content">
						{ position === 'left' && showImage && <RestMenuImage attributes={ attributes } /> }
						{ position === 'right' && (
							<Price attributes={ attributes } setAttributes={ setAttributes } props={ props } />
						) }
						<div className="uagb-rm-details">
							<Title attributes={ attributes } setAttributes={ setAttributes } props={ props } />
							<Description attributes={ attributes } setAttributes={ setAttributes } props={ props } />
						</div>
						{ position === 'left' && (
							<Price attributes={ attributes } setAttributes={ setAttributes } props={ props } />
						) }
						{ position === 'right' && showImage && <RestMenuImage attributes={ attributes } /> }
					</div>
					<div className="uagb-rm__separator"></div>
				</>
			) }
		</div>
	);
};
export default memo( Render );
