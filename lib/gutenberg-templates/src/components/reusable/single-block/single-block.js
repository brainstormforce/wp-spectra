import React, { lazy, Suspense } from 'react';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';
import { memo } from '@wordpress/element';
import SingleBlockLoadingSkeleton from './single-block-loading-skeleton';
import { getColumnNum, getLoadingSkeletonType, getRowNum } from '../../../utils/helpers';

// Lazy load the SingleBlock component
const LazySingleBlock = lazy( () => import( './lazy-single-block' ) );

// Create a wrapper component for lazy loading
const SingleBlockWrapper = ( {
	index,
	setImportItemInfo,
	updateFullWidthBlockPreview,
	item,
	content,
	stylesheet,
	astraCustomizer,
	globalStylesheet,
	colorPalette,
	dynamicContent,
	selectedImages,
	email,
	phone,
	address,
} ) => {
	return (
		<Suspense fallback={ <SingleBlockLoadingSkeleton type={ getLoadingSkeletonType( getRowNum( index ), getColumnNum( index ) ) } /> }>
			<LazySingleBlock
				setImportItemInfo={ setImportItemInfo }
				updateFullWidthBlockPreview={ updateFullWidthBlockPreview }
				item={ item }
				content={ content }
				stylesheet={ stylesheet }
				astraCustomizer={ astraCustomizer }
				globalStylesheet={ globalStylesheet }
				colorPalette={ colorPalette }
				dynamicContent={ dynamicContent }
				selectedImages={ selectedImages }
				email={ email }
				phone={ phone }
				address={ address }
			/>
		</Suspense>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const {
			setImportItemInfo,
			setFullWidthBlockPreview,
			setCurrentScreen,
		} = dispatch( 'ast-block-templates' );
		return {
			setImportItemInfo,
			updateFullWidthBlockPreview( item ) {
				setFullWidthBlockPreview( item );
				setCurrentScreen( 'full-width-block-preview' );
			},
		};
	} )
)( memo( SingleBlockWrapper, ( prevProps, nextProps ) => {
	return !! (
		JSON.stringify( prevProps.item ) === JSON.stringify( nextProps.item ) &&
		prevProps.content === nextProps.content &&
		prevProps.stylesheet === nextProps.stylesheet &&
		prevProps.astraCustomizer === nextProps.astraCustomizer &&
		prevProps.globalStylesheet === nextProps.globalStylesheet &&
		prevProps.colorPalette === nextProps.colorPalette &&
		JSON.stringify( prevProps.dynamicContent ) === JSON.stringify( nextProps.dynamicContent ) &&
		JSON.stringify( prevProps.selectedImages ) === JSON.stringify( nextProps.selectedImages ) &&
		prevProps.email === nextProps.email &&
		prevProps.phone === nextProps.phone &&
		prevProps.address === nextProps.address
	);
} ) );
