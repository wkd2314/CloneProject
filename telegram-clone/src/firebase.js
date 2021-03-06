import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD0cl-YpZYeFyId8O_6SIZEqzKFNottM-k',
  authDomain: 'telegram-clone-2013a.firebaseapp.com',
  projectId: 'telegram-clone-2013a',
  storageBucket: 'telegram-clone-2013a.appspot.com',
  messagingSenderId: '474874731741',
  appId: '1:474874731741:web:6833063f579c002e1c4f34',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
