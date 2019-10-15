import React from 'react';
import s from './Projects.module.css'
import Title from "../Title/Title";

function Projects() {
    return (
        <div className={s.projects}>
            <div className={s.container}>
                <Title title={'Мои проекты'}/>
                <div className={s.projectsWrapper}>
                    <div className={s.project}>
                        <div className={s.projectImg}>
                            <a className={s.btnShow} href="">Смотреть</a>
                        </div>
                        <span className={s.projectTitle}>To do list</span>
                        <span className={s.description}>тут будет описание Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
                    </div>
                    <div className={s.project}>
                        <div className={s.projectImg}>
                            <a className={s.btnShow} href="">Смотреть</a>
                        </div>
                        <span className={s.projectTitle}>Social network</span>
                        <span className={s.description}>тут будет описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    </div>
                    <div className={s.project}>
                        <div className={s.projectImg}>
                            <a className={s.btnShow} href="">Смотреть</a>
                        </div>
                        <span className={s.projectTitle}>Counter</span>
                        <span className={s.description}>тут будет описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
