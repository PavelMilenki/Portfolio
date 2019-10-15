import React from 'react';
import s from './Skills.module.css'
import Title from "../Title/Title";

function Skills() {
    return (
        <div className={s.skills}>
            <div className={s.container}>
                <Title title={'Мои скилы'}/>
                <div className={s.skillsWrapper}>
                    <div className={s.skill}>
                        <div className={s.icon}>
                            <img src="https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png" alt=""/>
                        </div>
                        <span className={s.skillTitle}>HTML&CSS</span>
                        <span className={s.description}>Описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    </div>
                    <div className={s.skill}>
                        <div className={s.icon}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt=""/>
                        </div>
                        <span className={s.skillTitle}>JS</span>
                        <span className={s.description}>Описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    </div>
                    <div className={s.skill}>
                        <div className={s.icon}>
                            <img src="https://cdn.auth0.com/blog/react-js/react.png" alt=""/>
                        </div>
                        <span className={s.skillTitle}>React</span>
                        <span className={s.description}>Описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
