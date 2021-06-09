import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import autosize from 'autosize';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth, firestore, timestamp } from '../firebase/config';

function NewNote() {
	const [ text, setText ] = useState('');
	const textRef = useRef(null);
	const color = useSelector((state) => state.noteEditing.color);

	const messageRef = firestore.collection('users').doc(auth.currentUser.uid).collection('notes');

	const createNote = async (e) => {
		e.preventDefault();

		await messageRef.add({
			text,
			date: timestamp(),
			color
		});

		setText('');
	};

	useEffect(() => {
		autosize(textRef.current);
	}, []);

	return (
		<div className={`note new-note bg-${color}`}>
			<form onSubmit={createNote}>
				<textarea
					className="note-input"
					placeholder="Add note"
					ref={textRef}
					onChange={(e) => setText(e.target.value)}
					value={text}
				/>
				{text && (
					<button className="submit" type="submit">
						<FontAwesomeIcon icon={faCheck} />
					</button>
				)}
			</form>
		</div>
	);
}

export default NewNote;
