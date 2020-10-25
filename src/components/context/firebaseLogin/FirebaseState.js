import React, {useReducer} from 'react'
import { CLEAR_ERRORS, HANDLE_LOGIN, HANDLE_LOGIN2, HANDLE_SIGNUP, HANDLE_SIGNUP2 } from '../types'
import fire from '../../../base'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'

export default function FirebaseState({children}) {
    const initialState = {
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        hasAccount: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    // const clearInputs = () => {
    //     dispatch({
    //         type: CLEAR_INPUTS
    //     })
      // }
      const clearErrors = () => {
        dispatch({
            type: CLEAR_ERRORS
        })
      }

      const handleLogin = () => {
        clearErrors()
          fire
          .auth()
          .signInWithEmailAndPassword(state.email,state.password)
          .catch((e)=>{
            switch(e.code){
              case 'auth/invalid-email':
                case 'auth/user-disable':
                  case 'auth/user-not-found':
                    dispatch({
                        type:HANDLE_LOGIN,
                        payload:e.message
                    })
                    break;
                  case 'auth/wrong-password':
                    dispatch({
                        type:HANDLE_LOGIN2,
                        payload:e.message
                    })
                    break;
            }
          })
      }

      const handleSignup = () => {
        clearErrors()
        fire
          .auth()
          .createUserWithEmailAndPassword(state.email,state.password)
          .catch((e)=>{
            switch(e.code){
              case 'auth/email-already-in-use':
                case 'auth/invalid-email':
                    dispatch({
                        type: HANDLE_SIGNUP,
                        payload:e.message
                    })
                    break;
                  case 'auth/weak-password':
                    dispatch({
                        type: HANDLE_SIGNUP2,
                        payload:e.message
                    })
                    break;
            }
          })
      }

      const handleLogout = () => {
        fire.auth().signOut()
      }
    return (
        <FirebaseContext.Provider value={
            handleLogout, handleSignup, handleLogin,
            state 
        }>
            {children}
        </FirebaseContext.Provider>
    )
}
