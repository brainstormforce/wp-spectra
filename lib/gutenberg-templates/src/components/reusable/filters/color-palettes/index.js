import { compose } from '@wordpress/compose';
import { memo } from '@wordpress/element';
import { withSelect, withDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import ColorPalettes from './color-palettes';
import { STORE_KEY } from '../../../../store';

const ColorPalettesWrapper = ( {
	setActiveBlockPalette,
	activeBlockPaletteSlug,
	setActiveBlockPaletteSlug,
	setActivePagePalette,
	activePagePaletteSlug,
	setActivePagePaletteSlug,
	currentScreen,
	blockColorPaletteObj,
	pageColorPaletteObj,
} ) => {
	const astraColorPaletteBlock = blockColorPaletteObj;
	const astraColorPalettePage = pageColorPaletteObj;

	const onPaletteChange = ( event, palette ) => {
		if ( ! palette ) {
			return;
		}
		if ( 'all-blocks-grid' === currentScreen ) {
			setActiveBlockPaletteSlug( palette.slug );
			setActiveBlockPalette( palette );
		} else {
			setActivePagePaletteSlug( palette.slug );
			setActivePagePalette( palette );
		}
	};

	return (
		<div className="flex items-center justify-between gap-7 px-2 py-1 min-h-[2rem]">
			<span className="text-base font-semibold leading-6 text-heading-text">
				{ __( 'Color Styles: ', 'ast-block-templates' ) }
			</span>
			<ColorPalettes
				selected={ 'all-blocks-grid' === currentScreen ? activeBlockPaletteSlug : activePagePaletteSlug }
				options={ 'all-blocks-grid' === currentScreen ? astraColorPaletteBlock : astraColorPalettePage }
				onChange={ ( event, palette ) => {
					onPaletteChange( event, palette );
				} }
				tabIndex="0"
				type="others"
			/>
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const {
			getDefaultBlockColorPalette,
			getActiveBlockPalette,
			getActiveBlockPaletteSlug,
			getDefaultPageColorPalette,
			getActivePagePalette,
			getActivePagePaletteSlug,
			getCurrentScreen,
			getBlockColorPaletteObj,
			getPageColorPaletteObj,
		} = select( STORE_KEY );
		return {
			defaultBlockPalette: getDefaultBlockColorPalette(),
			activeBlockPalette: getActiveBlockPalette(),
			activeBlockPaletteSlug: getActiveBlockPaletteSlug(),
			defaultPagePalette: getDefaultPageColorPalette(),
			activePagePalette: getActivePagePalette(),
			activePagePaletteSlug: getActivePagePaletteSlug(),
			currentScreen: getCurrentScreen(),
			blockColorPaletteObj: getBlockColorPaletteObj(),
			pageColorPaletteObj: getPageColorPaletteObj(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			// setDefaultPalette,
			setActiveBlockPalette,
			setActiveBlockPaletteSlug,
			setActivePagePalette,
			setActivePagePaletteSlug,
		} = dispatch( STORE_KEY );
		return {
			// setDefaultPalette,
			setActiveBlockPalette,
			setActiveBlockPaletteSlug,
			setActivePagePalette,
			setActivePagePaletteSlug,
		};
	} )
)( memo( ColorPalettesWrapper ) );
