import { combineReducers } from 'redux';

import editNoteReducer from './editNoteReducer';
import searchReducer from './searchReducer';

export default combineReducers({
	noteEditing: editNoteReducer,
	search: searchReducer
});
