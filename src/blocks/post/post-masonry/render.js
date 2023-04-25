import {
	DEFAULT_POST_LIST_LAYOUT,
	getBlockMap,
	getPostLayoutConfig,
	InnerBlockLayoutContextProvider,
} from '../function';

import { createBlock } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { Placeholder, Button, Tip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useLayoutEffect, memo } from '@wordpress/element';

import styles from '.././editor.lazy.scss';

import Blog from './blog';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { state, setState, togglePreview, categoriesList, latestPosts, replaceInnerBlocks, block } = props;

	props = props.parentProps;

	const { attributes, deviceType, name, setAttributes } = props;

	const renderEditMode = () => {
		const onDone = () => {
			setAttributes( {
				layoutConfig: getPostLayoutConfig( block ),
			} );
			setState( { innerBlocks: block } );
			togglePreview();
		};

		const onCancel = () => {
			const { innerBlocks } = state;
			replaceInnerBlocks( props.clientId, innerBlocks );
			togglePreview();
		};

		const onReset = () => {
			const newBlocks = [];
			// eslint-disable-next-line no-shadow
			DEFAULT_POST_LIST_LAYOUT.map( ( [ name, attribute ] ) => {
				newBlocks.push( createBlock( name, attribute ) );
				return true;
			} );
			replaceInnerBlocks( props.clientId, newBlocks );
			setState( { innerBlocks: block } );
		};

		const InnerBlockProps = {
			template: props.attributes.layoutConfig,
			templateLock: false,
			allowedBlocks: Object.keys( getBlockMap( 'uagb/post-masonry' ) ),
		};
		if ( props.attributes.layoutConfig.length !== 0 ) {
			InnerBlockProps.renderAppender = false;
		}
		return (
			<Placeholder label="Post Masonry Layout">
				<div className="uagb-post-grid uagb-block-all-post-grid-item-template">
					<Tip>
						{ __(
							'Edit the blocks inside the preview below to change the content displayed for each post within the post grid.', 'ultimate-addons-for-gutenberg'
						) }
					</Tip>
					<InnerBlockLayoutContextProvider parentName="uagb/post-masonry" parentClassName="uagb-block-grid">
						<article className="uagb-post__inner-wrap uagb-post__edit-mode">
							<div className="uagb-post__text">
								<InnerBlocks { ...InnerBlockProps } />
							</div>
						</article>
					</InnerBlockLayoutContextProvider>
					<div className="uagb-block-all-post__actions">
						<Button className="uagb-block-all-post__done-button" isPrimary onClick={ onDone }>
							{ __( 'Done', 'ultimate-addons-for-gutenberg' ) }
						</Button>
						<Button className="uagb-block-all-post__cancel-button" isTertiary onClick={ onCancel }>
							{ __( 'Cancel', 'ultimate-addons-for-gutenberg' ) }
						</Button>
						<Button className="uagb-block-all-post__reset-button" onClick={ onReset }>
							{ __( 'Reset Layout', 'ultimate-addons-for-gutenberg' ) }
						</Button>
					</div>
				</div>
			</Placeholder>
		);
	};

	const renderViewMode = (
		<Blog
			attributes={ attributes }
			className={ props.className }
			latestPosts={ latestPosts }
			block_id={ props.clientId.substr( 0, 8 ) }
			categoriesList={ categoriesList }
			deviceType={ deviceType }
			name={ name }
			setAttributes={ setAttributes }
		/>
	);

	return <>{ state.isEditing ? renderEditMode() : renderViewMode }</>;
};

export default memo( Render );
