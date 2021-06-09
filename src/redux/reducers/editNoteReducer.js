import { IS_CREATEING_NOTE, SET_NOTE_COLOR } from '../actions/types';

const initialState = { isCreating: false, color: 'green' };

export default function editNoteReducer(state = initialState, action) {
	switch (action.type) {
		case IS_CREATEING_NOTE:
			return Object.assign({}, state, { isCreating: !state.isCreating });
		case SET_NOTE_COLOR:
			return Object.assign({}, state, { color: action.color });
		default:
			return state;
	}
}
