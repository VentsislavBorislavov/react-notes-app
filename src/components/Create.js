import React, { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NotesColors from './NotesColors';
import { auth, firebase } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

function Create() {
	const [ selectColor, setSelectColor ] = useState(false);
	const [ user ] = useAuthState(auth);

	const change = () => {
		setSelectColor(!selectColor);
	};

	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return (
		<nav>
			<h1>Notes</h1>
			<button class="btn btn-add" onClick={change}>
				<FontAwesomeIcon icon={faPlus} />
			</button>
			{selectColor && <NotesColors />}
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
