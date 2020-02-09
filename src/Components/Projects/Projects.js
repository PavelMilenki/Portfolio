import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./Project";
import network from "../../Helpers/Images/network.png"
import todolist from "../../Helpers/Images/Todolist.jpg"
import booksStore from "../../Helpers/Images/BooksStore.jpg"
import shortLink from "../../Helpers/Images/shortLink.jpg"


export const Projects = () => {

    const projects = [
        {
            id: 1,
            title: 'To do list',
            img: todolist,
            link: 'https://pavelmilenki.github.io/ToDoList/',
            githubCode: 'https://github.com/PavelMilenki/ToDoList'
        },

        {
            id: 2,
            title: 'Books store',
            img: booksStore,
            link: 'https://pavelmilenki.github.io/BooksStore/',
            githubCode: 'https://github.com/PavelMilenki/BooksStore'
        },
        {
            id: 3,
            title: 'Social network',
            img: network,
            link: 'https://pavelmilenki.github.io/SocialNetwork/',
            githubCode: 'https://github.com/PavelMilenki/SocialNetwork'
        },
        {
            id: 4,
            title: 'Shortener link',
            img: shortLink,
            link: 'https://shortlinksapp.herokuapp.com/',
            githubCode: 'https://github.com/PavelMilenki/shortener-link'
        }
    ];

    return (
        <div className={s.projects} id={'works'}>
            <div className={s.container}>
                <h2>web developer portfolio</h2>
                <p>From Web Components to React.JS, Redux and Node.JS. Check out my latest web software development
                    portfolio projects.</p>
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
        </div>
    );
};

export default Projects;