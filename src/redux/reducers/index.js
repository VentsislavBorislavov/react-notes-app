import { combineReducers } from 'redux';

import editNoteReducer from './editNoteReducer';
import searchReducer from './searchReducer';
import deleteNoteReducer from './deleteNoteReducer';

export default combineReducers({
	noteEditing: editNoteReducer,
	search: searchReducer,
	deleteNote: deleteNoteReducer
});
