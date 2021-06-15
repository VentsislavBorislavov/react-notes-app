import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IS_CREATEING_NOTE, SET_NOTE_COLOR } from '../redux/actions/types';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColorButton from './ColorButton';
import { auth, firebase } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import useButtonClass from '../hooks/useButtonClass';

function Create() {
	const [ user ] = useAuthState(auth);
	const dispatch = useDispatch();
	const createNote = useSelector((state) => state.noteEditing.isCreating);
	const selectedColor = useSelector((state) => state.noteEditing.color);
	const setIsCreatingNote = () => {
		dispatch({ type: IS_CREATEING_NOTE });
	};

	const setColor = (color) => {
		dispatch({ type: SET_NOTE_COLOR, color: color });
	};

	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	const btnClass = useButtonClass(createNote);

	return (
		<nav>
			<h1>Notes</h1>
			<button className={`btn btn-add ${btnClass}`} onClick={setIsCreatingNote}>
				<FontAwesomeIcon icon={faPlus} />
			</button>
			{createNote && (
				<React.Fragment>
					<ColorButton setColor={setColor} color={selectedColor} initialColor="red" />
					<ColorButton setColor={setColor} color={selectedColor} initialColor="orange" />
					<ColorButton setColor={setColor} color={selectedColor} initialColor="green" />
					<ColorButton setColor={setColor} color={selectedColor} initialColor="blue" />
					<ColorButton setColor={setColor} color={selectedColor} initialColor="purple" />
				</React.Fragment>
			)}
			{user ? (
				<button className="auth-button sign-out" onClick={() => auth.signOut()}>
					Sign out
				</button>
			) : (
				<button className="auth-button sign-in" onClick={signInWithGoogle}>
					Sign in
				</button>
			)}
		</nav>
	);
}

export default Create;
