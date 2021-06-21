import React, { useEffect, useState, useRef } from 'react';
import autosize from 'autosize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { auth, firestore } from '../firebase/config';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { deleteNoteAction } from '../redux/actions/notesActions';
import { DELETE_NOTE } from '../redux/actions/types';

const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

function Note(props) {
	const { color, text, date, id: noteId } = props.note;
	const noteDate = date.toDate();
	const simpifiedDate = `${months[noteDate.getMonth()]} ${noteDate.getDate()} ${noteDate.getFullYear()}`;
	const [ isEditing, setIsEditing ] = useState(false);
	const [ newText, setNewText ] = useState(text);
	const textRef = useRef(null);
	const dispatch = useDispatch();
	const noteRef = firestore.collection('users').doc(auth.currentUser.uid).collection('notes').doc(noteId);

	useEffect(
		() => {
			autosize(textRef.current);
		},
		[ isEditing ]
	);

	const editNote = async (e) => {
		e.preventDefault();
		const newDate = new Date();
		await noteRef.set({
			date: newDate,
			text: newText,
			color
		});
		setIsEditing(false);
	};

	const discradChanges = () => {
		setIsEditing(false);
		setNewText(text);
	};

	const deleteNote = () => {
		console.log(noteId);
		dispatch({ type: DELETE_NOTE, noteId });
	};

	return (
		<motion.div layout className={`note bg-${color}`}>
			{isEditing ? (
				<form onSubmit={editNote}>
					<textarea
						className="note-input"
						value={newText}
						ref={textRef}
						onChange={(e) => setNewText(e.target.value)}
					/>
					<div className="edit-op-con">
						<button className="btn-edit btn-discard" onClick={discradChanges}>
							<FontAwesomeIcon icon={faPlus} />
						</button>
						<button className="btn-edit btn-save" type="submit">
							<FontAwesomeIcon icon={faCheck} />
						</button>
					</div>
				</form>
			) : (
				<React.Fragment>
					<p className="text">{text}</p>
					<p className="date">{simpifiedDate}</p>
					<button className="btn-edit edit" onClick={() => setIsEditing(true)}>
						<FontAwesomeIcon icon={faEdit} />
					</button>
					<button className="btn-edit btn-remove" onClick={deleteNote}>
						<FontAwesomeIcon icon={faTrash} />
					</button>
				</React.Fragment>
			)}
		</motion.div>
	);
}

export default Note;
