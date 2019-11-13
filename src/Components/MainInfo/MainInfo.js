import React from 'react';
import s from './MainInfo.module.css'
import avatar from '../Images/avatar.png'

export const MainInfo = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <span>I am Pavel <span>Milenki</span></span>
                    <h1>I am a Front-end Developer</h1>
                </div>
                <div className={s.photo}>
                    <div className={s.img}>
                        <img src={avatar} alt="Avatar"/>
                    </div>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;
