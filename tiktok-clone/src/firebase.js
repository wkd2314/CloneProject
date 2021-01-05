import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC8yxCM-NUVMzhmJAoKq40aXo27S1NsJMA',
  authDomain: 'tiktok-clone-a1e99.firebaseapp.com',
  projectId: 'tiktok-clone-a1e99',
  storageBucket: 'tiktok-clone-a1e99.appspot.com',
  messagingSenderId: '445212131314',
  appId: '1:445212131314:web:a55bbcb4ddfd3dec44356b',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
