import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className="app">
      <Router>
        {!user ? ( // user authentication
          <Login />
        ) : (
          <>
            {/* <> is shortened <React.Fragment> 
            this lets you return the list of children 
            without adding extra tags to DOM */}
            <Header />
            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  {/* :roomId is wild card */}
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
