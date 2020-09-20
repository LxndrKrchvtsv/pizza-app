import React from "react";
import Style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/login-reducer";

const Navbar = () => {
    const quantity = useSelector(state => state.cartMenu.quantityInCart);
    const isAuth = useSelector(state => state.loginPage.isAuth);
    const tel = useSelector(state => state.loginPage.tel);
    const name = useSelector(state => state.loginPage.name);
    const dispatch = useDispatch();
    return (
        <nav className={Style.nav}>
            <h2>Navigation</h2>
            <ul>
                <li className={Style.item}>
                    <NavLink to="pizza-app/Menu" activeClassName={Style.active}>Menu</NavLink>
                </li>
                <li className={Style.item}>
                    <NavLink to="pizza-app/Cart" activeClassName={Style.active}>Cart {quantity}</NavLink>
                </li>
                <li className={Style.item}>
                    {isAuth ? <NavLink to="pizza-app/Profile" activeClassName={Style.active}>Your profile, {name ? name+'!' : '+ '+tel}</NavLink>
                        : <NavLink to="pizza-app/Login" activeClassName={Style.active}>Login</NavLink>
                    }
                </li>
                <li className={Style.item}>
                    {isAuth && <NavLink to="pizza-app/Login" onClick={() => dispatch(logout())} activeClassName={Style.active}>Logout</NavLink>}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;