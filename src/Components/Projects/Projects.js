import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./Project";
import network from "../../Helpers/Images/network.png"
import todolist from "../../Helpers/Images/Todolist.jpg"
import booksStore from "../../Helpers/Images/BooksStore.jpg"
import counter from "../../Helpers/Images/counter.png"
import Fade from "react-reveal/Fade";


export const Projects = () => {

    const projects = [
        {
            id: 1,
            title: 'Social Network',
            img: network,
            link: 'https://pavelmilenki.github.io/SocialNetwork/',
            githubCode: 'https://github.com/PavelMilenki/SocialNetwork',
            description: 'A project of a Social Network, that used  stack: React, Redux, ' +
                'React-Redux, Hooks, Redux-Thunk, Axios, React-Router-Dom, Redux-Form, Reselect'
        },
        {
            id: 2,
            title: 'Books store',
            img: booksStore,
            link: 'https://pavelmilenki.github.io/BooksStore/',
            githubCode: 'https://github.com/PavelMilenki/BooksStore',
            description: 'A project of an online bookstore, that used  stack: React, React-Redux,' +
                ' Redux, Redux-Thunk, Axios, Lodash'
        },
        {
            id: 3,
            title: 'To Do List',
            img: todolist,
            link: 'https://pavelmilenki.github.io/ToDoList/',
            githubCode: 'https://github.com/PavelMilenki/ToDoList',
            description: 'A project of a to do list app, that used  stack: React, Redux, ' +
                'React-Redux, Hooks, Redux-Thunk, Axios'
        },
        {
            id: 4,
            title: 'Counter',
            img: counter,
            link: 'https://pavelmilenki.github.io/CounterWithRedux/',
            githubCode: 'https://github.com/PavelMilenki/CounterWithRedux',
            description: 'A project of a counter, that used  stack: React, Redux, ' +
                'React-Redux, Hooks'
        }
    ];

    return (
        <div className={s.projects} id={'works'}>
            <Fade bottom>
                <div className={s.container}>
                    <h2>web developer portfolio</h2>
                    <p>From Web Components  to React.JS, Redux and Node.JS. Check out my latest web software development portfolio projects.</p>
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
