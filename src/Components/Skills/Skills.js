import React from 'react';
import s from './Skills.module.css'
import Title from "../Title/Title";
import Skill from "./Skill";
import cssLogo from "../Images/cssLogo.png"
import jsLogo from "../Images/jsLogo.png"
import reactLogo from "../Images/reactLogo.png"
import reduxLogo from "../Images/reduxLogo.png"
import gitLogo from "../Images/gitLogo.png"
import html5Logo from "../Images/html5Logo.png"
import Fade from 'react-reveal/Fade';

export const Skills = () => {

    const skills = [
        {
            id: 1,
            icon: html5Logo,
            title: 'HTML5',
            description: 'Develop  HTML5 that meets accessibility and web browser standards for website.'
        },
        {
            id: 2,
            icon: cssLogo,
            title: 'CSS3',
            description: 'Used SASS, CSS Modules and library Classnames'
        },
        {
            id: 3,
            icon: jsLogo,
            title: 'JavaScript',
            description: ' Used ES6+, events, closures, prototype'
        },
        {
            id: 4,
            icon: reactLogo,
            title: 'React',
            description: 'Experience in using React JS components, Forms, Events, Keys, Router, plus Redux, Animations and Flux concept'
        },
        {
            id: 5,
            icon: reduxLogo,
            title: 'Redux',
            description: 'Created and used Reducers that received said Actions to modify the Store State. Used Middleware, Redux-Promise'
        },
        {
            id: 6,
            icon: gitLogo,
            title: 'Git',
            description: 'Experience in using GIT for pulling and committing the developed content from/to the GIT repository'
        }
    ];

    return (
        <div className={s.skills} id={'skills'}>
            <Fade bottom>
                <div className={s.container}>
                    <Title title={'my skills'}/>
                    <div className={s.skillsWrapper}>
                        {skills.map(skill => {
                            return <Skill key={skill.id} icon={skill.icon} title={skill.title}
                                          description={skill.description}/>
                        })}
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Skills;
