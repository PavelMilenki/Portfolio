import React from 'react';
import s from './Footer.module.css'

export const Contacts = (props) => {
    return (
        <div className={s.socialIcon}>
            <a className={s.activeLink} href={props.link} target="_blank">
                <img src={props.img} alt={props.title}/>
            </a>
        </div>
    );
};

export default Contacts;
