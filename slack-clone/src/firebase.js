import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDhmbUNrivScMFOw5tQAJB1ymsa58hhB6Y',
  authDomain: 'slack-clone-ca8a0.firebaseapp.com',
  projectId: 'slack-clone-ca8a0',
  storageBucket: 'slack-clone-ca8a0.appspot.com',
  messagingSenderId: '609710278586',
  appId: '1:609710278586:web:0c7ea6e1d9d19744c3ff83',
};
//firestone is better than firebase realtime
// firestone > hybrid between noSql + Sql
// structure: collection > documents > data
// firestone gives this structure on default while firebase realtime does not.

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db; // import anyname from './firebase';
