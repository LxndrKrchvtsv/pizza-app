import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Style from "./Element.module.css";
import {addPizza} from "../../../redux/cart-reducer";

let Element = (props) => {
    const dispatch = useDispatch();
    const handleAddPizza = (p) => {
        dispatch(addPizza(p));
    }
    const showPriceVal = useSelector(state => state.cartMenu.showPriceVal);

    return (
        <div className = { Style.wrapElement }>
            {
                props.pizzaItems.map(p => <div className = { Style.element } key={p.id} >
                    <img className={Style.imgElement} src={p.img} alt={p.name}/>
                    <div className={Style.name}><span>Pizza:</span> {p.name}</div>
                    <div className={Style.description}><span>Description:</span> {p.description}</div>
                    <div className={Style.wrapPriceButton}>
                        <div className={Style.wrapPrice}>
                            <div className={Style.price}><span>Price: </span>
                                {
                                    showPriceVal ?  p.priceDollar + '$' : p.priceEuro + '€'
                                }
                            </div>
                        </div>
                        <button className={Style.addToCart} onClick={() => handleAddPizza(p)}>Add to cart</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Element;