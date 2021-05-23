import './App.css';
import Login from './Login';
import Home from './Home';
import React, { useState, useEffect} from 'react';
import {firebase} from './utils/firebase';

let userContext = React.createContext();

function App() {
  let [user, setUser] = useState();
  
  useEffect(function(){
    firebase.auth().onAuthStateChanged(user => {
        setUser(user);
      });
}, []);

  return (
    <div className="App">
      <userContext.Provider value={{user, setUser}}>
      <Login />
      <Home />
      </userContext.Provider>
    </div>
  );
}

export {App, userContext};
