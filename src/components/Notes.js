import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';
import { firestore, auth } from '../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewNote from './NewNote';

function Notes() {
	const notesRef = firestore.collection('users').doc(auth.currentUser.uid).collection('notes'); // prolly have to put uid in brakests
	const [ notes, loading ] = useCollectionData(notesRef, { idField: 'id' });
	const createNote = useSelector((state) => state.noteEditing.isCreating);

	if (loading) {
		return (
			<div className="notes-loading">
				<div className="spinner">
					<FontAwesomeIcon icon={faSpinner} />
				</div>
			</div>
		);
	}

	const allnotes = notes.map((note) => (
		<Note key={note.id} text={note.text} seconds={note.date.seconds} color={note.color} />
	));

	return (
		<div className="notes">
			{createNote && <NewNote />}
			{allnotes}
		</div>
	);
}

export default Notes;
