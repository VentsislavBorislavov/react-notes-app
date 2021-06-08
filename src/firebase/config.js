import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDlA8Plx4BBdwapprAs_5V30y5SrCrzyD8',
	authDomain: 'notes-app-3f825.firebaseapp.com',
	projectId: 'notes-app-3f825',
	storageBucket: 'notes-app-3f825.appspot.com',
	messagingSenderId: '773373217414',
	appId: '1:773373217414:web:dbfef2b843a84c90941f07'
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebase, firestore, timestamp, auth };
