import React from 'react';
import s from './MainInfo.module.css'
import avatar from '../Images/Avatar.png'


export const MainInfo = () => {
    return (
        <div className={s.main} id={'main'}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <span>I am Pavel <span>Milenki</span></span>
                    <h1>I am a Front-end Developer</h1>
                </div>
                <div className={s.photo}>
                    <div className={s.img}><img src={avatar} alt="Avatar"/></div>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;



