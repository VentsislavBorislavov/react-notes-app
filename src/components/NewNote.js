import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IS_CREATEING_NOTE } from '../redux/actions/types';
import autosize from 'autosize';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth, firestore } from '../firebase/config';
import { motion } from 'framer-motion';

function NewNote() {
	const [ text, setText ] = useState('');
	const textRef = useRef(null);
	const color = useSelector((state) => state.noteEditing.color);
	const dispatch = useDispatch();
	const noteRef = firestore.collection('users').doc(auth.currentUser.uid).collection('notes');

	useEffect(() => {
		autosize(textRef.current);
	}, []);

	const createNote = async (e) => {
		e.preventDefault();
		const date = new Date();
		dispatch({ type: IS_CREATEING_NOTE });
		await noteRef.add({
			text,
			date,
			color
		});
		setText('');
	};

	return (
		<motion.div layout className={`note new-note bg-${color}`}>
			<form onSubmit={createNote}>
				<textarea
					className="note-input"
					placeholder="Add note"
					ref={textRef}
					onChange={(e) => setText(e.target.value)}
					value={text}
				/>
				{text && (
					<button className="btn-create-note" type="submit">
						<FontAwesomeIcon icon={faCheck} />
					</button>
				)}
			</form>
		</motion.div>
	);
}

export default NewNote;
