import './App.css';
import { useContext, useEffect} from 'react';
import {userContext} from './App';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {firebase} from './utils/firebase';

function Login() {
    let {user, setUser} = useContext(userContext);

    useEffect(function(){
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
            //console.log(user);
          });
    }, []);

    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/signedIn',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID, ],
      };

    return (
    <div>{user ? (
        <button onClick={function(){
            firebase.auth().signOut();
        }
        }>Logout</button> ) : (
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        ) }
    </div>
  );
}

export default Login;
