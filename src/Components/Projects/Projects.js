import React from 'react';
import s from './Projects.module.css'
import Title from "../Title/Title";
import {Project} from "./Project";
import testImg from "../Images/todoTest.jpg"


export const Projects = () => {

    const projects = [
        {
            id: 1,
            title: 'Social Network',
            img:testImg,
            link: 'https://anekens.github.io/social-network/#/profile'
        },
        {
            id: 2,
            title: 'ToDo List',
            img:testImg,
            link: 'https://anekens.github.io/social-network/#/profile'
        },
        {
            id: 3,
            title: 'Some 1',
            img:testImg,
            link: 'https://anekens.github.io/social-network/#/profile'
        },
        {
            id: 4,
            title: 'Some 2',
            img:testImg,
            link: 'https://anekens.github.io/social-network/#/profile'
        }
    ];
    return (
        <div className={s.projects} id={'works'}>
            <div className={s.container}>
                <Title title={'my works'}/>
                <div className={s.projectsWrapper}>
                    {projects.map(p => {
                        return <Project key={p.id} title={p.title} img={p.img} link={p.link}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;

{/*<div className={s.project}>*/
}
{/*    <div className={s.projectImg}>*/
}
{/*        <a className={s.btnShow} href="">Смотреть</a>*/
}
{/*    </div>*/
}
{/*    <span className={s.projectTitle}>To do list</span>*/
}
{/*    <span className={s.description}>тут будет описание Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>*/
}
{/*</div>*/
}
{/*<div className={s.project}>*/
}
{/*    <div className={s.projectImg}>*/
}
{/*    <a className={s.btnShow} href="">Смотреть</a>*/
}
{/*</div>*/
}
{/*<span className={s.projectTitle}>Social network</span>*/
}
{/*<span className={s.description}>тут будет описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>*/
}
{/*</div>*/
}
{/*<div className={s.project}>*/
}
{/*<div className={s.projectImg}>*/
}
{/*<a className={s.btnShow} href="">Смотреть</a>*/
}
{/*</div>*/
}
{/*<span className={s.projectTitle}>Counter</span>*/
}
{/*<span className={s.description}>тут будет описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>*/
}
{/*</div>*/
}