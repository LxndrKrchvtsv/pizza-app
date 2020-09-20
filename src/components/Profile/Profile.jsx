import React, {useEffect} from "react";
import Style from "./Profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {profile} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";

const Profile = () => {
    const dispatch = useDispatch();
    const orderItem = useSelector(state => state.profilePage.orderItems);
    const isAuth = useSelector(state => state.loginPage.isAuth)

    useEffect(() => {
        dispatch(profile(orderItem))
    }, [])
    console.log(orderItem)

    if (isAuth === false) return <Redirect to={'/login'} />;

    return (
        <div className={Style.profile}>
            Here is Profile
                {
                    orderItem.map(o => <div className = { Style.element } key={o.id} >
                        <div className={Style.name}>{o.tel}</div>
                        <div className={Style.name}>{o.num_order}</div>
                        <div className={Style.name}>{o.count}</div>
                        <img src={o.img} alt={o.name}/>
                        <div className={Style.name}>{o.name}</div>
                        <div className={Style.description}>{o.disc}</div>
                        <div className={Style.price}>{o.tpd}</div>
                        <div className={Style.price}>{o.tpe}</div>
                    </div>)
                }
        </div>
    )
}

export default Profile;