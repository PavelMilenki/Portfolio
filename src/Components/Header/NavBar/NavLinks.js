import React from 'react';
import s from './NavBar.module.css'

export const NavLinks = (props) => {
    return (
        <div className={s.item}>
            <a href={props.link} target={props.target} className={s.activeLink}>{props.title}</a>
        </div>
    );
};

export default NavLinks;
