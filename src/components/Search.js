import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import searchAction from '../redux/actions/searchAction';

function Search() {
	const searchKey = useSelector((state) => state.search);
	const dispatch = useDispatch();

	return (
		<div className="search-section">
			<FontAwesomeIcon icon={faSearch} color="gray" />
			<input
				type="text"
				placeholder="Search"
				value={searchKey}
				onChange={(e) => dispatch(searchAction(e.target.value))}
			/>
		</div>
	);
}

export default Search;
