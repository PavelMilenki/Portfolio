import React from 'react';
import s from './Button.module.css'
import Title from "../Title/Title";

function Button(props) {
    return (
        <div className={s.btn}>
            <button className={s.btnSubmit} type='submit'>{props.title}</button>
        </div>
    );
}

export default Button;
