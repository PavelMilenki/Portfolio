import React from 'react';
import s from './Title.module.css'

function Title(props) {
    return (
        <div className={s.headerTitle}>
            <h2 className={s.headerTitle}>{props.title}</h2>
            <div className={s.line}></div>
        </div>
    );
}

export default Title;
