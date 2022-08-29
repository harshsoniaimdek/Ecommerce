import * as types from "./actionTypes"
import { auth } from "firebase";
const registerStart = () => ({
    type: types.REGISTER_START,
})

const registerSuccess = (user) => ({

    type: types.REGISTER_SUCCESS,
    payload: user,
})

const registerFail = (error) =>({

    type: types.REGISTER_FAIL,
    payload: error,
})

const loginStart = () => ({
    type: types.LOGIN_START,
})

const loginSuccess = (user) => ({

    type: types.LOGIN_SUCCESS,
    payload: user,
})

const loginFail = (error) =>({

    type: types.LOGIN_FAIL,
    payload: error,
})

const logoutStart = () => ({
    type: types.LOGOUT_START,
})

const logoutSuccess = () => ({

    type: types.LOGOUT_SUCCESS,
})

const logoutFail = (error) =>({

    type: types.LOGOUT_FAIL,
    payload: error,
})

export const registerInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(registerStart());
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(({ user }) => {
            dispatch(registerSuccess(user));
        })
        .catch((error) => dispatch.registerFail(error.message))
    };
};

export const logIn = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());
        auth
        .signInWithEmailAndPassword(email,password)
        .then(({ user }) => {
            dispatch(loginSuccess(user));
        })
        .catch((error) => dispatch.loginFail(error.message))
    };
};

export const logOut = (email, password => {
    return function (dispatch) {
        dispatch(logoutStart());
        auth
        .signInWithEmailPassword(email,password)
        .then(({ user }) => {
            dispatch(logoutSuccess(user));
        })
        .catch((error) => dispatch.logoutFail(error.message))
    }
})
