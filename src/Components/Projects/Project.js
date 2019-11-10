import React from 'react';
import s from './Projects.module.css'


export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.projectImg}>
                <img className={s.workScreen} src={props.img} alt={props.img}/>
                <div className={s.btnShow}><a href={props.link} target='_blank'>Watch</a></div>
            </div>
            <div className={s.projectTitle}>{props.title}</div>
            <div className={s.description}>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ducimus, enim. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ducimus, enim
            </div>
        </div>

    )
};

