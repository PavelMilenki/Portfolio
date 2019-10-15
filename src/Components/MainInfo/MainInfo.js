import React from 'react';
import s from './MainInfo.module.css'

function MainInfo() {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <span>I am Pavel <span>Milenki</span></span>
                    <h1>I am a Front-end Developer</h1>
                </div>
                <div className={s.photo}>
                    <div className={s.img}><img
                        src="https://upload.wikimedia.org/wikipedia/ru/8/8d/%D0%AD%D0%BD%D0%B0%D0%BA%D0%B8%D0%BD_%D0%A1%D0%BA%D0%B0%D0%B9%D1%83%D0%BE%D0%BA%D0%B5%D1%80.png"
                        alt="Photo"/></div>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default MainInfo;
