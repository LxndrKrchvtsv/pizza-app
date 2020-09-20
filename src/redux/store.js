import {applyMiddleware, combineReducers, createStore} from "redux";
import menuReducer from "./menu-reducer";
import cartReducer from "./cart-reducer";
import loginReducer from "./login-reducer";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    menuPage: menuReducer,
    cartMenu: cartReducer,
    loginPage: loginReducer,
    profilePage: profileReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;