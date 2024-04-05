import { classNames } from '../../../utils/helpers';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const { useState, useRef, useEffect } = wp.element;

const SuggestedKeywords = ( {
	className,
	keywordClassName,
	keywords,
	onClick,
} ) => {
	const [ scrollPosition, setScrollPosition ] = useState( 0 );
	const [ showLeftArrow, setShowLeftArrow ] = useState( false );
	const [ showRightArrow, setShowRightArrow ] = useState( false );
	const containerRef = useRef( null );

	useEffect( () => {
		if ( ! containerRef.current ) {
			return;
		}
		const { scrollWidth, clientWidth } = containerRef.current;
		setShowLeftArrow( scrollPosition > 0 );
		setShowRightArrow( scrollPosition < scrollWidth - clientWidth );
	}, [ keywords, scrollPosition ] );

	const handleOnClick = ( keyword ) => () => {
		if ( typeof onClick === 'function' ) {
			onClick( keyword );
		}
	};

	const handleScroll = ( event ) => {
		const { scrollLeft, scrollWidth, clientWidth } = event.target;
		setScrollPosition( scrollLeft );
		setShowLeftArrow( scrollLeft > 0 );
		setShowRightArrow( scrollLeft < scrollWidth - clientWidth );
	};

	const scrollTo = ( element, position ) => {
		if ( ! element ) {
			return;
		}
		element.scrollTo( {
			left: position,
			behavior: 'smooth',
		} );
	};

	const handleLeftArrowClick = () => {
		scrollTo( containerRef.current, 0 );
	};

	const handleRightArrowClick = () => {
		const container = containerRef.current;
		scrollTo( container, container.scrollWidth );
	};

	return (
		<div
			className={ classNames(
				'relative flex flex-row items-start',
				className,
			) }
		>
			{ showLeftArrow && (
				<button
					className="absolute inset-y-0 left-0 px-1.5 py-0.5 cursor-pointer text-app-inactive-icon hover:text-app-active-icon bg-gradient-to-r from-70% from-white to-transparent transition duration-150 ease-in-out border-none bg-transparent"
					onClick={ handleLeftArrowClick }
				>
					<ChevronLeftIcon className="w-6 h-6" />
				</button>
			) }
			<div
				className="flex flex-row flex-nowrap gap-2 overflow-x-auto hide-scrollbar"
				ref={ containerRef }
				onScroll={ handleScroll }
			>
				{ keywords.map( ( keyword, index ) => (
					<div
						key={ index }
						className={ classNames(
							'px-3 py-1 text-sm font-normal leading-5 rounded-full shadow-sm cursor-pointer text-app-text bg-white whitespace-nowrap',
							keywordClassName,
						) }
						onClick={ handleOnClick( keyword ) }
						aria-hidden="true"
					>
						{ keyword }
					</div>
				) ) }
			</div>
			{ showRightArrow && (
				<button
					className="absolute inset-y-0 right-0 px-1.5 py-0.5 cursor-pointer text-app-inactive-icon hover:text-app-active-icon bg-gradient-to-l from-70% from-white to-transparent transition duration-150 ease-in-out border-none bg-transparent"
					onClick={ handleRightArrowClick }
				>
					<ChevronRightIcon className="w-6 h-6" />
				</button>
			) }
		</div>
	);
};

export default SuggestedKeywords;
