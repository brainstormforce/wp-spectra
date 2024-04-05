import { __, _n, sprintf } from '@wordpress/i18n';
import { memo, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { useDispatch, withSelect } from '@wordpress/data';
import { _unescape } from '../../../../utils/functions';
import DynamicContent from '../../../reusable/dynamic-content/dynamic-content';
import SingleSitePage from './single-site-page';
import { classNames } from '../../../../utils/helpers';
import Button from '../../../reusable/button/button';
import { ArrowRightIcon, ChevronLeftIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/outline';
import ImportPageButton from '../../../reusable/import-page-button';
import { STORE_KEY } from '../../../../store';
import PremiumBadge from '../../../reusable/premium-badge';
import FavoriteSingleBlock from '../../../reusable/single-block/favorite-single-block';
import License from '../../../reusable/license/license';
import useLicense from '../../../../hooks/use-license';

function AllSingleSitePages( { sitePreview, pagePreview } ) {
	const { setCurrentScreen } = useDispatch( STORE_KEY );
	const { licenseStatus, getAstraSitesProStatus } = useLicense(),
		pluginStatus = getAstraSitesProStatus();

	if ( ! Object.keys( sitePreview ).length ) {
		return '';
	}

	if (! sitePreview?.type ) {
		sitePreview.type = 'site';
	}

	const items = Object.values( sitePreview.pages ) || [];
	const imageURL =
		pagePreview['featured-image-url'] ||
		`${ast_block_template_vars.uri}dist/placeholder.png`;

	const handleClickBack = () => {
		setCurrentScreen( 'all-sites-grid' )
	}

	const isFree = 'free' === sitePreview[ 'astra-sites-type' ],
		disableImport = !isFree && 'active' !== licenseStatus, 
		showGetAccess = !isFree && 'active' !== licenseStatus && ! pluginStatus.active;

	return (
		<Fragment>
			<DynamicContent />

			<div className={classNames(
				// "ast-block-templates-single-site-preview",
				'flex h-full pt-6 px-10 mx-auto gap-10'
			)}>
				{/* <h2 className={classNames(
					"ast-block-templates-pages-title"
				)}>
					{ __( 'Page Templates', 'ast-block-templates' ) }
				</h2> */}
				<div className={classNames(
					'flex-1 h-full'
				)}>
					<div className='h-full flex flex-col items-stretch justify-stretch space-y-6'>
						<div className='flex items-center justify-start gap-5'>
							<Button
								className="inline-flex pl-1 py-1 pr-2 h-7 gap-1 border-border-primary text-body-text"
								variant="white"
								hasPrefixIcon
								isSmall
								onClick={ handleClickBack }
							>
								<ChevronLeftIcon className="w-4 h-4" />
								<span>Back</span>
							</Button>
							<div className='space-x-3'>
								<p className='m-0 text-xl font-semibold inline-block'>{ sitePreview?.title }</p>
								{
									'free' !== sitePreview[ 'astra-sites-type' ] && (
										<PremiumBadge className="align-text-top" />
									)
								}
							</div>
						</div>
						<div className={classNames(
							'flex-1 w-full overflow-y-auto h-screen bg-gray-300 block ast-thin-scrollbar'
						)}>
							<img className='w-full' src={ imageURL } alt="screenshot" onLoad={(event) => {
								// Remove "bg-gray-300" className from the parent element.
								event.target.parentElement.classList.remove('bg-gray-300');
							}} />
						</div>
					</div>
				</div>

				<div className={classNames(
					// "ast-block-templates-grid-preview",
					'flex flex-col w-2/5 lg:w-[35%] h-full'
				)}>
					<div className='flex items-center justify-between gap-2 mb-6'>
						<p className='m-0 text-xl font-semibold'>
							{ sprintf(
								/* translators: %s: number of pages */
								'%s (%s)',
								_n( 'Page', 'Pages', items.length, 'ast-block-templates' ),
								items.length
							) }
						</p>
						<FavoriteSingleBlock item={ sitePreview }>
							{
								({ isFavorite, onClickFavorite }) => (
									<button 
										className='min-w-fit inline-flex items-center justify-start gap-2 border-0 focus:outline-none bg-transparent cursor-pointer text-nav-active group/favorites'
										onClick={ onClickFavorite }
									>
										<HeartIcon className={ classNames( 'w-5 h-5 transition-colors ease-out duration-150', isFavorite ? 'fill-favorite text-favorite' : 'group-hover/favorites:fill-favorite group-hover/favorites:text-favorite' ) } />
										<span className='text-base font-medium'>
											{ isFavorite ? 'Remove from favorites' : 'Add to favorites' }
										</span>
									</button>
								)
							}
						</FavoriteSingleBlock>
					</div>
					<div className='flex-1 overflow-y-auto ast-thin-scrollbar -mx-1'>
						<div className={classNames(
							// "ast-block-templates-grid",
							'grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-10 border-x-4 border-solid border-transparent'
						)}>
							{ items.length ? (
								items.map( ( item ) => (
									<SingleSitePage key={ item.ID } item={ item } />
								) )
							) : (
								<div className="no-search-result">
									<h3>
										{ __(
											'No Result Found',
											'ast-block-templates'
										) }
									</h3>
									<p>
										{ __(
											'The search result not found. Try another search.',
											'ast-block-templates'
										) }
									</p>
								</div>
							) }
						</div>
					</div>
					{/* Action buttons */}
					<div className='py-8 space-y-6'>
						{ !isFree && <License /> }
						<div className='min-w-min flex flex-wrap xl:flex-nowrap gap-6 items-center justify-center'>
							<Button
								className="lg:grow w-full lg:w-auto min-w-fit"
								variant="white"
								hasSuffixIcon
								onClick={ () => {
									window.open( pagePreview[ 'astra-page-url' ], '_blank' );
								} }
							>
								<span>Live Preview</span>
								<EyeIcon className="w-5 h-5" />
							</Button>
							{
								showGetAccess ? (
									<Button
										variant="primary"
										className='lg:grow-[2] w-full lg:w-auto min-w-fit'
										onClick={ () => {
											window.open( ast_block_template_vars.getProURL, '_blank' );
										} }
										hasSuffixIcon
									>
										<span>Get Access</span>
										<ArrowRightIcon className="w-5 h-5" />
									</Button>
								) : (
									<ImportPageButton disabled={ disableImport } />
								)
							}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default compose(
	withSelect( ( select ) => {
		const { getPagePreview, getSitePreview } = select(
			'ast-block-templates'
		);
		return {
			sitePreview: getSitePreview(),
			pagePreview: getPagePreview(),
		};
	} )
)( memo( AllSingleSitePages ) );
