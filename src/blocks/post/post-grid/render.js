/**
 * BLOCK: Post Grid - Editor Render.
 */
import { useLayoutEffect, memo } from '@wordpress/element';
import Blog from './blog';

import {
	InnerBlockLayoutContextProvider,
	DEFAULT_POST_LIST_LAYOUT,
	getPostLayoutConfig,
	getBlockMap,
} from '.././function';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';

import { Placeholder, Button, Tip } from '@wordpress/components';

import { InnerBlocks } from '@wordpress/block-editor';
import styles from '.././editor.lazy.scss';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { categoriesList, latestPosts, replaceInnerBlocks, block } = props;
	const { isEditing } = props.state;

	// Caching all Props.
	const { attributes, deviceType, name, setAttributes, clientId, className } = props;

	const renderEditMode = () => {
		const onDone = () => {
			setAttributes( {
				layoutConfig: getPostLayoutConfig( block ),
			} );
			props.setStateValue( { innerBlocks: block } );
			props.togglePreview();
		};

		const onCancel = () => {
			const { innerBlocks } = props.state;
			replaceInnerBlocks( clientId, innerBlocks );
			props.togglePreview();
		};

		const onReset = () => {
			const newBlocks = [];
			// eslint-disable-next-line no-shadow
			DEFAULT_POST_LIST_LAYOUT.map( ( [ name, attribute ] ) => {
				newBlocks.push( createBlock( name, attribute ) );
				return true;
			} );
			replaceInnerBlocks( clientId, newBlocks );
			props.setStateValue( { innerBlocks: block } );
		};

		const InnerBlockProps = {
			template: props.attributes.layoutConfig,
			templateLock: false,
			allowedBlocks: Object.keys( getBlockMap( 'uagb/post-grid' ) ),
		};

		if ( props.attributes.layoutConfig.length !== 0 ) {
			InnerBlockProps.renderAppender = false;
		}
		return (
			<Placeholder label="Post Grid Layout">
				<div className="uagb-post-grid uagb-block-all-post-grid-item-template">
					<Tip>
						{ __(
							'Edit the blocks inside the preview below to change the content displayed for each post within the post grid.', 'ultimate-addons-for-gutenberg'
						) }
					</Tip>
					<InnerBlockLayoutContextProvider parentName="uagb/post-grid" parentClassName="uagb-block-grid">
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

	if ( isEditing ) {
		return <>{ renderEditMode() }</>;
	}

	const renderViewMode = () => {
		return (
			<Blog
				attributes={ attributes }
				className={ className }
				latestPosts={ latestPosts }
				block_id={ attributes.block_id }
				categoriesList={ categoriesList }
				deviceType={ deviceType }
				name={ name }
				setAttributes={ setAttributes }
			/>
		);
	};

	return <>{ renderViewMode() }</>;
};

export default memo( Render );
