/**
 * BLOCK: Instagram Feed - Save Block
 */

import classnames from 'classnames';
import InitialSelector from "./components/InitialSelector";
import ImageGallery from "./components/ImageGallery";

export default function save( props ) {
	const { attributes, className } = props;

	const {
		block_id,
		readyToRender,
	} = attributes;

	return (
		<div
			className={ classnames(
				className,
				`uagb-block-${ block_id }`
			) }
		>
			{
				readyToRender
				? <ImageGallery
					attributes={ attributes }
					setAttributes={ 'inapplicable' }
					block_id={ block_id }
				/> 
				: <InitialSelector
					attributes={ attributes }
					setAttributes={ 'inapplicable' }
				/> 
			}
		</div>
	);
}
