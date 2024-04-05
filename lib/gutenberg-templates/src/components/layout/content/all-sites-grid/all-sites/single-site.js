import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { memo, useState, useEffect } from '@wordpress/element';
import { _unescape } from '../../../../../utils/functions';
import { classNames } from '../../../../../utils/helpers';
import PremiumBadge from '../../../../reusable/premium-badge';
import FavoriteSingleBlock from '../../../../reusable/single-block/favorite-single-block';
import FadeInOut from '../../../../reusable/fade-in-out';

const SingleSite = ( { setSitePreview, item, setImportItemInfo } ) => {
	const image_url = item[ 'thumbnail-image-url' ] || '';
	const pagesCount = item.pages ? item.pages.length : 0;

	const pageString = pagesCount <= 1 ? 'Template' : 'Templates';

	const [ imageURL, setImageURL ] = useState(
		`${ ast_block_template_vars.uri }dist/placeholder_200_200.png`
	);

	const siteType = item[ 'astra-sites-type' ];

	useEffect( () => {
		let isMounted = true;

		const imgLarge = new Image();

		imgLarge.src = image_url;

		imgLarge.onload = () => {
			if ( isMounted ) {
				setImageURL( imgLarge.src );
			}
		};

		return () => {
			isMounted = false;
		};
	}, [ imageURL ] );

	return (
		<FadeInOut
			className={classNames(
				'border-none w-full content-start relative'
			)}
		>
			<div 
				className={classNames(
					"inner",
					'm-0 bg-white relative transition-all border border-solid border-border-primary cursor-pointer'
				)}
				onClick={ () => {
					setSitePreview( item );
					setImportItemInfo( item );
				} }
			>
				{ 'free' !== siteType && (
					<PremiumBadge className="absolute top-3 right-3" />
				)
				}
				<div
					className={classNames(
						// "screenshot",
						'bg-top bg-cover bg-no-repeat overflow-hidden bg-gray-300 block aspect-[13/16]',
					)}
					style={ { backgroundImage: `url('${ imageURL }')` } }
				>
					<div className={classNames(
						// "preview",
						'absolute top-0 left-0 w-full h-full cursor-pointer opacity-0 invisible float-none transition-all duration-300 bg-black bg-opacity-50'
					)}>
						<span className="ast-block-templates-icon ast-block-templates-icon-search"></span>
					</div>
				</div>
				{/* Site Template Info */}
				<div className='absolute inset-0 grid grid-cols-1 grid-rows-1 place-items-end overflow-hidden'>
					<div className={classNames(
						'w-full flex items-center justify-between gap-3 py-2 pl-4 pr-3 bg-white/95 shadow-action-buttons backdrop-blur-[3px]'
					)}>
						<div>
							<p className={classNames(
								// "title",
								'm-0 text-base text-heading-text font-semibold leading-6'
							)}>
								{ _unescape( item.title ) }
							</p>
							{ pagesCount ? (
								<p className="m-0 text-sm text-body-text font-normal leading-5 sub-title">
									{ `${ pagesCount } ${ pageString }` }
								</p>
							) : (
								''
							) }
						</div>
						{/* Favorite button */}
						<FavoriteSingleBlock item={ item } />
					</div>
				</div>
			</div>
		</FadeInOut>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getSitePreview } = select( 'ast-block-templates' );
		return {
			preview: getSitePreview,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			setSitePreview,
			setPagePreview,
			setCurrentScreen,
			setImportItemInfo,
		} = dispatch( 'ast-block-templates' );
		return {
			setSitePreview( item ) {
				const firstPage = Object.values( item.pages ).length
					? Object.values( item.pages )[ 0 ]
					: [];
				setPagePreview( firstPage );
				setSitePreview( item );
				setCurrentScreen( 'all-single-site-pages' );
			},
			setImportItemInfo,
		};
	} )
)( memo( SingleSite ) );
