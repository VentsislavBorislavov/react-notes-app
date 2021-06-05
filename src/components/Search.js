import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
	return (
		<div className="search-section">
			<FontAwesomeIcon icon={faSearch} color="gray" />
			<input type="text" placeholder="Search" />
		</div>
	);
}

export default Search;
