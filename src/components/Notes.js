import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';
import { firestore, auth } from '../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewNote from './NewNote';

const filterNotes = (notes, searchKey) => {
	return (
		notes &&
		notes
			.filter((note) => note.text.toLowerCase().includes('' + searchKey.toLowerCase()))
			.map((note) => <Note key={note.id} note={note} />)
	);
};

function Notes() {
	const notesQuery = firestore
		.collection('users')
		.doc(auth.currentUser.uid)
		.collection('notes')
		.orderBy('date', 'desc');
	const [ notes, loading ] = useCollectionData(notesQuery, { idField: 'id' });
	const createNote = useSelector((state) => state.noteEditing.isCreating);
	const searchKey = useSelector((state) => state.search);

	if (loading) {
		return (
			<div className="notes-loading">
				<div className="spinner">
					<FontAwesomeIcon icon={faSpinner} />
				</div>
			</div>
		);
	}

	return (
		<div className="notes">
			{createNote && <NewNote />}
			{filterNotes(notes, searchKey)}
		</div>
	);
}

export default Notes;
