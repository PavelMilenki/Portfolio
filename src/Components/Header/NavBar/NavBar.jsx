import React from 'react';
import s from './NavBar.module.css'


export const NavBar = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <a href={'#'} className={s.activeLink}>Main</a>
            </div>
            <div className={s.item}>
                <a href={'#skills'} className={s.activeLink}>Skills</a>
            </div>
            <div className={s.item}>
                <a href={'#works'} className={s.activeLink}>My works</a>
            </div>
            <div className={s.item}>
                <a href={'#contacts'} className={s.activeLink}>Contacts</a>
            </div>
        </div>
    );
};

export default NavBar;
