import React from 'react';
import Note from './Note';
import { firestore, auth } from '../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Notes() {
	const notesRef = firestore.collection('users').doc(auth.currentUser.uid).collection('notes'); // prolly have to put uid in brakests
	const [ notes, loading ] = useCollectionData(notesRef, { idField: 'id' });

	if (loading) {
		return (
			<div className="notes-loading">
				<div className="spinner">
					<FontAwesomeIcon icon={faSpinner} />
				</div>
			</div>
		);
	}

	return <div className="notes">{notes.map((note) => <Note key={note.id} text={note.text} date={note.date} />)}</div>;
}

export default Notes;
