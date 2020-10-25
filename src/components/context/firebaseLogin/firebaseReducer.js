import { CLEAR_ERRORS, CLEAR_INPUTS, HANDLE_LOGIN, HANDLE_LOGIN2, HANDLE_LOGOUT, HANDLE_SIGNUP, HANDLE_SIGNUP2 } from "../types"

const handlers = {
    [CLEAR_INPUTS]: state => ({...state,email:'', password:''}),
    [CLEAR_ERRORS]: state => ({...state,emailError:'',passwordError:''}),
    [HANDLE_LOGIN]: (state,payload) => ({...state, emailError:payload}),
    [HANDLE_LOGIN2]: (state,payload) => ({...state,passwordError:payload}),
    [HANDLE_SIGNUP]: (state,payload) => ({...state, emailError:payload}),
    [HANDLE_SIGNUP2]: (state,payload) => ({...state,passwordError:payload}),
    [HANDLE_LOGOUT]: (state,payload) => ({state, user:payload}),
    DEFAULT: state => state
}

export const firebaseReducer = (state,action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}