import React from 'react';
import s from './NavBar.module.css'

function NavBar() {
    return (
        <div className={s.navBar}>
            <a href="" className={s.link}>Главная</a>
            <a href="" className={s.link}>Скиллы</a>
            <a href="" className={s.link}>Проекты</a>
            <a href="" className={s.link}>Контакты</a>
        </div>
    );
}

export default NavBar;
