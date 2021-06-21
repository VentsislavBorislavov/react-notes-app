import { CANCEL_DELETE, DELETE_NOTE } from '../actions/types';

const initialState = '';

const deleteNoteReducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_NOTE:
			return action.noteId;
		case CANCEL_DELETE:
			return '';
		default:
			return state;
	}
};

export default deleteNoteReducer;
