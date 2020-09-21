import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";
import MenuContainer from "./components/Menu/MenuContainer";
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./redux/login-reducer";

function App(props) {
    const isAuth = useSelector(state => state.loginPage.isAuth)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth())
    }, [])
    return (
        <BrowserRouter  basename={process.env.PUBLIC_URL}>
            <main className="app-wrapper">
                {/*<Header />*/}
                <Navbar/>
                <div className="app-content-wrapper">
                    <Route path="/cart" render={() => <Cart/>}/>
                    <Route path="/menu" render={() => <MenuContainer/>}/>
                    {isAuth ? <Route path="/Profile" render={() => <Profile/>}/>
                        : <Route path="/login" render={() => <Login/>}/>
                    }
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
