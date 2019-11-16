import React from 'react';
import s from './Header.module.css'
import NavBar from "./NavBar/NavBar";


export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                {/*<div className={s.contacts}>*/}
                {/*    <span>P.Milenkii@Gmail.com</span>*/}
                {/*    <span>+ 375 44 747 47 52</span>*/}
                {/*</div>*/}
                <NavBar/>
            </div>
        </div>
    );
};

export default Header;
