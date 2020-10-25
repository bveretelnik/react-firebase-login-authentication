import React, {useState,useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import Login from './components/Login';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';

function App() {
// const [user, setUser] = useState('')
// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')
// const [emailError, setEmailError] = useState('')
// const [passwordError, setPasswordError] = useState('')
// const [hasAccount, setHasAccount] = useState(false)

// const clearInputs = () => {
//   setEmail('')
//   setPassword('')
// }
// const clearErrors = () => {
//   setEmailError('')
//   setPasswordError('')
// }



// const handleLogin = () => {
//   clearErrors()
//     fire
//     .auth()
//     .signInWithEmailAndPassword(email,password)
//     .catch((e)=>{
//       switch(e.code){
//         case 'auth/invalid-email':
//           case 'auth/user-disable':
//             case 'auth/user-not-found':
//               setEmailError(e.message);
//               break;
//             case 'auth/wrong-password':
//               setPasswordError(e.message)
//               break;
//       }
//     })
// }
// const handleSignup = () => {
//   clearErrors()
//   fire
//     .auth()
//     .createUserWithEmailAndPassword(email,password)
//     .catch((e)=>{
//       switch(e.code){
//         case 'auth/email-already-in-use':
//           case 'auth/invalid-email':
//               setEmailError(e.message);
//               break;
//             case 'auth/weak-password':
//               setPasswordError(e.message)
//               break;
//       }
//     })
// }

// const handleLogout = () => {
//   fire.auth().signOut()
// }

// const authListener = () => {
//   fire.auth().onAuthStateChanged((user)=> {
//     if(user){
//       clearInputs()
//       setUser(user)
//     }else {
//       setUser('')
//     }
//   })
// }

// useEffect(() => {
//   authListener()
//   // eslint-disable-next-line
// }, [])

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/services'} component={Services}/>
        <Route path={'/login'} component={Login}/>
      </Switch>
      {/* { user ? (
        <Home />
      ) : (
        <Login 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          passwordError={passwordError}
          emailError={emailError}
        />
      )} */}
    </div>
    </BrowserRouter> 
  );
}

export default App;
