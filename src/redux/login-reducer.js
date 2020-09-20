import {orderAPI} from "../components/api/api";
const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';
const SET_VERIFY_DISPLAY = 'SET_VERIFY_DISPLAY';
const SET_LOGIN_HIDE = 'SET_LOGIN_HIDE';

let initialState = {
    tel: null,
    name: null,
    isAuth: false,
    verifyDisplay: 'none',
    loginHide: 'flex'
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                tel: action.data.tel,
                name: action.data.name,
                isAuth: true
            }
        }
        case LOGOUT: {
            localStorage.removeItem('token');
            return {
                ...state,
                tel: null,
                name: null,
                isAuth: false
            }
        }
        case SET_VERIFY_DISPLAY: {
            return {
                ...state,
                verifyDisplay: action.verifyDisplay
            }
        }
        case SET_LOGIN_HIDE: {
            return {
                ...state,
                loginHide: action.loginHide
            }
        }
        default:
            return state;
    }
};

export const setUserData = (tel, name, isAuth) => ({type: SET_USER_DATA, data: {tel, name, isAuth}});
export const logout = () => ({type: LOGOUT});
export const verifyDisplay = (verifyDisplay) => ({type: SET_VERIFY_DISPLAY, verifyDisplay});
export const loginHide = (loginHide) => ({type: SET_LOGIN_HIDE, loginHide});

export const login = (tel) => {
    return () => {
        orderAPI.login(tel)
    }
};

export const verify = (tel, code) => {
    return (dispatch) => {
        orderAPI.verify(tel, code)
            .then(response => {
                console.log(response.data);
                dispatch(setUserData(response.data.user.tel, response.data.user.name, true));
                localStorage.setItem('token', response.data.token);
            })
    }
};

export const auth = () => {
    return (dispatch) => {
        orderAPI.auth()
            .then(response => {
                console.log(response.data);
                dispatch(setUserData(response.data.user.tel, response.data.user.name, true));
                localStorage.setItem('token', response.data.token);
            })
    }
};

export default loginReducer;