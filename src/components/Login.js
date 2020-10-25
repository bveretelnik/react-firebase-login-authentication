import React, { useState, useEffect } from 'react'
import fire from '../base'
import Home from './pages/Home'

export default function Login() {
const [user, setUser] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')
const [hasAccount, setHasAccount] = useState(false)

const clearInputs = () => {
  setEmail('')
  setPassword('')
}
const clearErrors = () => {
  setEmailError('')
  setPasswordError('')
}



const handleLogin = () => {
  clearErrors()
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((e)=>{
      switch(e.code){
        case 'auth/invalid-email':
          case 'auth/user-disable':
            case 'auth/user-not-found':
              setEmailError(e.message);
              break;
            case 'auth/wrong-password':
              setPasswordError(e.message)
              break;
      }
    })
}
const handleSignup = () => {
  clearErrors()
  fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((e)=>{
      switch(e.code){
        case 'auth/email-already-in-use':
          case 'auth/invalid-email':
              setEmailError(e.message);
              break;
            case 'auth/weak-password':
              setPasswordError(e.message)
              break;
      }
    })
}


const authListener = () => {
  fire.auth().onAuthStateChanged((user)=> {
    if(user){
      clearInputs()
      setUser(user)
    }else {
      setUser('')
    }
  })
}

useEffect(() => {
  authListener()
  // eslint-disable-next-line
}, [])

    return (
        <>
        {!user ? (
            <section className='login'>
            <div className='loginContainer'>
                <label>UserName</label>
                <input 
                    type='text'
                    autoFocus
                    required
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <p className='errorMsg'>{emailError}</p>
                <label>Password</label>
                <input 
                type='password'
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                <p className='errorMsg'>{passwordError}</p>
                <div className='btnContainer'>
                    {
                        hasAccount ? (
                            <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don`t have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
                            </>
                        ): (
                            <>
                            <button onClick={handleSignup}>Sign up</button>
                            <p>Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
        ):(
            <Home />
        )}
        </>
        
    )
}
