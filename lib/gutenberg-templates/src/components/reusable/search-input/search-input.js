import { __ } from '@wordpress/i18n';
const { memo, useState, useEffect } = wp.element;

import './search-input.scss';

const SearchInput = ( { onSearch, value, searchInputRef, placeholder } ) => {
	const [ searchTerm, setSearchTerm ] = useState( '' );
	const placeholderText = placeholder
		? placeholder
		: __( 'Search..', 'ast-block-templates' );

	useEffect( () => {
		setSearchTerm( value );
	}, [ value ] );

	return (
		<div className={ `search-form ${ searchTerm ? 'have-input' : '' }` }>
			<input
				ref={ searchInputRef }
				type="search"
				name="search"
				value={ value }
				placeholder={ placeholderText }
				onChange={ ( event ) => {
					onSearch( event );
				} }
			/>
			<button className="button">
				<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0)">
						<path d="M7.33853 6.71932C7.83062 6.02464 8.12496 5.17135 8.12496 4.24633C8.12496 1.93072 6.30245 0.0466766 4.06247 0.0466766C1.82249 0.0466766 0 1.93072 0 4.24633C0 6.56193 1.82251 8.44598 4.06249 8.44598C4.95731 8.44598 5.7828 8.14166 6.45479 7.63296L9.11622 10.3842L10 9.47062C10 9.4706 7.33853 6.71932 7.33853 6.71932ZM4.06249 7.15377C2.51159 7.15377 1.25 5.84959 1.25 4.24633C1.25 2.64306 2.51159 1.33888 4.06249 1.33888C5.61339 1.33888 6.87498 2.64306 6.87498 4.24633C6.87498 5.84959 5.61337 7.15377 4.06249 7.15377Z" fill="#C6CCD2" />
					</g>
					<defs>
						<clipPath id="clip0">
							<rect width="10" height="10.3376" fill="white" transform="translate(0 0.0466309)" />
						</clipPath>
					</defs>
				</svg>
			</button>
		</div>
	);
};

export default memo( SearchInput );
