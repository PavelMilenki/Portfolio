import React from 'react';
import s from './Projects.module.scss'


export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.projectImg}>
                <img className={s.workScreen} src={props.img} alt={props.img}/>
                <div className={`${s.btnShow} ${s.watch}`}>
                    <a href={props.link} target='_blank' rel="noopener noreferrer">Watch</a>
                </div>
                <div className={`${s.btnShow} ${s.code}`}>
                    <a href={props.githubCode} target='_blank' rel="noopener noreferrer">Code</a>
                </div>
            </div>
            <div className={s.projectTitle}>{props.title}</div>
            <div className={s.description}>
               <b>Stack:</b> {props.stack}
            </div>
        </div>
    )
};







