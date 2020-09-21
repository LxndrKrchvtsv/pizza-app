import React, {useEffect} from "react";
import Style from "./Profile.module.css";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import ElementOrder from "./ElementOrder/ElementOrder";

const Profile = () => {
    const isAuth = useSelector(state => state.loginPage.isAuth)
    if (isAuth === false) return <Redirect to={'/login'} />;

    return (
        <div className={Style.profile}>
            <h3>Profile order history</h3>
                <ElementOrder />
        </div>
    )
}

export default Profile;