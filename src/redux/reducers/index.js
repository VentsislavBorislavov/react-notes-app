import { combineReducers } from 'redux';

import editNoteReducer from './editNoteReducer';

export default combineReducers({
	noteEditing: editNoteReducer
});
