import React, {useState} from 'react';
import Style from "../Cart.module.css";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormControls/FormControls";
import {useDispatch, useSelector} from "react-redux";


const FormOrder = (props) => {
    const cartItem = useSelector(state => state.cartMenu.cartItems);
    return (
        <form onSubmit={props.handleSubmit} style={{display: cartItem.length === 0 ? 'none' : 'block'}}>
            <div className={Style.wrapInput}>
                <Field component={Input} placeholder={'Name'} name={'name'} validate={required}/>
                <Field component={Input} placeholder={'Surname name'} name={'sureName'} />
            </div>
            <div className={Style.wrapInput}>
                <Field component={Input} placeholder={'Address'} name={'address'} validate={required}/>
                <Field component={Input} placeholder={'Phone number'} name={'tel'} validate={required}/>
            </div>
            <div className={Style.wrapInput}>
                <Field component={Input} placeholder={'E-mail'} name={'email'} validate={required}/>
                <button className={Style.buttonForm}>Submit Order</button>
            </div>
        </form>
    )
}

export const OrderReduxForm = reduxForm ({
    form: 'formOrder'
}) (FormOrder)



export default FormOrder;

