import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Style from "./Cart.module.css";
import {OrderReduxForm} from "./OrderForm/OrderForm";
import {sentOrder} from "../../redux/cart-reducer";
import SwitcherVal from "./SwitcherVal/SwitcherVal";


const Cart = () => {
    const cartItem = useSelector(state => state.cartMenu.cartItems);
    const totalPricesDE = useSelector(state => state.cartMenu.totalPricesDE);
    const numOrder = useSelector(state => state.cartMenu.numOrder);
    const showPriceVal = useSelector(state => state.cartMenu.showPriceVal);
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(sentOrder(formData.name,
            formData.sureName,
            formData.address,
            formData.tel,
            formData.email,
            Number(totalPricesDE.totalPriceD).toFixed(2),
            Number(totalPricesDE.totalPriceE).toFixed(2),
            cartItem,
            numOrder));
        console.log(formData);
    };

    return (
        <div>
            <h3>Cart</h3>
            <SwitcherVal/>
            <div className={Style.wrapElement}>
                {
                    cartItem.map(c => <div className={Style.element} key={c.item.id}>
                        <img className={Style.imgElement} src={c.item.img} alt={c.item.name}/>
                        <div className={Style.name}><span>Pizza:</span> {c.item.name}</div>
                        <div className={Style.description}><span>Description:</span> {c.item.description}</div>
                        <div className={Style.wrapPrice}>
                            <div className={Style.price}><span>Price: </span>
                                {
                                    showPriceVal ? c.item.priceDollar + '$' : c.item.priceEuro + '€'
                                }
                            </div>
                            <div className={Style.price}><span>Count:</span> {c.count}</div>
                        </div>
                    </div>)
                }
            </div>
            <OrderReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default (Cart);