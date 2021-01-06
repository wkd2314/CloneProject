import React, { useEffect } from 'react';
import './App.css';
import Telegram from './components/Telegram';
import { auth } from './firebase';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/Login';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  //Allows you to extract data from the Redux store state
  // done through dispatch(reducer)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // login
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL, //photoURL >> photo
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  /*
  firebase.auth().onAuthStateChanged(function(user) {
     *   if (user) {
     *     // User is signed in.
     *   }
  */
  return <div className="app">{user ? <Telegram /> : <Login />}</div>;
}

export default App;
