import React from 'react';
import s from './Skills.module.scss'

export const Skill = (props) =>  {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img src={props.icon} alt={props.title}/>
            </div>
            <div>
            <span className={s.skillTitle}>{props.title}</span>
            </div>
        </div>
    );
};

export default Skill;
