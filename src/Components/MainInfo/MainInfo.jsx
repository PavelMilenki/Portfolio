import React from 'react';
import s from './MainInfo.module.scss'

export const MainInfo = () => {
    return (
        <div className={s.main} id={'main'}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <span className={s.hello}>Hello,</span>
                    <span>My name is Pavel <span>Milenki</span></span>
                    <h1>I am a front-end developer and javascript specialist.</h1>
                    <span className={s.description}>Check out my stack</span>
                    <span
                        className={s.description}>Feel free to take a look at my latest projects on the web portfolio.</span>
                    <span className={s.descriptionLast}>Send an email p.milenkii@gmail.com and ~let's talk.</span>
                </div>

            </div>
        </div>
    );
};

export default MainInfo;



