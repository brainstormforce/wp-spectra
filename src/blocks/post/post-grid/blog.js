import classnames from 'classnames';
import {
	InnerBlockLayoutContextProvider,
	renderPostLayout,
} from '.././function';
import { useDeviceType } from '@Controls/getPreviewType';
import { useRef, memo } from '@wordpress/element';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

const Blog = ( props ) => {
	const blockName = props.name.replace( 'uagb/', '' );
	const article = useRef();
	const { attributes, className, latestPosts, block_id, setAttributes } = props;
	const deviceType = useDeviceType();
	const {
		columns,
		tcolumns,
		mcolumns,
		imgPosition,
		postsToShow,
		equalHeight,
		paginationMarkup,
		postPagination,
		layoutConfig,
		equalHeightInlineButtons
	} = attributes;

	const postsToShowFallback = getFallbackNumber( postsToShow, 'postsToShow', blockName );
	const columnsFallback = getFallbackNumber( columns, 'columns', blockName );
	const tcolumnsFallback = getFallbackNumber( tcolumns, 'tcolumns', blockName );
	const mcolumnsFallback = getFallbackNumber( mcolumns, 'mcolumns', blockName );

	const equalHeightClass = equalHeight ? 'uagb-post__equal-height' : '';
	// Removing posts from display should be instant.
	const displayPosts =
		latestPosts.length > postsToShowFallback
			? latestPosts.slice( 0, postsToShowFallback )
			: latestPosts;
	const isImageEnabled = ( attributes.displayPostImage === true ) ? 'uagb-post__image-enabled' : 'uagb-post__image-disabled';
	const equalHeightInlineReadMoreButtonsClass = equalHeightInlineButtons ? `uagb-equal_height_inline-read-more-buttons-in-editor` : '';
	return (
		<div
			className={ classnames(
				'is-grid',
				`uagb-post__columns-${ columnsFallback }`,
				`uagb-post__columns-tablet-${ tcolumnsFallback }`,
				`uagb-post__columns-mobile-${ mcolumnsFallback }`,
				'uagb-post__items',
				`${ equalHeightClass }`,
				`${ isImageEnabled }`,
				className,
				'uagb-post-grid',
				`uagb-post__image-position-${ imgPosition }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`,
				`${ equalHeightInlineReadMoreButtonsClass }`
			) }
		>
			<InnerBlockLayoutContextProvider
				parentName="uagb/post-grid"
				parentClassName="uagb-block-grid"
			>
				{ displayPosts.map( ( post = {}, i ) => (
					<article ref={article} key={ i } className="uagb-post__inner-wrap">
						{ renderPostLayout(
							'uagb/post-grid',
							post,
							layoutConfig,
							props.attributes,
							props.categoriesList,
							setAttributes,
							article,
						) }
					</article>
				) ) }
			</InnerBlockLayoutContextProvider>
			{ postPagination === true && 'empty' !== paginationMarkup && (
				<div
					dangerouslySetInnerHTML={ { __html: paginationMarkup } }
					className="uagb-post-pagination-wrap"
				></div>
			) }
		</div>
	);
};
export default memo( Blog );
