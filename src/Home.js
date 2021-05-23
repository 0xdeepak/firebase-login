import './App.css';
import { useContext} from 'react';
import {userContext} from './App'

function Home() {

    let {user} = useContext(userContext);
    return (
        <div>
           <h1>{user ? user.displayName : undefined}</h1> 
        </div>
  );
}

export default Home;
