/**
 * External dependencies
 */
import { PostTitle } from './post-title/edit';
import { PostMeta } from './post-meta/edit';
import { PostImage } from './post-image/edit';
import { PostTaxonomy } from './post-taxonomy/edit';
import { PostExcerpt } from './post-excerpt/edit';
import { PostButton } from './post-button/edit';
import { createContext, useContext, Suspense } from '@wordpress/element';
const InnerBlockLayoutContext = createContext( {
	parentName: '',
	parentClassName: '',
	isLoading: false,
} );

export const useInnerBlockLayoutContext = () => useContext( InnerBlockLayoutContext );

export const InnerBlockLayoutContextProvider = ( { parentName = '', parentClassName = '', children } ) => {
	const contextValue = {
		parentName,
		parentClassName,
	};
	return <InnerBlockLayoutContext.Provider value={ contextValue }>{ children }</InnerBlockLayoutContext.Provider>;
};

export const DEFAULT_POST_LIST_LAYOUT = [
	[ 'uagb/post-image' ],
	[ 'uagb/post-taxonomy' ],
	[ 'uagb/post-title' ],
	[ 'uagb/post-meta' ],
	[ 'uagb/post-excerpt' ],
	[ 'uagb/post-button' ],
];
export const renderPostLayout = ( blockName, post, layoutConfig, attributes, categoriesList, setAttributes, article, isLeftToRightLayout ) => {
	if ( ! layoutConfig ) {
		return;
	}

	const blockMap = getBlockMap( blockName );
	let children = []; // eslint-disable-line no-unused-vars

	const mapFunction = ( [ name, props = {} ], key, addWrapper = null ) => {
		if ( 1 === addWrapper && 'uagb/post-image' ===  name  ) {
			return ;
		}

		if ( 0 === addWrapper && 'uagb/post-image' !==  name  ) {
			return ;
		}

		if ( 'not-installed' === props.children && props.children.length > 0 ) {
			children = renderPostLayout( blockName, post, props.children, attributes, categoriesList, setAttributes, article, isLeftToRightLayout );
		}

		const LayoutComponent = blockMap[ name ];
		if ( ! LayoutComponent ) {
			return null;
		}

		return (
			<Suspense key={ key } fallback={ <div className="wc-block-placeholder" /> }>
				<LayoutComponent
					{ ...props }
					post={ post }
					attributes={ attributes }
					categoriesList={ categoriesList }
					setAttributes={ setAttributes }
				/>
			</Suspense>
		);
	};

	const leftRightWrapper = (
		<>
		  {layoutConfig.map( ( [name, props = {}], key ) => mapFunction( [name, props], key, 0 ) )}
		  <div className='uag-post-grid-wrapper'>
			{layoutConfig.map( ( [name, props = {}], key ) => mapFunction( [name, props], key, 1 ) )}
		  </div>
		</>
	  );

	const noWrapper = layoutConfig.map( ( [name, props = {}], key ) => mapFunction( [name, props], key, null ) )
	return isLeftToRightLayout ? leftRightWrapper : noWrapper;
	  
	
};
const registeredBlockComponents = {};

export { registeredBlockComponents };

export function registerBlockComponent( options ) {
	if ( ! options.context ) {
		options.context = 'any';
	}
	assertOption( options, 'context', 'string' );
	assertOption( options, 'blockName', 'string' );
	assertBlockComponent( options, 'component' );

	const { context, blockName, component } = options;

	if ( ! registeredBlockComponents[ context ] ) {
		registeredBlockComponents[ context ] = {};
	}

	registeredBlockComponents[ context ][ blockName ] = component;
}

const assertBlockComponent = ( options, optionName ) => {
	if ( options[ optionName ] ) {
		if ( typeof options[ optionName ] === 'function' ) {
			return;
		}
		if ( options[ optionName ].$$typeof && options[ optionName ].$$typeof === Symbol.for( 'react.lazy' ) ) {
			return;
		}
	}
	throw new Error(
		`Incorrect value for the ${ optionName } argument when registering a block component. Component must be a valid React Element or Lazy callback.`
	);
};

const assertOption = ( options, optionName, expectedType ) => {
	const actualType = typeof options[ optionName ];
	if ( actualType !== expectedType ) {
		throw new Error(
			`Incorrect value for the ${ optionName } argument when registering a block component. It was a ${ actualType }, but must be a ${ expectedType }.`
		);
	}
};

registerBlockComponent( {
	blockName: 'uagb/post-title',
	component: PostTitle,
} );

registerBlockComponent( {
	blockName: 'uagb/post-image',
	component: PostImage,
} );

registerBlockComponent( {
	blockName: 'uagb/post-taxonomy',
	component: PostTaxonomy,
} );

registerBlockComponent( {
	blockName: 'uagb/post-meta',
	component: PostMeta,
} );

registerBlockComponent( {
	blockName: 'uagb/post-excerpt',
	component: PostExcerpt,
} );

registerBlockComponent( {
	blockName: 'uagb/post-button',
	component: PostButton,
} );

export const getBlockMap = ( blockName ) => getRegisteredBlockComponents( blockName );

export function getRegisteredBlockComponents( context ) {
	const parentInnerBlocks =
		typeof registeredBlockComponents[ context ] === 'object' &&
		Object.keys( registeredBlockComponents[ context ] ).length > 0
			? registeredBlockComponents[ context ]
			: {};

	return {
		...parentInnerBlocks,
		...registeredBlockComponents.any,
	};
}

/**
 * Converts innerblocks to a list of layout configs.
 *
 * @param {Object[]} innerBlocks Inner block components.
 */
export const getPostLayoutConfig = ( innerBlocks ) => {
	if ( ! innerBlocks || innerBlocks.length === 0 ) {
		return [];
	}

	return innerBlocks.map( ( block ) => {
		return [
			block.name,
			{
				...block.attributes,
				post: undefined,
				children: block.innerBlocks.length > 0 ? getPostLayoutConfig( block.innerBlocks ) : [],
			},
		];
	} );
};
