import React from 'react';
import s from './Title.module.css'


export const Title = (props) => {
    return (
        <div className={s.blockTitle}>
            <h2 className={s.title}>{props.title}</h2>
            <div className={s.line}></div>
        </div>
    );
};

export default Title;
