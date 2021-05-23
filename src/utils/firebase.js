import firebase from 'firebase';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyCUVErgR9zV-pUcj4USWYMdLsUUWRbuEhg",
    authDomain: "fir-login-9be5b.firebaseapp.com",
    projectId: "fir-login-9be5b",
    storageBucket: "fir-login-9be5b.appspot.com",
    messagingSenderId: "556507616706",
    appId: "1:556507616706:web:720d5cd077a9e91a25f25b",
  };
  firebase.initializeApp(config);
  
  export {firebase};