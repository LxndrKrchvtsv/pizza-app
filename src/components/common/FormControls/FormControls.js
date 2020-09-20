import React from 'react';
import Style from './FormControls.module.css';

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={Style.formControl + ' ' + (hasError ? Style.error : '')}>
            <div>
                <input className={Style.input} {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}