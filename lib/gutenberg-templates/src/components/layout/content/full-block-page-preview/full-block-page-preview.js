import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_KEY } from '../../../../store';
import {
	ArrowDownTrayIcon,
	ChevronLeftIcon,
	HeartIcon,
} from '@heroicons/react/24/outline';
import { classNames, getSpectraStatus, getSpectraProStatus } from '../../../../utils/helpers';
import Button from '../../../reusable/button/button';
import BlockPreview from '../../../reusable/block-preview/block-preview';
import FavoriteSingleBlock from '../../../reusable/single-block/favorite-single-block';
import ImportBlockButton from '../../../reusable/import-block-button/import-block-button';
import { memo, useState } from '@wordpress/element';
import LoadingSpinner from '../../../reusable/loading-spinner/loading-spinner';
import { __ } from '@wordpress/i18n';

const FullBlockPagePreview = () => {
	const { setCurrentScreen, setPagePreview } = useDispatch( STORE_KEY );
	const {
		pagePreviewItem,
		adaptiveMode,
		defaultPalette,
		activePalette,
		dynamicContent,
		selectedImages,
		businessContact,
		allPages,
		importInProgress,
	} = useSelect( ( select ) => {
		const {
			getPagePreview,
			getAdaptiveMode,
			getDefaultPageColorPalette,
			getActivePagePalette,
			getDynamicContent,
			getAIStepData,
			getAllBlocksPages,
			getImportInProgress,
		} = select( STORE_KEY );

		return {
			pagePreviewItem: getPagePreview(),
			adaptiveMode: getAdaptiveMode(),
			defaultPalette: getDefaultPageColorPalette(),
			activePalette: getActivePagePalette(),
			dynamicContent: getDynamicContent(),
			selectedImages: getAIStepData().selectedImages,
			businessContact: getAIStepData().businessContact,
			allPages: getAllBlocksPages(),
			importInProgress: getImportInProgress(),
		};
	} );

	const [ importing, setImporting ] = useState( false );

	const spectraPluginStatus = getSpectraStatus();
	const spectraProPluginStatus = getSpectraProStatus();

	const getInsertButtonText = () => {
		if ( spectraPluginStatus.inactive && spectraProPluginStatus.notInstalled ) {
			return __( 'Get Access', 'ast-block-templates' );
		}

		return __( 'Insert', 'ast-block-templates' );
	};

	const setFullPagePreview = ( item ) => () => {
		setPagePreview( item );
	};

	const colorPalette =
		Object.keys( activePalette ).length > 0
			? activePalette.colors
			: defaultPalette.colors;

	const handleBackToPages = () => setCurrentScreen( 'all-block-pages-grid' );

	const suggestedItems = allPages.filter(
		( page ) => page.category === pagePreviewItem.category
	);

	return (
		<div className="flex h-full pt-6 px-10 mx-auto gap-10">
			{ /* Full page Preview */ }
			<div className="flex-1 h-full">
				<div className="h-full flex flex-col items-stretch justify-stretch space-y-6">
					<div className="flex flex-col sm:flex-row items-start justify-start gap-5">
						<Button
							className={ classNames(
								`inline-flex pl-1 py-1 pr-2 h-7 gap-1 border-border-primary text-body-text`
								// importInProgress && 'disable-click-action'
							) }
							variant="white"
							hasPrefixIcon
							isSmall
							onClick={ handleBackToPages }
						>
							<ChevronLeftIcon className="w-4 h-4" />
							<span>Back</span>
						</Button>
						<h5 className="m-0 text-xl font-semibold inline-block">
							Page Preview
						</h5>
					</div>
					{ /* Preview */ }
					<div className="h-full w-full overflow-y-auto ast-thin-scrollbar !mb-6">
						<BlockPreview
							item={ pagePreviewItem }
							content={ pagePreviewItem.content }
							stylesheet={ pagePreviewItem.stylesheet }
							astraCustomizer={
								! adaptiveMode
									? ast_block_template_vars.server_astra_customizer_css
									: ast_block_template_vars.astra_customizer_css
							}
							globalStylesheet={
								pagePreviewItem.global_stylesheet
							}
							colorPalette={ colorPalette }
							dynamicContent={
								dynamicContent[ pagePreviewItem.category ] ?? []
							}
							selectedImages={ selectedImages }
							email={ businessContact.email }
							phone={ businessContact.phone }
							address={ businessContact.address }
							fullPreview
						/>
					</div>
				</div>
			</div>

			{ /* Other Pages */ }
			<div className="flex flex-col w-2/6 lg:w-[35%] h-full">
				<h5 className="m-0 text-xl font-semibold inline-block mb-6">
					Other Designs
				</h5>
				<div className="grid grid-cols-1 xl:grid-cols-2 auto-rows-auto overflow-y-auto ast-thin-scrollbar gap-2.5 lg:gap-5 xl:gap-10">
					{ suggestedItems.map( ( suggestedItem ) => (
						<div
							key={ suggestedItem.ID }
							className={ classNames(
								'w-full h-fit hover:shadow-xl group transition ease-in-out duration-150',
								importInProgress &&
									'pointer-events-none !cursor-not-allowed'
							) }
						>
							<BlockPreview
								className="group-hover:border-accent-spectra transition ease-in-out duration-150"
								item={ suggestedItem }
								content={ suggestedItem.content }
								stylesheet={ suggestedItem.stylesheet }
								astraCustomizer={
									! adaptiveMode
										? ast_block_template_vars.server_astra_customizer_css
										: ast_block_template_vars.astra_customizer_css
								}
								globalStylesheet={
									suggestedItem.global_stylesheet
								}
								colorPalette={ colorPalette }
								dynamicContent={
									dynamicContent[ suggestedItem.category ] ??
									[]
								}
								selectedImages={ selectedImages }
								email={ businessContact.email }
								phone={ businessContact.phone }
								address={ businessContact.address }
								onClickBlock={ setFullPagePreview(
									suggestedItem
								) }
							/>
						</div>
					) ) }
				</div>
				<div className="pt-8 pb-6 mt-auto">
					<div className="flex flex-wrap xl:flex-nowrap gap-6 items-center justify-center">
						<FavoriteSingleBlock item={ pagePreviewItem }>
							{ ( { isFavorite, onClickFavorite } ) => (
								<Button
									className={ classNames(
										'xl:w-1/2 w-full truncate',
										importInProgress &&
											'pointer-events-none !cursor-not-allowed'
									) }
									variant="white"
									hasSuffixIcon
									onClick={ onClickFavorite }
								>
									<span className="hidden sm:inline text-base font-medium truncate">
										{ isFavorite
											? 'Remove from favorites'
											: 'Add to favorites' }
									</span>
									<HeartIcon
										className={ classNames(
											'shrink-0 size-6 sm:size-5 transition-colors ease-out duration-150',
											isFavorite
												? 'fill-favorite text-favorite'
												: 'group-hover/favorites:fill-favorite group-hover/favorites:text-favorite'
										) }
									/>
								</Button>
							) }
						</FavoriteSingleBlock>
						<ImportBlockButton
							title={ getInsertButtonText() }
							showIcon={ spectraPluginStatus.active }
							liveRequest={ true }
							item={ pagePreviewItem }
							importing={ importing }
							onClick={ () => {
								setImporting( true );
							} }
							onBlockImport={ () => {
								setImporting( false );
								setCurrentScreen( 'all-block-pages-grid' );
							} }
							onImportFail={ () => {
								setImporting( false );
							} }
						>
							{ ( { onClick: handleImport, disableImport } ) => (
								<Button
									className={ classNames(
										'w-full xl:w-1/2 relative truncate'
									) }
									variant="primary"
									hasSuffixIcon={ spectraPluginStatus.active }
									onClick={ handleImport }
									disabled={
										disableImport ||
										( importInProgress && ! importing )
									}
								>
									<span
										className={ classNames(
											'hidden sm:inline truncate',
											importing && 'invisible'
										) }
									>
										{ getInsertButtonText() }
									</span>
									<ArrowDownTrayIcon
										className={ classNames(
											'sm:size-5 size-6 shrink-0',
											importing && 'invisible'
										) }
									/>
									{ importing && (
										<span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
											<LoadingSpinner />
										</span>
									) }
								</Button>
							) }
						</ImportBlockButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo( FullBlockPagePreview );
