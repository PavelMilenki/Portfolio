import React from 'react';
import s from './Skills.module.css'
import Title from "../Title/Title";
import Skill from "./Skill";
import css from "../Images/css.png"
import js from "../Images/js.png"
import react from "../Images/React.png"
import redux from "../Images/redux.png"
import google from "../Images/Google.png"
import html from "../Images/html5.png"

export const Skills = () =>  {

    const skills = [
        {
            id: 1,
            icon: html,
            title: 'HTML5',
            description: 'Some description'
        },
        {
            id: 2,
            icon: css,
            title: 'CSS3',
            description: 'Some description'
        },
        {
            id: 3,
            icon: js,
            title: 'JavaScript',
            description: 'Some description'
        },
        {
            id: 4,
            icon: react,
            title: 'React',
            description: 'Some description'
        },
        {
            id: 5,
            icon: redux,
            title: 'Redux',
            description: 'Some description'
        },
        {
            id: 6,
            icon: google,
            title: 'Google',
            description: 'Some description'
        }
    ];

    return (
        <div className={s.skills} id={'skills'}>
            <div className={s.container}>
                <Title title={'my skills'}/>
                <div className={s.skillsWrapper}>
                    {skills.map(skill => {
                        return <Skill key={skill.id} icon={skill.icon} title={skill.title}
                                          description={skill.description} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
