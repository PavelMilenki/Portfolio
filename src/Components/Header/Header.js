import React from 'react';
import s from './Header.module.css'
import NavBar from "./NavBar/NavBar";


export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <NavBar/>
            </div>
        </div>
    );
};

export default Header;
