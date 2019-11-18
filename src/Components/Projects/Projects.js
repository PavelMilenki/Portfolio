import React from 'react';
import s from './Projects.module.css'
import Title from "../Title/Title";
import {Project} from "./Project";
import testImg from "../Images/todoTest.jpg"
import sn from "../Images/sn.jpg"
import testImg2 from "../Images/likes.png"
import testImg3 from "../Images/facebook-3d-render_122462-2.jpg"
import Fade from "react-reveal/Fade";


export const Projects = () => {

    const projects = [
        {
            id: 1,
            title: 'Social Network',
            img: sn,
            link: 'https://anekens.github.io/social-network/#/profile',
            githubCode: 'https://github.com/Anekens/social-network',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ducimus, enim. Lorem ipsum dolor sit amet,'
        },
        {
            id: 2,
            title: 'ToDo List',
            img: testImg,
            link: 'https://anekens.github.io/social-network/#/profile',
            githubCode: 'https://github.com/Anekens/social-network',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ducimus, enim. Lorem ipsum dolor sit amet,'
        },
        {
            id: 3,
            title: 'Some 1',
            img: testImg2,
            link: 'https://anekens.github.io/social-network/#/profile',
            githubCode: 'https://github.com/Anekens/social-network',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ducimus, enim. Lorem ipsum dolor sit amet,'
        },
        {
            id: 4,
            title: 'Some 2',
            img: testImg3,
            link: 'https://anekens.github.io/social-network/#/profile',
            githubCode: 'https://github.com/Anekens/social-network',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Ducimus, enim. Lorem ipsum dolor sit amet,'
        }
    ];

    return (
        <div className={s.projects} id={'works'}>
            <Fade bottom>
                <div className={s.container}>
                    <Title title={'my works'}/>
                    <div className={s.projectsWrapper}>
                        {projects.map(p => {
                            return <Project key={p.id}
                                            title={p.title}
                                            img={p.img}
                                            link={p.link}
                                            githubCode={p.githubCode}
                                            description={p.description}/>
                        })}
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Projects;
