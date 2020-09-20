import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormControls/FormControls";
import {connect, useSelector} from "react-redux";
import {verify} from "../../../redux/login-reducer";
import {useHistory} from "react-router-dom";
import Style from "../Login.module.css"

const VerifyForm = (props) => {
    return (
        <form className={Style.wrapForm} onSubmit={props.handleSubmit}>
            <div><Field component={Input} name={'code'} placeholder={'Enter code'} validate={required} /></div>
            <div>
                <button className={Style.logButton}>Verify</button>
            </div>
        </form>
    );
};

const VerifyReduxForm = reduxForm ({
    form: 'formVerify'
}) (VerifyForm);

const Verify = (props) => {
    const fromTel = useSelector(state => state.form.formLogin);
    const verifyDisplay = useSelector(state => state.loginPage.verifyDisplay);
    const history = useHistory()
    const onSubmit = (formData) => {
        props.verify(fromTel.values.tel, formData.code);
        history.push('/Profile');
    }

    return (
        <div style={{display: verifyDisplay}}>
            <VerifyReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default connect(null, {verify})(Verify);