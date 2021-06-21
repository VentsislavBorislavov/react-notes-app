import { CANCEL_DELETE, DELETE_NOTE } from './types';

export const deleteNoteAction = (note) => ({ type: DELETE_NOTE, note });
export const resetDeleteNoteAction = () => ({ type: CANCEL_DELETE });
