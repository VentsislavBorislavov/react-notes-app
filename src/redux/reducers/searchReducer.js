import { SEARCH } from '../actions/types';

const searchKey = '';

const searchReducer = (state = searchKey, action) => {
	switch (action.type) {
		case SEARCH:
			return action.payload;
		default:
			return state;
	}
};

export default searchReducer;
