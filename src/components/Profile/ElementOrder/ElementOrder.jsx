import React, {useReducer, useState} from "react";
import {useDispatch} from "react-redux";
import Style from "./Element.module.css";

let ElementOrder = (props) => {
    const dispatch = useDispatch();
    
    return (
        <div className = { Style.wrapElement }>
            {
                props.pizzaItems.map(p => <div className = { Style.element } key={p.id} >
                    <img src={p.img} alt={p.name}/>
                    <div className={Style.name}>{p.name}</div>
                    <div className={Style.description}>{p.description}</div>
                    <div className={Style.price}>{p.priceEuro}</div>
                    <div className={Style.price}>{p.priceDollar}</div>
                </div>)
            }
        </div>
    )
}

export default ElementOrder;