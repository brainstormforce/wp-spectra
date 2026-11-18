const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo, useEffect, useState } = wp.element;
import SingleBlockWrapper from '../../../reusable/single-block/single-block';
import Filters from './filters/index';

import NoSearchResult from '../../../reusable/no-search-result/no-search-result';
import BackToTemplates from '../../../reusable/back-to-templates/back-to-templates';
import Notice from '../../../reusable/notice/notice';

const AllWireframesGrid = ( {
	filterBlocksByColor,
	setFilterBlocksBySearchTerm,
	allWireframes,
	defaultPalette,
	activePalette,
	allCategories
} ) => {
	const items = [];
	const cats = [];
	let allCount = 0;
	const [ allBlocksMounted, setAllBlocksMounted ] = useState( false );

	for ( const blockId in allWireframes ) {
		const type = allWireframes[ blockId ].filter || '';
		const cat_id =
			'object' === typeof allWireframes[ blockId ].category
				? 0
				: parseInt( allWireframes[ blockId ].category );

		if ( ! cats[ cat_id ] ) {
			const item = allCategories.filter( ( catItem ) => catItem.id === cat_id );
			const single = item.length ? item[ 0 ] : {};
			single.id = cat_id;
			single.count = 0;
			cats[ cat_id ] = single;
		}

		if (
			// Add count if there is no filter set.
			! filterBlocksByColor ||
			// Or,
			// Only add count from the selected filter.
			( filterBlocksByColor && type === filterBlocksByColor )
		) {
			// Update the category count.
			cats[ cat_id ].count = parseInt( cats[ cat_id ].count ) + 1;

			// Increase the all count.
			allCount = allCount + 1;

			items.push( allWireframes[ blockId ] );
		}
	}

	const onClickBackToTemplates = ( ) => {
		setFilterBlocksBySearchTerm( '' );
	};

	useEffect( () => {
		if ( allBlocksMounted ) {
			// Call this function after all instances of SingleBlock are mounted
			// and content is loaded
			correctWrapperHeights();
			InitMasonry();
		}
	}, [ allBlocksMounted ] );

	const correctWrapperHeights = () => {
		const containerWrappers = document.querySelectorAll( '.sd-container' );

		containerWrappers.forEach( ( wrapper ) => {
			const container = wrapper.querySelector( '.thumbnail' );
			if ( container ) {
				const containerHeight = container.offsetHeight;
				// Extract the scale value from the style attribute
				const scaleValueMatch =
					container.style.transform.match( /scale\((.*?)\)/ );
				if ( scaleValueMatch ) {
					const scaleValue = parseFloat( scaleValueMatch[ 1 ] );
					wrapper.style.height = `${ containerHeight * scaleValue }px`;
				}
			}
		} );
	};

	const handleBlockMount = ( index ) => {
		if ( index === items.length - 1 ) {
			setAllBlocksMounted( true );
		}
	};

	const InitMasonry = () => {
		const container = document.getElementById(
			'ast-block-templates-grid-blocks'
		);

		if ( container ) {
			new Masonry( container );
		}
	};

	const [ visibleItems, setVisibleItems ] = useState( 10 ); // Number of visible items
	const colorPalette =
		Object.keys( activePalette ).length > 0
			? activePalette.colors
			: defaultPalette.colors;

	// Debounce function implementation
	const debounce = ( func, delay ) => {
		let timeoutId;
		return ( ...args ) => {
			clearTimeout( timeoutId );
			timeoutId = setTimeout( () => func( ...args ), delay );
		};
	};

	const handleScroll = () => {
		if (
			window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 500 &&
			items.length > visibleItems // Adjust the threshold
		) {
			setVisibleItems( ( prevVisibleItems ) => prevVisibleItems + 10 ); // Increase the number of visible items
		}
	};

	useEffect( () => {
		const handleScrollDebounced = debounce( handleScroll, 200 ); // Debounce the scroll event handler
		const containers = document.getElementsByClassName(
			'ast-block-templates-content'
		);
		if ( containers.length > 0 ) {
			const container = containers[ 0 ];
			container.addEventListener( 'scroll', handleScrollDebounced );
			return () =>
				container.removeEventListener( 'scroll', handleScrollDebounced );
		}
	}, [ handleScroll ] ); // Include handleScroll in the dependency array

	const visibleBlockItems = items.slice( 0, visibleItems );

	return (
		<div className="ast-block-templates-grid-blocks active">
			<Filters />

			<div className="ast-block-templates-pattern-grid">
				<Notice />
				<div
					className="ast-block-templates-grid"
					id="ast-block-templates-grid-blocks"
				>
					{ visibleBlockItems.length ? (
						visibleBlockItems.map( ( item, index ) => (
							<SingleBlockWrapper
								key={ item.ID }
								item={ item }
								InitMasonry={ InitMasonry }
								content={ item.content }
								stylesheet={ item.stylesheet }
								astraCustomizer={ item.astra_customizer }
								colorPalette={ colorPalette }
								onMount={ () => handleBlockMount( index ) }
							/>
						) )
					) : (
						<NoSearchResult>
							<BackToTemplates
								afterClick={ onClickBackToTemplates }
							/>
						</NoSearchResult>
					) }
				</div>
			</div>
		</div>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const {
			setFilterBlocksBySearchTerm,
			setFilterBlocksByCategory,
			setActivePalette,
		} = dispatch( 'ast-block-templates' );
		return {
			setFilterBlocksByCategory,
			setFilterBlocksBySearchTerm,
			setActivePalette,
		};
	} ),
	withSelect( ( select ) => {
		const {
			getAllWireframes,
			getFilterBlocksByCategory,
			getFilterBlocksByColor,
			getDefaultColorPalette,
			getActivePalette,
			getAllCategories,
		} = select( 'ast-block-templates' );
		return {
			filterBlocksByCategory: getFilterBlocksByCategory(),
			filterBlocksByColor: getFilterBlocksByColor(),
			allWireframes: getAllWireframes(),
			defaultPalette: getDefaultColorPalette(),
			activePalette: getActivePalette(),
			allCategories: getAllCategories()
		};
	} )
)( memo( AllWireframesGrid ) );
