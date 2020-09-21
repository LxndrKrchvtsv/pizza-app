import React, {useEffect, useReducer, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Style from "./ElementOrder.module.css";
import {profile} from "../../../redux/profile-reducer";

let ElementOrder = (props) => {
    const dispatch = useDispatch();
    const orderItem = useSelector(state => state.profilePage.orderItems);
    useEffect(() => {
        dispatch(profile(orderItem))
    }, [])
    console.log(orderItem)

    return (
        <div className={Style.wrapElement}>
            {
                orderItem.map(o => <div className={Style.element} key={o.id}>
                    <div className={Style.name}><span>Order №: </span>{o.num_order}</div>
                    {/*<div className={Style.name}>{o.tel}</div>*/}
                    {/*<img src={o.img} alt={o.name}/>*/}
                    <div className={Style.name}><span>Pizza: </span>{o.name}</div>
                    {/*<div className={Style.description}>{o.disc}</div>*/}
                    <div className={Style.name}><span>Quantity: </span>{o.count}</div>
                    <div className="wrapPrice">
                        <div className={Style.price}><span>Order price: </span>{o.tpd} $</div>
                        <div className={Style.price}><span>Order price: </span>{o.tpe} €</div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default ElementOrder;