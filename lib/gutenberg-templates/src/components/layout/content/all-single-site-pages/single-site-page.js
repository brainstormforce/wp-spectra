import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { memo } from '@wordpress/element';

import { _unescape } from '../../../../utils/functions';
import { classNames } from '../../../../utils/helpers';

const SingleSitePage = ( {
	item,
	pagePreview,
	setPagePreview,
	setImportItemInfo,
} ) => {
	const image_url =
		item['thumbnail-image-url'] ||
		`${ast_block_template_vars.uri}dist/placeholder.png`;

	return (
		<div
			className={ classNames(
				// 'item single-site',
				'w-full content-start relative'
			) }
			onClick={ () => {
				setImportItemInfo( item );
				setPagePreview( item );
			} }
		>
			<div className={classNames(
				// "inner",
				'relative cursor-pointer',
			)}>
				<div
					className={classNames(
						// "screenshot"
						'bg-top bg-cover bg-no-repeat overflow-hidden bg-gray-300 block aspect-[6/7]'
					)}
					style={ { backgroundImage: `url('${ image_url }')` } }
					aria-hidden="true"
				>
					<div className={classNames(
						// "preview",
						'absolute top-0 left-0 w-full h-full cursor-pointer opacity-0 invisible float-none transition-all duration-300 bg-black bg-opacity-50'
					)}>
						<span className="ast-block-templates-icon ast-block-templates-icon-search"></span>
					</div>
				</div>

				<div className={classNames(
					'absolute inset-0 grid grid-cols-1 grid-rows-1 place-items-end overflow-hidden border border-solid border-border-primary transition duration-150 ease-in-out',
					pagePreview.ID === item.ID ? 'border-accent-spectra shadow-large' : '',
				)}>
					<div className={classNames(
						'w-full flex items-center justify-between gap-3 py-2 pl-4 pr-3 bg-white/95 shadow-action-buttons backdrop-blur-[3px]'
					)}>
						<div>
							<p className={classNames(
								"title",
								'm-0 text-base text-heading-text font-semibold leading-6'
							)}>
								{ _unescape( item.title ) }
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getPagePreview } = select( 'ast-block-templates' );
		return {
			pagePreview: getPagePreview(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			setPagePreview,
			setFullWidthPagePreview,
			setCurrentScreen,
			setImportItemInfo,
		} = dispatch( 'ast-block-templates' );
		return {
			setImportItemInfo,
			setPagePreview,
			updateFullWidthPagePreview( fullWidthPagePreview ) {
				setFullWidthPagePreview( fullWidthPagePreview );
				setCurrentScreen( 'full-width-page-preview' );
			},
		};
	} )
)( memo( SingleSitePage ) );
