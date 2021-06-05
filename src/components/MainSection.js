import React from 'react';
import Search from './Search';
import Notes from './Notes';
import SignIn from './SignIn';
import { auth, firestore, timestamp } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

function MainSection() {
	const [ user ] = useAuthState(auth);

	return (
		<div id="main">
			{user ? (
				<React.Fragment>
					<Search />
					<Notes />
				</React.Fragment>
			) : (
				<SignIn />
			)}
		</div>
	);
}

export default MainSection;
