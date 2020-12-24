import { __ } from '@wordpress/i18n';
const { memo, useState, useEffect } = wp.element;

import './search-input.scss';

const SearchInput = ({ onSearch, value, searchInputRef, placeholder }) => {
	let [searchTerm, setSearchTerm] = useState('');
	let placeholderText = placeholder
		? placeholder
		: __('Search..', 'gutenberg-templates');

	useEffect(() => {
		setSearchTerm(value);
	});

	return (
		<div className={`search-form ${searchTerm ? 'have-input' : ''}`}>
			<input
				ref={searchInputRef}
				type="search"
				name="search"
				value={value}
				placeholder={placeholderText}
				onChange={(event) => {
					// setSearchTerm(event.target.value);
					onSearch(event);
				}}
			/>
			<button className="button">
				<span className="gutenberg-templates-icon gutenberg-templates-icon-search"></span>
			</button>
		</div>
	);
};

export default memo(SearchInput);
