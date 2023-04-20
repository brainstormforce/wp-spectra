import classnames from 'classnames';
import ContentTmClasses from '.././classes';
import AlignClass from '.././align-classes';
import DayAlignClass from '.././day-align-classes';
import Title from './components/Title';
import FeaturedImage from './components/FeaturedImage';
import Excerpt from './components/Excerpt';
import CtaLink from './components/CtaLink';
import Author from './components/Author';
import PostDate from './components/PostDate';
import Icon from './components/Icon';
import { useDeviceType } from '@Controls/getPreviewType';
import { __ } from '@wordpress/i18n';
import { Placeholder, Spinner } from '@wordpress/components';
import { useLayoutEffect, memo } from '@wordpress/element';
import styles from '../editor.lazy.scss';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	const { latestPosts } = props;
	props = props.parentProps;
	const blockName = props.name.replace( 'uagb/', '' );
	const deviceType = useDeviceType();
	const { attributes, className, setAttributes } = props;

	const { displayPostLink, postsToShow } = attributes;

	const timelinAlignment =
		'undefined' !== typeof attributes[ 'timelinAlignment' + deviceType ]
			? attributes[ 'timelinAlignment' + deviceType ]
			: attributes.timelinAlignment;
	const postsToShowFallback = getFallbackNumber( postsToShow, 'postsToShow', blockName );

	/* Render output at backend */
	const getContent = () => {
		const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;

		if ( ! hasPosts ) {
			return (
				<Placeholder icon="admin-post" label={ __( 'Post Timeline', 'ultimate-addons-for-gutenberg' ) }>
					{ ! Array.isArray( latestPosts ) ? <Spinner /> : __( 'No posts found.', 'ultimate-addons-for-gutenberg' ) }
				</Placeholder>
			);
		}
		// Removing posts from display should be instant.
		const displayPosts =
			latestPosts.length > postsToShowFallback ? latestPosts.slice( 0, postsToShowFallback ) : latestPosts;

		let contentAlignClass = AlignClass( props.attributes, 0, deviceType ); // Get classname for layout alignment
		let dayAlignClass = DayAlignClass( props.attributes, 0, deviceType ); // Get classname for day alignment.

		let displayInnerDate = false;

		return (
			<>
				{ displayPosts.map( ( post, index ) => {
					if ( timelinAlignment === 'center' ) {
						displayInnerDate = true;
						contentAlignClass = AlignClass( props.attributes, index, deviceType );
						dayAlignClass = DayAlignClass( props.attributes, index, deviceType );
					}

					return (
						<article className={ classnames( 'uagb-timeline__field ', contentAlignClass ) } key={ index }>
							{ <Icon attributes={ attributes } /> }
							<div className={ classnames( dayAlignClass, 'uagb-timeline__events-inner-new' ) }>
								<div className="uagb-timeline__events-inner--content">
									<PostDate
										post={ post }
										attributes={ attributes }
										dateClass="uagb-timeline__date-hide uagb-timeline__inner-date-new"
									/>
									{ <FeaturedImage post={ post } attributes={ attributes } /> }
									{ <Title post={ post } attributes={ attributes } /> }
									{ <Author post={ post } attributes={ attributes } /> }
									{ <Excerpt post={ post } attributes={ attributes } /> }
									{
										<CtaLink
											post={ post }
											attributes={ attributes }
											setAttributes={ setAttributes }
										/>
									}

									<div className="uagb-timeline__arrow"></div>
								</div>
							</div>
							{ displayInnerDate && (
								<>
									<PostDate
										post={ post }
										attributes={ attributes }
										dateClass="uagb-timeline__date-new"
									/>
								</>
							) }
						</article>
					);
				} ) }
			</>
		);
	};

	let ctaEnable = '';

	if ( displayPostLink ) {
		ctaEnable = 'uagb_timeline__cta-enable';
	}

	return (
		<div
			className={ classnames(
				className,
				'uagb-timeline__outer-wrap',
				'uagb-timeline__content-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				ctaEnable,
				...ContentTmClasses( props.attributes, deviceType )
			) }
		>
			{ getContent() }
			<div className="uagb-timeline__line">
				<div className="uagb-timeline__line__inner"></div>
			</div>
		</div>
	);
};
export default memo( Render );
