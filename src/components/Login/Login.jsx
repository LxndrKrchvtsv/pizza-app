import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormControls/FormControls";
import {connect, useSelector} from "react-redux";
import {login, loginHide, setUserData, verifyDisplay} from "../../redux/login-reducer";
import Verify from "./Verify/Verify";
import Style from "./Login.module.css";

const LoginForm = (props) => {
    const loginHide = useSelector(state => state.loginPage.loginHide);
    return (
        <form className={Style.wrapForm} onSubmit={props.handleSubmit} style={{display: loginHide}} >
            <div><Field component={Input} name={'tel'} placeholder={'Enter phone number'} validate={required} /></div>
            <div>
                <button className={Style.logButton}>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm ({
    form: 'formLogin'
}) (LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.tel);
        props.verifyDisplay('block');
        props.loginHide('none');
    }
    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit} />
            <Verify />
        </div>
    );
};

export default connect(null, {login, verifyDisplay, loginHide})(Login);