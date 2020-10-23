import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyDso0h9MCUDgjJoXIrfB0LjN05IDYV6Ul8",
    authDomain: "react-auth-form.firebaseapp.com",
    databaseURL: "https://react-auth-form.firebaseio.com",
    projectId: "react-auth-form",
    storageBucket: "react-auth-form.appspot.com",
    messagingSenderId: "53588483923",
    appId: "1:53588483923:web:07f00c49386b6c65f58ba6"
  };
 
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire