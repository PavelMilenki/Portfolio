import React from 'react';
import s from './Skills.module.scss'
import Skill from "./Skill";
import css from "../../Helpers/Images/cssLogo.png"
import js from "../../Helpers/Images/jsLogo.png"
import react from "../../Helpers/Images/reactLogo.png"
import redux from "../../Helpers/Images/reduxLogo.png"
import git from "../../Helpers/Images/gitLogo.png"
import html5 from "../../Helpers/Images/html5Logo.png"
import sass from '../../Helpers/Images/sassLogo.png'
import typescript from '../../Helpers/Images/typescriptIcon.png'
import nodejs from '../../Helpers/Images/nodeJs.png'
import express from '../../Helpers/Images/express.png'
import mongodb from '../../Helpers/Images/mongodbLogo.png'

export const Skills = () => {

    const skills = [
        {
            id: 1,
            icon: html5,
            title: 'HTML5'

        },
        {
            id: 2,
            icon: css,
            title: 'CSS3'
        },
        {
            id: 3,
            icon: sass,
            title: 'SASS'
        },
        {
            id: 4,
            icon: git,
            title: 'Git'
        },
        {
            id: 5,
            icon: js,
            title: 'JavaScript'
        },
        {
            id: 6,
            icon: typescript,
            title: 'TypeScript'
        },
        {
            id: 7,
            icon: react,
            title: 'React.JS'
        },
        {
            id: 8,
            icon: redux,
            title: 'Redux'
        },{
            id: 9,
            icon: nodejs,
            title: 'Node.JS'
        },
        {
            id: 10,
            icon: express,
            title: 'Express.JS'
        },
        {
            id: 11,
            icon: mongodb,
            title: 'MongoDB'
        },

    ];

    return (
        <div className={s.skills} id={'skills'}>

                <div className={s.container}>
                  <h2>my stack</h2>
                    <div className={s.skillsWrapper}>
                        {skills.map(skill => {
                            return <Skill key={skill.id} icon={skill.icon} title={skill.title}
                                          description={skill.description}/>
                        })}
                    </div>
                </div>

        </div>
    );
};

export default Skills;
