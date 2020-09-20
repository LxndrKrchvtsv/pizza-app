import React from 'react';
import {showPrice} from "../../../redux/cart-reducer";
import {useDispatch, useSelector} from "react-redux";
import Style from "../Cart.module.css"

const SwitcherVal = () => {
    const totalPricesDE = useSelector(state => state.cartMenu.totalPricesDE);
    const totalDeliveryDE = useSelector(state => state.cartMenu.totalDeliveryDE);
    const showPriceVal = useSelector(state => state.cartMenu.showPriceVal);
    const orderResponse = useSelector(state => state.cartMenu.orderResponse);
    const cartItem = useSelector(state => state.cartMenu.cartItems);
    const dispatch = useDispatch();
    return (
        <div className={Style.switcherCartWrap}>
            <div>

                <h4>

                    <span>{(totalPricesDE.totalPriceD === null) && (totalPricesDE.totalPriceE === null) ?
                        'Cart is empty.' :
                        showPriceVal ? 'The total cost of your order: ' + totalPricesDE.totalPriceD
                            + '$, also delivery costs: ' + totalDeliveryDE.deliveryPriceD + '$; '
                            : 'The total cost of your order: ' + totalPricesDE.totalPriceE
                            + '€, also delivery costs: ' + totalDeliveryDE.deliveryPriceE + '€'}</span>
                    <span>{orderResponse.numOrder === null && orderResponse.name === null ? '' : 'Dear ' + orderResponse.name
                            + '. Your order is accepted, your order number: №' + orderResponse.numOrder}</span>

                    <span>{orderResponse.numOrder !== null || orderResponse.name === null ? ''
                        : 'Your order is accepted, your order number: №' + orderResponse.numOrder}</span>
                </h4>
            </div>
            <div className={Style.showVal} style={{display: cartItem.length === 0 ? 'none' : 'block'}}
                 onClick={() => dispatch(showPrice(showPriceVal))}>{showPriceVal ? 'Show price in €' : 'Show price in $'}</div>
        </div>
    );
};

export default SwitcherVal;