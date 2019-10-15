import React from 'react';
import s from './Footer.module.css'
import Title from "../Title/Title";

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <Title title={'Pavel Milenki'}/>
                <div className={s.socialBlock}>
                    <div className={s.socialIcon}>
                        <a href="https://www.facebook.com"  target="_blank">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/1200px-Facebook_F_icon.svg.png"
                                alt=""/>
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href="https://www.te.com" target="_blank">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png"
                                alt=""/>
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href="https://github.com/" target="_blank">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfOOzQWkMtBSnU0pB0qolQn4iCiz1ZYTSKp2qCKEQj85_ZImM"
                                alt=""/>
                        </a>
                    </div>
                </div>
                <span>@2019 Все права защищены </span>
            </div>
        </div>
    );
}

export default Footer;
