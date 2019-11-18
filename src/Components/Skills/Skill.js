import React from 'react';
import s from './Skills.module.css'

export const Skill = (props) =>  {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img src={props.icon} alt={props.title}/>
            </div>
            <div>
            <h3 className={s.skillTitle}>{props.title}</h3>
            <div className={s.description}>{props.description}</div>
            </div>
        </div>
    );
};

export default Skill;
