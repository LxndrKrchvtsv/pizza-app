import React from "react";
import Style from "./Menu.module.css";
import Element from "./Element/Element";
import {showPrice} from "../../redux/cart-reducer";
import {useDispatch, useSelector} from "react-redux";

let Menu = (props) => {
    const dispatch = useDispatch();
    const showPriceVal = useSelector(state => state.cartMenu.showPriceVal);
    {
        return (
            <div className={Style.menu}>
                <div className={Style.headerWrap}>
                    <h3>Pizza's menu</h3>
                    <div className={Style.showVal} onClick={() => dispatch(showPrice(showPriceVal))}>{showPriceVal ? 'Show price in €' : 'Show price in $'}</div>
                </div>
                <Element pizzaItems={props.pizzaItems} />
            </div>
        )
    }
}

export default Menu;
