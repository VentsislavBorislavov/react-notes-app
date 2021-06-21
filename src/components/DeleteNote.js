import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { firestore, auth } from '../firebase/config';
import { animate, motion } from 'framer-motion';
import { resetDeleteNoteAction } from '../redux/actions/notesActions';

function DeleteNote({ noteId }) {
	const dispatch = useDispatch();

	const resetDeletion = (e) => {
		dispatch(resetDeleteNoteAction());
	};

	const deleteNote = async () => {
		await firestore.collection('users').doc(auth.currentUser.uid).collection('notes').doc(noteId).delete();
		resetDeletion();
	};

	const resetByClickingBackground = (e) => {
		if (e.target.classList.contains('delete-note-popup')) resetDeletion();
	};

	return (
		<motion.div
			className="delete-note-popup"
			onClick={resetByClickingBackground}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<motion.div className="message-cover" initial={{ y: '-100vh' }} animate={{ y: 0 }}>
				<p>Are you sure you want to delete this note?</p>
				<div className="delete-buttons">
					<button className="delete-no" onClick={resetDeletion}>
						Cancel
					</button>
					<button className="delete-yes" onClick={deleteNote}>
						Delete
					</button>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default DeleteNote;
